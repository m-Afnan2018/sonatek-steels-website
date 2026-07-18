// Lean, server-side mirror of client/src/lib/blockRegistry.ts — no React
// imports, just enough to validate a block instance on write. Keep the two
// files' keys in sync by hand.

export const BLOCK_KEYS = [
    'hero',
    'global-network',
    'beyond-business',
    'cta-banner-home',
    'mission-section',
    'sticky-nav',
    'services-section',
    'faq-section',
    'cta-banner-industry',
    'industry-hero',
    'stats-section',
    'how-we-can-help',
    'icon-grid',
    'process-steps',
    'map-section',
    'impact',
    'services-home',
    'testimonials',
    'built-to-deliver',
    'video-teaser',
    'service-hero',
    'solution-hero',
    'innovation-section',
    'alternate-card-section',
    'hero-section',
    'focus-areas-section',
    'cta-section',
    'sustainability-partners',
    'key-documents',
    'related-documents',
    'sustainability-faqs',
    'featured-news-card',
    'news-card',
    'why-sonatek',
    'single-platform',
    'latest-news',
    'solution-insights',
    'text-sections',
    'join-team-cta',
] as const;

export type BlockKey = (typeof BLOCK_KEYS)[number];

// Top-level `data` fields that must be present (and non-empty, for strings/arrays)
// for a block instance of this type to be considered valid.
export const REQUIRED_FIELDS: Record<BlockKey, string[]> = {
    'hero': [],
    'global-network': [],
    'beyond-business': [],
    'cta-banner-home': [],
    'mission-section': ['label', 'title'],
    'sticky-nav': [],
    'services-section': ['title', 'subtitle', 'services'],
    'faq-section': ['title', 'items'],
    'cta-banner-industry': ['title', 'description', 'btnText', 'btnHref', 'bgImage'],
    'industry-hero': ['title', 'description', 'image'], // label can legitimately be empty (real port-network page does exactly this)
    'stats-section': ['label', 'title', 'description', 'stats'],
    'how-we-can-help': ['title', 'subtitle', 'items'],
    'icon-grid': ['title', 'subtitle', 'items'],
    'process-steps': ['title', 'steps'],
    'map-section': ['title', 'description', 'mapImage'],
    'impact': [],
    'services-home': [], // products is optional — component falls back to its own curated cards
    'testimonials': [], // items is optional — component falls back to its own curated list
    'built-to-deliver': ['title', 'subtitle', 'points'],
    'video-teaser': [],
    'service-hero': ['title', 'description', 'image'],
    'solution-hero': ['title', 'description', 'image', 'breadcrumbs'],
    'innovation-section': ['title', 'subtitle', 'items'],
    'alternate-card-section': ['title', 'description', 'image'], // link is optional — about-us "Our Mission" section has no button
    'hero-section': ['title', 'description', 'bgImage'],
    'focus-areas-section': ['title', 'description', 'areas'],
    'cta-section': ['title', 'description', 'buttonText', 'buttonLink', 'bgImage'],
    'sustainability-partners': ['partners'],
    'key-documents': ['documents'],
    'related-documents': ['documents'],
    'sustainability-faqs': ['faqs'],
    'featured-news-card': ['date', 'title', 'imageUrl', 'link'],
    'news-card': ['date', 'title', 'imageUrl', 'link'],
    'why-sonatek': [],
    'single-platform': [],
    'latest-news': [],
    'solution-insights': [],
    'text-sections': ['title', 'sections'],
    'join-team-cta': ['title', 'description', 'buttonText', 'buttonLink'],
};

export function isValidBlockKey(key: string): key is BlockKey {
    return (BLOCK_KEYS as readonly string[]).includes(key);
}

function isEmpty(value: unknown): boolean {
    if (value === undefined || value === null || value === '') return true;
    if (Array.isArray(value)) return value.length === 0;
    return false;
}

// Returns a list of human-readable problems; empty array means valid.
export function validateBlockInstance(blockType: string, data: Record<string, unknown>): string[] {
    if (!isValidBlockKey(blockType)) return [`Unknown block type "${blockType}"`];
    const required = REQUIRED_FIELDS[blockType];
    const problems: string[] = [];
    for (const field of required) {
        if (isEmpty(data?.[field])) problems.push(`"${blockType}" is missing required field "${field}"`);
    }
    return problems;
}
