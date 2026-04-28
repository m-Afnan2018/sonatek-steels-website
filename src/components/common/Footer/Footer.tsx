import styles from "./Footer.module.css";

const COLUMNS = [
    {
        heading: "Solutions",
        links: [
            { label: "End to End Services", href: "#" },
            { label: "Freight Forwarding", href: "#" },
            { label: "Contract Logistics", href: "#" },
            { label: "Market Access", href: "#" },
            { label: "Economic Zones", href: "#" },
            { label: "Marine Services", href: "#" },
            { label: "Ports & Terminals", href: "#" },
        ],
    },
    {
        heading: "Industries",
        links: [
            { label: "Automotive", href: "#" },
            { label: "Chemicals", href: "#" },
            { label: "FMCG", href: "#" },
            { label: "Healthcare", href: "#" },
            { label: "Industrials", href: "#" },
            { label: "Perishables", href: "#" },
            { label: "Retail", href: "#" },
            { label: "Technology", href: "#" },
        ],
    },
    {
        heading: "Quick Links",
        links: [
            { label: "Sustainability", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "Insights", href: "#" },
            { label: "News", href: "#" },
            { label: "Self-service Tools", href: "#" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Our Leadership", href: "#" },
            { label: "Our Governance", href: "#" },
            { label: "Our Locations", href: "#" },
            { label: "Investors", href: "#" },
            { label: "Partnerships", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact & Support", href: "#" },
        ],
    },
    {
        heading: "Connected",
        links: [
            { label: "World Logistics Passport", href: "#" },
            { label: "Freight Forwarding Alliance", href: "#" },
            { label: "DryDocks.gov.ae", href: "#" },
            { label: "Trade Finance", href: "#" },
            { label: "Digital Solutions", href: "#" },
        ],
    },
];

const LEGAL_LINKS = [
    { label: "Sitemap", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Notice", href: "#" },
    { label: "Cookie Preferences", href: "#" },
    { label: "Whistleblowing Hotline", href: "#" },
    { label: "Modern Slavery Act", href: "#" },
    { label: "Vulnerability Disclosure", href: "#" },
];

// Social icon SVGs
const SocialIcons = () => (
    <div className={styles.socials}>
        {/* LinkedIn */}
        <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        </a>
        {/* Facebook */}
        <a href="#" className={styles.socialBtn} aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        </a>
        {/* Instagram */}
        <a href="#" className={styles.socialBtn} aria-label="Instagram">
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        </a>
        {/* X / Twitter */}
        <a href="#" className={styles.socialBtn} aria-label="X (Twitter)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        </a>
        {/* YouTube */}
        <a href="#" className={styles.socialBtn} aria-label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="#2d2a8e"
                />
            </svg>
        </a>
    </div>
);

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* ── Main footer area ── */}
            <div className={styles.main}>
                <div className={styles.inner}>
                    {/* Logo column */}
                    <div className={styles.logoCol}>
                        {/* Swoosh SVG — large version */}
                        <svg
                            width="80"
                            height="64"
                            viewBox="0 0 48 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.swoosh}
                        >
                            <path
                                d="M4 32 C14 22, 28 19, 42 25 C47 27, 50 30, 54 27"
                                stroke="#3DB87A"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <path
                                d="M3 23 C13 14, 28 11, 42 17 C47 19, 50 23, 54 19"
                                stroke="#5DD49A"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.85"
                            />
                            <path
                                d="M8 13 C17 4, 29 2, 41 8 C47 11, 50 16, 54 12"
                                stroke="#D94068"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                        <span className={styles.logoText}>DP WORLD</span>
                    </div>

                    {/* Link columns */}
                    <div className={styles.cols}>
                        {COLUMNS.map((col) => (
                            <div key={col.heading} className={styles.col}>
                                <h3 className={styles.colHeading}>
                                    {col.heading}
                                </h3>
                                <ul className={styles.linkList}>
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className={styles.link}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
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
                        {LEGAL_LINKS.map((link, i) => (
                            <span key={link.label} className={styles.legalItem}>
                                {i > 0 && (
                                    <span className={styles.pipe}>|</span>
                                )}
                                <a
                                    href={link.href}
                                    className={styles.legalLink}
                                >
                                    {link.label}
                                </a>
                            </span>
                        ))}
                    </nav>

                    {/* Social icons */}
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}
