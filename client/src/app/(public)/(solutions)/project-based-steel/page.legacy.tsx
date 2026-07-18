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
  { icon: "CalendarClock", title: "Milestone-Based Dispatch", description: "Steel arrives in stages aligned to your project phases, reducing on-site storage and material handling costs." },
  { icon: "FileSignature", title: "Fixed-Scope Contracts", description: "A defined quantity and timeline for the life of the project, with pricing locked in at the start." },
  { icon: "Headset", title: "Single Point of Contact", description: "One account manager coordinates your full project requirement from kickoff through final dispatch." },
  { icon: "ClipboardCheck", title: "Clean Project Closeout", description: "Full documentation and reconciliation at project end, with no lingering open-ended commitments." },
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
  { question: "How is project-based supply different from a standing purchase order?", answer: "A project-based arrangement is scoped to a fixed quantity and timeline tied to your project, rather than an open-ended recurring order. Pricing and dispatch schedule are agreed upfront for the life of the project." },
  { question: "Can dispatch be staged around our construction or fabrication milestones?", answer: "Yes, we plan staged dispatches against your project phases so material arrives when you need it, not all at once." },
  { question: "What if our project timeline changes mid-way?", answer: "We work with you to adjust the remaining dispatch schedule; our SAIL-backed sourcing gives us the flexibility to accommodate reasonable timeline shifts." },
  { question: "Do you support one-time or short-duration projects?", answer: "Yes, project-based supply is built specifically for defined-scope work, whether that's a multi-year build or a short fabrication contract." },
  { question: "Will we get a single consolidated invoice and documentation set for the project?", answer: "Yes, we maintain project-level documentation and can consolidate MTCs and dispatch records for a clean closeout." },
];

export default function ProjectBasedSteelPage() {
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
          title="Project Based Steel Supply"
          description="Flat steel supply structured around your project timeline — defined quantities, milestone-based dispatch, and a single point of accountability from kickoff to closeout."
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
          ctaText="Discuss Your Project"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/project-based-steel" },
            { label: "Project Based Steel", href: "/project-based-steel" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="Project Delivery" title="STEEL SCHEDULED TO YOUR PROJECT, NOT YOUR CALENDAR YEAR.">
        <p>
          Not every steel requirement fits a standing purchase order or an annual contract. Project-based work — a
          fabrication contract, a one-time build, a defined EPC scope — needs a supply arrangement that matches its own
          timeline: a fixed quantity, staged dispatches against project milestones, and a clean handover once the project
          closes. Sonatek Steels structures procurement around your project plan, not the other way around.
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
          title="BUILT AROUND YOUR PROJECT PLAN"
          subtitle="A supply structure that follows your project phases instead of forcing your project around a standard order cycle."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our project-based supply solution supports every major project-driven segment represented across Sonatek Steels."
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
        title="PLAN YOUR PROJECT SUPPLY"
        description="Share your project scope, quantity, and timeline. We'll structure a dispatch plan that matches it exactly."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />
    </main>
  );
}
