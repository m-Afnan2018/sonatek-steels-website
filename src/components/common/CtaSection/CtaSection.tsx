import Image from "next/image";
import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
}

export default function CtaSection({ title, description, buttonText, buttonLink, bgImage }: CtaSectionProps) {
  return (
    <section className={styles.section}>
      <Image
        src={bgImage}
        alt="Background"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={buttonLink} className={styles.btn}>
          {buttonText}
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
