"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Ports & Terminals",
    desc: "Operating world-class container terminals with state-of-the-art infrastructure across every major trade corridor.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Logistics & Services",
    desc: "Integrated end-to-end logistics solutions that bring complete supply chain visibility and control to your business.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Maritime Services",
    desc: "End-to-end maritime freight and vessel management solutions connecting every ocean route globally.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
        <path d="M4 19V9l8-5 8 5v10" />
        <line x1="12" y1="4" x2="12" y2="19" />
        <line x1="4" y1="14" x2="20" y2="14" />
      </svg>
    ),
  },
  {
    title: "Freezone",
    desc: "A world-class business environment at Jebel Ali with unmatched connectivity, infrastructure, and incentives.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Technology",
    desc: "Proprietary digital platforms and smart technology delivering full supply chain visibility from origin to destination.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Services() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services} ref={ref}>
      <div className={styles.inner}>
        {/* Section header */}
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.heading}>
            End-to-End Supply
            <br />
            Chain Solutions
          </h2>
          <p className={styles.sub}>
            From the world&apos;s busiest ports to last-mile delivery, we
            connect global commerce with precision, scale, and intelligence.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <article
              key={svc.title}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className={styles.img}
                />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{svc.icon}</div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>
                <a href="#" className={styles.cardLink}>
                  Explore
                  <svg
                    width="14"
                    height="14"
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
              <div className={styles.cardAccent} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
