"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CTABanner.module.css";
import Link from "next/link";

interface CTABannerProps {
  title: string;
  description: string;
  btnText: string;
  btnHref: string;
  bgImage: string;
}

export default function CTABanner({
  title,
  description,
  btnText,
  btnHref,
  bgImage
}: CTABannerProps) {
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
            { threshold: 0.2 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div
                className={styles.bg}
                style={{
                    backgroundImage: `url('${bgImage}')`,
                }}
            />
            <div className={styles.overlay} />
            <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
                <h2 className={styles.headline}>{title}</h2>
                <p className={styles.sub}>{description}</p>
                <Link href={btnHref} className={styles.ctaBtn}>
                    {btnText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
