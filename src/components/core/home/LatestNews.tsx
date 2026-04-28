"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LatestNews.module.css";
import Image from "next/image";

const NEWS = [
    {
        date: "23 Apr 2026",
        title: "DP World Joins Clean Seas Initiative to Cut Maritime Plastic Waste",
        href: "#",
        image: null, // First item uses logo placeholder (dark bg)
        isLogo: true,
    },
    {
        date: "21 Apr 2026",
        title: "DP World Announces US$ 500,000 Investment to Expand Abuja Eye Hospital in Nigeria",
        href: "#",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
        isLogo: false,
    },
    {
        date: "20 Apr 2026",
        title: "DP World Launches First Port-Based Carbon Insets at Southampton",
        href: "#",
        image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80",
        isLogo: false,
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
                                        /* Dark bg with DP World logo — matches screenshot item 1 */
                                        <div className={styles.logoPlaceholder}>
                                            {/* Swoosh */}
                                            <svg
                                                width="52"
                                                height="34"
                                                viewBox="0 0 48 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 24 C10 17, 22 15, 34 19 C39 21, 43 23, 46 21"
                                                    stroke="#3DB87A"
                                                    strokeWidth="3.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                                <path
                                                    d="M2 17 C10 10, 22 8, 34 12 C39 14, 43 17, 46 14"
                                                    stroke="#5DD49A"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                    opacity="0.85"
                                                />
                                                <path
                                                    d="M6 9 C13 2, 24 1, 35 6 C40 9, 43 13, 46 10"
                                                    stroke="#D94068"
                                                    strokeWidth="3.2"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>
                                            <span className={styles.logoText}>
                                                DP WORLD
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
