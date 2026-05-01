"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LatestNews.module.css";
import Image from "next/image";

const NEWS = [
    {
        date: "10 May 2025",
        title: "BASICALLY STEEL: AN ALLOY OF IRON AND CARBON FOR INDUSTRIAL STRENGTH",
        href: "/news/basic",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
        isLogo: false,
    },
    {
        date: "08 May 2025",
        title: "HOT ROLLING: DEFORMING AT HIGH TEMPERATURE FOR SUPERIOR QUALITY",
        href: "/news/temp",
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
        isLogo: false,
    },
    {
        date: "01 May 2025",
        title: "SONATEK STEELS MARKS NEW MILESTONE IN NORTHERN INDIA INFRASTRUCTURE",
        href: "#",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
        isLogo: true, // We'll keep one logo placeholder but update it to Sonatek
    },
];

export default function LatestNews() {
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
            { threshold: 0.1 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.inner} ref={ref}>
                {/* Heading */}
                <h2
                    className={`${styles.heading} ${visible ? styles.visible : ""}`}
                >
                    Latest News
                </h2>

                {/* News rows */}
                <div className={styles.list}>
                    {NEWS.map((item, i) => (
                        <article
                            key={i}
                            className={`${styles.row} ${visible ? styles.rowVisible : ""}`}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            {/* Divider above rows 2 and 3 */}
                            {i > 0 && <div className={styles.divider} />}

                            <div className={styles.rowInner}>
                                {/* Left: date + title + cta */}
                                <div className={styles.left}>
                                    <time className={styles.date}>
                                        {item.date}
                                    </time>
                                    <a
                                        href={item.href}
                                        className={styles.title}
                                    >
                                        {item.title.toUpperCase()}
                                    </a>
                                    <a
                                        href={item.href}
                                        className={styles.readMore}
                                    >
                                        Read More
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
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Right: image or logo placeholder */}
                                <div className={styles.imgWrap}>
                                    {item.isLogo ? (
                                        <div className={styles.logoPlaceholder}>
                                            {/* Swoosh */}
                                            <svg
                                                width="52"
                                                height="34"
                                                viewBox="0 0 48 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12 8 C5 8 2 13 2 18 C2 23 7 26 14 26 C19 26 22 21 22 16"
                                                    stroke="#E3003F"
                                                    strokeWidth="3.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M15 8 C22 8 25 13 25 18 C25 23 20 26 12 26"
                                                    stroke="#00C1D5"
                                                    strokeWidth="3.5"
                                                    strokeLinecap="round"
                                                    opacity="0.85"
                                                />
                                            </svg>
                                            <span className={styles.logoText}>
                                                SONATEK STEELS
                                            </span>
                                        </div>
                                    ) : (
                                        <Image
                                            width={500}
                                            height={500}
                                            src={item.image!}
                                            alt={item.title}
                                            className={styles.img}
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
