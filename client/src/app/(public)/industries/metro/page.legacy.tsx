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
  { icon: "Settings2", title: "Excellent Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for metro manufacturing applications requiring precision fabrication and superior surface quality \u2014 includes Metro Coach Components, Electrical Enclosures, Equipment Cabinets, Interior Panels, and Engineering Assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, bending, punching, fabrication, welding, and powder coating \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Fabrication Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for metro station structures, heavy engineering, support systems, and infrastructure fabrication." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for structural platforms, engineering frameworks, maintenance facilities, and industrial fabrication." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting metro rail manufacturing, infrastructure projects, and long-term procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency and simplify project execution." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, manufacturing requirements, engineering standards, and delivery timelines." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your metro rail application." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure dimensional accuracy, consistent quality, and dependable performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, metro project site, engineering workshop, or infrastructure location." },
];

const APPLICATIONS_DATA = [
  { title: "Metro Coach Manufacturing", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Steel for coach interiors, equipment housings, fabricated components, support assemblies, and structural parts.", link: "/products" },
  { title: "Metro Station Infrastructure", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Premium steel for station buildings, passenger platforms, utility rooms, walkways, and engineering structures.", link: "/products" },
  { title: "Electrical & Control Systems", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Reliable steel for electrical enclosures, switchgear cabinets, control panels, signaling equipment, and utility infrastructure.", link: "/products" },
  { title: "Maintenance Facilities", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", description: "Steel for maintenance workshops, inspection platforms, storage systems, repair equipment, and service infrastructure.", link: "/products" },
  { title: "Metro Engineering Projects", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", description: "High-quality steel for fabrication, structural engineering, transit infrastructure, and specialized metro construction.", link: "/products" },
  { title: "Custom Metro Fabrication", image: "https://images.unsplash.com/photo-1516198116318-7b944983058a?w=800&q=80", description: "Steel for OEM manufacturers, engineering companies, fabrication contractors, and customized metro rail applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing, safe infrastructure, and reliable transit systems." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps minimize project delays and production downtime." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries keep manufacturing schedules and infrastructure projects on track." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply solutions for recurring metro manufacturing and infrastructure development projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves fabrication efficiency, reduces production time, and optimizes project execution." },
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
  { question: "Which steel products are best suited for metro rail manufacturing?", answer: "Cold Rolled (CR) steel is widely used for metro coach components, electrical enclosures, equipment cabinets, and fabricated assemblies due to its smooth finish and dimensional accuracy. Hot Rolled (HR) steel is commonly used for station infrastructure, structural supports, engineering frameworks, and heavy-duty applications." },
  { question: "Do you supply steel to metro rail manufacturers and infrastructure companies?", answer: "Yes. We supply steel to metro rail manufacturers, rolling stock companies, EPC contractors, infrastructure developers, OEMs, fabrication businesses, and engineering firms across India." },
  { question: "Can Sonatek support large metro rail projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for metro rail infrastructure and manufacturing projects." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to improve fabrication efficiency and optimize manufacturing operations." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for metro rail manufacturers, engineering companies, and infrastructure contractors." },
];

export default function MetroPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="METRO RAIL INDUSTRY"
          title="Reliable Steel Solutions for Metro Rail Infrastructure & Manufacturing"
          description="Metro rail systems are transforming urban transportation by providing fast, efficient, and sustainable mobility. Building and maintaining these world-class transit systems requires premium-quality steel for rolling stock, station infrastructure, electrical systems, structural fabrication, maintenance facilities, and engineering applications. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to metro rail contractors, rolling stock manufacturers, OEMs, EPC companies, infrastructure developers, fabrication businesses, and engineering firms across India. With ready inventory, precision processing, and dependable logistics, Sonatek supports metro rail manufacturers and infrastructure companies with consistent steel supply for timely project execution."
          image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80"
          ctaText="Request a Metro Rail Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Metro Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Metro Rail", href: "/industries/metro" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Metro Rail Industry"
        bodyText="Metro rail projects demand steel that offers exceptional strength, precision, and reliability. Whether manufacturing metro coaches, electrical enclosures, station infrastructure, maintenance equipment, structural assemblies, or engineering components, consistent steel quality is essential for safe and efficient operations. Sonatek Steels provides dependable steel supply solutions that help metro rail manufacturers and contractors improve productivity, reduce project delays, and maintain world-class quality standards."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR METRO RAIL?"
          subtitle="Urban transportation infrastructure requires steel capable of delivering long-term durability and reliable performance under demanding operating conditions."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR METRO RAIL STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for metro rail production."
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
          title="METRO RAIL APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Metro Rail Companies Choose Sonatek Steels"
        subtitle="Urban transportation infrastructure requires steel capable of delivering long-term durability and reliable performance under demanding operating conditions."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our metro rail steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving metro rail customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Modern metro systems depend on precision engineering, durable infrastructure, and dependable raw materials. At Sonatek Steels, we support India's growing urban transportation sector with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing metro coaches, developing transit infrastructure, or fabricating specialized engineering systems, Sonatek is your trusted steel supply partner. Request a Metro Rail Steel Quote Today and experience premium steel solutions engineered for world-class urban transportation."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Building the Future of Urban Mobility with Reliable Steel"
        bodyText="Modern metro systems depend on precision engineering, durable infrastructure, and dependable raw materials. At Sonatek Steels, we support India's growing urban transportation sector with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing metro coaches, developing transit infrastructure, or fabricating specialized engineering systems, Sonatek is your trusted steel supply partner. Request a Metro Rail Steel Quote Today and experience premium steel solutions engineered for world-class urban transportation."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR METRO RAIL"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Building the Future of Urban Mobility with Reliable Steel"
        description="Modern metro systems depend on precision engineering, durable infrastructure, and dependable raw materials. At Sonatek Steels, we support India's growing urban transportation sector with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're manufacturing metro coaches, developing transit infrastructure, or fabricating specialized engineering systems, Sonatek is your trusted steel supply partner. Request a Metro Rail Steel Quote Today and experience premium steel solutions engineered for world-class urban transportation."
        btnText="Request a Metro Rail Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Metro Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
    </div>
  );
}
