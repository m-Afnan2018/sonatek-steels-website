import React from 'react';
import styles from './FloatingTags.module.css';
import { tagsData } from '@/app/(public)/blogs/tags-data';

const ChevronIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const FloatingTags = () => {
  return (
    <div className={styles.floatingContainer}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.tagList}>
        {tagsData.map((tag) => (
          <button key={tag.id} className={styles.tagItem}>
            <span className={styles.tagLabel}>{tag.label}</span>
            <span className={styles.chevron}>
              <ChevronIcon />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingTags;
