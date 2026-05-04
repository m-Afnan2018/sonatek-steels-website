"use client";

import React from "react";
import styles from "./Testimonials.module.css";

export interface TestimonialItem {
    name:        string;
    designation: string;
    rating:      number;
    text:        string;
}

const FALLBACK: TestimonialItem[] = [
    { name: "Arvind Mehta",    designation: "Founder / CEO",         rating: 5, text: "Sonatek's technical team is incredibly responsive. Whether it's a custom steel specification or a logistics query, they are always ready to assist with complete professionalism." },
    { name: "Shruti Verma",    designation: "Project Engineer",       rating: 4, text: "The precision and reliability of the steel products supplied by Sonatek have been instrumental in our large-scale infrastructure projects. Their quality is unmatched." },
    { name: "Neha Singh",      designation: "Sustainability Manager", rating: 5, text: "What impressed us most about Sonatek is their focus on sustainable sourcing and modern processing methods." },
    { name: "Ravi Deshmukh",   designation: "Operations Lead",        rating: 5, text: "Even after the order was fulfilled, Sonatek's team ensured we had the necessary certifications and documentation. That level of care is rare in the steel industry." },
    { name: "Rahul Khanna",    designation: "Tech Lead",              rating: 4, text: "The digital platform is intuitive and easy to navigate, making the entire procurement process seamless and efficient. Highly recommend their services." },
    { name: "Vikram Malhotra", designation: "Production Manager",     rating: 5, text: "Consistent quality and timely delivery are what we need, and Sonatek delivers on both every single time. They have become our primary supplier for HR coils." },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24"
                    fill={i < rating ? "currentColor" : "none"}
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials({ items }: { items?: TestimonialItem[] } = {}) {
    const base  = (items && items.length > 0) ? items : FALLBACK;
    const cards = [...base, ...base, ...base];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>What Our Clients Say</h2>
            </div>
            <div className={styles.marqueeContainer}>
                <div className={styles.track}>
                    {cards.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <StarRating rating={t.rating} />
                            <p className={styles.quote}>"{t.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.designation}>{t.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
