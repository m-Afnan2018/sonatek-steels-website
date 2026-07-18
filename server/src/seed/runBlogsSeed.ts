// Seeds 6 SEO-optimized blog posts and their supporting tags. Idempotent —
// upserts by slug, safe to re-run. Companion to runNewSolutionsSeed.ts /
// runNewServicesSeed.ts but targets the Blog/Tag collections.
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Blog from '../models/Blog';
import Tag from '../models/Tag';
import { SEED_TAGS, SEED_BLOGS } from './blogsData';

async function main() {
    await connectDB();

    const tagIdBySlug = new Map<string, string>();
    for (const t of SEED_TAGS) {
        const doc = await Tag.findOneAndUpdate(
            { slug: t.slug },
            { $set: { label: t.label, slug: t.slug } },
            { upsert: true, new: true },
        );
        tagIdBySlug.set(t.slug, String(doc._id));
        console.log(`Tag seeded: ${t.slug}`);
    }

    for (const b of SEED_BLOGS) {
        const tags = b.tagSlugs.map((s) => tagIdBySlug.get(s)).filter(Boolean);
        await Blog.findOneAndUpdate(
            { slug: b.slug },
            {
                $set: {
                    title: b.title,
                    slug: b.slug,
                    excerpt: b.excerpt,
                    content: b.content,
                    author: b.author,
                    readTime: b.readTime,
                    isFeatured: b.isFeatured,
                    isPublished: b.isPublished,
                    coverImage: b.coverImage,
                    tags,
                    ...(b.isPublished ? { publishedAt: new Date() } : {}),
                },
            },
            { upsert: true, new: true },
        );
        console.log(`Blog seeded: ${b.slug}`);
    }

    console.log(`Done — ${SEED_TAGS.length} tags, ${SEED_BLOGS.length} blog posts seeded.`);
    process.exit(0);
}

main().catch((err) => {
    console.error('Seed failed:', err.message ?? err);
    process.exit(1);
});
