"use client";

import styles from "./MissionSection.module.css";
import React, { useEffect, useRef, useState } from "react";

interface MissionSectionProps {
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function MissionSection({ label, title, children }: MissionSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { 
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0 
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>{label}</span>
        <h2 
          ref={titleRef} 
          className={`${styles.title} ${isVisible ? styles.titleVisible : ""}`}
        >
          {title}
        </h2>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
