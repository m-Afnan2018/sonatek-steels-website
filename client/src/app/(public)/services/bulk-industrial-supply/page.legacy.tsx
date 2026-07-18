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
  { title: "Requirement Consultation", description: "We assess your production volume, product requirements, and delivery schedule." },
  { title: "Material Planning", description: "Our team confirms inventory availability and develops a supply plan aligned with your operational needs." },
  { title: "Order Confirmation", description: "Bulk orders are scheduled and prepared for processing and dispatch." },
  { title: "Quality Inspection", description: "All materials undergo quality checks before dispatch to ensure consistency and reliability." },
  { title: "Delivery & Ongoing Support", description: "Steel is delivered according to agreed schedules, with continuous support for future procurement needs." },
];

const BENEFITS_DATA = [
  { icon: "ShieldCheck", title: "Reliable Material Availability", description: "Consistent access to premium CR and HR steel for recurring or project-based requirements." },
  { icon: "BadgeCheck", title: "Consistent Product Quality", description: "Every coil, sheet, or plate in a bulk order is sourced and quality-verified to the same standard." },
  { icon: "Truck", title: "Scheduled Deliveries", description: "Receive steel according to your production schedule instead of managing excessive inventory." },
  { icon: "Zap", title: "Faster Procurement", description: "Streamlined bulk purchasing reduces the overhead of multiple small orders." },
  { icon: "Clock", title: "Reduced Lead Time", description: "Ready inventory and planned dispatch reduce waiting time on large orders." },
  { icon: "Boxes", title: "Better Inventory Planning", description: "Our team assists in forecasting requirements and planning procurement cycles." },
  { icon: "DollarSign", title: "Cost-Effective Supply Management", description: "Volume sourcing supports more competitive bulk pricing." },
  { icon: "Handshake", title: "Long-Term Supply Support", description: "Dependable supply programs for recurring and project-based requirements." },
];

const INDUSTRIES_DATA = [
  { icon: "Car", title: "Automotive Industry", description: "Bulk steel supply for vehicle manufacturing, structural components, and precision automotive applications." },
  { icon: "Factory", title: "Heavy Engineering", description: "Reliable material for machinery manufacturing, industrial equipment, and heavy fabrication." },
  { icon: "Building2", title: "Infrastructure & Construction", description: "Bulk procurement support for industrial buildings, warehouses, commercial projects, and infrastructure development." },
  { icon: "PanelsTopLeft", title: "Electrical Panel Manufacturing", description: "Consistent supply of premium steel for electrical cabinets, enclosures, and industrial control systems." },
  { icon: "Armchair", title: "Furniture Manufacturing", description: "Large-volume steel supply for office furniture, storage systems, modular furniture, and industrial shelving." },
  { icon: "Wind", title: "HVAC Industry", description: "Reliable steel supply for ventilation systems, ducts, cooling equipment, and HVAC assemblies." },
  { icon: "Settings2", title: "OEM Manufacturing", description: "Long-term material support for high-volume manufacturing operations requiring consistent quality and dependable supply." },
];

const APPLICATIONS_DATA = [
  { title: "Bulk Steel Procurement", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", href: "/industrial-procurement" },
  { title: "Project-Based Steel Supply", image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170", href: "/project-based-steel" },
  { title: "Automotive Industry", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Heavy Engineering", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", href: "/industries/heavy-engineering" },
  { title: "Infrastructure & Construction", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", href: "/industries/construction" },
  { title: "Warehousing & Logistics", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", href: "/industries/warehousing-logistics" },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Uninterrupted Production", description: "Consistent material availability helps avoid costly production delays." },
  { icon: "Warehouse", title: "Reliable Inventory", description: "Access to ready stock ensures quicker order fulfillment and reduced lead times." },
  { icon: "Boxes", title: "Better Procurement Planning", description: "Bulk purchasing simplifies procurement while improving operational efficiency." },
  { icon: "BadgeCheck", title: "Lower Supply Chain Risk", description: "Planned deliveries reduce uncertainty and support continuous manufacturing." },
  { icon: "DollarSign", title: "Cost Optimization", description: "Bulk supply programs help businesses optimize procurement and logistics costs over the long term." },
  { icon: "Headset", title: "Dedicated Business Support", description: "Our experienced team works closely with customers to understand their production and supply requirements." },
];

const FAQS_DATA = [
  { question: "What products are available for bulk supply?", answer: "We supply Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets in bulk quantities." },
  { question: "Can Sonatek handle recurring industrial requirements?", answer: "Yes. We support monthly, quarterly, and annual supply programs for manufacturers and OEMs." },
  { question: "Do you provide project-based steel supply?", answer: "Absolutely. We supply steel for infrastructure projects, engineering companies, EPC contractors, and industrial developments." },
  { question: "Do you deliver across India?", answer: "Yes. Our logistics network supports bulk deliveries across North India and Pan-India based on customer requirements." },
  { question: "Can I discuss customized delivery schedules?", answer: "Yes. We work with customers to create supply schedules that align with production timelines and inventory planning." },
];

export default function BulkIndustrialSupplyPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ServiceHero
        title="Reliable Bulk Steel Supply for Large-Scale Manufacturing & Industrial Requirements"
        breadcrumbLabel="Bulk Industrial Supply"
        description="When your production depends on a continuous supply of high-quality steel, you need more than just a supplier — you need a dependable supply partner. At Sonatek Steels, we specialize in Bulk Industrial Steel Supply, ensuring manufacturers, OEMs, EPC contractors, fabricators, and infrastructure companies receive premium steel products on time and in the required quantities. Whether your requirement is for recurring production, project-based procurement, or high-volume industrial manufacturing, Sonatek is committed to keeping your operations running smoothly."
        image="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1600&q=85"
        ctaText="Request a Bulk Supply Quote"
        ctaHref="/contact-us"
        secondaryCtaText="Talk to a Steel Supply Expert"
        secondaryCtaHref="/contact-us"
      />

      <MissionSection
        label="OVERVIEW"
        title="What is Bulk Industrial Steel Supply?"
        bodyText="Bulk Industrial Steel Supply is a comprehensive supply solution designed for businesses requiring large volumes of steel on a regular or project basis. Instead of placing multiple small orders, manufacturers can streamline procurement through planned bulk purchasing, ensuring consistent inventory, better supply chain management, and uninterrupted production. Our bulk supply solutions are built around reliability, quality assurance, and timely deliveries to help businesses maintain operational efficiency."
      />

      <ProcessSteps
        label="PROCESS"
        title="Our Supply Process"
        steps={HOW_IT_WORKS_STEPS}
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE BULK INDUSTRIAL SUPPLY?"
          subtitle="Managing large-scale steel procurement comes with challenges such as fluctuating inventory, delayed deliveries, and inconsistent supply. Our bulk supply solutions help manufacturers overcome these challenges."
          items={BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <IconGrid
          title="INDUSTRIES THAT BENEFIT FROM BULK INDUSTRIAL SUPPLY"
          subtitle="Our bulk supply services support a wide range of large-scale buyers, including:"
          items={INDUSTRIES_DATA}
        />
      </div>

      <HowWeCanHelp
        label="APPLICATIONS"
        title="OUR BULK INDUSTRIAL SUPPLY SOLUTIONS"
        subtitle="From bulk procurement and scheduled deliveries to project-based supply and inventory planning support, our bulk solutions keep large-volume operations running smoothly."
        items={APPLICATIONS_DATA}
      />

      <BuiltToDeliver
        label="WHY SONATEK STEELS"
        title="Why Manufacturers Prefer Bulk Industrial Supply"
        subtitle="At Sonatek, we understand that dependable steel supply is essential for maintaining production efficiency and meeting project deadlines."
        points={ADVANTAGES_DATA}
      />

      <MissionSection
        label="PARTNERSHIP"
        title="Power Your Production with Reliable Bulk Steel Supply"
        bodyText="Whether you're managing a manufacturing plant, executing an infrastructure project, or operating a high-volume production facility, Sonatek Steels provides the inventory, expertise, and logistics support needed to keep your operations moving. Partner with Sonatek for dependable bulk steel supply, responsive service, and long-term procurement confidence."
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
        title="Request a Bulk Supply Quote Today"
        description="Secure a reliable steel supply partner for your business — share your required tonnage, grade, and delivery timeline and we will confirm availability and a coordinated dispatch plan."
        btnText="Request a Bulk Supply Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Supply Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />
    </div>
  );
}
