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
  { icon: "TrendingDown", title: "Price Stability", description: "Agreed pricing structure for the contract period reduces exposure to short-term market volatility." },
  { icon: "ShieldCheck", title: "Guaranteed Volume Priority", description: "Your committed volume is planned into our stock and mill allocation ahead of time." },
  { icon: "FileSignature", title: "Simplified Procurement", description: "One agreement replaces monthly quote cycles and repeat purchase order approvals." },
  { icon: "CalendarClock", title: "Annual Production Planning", description: "Predictable steel costs and delivery commitments support your own yearly budgeting and planning cycle." },
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
  { question: "How is pricing structured under an annual contract?", answer: "Pricing is typically structured with an agreed base or indicative rate for the contract period, with mechanisms discussed upfront for any market-linked adjustments. Exact terms are worked out with our sales team based on your volume and product mix." },
  { question: "Is there a minimum volume commitment?", answer: "Annual contracts are built around your actual yearly consumption; our team will work with you to structure a volume commitment that reflects your real requirement." },
  { question: "Can the delivery schedule be spread across the year?", answer: "Yes, deliveries can be scheduled monthly, quarterly, or against your production calendar, as agreed in the contract." },
  { question: "What happens if our requirement changes mid-year?", answer: "We review and adjust the remaining contract volume and schedule with you — annual contracts are structured with reasonable flexibility, not treated as rigid, unchangeable commitments." },
  { question: "Which products can be included in an annual contract?", answer: "Our full flat steel range — CR coils and sheets (core stock) and HR coils, sheets, plates, and chequered plates — can be included based on your yearly requirement." },
];

export default function AnnualSupplyContractPage() {
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
          title="Annual Supply Contract"
          description="Locked-in pricing and guaranteed volume for your yearly flat steel requirement — plan your production budget without chasing quotes every month."
          image="https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=1200&q=80"
          ctaText="Discuss an Annual Contract"
          ctaHref="/contact-us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/annual-supply-contract" },
            { label: "Annual Supply Contract", href: "/annual-supply-contract" },
          ]}
        />
      </div>

      <StickyNav navItems={navItems} />

      <MissionSection label="Long-Term Supply" title="ONE AGREEMENT. TWELVE MONTHS OF CERTAINTY.">
        <p>
          Repeated monthly quoting and re-negotiation adds administrative overhead and pricing risk to your production
          planning. An Annual Supply Contract with Sonatek Steels locks in your flat steel requirement, indicative pricing
          structure, and delivery commitment for the year, backed by our direct SAIL MOU dealership. You get predictable
          input costs for budgeting; we get the visibility to plan stock and logistics around your consumption pattern.
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
          title="WHY LOCK IN AN ANNUAL CONTRACT"
          subtitle="Predictability across sourcing, pricing, and delivery gives your production planning a stable foundation."
          items={ADVANTAGES_DATA}
        />
      </div>

      <div id="industries">
        <ServicesSection
          title="INDUSTRIES WE SERVE"
          subtitle="Our annual supply contracts support every major industry segment represented across Sonatek Steels."
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
        title="PLAN YOUR YEAR OF STEEL SUPPLY"
        description="Share your estimated annual requirement and we'll structure a contract that gives you price and delivery certainty."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />
    </main>
  );
}
