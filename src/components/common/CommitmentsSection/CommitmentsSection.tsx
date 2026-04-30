import styles from "./CommitmentsSection.module.css";
import React from "react";

interface Commitment {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CommitmentsSectionProps {
  label: string;
  title: string;
  items: Commitment[];
}

export default function CommitmentsSection({ label, title, items }: CommitmentsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>
            As an organisation, we have put in place mandatory minimum requirements to ensure we 
            control key risks associated with fatality and serious injury. We call them 'Commitments 
            we Live By' as they define our way of working.
          </p>
        </div>
        
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
