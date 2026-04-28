"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
    { label: "Solutions", href: "#" },
    { label: "Tools & Insights", href: "#" },
    { label: "Our Company", href: "#" },
    { label: "News", href: "#" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                mobileOpen &&
                drawerRef.current &&
                !drawerRef.current.contains(e.target as Node)
            ) {
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [mobileOpen]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
            >
                <div className={styles.inner}>
                    {/* ── Logo ── */}
                    <a
                        href="/"
                        className={styles.logo}
                        aria-label="DP World Home"
                    >
                        <svg
                            className={styles.swoosh}
                            width="48"
                            height="32"
                            viewBox="0 0 48 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Bottom green wave */}
                            <path
                                d="M2 24 C10 17, 22 15, 34 19 C39 21, 43 23, 46 21"
                                stroke="#3DB87A"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                fill="none"
                            />
                            {/* Middle green wave */}
                            <path
                                d="M2 17 C10 10, 22 8, 34 12 C39 14, 43 17, 46 14"
                                stroke="#5DD49A"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.85"
                            />
                            {/* Top red/pink wave */}
                            <path
                                d="M6 9 C13 2, 24 1, 35 6 C40 9, 43 13, 46 10"
                                stroke="#D94068"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                        <span className={styles.logoText}>DP WORLD</span>
                    </a>

                    {/* ── Desktop Nav ── */}
                    <nav className={styles.nav} aria-label="Main navigation">
                        <ul className={styles.navList}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={styles.navLink}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* ── Right side: icons + hamburger ── */}
                    <div className={styles.rightSide}>
                        {/* Location icon */}
                        <a
                            href="#"
                            className={styles.iconBtn}
                            aria-label="Find a location"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </a>

                        {/* Phone icon */}
                        <a
                            href="#"
                            className={styles.iconBtn}
                            aria-label="Contact us by phone"
                        >
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
                            onClick={() => setMobileOpen((p) => !p)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Backdrop ── */}
            <div
                className={`${styles.backdrop} ${mobileOpen ? styles.backdropVisible : ""}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />

            {/* ── Mobile Drawer ── */}
            <div
                ref={drawerRef}
                className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
                aria-hidden={!mobileOpen}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                {/* Drawer header */}
                <div className={styles.drawerHeader}>
                    <a
                        href="/"
                        className={styles.logo}
                        onClick={() => setMobileOpen(false)}
                    >
                        <svg
                            width="40"
                            height="27"
                            viewBox="0 0 48 32"
                            fill="none"
                        >
                            <path
                                d="M2 24 C10 17, 22 15, 34 19 C39 21, 43 23, 46 21"
                                stroke="#3DB87A"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <path
                                d="M2 17 C10 10, 22 8, 34 12 C39 14, 43 17, 46 14"
                                stroke="#5DD49A"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                                opacity="0.85"
                            />
                            <path
                                d="M6 9 C13 2, 24 1, 35 6 C40 9, 43 13, 46 10"
                                stroke="#D94068"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                        <span className={styles.logoText}>DP WORLD</span>
                    </a>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <nav>
                    <ul className={styles.mobileList}>
                        {NAV_LINKS.map((link, i) => (
                            <li
                                key={link.label}
                                className={styles.mobileItem}
                                style={{ animationDelay: `${i * 0.06}s` }}
                            >
                                <a
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom icon links */}
                <div className={styles.drawerFooter}>
                    <a href="#" className={styles.drawerFooterLink}>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Find a Location
                    </a>
                    <a href="#" className={styles.drawerFooterLink}>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
}
