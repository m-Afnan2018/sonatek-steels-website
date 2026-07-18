"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./IndustryHero.module.css";
import React, { useEffect, useState } from "react";

interface IndustryHeroProps {
  label: string;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function IndustryHero({
  label,
  title,
  description,
  image,
  ctaText = "Get in Touch",
  ctaHref = "/contact-us",
  secondaryCtaText,
  secondaryCtaHref = "/contact-us",
  breadcrumbs = [
    { label: "Home", href: "/" }
  ]
}: IndustryHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className={styles.breadcrumb}>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <Link href={crumb.href} className={styles.crumb}>{crumb.label}</Link>
                  {index < breadcrumbs.length - 1 && <span className={styles.separator}> &gt; </span>}
                </React.Fragment>
              ))}
            </div>
          )}
          
          <div className={styles.textBlock}>
            {label && <p className={styles.label}>{label}</p>}
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            
            <div className={styles.ctaRow}>
              <Link href={ctaHref} className={styles.cta}>
                {ctaText}
              </Link>
              {secondaryCtaText && (
                <Link href={secondaryCtaHref} className={styles.ctaSecondary}>
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
        
        <div className={`${styles.imageWrap} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.imageInner}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
