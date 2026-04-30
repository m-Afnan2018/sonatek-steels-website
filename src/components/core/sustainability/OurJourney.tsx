import React from 'react';
import styles from './OurJourney.module.css';
import Image from 'next/image';
import { motion } from 'motion/react';

export interface JourneyItem {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
}

interface OurJourneyProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  items: JourneyItem[];
}

export default function OurJourney({
  title,
  description,
  buttonText,
  buttonLink,
  items,
}: OurJourneyProps) {
  return (
    <section className={styles.section} id="our-journey">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {buttonText && buttonLink && (
            <a href={buttonLink} className={styles.btn}>
              {buttonText}
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>

        <div className={styles.timeline}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${index % 2 !== 0 ? styles.itemReverse : ''}`}
            >
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <div className={styles.itemDes}>{item.description}</div>
              </div>
              <div className={styles.imageWrap}>
                <img src={item.imageUrl} alt={item.title} className={styles.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
