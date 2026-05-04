"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsBar.module.css";

const STATS = [
  {
    value: 78,
    suffix: "+",
    label: "Marine & Inland Terminals",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M3 17l4-8 4 4 4-6 4 10" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    value: 40,
    suffix: "+",
    label: "Countries & 6 Continents",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: 97000,
    suffix: "+",
    label: "Employees Worldwide",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 11,
    suffix: "%",
    label: "of Global Container Trade",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({
  stat,
  index,
  started,
}: {
  stat: (typeof STATS)[0];
  index: number;
  started: boolean;
}) {
  const count = useCountUp(stat.value, 1800 + index * 150, started);
  const display = stat.value >= 1000 ? count.toLocaleString("en-US") : count;

  return (
    <div
      className={styles.statItem}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={styles.iconWrap}>{stat.icon}</div>
      <div className={styles.statBody}>
        <div className={styles.statValue}>
          {display}
          <span className={styles.suffix}>{stat.suffix}</span>
        </div>
        <div className={styles.statLabel}>{stat.label}</div>
      </div>
      {index < STATS.length - 1 && <div className={styles.divider} />}
    </div>
  );
}

export default function StatsBar() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsBar} ref={ref}>
      <div className={styles.redAccent} />
      <div className={styles.inner}>
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} started={started} />
        ))}
      </div>
      <div className={styles.shimmerLine} />
    </section>
  );
}
