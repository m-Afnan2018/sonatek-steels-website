import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import Leader from '../models/Leader';

function safeDeleteFile(filePath: string) {
    if (!filePath || filePath.includes('/uploads/media/')) return;
    const abs = path.join(__dirname, '../../', filePath);
    if (fs.existsSync(abs)) fs.unlinkSync(abs);
}

export async function getLeaders(_req: Request, res: Response) {
    try {
        const items = await Leader.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
        res.json({ leaders: items });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function getAllLeaders(req: Request, res: Response) {
    try {
        const page  = Math.max(1, Number(req.query.page)  || 1);
        const limit = Math.max(1, Number(req.query.limit) || 20);
        const skip  = (page - 1) * limit;
        const total = await Leader.countDocuments();
        const items = await Leader.find().sort({ order: 1, createdAt: 1 }).skip(skip).limit(limit);
        res.json({ leaders: items, total, pages: Math.ceil(total / limit) });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function createLeader(req: Request, res: Response) {
    try {
        const { name, title, category, order, isActive } = req.body;
        if (!name?.trim() || !title?.trim()) {
            return res.status(400).json({ message: 'name and title are required' });
        }
        const image = req.file
            ? `/uploads/leaders/${req.file.filename}`
            : (req.body.image || undefined);
        const item = await Leader.create({ name, title, category, image, order, isActive });
        res.status(201).json({ leader: item });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateLeader(req: Request, res: Response) {
    try {
        const existing = await Leader.findById(req.params.id);
        if (!existing) return res.status(404).json({ message: 'Leader not found' });

        const { name, title, category, order, isActive } = req.body;
        const update: Record<string, unknown> = { name, title, category, order, isActive };

        if (req.file) {
            safeDeleteFile(existing.image ?? '');
            update.image = `/uploads/leaders/${req.file.filename}`;
        } else if (req.body.image !== undefined) {
            update.image = req.body.image || null;
        }

        const item = await Leader.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
        res.json({ leader: item });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteLeader(req: Request, res: Response) {
    try {
        const item = await Leader.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Leader not found' });
        safeDeleteFile(item.image ?? '');
        res.json({ message: 'Deleted' });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
