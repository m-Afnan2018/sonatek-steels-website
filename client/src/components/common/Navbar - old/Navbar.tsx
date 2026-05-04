"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
    {
        label: "What We Do",
        mega: true,
        columns: [
            {
                heading: "Our Services",
                links: [
                    { label: "Ports & Terminals", href: "#" },
                    { label: "Logistics & Services", href: "#" },
                    { label: "Maritime & Inland", href: "#" },
                    { label: "Technology Solutions", href: "#" },
                    { label: "Freezone", href: "#" },
                ],
            },
            {
                heading: "Industries",
                links: [
                    { label: "Retail & E-Commerce", href: "#" },
                    { label: "Automotive", href: "#" },
                    { label: "Energy & Resources", href: "#" },
                    { label: "FMCG", href: "#" },
                    { label: "Healthcare", href: "#" },
                ],
            },
            {
                heading: "Solutions",
                links: [
                    { label: "Supply Chain Visibility", href: "#" },
                    { label: "Cold Chain Logistics", href: "#" },
                    { label: "Trade Finance", href: "#" },
                    { label: "Smart Trade", href: "#" },
                ],
            },
        ],
    },
    {
        label: "Who We Are",
        mega: true,
        columns: [
            {
                heading: "About DP World",
                links: [
                    { label: "Our Story", href: "#" },
                    { label: "Leadership", href: "#" },
                    { label: "Global Network", href: "#" },
                    { label: "Awards & Recognition", href: "#" },
                ],
            },
            {
                heading: "Sustainability",
                links: [
                    { label: "Our Commitment", href: "#" },
                    { label: "Environment", href: "#" },
                    { label: "Social Impact", href: "#" },
                    { label: "Governance", href: "#" },
                ],
            },
        ],
    },
    { label: "Locations", mega: false, href: "#" },
    { label: "News & Insights", mega: false, href: "#" },
    { label: "Careers", mega: false, href: "#" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
    };

    return (
        <header
            className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
            ref={navRef}
        >
            {/* Top utility bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarInner}>
                    <span className={styles.topBarText}>
                        We Make Trade Flow
                    </span>
                    <div className={styles.topBarLinks}>
                        <a href="#">Investor Relations</a>
                        <a href="#">Media</a>
                        <a href="#">Contact Us</a>
                        <a href="#" className={styles.langToggle}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            EN
                        </a>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <nav className={styles.nav}>
                <div className={styles.navInner}>
                    {/* Logo */}
                    <a href="/" className={styles.logo}>
                        <svg
                            width="140"
                            height="36"
                            viewBox="0 0 140 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="36"
                                height="36"
                                rx="4"
                                fill="#E4002B"
                            />
                            <text
                                x="6"
                                y="26"
                                fontSize="18"
                                fontWeight="800"
                                fill="white"
                                fontFamily="sans-serif"
                            >
                                DP
                            </text>
                            <text
                                x="44"
                                y="24"
                                fontSize="16"
                                fontWeight="700"
                                fill="white"
                                fontFamily="sans-serif"
                                letterSpacing="1"
                            >
                                WORLD
                            </text>
                        </svg>
                    </a>

                    {/* Desktop nav links */}
                    <ul className={styles.navLinks}>
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item.label}
                                className={`${styles.navItem} ${activeMenu === item.label ? styles.active : ""}`}
                                onMouseEnter={() =>
                                    item.mega && handleMouseEnter(item.label)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href={item.href || "#"}
                                    className={styles.navLink}
                                >
                                    {item.label}
                                    {item.mega && (
                                        <svg
                                            className={styles.chevron}
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    )}
                                </a>

                                {/* Mega menu */}
                                {item.mega &&
                                    item.columns &&
                                    activeMenu === item.label && (
                                        <div
                                            className={styles.megaMenu}
                                            onMouseEnter={() =>
                                                handleMouseEnter(item.label)
                                            }
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={styles.megaInner}>
                                                {item.columns.map((col) => (
                                                    <div
                                                        key={col.heading}
                                                        className={
                                                            styles.megaCol
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                styles.megaHeading
                                                            }
                                                        >
                                                            {col.heading}
                                                        </span>
                                                        <ul>
                                                            {col.links.map(
                                                                (link) => (
                                                                    <li
                                                                        key={
                                                                            link.label
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={
                                                                                link.href
                                                                            }
                                                                            className={
                                                                                styles.megaLink
                                                                            }
                                                                        >
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                            >
                                                                                <polyline points="9 18 15 12 9 6" />
                                                                            </svg>
                                                                            {
                                                                                link.label
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA + Hamburger */}
                    <div className={styles.navRight}>
                        <a href="#" className={styles.ctaBtn}>
                            Get in Touch
                        </a>
                        <button
                            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
                            onClick={() => setMobileOpen((p) => !p)}
                            aria-label="Toggle menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ""}`}
            >
                <ul className={styles.mobileList}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label} className={styles.mobileItem}>
                            {item.mega ? (
                                <>
                                    <button
                                        className={styles.mobileItemBtn}
                                        onClick={() =>
                                            setMobileExpanded((p) =>
                                                p === item.label
                                                    ? null
                                                    : item.label,
                                            )
                                        }
                                    >
                                        {item.label}
                                        <svg
                                            className={`${styles.chevron} ${mobileExpanded === item.label ? styles.chevronUp : ""}`}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    {mobileExpanded === item.label && (
                                        <div className={styles.mobileSubmenu}>
                                            {item.columns?.map((col) => (
                                                <div
                                                    key={col.heading}
                                                    className={styles.mobileCol}
                                                >
                                                    <span
                                                        className={
                                                            styles.mobileColHeading
                                                        }
                                                    >
                                                        {col.heading}
                                                    </span>
                                                    {col.links.map((link) => (
                                                        <a
                                                            key={link.label}
                                                            href={link.href}
                                                            className={
                                                                styles.mobileSubLink
                                                            }
                                                        >
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={item.href}
                                    className={styles.mobileItemBtn}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                    <li>
                        <a href="#" className={styles.mobileCtaBtn}>
                            Get in Touch
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
