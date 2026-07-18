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
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Sparkles", title: "Superior Surface Finish", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Settings2", title: "Excellent Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for drum manufacturing requiring smooth surface finish, excellent forming properties, and consistent material quality \u2014 includes Steel Drums, Industrial Barrels, Chemical Containers, Lubricant Drums, and Packaging Components." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for rolling, deep drawing, bending, welding, fabrication, and industrial finishing processes \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Fabrication Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for heavy-duty industrial containers, structural drum components, storage systems, and engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for industrial storage equipment, fabrication projects, heavy-duty containers, and structural applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous drum manufacturing, recurring procurement, and large-scale industrial packaging production." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency, reduce waste, and optimize production." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, drum specifications, production schedules, and material requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your drum manufacturing application." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure dimensional accuracy, material consistency, and dependable performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, production plant, or industrial packaging unit." },
];

const APPLICATIONS_DATA = [
  { title: "Chemical Storage Drums", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", description: "Steel for drums used to safely store and transport chemicals, solvents, and hazardous industrial materials.", link: "/products" },
  { title: "Oil & Lubricant Drums", image: "https://images.unsplash.com/photo-1516198116318-7b944983058a?w=800&q=80", description: "Premium steel for petroleum, lubricant, fuel, and oil storage containers designed for industrial applications.", link: "/products" },
  { title: "Food & Beverage Containers", image: "https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=800&q=80", description: "Reliable steel for food-grade drums, edible oil containers, ingredient storage, and industrial food packaging.", link: "/products" },
  { title: "Paint & Coating Drums", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", description: "Steel for paint containers, coating drums, resin packaging, adhesive storage, and industrial chemical applications.", link: "/products" },
  { title: "Pharmaceutical & Specialty Packaging", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "High-quality steel for pharmaceutical storage drums, specialty chemical packaging, and industrial process containers.", link: "/products" },
  { title: "Custom Industrial Packaging", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", description: "Steel for OEM manufacturers producing customized drums, barrels, industrial containers, and specialized packaging solutions.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing, reduced rejection rates, and durable finished products." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel minimizes production downtime and supports continuous manufacturing." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help manufacturers maintain production schedules and fulfill customer orders on time." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring production and long-term procurement planning." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves production efficiency, reduces material wastage, and optimizes manufacturing operations." },
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
  { question: "Which steel products are best suited for steel drum manufacturing?", answer: "Cold Rolled (CR) steel is widely used for steel drums because of its smooth surface finish, excellent formability, and consistent thickness. Hot Rolled (HR) steel is commonly used for structural components, heavy-duty industrial containers, and fabrication applications." },
  { question: "Do you supply steel to steel drum manufacturers?", answer: "Yes. We supply steel to drum manufacturers, barrel manufacturers, industrial packaging companies, OEMs, fabrication businesses, and engineering companies across India." },
  { question: "Can Sonatek support bulk manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for high-volume industrial packaging production." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services that improve manufacturing efficiency and reduce production costs." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for steel drum manufacturers, industrial packaging companies, and production facilities." },
];

export default function SteelDrumsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="STEEL DRUM MANUFACTURING INDUSTRY"
          title="Reliable Steel Solutions for Steel Drum Manufacturing"
          description="Steel drums are trusted worldwide for the safe storage and transportation of chemicals, petroleum products, lubricants, food-grade materials, pharmaceuticals, paints, solvents, and industrial liquids. Manufacturing these drums requires precision-engineered steel that offers excellent formability, dimensional accuracy, weldability, and structural strength. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to steel drum manufacturers, industrial packaging companies, barrel manufacturers, OEMs, fabrication businesses, and engineering companies across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps manufacturers maintain continuous production, minimize material wastage, and deliver high-quality steel drums that meet industrial standards."
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
          ctaText="Request a Steel Drum Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Steel Drums", href: "/industries/steel-drums" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Steel Drums Industry"
        bodyText="Steel drum manufacturing requires steel with exceptional formability, uniform thickness, reliable weldability, and superior surface quality. Whether manufacturing closed-head drums, open-top drums, chemical barrels, oil drums, storage containers, or customized industrial packaging solutions, manufacturers rely on consistent steel quality for efficient production. Sonatek Steels provides dependable steel supply solutions that support industrial packaging manufacturers with premium materials, precision processing, and reliable deliveries."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR STEEL DRUMS?"
          subtitle="Industrial packaging products require steel capable of delivering strength, durability, and precision throughout the manufacturing process."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR STEEL DRUMS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for steel drums production."
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
          title="STEEL DRUMS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Steel Drums Companies Choose Sonatek Steels"
        subtitle="Industrial packaging products require steel capable of delivering strength, durability, and precision throughout the manufacturing process."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our steel drums steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving steel drums customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Every durable steel drum begins with premium-quality raw materials. At Sonatek Steels, we help manufacturers improve production efficiency through high-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing chemical drums, oil barrels, industrial storage containers, food-grade drums, or customized packaging solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Steel Drum Steel Quote Today and experience premium steel solutions engineered for industrial packaging manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Strengthening Industrial Packaging with Reliable Steel"
        bodyText="Every durable steel drum begins with premium-quality raw materials. At Sonatek Steels, we help manufacturers improve production efficiency through high-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing chemical drums, oil barrels, industrial storage containers, food-grade drums, or customized packaging solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Steel Drum Steel Quote Today and experience premium steel solutions engineered for industrial packaging manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR STEEL DRUMS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Strengthening Industrial Packaging with Reliable Steel"
        description="Every durable steel drum begins with premium-quality raw materials. At Sonatek Steels, we help manufacturers improve production efficiency through high-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing chemical drums, oil barrels, industrial storage containers, food-grade drums, or customized packaging solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Steel Drum Steel Quote Today and experience premium steel solutions engineered for industrial packaging manufacturing."
        btnText="Request a Steel Drum Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      />
    </div>
  );
}
