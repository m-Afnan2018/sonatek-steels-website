import { Request, Response } from 'express';
import Tag from '../models/Tag';

function slugify(s: string) {
    return s.toLowerCase().trim()
        .replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

export async function getTags(_req: Request, res: Response): Promise<void> {
    const tags = await Tag.find().sort({ label: 1 }).lean();
    res.json({ tags });
}

export async function createTag(req: Request, res: Response): Promise<void> {
    const { label } = req.body;
    if (!label?.trim()) { res.status(400).json({ message: 'Tag label is required' }); return; }
    const slug = slugify(label);
    if (await Tag.findOne({ slug })) { res.status(409).json({ message: 'Tag already exists' }); return; }
    const tag = await Tag.create({ label: label.trim(), slug });
    res.status(201).json({ tag });
}

export async function deleteTag(req: Request, res: Response): Promise<void> {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) { res.status(404).json({ message: 'Tag not found' }); return; }
    res.json({ message: 'Tag deleted' });
}
