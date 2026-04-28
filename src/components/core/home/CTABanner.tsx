"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
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
            {/* Background image */}
            <div
                className={styles.bg}
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85')",
                }}
            />

            {/* Dark overlay — heavy left, fades right */}
            <div className={styles.overlay} />

            {/* Content */}
            <div
                className={`${styles.content} ${visible ? styles.visible : ""}`}
            >
                <h2 className={styles.headline}>
                    Talk to a Logistics
                    <br />
                    Expert
                </h2>
                <p className={styles.sub}>
                    Get solutions that fit your business needs. Talk to a supply
                    chain expert today.
                </p>
                <a href="#" className={styles.ctaBtn}>
                    Contact Us
                    <svg
                        width="16"
                        height="16"
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
