"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SinglePlatform.module.css";

export default function SinglePlatform() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={ref}>
            <div className={`${styles.inner} ${visible ? styles.visible : ""}`}>
                {/* Label */}
                <p className={styles.label}>A Single Platform for Trade</p>

                {/* Headline */}
                <h2 className={styles.headline}>
                    One Partner. Total
                    <br />
                    Steel Solutions.
                </h2>

                {/* Subtext */}
                <p className={styles.sub}>
                    Whatever your project, whatever your requirement, we have
                    the complete range of flat steel products and custom 
                    processing solutions. That&apos;s the Sonatek Steels advantage.
                </p>

                {/* Outlined pill CTA */}
                <a href="#" className={styles.ctaBtn}>
                    Find Your Solution
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
