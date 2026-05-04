import { Request, Response } from 'express';
import Testimonial from '../models/Testimonial';

export async function getTestimonials(_req: Request, res: Response) {
    try {
        const items = await Testimonial.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
        res.json({ testimonials: items });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function getAllTestimonials(req: Request, res: Response) {
    try {
        const page  = Math.max(1, Number(req.query.page)  || 1);
        const limit = Math.max(1, Number(req.query.limit) || 20);
        const skip  = (page - 1) * limit;
        const total = await Testimonial.countDocuments();
        const items = await Testimonial.find().sort({ order: 1, createdAt: 1 }).skip(skip).limit(limit);
        res.json({ testimonials: items, total, pages: Math.ceil(total / limit) });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function createTestimonial(req: Request, res: Response) {
    try {
        const { name, designation, rating, text, isActive, order } = req.body;
        if (!name?.trim() || !designation?.trim() || !text?.trim()) {
            return res.status(400).json({ message: 'name, designation and text are required' });
        }
        const item = await Testimonial.create({ name, designation, rating, text, isActive, order });
        res.status(201).json({ testimonial: item });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateTestimonial(req: Request, res: Response) {
    try {
        const { name, designation, rating, text, isActive, order } = req.body;
        const item = await Testimonial.findByIdAndUpdate(
            req.params.id,
            { name, designation, rating, text, isActive, order },
            { new: true, runValidators: true },
        );
        if (!item) return res.status(404).json({ message: 'Testimonial not found' });
        res.json({ testimonial: item });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function deleteTestimonial(req: Request, res: Response) {
    try {
        const item = await Testimonial.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Testimonial not found' });
        res.json({ message: 'Deleted' });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}
