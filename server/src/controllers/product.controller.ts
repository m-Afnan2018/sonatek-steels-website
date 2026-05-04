import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Product from '../models/Product';

function slugify(text: string): string {
    return text.toLowerCase().trim()
        .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

function parseBody(body: Record<string, string | undefined>) {
    const safe = <T>(key: string, fallback: T): T => {
        try { return body[key] ? JSON.parse(body[key]!) : fallback; } catch { return fallback; }
    };
    return {
        name:           body.name?.trim() ?? '',
        slug:           body.slug?.trim() || slugify(body.name ?? ''),
        brand:          body.brand?.trim() ?? '',
        whatsappNumber: body.whatsappNumber?.trim() ?? '',
        isActive:       body.isActive !== 'false',
        thicknesses:    safe<string[]>('thicknesses', []),
        widths:         safe<string[]>('widths', []),
        overview:       safe('overview', {}),
        specs:          safe('specs', { composition: [], mechanical: [], tolerance: [] }),
    };
}

// ── Public ───────────────────────────────────────────────────────────────────

export async function getProducts(_req: Request, res: Response): Promise<void> {
    const products = await Product
        .find({ isActive: true })
        .select('name slug brand image thicknesses widths')
        .sort({ createdAt: -1 })
        .lean();
    res.json({ products });
}

export async function getProduct(req: Request, res: Response): Promise<void> {
    const { slugOrId } = req.params;
    const isId = /^[0-9a-fA-F]{24}$/.test(slugOrId);
    const product = isId
        ? await Product.findById(slugOrId).lean()
        : await Product.findOne({ slug: slugOrId, isActive: true }).lean();
    if (!product) { res.status(404).json({ message: 'Product not found' }); return; }
    res.json({ product });
}

// ── Admin ─────────────────────────────────────────────────────────────────────

export async function getAllProducts(req: Request, res: Response): Promise<void> {
    const page  = Math.max(1, Number(req.query.page)  || 1);
    const limit = Math.min(50, Number(req.query.limit) || 20);
    const filter: Record<string, unknown> = {};
    if (req.query.search) {
        const re = new RegExp(String(req.query.search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        filter.$or = [{ name: re }, { brand: re }, { slug: re }];
    }
    const [products, total] = await Promise.all([
        Product.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
        Product.countDocuments(filter),
    ]);
    res.json({ products, total, page, pages: Math.ceil(total / limit) });
}

export async function createProduct(req: Request, res: Response): Promise<void> {
    const data = parseBody(req.body);
    if (!data.name) { res.status(400).json({ message: 'Product name is required' }); return; }
    const image = req.file ? `/uploads/products/${req.file.filename}` : undefined;
    let { slug } = data;
    if (await Product.findOne({ slug })) slug = `${slug}-${Date.now()}`;
    const product = await Product.create({ ...data, slug, image });
    res.status(201).json({ product });
}

export async function updateProduct(req: Request, res: Response): Promise<void> {
    const data = parseBody(req.body);
    const update: Record<string, unknown> = { ...data };
    if (req.file) {
        const old = await Product.findById(req.params.id).select('image').lean();
        if (old?.image) {
            const p = path.join(__dirname, '../../', old.image);
            if (fs.existsSync(p)) fs.unlinkSync(p);
        }
        update.image = `/uploads/products/${req.file.filename}`;
    }
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!product) { res.status(404).json({ message: 'Product not found' }); return; }
    res.json({ product });
}

export async function deleteProduct(req: Request, res: Response): Promise<void> {
    const product = await Product.findById(req.params.id).select('image');
    if (!product) { res.status(404).json({ message: 'Product not found' }); return; }
    if (product.image) {
        const p = path.join(__dirname, '../../', product.image);
        if (fs.existsSync(p)) fs.unlinkSync(p);
    }
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
}
