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

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028";

export default function PortNetworkPage() {
  const stats = [
    { value: 10, suffix: "+", label: "states covered across Northern India" },
    { value: 200, suffix: "k+", label: "tons distributed annually" },
    { value: 24, suffix: "/7", label: "dispatch & enquiry support" },
  ];

  const navItems = [
    { id: 'network', label: 'Our Network' },
    { id: 'flagship', label: 'Flagship Hub' },
    { id: 'impact', label: 'Regional Impact' },
    { id: 'faq', label: 'FAQ' },
  ];

  const articles = [
    { title: "Powering Northern India's construction boom", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", href: "/industries/construction", description: "Structural steel and chequered plates dispatched to keep bridges, high-rises, and infrastructure projects on schedule." },
    { title: "Supporting the NCR automotive manufacturing belt", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive", description: "Just-in-time CR and HR coil supply for OEMs and component manufacturers across the Delhi-NCR corridor." },
    { title: "Strengthening India's energy infrastructure", image: "https://images.unsplash.com/photo-1543165737-1422b512e0e0?w=800&q=80", href: "/industries/oil-gas", description: "Reliable steel movement for pipeline, refinery, and storage tank projects across Northern India's energy hubs." },
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <IndustryHero
        label=""
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Distribution Network", href: "/services/port-services" },
          { label: "Regional Network", href: "/services/port-network" }
        ]}
        title="OUR REGIONAL DISTRIBUTION NETWORK"
        description="Our Delhi warehouse and rail-and-road distribution network mean we are a partner you can trust across Northern India."
        image="https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171"
        ctaText="Our Distribution Network"
      />

      <StatsSection
        label="DISTRIBUTION NETWORK"
        title="CONNECTING SAIL'S PLANTS TO YOUR SITE"
        description="Our warehousing and dispatch network keeps certified flat steel moving from SAIL's plants to customers across Northern India."
        link={{ label: "Explore our network", href: "#network" }}
        theme="light"
        stats={stats}
      />

        <StickyNav navItems={navItems} />

      <div id="network">
        <MapSection
          title="HOW OUR NETWORK WORKS FOR YOU"
          description="Our Naraina warehouse and regional dispatch planning are built to optimize your steel supply chain."
          mapImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
          link={{ label: "View our location", href: MAPS_LINK }}
        />
      </div>

      <div id="flagship">
        <div style={{ padding: '80px 40px 0', maxWidth: '1400px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ fontFamily: 'var(--font-pilat-wide)', fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px', textTransform: 'uppercase', color: '#111' }}>OUR FLAGSHIP HUB</h2>
          <p style={{ fontFamily: 'var(--font-pilat-narrow)', fontSize: '18px', color: '#555', marginBottom: '60px', maxWidth: '800px' }}>
            Our flagship hub anchors dispatch planning and stock availability for the entire regional network.
          </p>
        </div>
        <AlternateCardSection
          title="LOHA MANDI, NARAINA"
          description="Our flagship warehouse sits in Naraina's Loha Mandi, Delhi's established steel trading hub, giving us fast access to road and rail links across Northern India for prompt, reliable dispatch."
          image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
          link="/contact-us"
          linkText="Get Directions to Our Warehouse"
        />
      </div>

      <div id='faq' style={{ maxWidth: '1400px', margin: '0px auto', padding: '0 40px' }}>
          {/* Pretext (hidden): "FAQ" */}
          <FAQSection
            title="FAQs"
            items={[
              { question: "What services do you offer?", answer: "We offer comprehensive end-to-end logistics solutions, from our Delhi warehouse to inland transportation across Northern India." },
              { question: "Where are your warehouse and dispatch hubs located?", answer: "Our flagship warehouse is located in Loha Mandi, Naraina, New Delhi, with dispatch coverage spanning Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan." },
              { question: "How can I track my shipment?", answer: "Our team provides direct updates on dispatch status and expected delivery timelines for all orders." },
              { question: "Do you handle specialized cargo?", answer: "Yes, we handle standard coils and sheets as well as oversized plates and project cargo for infrastructure and industrial sites." },
              { question: "How many states does your distribution network cover?", answer: "Our network reaches 10+ states across Northern India, supported by consistent rail and road dispatch scheduling." },
              { question: "Can you support steel and industrial cargo through your network?", answer: "Yes, our distribution network handles bulk, break-bulk, and project cargo, making it well-suited for steel, machinery, and other industrial shipments." }
            ]}
          />
      </div>

      <div id="impact" style={{ backgroundColor: '#fff', padding: '80px 0', borderTop: '1px solid #eaeaea' }}>
        <ServicesSection
          title="REGIONAL REACH. LOCAL IMPACT."
          subtitle="We are supporting Northern India's industrial growth while strengthening the communities we operate in."
          services={articles}
          topLink={{ label: "Learn more", href: "/contact-us" }}
        />
      </div>

      <CTABanner
        title="PARTNER WITH OUR DISTRIBUTION NETWORK"
        description="Find out how our warehousing and dispatch network can help your business streamline steel procurement."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />
    </div>
  );
}
