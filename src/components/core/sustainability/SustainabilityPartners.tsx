"use client";

import React, { useRef } from 'react';
import styles from './SustainabilityPartners.module.css';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

export interface Partner {
  name: string;
  logoUrl: string;
}

interface Props {
  partners: Partner[];
  baseVelocity?: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function SustainabilityPartners({ partners, baseVelocity = -2 }: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // We are moving between -20% and -45% depending on how many items we have
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  
  return (
    <section className={styles.section} id="partnerships">
      <div className={styles.container}>
        <p className={styles.label}>OUR GLOBAL</p>
        <h2 className={styles.title}>SUSTAINABILITY<br/>PARTNERS</h2>
        <p className={styles.description}>Working together with industry leaders and global organizations to drive meaningful change across the supply chain.</p>
      </div>
      
      <div className={styles.parallax}>
         <motion.div className={styles.scroller} style={{ x }}>
           {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
             <div key={i} className={styles.partnerCard}>
                <img src={p.logoUrl} alt={p.name} className={styles.logo} />
             </div>
           ))}
         </motion.div>
      </div>
    </section>
  );
}
