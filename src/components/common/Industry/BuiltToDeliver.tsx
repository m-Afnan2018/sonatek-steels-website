"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BuiltToDeliver.module.css";
import * as Icons from "lucide-react";

interface Point {
  icon: string;
  title: string;
  description: string;
}

interface BuiltToDeliverProps {
  label?: string;
  title: string;
  subtitle: string;
  points: Point[];
}

export default function BuiltToDeliver({
  label = "WHY SONATEK STEELS",
  title,
  subtitle,
  points
}: BuiltToDeliverProps) {
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
        {/* Header Section */}
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className={styles.label}>{label}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
          {points.map((point, index) => {
            const IconComponent = (Icons as any)[point.icon];
            return (
              <div 
                key={index} 
                className={styles.item}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrap}>
                  {IconComponent && <IconComponent size={48} strokeWidth={1} className={styles.icon} />}
                </div>
                <h3 className={styles.itemTitle}>{point.title}</h3>
                <p className={styles.itemDescription}>{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
