"use client";

import ServiceHero from '@/components/common/Service/ServiceHero';
import MissionSection from '@/components/common/MissionSection/MissionSection';
import ProcessSteps from '@/components/common/Service/ProcessSteps';
import IconGrid from '@/components/common/Service/IconGrid';
import HowWeCanHelp from '@/components/common/Industry/HowWeCanHelp';
import BuiltToDeliver from '@/components/common/Industry/BuiltToDeliver';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import CTABanner from '@/components/common/Industry/CTABanner';
import { SERVICES_DATA } from '@/constants/services';

const HOW_IT_WORKS_STEPS = [
  { title: "Order Confirmation", description: "Our team confirms product availability, quantity, and delivery requirements." },
  { title: "Dispatch Planning", description: "Delivery schedules are planned based on your production timelines and preferred delivery dates." },
  { title: "Material Preparation", description: "Steel products are inspected, packed, and prepared for safe transportation." },
  { title: "Quality Check", description: "Every order undergoes a final verification before dispatch to ensure accuracy and consistency." },
  { title: "Transportation & Delivery", description: "Material is transported safely and delivered to your manufacturing facility or project site on schedule." },
];

const BENEFITS_DATA = [
  { icon: "Clock", title: "On-Time Deliveries", description: "Reliable dispatch schedules help maintain production timelines and minimize downtime." },
  { icon: "ShieldCheck", title: "Safe Material Handling", description: "Steel is handled and transported with care to ensure it reaches your facility in excellent condition." },
  { icon: "Route", title: "Planned Dispatches", description: "Dispatches matched to the right vehicle and route for your material." },
  { icon: "Truck", title: "Reliable Transportation", description: "Coordinated road transport built specifically for flat steel dispatch." },
  { icon: "Gauge", title: "Reduced Supply Chain Delays", description: "Efficient coordination helps reduce procurement challenges and improves operational continuity." },
  { icon: "Boxes", title: "Better Inventory Management", description: "Scheduled deliveries help improve production planning and reduce storage costs." },
  { icon: "Globe", title: "Nationwide Delivery Support", description: "Our logistics network enables us to serve customers across North India and beyond." },
  { icon: "Headset", title: "Dedicated Logistics Coordination", description: "Our experienced team provides continuous coordination from order confirmation to final delivery." },
];

const INDUSTRIES_DATA = [
  { icon: "Car", title: "Automotive Industry", description: "Reliable deliveries for continuous automotive production and component manufacturing." },
  { icon: "Factory", title: "Heavy Engineering", description: "Timely transportation of steel for machinery manufacturing and industrial fabrication." },
  { icon: "Building2", title: "Infrastructure & Construction", description: "Scheduled deliveries for industrial buildings, warehouses, and large-scale infrastructure projects." },
  { icon: "PanelsTopLeft", title: "Electrical Panel Manufacturing", description: "Consistent steel supply for uninterrupted production of electrical cabinets and enclosures." },
  { icon: "Armchair", title: "Furniture Manufacturing", description: "Reliable material deliveries supporting high-volume furniture manufacturing operations." },
  { icon: "Wind", title: "HVAC Industry", description: "Efficient transportation of steel used in ventilation systems, ducts, and HVAC equipment." },
  { icon: "Settings2", title: "OEM Manufacturing", description: "Dependable logistics solutions supporting recurring procurement and production schedules." },
];

const APPLICATIONS_DATA = [
  { title: "Scheduled Deliveries", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/products" },
  { title: "Bulk Material Transportation", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", href: "/services/bulk-industrial-supply" },
  { title: "Project-Based Logistics", image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170", href: "/project-based-steel" },
  { title: "Warehouse-to-Plant Delivery", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80", href: "/industries/warehousing-logistics" },
  { title: "Automotive Components", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Construction Sites", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", href: "/industries/construction" },
  { title: "Electrical Equipment", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", href: "/industries/electrical-panel" },
  { title: "Heavy Engineering", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", href: "/industries/heavy-engineering" },
];

const ADVANTAGES_DATA = [
  { icon: "Clock", title: "On-Time Delivery", description: "Reliable dispatch schedules help maintain production timelines and minimize downtime." },
  { icon: "ShieldCheck", title: "Safe Transportation", description: "Steel is handled and transported with care to ensure it reaches your facility in excellent condition." },
  { icon: "BadgeCheck", title: "Reliable Supply Chain", description: "Efficient coordination helps reduce procurement challenges and improves operational continuity." },
  { icon: "Route", title: "Flexible Delivery Scheduling", description: "Deliveries can be planned according to production requirements and project milestones." },
  { icon: "Globe", title: "Nationwide Coverage", description: "We support businesses across North India and coordinate deliveries for customers throughout India." },
  { icon: "Headset", title: "Dedicated Logistics Support", description: "Our experienced team provides continuous coordination from order confirmation to final delivery." },
];

const FAQS_DATA = [
  { question: "Do you deliver steel across India?", answer: "Yes. We provide reliable delivery services across North India and coordinate shipments for customers throughout India." },
  { question: "What products do you deliver?", answer: "We deliver Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets." },
  { question: "Can deliveries be scheduled according to production requirements?", answer: "Yes. We work closely with customers to plan dispatches based on production schedules and project timelines." },
  { question: "Do you handle bulk industrial deliveries?", answer: "Absolutely. We support bulk transportation for manufacturers, OEMs, EPC contractors, and industrial projects." },
  { question: "Is logistics support available for recurring orders?", answer: "Yes. We provide ongoing logistics coordination for customers with regular procurement and long-term supply requirements." },
];

export default function LogisticsDeliveryServicePage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ServiceHero
        title="Reliable Steel Delivery & Logistics Solutions That Keep Your Business Moving"
        breadcrumbLabel="Delivery & Logistics Service"
        description="At Sonatek Steels, we understand that timely delivery is just as important as the quality of steel. That's why we offer dependable Delivery & Logistics Services designed to ensure your steel reaches your facility safely, efficiently, and on schedule. Whether you're a manufacturer, OEM, fabricator, infrastructure company, or EPC contractor, our logistics network is built to support businesses with reliable transportation, planned dispatches, and seamless material movement across India."
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=85"
        ctaText="Request a Delivery Quote"
        ctaHref="/contact-us"
        secondaryCtaText="Talk to Our Logistics Team"
        secondaryCtaHref="/contact-us"
      />

      <MissionSection
        label="OVERVIEW"
        title="What are Delivery & Logistics Services?"
        bodyText="Delivery & Logistics Services involve the efficient planning, coordination, transportation, and delivery of steel products from our warehouse to your manufacturing facility or project site. Our logistics solutions are designed to ensure that businesses receive the right material, in the right quantity, at the right time — helping maintain uninterrupted production and efficient supply chain operations. Whether your requirement is a single dispatch or recurring deliveries, Sonatek provides dependable logistics support tailored to your business needs."
      />

      <ProcessSteps
        label="PROCESS"
        title="Our Delivery Process"
        steps={HOW_IT_WORKS_STEPS}
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE OUR DELIVERY & LOGISTICS SERVICES?"
          subtitle="Efficient logistics play a critical role in maintaining productivity and meeting production deadlines. Our delivery solutions help businesses by providing:"
          items={BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <IconGrid
          title="INDUSTRIES THAT BENEFIT FROM OUR LOGISTICS SERVICES"
          subtitle="Our delivery and logistics service supports a wide range of manufacturing and project industries, including:"
          items={INDUSTRIES_DATA}
        />
      </div>

      <HowWeCanHelp
        label="OUR SOLUTIONS"
        title="OUR DELIVERY & LOGISTICS SOLUTIONS"
        subtitle="From scheduled deliveries and bulk transportation to project-based logistics and Pan-India delivery support, our network keeps your material moving."
        items={APPLICATIONS_DATA}
      />

      <BuiltToDeliver
        label="WHY SONATEK STEELS"
        title="Why Manufacturers Prefer Our Delivery & Logistics Services"
        subtitle="We understand that ordering steel is only half the job — it still has to arrive intact and on time."
        points={ADVANTAGES_DATA}
      />

      <MissionSection
        label="PARTNERSHIP"
        title="Delivering Steel with Speed, Reliability & Confidence"
        bodyText="Reliable logistics are the backbone of every successful manufacturing operation. At Sonatek Steels, we combine quality steel, efficient transportation, and responsive logistics support to ensure your material reaches you safely and on time. Whether you're managing daily production, a major infrastructure project, or long-term industrial procurement, Sonatek is your trusted logistics and steel supply partner."
      />

      <div id="related">
        <ServicesSection
          title="OUR OTHER SERVICES"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Request a Delivery Quote Today"
        description="Tell us your site location — we'll confirm regional coverage and expected delivery timing. Experience dependable steel logistics designed around your business."
        btnText="Request a Delivery Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to Our Logistics Team"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85"
      />
    </div>
  );
}
