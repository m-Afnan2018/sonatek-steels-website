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
  { icon: "CalendarClock", title: "Planned Dispatch Scheduling", description: "Deliveries are scheduled against your requirement date, not left to first-available transport." },
  { icon: "Truck", title: "Regional Delivery Network", description: "Established road transport coverage across Northern India's key industrial and construction hubs." },
  { icon: "PackageCheck", title: "Damage-Free Handling", description: "Coils, sheets, and plates are loaded, strapped, and transported with edge and surface protection to prevent transit damage." },
  { icon: "Radio", title: "Real-Time Coordination", description: "A single point of contact for dispatch status and delivery updates, from confirmation through gate delivery." },
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
  { question: "How is this different from your Freight Forwarding service?", answer: "Logistics & Delivery focuses on regional, direct-to-site delivery execution for your steel orders. Freight Forwarding covers broader multi-modal cargo movement, including road, rail, and ocean freight coordination for larger or cross-region shipments." },
  { question: "Can delivery be scheduled to a specific date or time window?", answer: "Yes, we plan dispatch against your required delivery date; specific time windows can be coordinated for site-access-restricted locations." },
  { question: "What areas do you deliver to?", answer: "Our regional delivery network covers Northern India's major industrial, construction, and manufacturing hubs. Contact us to confirm coverage for your specific location." },
  { question: "How do you prevent transit damage to coils and sheets?", answer: "Material is edge-protected, strapped, and loaded using handling practices suited to flat steel, minimizing denting, edge damage, and corrosion risk during transport." },
  { question: "Can you coordinate delivery to multiple sites for a single order?", answer: "Yes, we can split and schedule delivery across multiple site locations as part of a single coordinated order." },
];

export default function LogisticsDeliveryPage() {
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
          title="Logistics & Delivery"
          description="Planned dispatches and reliable regional delivery, direct to your site or factory gate — steel that arrives when your schedule says it should."
          image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80"
          ctaText="Plan Your Delivery"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/logistics-delivery" },
            { label: "Logistics & Delivery", href: "/logistics-delivery" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="Delivery Execution" title="IT'S NOT DELIVERED UNTIL IT'S AT YOUR GATE.">
        <p>
          Sourcing the right steel is only half the job — getting it to your site or factory on schedule, undamaged, and
          properly documented is what actually keeps your production or project on track. Sonatek Steels manages dispatch
          scheduling, regional transport, and delivery coordination directly, so you have a single point of contact from
          order confirmation to gate delivery, not a handoff between separate sourcing and logistics providers.
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
          title="HOW WE MANAGE DELIVERY"
          subtitle="From dispatch scheduling to gate delivery, every step is coordinated to keep your material moving on time."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our logistics and delivery solution supports every major industry segment represented across Sonatek Steels."
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
        title="SCHEDULE YOUR NEXT DELIVERY"
        description="Tell us your site location and required delivery window — we'll plan the dispatch and keep you updated to gate delivery."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85"
      />
    </main>
  );
}
