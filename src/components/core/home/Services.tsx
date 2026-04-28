"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const SERVICES = [
    {
        title: "Contract Logistics",
        description:
            "Our Contract Logistics solutions are built for you. Combining industry expertise with sustainable practices, we optimise operations, reduce costs, and give you the flexibility to grow with confidence.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        href: "#",
    },
    {
        title: "Freight Forwarding",
        description:
            "We offer end-to-end freight forwarding services across air, ocean, and road — connecting your cargo to markets around the world with precision and care.",
        image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
        href: "#",
    },
    {
        title: "Economic Zones",
        description:
            "Our world-class economic zones and freezones provide businesses with the infrastructure, incentives, and connectivity needed to thrive in global trade.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
        href: "#",
    },
    {
        title: "Ports & Terminals",
        description:
            "We operate a global network of marine and inland terminals, handling millions of containers every year with industry-leading efficiency and safety standards.",
        image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
        href: "#",
    },
    {
        title: "Maritime Services",
        description:
            "From vessel chartering to maritime logistics, our comprehensive maritime solutions keep your supply chain moving seamlessly across every ocean.",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
        href: "#",
    },
    {
        title: "Technology & Innovation",
        description:
            "Our digital platforms give you real-time visibility and control across your entire supply chain — powered by data, AI, and decades of trade expertise.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        href: "#",
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
                    <a href={service.href} className={styles.explore}>
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
