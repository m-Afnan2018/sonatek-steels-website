import nodemailer from 'nodemailer';
import { IEnquiry } from '../models/Enquiry';

function createTransport() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

export async function sendEnquiryNotification(enquiry: IEnquiry): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail || !process.env.SMTP_HOST || !process.env.SMTP_USER) {
        console.log('[Mailer] SMTP not configured — skipping notification.');
        return;
    }

    const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#021450;padding:24px 32px;">
        <h2 style="color:#fff;margin:0;font-size:20px;letter-spacing:0.05em;">NEW ENQUIRY — SONATEK STEELS</h2>
      </div>
      <div style="padding:24px 32px;background:#f9fafb;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#6b7280;width:40%;">Name</td><td style="padding:8px 0;color:#111827;font-weight:600;">${enquiry.firstName} ${enquiry.lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Company</td><td style="padding:8px 0;color:#111827;">${enquiry.companyName}${enquiry.companyWebsite ? ` — ${enquiry.companyWebsite}` : ''}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;color:#111827;">${enquiry.businessEmail}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Mobile</td><td style="padding:8px 0;color:#111827;">${enquiry.mobileNumber}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Country</td><td style="padding:8px 0;color:#111827;">${enquiry.country}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Type</td><td style="padding:8px 0;"><span style="background:#eff6ff;color:#2563eb;padding:2px 10px;border-radius:99px;font-size:12px;font-weight:600;">${enquiry.enquiryType}</span></td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 6px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
          <p style="margin:0;color:#111827;line-height:1.6;">${enquiry.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top:16px;font-size:12px;color:#9ca3af;">Received: ${new Date(enquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    </div>`;

    try {
        await createTransport().sendMail({
            from: `"Sonatek Steels" <${process.env.SMTP_USER}>`,
            to: adminEmail,
            subject: `New ${enquiry.enquiryType} Enquiry — ${enquiry.firstName} ${enquiry.lastName} (${enquiry.companyName})`,
            html,
        });
        console.log(`[Mailer] Notification sent to ${adminEmail}`);
    } catch (err) {
        console.error('[Mailer] Failed to send notification:', err);
    }
}
