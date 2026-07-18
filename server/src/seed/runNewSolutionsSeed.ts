// Seeds the 6 additional Solution pages (Industrial Procurement, OEM Supply
// Solutions, Project Based Steel Supply, Ready Stock Supply, Annual Supply
// Contract, Logistics & Delivery) and appends them to the navbar's Solutions
// mega-menu. Idempotent — safe to re-run.
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Page from '../models/Page';
import Navbar from '../models/Navbar';
import { NEW_SOLUTIONS_PAGES, NAVBAR_SOLUTIONS_LINKS } from './newSolutionsData';

async function main() {
    await connectDB();

    for (const p of NEW_SOLUTIONS_PAGES) {
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
        const solutionsSection = solutionsItem?.sections?.find((s: any) => s.title === 'SOLUTIONS');
        if (solutionsSection) {
            const existingHrefs = new Set(solutionsSection.links.map((l: any) => l.href));
            for (const link of NAVBAR_SOLUTIONS_LINKS) {
                if (!existingHrefs.has(link.href)) solutionsSection.links.push(link);
            }
            navDoc.markModified('navItems');
            await navDoc.save();
            console.log(`Navbar SOLUTIONS section now has ${solutionsSection.links.length} links`);
        } else {
            console.log('Navbar SOLUTIONS section not found — skipped navbar update.');
        }
    } else {
        console.log('No navbar doc found — skipped navbar update.');
    }

    console.log(`Done — ${NEW_SOLUTIONS_PAGES.length} new solution pages seeded.`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
