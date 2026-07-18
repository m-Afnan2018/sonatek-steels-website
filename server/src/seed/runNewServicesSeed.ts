// Seeds the 5 additional Services pages (Coil Slitting, Cut-To-Length
// Service, Luster Steel Processing, Bulk Industrial Supply, Delivery &
// Logistics Service) and appends them to the navbar's Solutions mega-menu
// "SERVICES" section. Idempotent — safe to re-run.
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Page from '../models/Page';
import Navbar from '../models/Navbar';
import { NEW_SERVICES_PAGES, NAVBAR_SERVICES_LINKS } from './newServicesData';

async function main() {
    await connectDB();

    for (const p of NEW_SERVICES_PAGES) {
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
        const servicesSection = solutionsItem?.sections?.find((s: any) => s.title === 'SERVICES');
        if (servicesSection) {
            const existingHrefs = new Set(servicesSection.links.map((l: any) => l.href));
            for (const link of NAVBAR_SERVICES_LINKS) {
                if (!existingHrefs.has(link.href)) servicesSection.links.push(link);
            }
            navDoc.markModified('navItems');
            await navDoc.save();
            console.log(`Navbar SERVICES section now has ${servicesSection.links.length} links`);
        } else {
            console.log('Navbar SERVICES section not found — skipped navbar update.');
        }
    } else {
        console.log('No navbar doc found — skipped navbar update.');
    }

    console.log(`Done — ${NEW_SERVICES_PAGES.length} new services pages seeded.`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
