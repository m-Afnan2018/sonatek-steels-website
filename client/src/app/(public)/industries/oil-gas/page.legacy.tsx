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
  { icon: "CheckCircle2", title: "Reliable Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Settings2", title: "Superior Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "CheckCircle2", title: "Consistent Material Quality", description: "Uniform quality across every coil, sheet, and plate." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
  { icon: "Gauge", title: "Reliable Manufacturing Performance", description: "Predictable material behaviour that supports consistent manufacturing." },
  { icon: "Truck", title: "Dependable Industrial Supply", description: "Steady availability that keeps production and projects on schedule." },
];

const SOLUTIONS_DATA = [
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Premium HR Coils designed for structural fabrication, industrial equipment, storage systems, and plant infrastructure \u2014 includes Structural Supports, Industrial Platforms, Equipment Fabrication, Storage Systems, and Plant Infrastructure." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for fabrication, welding, industrial assemblies, and heavy engineering applications \u2014 includes Excellent Strength, Reliable Weldability, Durable Performance, and Consistent Quality." },
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Precision steel coils for equipment manufacturing and applications requiring tighter tolerances and improved surface finish." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Ideal for fabricated enclosures, electrical cabinets, equipment covers, control panels, and precision industrial components." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting refineries, EPC contractors, engineering companies, and industrial manufacturing facilities." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing tailored to project-specific requirements." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, material requirements, and delivery schedule." },
  { title: "Product Selection", description: "Our team recommends the most suitable CR or HR steel products based on your application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your project requirements." },
  { title: "Quality Inspection", description: "Every order undergoes quality inspection to ensure material consistency and reliability before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to manufacturing facilities, fabrication units, or project sites." },
];

const APPLICATIONS_DATA = [
  { title: "Oil Refineries", image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=800&q=80", description: "Steel for processing units, structural frameworks, fabrication, and industrial infrastructure.", link: "/products" },
  { title: "Gas Processing Plants", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", description: "Reliable steel solutions for equipment structures, plant installations, and support systems.", link: "/products" },
  { title: "Petrochemical Facilities", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "Premium steel for industrial manufacturing, fabrication, and utility infrastructure.", link: "/products" },
  { title: "Storage Tanks & Industrial Structures", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", description: "Steel used in fabrication of storage systems, platforms, equipment supports, and structural assemblies.", link: "/products" },
  { title: "EPC Projects", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Reliable material supply for engineering, procurement, and construction companies executing energy projects.", link: "/products" },
  { title: "Industrial Equipment Manufacturing", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "Steel for machinery, process equipment, fabricated assemblies, and energy sector applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supporting demanding industrial and energy applications." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel to minimize project delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries to ensure uninterrupted project execution and manufacturing operations." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply programs designed for large industrial projects and recurring material requirements." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom processing services that simplify fabrication and improve production efficiency." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Building trusted relationships with energy companies through reliable products and responsive customer service." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Stocked material ready to process without long lead times." },
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Steel and processing built for demanding production requirements." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Wrench", title: "Custom Steel Processing", description: "Slitting, cut-to-length, and custom processing to reduce manufacturing time." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Reliable Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Dependable relationships built on reliable supply and service." },
];

const FAQS_DATA = [
  { question: "Which steel products are commonly used in the oil & gas industry?", answer: "Hot Rolled (HR) steel is widely used for structural fabrication and industrial infrastructure, while Cold Rolled (CR) steel is suitable for precision equipment, enclosures, and fabricated components." },
  { question: "Do you supply steel for refineries and EPC projects?", answer: "Yes. We supply steel to oil refineries, gas processing plants, EPC contractors, engineering companies, and industrial fabrication businesses." },
  { question: "Can Sonatek support bulk industrial requirements?", answer: "Absolutely. We specialize in bulk steel supply with scheduled deliveries for large industrial and infrastructure projects." },
  { question: "Do you provide processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to meet project-specific requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable steel deliveries across North India and Pan-India logistics support for oil and gas industry customers." },
];

export default function OilGasPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="OIL & GAS INDUSTRY"
          title="Premium Steel Solutions for the Oil & Gas Industry"
          description="The oil and gas industry operates in some of the world's most demanding environments, where reliability, durability, and material consistency are critical. From storage systems and process equipment to fabrication and industrial infrastructure, every project requires steel that meets high standards of quality and performance. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets for oil refineries, gas processing plants, EPC contractors, equipment manufacturers, fabrication companies, and energy infrastructure projects across India. With ready inventory, dependable logistics, and value-added processing services, Sonatek helps businesses maintain uninterrupted project execution and reliable manufacturing operations."
          image="https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=800&q=80"
          ctaText="Request an Oil & Gas Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Oil & Gas", href: "/industries/oil-gas" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Oil & Gas Industry"
        bodyText="Oil and gas projects require steel that delivers exceptional structural performance, fabrication efficiency, and long-term reliability. Steel is widely used in storage systems, industrial structures, processing equipment, support frameworks, fabrication, and plant infrastructure. Sonatek Steels supplies high-quality CR and HR steel products that support manufacturers, EPC contractors, engineering companies, and industrial fabricators involved in oil, gas, petrochemical, and energy projects. Our dependable supply chain ensures your operations continue without delays caused by material shortages."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR OIL & GAS?"
          subtitle="Industrial energy projects demand steel that performs consistently under challenging operating conditions while supporting fabrication and construction efficiency."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR OIL & GAS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for oil & gas production."
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
          title="OIL & GAS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Oil & Gas Companies Choose Sonatek Steels"
        subtitle="Industrial energy projects demand steel that performs consistently under challenging operating conditions while supporting fabrication and construction efficiency."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our oil & gas steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving oil & gas customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="The oil and gas sector depends on precision, reliability, and uninterrupted operations. At Sonatek Steels, we support these demanding industries with premium-quality steel, dependable inventory, and responsive logistics that help businesses complete projects efficiently and confidently. Whether you're building energy infrastructure, manufacturing industrial equipment, or executing large EPC projects, Sonatek is your trusted steel supply partner. Request an Oil & Gas Steel Quote Today and partner with Sonatek Steels for dependable industrial steel solutions."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Powering the Energy Industry with Reliable Steel"
        bodyText="The oil and gas sector depends on precision, reliability, and uninterrupted operations. At Sonatek Steels, we support these demanding industries with premium-quality steel, dependable inventory, and responsive logistics that help businesses complete projects efficiently and confidently. Whether you're building energy infrastructure, manufacturing industrial equipment, or executing large EPC projects, Sonatek is your trusted steel supply partner. Request an Oil & Gas Steel Quote Today and partner with Sonatek Steels for dependable industrial steel solutions."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR OIL & GAS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Powering the Energy Industry with Reliable Steel"
        description="The oil and gas sector depends on precision, reliability, and uninterrupted operations. At Sonatek Steels, we support these demanding industries with premium-quality steel, dependable inventory, and responsive logistics that help businesses complete projects efficiently and confidently. Whether you're building energy infrastructure, manufacturing industrial equipment, or executing large EPC projects, Sonatek is your trusted steel supply partner. Request an Oil & Gas Steel Quote Today and partner with Sonatek Steels for dependable industrial steel solutions."
        btnText="Request an Oil & Gas Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80"
      />
    </div>
  );
}
