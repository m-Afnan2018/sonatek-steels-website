"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Impact.module.css";

const STATS = [
    {
        prefix: "",
        value: 11,
        suffix: "+",
        label: "Years of excellence",
    },
    {
        prefix: "",
        value: 500,
        suffix: "K+",
        label: "Tons of steel delivered",
    },
    {
        prefix: "",
        value: 120,
        suffix: "+",
        label: "Industries helped",
    },
    {
        prefix: "",
        value: 95,
        suffix: "%",
        label: "Repeat customers",
    },
];

function useCountUp(target: number, duration: number, started: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
        };

        requestAnimationFrame(step);
    }, [target, duration, started]);

    return count;
}

function StatItem({
    stat,
    index,
    started,
}: {
    stat: (typeof STATS)[0];
    index: number;
    started: boolean;
}) {
    const count = useCountUp(stat.value, 1600 + index * 150, started);

    return (
        <div className={styles.statItem}>
            {/* Vertical divider — left of every item except first */}
            {index > 0 && <div className={styles.divider} />}

            <div
                className={styles.statContent}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
                <div className={styles.statNumber}>
                    {stat.prefix && (
                        <span className={styles.prefix}>{stat.prefix}</span>
                    )}
                    <span className={styles.count}>{count}</span>
                    {stat.suffix && (
                        <span className={styles.suffix}>{stat.suffix}</span>
                    )}
                </div>
                <p className={styles.statLabel}>{stat.label}</p>
            </div>
        </div>
    );
}

export default function Impact() {
    const [started, setStarted] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    setTimeout(() => setStarted(true), 200);
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
            <div className={styles.inner}>
                {/* ── Header block ── */}
                <div
                    className={`${styles.header} ${visible ? styles.visible : ""}`}
                >
                    <p className={styles.label}>Make an Impact</p>
                    <h2 className={styles.headline}>
                        Engineering Excellence
                        <br />
                        in Steel Distribution
                    </h2>
                    <p className={styles.sub}>
                        Sonatek Steels plays a vital role in Northern India's industrial growth by providing high-quality flat steel products to OEMs and corporate clients.
                    </p>
                </div>

                {/* ── Stats row ── */}
                <div
                    className={`${styles.statsRow} ${visible ? styles.statsVisible : ""}`}
                >
                    {STATS.map((stat, i) => (
                        <StatItem
                            key={i}
                            stat={stat}
                            index={i}
                            started={started}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
