import { Request, Response } from 'express';
import Navbar from '../models/Navbar';

export async function getNavbar(_req: Request, res: Response) {
    try {
        let doc = await Navbar.findOne();
        if (!doc) doc = await Navbar.create({});
        res.json({ navbar: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateNavbar(req: Request, res: Response) {
    try {
        const { logoUrl, phones, mapUrl, navItems } = req.body;
        const doc = await Navbar.findOneAndUpdate(
            {},
            { logoUrl, phones, mapUrl, navItems },
            { new: true, upsert: true, runValidators: true },
        );
        res.json({ navbar: doc });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
