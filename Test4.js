// require("dotenv").config();
const axios = require("axios");
const XLSX = require("xlsx");
const cheerio = require("cheerio");
const readline = require("readline");
const path = require("path");
const fs = require("fs");

// ─── Config ───────────────────────────────────────────────────────────────────
const API_KEY = 'AIzaSyCv3WkeuwR4qXzUbuLl3ObqTjrTvBRy_9c';
const MAX_RESULTS = 100;
const BASE_URL = "https://maps.googleapis.com/maps/api/place";

// ─── Keyword Suggestion Map ───────────────────────────────────────────────────
// Maps common user-friendly terms → best Google Places keywords/types
// Google Places works on specific category terms, not free text.
// Using the right keyword dramatically improves result quality.
const KEYWORD_MAP = {
    // ── Healthcare ──
    doctor: "clinic",
    doctors: "clinic",
    physician: "clinic",
    hospital: "hospital",
    hospitals: "hospital",
    clinic: "clinic",
    clinics: "clinic",
    dentist: "dentist",
    dentists: "dentist",
    dental: "dental clinic",
    "dental clinic": "dental clinic",
    pharmacy: "pharmacy",
    chemist: "pharmacy",
    "medical store": "pharmacy",
    physiotherapy: "physiotherapist",
    physiotherapist: "physiotherapist",
    dermatologist: "dermatologist",
    "skin clinic": "skin clinic",
    "eye clinic": "eye clinic",
    optician: "optician",
    "nursing home": "nursing home",
    "diagnostic center": "diagnostic center",
    pathology: "pathology lab",
    "pathology lab": "pathology lab",

    // ── Finance & Legal ──
    "ca firm": "chartered accountant",
    "ca office": "chartered accountant",
    "chartered accountant": "chartered accountant",
    accountant: "accountant",
    "tax consultant": "tax consultant",
    "income tax": "income tax consultant",
    "gst consultant": "GST consultant",
    lawyer: "law firm",
    lawyers: "law firm",
    advocate: "advocate",
    "law firm": "law firm",
    "legal firm": "law firm",
    "financial advisor": "financial advisor",
    "insurance agent": "insurance agent",
    insurance: "insurance agency",
    bank: "bank",
    banks: "bank",
    "loan agent": "loan agent",

    // ── IT & Digital ──
    "it company": "software company",
    "software company": "software company",
    "web design": "web design company",
    "digital marketing": "digital marketing agency",
    "digital agency": "digital marketing agency",
    "seo agency": "SEO company",
    "app development": "mobile app development",
    "software development": "software development company",
    "it services": "IT services",

    // ── Education ──
    school: "school",
    schools: "school",
    college: "college",
    colleges: "college",
    university: "university",
    coaching: "coaching institute",
    "coaching institute": "coaching institute",
    tuition: "tuition center",
    "tuition center": "tuition center",
    "play school": "preschool",
    preschool: "preschool",
    "music school": "music school",
    "dance academy": "dance academy",

    // ── Food & Restaurant ──
    restaurant: "restaurant",
    restaurants: "restaurant",
    cafe: "cafe",
    cafes: "cafe",
    "coffee shop": "coffee shop",
    hotel: "hotel",
    hotels: "hotel",
    bakery: "bakery",
    "fast food": "fast food restaurant",
    "food delivery": "restaurant",
    catering: "catering service",
    "sweet shop": "sweet shop",
    dhaba: "dhaba",
    "ice cream": "ice cream shop",

    // ── Real Estate ──
    "real estate": "real estate agency",
    "property dealer": "real estate agency",
    "property agent": "real estate agent",
    builder: "real estate developer",
    "construction company": "construction company",
    architect: "architect",
    "interior designer": "interior designer",
    "interior design": "interior design",

    // ── Retail & Shopping ──
    "mobile shop": "mobile phone shop",
    "phone shop": "mobile phone shop",
    electronics: "electronics store",
    "electronics store": "electronics store",
    "clothing store": "clothing store",
    "garment shop": "clothing store",
    "furniture shop": "furniture store",
    "furniture store": "furniture store",
    "grocery store": "grocery store",
    supermarket: "supermarket",
    jewellery: "jewellery store",
    "jewellery store": "jewellery store",
    "shoe shop": "shoe store",
    "book shop": "book store",
    stationery: "stationery store",

    // ── Automotive ──
    "car dealer": "car dealer",
    "car showroom": "car dealer",
    "bike dealer": "motorcycle dealer",
    "two wheeler": "motorcycle dealer",
    "car service": "auto repair shop",
    "car garage": "auto repair shop",
    "car wash": "car wash",
    "driving school": "driving school",
    "petrol pump": "gas station",
    "fuel station": "gas station",

    // ── Beauty & Wellness ──
    salon: "beauty salon",
    salons: "beauty salon",
    "beauty salon": "beauty salon",
    "hair salon": "hair salon",
    "beauty parlour": "beauty salon",
    parlour: "beauty salon",
    spa: "spa",
    gym: "gym",
    "fitness center": "gym",
    "yoga studio": "yoga studio",
    yoga: "yoga studio",

    // ── Industrial & B2B ──
    manufacturer: "manufacturer",
    factory: "factory",
    "steel company": "steel company",
    "steel dealer": "steel dealer",
    "construction material": "building materials supplier",
    "packaging company": "packaging company",
    "printing press": "printing press",
    "event management": "event management company",
    "logistics company": "logistics company",
    "courier service": "courier service",
    "security agency": "security agency",
    "cleaning service": "cleaning service",
    "pest control": "pest control service",

    // ── Hospitality & Travel ──
    "travel agency": "travel agency",
    "tour operator": "tour operator",
    "visa consultant": "visa consultant",
    "guest house": "guest house",
    resort: "resort",
    "banquet hall": "banquet hall",
    "wedding venue": "wedding venue",

    // ── Professional Services ──
    "chartered engineer": "engineering consultant",
    "placement agency": "placement agency",
    "recruitment agency": "recruitment agency",
    "hr consultant": "HR consultant",
    "business consultant": "business consultant",
    "management consultant": "management consulting",
    "pr agency": "public relations agency",
    "advertising agency": "advertising agency",
};

function resolveKeyword(input) {
    const lower = input.trim().toLowerCase();
    if (KEYWORD_MAP[lower]) {
        const resolved = KEYWORD_MAP[lower];
        if (resolved !== lower) {
            log(`Keyword mapped: "${input}" → "${resolved}"`, "info");
        }
        return resolved;
    }
    // No match — use as-is but warn
    log(`No keyword mapping found for "${input}" — using as-is. Results may vary.`, "warn");
    return input.trim();
}

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

// ─── Text Search by area (no radius) ─────────────────────────────────────────
// Uses Text Search API with "keyword in area" query — Google handles
// the geographic boundary naturally using the area name itself.
async function fetchTextSearchPage(keyword, area, pageToken = null) {
    const params = {
        key: API_KEY,
        query: `${keyword} in ${area}`,
    };
    if (pageToken) params.pagetoken = pageToken;
    const res = await axios.get(`${BASE_URL}/textsearch/json`, { params });
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

// ─── Collect place IDs via paginated Text Search ──────────────────────────────
async function collectPlaceIds(keyword, area) {
    const placeIds = [];
    const seenIds = new Set();
    let pageToken = null;
    let page = 1;

    while (placeIds.length < MAX_RESULTS) {
        log(`Fetching page ${page}...`, "fetch");

        const data = await fetchTextSearchPage(keyword, area, pageToken);

        if (data.status === "ZERO_RESULTS" && page === 1) {
            log("No results found. Try a different query or area name.", "warn");
            return [];
        }
        if (!["OK", "ZERO_RESULTS"].includes(data.status)) {
            throw new Error(`Places API error: ${data.status} — ${data.error_message || ""}`);
        }

        for (const place of data.results) {
            if (seenIds.has(place.place_id)) continue;
            seenIds.add(place.place_id);
            placeIds.push(place.place_id);
            if (placeIds.length >= MAX_RESULTS) break;
        }

        log(`  → ${placeIds.length} places collected so far`, "info");

        pageToken = data.next_page_token;
        if (!pageToken || placeIds.length >= MAX_RESULTS) break;

        log("  Waiting 2s before next page (Google requirement)...", "info");
        await sleep(2000);
        page++;
    }

    return placeIds;
}

// ─── Build row ────────────────────────────────────────────────────────────────
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

// ─── Export to Excel ──────────────────────────────────────────────────────────
function exportToExcel(rows, query, keyword, area, outputDir) {
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

    // Summary sheet
    const ratedRows = rows.filter((r) => r.Rating);
    const avgRating = ratedRows.length
        ? (ratedRows.reduce((s, r) => s + (parseFloat(r.Rating) || 0), 0) / ratedRows.length).toFixed(2)
        : "N/A";

    const summaryData = [
        ["Search Report"],
        [],
        ["Original Query", query],
        ["Resolved Keyword", keyword],
        ["Area Searched", area],
        ["Search String Sent", `${keyword} in ${area}`],
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
    wsSummary["!cols"] = [{ wch: 22 }, { wch: 45 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");

    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `${sanitizeFilename(query)}_${sanitizeFilename(area.split(",")[0])}_${timestamp}.xlsx`;
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

    let query, area;

    if (process.argv.length >= 4) {
        query = process.argv[2];
        area = process.argv[3];
        rl.close();
    } else {
        query = await ask(rl, "🔎 Search Query  (e.g. Doctors, CA firm, Digital Agency): ");
        area = await ask(rl, "📍 Area          (e.g. Connaught Place Delhi, Bandra Mumbai): ");
        rl.close();
    }

    if (!query || !area) {
        log("Invalid inputs. Exiting.", "error");
        process.exit(1);
    }

    // Resolve keyword via map
    const keyword = resolveKeyword(query);

    log(`\nSearch: "${keyword} in ${area}"`, "fetch");

    const outputDir = path.join(__dirname, "output");
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    try {
        // 1. Collect place IDs
        const placeIds = await collectPlaceIds(keyword, area);

        if (!placeIds.length) {
            log("No places found. Try a different query or area.", "warn");
            process.exit(0);
        }

        log(`\nFound ${placeIds.length} places. Fetching details + emails...\n`, "success");

        // 2. Fetch details + scrape emails
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

        // 3. Export
        log(`\nExporting ${rows.length} results to Excel...`, "info");
        const filepath = exportToExcel(rows, query, keyword, area, outputDir);

        // 4. Summary
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