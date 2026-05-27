'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, animate } from 'motion/react';
import styles from './BeyondBusiness.module.css';

const DEFAULT_DATA = [
  {
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
    title: 'Sustainable Sourcing',
    des: 'We partner with leading steel producers who prioritize eco-friendly manufacturing processes and resource efficiency.',
  },
  {
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    title: 'Green Logistics',
    des: "We optimize our distribution networks in Northern India to reduce transit times and minimize our carbon footprint.",
  },
  {
    img: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80',
    title: 'Empowering Communities',
    des: 'We invest in local vocational training programs to help prepare the workforce for the evolving industrial sector.',
  }
];

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=90';

const CARD_WIDTH = 400;
const CARD_GAP = 24;

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
  subheading = 'Our sustainability, technical excellence, and community initiatives ensure that our steel distribution leaves a positive footprint.',
  id,
}: BeyondBusinessProps) {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalScrollSections = data.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    duration: .2
  });

  const cardWidth = isMobile ? 290 : 400;
  const cardGap = 24;
  const totalTravel = isMobile
    ? (data.length - 1) * (cardWidth + cardGap)
    : (data.length - 2) * (cardWidth + cardGap);

  const translateX = useTransform(
    smoothProgress,
    [0.15, 0.99],
    [0, -totalTravel]
  );

  const bgOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.75],
    [1, 0.35, 0.75]
  );

  const overlayOpacity = useTransform(smoothProgress, [0, 0.1], [0.15, 0.45]);

  const textX = useTransform(smoothProgress, [0, 0.4], [0, isMobile ? 0 : -20]);
  const textY = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, isMobile ? -10 : -220]
  );
  const textOpacity = useTransform(smoothProgress, [0, 0.15, 0.5], [1, 1, 0.7]);

  return (
    <div
      ref={containerRef}
      className={styles.outerContainer}
      style={{ '--sections': 1.5 } as React.CSSProperties}
      id={id}
    >
      <div className={styles.stickyContainer}>
        {/* Background image with opacity animation */}
        <motion.div className={styles.bgWrapper} style={{ opacity: bgOpacity }}>
          <img src={bgImage} alt="Background" className={styles.bgImage} />
        </motion.div>

        {/* Dark overlay that intensifies on scroll */}
        <motion.div
          className={styles.overlay}
          style={{ opacity: overlayOpacity }}
        />

        {/* Text block — bottom left */}
        <motion.div
          className={styles.textBlock}
          style={{ x: textX, y: textY, opacity: textOpacity }}
        >
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subheading}>{subheading}</p>
        </motion.div>

        {/* Cards slider */}
        <div className={styles.sliderContainer}>
          <motion.div className={styles.cardsTrack}
            initial={{ x: -100 }}
            transition={{ duration: .3 }}
            style={{ x: isMobile ? 0 : translateX }}>
            {data.map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
                  <span className={styles.cardIndex}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDes}>{item.des}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* Dot indicators */}
        <div className={styles.dots}>
          {data.map((_, i) => {
            const start = (i / data.length) * 0.75;
            const end = ((i + 1) / data.length) * 0.75;
            const dotOpacity = useTransform(
              smoothProgress,
              [start, (start + end) / 2, end],
              [0.35, 1, 0.35]
            );
            return (
              <motion.span
                key={i}
                className={styles.dot}
                style={{ opacity: dotOpacity }}
              />
            );
          })}
        </div>

        {/* Scroll hint */}
        <motion.div
          className={styles.scrollHint}
          style={{
            opacity: useTransform(smoothProgress, [0, 0.08], [1, 0]),
          }}
        >
          <span className={styles.scrollHintLine} />
          <span className={styles.scrollHintText}>Scroll</span>
        </motion.div>
      </div>
    </div>
  );
}
