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
    title: "Warehousing & Distribution",
    description: "Our Naraina warehouse and regional distribution network are at the heart of our operation, providing efficient and reliable steel supply across Northern India.",
    image: "https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171",
    ctaText: "Read More",
    ctaHref: "#intro"
  };

  const introPoints = [
    { icon: "Globe", title: "Regional Reach", description: "Dispatch coverage across Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan." },
    { icon: "Zap", title: "Fast Processing", description: "Efficient turnaround from warehouse to dispatch for urgent orders." },
    { icon: "Shield", title: "Secure Storage", description: "Weatherproof, high-capacity warehousing for coils, sheets, and plates." },
    { icon: "Truck", title: "Rail & Road Logistics", description: "Coordinated rail and road transport connecting SAIL's plants to our stockyards." },
  ];

  const cargoItems = [
    { title: "HR Coils & Plates", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", href: "/products" },
    { title: "CR Coils & Sheets", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/products" },
    { title: "Chequered Plates", image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80", href: "/products" },
    { title: "Automotive-Grade Steel", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
    { title: "Custom Processed Steel", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", href: "/custom-steel-processing" },
    { title: "Project Cargo", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", href: "/infrastructure-industrial-project" },
  ];

  const carouselItems = [
    { title: "Delhi NCR", description: "Our flagship warehouse hub, serving OEMs, fabricators, and corporate clients across the capital region.", image: "https://images.unsplash.com/photo-1506461883276-5d4a3ef93d1b?w=800&q=80", href: "/contact-us" },
    { title: "Punjab & Haryana", description: "Dependable dispatch to the automotive and manufacturing belts of Punjab and Haryana.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", href: "/industries/automotive" },
    { title: "Uttar Pradesh", description: "Steel supply for construction, fabrication, and industrial projects across the state.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80", href: "/industries/construction" },
    { title: "Rajasthan", description: "Supporting heavy engineering and infrastructure development with reliable regional dispatch.", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80", href: "/industries/heavy-engineering" },
  ];

  const faqs = [
    { question: "What types of steel do you handle through your warehouse?", answer: "We handle all flat steel forms including HR coils and plates, CR coils and sheets, chequered plates, and custom-processed and project cargo." },
    { question: "Where are your main hubs located?", answer: "Our flagship warehouse is in Loha Mandi, Naraina, New Delhi, with dispatch coverage spanning Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan." },
    { question: "Do you offer value-added services?", answer: "Yes, we offer a range of value-added services including warehousing, custom processing, and coordinated distribution scheduling." },
    { question: "Can your warehouse handle large or oversized steel shipments?", answer: "Yes, our facility is equipped to handle project cargo, heavy plates, and oversized shipments, making it well-suited for steel coils, plates, and industrial machinery." },
    { question: "How fast is dispatch turnaround from your warehouse?", answer: "Our facility is built for fast processing, with efficient turnaround from stock availability to dispatch to keep your supply chain moving." },
  ];

  return (
    <div className={styles.page}>
      <ServiceHero {...heroData} />

      <div id="intro">
        <IconIntro
          title="YOUR GATEWAY TO NORTHERN INDIA"
          subtitle="Connecting SAIL's steel plants to your project site with precision and reliability."
          items={introPoints}
        />
      </div>

      <MapSection
        title="HOW OUR NETWORK WORKS FOR YOU"
        description="Our Naraina warehouse anchors a regional dispatch network, ensuring your steel moves seamlessly across Northern India."
        mapImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
      />

      <HowWeCanHelp
        label="OUR CAPABILITIES"
        title="BUILT FOR ALL FLAT STEEL"
        subtitle="We have the expertise and infrastructure to handle any flat steel product, regardless of size or complexity."
        items={cargoItems}
      />

      <div className={styles.carouselSection}>
        <ServicesSection
          title="CONNECTING NORTHERN INDIA"
          subtitle="Explore our regional presence across major distribution corridors."
          services={carouselItems}
          topLink={{ label: "Explore our regional network", href: "/contact-us" }}
        />
      </div>

      <InnovationSection
        title="LEADING DISTRIBUTION INNOVATION"
        subtitle="Investing in the future of warehousing technology and sustainability."
        topLink={{ label: "View all innovation", href: "/blogs" }}
        items={[
          { title: "Digital Order Tracking", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Real-time visibility and streamlined dispatch processing." },
          { title: "Warehouse Modernization", image: "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=800&q=80", description: "Sustainable energy and efficient inventory management." },
        ]}
      />

      <InnovationSection
        title="INSIGHTS"
        subtitle="The latest trends and perspectives from our regional distribution network."
        topLink={{ label: "View all insights", href: "/blogs" }}
        items={[
          { title: "The Future of Smart Warehousing", image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80", description: "How digital tools are transforming steel dispatch and inventory management." },
          { title: "Sustainable Distribution Operations", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=800&q=80", description: "Reducing the environmental footprint of regional steel logistics." },
        ]}
      />

      <InnovationSection
        title="DISTRIBUTION WITH PURPOSE"
        subtitle="Creating positive impact in the communities where we operate."
        items={[
          { title: "Environmental Stewardship", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80", description: "Reducing waste and optimizing logistics to lower our environmental footprint." },
          { title: "Community Development", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", description: "Supporting local economies and education initiatives." },
        ]}
      />

      <CTABanner
        title="PARTNER WITH OUR DISTRIBUTION NETWORK"
        description="Discover how our integrated warehousing and dispatch network can drive your business growth."
        btnText="Contact Us"
        btnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />

      {/* Pretext (hidden): "PORTS & TERMINALS FAQs" */}
      <FAQSection
        title="FAQs"
        items={faqs}
      />
    </div>
  );
}
