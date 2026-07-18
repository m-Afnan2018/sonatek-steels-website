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
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision fabrication requiring excellent surface finish and dimensional consistency \u2014 includes Electrical Enclosures, Equipment Cabinets, Ventilation Systems, Control Panels, and Engineering Assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, punching, bending, fabrication, welding, and industrial finishing \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Fabrication Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for structural supports, heavy engineering, machinery fabrication, and tunnel infrastructure projects." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for support structures, platforms, maintenance facilities, equipment frames, and heavy-duty fabrication." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting tunnel construction projects, infrastructure development, and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve construction efficiency and simplify fabrication." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, engineering requirements, construction schedule, and steel requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your tunnel construction application." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure dimensional accuracy, material consistency, and dependable performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your construction site, fabrication facility, engineering workshop, or infrastructure project." },
];

const APPLICATIONS_DATA = [
  { title: "Tunnel Support Structures", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", description: "Steel for fabricated structural supports, reinforcement systems, maintenance platforms, and engineering assemblies.", link: "/products" },
  { title: "Tunnel Construction Equipment", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "Premium steel for tunnel boring equipment, fabrication systems, machinery components, and heavy engineering applications.", link: "/products" },
  { title: "Ventilation & Utility Systems", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", description: "Reliable steel for ventilation ducts, service tunnels, equipment housings, electrical enclosures, and utility infrastructure.", link: "/products" },
  { title: "Underground Transportation Projects", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Steel for metro tunnels, railway tunnels, highway tunnels, pedestrian tunnels, and urban infrastructure.", link: "/products" },
  { title: "Mining & Industrial Tunnels", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "High-quality steel for mining operations, underground industrial facilities, utility corridors, and specialized engineering projects.", link: "/products" },
  { title: "Custom Infrastructure Fabrication", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Steel for OEM manufacturers, EPC contractors, engineering companies, and customized tunnel construction applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports durable infrastructure, precision fabrication, and dependable project execution." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps reduce project delays and improve construction efficiency." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries ensure uninterrupted project progress and timely completion of infrastructure developments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring infrastructure projects and long-term procurement planning." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves fabrication efficiency, minimizes material waste, and optimizes construction timelines." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build trusted relationships through dependable supply, responsive customer support, technical expertise, and consistent product quality." },
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
  { question: "Which steel products are best suited for tunnel construction projects?", answer: "Cold Rolled (CR) steel is commonly used for electrical enclosures, ventilation systems, control panels, and fabricated engineering components. Hot Rolled (HR) steel is preferred for structural supports, tunnel construction equipment, maintenance platforms, and heavy-duty infrastructure." },
  { question: "Do you supply steel to tunnel construction companies?", answer: "Yes. We supply steel to tunnel contractors, EPC companies, infrastructure developers, engineering firms, OEMs, fabrication businesses, and industrial manufacturers across India." },
  { question: "Can Sonatek support large tunnel infrastructure projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for large-scale infrastructure and underground construction projects." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to improve fabrication efficiency and support infrastructure development." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for infrastructure contractors, engineering companies, and tunnel construction projects." },
];

export default function TunnelPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="TUNNEL CONSTRUCTION INDUSTRY"
          title="Reliable Steel Solutions for Tunnel Construction & Underground Infrastructure"
          description="Tunnel construction is one of the most demanding sectors in modern infrastructure development, requiring high-strength steel capable of performing under extreme environmental and structural conditions. From transportation tunnels and utility corridors to metro tunnels, mining projects, and underground engineering works, premium-quality steel plays a critical role in ensuring structural integrity, safety, and long-term durability. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to tunnel construction companies, infrastructure developers, EPC contractors, engineering firms, fabrication businesses, OEMs, and industrial manufacturers across India. With ready inventory, precision processing, and dependable logistics, Sonatek supports large-scale infrastructure projects with reliable steel solutions delivered on schedule."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          ctaText="Request a Tunnel Infrastructure Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tunnel Construction", href: "/industries/tunnel" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Tunnel Construction Industry"
        bodyText="Tunnel infrastructure projects require steel that delivers exceptional structural strength, fabrication flexibility, and long-term reliability. Steel is extensively used in tunnel support systems, machinery, ventilation structures, electrical enclosures, maintenance facilities, construction equipment, and engineering infrastructure. Sonatek Steels provides dependable steel supply solutions that help tunnel contractors, engineering companies, and infrastructure developers complete projects efficiently while maintaining the highest quality standards."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR TUNNEL CONSTRUCTION?"
          subtitle="Underground construction environments require steel capable of withstanding heavy loads, demanding operating conditions, and continuous structural performance."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR TUNNEL CONSTRUCTION STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for tunnel construction production."
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
          title="TUNNEL CONSTRUCTION APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Tunnel Construction Companies Choose Sonatek Steels"
        subtitle="Underground construction environments require steel capable of withstanding heavy loads, demanding operating conditions, and continuous structural performance."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our tunnel construction steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving tunnel construction customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Modern tunnel construction demands precision engineering, durable materials, and dependable supply chains. At Sonatek Steels, we support India's infrastructure growth with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're building metro tunnels, transportation corridors, mining facilities, or underground utility infrastructure, Sonatek is your trusted steel supply partner for quality, consistency, and project success. Request a Tunnel Infrastructure Steel Quote Today and experience premium steel solutions engineered for complex infrastructure projects."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Building Stronger Underground Infrastructure with Reliable Steel"
        bodyText="Modern tunnel construction demands precision engineering, durable materials, and dependable supply chains. At Sonatek Steels, we support India's infrastructure growth with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're building metro tunnels, transportation corridors, mining facilities, or underground utility infrastructure, Sonatek is your trusted steel supply partner for quality, consistency, and project success. Request a Tunnel Infrastructure Steel Quote Today and experience premium steel solutions engineered for complex infrastructure projects."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR TUNNEL CONSTRUCTION"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Building Stronger Underground Infrastructure with Reliable Steel"
        description="Modern tunnel construction demands precision engineering, durable materials, and dependable supply chains. At Sonatek Steels, we support India's infrastructure growth with premium-quality steel, precision processing, ready inventory, and reliable logistics. Whether you're building metro tunnels, transportation corridors, mining facilities, or underground utility infrastructure, Sonatek is your trusted steel supply partner for quality, consistency, and project success. Request a Tunnel Infrastructure Steel Quote Today and experience premium steel solutions engineered for complex infrastructure projects."
        btnText="Request a Tunnel Infrastructure Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </div>
  );
}
