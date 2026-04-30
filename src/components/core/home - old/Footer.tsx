"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

const WHAT_WE_DO = [
  "Ports & Terminals",
  "Logistics & Services",
  "Maritime Services",
  "Freezone",
  "Technology",
];

const WHO_WE_ARE = [
  "Our Story",
  "Leadership",
  "Sustainability",
  "Innovation",
  "Investor Relations",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.inner}>
          {/* Col 1: Brand */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.logo} aria-label="DP World Home">
              <span className={styles.logoBadge}>
                <span className={styles.logoDP}>DP</span>
              </span>
              <span className={styles.logoWorld}>WORLD</span>
            </a>
            <p className={styles.tagline}>We Make Trade Flow</p>
            <p className={styles.brandDesc}>
              A world-leading port operator, logistics provider and marine
              services company. Enabling the flow of trade across the globe.
            </p>
            <div className={styles.socials}>
              {/* LinkedIn */}
              <a
                href="#"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className={styles.socialBtn}
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className={styles.socialBtn}
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.05 12 20.05 12 20.05s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060c1a" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: What We Do */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>What We Do</h4>
            <ul className={styles.linkList}>
              {WHAT_WE_DO.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Who We Are */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Who We Are</h4>
            <ul className={styles.linkList}>
              {WHO_WE_ARE.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className={styles.connectCol}>
            <h4 className={styles.colHeading}>Connect</h4>
            <address className={styles.address}>
              <p>DP World, Jebel Ali Port</p>
              <p>P.O. Box 17000, Dubai, UAE</p>
            </address>
            <div className={styles.contactLinks}>
              <a href="mailto:info@dpworld.com" className={styles.contactLink}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@dpworld.com
              </a>
              <a href="tel:+97148118100" className={styles.contactLink}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +971 4 811 8100
              </a>
            </div>
            {/* Newsletter */}
            <div className={styles.newsletter}>
              <p className={styles.newsletterLabel}>Stay Updated</p>
              <form
                className={styles.newsletterForm}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className={styles.emailInput}
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; 2025 DP World. All rights reserved.
          </p>
          <nav className={styles.legalLinks} aria-label="Legal navigation">
            <a href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </a>
            <span className={styles.dot}>·</span>
            <a href="#" className={styles.legalLink}>
              Cookie Policy
            </a>
            <span className={styles.dot}>·</span>
            <a href="/terms-conditions" className={styles.legalLink}>
              Terms of Use
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
