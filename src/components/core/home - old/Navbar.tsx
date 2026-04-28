"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

type MegaCol = { heading: string; links: string[] };
type MegaData = Record<string, { cols: MegaCol[] }>;

const MEGA_MENUS: MegaData = {
  "What We Do": {
    cols: [
      {
        heading: "Our Services",
        links: [
          "Ports & Terminals",
          "Logistics & Services",
          "Maritime Services",
          "Freezone",
          "Technology",
        ],
      },
      {
        heading: "Our Solutions",
        links: [
          "Container Shipping",
          "Cold Chain Logistics",
          "E-commerce Fulfillment",
          "Project Cargo",
          "Supply Chain Finance",
        ],
      },
      {
        heading: "Our Regions",
        links: [
          "Middle East & Africa",
          "Asia Pacific",
          "Europe",
          "Americas",
          "Indian Subcontinent",
        ],
      },
    ],
  },
  "Who We Are": {
    cols: [
      {
        heading: "About Us",
        links: [
          "Our Story",
          "Leadership Team",
          "Our Strategy",
          "Sustainability",
          "Innovation",
        ],
      },
      {
        heading: "Our Impact",
        links: [
          "Economic Contribution",
          "Community",
          "Environment",
          "Safety",
          "Awards & Recognition",
        ],
      },
      {
        heading: "Governance",
        links: [
          "Board of Directors",
          "Corporate Governance",
          "Ethics & Compliance",
          "Investor Relations",
        ],
      },
    ],
  },
};

const NAV_ITEMS = [
  { label: "What We Do", hasMega: true },
  { label: "Who We Are", hasMega: true },
  { label: "Locations", hasMega: false },
  { label: "News & Insights", hasMega: false },
  { label: "Careers", hasMega: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <span className={styles.tagline}>We Make Trade Flow</span>
          <nav className={styles.topLinks} aria-label="Secondary navigation">
            <a href="#" className={styles.topLink}>
              Investor Relations
            </a>
            <a href="#" className={styles.topLink}>
              Media
            </a>
            <a href="#" className={styles.topLink}>
              Contact Us
            </a>
            <a href="#" className={styles.topLang}>
              <svg
                width="13"
                height="13"
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
          </nav>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <div
        className={styles.navSection}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="DP World Home">
            <span className={styles.logoBadge}>
              <span className={styles.logoDP}>DP</span>
            </span>
            <span className={styles.logoWorld}>WORLD</span>
          </a>

          {/* Desktop nav links */}
          <nav className={styles.navLinks} aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`${styles.navItem} ${activeMenu === item.label ? styles.navItemActive : ""}`}
                onMouseEnter={() =>
                  setActiveMenu(item.hasMega ? item.label : null)
                }
              >
                <a href="#" className={styles.navLink}>
                  {item.label}
                  {item.hasMega && (
                    <svg
                      className={`${styles.chevron} ${activeMenu === item.label ? styles.chevronOpen : ""}`}
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#" className={styles.ctaBtn}>
            Get in Touch
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* ── Mega menu ── */}
        {activeMenu && MEGA_MENUS[activeMenu] && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className={styles.megaInner}>
              {MEGA_MENUS[activeMenu].cols.map((col, ci) => (
                <div key={ci} className={styles.megaCol}>
                  <p className={styles.megaHeading}>{col.heading}</p>
                  <ul className={styles.megaList}>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className={styles.megaLink}>
                          <svg
                            className={styles.megaArrow}
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className={styles.mobileItem}>
              {item.hasMega ? (
                <>
                  <button
                    className={styles.mobileBtn}
                    onClick={() =>
                      setAccordion(accordion === item.label ? null : item.label)
                    }
                    aria-expanded={accordion === item.label}
                  >
                    {item.label}
                    <svg
                      className={`${styles.chevron} ${accordion === item.label ? styles.chevronOpen : ""}`}
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
                  {accordion === item.label && (
                    <div className={styles.mobileSubmenu}>
                      {MEGA_MENUS[item.label].cols.flatMap((c) => c.links).map(
                        (link) => (
                          <a key={link} href="#" className={styles.mobileSubLink}>
                            {link}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <a href="#" className={styles.mobileBtn}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <a href="#" className={styles.mobileCta}>
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
