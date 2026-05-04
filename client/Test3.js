// require("dotenv").config();
const axios = require("axios");
const XLSX = require("xlsx");
const cheerio = require("cheerio");
const readline = require("readline");
const path = require("path");
const fs = require("fs");

// ─── Config ───────────────────────────────────────────────────────────────────
// const API_KEY = process.env.GOOGLE_API_KEY;
const API_KEY = 'AIzaSyCv3WkeuwR4qXzUbuLl3ObqTjrTvBRy_9c';
const MAX_RESULTS = 100;
const BASE_URL = "https://maps.googleapis.com/maps/api/place";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9_\-]/gi, "_").toLowerCase();
}

function log(msg, type = "info") {
  const icons = { info: "ℹ", success: "✅", warn: "⚠️", error: "❌", fetch: "🔍" };
  console.log(`${icons[type] || "•"} ${msg}`);
}

// ─── Haversine formula — exact distance in km between two coordinates ─────────
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Geocode location string → { lat, lng } ───────────────────────────────────
async function geocodeLocation(location) {
  const res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: { address: location, key: API_KEY },
  });
  if (res.data.status !== "OK" || !res.data.results.length) {
    throw new Error(`Could not geocode: "${location}" (${res.data.status})`);
  }
  const { lat, lng } = res.data.results[0].geometry.location;
  return { lat, lng, formattedAddress: res.data.results[0].formatted_address };
}

// ─── Fetch one page of Nearby Search results ──────────────────────────────────
// We always pass 50000m (max) to Google so it casts a wide net,
// then we hard-filter by real distance using Haversine below.
async function fetchPage(query, lat, lng, pageToken = null) {
  const params = {
    key: API_KEY,
    keyword: query,
    location: `${lat},${lng}`,
    radius: 50000, // always max — Haversine does the real filtering
  };
  if (pageToken) params.pagetoken = pageToken;
  const res = await axios.get(`${BASE_URL}/nearbysearch/json`, { params });
  return res.data;
}

// ─── Fetch full Place Details for one place_id ────────────────────────────────
async function fetchDetails(placeId) {
  const fields = [
    "name", "formatted_address", "formatted_phone_number",
    "international_phone_number", "website", "rating",
    "user_ratings_total", "opening_hours", "geometry",
    "url", "types", "business_status",
  ].join(",");

  const res = await axios.get(`${BASE_URL}/details/json`, {
    params: { place_id: placeId, fields, key: API_KEY },
  });
  return res.data.result || {};
}

// ─── Scrape email from a website ─────────────────────────────────────────────
async function scrapeEmailFromWebsite(websiteUrl) {
  try {
    const res = await axios.get(websiteUrl, {
      timeout: 6000,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      maxRedirects: 3,
    });

    const $ = cheerio.load(res.data);

    // mailto: links first (most reliable)
    const mailtoEmails = [];
    $("a[href^='mailto:']").each((_, el) => {
      const email = $(el).attr("href").replace("mailto:", "").split("?")[0].trim();
      if (email) mailtoEmails.push(email);
    });
    if (mailtoEmails.length) return [...new Set(mailtoEmails)].join(", ");

    // Fallback: regex scan on raw HTML
    const emailRegex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
    const matches = res.data.match(emailRegex) || [];
    const filtered = matches.filter(
      (e) =>
        !e.includes("example.com") &&
        !e.includes("sentry.io") &&
        !e.includes("wixpress") &&
        !e.includes("schema.org") &&
        !e.includes("w3.org") &&
        !e.endsWith(".png") &&
        !e.endsWith(".jpg")
    );
    return [...new Set(filtered)].slice(0, 3).join(", ");
  } catch {
    return "";
  }
}

// ─── Collect place candidates with real distance filtering ────────────────────
// Strategy:
//   • Pull up to 5 pages from Google (max 100 raw results)
//   • For each result, compute exact distance from center via Haversine
//   • Only keep results within the user's actual radius
//   • Stop once we have MAX_RESULTS qualifying candidates
async function collectPlaceCandidates(query, centerLat, centerLng, radiusKm) {
  const candidates = []; // { place_id, distanceKm }
  const seenIds = new Set();
  let pageToken = null;
  let page = 1;

  while (candidates.length < MAX_RESULTS) {
    log(`Fetching page ${page} of search results...`, "fetch");

    const data = await fetchPage(query, centerLat, centerLng, pageToken);

    if (data.status === "ZERO_RESULTS" && page === 1) {
      log("No results found for this query + location.", "warn");
      return [];
    }
    if (!["OK", "ZERO_RESULTS"].includes(data.status)) {
      throw new Error(`Places API error: ${data.status} — ${data.error_message || ""}`);
    }

    let withinRadius = 0;
    let outsideRadius = 0;

    for (const place of data.results) {
      if (seenIds.has(place.place_id)) continue;
      seenIds.add(place.place_id);

      const placeLat = place.geometry?.location?.lat;
      const placeLng = place.geometry?.location?.lng;

      if (placeLat == null || placeLng == null) continue;

      const distKm = haversineKm(centerLat, centerLng, placeLat, placeLng);

      if (distKm <= radiusKm) {
        candidates.push({ place_id: place.place_id, distanceKm: distKm });
        withinRadius++;
        if (candidates.length >= MAX_RESULTS) break;
      } else {
        outsideRadius++;
      }
    }

    log(
      `  Page ${page}: ${withinRadius} within ${radiusKm}km, ${outsideRadius} outside (filtered out). Total: ${candidates.length}`,
      "info"
    );

    pageToken = data.next_page_token;

    // Stop if no more pages or we have enough
    if (!pageToken || candidates.length >= MAX_RESULTS) break;

    // Google requires delay between pages
    log("  Waiting 2s before next page...", "info");
    await sleep(2000);
    page++;
  }

  // Sort by distance — closest first
  candidates.sort((a, b) => a.distanceKm - b.distanceKm);
  return candidates;
}

// ─── Build a clean row object from Place Details ──────────────────────────────
function buildRow(detail, index, email = "", distanceKm = null) {
  const isOpen =
    detail.opening_hours?.open_now === true ? "Yes"
    : detail.opening_hours?.open_now === false ? "No"
    : "Unknown";

  const types = (detail.types || [])
    .map((t) => t.replace(/_/g, " "))
    .filter((t) => t !== "point of interest" && t !== "establishment")
    .join(", ");

  return {
    "#": index + 1,
    Name: detail.name || "",
    "Distance (km)": distanceKm !== null ? parseFloat(distanceKm.toFixed(2)) : "",
    "Business Status": (detail.business_status || "").replace(/_/g, " "),
    Address: detail.formatted_address || "",
    Phone: detail.formatted_phone_number || detail.international_phone_number || "",
    Email: email,
    Website: detail.website || "",
    Rating: detail.rating || "",
    "Total Reviews": detail.user_ratings_total || 0,
    "Open Now": isOpen,
    "Business Type": types,
    Latitude: detail.geometry?.location?.lat || "",
    Longitude: detail.geometry?.location?.lng || "",
    "Google Maps URL": detail.url || "",
  };
}

// ─── Export rows to Excel ─────────────────────────────────────────────────────
function exportToExcel(rows, query, location, radiusKm, outputDir) {
  const wb = XLSX.utils.book_new();

  const ws = XLSX.utils.json_to_sheet(rows);
  ws["!cols"] = [
    { wch: 4 },   // #
    { wch: 35 },  // Name
    { wch: 14 },  // Distance
    { wch: 16 },  // Business Status
    { wch: 45 },  // Address
    { wch: 18 },  // Phone
    { wch: 35 },  // Email
    { wch: 35 },  // Website
    { wch: 8 },   // Rating
    { wch: 14 },  // Total Reviews
    { wch: 10 },  // Open Now
    { wch: 30 },  // Business Type
    { wch: 12 },  // Latitude
    { wch: 12 },  // Longitude
    { wch: 45 },  // Google Maps URL
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Results");

  // ── Summary sheet ──
  const ratedRows = rows.filter((r) => r.Rating);
  const avgRating = ratedRows.length
    ? (ratedRows.reduce((s, r) => s + (parseFloat(r.Rating) || 0), 0) / ratedRows.length).toFixed(2)
    : "N/A";

  const distances = rows.map((r) => r["Distance (km)"]).filter((d) => d !== "");
  const avgDist = distances.length
    ? (distances.reduce((s, d) => s + d, 0) / distances.length).toFixed(2)
    : "N/A";
  const maxDist = distances.length ? Math.max(...distances).toFixed(2) : "N/A";

  const summaryData = [
    ["Search Report"],
    [],
    ["Search Query", query],
    ["Center Location", location],
    ["Radius Filter", `${radiusKm} km (hard filtered by Haversine)`],
    ["Total Results", rows.length],
    ["Generated On", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
    [],
    ["Closest Result", distances.length ? `${Math.min(...distances).toFixed(2)} km` : "N/A"],
    ["Farthest Result", `${maxDist} km`],
    ["Average Distance", `${avgDist} km`],
    [],
    ["With Phone Numbers", rows.filter((r) => r.Phone).length],
    ["With Email", rows.filter((r) => r.Email).length],
    ["With Websites", rows.filter((r) => r.Website).length],
    ["Rated Businesses", ratedRows.length],
    ["Average Rating", avgRating],
  ];

  const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
  wsSummary["!cols"] = [{ wch: 26 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");

  const timestamp = new Date().toISOString().slice(0, 10);
  const filename = `${sanitizeFilename(query)}_${sanitizeFilename(location.split(",")[0])}_${radiusKm}km_${timestamp}.xlsx`;
  const filepath = path.join(outputDir, filename);
  XLSX.writeFile(wb, filepath);
  return filepath;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n╔══════════════════════════════════════════╗");
  console.log("║     📍 Google Places Lead Scraper        ║");
  console.log("╚══════════════════════════════════════════╝\n");

  if (!API_KEY) {
    log("GOOGLE_API_KEY not found. Create a .env file with:\nGOOGLE_API_KEY=your_key_here", "error");
    process.exit(1);
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let query, locationInput, radiusKm;

  if (process.argv.length >= 5) {
    query         = process.argv[2];
    locationInput = process.argv[3];
    radiusKm      = parseFloat(process.argv[4]);
    rl.close();
    log(`Running with: "${query}" | "${locationInput}" | ${radiusKm}km`, "info");
  } else {
    query         = await ask(rl, "🔎 Search Query  (e.g. Doctors, CA firm): ");
    locationInput = await ask(rl, "📍 Location      (e.g. Connaught Place, Delhi): ");
    const radiusInput = await ask(rl, "📏 Radius in km  (e.g. 5, 10, 30, 50): ");
    radiusKm      = parseFloat(radiusInput);
    rl.close();
  }

  if (!query || !locationInput || isNaN(radiusKm)) {
    log("Invalid inputs. Exiting.", "error");
    process.exit(1);
  }

  const outputDir = path.join(__dirname, "output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  try {
    // 1. Geocode center point
    log(`Geocoding "${locationInput}"...`, "info");
    const { lat, lng, formattedAddress } = await geocodeLocation(locationInput);
    log(`Center → ${formattedAddress} (${lat}, ${lng})`, "success");
    log(`Radius → ${radiusKm} km (hard filtered, not just a hint)`, "info");

    // 2. Collect candidates with real distance filtering
    log(`\nSearching for "${query}"...`, "fetch");
    const candidates = await collectPlaceCandidates(query, lat, lng, radiusKm);

    if (!candidates.length) {
      log(`No places found within ${radiusKm}km. Try increasing the radius.`, "warn");
      process.exit(0);
    }

    log(`\n${candidates.length} places confirmed within ${radiusKm}km. Fetching details + emails...\n`, "success");

    // 3. Fetch details + scrape emails
    const rows = [];
    for (let i = 0; i < candidates.length; i++) {
      const { place_id, distanceKm } = candidates[i];
      process.stdout.write(`  [${i + 1}/${candidates.length}] Fetching details...              \r`);
      try {
        const detail = await fetchDetails(place_id);
        let email = "";
        if (detail.website) {
          process.stdout.write(`  [${i + 1}/${candidates.length}] Scraping email from website...\r`);
          email = await scrapeEmailFromWebsite(detail.website);
        }
        rows.push(buildRow(detail, i, email, distanceKm));
        await sleep(150);
      } catch (err) {
        log(`  Skipped place ${i + 1}: ${err.message}`, "warn");
      }
    }

    console.log();

    // 4. Export
    log(`\nExporting ${rows.length} results to Excel...`, "info");
    const filepath = exportToExcel(rows, query, formattedAddress, radiusKm, outputDir);

    // 5. Summary
    const distances = rows.map((r) => r["Distance (km)"]).filter((d) => d !== "");
    console.log("\n══════════════════════════════════════════");
    log(`Saved to:\n   ${filepath}`, "success");
    console.log("══════════════════════════════════════════");
    console.log(`  Total results   : ${rows.length}`);
    console.log(`  Radius used     : ${radiusKm} km (exact)`);
    console.log(`  Closest         : ${distances.length ? Math.min(...distances).toFixed(2) + " km" : "N/A"}`);
    console.log(`  Farthest        : ${distances.length ? Math.max(...distances).toFixed(2) + " km" : "N/A"}`);
    console.log(`  With phone      : ${rows.filter((r) => r.Phone).length}`);
    console.log(`  With email      : ${rows.filter((r) => r.Email).length}`);
    console.log(`  With website    : ${rows.filter((r) => r.Website).length}`);
    const rated = rows.filter((r) => r.Rating);
    console.log(`  Avg rating      : ${rated.length ? (rated.reduce((s, r) => s + parseFloat(r.Rating), 0) / rated.length).toFixed(2) : "N/A"}`);
    console.log("══════════════════════════════════════════\n");

  } catch (err) {
    log(`Fatal error: ${err.message}`, "error");
    process.exit(1);
  }
}

main();