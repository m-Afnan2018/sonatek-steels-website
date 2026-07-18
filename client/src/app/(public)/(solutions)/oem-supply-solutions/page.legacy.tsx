"use client";

import React from "react";
import SolutionHero from "@/components/common/Service/SolutionHero";
import MissionSection from "@/components/common/MissionSection/MissionSection";
import ServicesSection from "@/components/common/Industry/ServicesSection";
import IconGrid from "@/components/common/Service/IconGrid";
import FAQSection from "@/components/common/Industry/FAQSection";
import SolutionInsights from "@/components/common/Service/SolutionInsights";
import CTABanner from "@/components/common/Industry/CTABanner";
import StickyNav from "@/components/common/Navbar/StickyNav";
import styles from "./page.module.css";
import { SOLUTIONS_DATA } from "@/constants/solutions";

const ADVANTAGES_DATA = [
  { icon: "Target", title: "Specification Lock-In", description: "Once your required grade, gauge, and finish are confirmed, every subsequent order matches it exactly — no re-qualification needed." },
  { icon: "Timer", title: "Just-in-Time Delivery", description: "Supply scheduled against your production calendar, reducing on-site inventory and warehousing costs." },
  { icon: "Users", title: "Engineering Collaboration", description: "Our technical team works with your engineers during component design to recommend the most cost-effective compliant grade." },
  { icon: "Headset", title: "Dedicated Account Support", description: "A single point of contact who understands your BOM, tolerances, and delivery cadence." },
];

const INDUSTRY_EXPERTISE_DATA = [
  { title: "Automotive", description: "Precision supply support for OEMs and component manufacturers using CR and HR steel.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Construction", description: "Project dispatch support for sheets, plates, and chequered plates used in construction.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176", href: "/industries/construction" },
  { title: "Oil & Gas", description: "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.", image: "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170", href: "/industries/oil-gas" },
  { title: "Shipbuilding", description: "Marine project steel movement for shipyards, offshore structures, and deck applications.", image: "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170", href: "/industries/shipbuilding" },
  { title: "Heavy Engineering", description: "Heavy plate and processed steel delivery support for machinery and industrial fabrication.", image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170", href: "/industries/heavy-engineering" },
  { title: "Fabricators & OEMs", description: "Repeat supply support for workshops, manufacturing lines, and OEM production teams.", image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170", href: "/industries/fabricators-oems" },
];

const FAQS_DATA = [
  { question: "Do you work directly with OEM engineering teams during grade selection?", answer: "Yes, our technical team collaborates directly with OEM engineering and quality teams to confirm the grade, gauge, and finish required for each component before supply begins." },
  { question: "Can you supply against a rolling production schedule?", answer: "Yes, once your requirement is established we can align dispatch schedules to your production calendar, including Just-In-Time delivery." },
  { question: "What happens if our component specification changes?", answer: "We re-confirm the required grade and gauge with you and adjust sourcing accordingly — our SAIL MOU dealership gives us the flexibility to accommodate specification changes without long lead-time penalties." },
  { question: "Do you provide consistent Manufacturer Test Certificates for OEM quality audits?", answer: "Yes, every dispatch includes full MTC documentation, and we maintain a consistent sourcing record to support your supplier quality audits." },
  { question: "Is there a minimum order commitment for OEM supply agreements?", answer: "OEM supply arrangements are typically structured around your actual production volume rather than a fixed minimum — talk to our team about your specific requirement." },
];

export default function OemSupplySolutionsPage() {
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "advantages", label: "Advantages" },
    { id: "industries", label: "Industries" },
    { id: "insights", label: "Insights" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main className={styles.main}>
      <div id="overview">
        <SolutionHero
          title="OEM Supply Solutions"
          description="Dependable, specification-matched flat steel supply built around your production schedule — so your assembly line never waits on steel."
          image="https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=1200&q=80"
          ctaText="Discuss Your OEM Requirement"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/oem-supply-solutions" },
            { label: "OEM Supply Solutions", href: "/oem-supply-solutions" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="OEM Partnership" title="STEEL THAT FITS YOUR PRODUCTION LINE, NOT THE OTHER WAY AROUND.">
        <p>
          OEMs can&apos;t afford variability in grade, gauge, or delivery timing — a single inconsistent batch can stall a
          production line. Sonatek Steels works directly with OEM engineering and procurement teams to lock in the exact
          CR/HR specification your components require, then supplies against your production schedule with the same
          discipline you expect from your own assembly line.
        </p>
      </MissionSection>

      <div id="solutions">
        <ServicesSection
          title="OUR CORE SOLUTIONS"
          subtitle="Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence."
          services={SOLUTIONS_DATA}
        />
      </div>

      <div id="advantages">
        <IconGrid
          title="BUILT FOR OEM PRODUCTION"
          subtitle="A supply partner that understands component tolerances, BOM changes, and production timing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our OEM supply solution supports every major manufacturing segment represented across Sonatek Steels."
          services={INDUSTRY_EXPERTISE_DATA}
        />
      </div>

      <div id="insights">
        <SolutionInsights />
      </div>

      <div id="faqs">
        <FAQSection title="FAQs" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="LOCK IN YOUR OEM SUPPLY"
        description="Get a steel partner that matches your production schedule, not the other way around. Talk to our OEM supply team."
        btnText="Talk to Our Team"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />
    </main>
  );
}
