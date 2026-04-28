"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./News.module.css";

const ARTICLES = [
  {
    category: "Press Release",
    date: "15 Apr 2025",
    title:
      "DP World expands London Gateway to become UK's largest container port",
    excerpt:
      "The expansion adds 1.8 million TEU of annual capacity, cementing DP World's position as the UK's premier logistics gateway.",
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80",
    alt: "Aerial view of port construction and container terminal expansion",
  },
  {
    category: "Insights",
    date: "08 Apr 2025",
    title:
      "How AI is transforming supply chain visibility in 2025",
    excerpt:
      "Artificial intelligence and machine learning are reshaping how global trade moves, enabling real-time decision making across networks.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    alt: "Technology screens showing data visualization and AI analytics",
  },
  {
    category: "Sustainability",
    date: "01 Apr 2025",
    title:
      "Our commitment to net zero: progress report and 2030 targets",
    excerpt:
      "DP World outlines measurable milestones toward net-zero operations, including renewable energy deployment across 30 terminals.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    alt: "Wind turbines and sustainable green energy infrastructure",
  },
];

export default function News() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.news} ref={ref}>
      <div className={styles.inner}>
        {/* Header row */}
        <div className={`${styles.headerRow} ${visible ? styles.visible : ""}`}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionLabel}>News &amp; Insights</span>
            <h2 className={styles.heading}>Latest from DP World</h2>
          </div>
          <a href="#" className={styles.viewAll}>
            View All
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {ARTICLES.map((article, i) => (
            <article
              key={i}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.img}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <a href="#" className={styles.readMore}>
                  Read More
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
