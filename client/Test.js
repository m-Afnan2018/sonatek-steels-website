// require("dotenv").config();
const axios = require("axios");
const XLSX = require("xlsx");
const readline = require("readline");
const path = require("path");
const fs = require("fs");

// ─── Config ───────────────────────────────────────────────────────────────────
// const API_KEY = process.env.GOOGLE_API_KEY;
const API_KEY = 'AIzaSyCv3WkeuwR4qXzUbuLl3ObqTjrTvBRy_9c';
// const API_KEY = process.env.GOOGLE_API_KEY;
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
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    const res = await axios.get(url, {
        params: { address: location, key: API_KEY },
    });

    if (res.data.status !== "OK" || !res.data.results.length) {
        throw new Error(`Could not geocode location: "${location}" (${res.data.status})`);
    }

    const { lat, lng } = res.data.results[0].geometry.location;
    const formattedAddress = res.data.results[0].formatted_address;
    return { lat, lng, formattedAddress };
}

// ─── Fetch one page of Nearby Search results ──────────────────────────────────
async function fetchPage(query, lat, lng, radiusMeters, pageToken = null) {
    const params = {
        key: API_KEY,
        keyword: query,
        location: `${lat},${lng}`,
        radius: radiusMeters,
    };
    if (pageToken) params.pagetoken = pageToken;

    const res = await axios.get(`${BASE_URL}/nearbysearch/json`, { params });
    return res.data; // { results, next_page_token, status }
}

// ─── Fetch full Place Details for one place_id ────────────────────────────────
async function fetchDetails(placeId) {
    const fields = [
        "name",
        "formatted_address",
        "formatted_phone_number",
        "international_phone_number",
        "website",
        "rating",
        "user_ratings_total",
        "opening_hours",
        "geometry",
        "url",
        "types",
        "business_status",
    ].join(",");

    const res = await axios.get(`${BASE_URL}/details/json`, {
        params: { place_id: placeId, fields, key: API_KEY },
    });

    return res.data.result || {};
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

        // Google requires a short delay before using next_page_token
        log("  Waiting 2s before next page (Google requirement)...", "info");
        await sleep(2000);
        page++;
    }

    return placeIds;
}

// ─── Build a clean row object from Place Details ──────────────────────────────
function buildRow(detail, index) {
    const isOpen =
        detail.opening_hours?.open_now === true
            ? "Yes"
            : detail.opening_hours?.open_now === false
                ? "No"
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

    // ── Main data sheet ──
    const ws = XLSX.utils.json_to_sheet(rows);

    // Column widths
    const colWidths = [
        { wch: 4 },   // #
        { wch: 35 },  // Name
        { wch: 16 },  // Business Status
        { wch: 45 },  // Address
        { wch: 18 },  // Phone
        { wch: 35 },  // Website
        { wch: 8 },   // Rating
        { wch: 14 },  // Total Reviews
        { wch: 10 },  // Open Now
        { wch: 30 },  // Business Type
        { wch: 12 },  // Latitude
        { wch: 12 },  // Longitude
        { wch: 45 },  // Google Maps URL
    ];
    ws["!cols"] = colWidths;

    XLSX.utils.book_append_sheet(wb, ws, "Results");

    // ── Summary sheet ──
    const summaryData = [
        ["Search Report"],
        [],
        ["Search Query", query],
        ["Location", location],
        ["Radius", `${radiusKm} km`],
        ["Total Results", rows.length],
        ["Generated On", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
        [],
        ["Rated Businesses", rows.filter((r) => r.Rating).length],
        ["With Phone Numbers", rows.filter((r) => r.Phone).length],
        ["With Websites", rows.filter((r) => r.Website).length],
        [
            "Average Rating",
            rows.filter((r) => r.Rating).length
                ? (
                    rows.reduce((s, r) => s + (parseFloat(r.Rating) || 0), 0) /
                    rows.filter((r) => r.Rating).length
                ).toFixed(2)
                : "N/A",
        ],
    ];

    const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
    wsSummary["!cols"] = [{ wch: 20 }, { wch: 40 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");

    // ── Output file ──
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
        log('GOOGLE_API_KEY not found. Create a .env file with:\nGOOGLE_API_KEY=AIzaSyCv3WkeuwR4qXzUbuLl3ObqTjrTvBRy_9c', "error");
        process.exit(1);
    }

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    let query, locationInput, radiusKm;

    // Accept CLI args or prompt interactively
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

    const radiusMeters = Math.min(radiusKm * 1000, 50000); // Google max = 50km

    // Output directory
    const outputDir = path.join(__dirname, "output");
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    try {
        // 1. Geocode
        log(`Geocoding "${locationInput}"...`, "info");
        const { lat, lng, formattedAddress } = await geocodeLocation(locationInput);
        log(`Location resolved → ${formattedAddress} (${lat}, ${lng})`, "success");

        // 2. Collect place IDs
        log(`\nSearching for "${query}" within ${radiusKm}km...`, "fetch");
        const placeIds = await collectPlaceIds(query, lat, lng, radiusMeters);

        if (!placeIds.length) {
            log("No places found. Try a broader query or larger radius.", "warn");
            process.exit(0);
        }

        log(`\nFound ${placeIds.length} places. Fetching details...\n`, "success");

        // 3. Fetch details for each place
        const rows = [];
        for (let i = 0; i < placeIds.length; i++) {
            process.stdout.write(`  Fetching details ${i + 1}/${placeIds.length}...\r`);
            try {
                const detail = await fetchDetails(placeIds[i]);
                rows.push(buildRow(detail, i));
                await sleep(100); // gentle rate limiting
            } catch (err) {
                log(`  Skipped place ${i + 1}: ${err.message}`, "warn");
            }
        }

        console.log(); // newline after progress

        // 4. Export
        log(`\nExporting ${rows.length} results to Excel...`, "info");
        const filepath = exportToExcel(rows, query, formattedAddress, radiusKm, outputDir);

        // 5. Summary
        console.log("\n══════════════════════════════════════════");
        log(`Done! File saved to:\n   ${filepath}`, "success");
        console.log("══════════════════════════════════════════");
        console.log(`  Total results   : ${rows.length}`);
        console.log(`  With phone      : ${rows.filter((r) => r.Phone).length}`);
        console.log(`  With website    : ${rows.filter((r) => r.Website).length}`);
        console.log(`  Avg rating      : ${rows.filter((r) => r.Rating).length
                ? (rows.reduce((s, r) => s + (parseFloat(r.Rating) || 0), 0) / rows.filter((r) => r.Rating).length).toFixed(2)
                : "N/A"
            }`);
        console.log("══════════════════════════════════════════\n");

    } catch (err) {
        log(`Fatal error: ${err.message}`, "error");
        process.exit(1);
    }
}

main();