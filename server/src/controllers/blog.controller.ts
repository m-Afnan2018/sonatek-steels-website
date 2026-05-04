import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Blog from '../models/Blog';

function slugify(s: string) {
    return s.toLowerCase().trim()
        .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

function parseBody(body: Record<string, string | undefined>) {
    const safe = <T>(key: string, fallback: T): T => {
        try { return body[key] ? JSON.parse(body[key]!) : fallback; } catch { return fallback; }
    };
    return {
        title:       body.title?.trim() ?? '',
        slug:        body.slug?.trim() || slugify(body.title ?? ''),
        excerpt:     body.excerpt?.trim() ?? '',
        content:     body.content ?? '',
        author:      body.author?.trim() || 'Sonatek Steels',
        readTime:    Number(body.readTime) || 3,
        isFeatured:  body.isFeatured === 'true',
        isPublished: body.isPublished === 'true',
        tags:        safe<string[]>('tags', []),
    };
}

function safeDeleteFile(filePath: string) {
    // Never auto-delete files from the shared media library
    if (!filePath || filePath.includes('/uploads/media/')) return;
    const abs = path.join(__dirname, '../../', filePath);
    if (fs.existsSync(abs)) fs.unlinkSync(abs);
}

// ── Public ───────────────────────────────────────────────────────────────────

export async function getBlogs(req: Request, res: Response): Promise<void> {
    const page  = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(20, Number(req.query.limit) || 9);
    const filter: Record<string, unknown> = { isPublished: true };
    if (req.query.tag)      filter.tags      = req.query.tag;
    if (req.query.featured) filter.isFeatured = req.query.featured === 'true';

    const [blogs, total] = await Promise.all([
        Blog.find(filter)
            .populate('tags', 'label slug')
            .sort({ publishedAt: -1, createdAt: -1 })
            .skip((page - 1) * limit).limit(limit).lean(),
        Blog.countDocuments(filter),
    ]);
    res.json({ blogs, total, page, pages: Math.ceil(total / limit) });
}

export async function getBlogBySlug(req: Request, res: Response): Promise<void> {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true })
        .populate('tags', 'label slug').lean();
    if (!blog) { res.status(404).json({ message: 'Blog not found' }); return; }
    res.json({ blog });
}

// ── Admin ─────────────────────────────────────────────────────────────────────

export async function getAllBlogs(req: Request, res: Response): Promise<void> {
    const page  = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(50, Number(req.query.limit) || 15);
    const filter: Record<string, unknown> = {};
    if (req.query.search) {
        const re = new RegExp(String(req.query.search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        filter.$or = [{ title: re }, { excerpt: re }];
    }
    const [blogs, total] = await Promise.all([
        Blog.find(filter).populate('tags', 'label slug')
            .sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
        Blog.countDocuments(filter),
    ]);
    res.json({ blogs, total, page, pages: Math.ceil(total / limit) });
}

export async function getBlogById(req: Request, res: Response): Promise<void> {
    const blog = await Blog.findById(req.params.id).populate('tags', 'label slug').lean();
    if (!blog) { res.status(404).json({ message: 'Blog not found' }); return; }
    res.json({ blog });
}

export async function createBlog(req: Request, res: Response): Promise<void> {
    const data = parseBody(req.body);
    if (!data.title) { res.status(400).json({ message: 'Title is required' }); return; }
    // req.file = direct upload via form; req.body.coverImage = URL from MediaPicker
    const coverImage = req.file
        ? `/uploads/blogs/${req.file.filename}`
        : (req.body.coverImage || undefined);
    let { slug } = data;
    if (await Blog.findOne({ slug })) slug = `${slug}-${Date.now()}`;
    const publishedAt = data.isPublished ? new Date() : undefined;
    const blog = await Blog.create({ ...data, slug, coverImage, publishedAt });
    res.status(201).json({ blog });
}

export async function updateBlog(req: Request, res: Response): Promise<void> {
    const data = parseBody(req.body);
    const update: Record<string, unknown> = { ...data };
    if (req.file) {
        const old = await Blog.findById(req.params.id).select('coverImage').lean();
        if (old?.coverImage) safeDeleteFile(old.coverImage);
        update.coverImage = `/uploads/blogs/${req.file.filename}`;
    } else if (req.body.coverImage !== undefined) {
        update.coverImage = req.body.coverImage || null;
    }
    if (data.isPublished) {
        const cur = await Blog.findById(req.params.id).select('isPublished publishedAt').lean();
        if (!cur?.isPublished) update.publishedAt = new Date();
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!blog) { res.status(404).json({ message: 'Blog not found' }); return; }
    res.json({ blog });
}

export async function deleteBlog(req: Request, res: Response): Promise<void> {
    const blog = await Blog.findById(req.params.id).select('coverImage');
    if (!blog) { res.status(404).json({ message: 'Blog not found' }); return; }
    if (blog.coverImage) safeDeleteFile(blog.coverImage);
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
}
