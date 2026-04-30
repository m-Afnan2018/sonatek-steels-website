import React from 'react';
import styles from './OurInitiatives.module.css';

interface InitiativeCard {
  title: string;
  imageUrl: string;
  url: string;
}

interface Props {
  label: string;
  title: React.ReactNode;
  description: string;
  linkText: string;
  linkUrl: string;
  bgImageUrl: string;
  cards: InitiativeCard[];
}

export default function OurInitiatives({
  label,
  title,
  description,
  linkText,
  linkUrl,
  bgImageUrl,
  cards
}: Props) {
  return (
    <section className={styles.section} id="initiatives">
      <div className={styles.topContainer}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={linkUrl} className={styles.link}>{linkText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
      
      <div className={styles.imageBlock} style={{ backgroundImage: `url(${bgImageUrl})` }}>
        <div className={styles.imageOverlay}></div>
        <div className={styles.imageContent}>
          <h3 className={styles.overlayTitle}>OUR INITIATIVES</h3>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <a href={card.url} key={index} className={styles.card}>
                <img src={card.imageUrl} alt={card.title} className={styles.cardBg} />
                <div className={styles.cardGradient}></div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <div className={styles.playIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
