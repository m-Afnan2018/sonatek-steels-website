"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './InnovationSection.module.css';

interface InnovationItem {
  title: string;
  image: string;
  description: string;
  link?: string;
}

interface InnovationSectionProps {
  title: string;
  subtitle: string;
  items: InnovationItem[];
  topLink?: { label: string; href: string };
}

export default function InnovationSection({ title, subtitle, items, topLink }: InnovationSectionProps) {
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
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {topLink && (
            <a href={topLink.href} className={styles.topLink}>
              {topLink.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
        </div>

        <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
          {items.map((item, index) => (
            <div key={index} className={styles.card} style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                {item.link && (
                    <a href={item.link} className={styles.link}>
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
