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
  { title: "Requirement Analysis", description: "We understand your application, sheet dimensions, thickness, quantity, and production requirements." },
  { title: "Material Selection", description: "Choose from our range of premium Cold Rolled (CR) Coils and Hot Rolled (HR) Coils." },
  { title: "Precision Cutting", description: "Our processing line converts steel coils into sheets of the required length while maintaining dimensional accuracy and excellent flatness." },
  { title: "Quality Inspection", description: "Every batch is inspected to ensure consistency, accurate dimensions, and high-quality output before dispatch." },
  { title: "Safe Packaging & Dispatch", description: "Processed sheets are securely packed and delivered according to your production schedule." },
];

const BENEFITS_DATA = [
  { icon: "Ruler", title: "Custom Sheet Lengths", description: "Sheets cut to the exact length your production line requires." },
  { icon: "Square", title: "Improved Flatness", description: "Levelled sheets with consistent flatness for immediate use." },
  { icon: "Recycle", title: "Reduced Material Wastage", description: "Precision lengths minimize trim loss and offcuts." },
  { icon: "Gauge", title: "Higher Production Efficiency", description: "Fewer processing steps once material reaches your facility." },
  { icon: "Zap", title: "Faster Manufacturing", description: "Production-ready sheets move straight into your process." },
  { icon: "DollarSign", title: "Lower Processing Costs", description: "Reduces the need for in-house cutting equipment and labour." },
  { icon: "Boxes", title: "Better Inventory Management", description: "Stock exact sheet sizes instead of oversized coil." },
  { icon: "PackageCheck", title: "Ready-to-Use Material", description: "Sheets arrive ready to feed directly into your process." },
  { icon: "CheckCircle2", title: "Accurate Dimensions", description: "Consistent dimensions across every batch and every sheet." },
  { icon: "Sparkles", title: "Clean & Consistent Cuts", description: "Clean edges with dimensional accuracy on every sheet." },
];

const INDUSTRIES_DATA = [
  { icon: "Car", title: "Automotive", description: "Steel sheets for body parts, structural components, brackets, and assemblies." },
  { icon: "PanelsTopLeft", title: "Electrical Panel Manufacturing", description: "Custom-sized sheets for electrical cabinets, control panels, and enclosures." },
  { icon: "Armchair", title: "Furniture Manufacturing", description: "Steel sheets for office furniture, storage systems, modular furniture, and industrial shelving." },
  { icon: "Wind", title: "HVAC Industry", description: "Material for ducts, ventilation systems, air handling units, and cooling equipment." },
  { icon: "Factory", title: "Heavy Engineering", description: "Precision steel sheets for machinery, equipment, and industrial fabrication." },
  { icon: "Building2", title: "Infrastructure & Construction", description: "Steel for industrial buildings, warehouses, fabrication, and engineering projects." },
  { icon: "Settings2", title: "OEM Manufacturing", description: "Reliable material for high-volume manufacturing operations and production lines." },
];

const APPLICATIONS_DATA = [
  { title: "Automotive", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Electrical Cabinets", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", href: "/industries/electrical-panel" },
  { title: "Machine Manufacturing", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", href: "/industries/working-machinery" },
  { title: "Industrial Equipment & Storage Systems", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", href: "/industries/warehousing-logistics" },
  { title: "Structural Components", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", href: "/industries/construction" },
  { title: "Furniture & Shelving", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/industries/furniture" },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Ruler", title: "Precision Processing", description: "Automated leveling and shearing lines built to hold tight tolerances." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Stocked master coils ready to process without long lead times." },
  { icon: "Zap", title: "Fast Turnaround", description: "Streamlined processing-to-dispatch turnaround." },
  { icon: "CheckCircle2", title: "Consistent Sheet Dimensions", description: "Reliable length, flatness, and squareness on every batch." },
  { icon: "BadgeCheck", title: "Reliable Quality", description: "Consistent availability backed by a dependable procurement network." },
  { icon: "Boxes", title: "Bulk Processing Capability", description: "Support for both trial orders and large production runs." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated B2B Support", description: "A responsive team throughout your order and processing cycle." },
];

const FAQS_DATA = [
  { question: "What is Cut-to-Length steel processing?", answer: "Cut-to-Length is the process of converting steel coils into flat sheets of customized lengths based on customer requirements." },
  { question: "Which steel products can be processed?", answer: "We provide Cut-to-Length processing for both Cold Rolled (CR) and Hot Rolled (HR) steel coils." },
  { question: "Can I request custom sheet sizes?", answer: "Yes. We process steel according to your required sheet length and production specifications." },
  { question: "Which industries benefit from CTL processing?", answer: "Automotive, fabrication, engineering, electrical panels, furniture, HVAC, OEM manufacturing, and infrastructure industries." },
  { question: "Do you support bulk industrial orders?", answer: "Yes. We cater to bulk requirements for manufacturers, OEMs, fabricators, EPC contractors, and industrial projects across India." },
];

export default function CutToLengthPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ServiceHero
        title="Custom Cut-to-Length Steel Sheets for Efficient Manufacturing"
        breadcrumbLabel="Cut-To-Length Service"
        description="At Sonatek Steels, we provide precision Cut-to-Length (CTL) steel processing services for manufacturers who require steel sheets in exact dimensions, ready for production. Instead of purchasing full coils and investing additional time, labor, and machinery in cutting them, businesses can receive accurately cut steel sheets that are ready to use immediately, reducing material wastage and improving production efficiency. Whether you're in automotive, electrical, fabrication, engineering, furniture, or infrastructure, our precision cutting solutions ensure every sheet meets your production requirements."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=85"
        ctaText="Request a Cut-to-Length Quote"
        ctaHref="/contact-us"
        secondaryCtaText="Talk to a Steel Processing Expert"
        secondaryCtaHref="/contact-us"
      />

      <MissionSection
        label="OVERVIEW"
        title="What is Cut-to-Length (CTL)?"
        bodyText="Cut-to-Length is a steel processing method where large steel coils are uncoiled, leveled, and cut into flat sheets of specific lengths according to customer requirements. Unlike standard steel sheets, CTL processing allows manufacturers to receive material in customized dimensions, eliminating additional cutting processes at their facility. The result is ready-to-use steel sheets with consistent dimensions, clean edges, and improved flatness, helping businesses save time, reduce waste, and streamline production."
      />

      <ProcessSteps
        label="PROCESS"
        title="Our Cut-to-Length Process"
        steps={HOW_IT_WORKS_STEPS}
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE CUT-TO-LENGTH STEEL?"
          subtitle="Every manufacturing process is different, and using standard-sized steel often results in unnecessary cutting, scrap generation, and additional processing costs. Our Cut-to-Length service provides steel exactly as your production line requires."
          items={BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <IconGrid
          title="INDUSTRIES WE SERVE"
          subtitle="Our Cut-to-Length services support a wide range of industries where precision, consistency, and production efficiency are essential."
          items={INDUSTRIES_DATA}
        />
      </div>

      <HowWeCanHelp
        label="APPLICATIONS"
        title="WHERE CUT-TO-LENGTH SHEETS ARE USED"
        subtitle="Our processed sheets are commonly used in laser cutting, CNC punching, press components, fabrication, welding, bending, and stamping operations."
        items={APPLICATIONS_DATA}
      />

      <BuiltToDeliver
        label="WHY SONATEK STEELS"
        title="Why Manufacturers Choose Sonatek Steels"
        subtitle="At Sonatek, we understand that manufacturing depends on consistency, speed, and reliability. Our Cut-to-Length solutions help businesses reduce operational costs while ensuring steel reaches the production floor exactly as required."
        points={ADVANTAGES_DATA}
      />

      <MissionSection
        label="SAVINGS"
        title="Why Cut-to-Length Saves Your Business Money"
        bodyText="Purchasing standard coils often means investing in additional machinery, manpower, storage space, and processing time. With Sonatek's Cut-to-Length service, manufacturers receive production-ready sheets that minimize scrap, reduce labour costs, improve production speed, lower handling costs, optimize inventory, and increase operational efficiency — resulting in a smoother manufacturing process with reduced downtime and better overall productivity."
      />

      <MissionSection
        label="PARTNERSHIP"
        title="Why Partner with Sonatek Steels?"
        bodyText="We are more than a steel supplier — we are a trusted manufacturing partner committed to delivering precision, consistency, and dependable service. Whether you require a one-time order or recurring industrial supply, our team works closely with you to understand your production needs and provide steel solutions that add value to your business."
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
        title="Ready to Simplify Your Steel Processing?"
        description="Get precision-cut steel sheets that fit your production needs and reduce processing time. Whether you need standard or customized dimensions, Sonatek Steels is ready to support your manufacturing operations with dependable Cut-to-Length processing and reliable delivery."
        btnText="Request a Quote Today"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Processing Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </div>
  );
}
