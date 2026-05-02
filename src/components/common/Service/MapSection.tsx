"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./MapSection.module.css";

interface MapSectionProps {
  title: string;
  description: string;
  mapImage: string;
  link?: { label: string; href: string };
}

export default function MapSection({ title, description, mapImage, link }: MapSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mapWrapRef = useRef<HTMLDivElement>(null);
    const [yOffset, setYOffset] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const wrap = mapWrapRef.current;
                if (!wrap) return;

                const rect = wrap.getBoundingClientRect();
                const viewH = window.innerHeight;

                const progress = (viewH - rect.top) / (viewH + rect.height);
                // progress goes from 0 (just entering bottom) to 1 (just leaving top)
                // limit progress between 0 and 1
                const clampedProgress = Math.max(0, Math.min(1, progress));
                
                // Move image up and down by up to 15% of its height
                const newY = (clampedProgress - 0.5) * -30;

                setYOffset(newY);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>{title}</h2>
                    <p className={styles.sub}>{description}</p>
                    {link && (
                        <a href={link.href} className={styles.headerLink}>
                            {link.label}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    )}
                </div>

                <div className={styles.mapOuter}>
                    <div
                        ref={mapWrapRef}
                        className={styles.mapWrap}
                    >
                        <Image 
                          src={mapImage}
                          alt="Network Map"
                          fill
                          className={styles.mapImage}
                          style={{
                              transform: `translateY(${yOffset}px) scale(1.1)`,
                              transition: "transform 0.1s linear",
                          }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
