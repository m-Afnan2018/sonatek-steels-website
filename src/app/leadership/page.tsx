'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from "@/components/common/HeroSection/HeroSection";
import { leadershipData, leadershipCategories } from './leadership-data';
import styles from './leadership.module.css';
import Link from 'next/link';

export default function Leadership() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = selectedCategory === "All" 
    ? leadershipData 
    : leadershipData.filter(item => item.category === selectedCategory);

  const handleReset = () => {
    setSelectedCategory("All");
  };

  return (
    <main>
      <HeroSection
        title="Leadership"
        description="Our leadership team drives Sonatek Steels forward with a clear vision, strong values, and a commitment to excellence."
        bgImage="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1170"
        breadcrumb={[
          {href: '/', label: 'Home'},
          {href: '/leadership', label: 'Leadership'}
        ]}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Filters */}
          <div className={styles.filterBar}>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.select} 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">Leader Category</option>
                {leadershipCategories.filter(c => c !== "All").map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <button className={styles.resetBtn} onClick={handleReset}>
              Reset
            </button>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredData.map((leader) => (
              <div key={leader.id} className={styles.card}>
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

          {/* Load More */}
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreBtn}>
              Load More
            </button>
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
                        <Link href="#" className={styles.outlineBtn}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
    </main>
  );
}