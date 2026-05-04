"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const SERVICES = [
    {
        title: "Cold Rolled (CR) Coils",
        description:
            "Our CR Coils are produced to exacting standards, offering superior surface finish and dimensional accuracy for automotive and high-end engineering applications.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        href: "/products/cr-coils",
    },
    {
        title: "Hot Rolled (HR) Coils",
        description:
            "We supply high-strength HR coils suitable for structural, manufacturing, and industrial projects, ensuring durability and performance across all conditions.",
        image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
        href: "/products/hr-coils",
    },
    {
        title: "CR & HR Sheets",
        description:
            "Precision-cut sheets in both Cold Rolled and Hot Rolled formats, available in various thicknesses and grades to meet your specific industrial requirements.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
        href: "/products/hr-sheets",
    },
    {
        title: "Chequered Plates",
        description:
            "Anti-slip chequered plates designed for industrial flooring, stairs, and transportation hubs, combining aesthetic appeal with essential safety features.",
        image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
        href: "/products/chequered-plates",
    },
    {
        title: "Custom Processing",
        description:
            "Our state-of-the-art processing facilities provide slitting, shearing, and pickling services to deliver steel in the exact dimensions your project demands.",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
        href: "/services/processing",
    },
    {
        title: "Supply Chain Solutions",
        description:
            "Leveraging our strategic location in Northern India, we provide reliable distribution and inventory management for corporate clients and OEMs.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        href: "/services/distribution",
    },
];

function ServiceCard({
    service,
    index,
    visible,
}: {
    service: (typeof SERVICES)[0];
    index: number;
    visible: boolean;
}) {
    return (
        <article
            className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            {/* Image */}
            <div className={styles.imageWrap}>
                <Image
                    width={500}
                    height={500}
                    src={service.image}
                    alt={service.title}
                    className={styles.image}
                    loading="lazy"
                />
            </div>

            {/* Text block */}
            <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>

                {/* Slide-up content: hr + description + explore */}
                <div className={styles.slideContent}>
                    <hr className={styles.rule} />
                    <p className={styles.description}>{service.description}</p>
                </div>

                {/* Default visible explore (non-hover state) */}
                <a href={service.href} className={styles.exploreDefault}>
                    Explore
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
        </article>
    );
}

export default function Services() {
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
        <section className={styles.section} ref={ref}>
            <div className={styles.grid}>
                {SERVICES.map((service, i) => (
                    <ServiceCard
                        key={service.title}
                        service={service}
                        index={i}
                        visible={visible}
                    />
                ))}
            </div>
        </section>
    );
}
