"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlobalNetwork.module.css";

interface GlobalNetworkProps {
    videoUrl?: string;
    label?: string;
    headline?: string;
    sub?: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function GlobalNetwork({
    videoUrl = 'https://www.pexels.com/download/video/8829606',
    label = 'Our Distribution Network',
    headline = 'Strong Presence Across\nNorthern India',
    sub = 'Our extensive network means fewer handovers, faster local delivery, and tailored solutions delivered through a single trusted partner.',
    ctaText = 'Our Locations',
    ctaHref = '/contact-us#location',
}: GlobalNetworkProps) {
    const headlineLines = headline.split("\n");
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoWrapRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scale, setScale] = useState(0.88);
    const rafRef = useRef<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setIsPlaying(!video.paused);
            setIsMuted(video.muted);

            const handlePlayState = () => setIsPlaying(true);
            const handlePauseState = () => setIsPlaying(false);
            const handleVolumeState = () => setIsMuted(video.muted);

            video.addEventListener('play', handlePlayState);
            video.addEventListener('pause', handlePauseState);
            video.addEventListener('volumechange', handleVolumeState);

            // Attempt to autoplay
            video.play().catch(() => {
                setIsPlaying(false);
            });

            return () => {
                video.removeEventListener('play', handlePlayState);
                video.removeEventListener('pause', handlePauseState);
                video.removeEventListener('volumechange', handleVolumeState);
            };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                if (window.innerWidth <= 768) {
                    setScale(1);
                    return;
                }

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
        window.addEventListener("resize", handleScroll, { passive: true });
        handleScroll(); // run once on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration || 1;
            setProgress((current / duration) * 100);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (videoRef.current && progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(clickX / width, 1));
            videoRef.current.currentTime = percentage * videoRef.current.duration;
            setProgress(percentage * 100);
        }
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch(() => { });
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
        }
    };

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.inner}>
                {/* ── Header ── */}
                <div className={styles.header}>
                    <p className={styles.label}>{label}</p>
                    <h2 className={styles.headline}>
                        {headlineLines.map((line, i) => (
                            <span key={i}>{line}{i < headlineLines.length - 1 && <br />}</span>
                        ))}
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
                            onTimeUpdate={handleTimeUpdate}
                        >
                            <source
                                src={videoUrl}
                                type="video/mp4"
                            />
                        </video>

                        {/* Custom hover controls overlay */}
                        <div className={styles.controlsOverlay}>
                            {/* Center Play Button */}
                            <button className={styles.centerPlayBtn} onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                                {!isPlaying && (
                                    <div className={styles.centerPlayCircle}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'translateX(2px)' }}>
                                            <polygon points="6 3 20 12 6 21 6 3" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Bottom Controls Bar */}
                            <div className={styles.bottomBar}>
                                <button className={styles.iconBtn} onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                                    {isPlaying ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="6" y="4" width="4" height="16" rx="1" />
                                            <rect x="14" y="4" width="4" height="16" rx="1" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'translateX(1px)' }}>
                                            <polygon points="6 3 20 12 6 21 6 3" />
                                        </svg>
                                    )}
                                </button>

                                <div className={styles.progressContainer} ref={progressRef} onClick={handleProgressClick}>
                                    <div className={styles.progressBar}>
                                        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                                    </div>
                                </div>

                                <button className={styles.iconBtn} onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                                    {isMuted ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                            <line x1="23" y1="9" x2="17" y2="15" />
                                            <line x1="17" y1="9" x2="23" y2="15" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Footer text ── */}
                <div className={styles.footer}>
                    <p className={styles.sub}>
                        {sub}
                    </p>
                    <a href={ctaHref} className={styles.cta}>
                        {ctaText}
                        <div className={styles.arrowContainer}>
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
                                className={styles.arrow1}
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
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
                                className={styles.arrow2}
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
