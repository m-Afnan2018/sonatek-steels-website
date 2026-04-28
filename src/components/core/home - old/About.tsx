"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const MINI_STATS = [
  { value: "2005", label: "Founded" },
  { value: "Dubai", label: "Headquarters" },
  { value: "DSM", label: "Listed Exchange" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} ref={ref}>
      <div className={styles.layout}>
        {/* ── Left: Image ── */}
        <div
          className={`${styles.imageCol} ${visible ? styles.slideInLeft : ""}`}
        >
          <div className={styles.imgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80"
              alt="DP World aerial view of port operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.img}
            />
            <div className={styles.imgOverlay} />
            {/* Corner accent */}
            <div className={styles.cornerAccent}>
              <span className={styles.cornerH} />
              <span className={styles.cornerV} />
            </div>
          </div>
          {/* Floating badge */}
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e4002b"
                strokeWidth="1.8"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeTitle}>Top Global Operator</span>
              <span className={styles.badgeSub}>
                World&apos;s Premier Port Operator
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div
          className={`${styles.textCol} ${visible ? styles.slideInRight : ""}`}
        >
          <div className={styles.redLine} />
          <span className={styles.sectionLabel}>Who We Are</span>
          <h2 className={styles.heading}>
            A Global Leader
            <br />
            in Trade &amp; Logistics
          </h2>
          <p className={styles.body}>
            DP World is one of the world&apos;s largest port operators and
            logistics providers. We move roughly 11% of global container trade
            and facilitate the flow of goods that sustain economies and
            transform lives across six continents.
          </p>
          <p className={styles.body}>
            Founded in Dubai and operating across 40+ countries, our integrated
            infrastructure — from port terminals to inland facilities and
            digital platforms — gives our customers a single, trusted partner
            for their entire supply chain.
          </p>

          {/* Mini stats */}
          <div className={styles.miniStats}>
            {MINI_STATS.map((s) => (
              <div key={s.label} className={styles.miniStat}>
                <span className={styles.miniValue}>{s.value}</span>
                <span className={styles.miniLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a href="#" className={styles.ctaPrimary}>
              Our Story
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#" className={styles.ctaGhost}>
              Sustainability
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
