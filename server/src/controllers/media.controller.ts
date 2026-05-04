import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import Media from '../models/Media';

export async function getMedia(_req: Request, res: Response) {
    try {
        const items = await Media.find().sort({ createdAt: -1 });
        res.json({ media: items });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function uploadMedia(req: Request, res: Response) {
    try {
        if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
        const item = await Media.create({
            filename:     req.file.filename,
            originalName: req.file.originalname,
            url:          `/uploads/media/${req.file.filename}`,
            mimetype:     req.file.mimetype,
            size:         req.file.size,
        });
        res.status(201).json({ media: item });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteMedia(req: Request, res: Response) {
    try {
        const item = await Media.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Media not found' });
        const filePath = path.join(__dirname, '../../uploads/media', item.filename);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        res.json({ message: 'Deleted' });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
