"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LatestNews.module.css";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const FALLBACK_NEWS = [
    {
        date: "10 May 2025",
        title: "BASICALLY STEEL: AN ALLOY OF IRON AND CARBON FOR INDUSTRIAL STRENGTH",
        href: "/blogs/basically-steel",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
        isLogo: false,
    },
    {
        date: "08 May 2025",
        title: "HOT ROLLING: DEFORMING AT HIGH TEMPERATURE FOR SUPERIOR QUALITY",
        href: "/blogs/temperature",
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
        isLogo: false,
    },
    {
        date: "01 May 2025",
        title: "SONATEK STEELS MARKS NEW MILESTONE IN NORTHERN INDIA INFRASTRUCTURE",
        href: "/blogs/milestone",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
        isLogo: true,
    },
];

export interface NewsItem {
    date: string;
    title: string;
    href: string;
    image?: string;
    isLogo?: boolean;
}

interface LatestNewsProps {
    items?: NewsItem[];
}

export default function LatestNews({ items }: LatestNewsProps = {}) {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [news, setNews] = useState<any[]>(items && items.length > 0 ? items : FALLBACK_NEWS);

    useEffect(() => {
        // Explicit content (e.g. from the page builder) wins — don't clobber it with a live fetch.
        if (items && items.length > 0) return;
        const fetchNews = async () => {
            try {
                const res = await fetch(`${API_URL}/api/blogs?limit=3`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.blogs && data.blogs.length > 0) {
                        const mapped = data.blogs.map((b: any) => ({
                            date: new Date(b.publishedAt || b.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
                            title: b.title.toUpperCase(),
                            href: `/blogs/${b.slug}`,
                            image: b.coverImage ? (b.coverImage.startsWith('http') ? b.coverImage : `${API_URL}${b.coverImage}`) : 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
                            isLogo: false,
                        }));
                        setNews(mapped);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch latest news:", err);
            }
        };
        fetchNews();
    }, [items]);

    // Touch gesture tracking for mobile swipe-to-scroll
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const touchEndY = useRef<number | null>(null);
    const minSwipeDistance = 50;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : news.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < news.length - 1 ? prev + 1 : 0));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        if (!isMobile) return;
        touchEndX.current = null;
        touchEndY.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
        touchStartY.current = e.targetTouches[0].clientY;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isMobile) return;
        touchEndX.current = e.targetTouches[0].clientX;
        touchEndY.current = e.targetTouches[0].clientY;
    };

    const onTouchEnd = () => {
        if (!isMobile) return;
        if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return;

        const diffX = touchStartX.current - touchEndX.current;
        const diffY = touchStartY.current - touchEndY.current;

        // Verify the gesture is horizontal swipe rather than vertical scroll
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
            }
        }
    };

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
                <div
                    className={styles.carouselContainer}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className={styles.list}
                        style={isMobile ? { transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex}rem))` } : undefined}
                    >
                        {news.map((item, i) => (
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
                                            {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
                                        </a>
                                        <a
                                            href={item.href}
                                            className={styles.readMore}
                                        >
                                            Read More
                                            <div className={styles.arrowContainer}>
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
                                                    className={styles.arrow1}
                                                >
                                                    <line
                                                        x1="5"
                                                        y1="12"
                                                        x2="19"
                                                        y2="12"
                                                    />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
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
                                                    className={styles.arrow2}
                                                >
                                                    <line
                                                        x1="5"
                                                        y1="12"
                                                        x2="19"
                                                        y2="12"
                                                    />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </div>
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
                                                unoptimized={!item.image!.startsWith('https')}
                                            />
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {isMobile && (
                        <div className={styles.mobileNav}>
                            <button
                                onClick={handlePrev}
                                className={styles.navBtn}
                                aria-label="Previous news"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className={styles.navBtn}
                                aria-label="Next news"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
