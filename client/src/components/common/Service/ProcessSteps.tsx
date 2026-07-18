"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './ProcessSteps.module.css';

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  label?: string;
  title: string;
  subtitle?: string;
  steps: Step[];
}

export default function ProcessSteps({ label = "PROCESS", title, subtitle, steps }: ProcessStepsProps) {
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
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className={styles.label}>{label}</p>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div
          className={`${styles.steps} ${visible ? styles.stepsVisible : ""}`}
          style={{ gridTemplateColumns: `repeat(${Math.max(steps.length, 1)}, 1fr)` }}
        >
          {steps.map((step, index) => (
            <div key={index} className={styles.step} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className={styles.stepNumberRow}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                {index < steps.length - 1 && <span className={styles.stepLine} />}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
