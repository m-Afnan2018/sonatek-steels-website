"use client";

import React, { useRef } from 'react';
import styles from './KeyDocuments.module.css';
import Image from 'next/image';

export interface SustainabilityDocument {
  title: string;
  type: string;
  imageUrl: string;
  downloadUrl: string;
}

interface Props {
  documents: SustainabilityDocument[];
  id?: string;
}

export default function KeyDocuments({ documents, id }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>KEY SUSTAINABILITY<br/>DOCUMENTS</h2>
          <div className={styles.controls}>
            <button onClick={scrollLeft} className={styles.controlBtn} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={scrollRight} className={styles.controlBtn} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.sliderWrap}>
          <div className={styles.slider} ref={sliderRef}>
            {documents.map((doc, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img src={doc.imageUrl} alt={doc.title} className={styles.cardImage} />
                  <div className={styles.overlay}>
                    <a href={doc.downloadUrl} className={styles.downloadIcon} aria-label={`Download ${doc.title}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardType}>{doc.type}</span>
                  <h3 className={styles.cardTitle}>{doc.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
