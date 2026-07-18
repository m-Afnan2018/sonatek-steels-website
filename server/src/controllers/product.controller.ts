import { Request, Response } from 'express';
import Product from '../models/Product';

function slugify(text: string): string {
    return text.toLowerCase().trim()
        .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

// Body arrives as plain JSON now (image is a Media Library URL string, not
// an uploaded file), so nested fields are already real arrays/objects —
// no JSON.parse round-trip needed.
function parseBody(body: Record<string, unknown>) {
    const overview = (body.overview && typeof body.overview === 'object') ? body.overview as Record<string, unknown> : {};
    const specs = (body.specs && typeof body.specs === 'object') ? body.specs as Record<string, unknown> : { composition: [], mechanical: [], tolerance: [] };
    return {
        name:           String(body.name ?? '').trim(),
        slug:           slugify(String(body.slug ?? '')) || slugify(String(body.name ?? '')),
        brand:          String(body.brand ?? '').trim(),
        whatsappNumber: String(body.whatsappNumber ?? '').trim(),
        isActive:       body.isActive !== false,
        image:          typeof body.image === 'string' ? body.image.trim() : undefined,
        thicknesses:    Array.isArray(body.thicknesses) ? body.thicknesses : [],
        widths:         Array.isArray(body.widths) ? body.widths : [],
        overview,
        specs,
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
    let { slug } = data;
    if (await Product.findOne({ slug })) slug = `${slug}-${Date.now()}`;
    const product = await Product.create({ ...data, slug });
    res.status(201).json({ product });
}

export async function updateProduct(req: Request, res: Response): Promise<void> {
    const data = parseBody(req.body);
    const clash = await Product.findOne({ slug: data.slug, _id: { $ne: req.params.id } });
    if (clash) { res.status(409).json({ message: `Slug "${data.slug}" is already in use by another product` }); return; }
    const product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!product) { res.status(404).json({ message: 'Product not found' }); return; }
    res.json({ product });
}

export async function deleteProduct(req: Request, res: Response): Promise<void> {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) { res.status(404).json({ message: 'Product not found' }); return; }
    res.json({ message: 'Product deleted' });
}
