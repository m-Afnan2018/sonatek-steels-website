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
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Sparkles", title: "Superior Surface Finish", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
  { icon: "Gauge", title: "Reliable Industrial Performance", description: "Dependable performance under sustained industrial operating conditions." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for railway equipment requiring precision fabrication and superior surface finish \u2014 includes Electrical Enclosures, Coach Interior Components, Control Cabinets, Equipment Housings, and Railway Fabrication." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, punching, bending, fabrication, and powder coating \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating Performance, Accurate Dimensions, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for railway structures, equipment frames, engineering applications, and heavy-duty fabrication." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for support structures, platforms, maintenance equipment, and infrastructure fabrication." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting railway manufacturing, infrastructure development, and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency and simplify project execution." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, manufacturing requirements, and delivery schedules." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your railway application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and dispatch schedules are planned according to your production or project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality inspection before dispatch to ensure consistent material performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, railway project, or infrastructure site." },
];

const APPLICATIONS_DATA = [
  { title: "Railway Coach Components", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "Steel for fabricated coach parts, interior structures, equipment housings, and support assemblies.", link: "/products" },
  { title: "Railway Station Infrastructure", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Premium steel for station structures, service buildings, passenger facilities, and engineering projects.", link: "/products" },
  { title: "Electrical & Control Enclosures", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Reliable steel for railway electrical panels, control cabinets, switchgear enclosures, and signaling equipment.", link: "/products" },
  { title: "Maintenance & Workshop Equipment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Steel for maintenance platforms, workshop equipment, storage systems, and railway service facilities.", link: "/products" },
  { title: "Rail Engineering Projects", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "High-quality steel for fabrication, structural engineering, and transportation infrastructure development.", link: "/products" },
  { title: "Custom Railway Fabrication", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Steel for OEM manufacturers, engineering companies, and specialized railway equipment fabrication.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and durable railway infrastructure." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel minimizes project delays and production downtime." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help maintain project schedules and manufacturing commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring railway manufacturing and large infrastructure projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves fabrication efficiency and reduces manufacturing lead times." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building trusted relationships through dependable supply, responsive customer support, and consistent product quality." },
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
  { question: "Which steel products are commonly used in railway transportation projects?", answer: "Cold Rolled (CR) steel is widely used for electrical enclosures, coach components, and precision fabrication, while Hot Rolled (HR) steel is commonly used for railway structures, engineering applications, support frames, and infrastructure projects." },
  { question: "Do you supply steel to railway manufacturers and infrastructure companies?", answer: "Yes. We supply steel to railway equipment manufacturers, OEMs, fabrication companies, engineering contractors, infrastructure developers, and transportation solution providers across India." },
  { question: "Can Sonatek support large railway infrastructure projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for railway manufacturing and infrastructure development projects." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services tailored to railway manufacturing and engineering requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for railway manufacturers, engineering companies, and infrastructure contractors." },
];

export default function RailwayTransportationPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="RAILWAY TRANSPORTATION INDUSTRY"
          title="Reliable Steel Solutions for the Railway Transportation Industry"
          description="The railway transportation industry demands high-strength, precision-engineered steel for rolling stock, railway infrastructure, fabrication, maintenance equipment, and transportation systems. From coach components and electrical enclosures to station infrastructure, maintenance facilities, and railway engineering projects, premium-quality steel plays a vital role in ensuring safety, durability, and operational efficiency. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to railway equipment manufacturers, rolling stock manufacturers, infrastructure contractors, OEMs, engineering companies, fabrication businesses, and transportation solution providers across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps railway manufacturers and infrastructure developers deliver projects on time while maintaining the highest quality standards."
          image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
          ctaText="Request a Railway Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Railway Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Railway Transportation", href: "/industries/railway-transportation" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Railway Transportation Industry"
        bodyText="Railway manufacturing and infrastructure projects require steel that offers structural strength, dimensional accuracy, and excellent fabrication performance. Whether manufacturing coach components, station infrastructure, electrical enclosures, support structures, or maintenance equipment, reliable steel is essential for long-term performance and operational safety. Sonatek Steels provides dependable steel supply solutions that support railway manufacturers, infrastructure contractors, engineering companies, and OEMs with premium materials, ready inventory, and reliable delivery."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR RAILWAY TRANSPORTATION?"
          subtitle="Railway systems require steel capable of delivering reliability, strength, and long-term performance under demanding operating conditions."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR RAILWAY TRANSPORTATION STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for railway transportation production."
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
          title="RAILWAY TRANSPORTATION APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Railway Transportation Companies Choose Sonatek Steels"
        subtitle="Railway systems require steel capable of delivering reliability, strength, and long-term performance under demanding operating conditions."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our railway transportation steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving railway transportation customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Railway transportation depends on strong infrastructure, precision engineering, and dependable materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and reliable logistics to help manufacturers and infrastructure developers build safer, stronger, and more efficient railway systems. Whether you're manufacturing railway components, constructing transportation infrastructure, or fabricating specialized railway equipment, Sonatek is your trusted steel supply partner. Request a Railway Steel Quote Today and power your railway projects with Sonatek Steels."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Driving India's Railway Infrastructure with Reliable Steel"
        bodyText="Railway transportation depends on strong infrastructure, precision engineering, and dependable materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and reliable logistics to help manufacturers and infrastructure developers build safer, stronger, and more efficient railway systems. Whether you're manufacturing railway components, constructing transportation infrastructure, or fabricating specialized railway equipment, Sonatek is your trusted steel supply partner. Request a Railway Steel Quote Today and power your railway projects with Sonatek Steels."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR RAILWAY TRANSPORTATION"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Driving India's Railway Infrastructure with Reliable Steel"
        description="Railway transportation depends on strong infrastructure, precision engineering, and dependable materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and reliable logistics to help manufacturers and infrastructure developers build safer, stronger, and more efficient railway systems. Whether you're manufacturing railway components, constructing transportation infrastructure, or fabricating specialized railway equipment, Sonatek is your trusted steel supply partner. Request a Railway Steel Quote Today and power your railway projects with Sonatek Steels."
        btnText="Request a Railway Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Railway Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&q=80"
      />
    </div>
  );
}
