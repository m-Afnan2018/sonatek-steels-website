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
  { icon: "Sparkles", title: "Excellent Surface Finish", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Layers", title: "Superior Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Gauge", title: "Better Manufacturing Efficiency", description: "Steel that keeps production moving without added rework." },
  { icon: "CheckCircle2", title: "Reliable Product Performance", description: "Reliable Product Performance that supports demanding production requirements and long-term performance." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision automotive components requiring superior surface quality and excellent forming characteristics \u2014 includes Automotive Brackets, Reinforcement Parts, Precision Components, Interior Structures, and Fabricated Assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for stamping, laser cutting, bending, punching, and fabrication \u2014 includes Smooth Surface Finish, Excellent Paint & Coating Performance, Accurate Dimensions, and Consistent Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for structural automotive components, heavy-duty fabrication, and engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for chassis components, support structures, machine parts, and industrial automotive applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous production and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your product specifications, production process, and delivery schedule." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your manufacturing requirements." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality checks before dispatch to ensure consistency and reliability." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility or production unit." },
];

const APPLICATIONS_DATA = [
  { title: "Chassis Components", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "Steel for structural automotive assemblies and vehicle support systems.", link: "/products" },
  { title: "Mounting Brackets", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", description: "Precision steel for automotive brackets, mounting systems, and reinforcement components.", link: "/products" },
  { title: "Seat Frames & Interior Components", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "High-quality steel used in automotive seating systems and interior structural assemblies.", link: "/products" },
  { title: "Battery & EV Components", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "Reliable steel solutions supporting electric vehicle battery housings, mounting structures, and fabricated assemblies.", link: "/products" },
  { title: "Suspension & Support Structures", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Steel for fabricated support components used across passenger and commercial vehicles.", link: "/products" },
  { title: "Custom Automotive Fabrication", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Premium steel for OEM vendors, Tier-1 suppliers, and custom-engineered automotive components.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and reduces production variations." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate access to premium CR and HR steel products minimizes manufacturing downtime." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries help manufacturers maintain production schedules and customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply programs for recurring automotive production and long-term manufacturing partnerships." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom processing services reduce manufacturing time and simplify production operations." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building trusted relationships with automotive manufacturers through reliable products and responsive customer support." },
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
  { question: "Which steel products are commonly used for auto components?", answer: "Cold Rolled (CR) steel is commonly used for precision automotive parts, body components, and fabricated assemblies, while Hot Rolled (HR) steel is ideal for structural parts and heavy-duty automotive applications." },
  { question: "Do you supply steel to Tier-1 and Tier-2 automotive suppliers?", answer: "Yes. We supply steel to OEM vendors, Tier-1 suppliers, Tier-2 manufacturers, fabrication companies, and engineering industries." },
  { question: "Can Sonatek support recurring production requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement solutions for continuous automotive production." },
  { question: "Do you offer processing services?", answer: "Yes. We provide slitting, cut-to-length, and custom steel processing services to meet automotive manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable steel deliveries across North India and Pan-India logistics support for automotive component manufacturers." },
];

export default function AutoComponentsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="AUTO COMPONENTS INDUSTRY"
          title="Reliable Steel Solutions for High-Precision Auto Component Manufacturing"
          description="The auto components industry is built on precision, consistency, and reliability. Every automotive part\u2014whether structural, functional, or cosmetic\u2014requires high-quality steel that supports efficient manufacturing and meets stringent industry standards. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to auto component manufacturers, Tier-1 and Tier-2 suppliers, OEM vendors, fabrication companies, and engineering industries across India. With ready stock, dependable logistics, and value-added processing services, Sonatek helps manufacturers maintain uninterrupted production, improve product quality, and meet demanding delivery schedules."
          image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
          ctaText="Request an Auto Components Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to an Automotive Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Auto Components", href: "/industries/auto-components" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Auto Components Industry"
        bodyText="The automotive components industry requires steel that delivers excellent dimensional accuracy, superior formability, reliable weldability, and consistent mechanical performance. Whether manufacturing brackets, reinforcements, frames, panels, or engineered components, the right steel plays a critical role in achieving production efficiency and product quality. Sonatek Steels provides dependable steel supply solutions that support automotive component manufacturers with premium materials, consistent availability, and reliable delivery."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR AUTO COMPONENTS?"
          subtitle="Modern automotive manufacturing demands steel that supports high-speed production while maintaining precision and quality."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR AUTO COMPONENTS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for auto components production."
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
          title="AUTO COMPONENTS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Auto Components Companies Choose Sonatek Steels"
        subtitle="Modern automotive manufacturing demands steel that supports high-speed production while maintaining precision and quality."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our auto components steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving auto components customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="The auto components industry depends on quality, precision, and uninterrupted supply. At Sonatek Steels, we deliver premium steel products backed by dependable inventory, precision processing, and responsive logistics to help manufacturers achieve operational excellence. Whether you're manufacturing chassis components, brackets, EV assemblies, or custom automotive parts, Sonatek is your trusted steel supply partner. Request an Auto Components Steel Quote Today and partner with Sonatek Steels for reliable automotive steel solutions."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Driving Precision Manufacturing with Reliable Steel"
        bodyText="The auto components industry depends on quality, precision, and uninterrupted supply. At Sonatek Steels, we deliver premium steel products backed by dependable inventory, precision processing, and responsive logistics to help manufacturers achieve operational excellence. Whether you're manufacturing chassis components, brackets, EV assemblies, or custom automotive parts, Sonatek is your trusted steel supply partner. Request an Auto Components Steel Quote Today and partner with Sonatek Steels for reliable automotive steel solutions."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR AUTO COMPONENTS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Driving Precision Manufacturing with Reliable Steel"
        description="The auto components industry depends on quality, precision, and uninterrupted supply. At Sonatek Steels, we deliver premium steel products backed by dependable inventory, precision processing, and responsive logistics to help manufacturers achieve operational excellence. Whether you're manufacturing chassis components, brackets, EV assemblies, or custom automotive parts, Sonatek is your trusted steel supply partner. Request an Auto Components Steel Quote Today and partner with Sonatek Steels for reliable automotive steel solutions."
        btnText="Request an Auto Components Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to an Automotive Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
      />
    </div>
  );
}
