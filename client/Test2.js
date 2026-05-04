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
async function fetchPage(query, lat, lng, radiusMeters, pageToken = null) {
    const params = { key: API_KEY, keyword: query, location: `${lat},${lng}`, radius: radiusMeters };
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

        // Check mailto: links first (most reliable)
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

// ─── Collect up to MAX_RESULTS place IDs via pagination ───────────────────────
async function collectPlaceIds(query, lat, lng, radiusMeters) {
    const placeIds = [];
    let pageToken = null;
    let page = 1;

    while (placeIds.length < MAX_RESULTS) {
        log(`Fetching page ${page} of search results...`, "fetch");

        const data = await fetchPage(query, lat, lng, radiusMeters, pageToken);

        if (data.status === "ZERO_RESULTS" && page === 1) {
            log("No results found for this query + location.", "warn");
            return [];
        }
        if (!["OK", "ZERO_RESULTS"].includes(data.status)) {
            throw new Error(`Places API error: ${data.status} — ${data.error_message || ""}`);
        }

        for (const place of data.results) {
            if (placeIds.length >= MAX_RESULTS) break;
            placeIds.push(place.place_id);
        }

        log(`  → Collected ${placeIds.length} places so far`, "info");

        pageToken = data.next_page_token;
        if (!pageToken || placeIds.length >= MAX_RESULTS) break;

        log("  Waiting 2s before next page (Google requirement)...", "info");
        await sleep(2000);
        page++;
    }

    return placeIds;
}

// ─── Build a clean row object from Place Details ──────────────────────────────
function buildRow(detail, index, email = "") {
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

    const summaryData = [
        ["Search Report"],
        [],
        ["Search Query", query],
        ["Location", location],
        ["Radius", `${radiusKm} km`],
        ["Total Results", rows.length],
        ["Generated On", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
        [],
        ["With Phone Numbers", rows.filter((r) => r.Phone).length],
        ["With Email", rows.filter((r) => r.Email).length],
        ["With Websites", rows.filter((r) => r.Website).length],
        ["Rated Businesses", ratedRows.length],
        ["Average Rating", avgRating],
    ];

    const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
    wsSummary["!cols"] = [{ wch: 22 }, { wch: 40 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `${sanitizeFilename(query)}_${sanitizeFilename(location.split(",")[0])}_${timestamp}.xlsx`;
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
        query = process.argv[2];
        locationInput = process.argv[3];
        radiusKm = parseFloat(process.argv[4]);
        rl.close();
        log(`Running with: "${query}" | "${locationInput}" | ${radiusKm}km`, "info");
    } else {
        query = await ask(rl, "🔎 Search Query  (e.g. Doctors, CA firm): ");
        locationInput = await ask(rl, "📍 Location      (e.g. Connaught Place, Delhi): ");
        const radiusInput = await ask(rl, "📏 Radius in km  (e.g. 10, 30, 50): ");
        radiusKm = parseFloat(radiusInput);
        rl.close();
    }

    if (!query || !locationInput || isNaN(radiusKm)) {
        log("Invalid inputs. Exiting.", "error");
        process.exit(1);
    }

    const radiusMeters = Math.min(radiusKm * 1000, 50000);
    const outputDir = path.join(__dirname, "output");
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    try {
        // 1. Geocode
        log(`Geocoding "${locationInput}"...`, "info");
        const { lat, lng, formattedAddress } = await geocodeLocation(locationInput);
        log(`Resolved → ${formattedAddress} (${lat}, ${lng})`, "success");

        // 2. Collect place IDs
        log(`\nSearching for "${query}" within ${radiusKm}km...`, "fetch");
        const placeIds = await collectPlaceIds(query, lat, lng, radiusMeters);

        if (!placeIds.length) {
            log("No places found. Try a broader query or larger radius.", "warn");
            process.exit(0);
        }

        log(`\nFound ${placeIds.length} places. Fetching details + emails...\n`, "success");

        // 3. Fetch details + scrape emails
        const rows = [];
        for (let i = 0; i < placeIds.length; i++) {
            process.stdout.write(`  [${i + 1}/${placeIds.length}] Fetching details...              \r`);
            try {
                const detail = await fetchDetails(placeIds[i]);
                let email = "";
                if (detail.website) {
                    process.stdout.write(`  [${i + 1}/${placeIds.length}] Scraping email from website...\r`);
                    email = await scrapeEmailFromWebsite(detail.website);
                }
                rows.push(buildRow(detail, i, email));
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
        console.log("\n══════════════════════════════════════════");
        log(`Saved to:\n   ${filepath}`, "success");
        console.log("══════════════════════════════════════════");
        console.log(`  Total results   : ${rows.length}`);
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