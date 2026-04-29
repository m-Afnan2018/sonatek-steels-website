'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import styles from './BeyondBusiness.module.css';

const DEFAULT_DATA = [
  {
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    title: 'DP World Foundation',
    des: 'Every individual should have the opportunity to lead a healthy and productive life, regardless of where they were born.',
  },
  {
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    title: 'Our Climate Journey',
    des: "We're committed to understanding and reducing our environmental impact until we reach net zero emissions across all operations.",
  },
  {
    img: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80',
    title: 'Empowering Communities',
    des: 'We focus on improving the lives of people in the communities where we operate through inclusive economic opportunity.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
    title: 'Clean Energy Future',
    des: 'Investing in renewable infrastructure and sustainable logistics networks that power global trade without the carbon cost.',
  },
  {
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    title: 'Global Education',
    des: 'Partnering with schools and universities worldwide to prepare the next generation for careers in sustainable global trade.',
  },
];

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=90';

const CARD_WIDTH = 400;
const CARD_GAP = 24;

export default function BeyondBusiness({
  data = DEFAULT_DATA,
  bgImage = DEFAULT_BG,
  heading = 'BEYOND BUSINESS',
  subheading = 'Our sustainability, education, and social impact initiatives ensure that global trade leaves a positive footprint.',
}) {
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
    damping: 30,
    restDelta: 0.001,
  });

  const totalTravel = (data.length - 2) * (CARD_WIDTH + CARD_GAP);

  const translateX = useTransform(
    smoothProgress,
    [0.05, 0.95],
    [0, -totalTravel]
  );

  const bgOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.8],
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

  const progressWidth = useTransform(
    smoothProgress,
    [0.05, 0.95],
    ['0%', '100%']
  );

  return (
    <div
      ref={containerRef}
      className={styles.outerContainer}
      style={{ '--sections': totalScrollSections } as React.CSSProperties}
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
          <motion.div className={styles.cardsTrack} style={{ x: translateX }}>
            {data.map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
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

        {/* Scroll progress bar */}
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            style={{ width: progressWidth }}
          />
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {data.map((_, i) => {
            const start = i / data.length;
            const end = (i + 1) / data.length;
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
