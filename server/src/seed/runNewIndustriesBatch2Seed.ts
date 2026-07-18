// Seeds the 19 Industries pages sourced from assets/pages/*.docx and appends
// any still-missing links to the navbar's "Solutions" mega-menu, INDUSTRIAL
// SEGMENTS section. Companion to runNewIndustriesSeed.ts (first batch) —
// idempotent, safe to re-run.
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Page from '../models/Page';
import Navbar from '../models/Navbar';
import { NEW_INDUSTRIES_BATCH2_PAGES, NAVBAR_INDUSTRIES_LINKS_2 } from './newIndustriesBatch2Data';

async function main() {
    await connectDB();

    for (const p of NEW_INDUSTRIES_BATCH2_PAGES) {
        await Page.findOneAndUpdate(
            { slug: p.slug },
            {
                $set: {
                    title: p.title,
                    status: p.status,
                    seo: p.seo ?? {},
                    blocks: p.blocks.map((b) => ({ ...b, data: b.data ?? {} })),
                    ...(p.status === 'published' ? { publishedAt: new Date() } : {}),
                },
            },
            { upsert: true, new: true },
        );
        console.log(`Page seeded: ${p.slug}`);
    }

    const navDoc = await Navbar.findOne();
    if (navDoc) {
        const items = navDoc.navItems as any[];
        const solutionsItem = items.find((i) => i.label === 'Solutions');
        const industriesSection = solutionsItem?.sections?.find((s: any) => s.title === 'INDUSTRIAL SEGMENTS');
        if (industriesSection) {
            const existingHrefs = new Set(industriesSection.links.map((l: any) => l.href));
            for (const link of NAVBAR_INDUSTRIES_LINKS_2) {
                if (!existingHrefs.has(link.href)) industriesSection.links.push(link);
            }
            navDoc.markModified('navItems');
            await navDoc.save();
            console.log(`Navbar INDUSTRIAL SEGMENTS section now has ${industriesSection.links.length} links`);
        } else {
            console.log('Navbar INDUSTRIAL SEGMENTS section not found — skipped navbar update.');
        }
    } else {
        console.log('No navbar doc found — skipped navbar update.');
    }

    console.log(`Done — ${NEW_INDUSTRIES_BATCH2_PAGES.length} industry pages seeded.`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
