"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const SERVICES = [
    {
        title: "Steel Procurement",
        description:
            "Reliable, certified, and cost-effective sourcing of CR/HR coils, sheets, plates, and chequered plates directly from trusted primary mills like SAIL.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        href: "/steel-procurement",
    },
    {
        title: "Infrastructure & Industrial Projects",
        description:
            "Certified flat steel supply, custom processing, and dependable distribution for infrastructure, construction, heavy engineering, and industrial project requirements.",
        image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
        href: "/infrastructure-industrial-project",
    },
    {
        title: "Technical Steel Selection",
        description:
            "Precision starts before production. We help you choose the exact grade, thickness, surface finish, and mechanical properties required to guarantee the success of your application.",
        image: "https://images.unsplash.com/photo-1671404910386-8c2a9ae40efd?q=80",
        href: "/technical-steel-selection",
    },
    {
        title: "Freight Forwarding Services",
        description:
            "Seamless freight forwarding solutions combining global reach with on-ground expertise. We optimize your steel dispatches via air, ocean, rail, or road.",
        image: "https://images.unsplash.com/photo-1699588999949-e25959a59550?q=80",
        href: "/freight-forwarding",
    },
    {
        title: "Custom Steel Processing",
        description:
            "Our state-of-the-art processing facilities provide slitting, shearing, and pickling services to deliver steel in the exact dimensions your project demands.",
        image: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80",
        href: "/custom-steel-processing",
    },
    {
        title: "Supply Chain Solutions",
        description:
            "Leveraging our strategic location in Northern India, we provide reliable distribution and inventory management for corporate clients and OEMs.",
        image: "https://images.unsplash.com/photo-1713127563314-5163b052cf8b?q=80",
        href: "/supply-chain",
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
