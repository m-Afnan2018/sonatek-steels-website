import { Request, Response } from 'express';
import Footer from '../models/Footer';

export async function getFooter(_req: Request, res: Response) {
    try {
        let doc = await Footer.findOne();
        if (!doc) doc = await Footer.create({});
        res.json({ footer: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateFooter(req: Request, res: Response) {
    try {
        const { columns, legalLinks, socialLinks } = req.body;
        const doc = await Footer.findOneAndUpdate(
            {},
            { columns, legalLinks, socialLinks },
            { new: true, upsert: true, runValidators: true },
        );
        res.json({ footer: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
