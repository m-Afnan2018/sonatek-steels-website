'use client';
import React from 'react';
import { motion } from 'motion/react';
import styles from './BeyondBusiness.module.css';

const DEFAULT_DATA = [
  {
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    title: 'DP World Foundation',
    des: 'Every individual should have the opportunity to lead a healthy and productive life.',
  },
  {
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    title: 'Our Climate Journey',
    des: "We're committed to understanding and reducing our environmental impact until we reach net zero.",
  },
  {
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    title: 'Empowering People',
    des: 'We focus on improving well-being and making a positive social impact.',
  }
];

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=90';

interface BeyondBusinessProps {
  data?: {
    img: string;
    title: string;
    des: string;
  }[];
  bgImage?: string;
  heading?: string;
  subheading?: string;
  id?: string;
}

export default function BeyondBusiness({
  data = DEFAULT_DATA,
  bgImage = DEFAULT_BG,
  heading = 'BEYOND BUSINESS',
  subheading = 'Our sustainability, education, and social impact initiatives ensure that global trade leaves a positive footprint.',
  id,
}: BeyondBusinessProps) {
  
  const renderHeading = (text: string) => {
    const parts = text.split(' ');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}<br />{parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section
      className={styles.outerContainer}
      id={id}
    >
      {/* Background image */}
      <div className={styles.bgWrapper}>
        <img src={bgImage} alt="Background" className={styles.bgImage} />
      </div>

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Content Inner Container */}
      <div className={styles.contentWrapper}>
        {/* Text block — top left */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>{renderHeading(heading)}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {data.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className={styles.cardImgWrapper}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.cardImg}
                />
                <div className={styles.cardImgOverlay} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDes}>{item.des}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
