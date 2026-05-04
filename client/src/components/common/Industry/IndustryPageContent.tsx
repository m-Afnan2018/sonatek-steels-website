"use client";

import { INDUSTRIES_DATA, IndustryKey } from "@/constants/industries";
import IndustryHero from "@/components/common/Industry/IndustryHero";
import StickyNav from "@/components/common/Navbar/StickyNav";
import MissionSection from "@/components/common/MissionSection/MissionSection";
import StatsSection from "@/components/common/Industry/StatsSection";
import HowWeCanHelp from "@/components/common/Industry/HowWeCanHelp";
import BuiltToDeliver from "@/components/common/Industry/BuiltToDeliver";
import VideoTeaserSection from "@/components/common/VideoTeaserSection/VideoTeaserSection";
import ServicesSection from "@/components/common/Industry/ServicesSection";
import FAQSection from "@/components/common/Industry/FAQSection";
import CTABanner from "@/components/common/Industry/CTABanner";
import { notFound } from "next/navigation";

interface IndustryPageContentProps {
  slug: string;
}

export default function IndustryPageContent({ slug }: IndustryPageContentProps) {
  const data = INDUSTRIES_DATA[slug as IndustryKey];

  if (!data) {
    notFound();
  }

  const navItems = [
    { id: "hero", label: "Overview" },
    { id: "solutions", label: "Solutions" },
    { id: "capabilities", label: "Capabilities" },
    { id: "services", label: "Services" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <main>
      <div id="hero">
        <IndustryHero {...data.hero} />
      </div>
      
      <StickyNav navItems={navItems} />

      <div id="mission">
        <MissionSection label={data.mission.label} title={data.mission.title}>
          <p>{data.mission.description}</p>
        </MissionSection>
      </div>

      <div id="stats">
        <StatsSection 
          label={data.stats.label}
          title={data.stats.title}
          description={data.stats.description}
          stats={data.stats.items}
        />
        
      </div>

      <div id="solutions">
        <HowWeCanHelp 
          title={data.howHelp.title}
          subtitle={data.howHelp.subtitle}
          items={data.howHelp.items}
        />
      </div>

      <div id="capabilities">
        <BuiltToDeliver 
          title={data.builtToDeliver.title}
          subtitle={data.builtToDeliver.subtitle}
          points={data.builtToDeliver.points}
        />
      </div>

      <div id="video">
        <VideoTeaserSection 
          label={data.video.label}
          title={data.video.title}
          description={data.video.description}
          videoUrl={data.video.videoUrl}
        />
      </div>

      <div id="services">
        <ServicesSection 
          title={data.services.title}
          subtitle={data.services.subtitle}
          services={data.services.items}
        />
      </div>

      <div id="faqs">
        <FAQSection 
          title={data.faqs.title}
          items={data.faqs.items}
        />
      </div>

      <div id="cta">
        <CTABanner {...data.cta} />
      </div>
    </main>
  );
}
