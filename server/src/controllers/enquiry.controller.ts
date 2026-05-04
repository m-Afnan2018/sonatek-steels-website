import { Request, Response } from 'express';
import Enquiry from '../models/Enquiry';
import { sendEnquiryNotification } from '../utils/mailer';

export async function createEnquiry(req: Request, res: Response): Promise<void> {
    const {
        firstName, lastName, companyName, companyWebsite,
        businessEmail, mobileNumber, country, enquiryType, message,
    } = req.body;

    const required = { firstName, lastName, companyName, businessEmail, mobileNumber, country, enquiryType, message };
    const missing = Object.entries(required).filter(([, v]) => !v?.toString().trim());
    if (missing.length) {
        res.status(400).json({ message: `Missing required fields: ${missing.map(([k]) => k).join(', ')}` });
        return;
    }

    const enquiry = await Enquiry.create({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        companyName: companyName.trim(),
        companyWebsite: companyWebsite?.trim() || undefined,
        businessEmail: businessEmail.trim().toLowerCase(),
        mobileNumber: mobileNumber.trim(),
        country: country.trim(),
        enquiryType,
        message: message.trim(),
    });

    // Non-blocking — form submission succeeds even if email fails
    sendEnquiryNotification(enquiry).catch(() => {});

    res.status(201).json({ message: 'Enquiry received. We will get back to you shortly.', id: enquiry._id });
}

export async function getEnquiries(req: Request, res: Response): Promise<void> {
    const page  = Math.max(1, Number(req.query.page)  || 1);
    const limit = Math.min(50, Number(req.query.limit) || 20);
    const skip  = (page - 1) * limit;

    const filter: Record<string, unknown> = {};
    if (req.query.status)      filter.status      = req.query.status;
    if (req.query.enquiryType) filter.enquiryType = req.query.enquiryType;
    if (req.query.search) {
        const re = new RegExp(String(req.query.search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        filter.$or = [{ firstName: re }, { lastName: re }, { businessEmail: re }, { companyName: re }];
    }

    const [enquiries, total] = await Promise.all([
        Enquiry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        Enquiry.countDocuments(filter),
    ]);

    res.json({ enquiries, total, page, pages: Math.ceil(total / limit) });
}

export async function getEnquiry(req: Request, res: Response): Promise<void> {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) { res.status(404).json({ message: 'Enquiry not found' }); return; }
    res.json({ enquiry });
}

export async function updateStatus(req: Request, res: Response): Promise<void> {
    const { status } = req.body;
    const valid = ['new', 'read', 'replied', 'closed'];
    if (!valid.includes(status)) {
        res.status(400).json({ message: `status must be one of: ${valid.join(', ')}` });
        return;
    }
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!enquiry) { res.status(404).json({ message: 'Enquiry not found' }); return; }
    res.json({ enquiry });
}

export async function deleteEnquiry(req: Request, res: Response): Promise<void> {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) { res.status(404).json({ message: 'Enquiry not found' }); return; }
    res.json({ message: 'Enquiry deleted' });
}

export async function getEnquiryStats(_req: Request, res: Response): Promise<void> {
    const [total, newCount, repliedCount, closedCount] = await Promise.all([
        Enquiry.countDocuments(),
        Enquiry.countDocuments({ status: 'new' }),
        Enquiry.countDocuments({ status: 'replied' }),
        Enquiry.countDocuments({ status: 'closed' }),
    ]);
    res.json({ total, new: newCount, replied: repliedCount, closed: closedCount });
}
