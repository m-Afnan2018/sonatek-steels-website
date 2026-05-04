'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroSection from "@/components/common/HeroSection/HeroSection";
import { leadershipData, leadershipCategories } from './leadership-data';
import styles from './leadership.module.css';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Leader { _id?: string; id?: number; name: string; title: string; category: string; image: string; }

function normalizeImage(img?: string) {
    if (!img) return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80';
    return img.startsWith('http') ? img : `${API_URL}${img}`;
}

export default function LeadershipPage() {
    const [leaders, setLeaders]               = useState<Leader[]>(leadershipData.map((l) => ({ ...l, _id: String(l.id) })));
    const [categories, setCategories]         = useState<string[]>(leadershipCategories);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch(`${API_URL}/api/leadership`)
            .then((r) => r.ok ? r.json() : null)
            .then((data) => {
                const fetched: Leader[] = data?.leaders ?? [];
                if (fetched.length === 0) return;
                const normalized = fetched.map((l) => ({ ...l, image: normalizeImage(l.image) }));
                setLeaders(normalized);
                setCategories(['All', ...Array.from(new Set(normalized.map((l) => l.category)))]);
            })
            .catch(() => {});
    }, []);

    const filtered = selectedCategory === 'All'
        ? leaders
        : leaders.filter((l) => l.category === selectedCategory);

    return (
        <main>
            <HeroSection
                title="Leadership"
                description="Our leadership team drives Sonatek Steels forward with a clear vision, strong values, and a commitment to excellence."
                bgImage="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1170"
                breadcrumb={[
                    { href: '/', label: 'Home' },
                    { href: '/leadership', label: 'Leadership' },
                ]}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.filterBar}>
                        <div className={styles.selectWrapper}>
                            <select
                                className={styles.select}
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">Leader Category</option>
                                {categories.filter((c) => c !== 'All').map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <button className={styles.resetBtn} onClick={() => setSelectedCategory('All')}>
                            Reset
                        </button>
                    </div>

                    <div className={styles.grid}>
                        {filtered.map((leader) => (
                            <div key={leader._id ?? leader.id} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        className={styles.image}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                    />
                                </div>
                                <h3 className={styles.name}>{leader.name}</h3>
                                <p className={styles.title}>{leader.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.loadMoreWrapper}>
                        <button className={styles.loadMoreBtn}>Load More</button>
                    </div>
                </div>
            </section>

            <section className={styles.joinTeam}>
                <div className={styles.joinTeamInner}>
                    <h2 className={styles.joinTitle}>
                        Join a global team shaping the future of global trade.
                    </h2>
                    <div className={styles.joinContent}>
                        <p className={styles.joinDesc}>
                            Discover career opportunities that challenge you to think differently,
                            act boldly, and create a lasting impact on a global scale.
                        </p>
                        <Link href="#" className={styles.outlineBtn}>Learn More</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
