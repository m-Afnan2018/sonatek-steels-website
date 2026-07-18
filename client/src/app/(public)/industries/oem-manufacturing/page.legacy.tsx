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
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Sparkles", title: "Superior Surface Finish", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Settings2", title: "Excellent Machining Performance", description: "Predictable material behaviour under machining and precision processing." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision manufacturing requiring superior surface quality and excellent forming characteristics \u2014 includes Electrical Equipment, Precision Components, Machine Covers, Industrial Cabinets, and Engineering Assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, CNC punching, bending, fabrication, welding, and powder coating \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Paint & Powder Coating Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for heavy-duty manufacturing, structural fabrication, machinery frames, and industrial engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for machine bases, structural assemblies, industrial platforms, and engineering projects." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous OEM production, recurring procurement, and long-term manufacturing requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to reduce manufacturing time, improve efficiency, and optimize material utilization." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, production schedules, and procurement requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your manufacturing application and production needs." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure consistent material performance and manufacturing reliability." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, production plant, fabrication workshop, or project location." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Machinery Manufacturing", image: "https://images.unsplash.com/photo-1516198116318-7b944983058a?w=800&q=80", description: "Steel for machine frames, production equipment, automation systems, and engineering assemblies.", link: "/products" },
  { title: "Electrical Equipment Manufacturing", image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=800&q=80", description: "Premium steel for electrical enclosures, control panels, switchgear cabinets, and industrial electrical equipment.", link: "/products" },
  { title: "Automotive Components", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", description: "Reliable steel for fabricated automotive parts, brackets, reinforcements, support systems, and precision components.", link: "/products" },
  { title: "HVAC Equipment Manufacturing", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "Steel for air handling units, ventilation systems, cooling equipment, equipment housings, and fabricated assemblies.", link: "/products" },
  { title: "Material Handling Equipment", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", description: "High-quality steel for conveyors, lifting systems, warehouse equipment, and industrial handling solutions.", link: "/products" },
  { title: "Custom OEM Products", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Steel for engineering companies manufacturing specialized equipment, industrial systems, and customized OEM solutions.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality ensures precision manufacturing, reduced rejection rates, and superior finished products." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel minimizes production downtime and improves operational efficiency." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help manufacturers maintain production schedules and meet customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring manufacturing operations and long-term procurement planning." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces manufacturing lead times and improves production efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build trusted partnerships through dependable supply, responsive customer service, technical expertise, and consistent product quality." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Stocked material ready to process without long lead times." },
  { icon: "Settings2", title: "Precision Manufacturing Support", description: "Steel and processing built for demanding production requirements." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Wrench", title: "Custom Steel Processing", description: "Slitting, cut-to-length, and custom processing to reduce manufacturing time." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Reliable Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Dependable relationships built on reliable supply and service." },
];

const FAQS_DATA = [
  { question: "Which steel products are best suited for OEM manufacturing?", answer: "Cold Rolled (CR) steel is ideal for precision manufacturing, electrical enclosures, machine components, and products requiring excellent surface finish. Hot Rolled (HR) steel is preferred for structural assemblies, heavy machinery, industrial equipment, and engineering applications." },
  { question: "Do you supply steel to OEM manufacturers?", answer: "Yes. We supply steel to OEM manufacturers, Tier-1 suppliers, engineering companies, fabrication businesses, machinery manufacturers, and industrial production facilities across India." },
  { question: "Can Sonatek support recurring manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for OEM production facilities." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services that help OEM manufacturers reduce production time and improve manufacturing efficiency." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for OEM manufacturers, industrial businesses, and engineering companies." },
];

export default function OemManufacturingPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="OEM MANUFACTURING INDUSTRY"
          title="Reliable Steel Solutions for OEM Manufacturing"
          description="Original Equipment Manufacturers (OEMs) demand precision, consistency, and dependable material quality to maintain world-class manufacturing standards. Whether producing industrial machinery, electrical equipment, automotive components, HVAC systems, storage solutions, engineering products, or custom industrial assemblies, premium steel is the foundation of every successful manufacturing process. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to OEM manufacturers, engineering companies, fabrication businesses, industrial equipment manufacturers, Tier-1 suppliers, and production facilities across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps OEM manufacturers streamline production, reduce downtime, and consistently deliver high-quality products."
          image="https://images.unsplash.com/photo-1516198116318-7b944983058a?w=800&q=80"
          ctaText="Request an OEM Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to an OEM Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Manufacturing", href: "/industries/oem-manufacturing" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the OEM Manufacturing Industry"
        bodyText="OEM manufacturing requires steel that offers excellent dimensional accuracy, superior formability, reliable weldability, and consistent mechanical properties. Manufacturers depend on high-quality steel for precision fabrication, automated production lines, laser cutting, CNC processing, welding, bending, and assembly operations. Sonatek Steels provides dependable steel supply solutions that help OEMs maintain uninterrupted production, improve manufacturing efficiency, and reduce procurement challenges through reliable inventory and responsive service."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR OEM MANUFACTURING?"
          subtitle="Modern OEM manufacturing requires steel that supports precision production while delivering strength, durability, and long-term performance."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR OEM MANUFACTURING STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for oem manufacturing production."
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
          title="OEM MANUFACTURING APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why OEM Manufacturing Companies Choose Sonatek Steels"
        subtitle="Modern OEM manufacturing requires steel that supports precision production while delivering strength, durability, and long-term performance."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our oem manufacturing steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving oem manufacturing customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Efficient manufacturing begins with dependable raw materials. At Sonatek Steels, we help OEM manufacturers improve operational efficiency through premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing industrial equipment, electrical systems, automotive parts, HVAC products, or customized engineering solutions, Sonatek is your trusted steel supply partner for consistent quality and long-term success. Request an OEM Steel Quote Today and experience premium steel solutions designed for modern manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Supporting OEM Manufacturing with Reliable Steel"
        bodyText="Efficient manufacturing begins with dependable raw materials. At Sonatek Steels, we help OEM manufacturers improve operational efficiency through premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing industrial equipment, electrical systems, automotive parts, HVAC products, or customized engineering solutions, Sonatek is your trusted steel supply partner for consistent quality and long-term success. Request an OEM Steel Quote Today and experience premium steel solutions designed for modern manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR OEM MANUFACTURING"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Supporting OEM Manufacturing with Reliable Steel"
        description="Efficient manufacturing begins with dependable raw materials. At Sonatek Steels, we help OEM manufacturers improve operational efficiency through premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing industrial equipment, electrical systems, automotive parts, HVAC products, or customized engineering solutions, Sonatek is your trusted steel supply partner for consistent quality and long-term success. Request an OEM Steel Quote Today and experience premium steel solutions designed for modern manufacturing."
        btnText="Request an OEM Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to an OEM Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&q=80"
      />
    </div>
  );
}
