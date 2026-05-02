import React from 'react';
import styles from './RelatedDocuments.module.css';

export interface RelatedDoc {
  title: string;
  url: string;
}

interface Props {
  documents: RelatedDoc[];
  id?: string;
}

export default function RelatedDocuments({ documents, id }: Props) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>
        <h2 className={styles.title}>RELATED<br/>DOCUMENTS</h2>
        <div className={styles.list}>
          {documents.map((doc, index) => (
            <a key={index} href={doc.url} className={styles.item}>
              <span className={styles.itemTitle}>{doc.title}</span>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
