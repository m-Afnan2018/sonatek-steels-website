'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Navbar.module.css';

// SVG Icons
const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const LogoIcon = () => (
  <svg
    className={styles.logoIcon}
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* A simple abstraction of the logo icon */}
    <path
      d="M50 20 C20 20 10 40 10 60 C10 80 30 90 60 90 C80 90 90 70 90 50"
      stroke="#E3003F"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M60 20 C90 20 100 40 100 60 C100 80 80 90 50 90"
      stroke="#00C1D5"
      strokeWidth="8"
      strokeLinecap="round"
      style={{ mixBlendMode: 'screen' }}
    />
  </svg>
);

const NAV_DATA = [
  {
    label: 'Solutions',
    href: '#',
    hasMegaMenu: true,
    featured: [
      {
        img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'See how we deliver for our customers.',
        cta: 'Case Studies',
        href: '/case-studies/logistics',
      },
      {
        img: 'https://images.unsplash.com/photo-1770027218173-45e512200cd0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Exploring new horizons in logistics.',
        cta: 'Learn More',
        href: '/about/innovation',
      },
    ],
    sections: [
      {
        title: 'SUPPLY CHAIN',
        links: [
          { label: 'End-to-End Services', href: '/solutions/end-to-end' },
          {
            label: 'Freight Forwarding',
            href: '/solutions/freight-forwarding',
          },
          {
            label: 'Contract Logistics',
            href: '/solutions/contract-logistics',
          },
          { label: 'Market Access', href: '/solutions/market-access' },
          { label: 'Marine Services', href: '/solutions/marine-services' },
        ],
      },
      {
        title: 'INDUSTRIES',
        links: [
          { label: 'Automotive', href: '/industries/automotive' },
          { label: 'Chemicals', href: '/industries/chemicals' },
          { label: 'FMCG', href: '/industries/fmcg' },
          { label: 'Healthcare', href: '/industries/healthcare' },
          { label: 'Industrial', href: '/industries/industrial' },
        ],
      },
      {
        title: 'PORTS & TERMINALS',
        links: [
          { label: 'Our Port Services', href: '/ports/services' },
          { label: 'Our Port Network', href: '/ports/network' },
          {
            label: 'Port Technology & Innovation',
            href: '/ports/innovation',
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us"
  },
  {
    label: 'Tools & Insights',
    href: '#',
    hasMegaMenu: true,
    sections: [
      {
        title: 'RESOURCES',
        links: [
          { label: 'Knowledge Hub', href: '/insights/knowledge' },
          { label: 'Whitepapers', href: '/insights/whitepapers' },
          { label: 'Case Studies', href: '/insights/case-studies' },
        ],
      },
      {
        title: 'TOOLS',
        links: [
          { label: 'Track & Trace', href: '/tools/track' },
          { label: 'Schedules', href: '/tools/schedules' },
          { label: 'Request a Quote', href: '/tools/quote' },
        ],
      },
    ],
    featured: [
      {
        img: 'https://images.unsplash.com/photo-1777195680731-454a40402349?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'See how we deliver for our customers.',
        cta: 'Case Studies',
        href: '/case-studies/insights',
      },
    ],
  },
  { label: 'Our Company', href: '/company' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mega menu when mobile menu is closed
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setActiveMobileMenu(null);
    }
  }, [isMobileMenuOpen]);

  const MegaMenuContent = ({ item }: { item: any }) => {
    if (!item || !item.sections) return null;

    return (
      <div className={styles.megaMenuContainer}>
        <div className={styles.megaMenuLeft}>
          <h2 className={styles.megaMenuTitle}>{item.label}</h2>
          <div className={styles.megaMenuColumns} style={{ overflowX: 'auto' }}>
            {item.sections.map((section: any) => (
              <div key={section.title} className={styles.column}>
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link: any) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {item.featured && item.featured.length > 0 && (
          <div className={styles.megaMenuRight}>
            <div className={styles.featuredSlider}>
              {item.featured.map((feature: any, index: number) => (
                <div key={index} className={styles.featuredCard}>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className={styles.featuredImg}
                  />
                  <div className={styles.featuredContent}>
                    <h4>{feature.title}</h4>
                    <a href={feature.href} className={styles.caseStudyLink}>
                      {feature.cta} <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <LogoIcon />
            <a href="/">LOGO.</a>
          </div>

          {/* Desktop Nav Links */}
          <div className={styles.navLinks}>
            {NAV_DATA.map((item) =>
              item.hasMegaMenu ? (
                <button
                  key={item.label}
                  className={`${styles.navLink} ${
                    activeMenu === item.label ? styles.active : ''
                  }`}
                  onClick={() =>
                    setActiveMenu(activeMenu === item.label ? null : item.label)
                  }
                >
                  {item.label}
                </button>
              ) : (
                <a key={item.label} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Right Icons */}
          <div className={styles.navIcons}>
            <button className={styles.iconBtn}>
              <MapPinIcon />
            </button>
            <button className={styles.iconBtn}>
              <PhoneIcon />
            </button>
            {/* Mobile menu toggle */}
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Solutions Mega Menu Dropdown */}
      <AnimatePresence>
        {!isMobile && activeMenu && (
          <motion.div
            className={styles.megaMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <MegaMenuContent
              item={NAV_DATA.find((i) => i.label === activeMenu)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.mobileNavLinks}>
              {NAV_DATA.map((item) =>
                item.hasMegaMenu ? (
                  <React.Fragment key={item.label}>
                    <button
                      className={`${styles.mobileNavLink} ${
                        activeMobileMenu === item.label ? styles.active : ''
                      }`}
                      onClick={() =>
                        setActiveMobileMenu(
                          activeMobileMenu === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`${styles.chevron} ${
                          activeMobileMenu === item.label ? styles.rotated : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeMobileMenu === item.label && (
                        <motion.div
                          className={styles.mobileMegaMenu}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MegaMenuContent item={item} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.mobileNavLink}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
