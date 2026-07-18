// Seeds just the Automotive industry page — a dedicated, argument-free
// runner (matching runCustomSteelProcessingPage.ts) around the same
// upsertPage() used by `npm run seed:page`. Content already follows the
// same block pattern as the rest of the Industries pages (industry-hero,
// sticky-nav, stats-section, icon-grid, process-steps, innovation-section,
// built-to-deliver, services-section, faq-section, cta-banner-industry).
// Doesn't touch any other page. Idempotent — safe to re-run.
// Run with: npx tsx src/seed/runAutomotivePage.ts
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import { upsertPage } from '../utils/upsertPage';
import AUTOMOTIVE_PAGE from './automotivePageData';

async function main() {
    await connectDB();
    const result = await upsertPage(AUTOMOTIVE_PAGE);
    console.log(`Upserted: ${result.title} (/${result.slug}) — status: ${result.status}, ${result.blocks.length} blocks`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
