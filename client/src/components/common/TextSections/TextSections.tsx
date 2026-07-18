import Link from "next/link";
import styles from "./TextSections.module.css";

interface Section {
  heading: string;
  content: string;
}

interface Breadcrumb {
  label: string;
  href: string;
}

interface TextSectionsProps {
  title: string;
  intro?: string;
  breadcrumb?: Breadcrumb[];
  sections: Section[];
}

export default function TextSections({ title, intro, breadcrumb, sections }: TextSectionsProps) {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.container}>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className={styles.breadcrumb}>
            {breadcrumb.map((b, i) => (
              <span key={i} className={styles.crumb}>
                {i > 0 && <span className={styles.sep}>&gt;</span>}
                {i === breadcrumb.length - 1 ? (
                  <span>{b.label}</span>
                ) : (
                  <Link href={b.href}>{b.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}

        <div className={styles.sectionsContainer}>
          {sections.map((section, i) => (
            <section key={i} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              <p className={styles.sectionContent}>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
