import { Request, Response } from 'express';
import Page, { IBlockInstance } from '../models/Page';
import { isReservedSlug } from '../utils/reservedSlugs';
import { validateBlockInstance } from '../registry/blockRegistry';

function slugify(s: string) {
    return s.toLowerCase().trim()
        .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

function normalizeBlocks(raw: unknown): { blocks: IBlockInstance[]; errors: string[] } {
    const errors: string[] = [];
    if (!Array.isArray(raw)) return { blocks: [], errors };
    const blocks: IBlockInstance[] = raw.map((b: any, i: number) => {
        const blockType = String(b?.blockType ?? '');
        const data = (b?.data && typeof b.data === 'object') ? b.data : {};
        errors.push(...validateBlockInstance(blockType, data));
        return {
            blockType,
            order: Number.isFinite(b?.order) ? b.order : i,
            anchorId: b?.anchorId || undefined,
            data,
        };
    });
    return { blocks, errors };
}

// ── Admin ─────────────────────────────────────────────────────────────────

export async function getPages(req: Request, res: Response): Promise<void> {
    const page  = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(50, Number(req.query.limit) || 20);
    const filter: Record<string, unknown> = {};
    if (req.query.search) {
        const re = new RegExp(String(req.query.search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        filter.$or = [{ title: re }, { slug: re }];
    }
    const [pages, total] = await Promise.all([
        Page.find(filter)
            .select('slug title status updatedAt publishedAt')
            .sort({ updatedAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
        Page.countDocuments(filter),
    ]);
    res.json({ pages, total, page, pages_: Math.ceil(total / limit) });
}

export async function getPageById(req: Request, res: Response): Promise<void> {
    const p = await Page.findById(req.params.id).lean();
    if (!p) { res.status(404).json({ message: 'Page not found' }); return; }
    res.json({ page: p });
}

export async function createPage(req: Request, res: Response): Promise<void> {
    const title = String(req.body.title ?? '').trim();
    if (!title) { res.status(400).json({ message: 'Title is required' }); return; }

    let slug = slugify(String(req.body.slug ?? '')) || slugify(title);
    if (isReservedSlug(slug)) { res.status(400).json({ message: `"${slug}" is a reserved route and can't be used as a page slug` }); return; }
    if (await Page.findOne({ slug })) { res.status(409).json({ message: `Slug "${slug}" is already in use` }); return; }

    const { blocks, errors } = normalizeBlocks(req.body.blocks);
    if (errors.length) { res.status(400).json({ message: errors[0], errors }); return; }

    const status: 'draft' | 'published' = req.body.status === 'published' ? 'published' : 'draft';
    const p = await Page.create({
        title, slug, status, blocks,
        seo: {
            metaTitle: req.body.seo?.metaTitle ?? '',
            metaDescription: req.body.seo?.metaDescription ?? '',
            ogImage: req.body.seo?.ogImage ?? '',
        },
        publishedAt: status === 'published' ? new Date() : undefined,
    });
    res.status(201).json({ page: p });
}

export async function updatePage(req: Request, res: Response): Promise<void> {
    const existing = await Page.findById(req.params.id);
    if (!existing) { res.status(404).json({ message: 'Page not found' }); return; }

    const update: Record<string, unknown> = {};

    if (req.body.title !== undefined) {
        const title = String(req.body.title).trim();
        if (!title) { res.status(400).json({ message: 'Title is required' }); return; }
        update.title = title;
    }

    if (req.body.slug !== undefined) {
        const slug = slugify(String(req.body.slug));
        if (isReservedSlug(slug)) { res.status(400).json({ message: `"${slug}" is a reserved route and can't be used as a page slug` }); return; }
        const clash = await Page.findOne({ slug, _id: { $ne: existing._id } });
        if (clash) { res.status(409).json({ message: `Slug "${slug}" is already in use` }); return; }
        update.slug = slug;
    }

    if (req.body.blocks !== undefined) {
        const { blocks, errors } = normalizeBlocks(req.body.blocks);
        if (errors.length) { res.status(400).json({ message: errors[0], errors }); return; }
        update.blocks = blocks;
    }

    if (req.body.seo !== undefined) {
        update.seo = {
            metaTitle: req.body.seo?.metaTitle ?? existing.seo?.metaTitle ?? '',
            metaDescription: req.body.seo?.metaDescription ?? existing.seo?.metaDescription ?? '',
            ogImage: req.body.seo?.ogImage ?? existing.seo?.ogImage ?? '',
        };
    }

    if (req.body.status !== undefined) {
        const status = req.body.status === 'published' ? 'published' : 'draft';
        update.status = status;
        if (status === 'published' && existing.status !== 'published') update.publishedAt = new Date();
    }

    const p = await Page.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    res.json({ page: p });
}

export async function deletePage(req: Request, res: Response): Promise<void> {
    const p = await Page.findByIdAndDelete(req.params.id);
    if (!p) { res.status(404).json({ message: 'Page not found' }); return; }
    res.json({ message: 'Page deleted' });
}

// Clones an existing page (blocks, seo) as a new draft so it can be used as
// a starting point — "duplicate this page, then just change the data".
export async function duplicatePage(req: Request, res: Response): Promise<void> {
    const existing = await Page.findById(req.params.id).lean();
    if (!existing) { res.status(404).json({ message: 'Page not found' }); return; }

    const baseSlug = `${existing.slug}-copy`;
    let slug = baseSlug;
    let n = 2;
    while (await Page.findOne({ slug })) {
        slug = `${baseSlug}-${n}`;
        n += 1;
    }

    const p = await Page.create({
        title: `${existing.title} (Copy)`,
        slug,
        status: 'draft',
        seo: existing.seo,
        blocks: existing.blocks,
    });
    res.status(201).json({ page: p });
}

// ── Public ────────────────────────────────────────────────────────────────

export async function getPageBySlug(req: Request, res: Response): Promise<void> {
    const p = await Page.findOne({ slug: req.params.slug, status: 'published' }).lean();
    if (!p) { res.status(404).json({ message: 'Page not found' }); return; }
    res.json({ page: p });
}
