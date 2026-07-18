"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface HomeProduct {
    _id: string;
    name: string;
    slug: string;
    image?: string;
    overview?: { description?: string };
}

// Used only if fewer than 3 products come back from the API.
const FALLBACK_PRODUCT_SERVICES = [
    {
        title: "Steel Procurement",
        description:
            "Reliable, certified, and cost-effective sourcing of CR/HR coils, sheets, plates, and chequered plates directly from trusted primary mills like SAIL.",
        image: "/steel-procurement.png",
        href: "/steel-procurement",
    },
    {
        title: "Infrastructure & Industrial Projects",
        description:
            "Certified flat steel supply, custom processing, and dependable distribution for infrastructure, construction, heavy engineering, and industrial project requirements.",
        image: "/infrastructure.png",
        href: "/infrastructure-industrial-project",
    },
    {
        title: "Technical Steel Selection",
        description:
            "Precision starts before production. We help you choose the exact grade, thickness, surface finish, and mechanical properties required to guarantee the success of your application.",
        image: "https://images.unsplash.com/photo-1671404910386-8c2a9ae40efd?q=80",
        href: "/technical-steel-selection",
    },
];

interface ServiceCardData {
    title: string;
    description: string;
    image: string;
    href: string;
}

function ServiceCard({
    service,
    index,
    visible,
}: {
    service: ServiceCardData;
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
        </article>
    );
}

function toServiceCard(product: HomeProduct): ServiceCardData {
    return {
        title: product.name,
        description:
            product.overview?.description ||
            `Premium ${product.name}, sourced and supplied to exact industrial specifications.`,
        image: product.image
            ? (product.image.startsWith("http") ? product.image : `${API_URL}${product.image}`)
            : "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        href: `/products/${product.slug}`,
    };
}

export default function Services({ products = [] }: { products?: HomeProduct[] }) {
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

    const productCards: ServiceCardData[] =
        products.length >= 3
            ? products.slice(0, 3).map(toServiceCard)
            : FALLBACK_PRODUCT_SERVICES;

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.grid}>
                {productCards.map((service, i) => (
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
