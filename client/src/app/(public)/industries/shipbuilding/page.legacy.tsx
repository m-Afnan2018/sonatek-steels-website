"use client";

import IndustryHero from '@/components/common/Industry/IndustryHero';
import StickyNav from '@/components/common/Navbar/StickyNav';
import MissionSection from '@/components/common/MissionSection/MissionSection';
import IconGrid from '@/components/common/Service/IconGrid';
import ProcessSteps from '@/components/common/Service/ProcessSteps';
import InnovationSection from '@/components/common/Service/InnovationSection';
import BuiltToDeliver from '@/components/common/Industry/BuiltToDeliver';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import CTABanner from '@/components/common/Industry/CTABanner';
import { SERVICES_DATA } from '@/constants/services';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'process', label: 'Supply Process' },
  { id: 'applications', label: 'Applications' },
  { id: 'advantages', label: 'Why Sonatek' },
  { id: 'faqs', label: 'FAQs' },
];

const WHY_STEEL_DATA = [
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Zap", title: "Excellent Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Settings2", title: "Superior Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "CheckCircle2", title: "Consistent Material Quality", description: "Uniform quality across every coil, sheet, and plate." },
  { icon: "CheckCircle2", title: "Reliable Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
  { icon: "Truck", title: "Dependable Industrial Supply", description: "Steady availability that keeps production and projects on schedule." },
];

const SOLUTIONS_DATA = [
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Premium HR Coils designed for structural fabrication, industrial equipment, marine infrastructure, and engineering applications \u2014 includes Fabricated Structures, Equipment Platforms, Support Frames, Marine Infrastructure, and Industrial Assemblies." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for fabrication, welding, heavy engineering, and marine equipment manufacturing \u2014 includes Excellent Strength, Reliable Weldability, Durable Performance, and Consistent Quality." },
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Precision steel coils for equipment manufacturing, marine enclosures, and applications requiring superior surface finish and dimensional accuracy." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Ideal for fabricated cabinets, electrical enclosures, control panels, machine covers, and precision marine components." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting shipyards, marine engineering companies, and offshore infrastructure projects." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to meet project-specific fabrication requirements." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your application, project specifications, and delivery requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your fabrication and engineering needs." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes quality inspection to ensure consistent performance before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to shipyards, fabrication facilities, manufacturing plants, or project locations." },
];

const APPLICATIONS_DATA = [
  { title: "Shipyard Fabrication", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Steel for fabricated assemblies, structural supports, and production equipment used within shipyards.", link: "/products" },
  { title: "Marine Equipment Manufacturing", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Reliable steel for machinery, equipment housings, fabricated parts, and marine support systems.", link: "/products" },
  { title: "Offshore Platforms & Structures", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Steel for support frameworks, access platforms, equipment bases, and industrial offshore infrastructure.", link: "/products" },
  { title: "Port & Harbour Infrastructure", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Applications including cargo handling systems, warehouse structures, maintenance facilities, and industrial installations.", link: "/products" },
  { title: "Marine Electrical Enclosures", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Precision CR steel for electrical cabinets, switchboards, instrumentation panels, and protective enclosures.", link: "/products" },
  { title: "Industrial Marine Fabrication", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Steel for custom fabrication, machinery frames, utility structures, and engineering assemblies used in marine industries.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supporting demanding marine engineering and fabrication applications." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel products reduces production delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries help shipyards and fabrication companies maintain project schedules." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring manufacturing requirements and large marine infrastructure projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom processing services reduce fabrication time and improve manufacturing efficiency." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Building trusted relationships with marine engineering companies through reliable products and responsive customer service." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Stocked material ready to process without long lead times." },
  { icon: "ShieldCheck", title: "Reliable Structural Performance", description: "Steel and processing built for demanding production requirements." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Wrench", title: "Custom Steel Processing", description: "Slitting, cut-to-length, and custom processing to reduce manufacturing time." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Reliable Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Dependable relationships built on reliable supply and service." },
];

const FAQS_DATA = [
  { question: "Which steel products are commonly used in shipbuilding?", answer: "Hot Rolled (HR) steel is commonly used for fabrication, structural supports, industrial assemblies, and marine infrastructure, while Cold Rolled (CR) steel is preferred for enclosures, equipment manufacturing, and precision fabricated components." },
  { question: "Do you supply steel for marine engineering companies?", answer: "Yes. We supply steel to shipyards, marine equipment manufacturers, offshore engineering companies, fabrication units, and industrial engineering businesses." },
  { question: "Can Sonatek support bulk industrial requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for marine and industrial projects." },
  { question: "Do you provide processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services based on customer requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable steel delivery across North India and Pan-India logistics support for shipbuilding and marine engineering customers." },
];

export default function ShipbuildingPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="SHIPBUILDING INDUSTRY"
          title="Premium Steel Solutions for Shipbuilding & Marine Engineering"
          description="The shipbuilding industry demands steel that delivers exceptional strength, durability, and fabrication performance. From commercial vessels and marine equipment to offshore structures and port infrastructure, every project requires reliable steel that can withstand demanding operating conditions and rigorous manufacturing processes. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets for shipbuilders, marine equipment manufacturers, offshore engineering companies, fabrication units, EPC contractors, and industrial engineering businesses across India. With ready stock, dependable logistics, and value-added processing services, Sonatek helps marine and shipbuilding companies maintain uninterrupted production and project execution."
          image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
          ctaText="Request a Shipbuilding Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Marine Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shipbuilding", href: "/industries/shipbuilding" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Shipbuilding Industry"
        bodyText="Shipbuilding requires steel that supports precision fabrication, structural strength, and long-term durability. While specialized marine-grade steel is used for critical hull applications, CR and HR steel products are widely used for fabrication, equipment manufacturing, marine infrastructure, storage systems, enclosures, platforms, support structures, and non-class structural components. Sonatek Steels provides reliable steel supply solutions that help shipyards, fabrication companies, and marine engineering businesses maintain production efficiency with consistent material quality and dependable deliveries."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR SHIPBUILDING?"
          subtitle="Marine engineering and shipbuilding projects require steel that offers strength, fabrication flexibility, and consistent performance throughout the manufacturing process."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR SHIPBUILDING STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for shipbuilding production."
          items={SOLUTIONS_DATA}
        />
      </div>

      <div id="process">
        <ProcessSteps
          label="PROCESS"
          title="Our Supply Process"
          steps={SUPPLY_PROCESS_STEPS}
        />
      </div>

      <div id="applications">
        <InnovationSection
          title="SHIPBUILDING APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Shipbuilding Companies Choose Sonatek Steels"
        subtitle="Marine engineering and shipbuilding projects require steel that offers strength, fabrication flexibility, and consistent performance throughout the manufacturing process."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our shipbuilding steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving shipbuilding customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="The shipbuilding industry depends on precision, quality, and dependable supply chains. At Sonatek Steels, we combine premium-quality steel, ready inventory, precision processing, and efficient logistics to help shipbuilders and marine engineering companies complete projects with confidence. Whether you're manufacturing marine equipment, fabricating industrial structures, or supporting offshore infrastructure, Sonatek is your trusted steel supply partner. Request a Shipbuilding Steel Quote Today and partner with Sonatek Steels for reliable industrial steel solutions."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Supporting Marine Engineering with Reliable Steel Solutions"
        bodyText="The shipbuilding industry depends on precision, quality, and dependable supply chains. At Sonatek Steels, we combine premium-quality steel, ready inventory, precision processing, and efficient logistics to help shipbuilders and marine engineering companies complete projects with confidence. Whether you're manufacturing marine equipment, fabricating industrial structures, or supporting offshore infrastructure, Sonatek is your trusted steel supply partner. Request a Shipbuilding Steel Quote Today and partner with Sonatek Steels for reliable industrial steel solutions."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR SHIPBUILDING"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Supporting Marine Engineering with Reliable Steel Solutions"
        description="The shipbuilding industry depends on precision, quality, and dependable supply chains. At Sonatek Steels, we combine premium-quality steel, ready inventory, precision processing, and efficient logistics to help shipbuilders and marine engineering companies complete projects with confidence. Whether you're manufacturing marine equipment, fabricating industrial structures, or supporting offshore infrastructure, Sonatek is your trusted steel supply partner. Request a Shipbuilding Steel Quote Today and partner with Sonatek Steels for reliable industrial steel solutions."
        btnText="Request a Shipbuilding Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Marine Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80"
      />
    </div>
  );
}
