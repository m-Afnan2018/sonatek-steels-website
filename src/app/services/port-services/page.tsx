"use client";

import styles from './page.module.css';
import ServiceHero from '@/components/common/Service/ServiceHero';
import IconIntro from '@/components/common/Service/IconGrid';
import MapSection from '@/components/common/Service/MapSection';
import HowWeCanHelp from '@/components/common/Industry/HowWeCanHelp';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import InnovationSection from '@/components/common/Service/InnovationSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import CTABanner from '@/components/common/Industry/CTABanner';

export default function PortServicesPage() {
  const heroData = {
    title: "Ports & Terminals",
    description: "Our ports and terminals are at the heart of our global network, providing efficient and reliable connections to world markets.",
    image: "https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171",
    ctaText: "Read More",
    ctaHref: "#intro"
  };

  const introPoints = [
    { icon: "Globe", title: "Global Reach", description: "Access to over 60 ports across 6 continents." },
    { icon: "Zap", title: "Fast Processing", description: "Efficient turnaround times for all types of cargo." },
    { icon: "Shield", title: "Secure Storage", description: "State-of-the-art facilities for safe storage." },
    { icon: "Anchor", title: "Marine Services", description: "Full suite of marine and port support services." },
  ];

  const cargoItems = [
    { title: "Container Services", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "#" },
    { title: "Automotive", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "#" },
    { title: "Dry Bulk & Salt", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", href: "#" },
    { title: "Refrigerated Cargo", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", href: "#" },
    { title: "Chemicals & Liquids", image: "https://images.unsplash.com/photo-1543165737-1422b512e0e0?w=800&q=80", href: "#" },
    { title: "Project Cargo", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", href: "#" },
  ];

  const carouselItems = [
    { title: "South Asia", description: "Strategic locations across the Indian subcontinent.", image: "https://images.unsplash.com/photo-1506461883276-5d4a3ef93d1b?w=800&q=80", href: "#" },
    { title: "Middle East", description: "The gateway to the GCC and Central Asia.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", href: "#" },
    { title: "Europe", description: "Modern terminals at the heart of European trade.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80", href: "#" },
    { title: "Africa", description: "Driving growth in the world's fastest growing markets.", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80", href: "#" },
  ];

  const faqs = [
    { question: "What types of cargo do you handle?", answer: "We handle all types of cargo including containerized, bulk, break-bulk, and specialized project cargo." },
    { question: "Where are your main hubs located?", answer: "Our main hubs are strategically located across 6 continents, with major presence in Asia, Middle East, and Europe." },
    { question: "Do you offer value-added services?", answer: "Yes, we offer a range of value-added services including warehousing, distribution, and in-port processing." },
  ];

  return (
    <div className={styles.page}>
      <ServiceHero {...heroData} />
      
      <div id="intro">
        <IconIntro 
          title="YOUR GATEWAY TO GLOBAL TRADE"
          subtitle="Connecting you to world markets with precision and reliability."
          items={introPoints}
        />
      </div>

      <MapSection 
        title="HOW OUR NETWORK WORKS FOR YOU"
        description="Our global footprint spans across key trade corridors, ensuring your cargo moves seamlessly."
        mapImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
      />

      <HowWeCanHelp 
        label="OUR CAPABILITIES"
        title="BUILT FOR ALL CARGO"
        subtitle="We have the expertise and infrastructure to handle any cargo, regardless of size or complexity."
        items={cargoItems}
      />

      <div className={styles.carouselSection}>
        <ServicesSection 
          title="CONNECTING CONTINENTS"
          subtitle="Explore our global presence across major trade routes."
          services={carouselItems}
          topLink={{ label: "Explore our global network", href: "#" }}
        />
      </div>

      <InnovationSection 
        title="LEADING PORT INNOVATION"
        subtitle="Investing in the future of port technology and sustainability."
        topLink={{ label: "View all innovation", href: "#" }}
        items={[
          { title: "Digital Terminals", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Real-time visibility and automated processing." },
          { title: "Smart Infrastructure", image: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=800&q=80", description: "Sustainable energy and AI-driven logistics." },
        ]}
      />

      <InnovationSection 
        title="INSIGHTS"
        subtitle="The latest trends and perspectives from our global port network."
        topLink={{ label: "View all insights", href: "/blogs" }}
        items={[
          { title: "The Future of Smart Ports", image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80", description: "How AI and automation are transforming cargo handling." },
          { title: "Sustainable Port Operations", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=800&q=80", description: "Reducing the carbon footprint of global trade hubs." },
        ]}
      />

      <InnovationSection 
        title="PORTS WITH PURPOSE"
        subtitle="Creating positive impact in the communities where we operate."
        items={[
          { title: "Environmental Stewardship", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80", description: "Decarbonizing our operations and protecting marine life." },
          { title: "Community Development", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", description: "Supporting local economies and education initiatives." },
        ]}
      />

      <CTABanner 
        title="EXPLORE OUR ECONOMIC ZONES"
        description="Discover how our integrated logistics solutions can drive your business growth."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />

      <FAQSection 
        title="PORTS & TERMINALS FAQs"
        items={faqs}
      />
    </div>
  );
}
