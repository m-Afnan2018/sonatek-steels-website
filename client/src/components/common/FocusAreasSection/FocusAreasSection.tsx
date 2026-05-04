"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FocusAreasSection.module.css";
import { motion, AnimatePresence } from 'motion/react';

interface FocusArea {
  id: string;
  tabLabel: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
}

interface FocusAreasSectionProps {
  title: string;
  description: string;
  areas: FocusArea[];
  id?: string;
}

export default function FocusAreasSection({ title, description, areas ,...props}: FocusAreasSectionProps) {
  const [activeTab, setActiveTab] = useState(areas[0]?.id);

  const activeArea = areas.find(a => a.id === activeTab) || areas[0];

  if (!areas || areas.length === 0) return null;

  return (
    <section className={styles.section} {...props}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.tabsContainer}>
          <motion.div className={styles.tabsList}>
            {areas.map(area => (
              <button
                key={area.id}
                className={`${styles.tabBtn} ${activeTab === area.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(area.id)}
              >
                {area.tabLabel}
                {activeTab === area.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={styles.activeIndicator}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeArea.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{activeArea.cardTitle}</h3>
              <p className={styles.cardDesc}>{activeArea.cardDescription}</p>
            </div>
            <div className={styles.cardImageWrap}>
              <Image
                src={activeArea.image}
                alt={activeArea.cardTitle}
                fill
                className={styles.cardImage}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
