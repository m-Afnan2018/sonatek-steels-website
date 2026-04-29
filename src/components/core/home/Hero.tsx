"use client";

import { useRef, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays on mount (some browsers need a nudge)
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay blocked — silently fallback to poster image
            });
        }
    }, []);

    return (
        <section className={styles.hero}>
            {/* ── Video background ── */}
            <div className={styles.videoWrap}>
                <video
                    ref={videoRef}
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
                    aria-hidden="true"
                >
                    {/*
            Replace these src URLs with your actual video files.
            Using a free sample port/logistics video for demo.
          */}
                    <source
                        src="https://cdn.pixabay.com/video/2021/02/05/64212-509543056_large.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark gradient overlay — heavy bottom-left, light top-right */}
                <div className={styles.overlay} />
            </div>

            {/* ── Content — lower third ── */}
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    {/* Left: headline + sub + rule */}
                    <div className={styles.left}>
                        <h1 className={styles.headline}>
                            <span className={styles.headlineLine}>
                                Evolving Global
                            </span>
                            <span className={styles.headlineLine}>Trade</span>
                        </h1>

                        <p className={styles.sub}>
                            Future-ready supply chain solutions across sectors
                            and borders.
                        </p>

                        <div className={styles.rule} />
                    </div>

                    {/* Right: CTA button */}
                    <div className={styles.right}>
                        <a href="#" className={styles.ctaBtn}>
                            Explore What We Do
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
                </div>
            </div>
        </section>
    );
}
