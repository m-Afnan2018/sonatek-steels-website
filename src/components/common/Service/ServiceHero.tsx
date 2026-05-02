"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ServiceHero.module.css";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceHero({
  title,
  description,
  image,
  ctaText = "Read More",
  ctaHref = "#"
}: ServiceHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.crumb}>Home</Link>
            <span className={styles.separator}> &gt; </span>
            <Link href="/services" className={styles.crumb}>Our Services</Link>
            <span className={styles.separator}> &gt; </span>
            <span className={styles.current}>{title}</span>
          </div>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          
          <Link href={ctaHref} className={styles.cta}>
            {ctaText}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
