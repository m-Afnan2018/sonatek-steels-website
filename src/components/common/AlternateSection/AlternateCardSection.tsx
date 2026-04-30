"use client";

import React from 'react';
import Image from 'next/image';
import styles from './AlternateCardSection.module.css';
import { motion } from 'motion/react';

interface AlternateCardSectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isReversed?: boolean;
}

export default function AlternateCardSection({ title, description, image, link, isReversed = false }: AlternateCardSectionProps) {
  return (
    <section className={`${styles.section} ${isReversed ? styles.reversed : ''}`}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrap}
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className={styles.imageInner}>
            <Image 
              src={image} 
              alt={title} 
              fill 
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <a href={link} className={styles.btn}>
            Read More
            <svg 
              className={styles.icon} 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
