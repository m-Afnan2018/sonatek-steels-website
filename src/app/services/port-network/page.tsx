"use client";

import React from 'react';
import IndustryHero from '@/components/common/Industry/IndustryHero';
import StatsSection from '@/components/common/Industry/StatsSection';
import StickyNav from '@/components/common/Navbar/StickyNav';
import MapSection from '@/components/common/Service/MapSection';
import AlternateCardSection from '@/components/common/AlternateSection/AlternateCardSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import CTABanner from '@/components/common/Industry/CTABanner';

export default function PortNetworkPage() {
  const stats = [
    { value: 84, label: "terminals worldwide" },
    { value: 110, suffix: "m", label: "TEUs handled annually" },
    { value: 10, suffix: "%", label: "of global trade handled" },
  ];

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'ports-list', label: 'Ports List' },
    { id: 'inland', label: 'Inland' },
    { id: 'economic-zones', label: 'Economic Zones' },
    { id: 'free-zones', label: 'Free Zones' },
  ];

  const articles = [
    { title: "Transforming trade in sub-saharan Africa", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", href: "#", description: "" },
    { title: "Revolutionising trade in Romania", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", href: "#", description: "" },
    { title: "Transforming the Caribbean's supply chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "#", description: "" },
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <IndustryHero  
        label=""
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ports and Terminals", href: "/services/port-services" },
          { label: "Port Network", href: "/services/port-network" }
        ]}
        title="OUR GLOBAL PORT NETWORK"
        description="Our world-class infrastructure and expertise mean we are a partner you can trust."
        image="https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171"  
        ctaText="Our Port Network"
      />

      <StatsSection
        label="PORTS AND TERMINALS"
        title="CONNECTING YOU TO THE WORLD"
        description="Our global network connects our customers to key hubs across the world."
        link={{ label: "Explore our map", href: "#" }}
        theme="light"
        stats={stats}
      />

        <StickyNav navItems={navItems} />
      
      <MapSection
        title="HOW OUR NETWORK WORKS FOR YOU"
        description="Our strategically located port terminals are the perfect way to optimize your supply chain."
        mapImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
        link={{ label: "View the global map", href: "#" }}
      />

      <div style={{ padding: '80px 40px 0', maxWidth: '1400px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontFamily: 'var(--font-pilat-wide)', fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px', textTransform: 'uppercase', color: '#111' }}>OUR FLAGSHIP PORT</h2>
        <p style={{ fontFamily: 'var(--font-pilat-narrow)', fontSize: '18px', color: '#555', marginBottom: '60px', maxWidth: '800px' }}>
          Our global network connects our customers to key hubs across the world.
        </p>
      </div>
      <AlternateCardSection 
        title="JEBEL ALI PORT"
        description="DP World's flagship Jebel Ali Port is the largest man-made harbour and the biggest port in the Middle East."
        image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
        link="#"
        linkText="Learn About Jebel Ali Port and Free Zone"
      />

      <div id='faq' style={{ maxWidth: '1400px', margin: '0px auto', padding: '0 40px' }}>
          <FAQSection 
            title="FAQ"
            items={[
              { question: "What services do you offer?", answer: "We offer comprehensive end-to-end logistics solutions, from port operations to inland transportation." },
              { question: "Where are you located?", answer: "We have an extensive network of over 80 terminals across 6 continents." },
              { question: "How can I track my shipment?", answer: "Our advanced digital tracking systems provide real-time updates for all your shipments." },
              { question: "Do you handle specialized cargo?", answer: "Yes, we handle everything from standard containers to oversized breakbulk and temperature-controlled cargo." }
            ]}
          />
      </div>

      <div style={{ backgroundColor: '#fff', padding: '80px 0', borderTop: '1px solid #eaeaea' }}>
        <ServicesSection 
          title="GLOBAL REACH. LOCAL IMPACT."
          subtitle="We are transforming global trade while supporting the communities we operate in."
          services={articles}
          topLink={{ label: "Learn more", href: "#" }}
        />
      </div>

      <CTABanner 
        title="CONNECT WITH ECONOMIC ZONES"
        description="Find out how our economic zones can help your business streamline operations."
        btnText="Our Economic Zones Network"
        btnHref="/economic-zones"
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />
    </div>
  );
}
