import { Request, Response } from 'express';
import HomeContent from '../models/HomeContent';

export async function getHomeContent(_req: Request, res: Response) {
    try {
        let doc = await HomeContent.findOne();
        if (!doc) doc = await HomeContent.create({});
        res.json({ homeContent: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateHomeContent(req: Request, res: Response) {
    try {
        const { hero, impact, cta } = req.body;
        const doc = await HomeContent.findOneAndUpdate(
            {},
            { hero, impact, cta },
            { new: true, upsert: true, runValidators: true },
        );
        res.json({ homeContent: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
