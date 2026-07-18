// Direct-DB Page upsert — same idiom as seedHrProducts.ts/seedCrProducts.ts
// (connectDB + Mongoose, no HTTP/auth round-trip). Reuses the exact same
// validation the real admin API applies, so this can't create a page the
// UI would have rejected.
//
// Usage: npm run seed:page -- path/to/page-data.ts
// The data file's default export must match PageSeedInput below.
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Page from '../models/Page';
import { isReservedSlug } from './reservedSlugs';
import { validateBlockInstance } from '../registry/blockRegistry';

export interface PageSeedInput {
    slug: string;
    title: string;
    status?: 'draft' | 'published';
    seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
    blocks: { blockType: string; order: number; anchorId?: string; data: Record<string, unknown> }[];
}

export async function upsertPage(input: PageSeedInput) {
    if (isReservedSlug(input.slug)) {
        throw new Error(`"${input.slug}" is a reserved route and can't be used as a page slug`);
    }
    for (const b of input.blocks) {
        const errors = validateBlockInstance(b.blockType, b.data);
        if (errors.length) throw new Error(errors[0]);
    }

    const result = await Page.findOneAndUpdate(
        { slug: input.slug },
        {
            $set: {
                title: input.title,
                status: input.status ?? 'draft',
                seo: input.seo ?? {},
                blocks: input.blocks,
                ...(input.status === 'published' ? { publishedAt: new Date() } : {}),
            },
        },
        { upsert: true, new: true },
    );
    return result;
}

async function main() {
    const fileArg = process.argv[2];
    if (!fileArg) {
        console.error('Usage: npm run seed:page -- path/to/page-data.ts');
        process.exit(1);
    }
    const filePath = path.resolve(process.cwd(), fileArg);
    const mod = await import(filePath);
    const input: PageSeedInput | PageSeedInput[] = mod.default ?? mod;
    const list = Array.isArray(input) ? input : [input];

    await connectDB();
    for (const item of list) {
        const result = await upsertPage(item);
        console.log(`Upserted: ${result.title} (/${result.slug}) — status: ${result.status}, ${result.blocks.length} blocks`);
    }
    process.exit(0);
}

// Only run as CLI when invoked directly, not when imported (e.g. by future scripts).
if (require.main === module) {
    main().catch((err) => {
        console.error('Seed failed:', err.message ?? err);
        process.exit(1);
    });
}
