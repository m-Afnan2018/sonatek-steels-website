import type { BlockFieldSchema } from '@/lib/blockRegistry';

export interface FooterLink { label: string; href: string; }
export interface FooterColumn { heading: string; links: FooterLink[]; }
export interface FooterSocialLink { platform: string; href: string; }
export interface FooterSettings {
    columns: FooterColumn[];
    legalLinks: FooterLink[];
    socialLinks: FooterSocialLink[];
}

const LINK_ITEM_SCHEMA: BlockFieldSchema[] = [
    { key: 'label', label: 'Label', type: 'text' },
    { key: 'href', label: 'Link', type: 'text' },
];

// Field schema for one footer column — reuses the same BlockFieldForm/ListField
// system used by the Page Builder and Navbar settings.
export const COLUMN_ITEM_SCHEMA: BlockFieldSchema[] = [
    { key: 'heading', label: 'Column heading', type: 'text' },
    { key: 'links', label: 'Links', type: 'list', itemSchema: LINK_ITEM_SCHEMA },
];

export const LEGAL_LINK_ITEM_SCHEMA: BlockFieldSchema[] = LINK_ITEM_SCHEMA;

export const SOCIAL_LINK_ITEM_SCHEMA: BlockFieldSchema[] = [
    {
        key: 'platform', label: 'Platform', type: 'select',
        options: ['linkedin', 'facebook', 'instagram', 'youtube', 'twitter'],
    },
    { key: 'href', label: 'Profile URL (leave empty to hide this icon)', type: 'text' },
];

// Mirrors the real hardcoded footer content previously in Footer.tsx — used
// as the fallback when the API is unreachable or no settings doc exists yet,
// and as the admin form's starting values. The "Products" column is not
// included here — it's always auto-generated from live product data.
export const DEFAULT_FOOTER: FooterSettings = {
    columns: [
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
    ],
    legalLinks: [
        { label: 'Sitemap', href: '/sitemap.xml' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Privacy Policy', href: '/privacy' },
    ],
    socialLinks: [
        { platform: 'linkedin', href: 'https://www.linkedin.com/company/107192641' },
        { platform: 'facebook', href: 'https://www.facebook.com/p/Sonatek-Steels-Private-Limited-61558543310042/' },
        { platform: 'instagram', href: 'https://www.instagram.com/sonateksteelsolutions' },
        { platform: 'youtube', href: 'https://www.youtube.com/@SonatekSteels' },
    ],
};
