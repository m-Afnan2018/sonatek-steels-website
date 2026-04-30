import Image from "next/image";
import styles from "./about.module.css";
import type { Metadata } from "next";
import GlobalNetwork from "@/components/core/home/GlobalNetwork";

export const metadata: Metadata = {
    title: "About Us | Sonatek Steels",
    description: "Learn more about our history, our people, and our commitment to making trade flow.",
};

const ABOUT_SECTIONS = [
    {
        id: "who-we-are",
        title: "Our People",
        description: "Our diverse, global team is the driving force behind everything we do. By fostering a culture of innovation, collaboration, and continuous learning, we empower our people to develop solutions that push boundaries and set new industry standards. We believe in creating an inclusive environment where every voice matters.",
        buttonText: "Our People",
        buttonHref: "#people",
        image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
        imageAlt: "Our People working at port",
        reverse: false,
    },
    {
        id: "commitment",
        title: "Our Commitment",
        description: "We are deeply committed to leaving a positive legacy. Sustainability is embedded at the core of our strategy, driving us to minimize our environmental impact, invest in local communities, and promote responsible business practices throughout our global supply chain.",
        buttonText: "Our Commitment",
        buttonHref: "#commitment",
        image: "https://images.unsplash.com/photo-1776549821469-e8aab812dba0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "People planting trees for sustainability",
        reverse: true,
    },
    {
        id: "leadership",
        title: "Our Leadership",
        description: "Guided by visionary leaders with decades of industry experience, we navigate complex global markets with confidence. Our leadership team is dedicated to operational excellence, strategic growth, and ensuring that we remain at the forefront of the logistics revolution.",
        buttonText: "Our Leadership",
        buttonHref: "#leadership",
        image: "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Leadership panel discussion",
        reverse: false,
    },
    {
        id: "governance",
        title: "Our Governance",
        description: "Strong corporate governance is the foundation of our long-term success. We maintain the highest standards of transparency, ethics, and accountability, ensuring that our operations consistently align with the best interests of our stakeholders, partners, and the regions we serve.",
        buttonText: "Our Governance",
        buttonHref: "#governance",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        imageAlt: "Business person looking at city skyline",
        reverse: true,
    }
];

export default function AboutUsPage() {
    return (
        <main className={styles.main}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <Image
                    src="https://images.unsplash.com/photo-1617707713766-ee547bd0720a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Aerial view of ocean and islands"
                    className={styles.heroBg}
                    fill
                    priority
                />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div>
                        <div className={styles.breadcrumb}>Home &gt; About us</div>
                        <h1 className={styles.heroTitle}>Connecting Worlds</h1>
                        <p className={styles.heroDesc}>
                            We are building a more sustainable and efficient global trade ecosystem,
                            where businesses can thrive and communities can prosper.
                        </p>
                    </div>
                    <a href="#video" className={styles.primaryBtn}>
                        Watch our video
                    </a>
                    
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className={styles.intro}>
                <span className={styles.sectionLabel}>About Us</span>
                <h2 className={styles.introTitle}>We Make Trade Flow</h2>
                <p className={styles.introDesc}>
                    A key facilitator of global trade, we help supply chains run more efficiently, securely,
                    and sustainably. From ports and terminals to marine services and logistics, we provide
                    end-to-end solutions that unlock opportunities for businesses everywhere.
                </p>
                <a href="#who-we-are" className={styles.outlineBtn}>
                    Who we are
                </a>
            </section>

            {/* VIDEO SECTION */}
            <GlobalNetwork/>

            {/* ALTERNATING SECTIONS */}
            {ABOUT_SECTIONS.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`${styles.alternatingSection} ${section.reverse ? styles.reverse : ""}`}
                >
                    <div className={styles.altContent}>
                        <h3 className={styles.altTitle}>{section.title}</h3>
                        <p className={styles.altDesc}>{section.description}</p>
                        <a href={section.buttonHref} className={styles.outlineBtn}>
                            {section.buttonText}
                        </a>
                    </div>
                    <div className={styles.altImageWrap}>
                        <Image
                            src={section.image}
                            alt={section.imageAlt}
                            className={styles.altImage}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            fill
                        />
                    </div>
                </section>
            ))}

            {/* JOIN OUR TEAM CTA */}
            <section className={styles.joinTeam}>
                <div className={styles.joinTeamInner}>
                    <h2 className={styles.joinTitle}>
                        Join a global team shaping the future of global trade.
                    </h2>
                    <div className={styles.joinContent}>
                        <p className={styles.joinDesc}>
                            Discover career opportunities that challenge you to think differently, 
                            act boldly, and create a lasting impact on a global scale.
                        </p>
                        <a href="#careers" className={styles.outlineBtn}>
                            Join our team
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
