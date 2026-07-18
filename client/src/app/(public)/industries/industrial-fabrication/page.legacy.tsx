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
  { icon: "Layers", title: "Superior Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Sparkles", title: "Excellent Surface Finish", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "Settings2", title: "Excellent Machining Performance", description: "Predictable material behaviour under machining and precision processing." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision fabrication requiring superior surface finish, accurate dimensions, and excellent forming characteristics \u2014 includes Industrial Enclosures, Machine Covers, Equipment Panels, Precision Fabricated Parts, and Engineering Components." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, CNC punching, bending, welding, fabrication, and powder coating applications \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Paint & Powder Coating Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for heavy fabrication, industrial structures, machine frames, support systems, and engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for structural fabrication, industrial equipment, platforms, heavy machinery, and engineering projects." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous manufacturing, fabrication workshops, engineering projects, and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to reduce production time, improve efficiency, and minimize material wastage." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your fabrication process, project specifications, engineering requirements, and delivery timelines." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your fabrication requirements and manufacturing process." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure dimensional accuracy, material consistency, and reliable performance before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your fabrication facility, manufacturing plant, engineering workshop, or project site." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Machinery", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Steel for machine frames, industrial equipment, production machinery, fabrication systems, and mechanical assemblies.", link: "/products" },
  { title: "Structural Fabrication", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "Premium steel for fabricated structures, platforms, supports, industrial sheds, walkways, and engineering frameworks.", link: "/products" },
  { title: "Electrical & Industrial Enclosures", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Reliable steel for electrical cabinets, machine housings, equipment enclosures, control panels, and industrial boxes.", link: "/products" },
  { title: "Material Handling Equipment", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Steel for conveyors, lifting equipment, industrial carts, storage systems, handling equipment, and engineering assemblies.", link: "/products" },
  { title: "Process Equipment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "High-quality steel for tanks, vessels, pressure equipment, industrial containers, and processing systems.", link: "/products" },
  { title: "Custom Industrial Fabrication", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Steel for OEM manufacturers, engineering companies, EPC contractors, infrastructure projects, and specialized industrial fabrication.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision fabrication, reduces production errors, and ensures reliable finished products." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps minimize manufacturing delays and improve production efficiency." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help fabrication companies maintain project schedules and customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring fabrication work, engineering projects, and industrial manufacturing." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces fabrication time, lowers handling costs, and improves manufacturing productivity." },
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
  { question: "Which steel products are best suited for industrial fabrication?", answer: "Cold Rolled (CR) steel is ideal for precision fabrication, electrical enclosures, machine panels, and engineered products due to its smooth surface finish and dimensional accuracy. Hot Rolled (HR) steel is preferred for structural fabrication, heavy equipment, machinery frames, and industrial engineering projects because of its strength and durability." },
  { question: "Do you supply steel to fabrication companies and engineering firms?", answer: "Yes. We supply steel to fabrication workshops, OEM manufacturers, EPC contractors, machinery manufacturers, engineering companies, infrastructure developers, and industrial businesses across India." },
  { question: "Can Sonatek support large fabrication and engineering projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement support, and customized inventory management solutions for industrial fabrication and engineering projects." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to help fabricators reduce production time, improve efficiency, and optimize material utilization." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for fabrication companies, engineering contractors, and industrial manufacturers." },
];

export default function IndustrialFabricationPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="INDUSTRIAL FABRICATION INDUSTRY"
          title="Reliable Steel Solutions for Industrial Fabrication & Engineering"
          description="Industrial fabrication is the backbone of modern manufacturing, infrastructure, engineering, and heavy industry. Every fabricated product\u2014whether it's machinery, equipment, structural assemblies, industrial enclosures, storage systems, or engineered components\u2014requires premium-quality steel that delivers strength, precision, and consistency. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to fabrication companies, engineering firms, industrial manufacturers, OEMs, EPC contractors, machinery manufacturers, and custom fabrication businesses across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps manufacturers streamline production, reduce downtime, and deliver high-quality fabricated products."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
          ctaText="Request an Industrial Fabrication Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industrial Fabrication", href: "/industries/industrial-fabrication" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Industrial Fabrication Industry"
        bodyText="Industrial fabrication requires steel that offers exceptional dimensional accuracy, excellent weldability, superior formability, and reliable structural performance. Whether manufacturing heavy machinery, industrial equipment, electrical enclosures, support structures, tanks, platforms, or customized fabricated assemblies, high-quality steel is essential for achieving precision and durability. Sonatek Steels provides dependable steel supply solutions that help fabrication companies improve productivity, reduce material wastage, and maintain consistent manufacturing quality across every project."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR INDUSTRIAL FABRICATION?"
          subtitle="Industrial fabrication demands steel that performs consistently throughout cutting, bending, welding, machining, forming, and assembly operations."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR INDUSTRIAL FABRICATION STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for industrial fabrication production."
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
          title="INDUSTRIAL FABRICATION APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Industrial Fabrication Companies Choose Sonatek Steels"
        subtitle="Industrial fabrication demands steel that performs consistently throughout cutting, bending, welding, machining, forming, and assembly operations."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our industrial fabrication steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving industrial fabrication customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Successful fabrication begins with dependable raw materials. At Sonatek Steels, we help industrial manufacturers, engineering companies, and fabrication businesses improve production efficiency through premium-quality steel, precision processing, and dependable logistics. Whether you're building machinery, manufacturing industrial equipment, fabricating structural systems, or delivering customized engineering projects, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request an Industrial Fabrication Steel Quote Today and experience premium steel solutions designed for modern fabrication and engineering industries."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Powering Industrial Fabrication with Reliable Steel"
        bodyText="Successful fabrication begins with dependable raw materials. At Sonatek Steels, we help industrial manufacturers, engineering companies, and fabrication businesses improve production efficiency through premium-quality steel, precision processing, and dependable logistics. Whether you're building machinery, manufacturing industrial equipment, fabricating structural systems, or delivering customized engineering projects, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request an Industrial Fabrication Steel Quote Today and experience premium steel solutions designed for modern fabrication and engineering industries."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR INDUSTRIAL FABRICATION"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Powering Industrial Fabrication with Reliable Steel"
        description="Successful fabrication begins with dependable raw materials. At Sonatek Steels, we help industrial manufacturers, engineering companies, and fabrication businesses improve production efficiency through premium-quality steel, precision processing, and dependable logistics. Whether you're building machinery, manufacturing industrial equipment, fabricating structural systems, or delivering customized engineering projects, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request an Industrial Fabrication Steel Quote Today and experience premium steel solutions designed for modern fabrication and engineering industries."
        btnText="Request an Industrial Fabrication Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />
    </div>
  );
}
