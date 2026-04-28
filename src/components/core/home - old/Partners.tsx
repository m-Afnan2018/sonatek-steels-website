"use client";

import styles from "./Partners.module.css";

const LOGOS = [
  "Maersk",
  "MSC",
  "CMA CGM",
  "Evergreen",
  "COSCO",
  "Hapag-Lloyd",
  "ONE",
  "Yang Ming",
  "HMM",
  "PIL",
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.inner}>
        <p className={styles.label}>Trusted Across the Globe</p>
      </div>

      {/* Marquee track */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {/* Duplicate set for seamless loop */}
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div key={i} className={styles.logoItem}>
              <span className={styles.logoText}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
