// Every existing static top-level route segment on the public site, plus
// framework/API paths. A builder-created Page can never use one of these as
// its slug — prevents an admin from accidentally shadowing (or trying to,
// and being confused why nothing happens to) a real hardcoded route.
export const RESERVED_SLUGS = new Set([
    // public pages still served by a static hardcoded file, with no CMS
    // switcher wired up yet. Routes that DO have a switcher (home,
    // sustainability, industries-*, services-*) are deliberately left out —
    // their slug is now the canonical identifier that page's own switcher
    // fetches, not something a generic "New Page" flow should collide with.
    'leadership', 'blogs', 'products',
    'custom-steel-processing', 'freight-forwarding',
    'infrastructure-industrial-project', 'steel-procurement',
    'supply-chain', 'technical-steel-selection',
    'industrial-procurement', 'oem-supply-solutions',
    'project-based-steel', 'ready-stock-supply',
    'annual-supply-contract', 'logistics-delivery',
    // framework / API / admin
    'admin', 'api', 'uploads', 'sitemap.xml', 'robots.txt', 'favicon.ico',
]);

export function isReservedSlug(slug: string): boolean {
    return RESERVED_SLUGS.has(slug.toLowerCase().trim());
}
