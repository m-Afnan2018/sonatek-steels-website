"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalNetwork.module.css";

export default function GlobalNetwork() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoWrapRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scale, setScale] = useState(0.88);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        // Autoplay video
        videoRef.current?.play().catch(() => {});
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const wrap = videoWrapRef.current;
                if (!wrap) return;

                const rect = wrap.getBoundingClientRect();
                const viewH = window.innerHeight;

                // Center of the video element relative to viewport
                const elCenter = rect.top + rect.height / 2;
                // Viewport center
                const vpCenter = viewH / 2;

                // Distance from viewport center: 0 = perfectly centered
                const dist = Math.abs(elCenter - vpCenter);

                // Normalize: 0 when centered, 1 when fully off-screen
                const maxDist = viewH / 2 + rect.height / 2;
                const normalized = Math.min(dist / maxDist, 1);

                // Scale: 1.0 when centered, 0.88 when far
                const minScale = 0.88;
                const maxScale = 1.0;
                const computed = maxScale - (maxScale - minScale) * normalized;

                setScale(computed);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.inner}>
                {/* ── Header ── */}
                <div className={styles.header}>
                    <p className={styles.label}>Our Global Network</p>
                    <h2 className={styles.headline}>
                        Connected Across
                        <br />
                        Continents
                    </h2>
                </div>

                {/* ── Video — scroll-scale ── */}
                <div className={styles.videoOuter}>
                    <div
                        ref={videoWrapRef}
                        className={styles.videoWrap}
                        style={{
                            transform: `scale(${scale})`,
                            transition: "transform 0.15s linear",
                        }}
                    >
                        <video
                            ref={videoRef}
                            className={styles.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=1200&q=80"
                            aria-label="Global network video"
                        >
                            <source
                                src="https://cdn.pixabay.com/video/2025/09/22/305657_large.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>

                {/* ── Footer text ── */}
                <div className={styles.footer}>
                    <p className={styles.sub}>
                        Our global footprint means fewer handovers, faster
                        decision-making, and tailored solutions delivered
                        through a single trusted partner.
                    </p>
                    <a href="#" className={styles.cta}>
                        Our Locations
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
        </section>
    );
}
