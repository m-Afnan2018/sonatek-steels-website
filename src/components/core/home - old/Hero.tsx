"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
        label: "Ports & Terminals",
        headline: "We Make\nTrade Flow",
        sub: "Connecting businesses to over 500 destinations across six continents — seamlessly, sustainably, at scale.",
        cta1: { label: "Explore Our Services", href: "#" },
        cta2: { label: "Watch Our Story", href: "#" },
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80",
        label: "Logistics & Supply Chain",
        headline: "End-to-End\nSupply Chain",
        sub: "From factory floor to customer door, we keep global commerce moving with precision and intelligence.",
        cta1: { label: "Our Logistics Solutions", href: "#" },
        cta2: { label: "Learn More", href: "#" },
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80",
        label: "Smart Trade Technology",
        headline: "Powering the\nFuture of Trade",
        sub: "Digital platforms and smart technology that give you full visibility and control of your supply chain.",
        cta1: { label: "Discover Technology", href: "#" },
        cta2: { label: "Get in Touch", href: "#" },
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = SLIDES.length;

    const goTo = (idx: number) => {
        if (transitioning || idx === current) return;
        setPrev(current);
        setTransitioning(true);
        setTimeout(() => {
            setCurrent(idx);
            setPrev(null);
            setTransitioning(false);
        }, 700);
    };

    const next = () => goTo((current + 1) % total);

    useEffect(() => {
        intervalRef.current = setInterval(next, 6000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, transitioning]);

    const slide = SLIDES[current];
    const prevSlide = prev !== null ? SLIDES[prev] : null;

    return (
        <section className={styles.hero}>
            {/* Background layers */}
            <div className={styles.bgStack}>
                {/* Previous slide fading out */}
                {prevSlide && (
                    <div
                        className={`${styles.bgLayer} ${styles.bgLayerOut}`}
                        style={{ backgroundImage: `url('${prevSlide.image}')` }}
                    />
                )}
                {/* Current slide */}
                <div
                    className={`${styles.bgLayer} ${transitioning ? styles.bgLayerIn : styles.bgLayerActive}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                />
                {/* Gradient overlay */}
                <div className={styles.overlay} />
                {/* Diagonal red accent */}
                <div className={styles.diagonalAccent} />
                {/* Noise texture */}
                <div className={styles.noise} />
            </div>

            {/* Content */}
            <div className={styles.content}>
                {/* Label pill */}
                <div key={`label-${current}`} className={styles.labelPill}>
                    <span className={styles.labelDot} />
                    {slide.label}
                </div>

                {/* Headline */}
                <h1 key={`h1-${current}`} className={styles.headline}>
                    {slide.headline.split("\n").map((line, i) => (
                        <span
                            key={i}
                            className={styles.headlineLine}
                            style={{ animationDelay: `${i * 0.12}s` }}
                        >
                            {line}
                        </span>
                    ))}
                </h1>

                {/* Subtext */}
                <p key={`sub-${current}`} className={styles.sub}>
                    {slide.sub}
                </p>

                {/* CTAs */}
                <div key={`cta-${current}`} className={styles.ctaRow}>
                    <a href={slide.cta1.href} className={styles.ctaPrimary}>
                        {slide.cta1.label}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                    <a
                        href={slide.cta2.href}
                        className={styles.ctaSecondary}
                        onClick={(e) => {
                            e.preventDefault();
                            setVideoPlaying(true);
                        }}
                    >
                        <span className={styles.playIcon}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </span>
                        {slide.cta2.label}
                    </a>
                </div>
            </div>

            {/* Slide controls — bottom left */}
            <div className={styles.controls}>
                <button
                    className={styles.arrowBtn}
                    onClick={() => goTo((current - 1 + total) % total)}
                    aria-label="Previous slide"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className={styles.dots}>
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    className={styles.arrowBtn}
                    onClick={next}
                    aria-label="Next slide"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                {/* Progress bar */}
                <div className={styles.progressBar}>
                    <div key={current} className={styles.progressFill} />
                </div>
            </div>

            {/* Slide counter */}
            <div className={styles.counter}>
                <span className={styles.counterCurrent}>
                    {String(current + 1).padStart(2, "0")}
                </span>
                <span className={styles.counterSep}>/</span>
                <span className={styles.counterTotal}>
                    {String(total).padStart(2, "0")}
                </span>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollLabel}>Scroll</span>
                <div className={styles.scrollLine}>
                    <div className={styles.scrollDot} />
                </div>
            </div>

            {/* Video Modal */}
            {videoPlaying && (
                <div
                    className={styles.videoModal}
                    onClick={() => setVideoPlaying(false)}
                >
                    <div
                        className={styles.videoBox}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeBtn}
                            onClick={() => setVideoPlaying(false)}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className={styles.videoPlaceholder}>
                            <div className={styles.videoPlaceholderInner}>
                                <svg
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    opacity="0.3"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                <p>Video would play here</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
