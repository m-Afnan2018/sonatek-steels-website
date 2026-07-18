// Single entry point to fully bootstrap this project's dynamic content
// after a fresh clone. Run via server/seed.sh (or `npm run seed:all`).
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Admin from '../models/Admin';
import Page from '../models/Page';
import Navbar from '../models/Navbar';
import { SEED_PAGES, SEED_NAVBAR } from './seedData';

async function main() {
    await connectDB();

    const adminExists = await Admin.findOne();
    if (!adminExists) {
        await Admin.create({
            name: 'Super Admin',
            email: 'admin@sonateksteels.com',
            password: 'Admin@123456',
            role: 'superadmin',
        });
        console.log('Created default admin: admin@sonateksteels.com / Admin@123456 (change after first login)');
    } else {
        console.log('Admin already exists — skipping.');
    }

    for (const p of SEED_PAGES) {
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

    if (SEED_NAVBAR) {
        await Navbar.findOneAndUpdate({}, SEED_NAVBAR, { upsert: true, new: true });
        console.log('Navbar seeded.');
    }

    console.log(`Done — ${SEED_PAGES.length} pages + navbar restored.`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
