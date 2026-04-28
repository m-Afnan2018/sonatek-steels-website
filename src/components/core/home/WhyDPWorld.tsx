"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyDPWorld.module.css";

export default function WhyDPWorld() {
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
                <p className={styles.label}>Why DP World?</p>

                {/* Big headline */}
                <h2 className={styles.headline}>Anything. Anywhere.</h2>

                {/* Body */}
                <p className={styles.body}>
                    No matter your size or sector, we can help you scale your
                    trade through our global end-to-end infrastructure. From
                    local entrepreneurs to global enterprises, we connect you to
                    the markets, resources, and opportunities that matter most.
                </p>

                {/* CTA text link */}
                <a href="#" className={styles.cta}>
                    Explore Our Solutions
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
