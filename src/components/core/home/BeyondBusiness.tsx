"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./BeyondBusiness.module.css";
import Image from "next/image";

const CARDS = [
    {
        title: "DP World Foundation",
        description:
            "Every individual should have the opportunity to lead a healthy and productive life.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
        href: "#",
    },
    {
        title: "Our Climate Journey",
        description:
            "We're committed to understanding and reducing our environmental impact until we reach net zero.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        href: "#",
    },
    {
        title: "Empowering People",
        description:
            "We focus on improving well-being and making a positive social impact across our global communities.",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80",
        href: "#",
    },
];

export default function BeyondBusiness() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const [cardsVisible, setCardsVisible] = useState(false);
    const cardsRef = useRef<HTMLDivElement>(null);

    // ── Parallax background on scroll ──
    const handleScroll = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const section = sectionRef.current;
            const bg = bgRef.current;
            if (!section || !bg) return;

            const rect = section.getBoundingClientRect();
            const viewH = window.innerHeight;

            // How far section top is from viewport top (negative = scrolled past)
            const scrolled = -rect.top;
            const total = rect.height + viewH;
            const progress = scrolled / total; // 0 → 1

            // Parallax: bg moves slower than scroll (30% of scroll distance)
            const parallaxY = progress * 30; // % shift
            bg.style.transform = `translateY(${parallaxY}%)`;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    // ── Cards slide in on viewport entry ──
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCardsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        if (cardsRef.current) observer.observe(cardsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            {/* ── Parallax background image ── */}
            <div className={styles.bgWrap}>
                <div
                    ref={bgRef}
                    className={styles.bg}
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80')",
                    }}
                />
                {/* Dark gradient overlay — heavier bottom-left for text legibility */}
                <div className={styles.overlay} />
            </div>

            {/* ── Content ── */}
            <div className={styles.content}>
                {/* Top text — left aligned */}
                <div className={styles.topText}>
                    <h2 className={styles.headline}>
                        Beyond
                        <br />
                        Business
                    </h2>
                    <p className={styles.sub}>
                        Our sustainability, education, and social impact
                        initiatives ensure that global trade leaves a positive
                        footprint.
                    </p>
                </div>

                {/* ── Cards row — slides in from bottom ── */}
                <div
                    ref={cardsRef}
                    className={`${styles.cardsRow} ${cardsVisible ? styles.cardsVisible : ""}`}
                >
                    {CARDS.map((card, i) => (
                        <a
                            key={card.title}
                            href={card.href}
                            className={styles.card}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            {/* Card image */}
                            <div className={styles.cardImgWrap}>
                                <Image
                                    width={500}
                                    height={500}
                                    src={card.image}
                                    alt={card.title}
                                    className={styles.cardImg}
                                    loading="lazy"
                                />
                                {/* Card overlay — dark bottom */}
                                <div className={styles.cardOverlay} />
                            </div>

                            {/* Card text */}
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>
                                    {card.title}
                                </h3>
                                <p className={styles.cardDesc}>
                                    {card.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
