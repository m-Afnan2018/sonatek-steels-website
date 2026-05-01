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
        id: "mission",
        title: "Our Mission",
        description: "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do.",
        buttonText: "Our Mission",
        buttonHref: "#mission",
        image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
        imageAlt: "Our People working at port",
        reverse: false,
    },
    {
        id: "what-we-do",
        title: "What We Do",
        description: "We provide a comprehensive range of steel products. We supply the complete product range of SAIL, including Cold Rolled (CR) Coils/Sheets, Hot Rolled (HR) Coils & Sheet/Plates, HSM Plates and Chequered Plates of any grade/specification. We pride ourselves on being the largest stockists in Northern India who have the entire range of Flat Steel Products in their product portfolio.",
        buttonText: "View Products",
        buttonHref: "/products",
        image: "https://images.unsplash.com/photo-1776549821469-e8aab812dba0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "People planting trees for sustainability",
        reverse: true,
    },
    {
        id: "management",
        title: "Our Management",
        description: "Our team works as a partner to develop the relationship and at the same time delivering results. We have highly qualified management, using a time and timely product delivery based model. We are also specialized in providing personalized service to our customers in this area. Our team is a mix of one of the strongest leaders in this industry.",
        buttonText: "Our Leadership",
        buttonHref: "#management",
        image: "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Leadership panel discussion",
        reverse: false,
    },
    {
        id: "health-safety",
        title: "Health & Safety",
        description: "Safety is the utmost priority at Sonatek Steels. Everyone adheres to the policies and guidelines to ensure their well-being and the welfare of other people, property, and environment. We comply with applicable legislation, protocols, and regulations to maintain fire protection and other emergency systems.",
        buttonText: "Our Guidelines",
        buttonHref: "#health-safety",
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
                        <div className={styles.breadcrumb}>
                         <a href="/">Home</a> &gt; About us</div>
                        <h1 className={styles.heroTitle}>About Us</h1>
                        <p className={styles.heroDesc}>
                            Made for Life, Your Supplier of Choice. By selecting Sonatek Steels as your supplier, you make the choice of innovative and high-performance solutions.
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
                <h2 className={styles.introTitle}>About Our Company</h2>
                <p className={styles.introDesc}>
                    Established in 2014, Sonatek Steels Pvt. Ltd. are the distributors of flat steel products in Northern India. We are a one-stop solution for all flat steel product requirements and have a customer base that is spread across corporate clients, OEMs, and various industrial segments. We are the MOU Dealer of India’s leading steel producers, Steel Authority of India Ltd. and perform distribution for their entire range of Cold Rolled (CR) steel products.
                </p>
                <a href="#mission" className={styles.outlineBtn}>
                    Our Mission
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
