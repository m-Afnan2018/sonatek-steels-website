"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './IconGrid.module.css';

interface IconPoint {
  icon: string;
  title: string;
  description: string;
}

interface IconGridProps {
  title: string;
  subtitle: string;
  items: IconPoint[];
}

export default function IconGrid({ title, subtitle, items }: IconGridProps) {
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
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
          {items.map((item, index) => {
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
            return (
              <div key={index} className={styles.item} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={styles.iconWrap}>
                  <IconComponent size={40} className={styles.icon} />
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
