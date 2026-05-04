import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";

interface HeroSectionProps {
  breadcrumb?: { label: string; href: string }[];
  title: string;
  description: string;
  bgImage: string;
  hasBtn?: boolean;
  btnText?: string;
  btnHref?: string;
}



export default function HeroSection({ breadcrumb, title, description, bgImage, hasBtn, btnText, btnHref }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={bgImage}
        alt={title}
        className={styles.heroBg}
        fill
        priority
      />
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            {breadcrumb && breadcrumb?.map((crumb: { href: string; label: string; }, index: number) => (
              <Link key={index} href={crumb.href} className={styles.crumb}>
                {crumb.label} { index < breadcrumb.length - 1 && ' > '}
              </Link>
            ))}
          </div>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDesc}>{description}</p>

        {
        hasBtn && btnText && btnHref && (
            <Link href={btnHref} className={styles.btnPrimary}>
              {btnText}
            </Link>
        )
      }
      </div>

    </section>
  );
}
