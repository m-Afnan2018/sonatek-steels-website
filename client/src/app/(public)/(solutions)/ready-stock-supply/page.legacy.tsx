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
  { icon: "Zap", title: "Zero Mill Lead Time", description: "Standard grades and sizes are already in our warehouse, ready for immediate dispatch." },
  { icon: "AlarmClock", title: "Urgent Order Support", description: "Built for last-minute maintenance runs, unplanned shortfalls, and short-notice production needs." },
  { icon: "FileCheck", title: "Full Documentation, No Delay", description: "Manufacturer Test Certificates are ready alongside stock — no waiting on paperwork either." },
  { icon: "Warehouse", title: "Northern India Warehousing", description: "Centrally located stockyard means faster regional delivery once your order is confirmed." },
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
  { question: "What products are typically available as ready stock?", answer: "Our core CR coil and sheet range across common thicknesses and widths, along with chequered plates, are maintained as ready stock. HR products are typically sourced on request but can be stocked for regular customers on agreed terms." },
  { question: "How fast can a ready-stock order be dispatched?", answer: "Standard grades and sizes already in stock can typically be dispatched within a day or two of order confirmation, subject to destination and transport availability." },
  { question: "Can I get Manufacturer Test Certificates for ready stock material?", answer: "Yes, every ready-stock dispatch is accompanied by the relevant MTC, the same as any other order." },
  { question: "Is ready stock only for urgent or emergency orders?", answer: "No, it's available for any order — it's simply the fastest path when you don't want to wait on a fresh mill production run." },
  { question: "What if the exact size I need isn't in ready stock?", answer: "We'll confirm the closest available stock size or, if needed, coordinate a fresh mill order or in-house processing to your exact requirement." },
];

export default function ReadyStockSupplyPage() {
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
          title="Ready Stock Supply"
          description="Standard flat steel grades and sizes, always in stock and ready for immediate dispatch — no mill lead time, no waiting."
          image="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1200&q=80"
          ctaText="Check Stock Availability"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/ready-stock-supply" },
            { label: "Ready Stock Supply", href: "/ready-stock-supply" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="Ex-Stock Availability" title="WHEN YOU CAN'T WAIT ON A MILL SCHEDULE.">
        <p>
          Some requirements simply can&apos;t wait for a fresh mill production run. Sonatek Steels maintains extensive
          ready stock of our core CR coil, sheet, and chequered plate range at our Northern India warehouse, so standard
          grades and sizes are available for immediate dispatch — not weeks away. For urgent maintenance, unplanned
          production runs, or short-notice orders, ready stock is the difference between staying on schedule and losing a
          day&apos;s output.
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
          title="WHY READY STOCK MATTERS"
          subtitle="When schedule matters more than anything else, ex-stock availability is what keeps your operation moving."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our ready stock supply solution supports every major industry segment represented across Sonatek Steels."
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
        title="CHECK WHAT'S IN STOCK TODAY"
        description="Tell us the grade, thickness, and quantity you need — we'll confirm ready-stock availability right away."
        btnText="Check Availability"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </main>
  );
}
