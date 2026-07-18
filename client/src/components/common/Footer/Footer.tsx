import type { ReactNode } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { DEFAULT_FOOTER, type FooterSettings, type FooterSocialLink } from "@/lib/footerSchema";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchProducts() {
    try {
        const res = await fetch(`${API_URL}/api/products`, { next: { revalidate: 3600 } });
        if (!res.ok) return [];
        const data = await res.json();
        return data.products || [];
    } catch (error) {
        console.error('Error fetching products for footer:', error);
        return [];
    }
}

async function fetchFooterSettings(): Promise<FooterSettings> {
    try {
        const res = await fetch(`${API_URL}/api/footer`, { next: { revalidate: 3600 } });
        if (!res.ok) return DEFAULT_FOOTER;
        const data = await res.json();
        return data.footer ?? DEFAULT_FOOTER;
    } catch (error) {
        console.error('Error fetching footer settings:', error);
        return DEFAULT_FOOTER;
    }
}

// Social icon SVGs — the platform key picks which of these renders per
// admin-configured socialLinks entry; unrecognized platforms fall back to a
// generic link icon rather than being skipped.
const SOCIAL_ICON_PATHS: Record<string, ReactNode> = {
    linkedin: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    facebook: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    instagram: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    ),
    twitter: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    youtube: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2d2a8e" />
        </svg>
    ),
};
const GENERIC_SOCIAL_ICON = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const SocialIcons = ({ links }: { links: FooterSocialLink[] }) => (
    <div className={styles.socials}>
        {links.filter((s) => s.href).map((s) => (
            <a key={s.platform} href={s.href} className={styles.socialBtn} aria-label={s.platform}>
                {SOCIAL_ICON_PATHS[s.platform.toLowerCase()] ?? GENERIC_SOCIAL_ICON}
            </a>
        ))}
    </div>
);

export default async function Footer() {
    const [products, footerSettings] = await Promise.all([fetchProducts(), fetchFooterSettings()]);

    // Fallback if API fails
    const displayProducts = products.length > 0 ? products.slice(0, 6) : [
        { name: "Hot Rolled Sheets", slug: "hr-sheets" },
        { name: "Hot Rolled Coils", slug: "hr-coils" },
        { name: "Cold Rolled Sheets", slug: "cr-sheets" },
        { name: "Cold Rolled Coils", slug: "cr-coils" },
        { name: "Chequered Plates", slug: "chequered-plates" },
        { name: "Heavy Plates", slug: "heavy-plates" },
    ];

    const productColumn = {
        heading: "Products",
        links: displayProducts.map((p: any) => ({
            label: p.name,
            href: `/products/${p.slug}`
        }))
    };

    const configuredColumns = footerSettings.columns?.length ? footerSettings.columns : DEFAULT_FOOTER.columns;
    // Products slots in after the first configured column (mirrors the
    // original fixed layout: Solutions, Products, Sonatek, Policy, Support).
    const ALL_COLUMNS = [
        configuredColumns[0],
        productColumn,
        ...configuredColumns.slice(1),
    ];
    const legalLinks = footerSettings.legalLinks?.length ? footerSettings.legalLinks : DEFAULT_FOOTER.legalLinks;
    const socialLinks = footerSettings.socialLinks?.length ? footerSettings.socialLinks : DEFAULT_FOOTER.socialLinks;

    return (
        <footer className={styles.footer}>
            {/* ── Main footer area ── */}
            <div className={styles.main}>
                <div className={styles.inner}>
                    {/* Logo column */}
                    <div className={styles.logoCol}>
                        <Image src={Logo} alt="Sonatek Steels Logo" width={200} height={50} />
                    </div>


                    {/* Link columns */}
                    <div className={styles.cols}>
                        {ALL_COLUMNS.map((col) => (
                            <div key={col.heading} className={styles.col}>
                                <h3 className={styles.colHeading}>
                                    {col.heading}
                                </h3>
                                <ul className={styles.linkList}>
                                    {col.links.map((link: { label: string, href: string }) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className={styles.link}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                {col.heading === "Support" && (
                                    <div className={styles.footerMapWrapper}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4428054452033!2d77.13524957616641!3d28.646452975657375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031f41d3f835%3A0x83ddffc0dd8683a1!2sSonatek%20Steels!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
                                            width="100%"
                                            height="130"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Sonatek Steels Footer Location Map"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    {/* Legal links with pipe separators */}
                    <nav className={styles.legalLinks} aria-label="Legal">
                        {legalLinks.map((link, i) => (
                            <span key={link.label} className={styles.legalItem}>
                                {i > 0 && (
                                    <span className={styles.pipe}>|</span>
                                )}
                                <Link
                                    href={link.href}
                                    className={styles.legalLink}
                                >
                                    {link.label}
                                </Link>
                            </span>
                        ))}
                    </nav>

                    {/* Social icons */}
                    <SocialIcons links={socialLinks} />
                </div>
            </div>
        </footer>
    );
}
