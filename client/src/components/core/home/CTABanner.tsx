"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CTABanner.module.css";

interface CTABannerProps {
    headline?: string;
    sub?:      string;
    btnText?:  string;
    btnLink?:  string;
    bgImage?:  string;
}

export default function CTABanner({
    headline = "Talk to a Steel\nExpert",
    sub      = "Get solutions that fit your industrial needs. Talk to a flat steel product expert today.",
    btnText  = "Contact Us",
    btnLink  = "/contact-us",
    bgImage  = "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85",
}: CTABannerProps = {}) {
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

    const headlineLines = headline.split("\\n");

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.bg} style={{ backgroundImage: `url('${bgImage}')` }} />
            <div className={styles.overlay} />
            <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
                <h2 className={styles.headline}>
                    {headlineLines.map((line, i) => (
                        <span key={i}>{line}{i < headlineLines.length - 1 && <br />}</span>
                    ))}
                </h2>
                <p className={styles.sub}>{sub}</p>
                <a href={btnLink} className={styles.ctaBtn}>
                    {btnText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
