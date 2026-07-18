import type { BlockFieldSchema } from '@/lib/blockRegistry';

export interface NavLink {
    label: string;
    href: string;
    /** Optional per-link preview shown in the feature slider on hover; falls back to the item's default featured cards when unset. */
    previewImg?: string;
    previewCta?: string;
}
export interface NavSection { title: string; links: NavLink[]; }
export interface NavFeatured { img: string; title: string; cta: string; href: string; }
export interface NavItem {
    label: string;
    href: string;
    hasMegaMenu: boolean;
    featured: NavFeatured[];
    sections: NavSection[];
}
/** One entry in the navbar's click-to-call dropdown. */
export interface NavPhone {
    name: string;
    role: string;
    /** Displayed number, e.g. "+91 84470 83022" */
    phone: string;
    /** tel: link value, digits only (with country code, no spaces/+), e.g. "918447083022" */
    tel: string;
}
export interface NavbarSettings {
    logoUrl: string;
    phones: NavPhone[];
    mapUrl: string;
    navItems: NavItem[];
}

// Field schema for one entry in the click-to-call dropdown.
export const PHONE_ITEM_SCHEMA: BlockFieldSchema[] = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'role', label: 'Role (e.g. "Owner", "Sales (Delhi)")', type: 'text' },
    { key: 'phone', label: 'Displayed number (e.g. "+91 84470 83022")', type: 'text' },
    { key: 'tel', label: 'Dial number, digits only with country code, no + or spaces (e.g. "918447083022")', type: 'text' },
];

// Field schema for one nav item — reuses the same BlockFieldForm/ListField
// system built for the Page Builder, which already supports arbitrarily
// nested `list` fields (list of sections, each with a nested list of links).
export const NAV_ITEM_SCHEMA: BlockFieldSchema[] = [
    { key: 'label', label: 'Label', type: 'text' },
    { key: 'href', label: 'Link (use # if this item only opens a mega menu)', type: 'text' },
    { key: 'hasMegaMenu', label: 'Has mega menu', type: 'boolean' },
    {
        key: 'featured', label: 'Featured cards (mega menu only)', type: 'list',
        itemSchema: [
            { key: 'img', label: 'Image', type: 'image' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'cta', label: 'CTA text', type: 'text' },
            { key: 'href', label: 'Link', type: 'text' },
        ],
    },
    {
        key: 'sections', label: 'Mega menu sections (mega menu only)', type: 'list',
        itemSchema: [
            { key: 'title', label: 'Section title (a section titled exactly "FLAT STEEL PRODUCTS" always auto-syncs its links from live Products, edits to its links here are ignored)', type: 'text' },
            {
                key: 'links', label: 'Links', type: 'list',
                itemSchema: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                    { key: 'previewImg', label: 'Preview image (shown in feature slider on hover, optional)', type: 'image' },
                    { key: 'previewCta', label: 'Preview CTA text (optional, defaults to "Learn More")', type: 'text' },
                ],
            },
        ],
    },
];

// Mirrors the real hardcoded NAV_DATA previously in Navbar.tsx — used as
// the fallback when the API is unreachable or no settings doc exists yet,
// and as the admin form's starting values.
export const DEFAULT_NAVBAR: NavbarSettings = {
    logoUrl: '',
    phones: [
        { name: 'Vijay Jain', role: 'Owner', phone: '+91 84470 83022', tel: '918447083022' },
        { name: 'Rajesh', role: 'Sales (Delhi)', phone: '+91 90154 16940', tel: '919015416940' },
    ],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028',
    navItems: [
        {
            label: 'Solutions',
            href: '#',
            hasMegaMenu: true,
            featured: [
                {
                    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
                    title: 'Certified sourcing and technical support.',
                    cta: 'Learn More',
                    href: '/steel-procurement',
                },
            ],
            sections: [
                {
                    title: 'FLAT STEEL PRODUCTS',
                    links: [
                        { label: 'Cold Rolled (CR) Coils', href: '/products/cr-coils' },
                        { label: 'CR Sheets', href: '/products/cr-sheets' },
                        { label: 'Hot Rolled (HR) Coils', href: '/products/hr-coils' },
                        { label: 'HR Sheets/Plates', href: '/products/hr-sheets' },
                        { label: 'Chequered Plates', href: '/products/chequered-plates' },
                    ],
                },
                {
                    title: 'INDUSTRIAL SEGMENTS',
                    links: [
                        { label: 'Construction', href: '/industries/construction' },
                        { label: 'Automotive', href: '/industries/automotive' },
                        { label: 'Oil & Gas', href: '/industries/oil-gas' },
                        { label: 'Shipbuilding', href: '/industries/shipbuilding' },
                        { label: 'Heavy Engineering', href: '/industries/heavy-engineering' },
                        { label: 'Fabricators & OEMs', href: '/industries/fabricators-oems' },
                    ],
                },
                {
                    title: 'SOLUTIONS',
                    links: [
                        { label: 'Steel Procurement', href: '/steel-procurement' },
                        { label: 'Custom Steel Processing', href: '/custom-steel-processing' },
                        { label: 'Infrastructure & Industrial Project', href: '/infrastructure-industrial-project' },
                        { label: 'Technical Steel Selection', href: '/technical-steel-selection' },
                        { label: 'Supply Chain Solutions', href: '/supply-chain' },
                        { label: 'Freight Forwarding Services', href: '/freight-forwarding' },
                        { label: 'Industrial Procurement', href: '/industrial-procurement' },
                        { label: 'OEM Supply Solutions', href: '/oem-supply-solutions' },
                        { label: 'Project Based Steel Supply', href: '/project-based-steel' },
                        { label: 'Ready Stock Supply', href: '/ready-stock-supply' },
                        { label: 'Annual Supply Contract', href: '/annual-supply-contract' },
                        { label: 'Logistics & Delivery', href: '/logistics-delivery' },
                    ],
                },
                {
                    title: 'SERVICES',
                    links: [
                        { label: 'Custom Processing', href: '/custom-steel-processing' },
                        { label: 'Distribution Support', href: '/supply-chain' },
                        { label: 'Technical Assistance', href: '/technical-steel-selection' },
                        { label: 'Coil Slitting', href: '/services/coil-slitting' },
                        { label: 'Cut-To-Length Service', href: '/services/cut-to-length' },
                        { label: 'Luster Steel Processing', href: '/services/luster-steel-processing' },
                        { label: 'Bulk Industrial Supply', href: '/services/bulk-industrial-supply' },
                        { label: 'Delivery & Logistics Service', href: '/services/logistics-delivery' },
                    ],
                },
            ],
        },
        { label: 'Products', href: '/products', hasMegaMenu: false, featured: [], sections: [] },
        { label: 'About Us', href: '/about-us', hasMegaMenu: false, featured: [], sections: [] },
        { label: 'Sustainability', href: '/sustainability', hasMegaMenu: false, featured: [], sections: [] },
        { label: 'Blogs', href: '/blogs', hasMegaMenu: false, featured: [], sections: [] },
        { label: 'Contact', href: '/contact-us', hasMegaMenu: false, featured: [], sections: [] },
    ],
};
