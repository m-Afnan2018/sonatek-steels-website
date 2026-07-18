"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SinglePlatform.module.css";

interface SinglePlatformProps {
    label?: string;
    headline?: string;
    sub?: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function SinglePlatform({
    label = "A Single Platform for Trade",
    headline = "One Partner. Total\nSteel Solutions.",
    sub = "Whatever your project, whatever your requirement, we have the complete range of flat steel products and custom processing solutions. That's the Sonatek Steels advantage.",
    ctaText = "Find Your Solution",
    ctaHref = "/supply-chain",
}: SinglePlatformProps = {}) {
    const headlineLines = headline.split("\n");
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
                <p className={styles.label}>{label}</p>

                {/* Headline */}
                <h2 className={styles.headline}>
                    {headlineLines.map((line, i) => (
                        <span key={i}>{line}{i < headlineLines.length - 1 && <br />}</span>
                    ))}
                </h2>

                {/* Subtext */}
                <p className={styles.sub}>
                    {sub}
                </p>

                {/* Outlined pill CTA */}
                <a href={ctaHref} className={styles.ctaBtn}>
                    {ctaText}
                    <div className={styles.arrowContainer}>
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
                            className={styles.arrow1}
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
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
                            className={styles.arrow2}
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    );
}
