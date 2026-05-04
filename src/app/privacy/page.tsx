'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { privacyData } from './privacy-data';
import styles from './privacy.module.css';

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const AccordionItem = ({ 
  title, 
  content, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  content: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className={styles.accordionItem}>
      <button 
        className={styles.accordionHeader} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.sectionTitle}>{title}</span>
        <ChevronIcon className={`${styles.chevron} ${isOpen ? styles.chevronActive : ''}`} />
      </button>
      <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentActive : ''}`}>
        <div className={styles.contentText}>
          {content}
        </div>
      </div>
    </div>
  );
};

const PrivacyPage = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string | number) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <span>Privacy notice</span>
        </nav>

        {/* Page Title */}
        <h1 className={styles.title}>{privacyData.title}</h1>

        {/* Main Sections */}
        <div className={styles.accordion}>
          {privacyData.sections.map((section) => (
            <AccordionItem
              key={section.id}
              title={section.title}
              content={section.content}
              isOpen={!!openSections[section.id]}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* Annexes */}
        {privacyData?.annexes?.map((annex: any, annexIndex: number) => (
          <div key={annexIndex} className={styles.annexContainer}>
            <div className={styles.annexHeader}>
              <h2 className={styles.annexTitle}>{annex?.title}</h2>
            </div>
            <div className={styles.accordion}>
              {annex?.sections?.map((section: any) => (
                <AccordionItem
                  key={section.id}
                  title={section.title}
                  content={section.content}
                  isOpen={!!openSections[section.id]}
                  onToggle={() => toggleSection(section.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPage;
