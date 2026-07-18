import styles from "./JoinTeamCta.module.css";

interface JoinTeamCtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function JoinTeamCta({ title, description, buttonText, buttonLink }: JoinTeamCtaProps) {
  return (
    <section className={styles.joinTeam}>
      <div className={styles.joinTeamInner}>
        <h2 className={styles.joinTitle}>{title}</h2>
        <div className={styles.joinContent}>
          <p className={styles.joinDesc}>{description}</p>
          <a href={buttonLink} className={styles.outlineBtn}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
