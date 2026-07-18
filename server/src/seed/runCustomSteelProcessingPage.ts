// Seeds just the Custom Steel Processing page — a dedicated, argument-free
// runner (matching runNewServicesSeed.ts / runNewSolutionsSeed.ts / etc.)
// around the same upsertPage() used by `npm run seed:page`. Doesn't touch
// any other page. Idempotent — safe to re-run.
// Run with: npx tsx src/seed/runCustomSteelProcessingPage.ts
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import { upsertPage } from '../utils/upsertPage';
import CUSTOM_STEEL_PROCESSING_PAGE from './customSteelProcessingPageData';

async function main() {
    await connectDB();
    const result = await upsertPage(CUSTOM_STEEL_PROCESSING_PAGE);
    console.log(`Upserted: ${result.title} (/${result.slug}) — status: ${result.status}, ${result.blocks.length} blocks`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
