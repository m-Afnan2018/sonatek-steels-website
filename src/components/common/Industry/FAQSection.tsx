"use client";

import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FaqItem[];
}

export default function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {/* <a href="/contact-us" className={styles.btn}>
            View all
          </a> */}
        </div>

        <div className={styles.accordion}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button 
                  className={styles.questionBtn} 
                  onClick={() => toggleOpen(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.iconWrap}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {isOpen ? (
                        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                      ) : (
                        <>
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round"/>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.answerWrap}
                    >
                      <div className={styles.answerContent}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
