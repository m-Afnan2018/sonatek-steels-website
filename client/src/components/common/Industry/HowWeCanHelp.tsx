"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./HowWeCanHelp.module.css";

interface HelpItem {
  title: string;
  image: string;
  href: string;
}

interface HowWeCanHelpProps {
  label?: string;
  title: string;
  subtitle: string;
  items: HelpItem[];
}

export default function HowWeCanHelp({
  label = "INDUSTRY SOLUTIONS",
  title,
  subtitle,
  items
}: HowWeCanHelpProps) {
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
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className={styles.label}>{label}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <Link 
              href={item.href} 
              key={index} 
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.explore}>
                  Explore
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
