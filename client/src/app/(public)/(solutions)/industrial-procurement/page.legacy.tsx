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
  { icon: "Layers", title: "Vendor Consolidation", description: "Replace multiple regional suppliers with a single accountable procurement partner across all your plant locations." },
  { icon: "BadgeCheck", title: "Consistent Specification", description: "Every batch, every plant, every order meets the same grade and tolerance standard — no quality drift between sites." },
  { icon: "TrendingDown", title: "Volume-Based Pricing", description: "Consolidated order volumes translate into better commercial terms than fragmented, plant-by-plant purchasing." },
  { icon: "FileCheck", title: "Centralized Documentation", description: "One MTC and compliance trail across your entire procurement volume, simplifying audits and vendor reviews." },
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
  { question: "What counts as 'industrial procurement' versus regular steel procurement?", answer: "Industrial procurement is built for manufacturers and plants ordering flat steel repeatedly and at scale, where consistency across orders and sites matters as much as price. Our standard steel procurement service covers smaller, one-off, or mixed-use orders." },
  { question: "Can you supply multiple plant locations under one account?", answer: "Yes, we can coordinate deliveries across multiple facilities under a single procurement relationship, with consolidated documentation and consistent specifications for every site." },
  { question: "Do you provide volume-based pricing for industrial buyers?", answer: "Yes, consolidated order volumes across your operation typically qualify for better commercial terms than fragmented purchasing." },
  { question: "What steel products are covered under industrial procurement?", answer: "The same full flat steel range: CR coils/sheets (our core stock), and HR coils/sheets/plates and chequered plates on request, all sourced through our SAIL MOU dealership." },
  { question: "How do you ensure quality consistency across large volumes?", answer: "Every dispatch, regardless of size, is accompanied by a Manufacturer Test Certificate, and we maintain the same sourcing and inspection standard across your full order volume." },
];

export default function IndustrialProcurementPage() {
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
          title="Industrial Procurement"
          description="Consolidated, high-volume flat steel procurement built for industrial plants and manufacturing facilities — one dependable vendor instead of a fragmented supplier list."
          image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80"
          ctaText="Request a Procurement Review"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/industrial-procurement" },
            { label: "Industrial Procurement", href: "/industrial-procurement" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="Industrial Sourcing" title="ONE VENDOR. EVERY PLANT REQUIREMENT.">
        <p>
          Large industrial operations lose time and money managing multiple steel vendors, each with different lead times,
          quality standards, and documentation. Sonatek Steels consolidates your flat steel procurement into a single,
          accountable relationship — sourced directly from SAIL under our MOU dealership, with consistent grade, tolerance,
          and delivery discipline across every order, whether it&apos;s for one plant or a multi-site operation.
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
          title="WHY CONSOLIDATE WITH US"
          subtitle="Industrial-scale buyers need more than a supplier — they need a partner who can standardize quality and cost across every plant."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our industrial procurement solution supports every major manufacturing segment represented across Sonatek Steels."
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
        title="CONSOLIDATE YOUR STEEL SUPPLY"
        description="Bring your plant-wide flat steel requirements under one accountable partner. Talk to our industrial procurement team today."
        btnText="Talk to Our Team"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </main>
  );
}
