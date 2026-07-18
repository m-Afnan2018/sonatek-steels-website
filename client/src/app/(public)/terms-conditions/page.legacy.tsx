import React from 'react';
import Link from 'next/link';
import { termsData } from './terms-data';
import styles from './terms.module.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use | Sonatek Steels",
    description: "Read our terms and conditions carefully before using our website.",
};

const TermsPage = () => {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <span>Terms of use</span>
        </nav>

        {/* Page Title */}
        <h1 className={styles.title}>{termsData.title}</h1>

        {/* Intro Text */}
        <p className={styles.intro}>{termsData.intro}</p>

        {/* Sections */}
        <div className={styles.sectionsContainer}>
          {termsData.sections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              <p className={styles.sectionContent}>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
