import mongoose, { Document, Schema } from 'mongoose';

export interface IFooter extends Document {
    columns: Record<string, unknown>[];
    legalLinks: Record<string, unknown>[];
    socialLinks: Record<string, unknown>[];
}

const DEFAULT_COLUMNS = [
    {
        heading: 'Solutions',
        links: [
            { label: 'End to End Services', href: '/supply-chain' },
            { label: 'Freight Forwarding', href: '/freight-forwarding' },
            { label: 'Infrastructure and Industrial Projects', href: '/infrastructure-industrial-project' },
            { label: 'Steel Procurement', href: '/steel-procurement' },
            { label: 'Custom Steel Processing', href: '/custom-steel-processing' },
        ],
    },
    {
        heading: 'Sonatek',
        links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Our Leadership', href: '/leadership' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'Sustainability', href: '/sustainability' },
        ],
    },
    {
        heading: 'Policy',
        links: [
            { label: 'Terms & Conditions', href: '/terms-conditions' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Return Policy', href: '#' },
        ],
    },
    {
        heading: 'Support',
        links: [
            { label: 'Vijay Jain (Owner): +91 84470 83022', href: 'tel:+918447083022' },
            { label: 'Rajesh (Sales, Delhi): +91 90154 16940', href: 'tel:+919015416940' },
            { label: 'sonateksteels@gmail.com', href: 'mailto:sonateksteels@gmail.com' },
            { label: 'X-7, Loha Mandi, Naraina, New Delhi - 110028', href: 'https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028' },
        ],
    },
];

const DEFAULT_LEGAL_LINKS = [
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Privacy Policy', href: '/privacy' },
];

const DEFAULT_SOCIAL_LINKS = [
    { platform: 'linkedin', href: 'https://www.linkedin.com/company/107192641' },
    { platform: 'facebook', href: 'https://www.facebook.com/p/Sonatek-Steels-Private-Limited-61558543310042/' },
    { platform: 'instagram', href: 'https://www.instagram.com/sonateksteelsolutions' },
    { platform: 'youtube', href: 'https://www.youtube.com/@SonatekSteels' },
];

const FooterSchema = new Schema<IFooter>(
    {
        columns:     { type: Schema.Types.Mixed, default: DEFAULT_COLUMNS },
        legalLinks:  { type: Schema.Types.Mixed, default: DEFAULT_LEGAL_LINKS },
        socialLinks: { type: Schema.Types.Mixed, default: DEFAULT_SOCIAL_LINKS },
    },
    { timestamps: true },
);

export default mongoose.model<IFooter>('Footer', FooterSchema);
