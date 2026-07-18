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
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision renewable energy equipment requiring superior surface finish and fabrication quality \u2014 includes Electrical Enclosures, Inverter Cabinets, Battery Storage Systems, Solar Equipment, and Control Panels." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, bending, punching, fabrication, and powder coating \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating Performance, Accurate Dimensions, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for structural fabrication, solar support systems, equipment frames, and renewable energy infrastructure." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for mounting structures, support frames, equipment platforms, and industrial fabrication." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting renewable energy projects and continuous manufacturing operations." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency and simplify project execution." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, manufacturing process, and delivery requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your renewable energy application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and dispatch schedules are planned according to your production or project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality inspection before dispatch to ensure consistent material performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, fabrication unit, or project site." },
];

const APPLICATIONS_DATA = [
  { title: "Solar Mounting Structures", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Steel for fabricated mounting systems, support structures, and utility-scale solar installations.", link: "/products" },
  { title: "Battery Energy Storage Systems (BESS)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Premium steel for battery cabinets, energy storage enclosures, and support structures.", link: "/products" },
  { title: "Inverter & Control Panel Enclosures", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Reliable steel for inverter cabinets, electrical control panels, and renewable energy equipment.", link: "/products" },
  { title: "Solar EPC Projects", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Steel supplied for engineering, procurement, and construction companies executing solar infrastructure projects.", link: "/products" },
  { title: "Renewable Energy Equipment", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "High-quality steel for fabrication of equipment housings, machine frames, and engineering assemblies.", link: "/products" },
  { title: "Industrial Clean Energy Infrastructure", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Steel for renewable energy facilities, utility structures, maintenance platforms, and engineering applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and dependable renewable energy infrastructure." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps avoid project delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries keep manufacturing schedules and EPC project timelines on track." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring production and large-scale renewable energy projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves fabrication efficiency and reduces manufacturing time." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building trusted relationships through reliable products, responsive service, and consistent supply." },
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
  { question: "Which steel products are commonly used in renewable energy projects?", answer: "Cold Rolled (CR) steel is widely used for electrical enclosures, battery storage systems, inverter cabinets, and control panels, while Hot Rolled (HR) steel is commonly used for solar mounting structures, support frames, and renewable energy infrastructure." },
  { question: "Do you supply steel for solar EPC companies?", answer: "Yes. We supply steel to solar EPC contractors, renewable energy developers, OEM manufacturers, fabrication companies, and engineering firms across India." },
  { question: "Can Sonatek support large renewable energy projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for utility-scale and commercial renewable energy projects." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to meet project-specific manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for renewable energy manufacturers and project developers." },
];

export default function RenewableSolarPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="RENEWABLE ENERGY & SOLAR INDUSTRY"
          title="Reliable Steel Solutions for Renewable Energy & Solar Infrastructure"
          description="The renewable energy industry is driving the future of sustainable development, and steel remains one of its most essential materials. From solar module mounting structures and equipment enclosures to battery storage systems and renewable energy infrastructure, high-quality steel is critical for durability, precision, and long-term performance. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to solar EPC companies, renewable energy developers, fabrication units, OEM manufacturers, engineering firms, and infrastructure contractors across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps renewable energy businesses complete projects efficiently while maintaining the highest quality standards."
          image="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80"
          ctaText="Request a Renewable Energy Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Renewable Energy", href: "/industries/renewable-solar" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Renewable Energy Industry"
        bodyText="Renewable energy projects require steel that offers structural strength, precision fabrication, and long-term reliability. Steel is widely used in solar mounting systems, electrical enclosures, battery storage equipment, inverter cabinets, equipment support structures, and renewable energy infrastructure. Sonatek Steels provides dependable steel supply solutions that support manufacturers, EPC contractors, and renewable energy developers with consistent quality, reliable inventory, and responsive delivery."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR RENEWABLE ENERGY?"
          subtitle="Renewable energy infrastructure requires materials that deliver strength, durability, and manufacturing efficiency."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR RENEWABLE ENERGY STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for renewable energy production."
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
          title="RENEWABLE ENERGY APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Renewable Energy Companies Choose Sonatek Steels"
        subtitle="Renewable energy infrastructure requires materials that deliver strength, durability, and manufacturing efficiency."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our renewable energy steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving renewable energy customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="The renewable energy industry depends on innovation, precision, and dependable infrastructure. At Sonatek Steels, we help manufacturers and project developers build the future of clean energy with premium-quality steel, responsive logistics, and precision processing. Whether you're manufacturing solar equipment, constructing solar infrastructure, or developing battery energy storage systems, Sonatek is your trusted steel supply partner. Request a Renewable Energy Steel Quote Today and power your next clean energy project with Sonatek Steels."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Building the Future of Clean Energy with Reliable Steel"
        bodyText="The renewable energy industry depends on innovation, precision, and dependable infrastructure. At Sonatek Steels, we help manufacturers and project developers build the future of clean energy with premium-quality steel, responsive logistics, and precision processing. Whether you're manufacturing solar equipment, constructing solar infrastructure, or developing battery energy storage systems, Sonatek is your trusted steel supply partner. Request a Renewable Energy Steel Quote Today and power your next clean energy project with Sonatek Steels."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR RENEWABLE ENERGY"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Building the Future of Clean Energy with Reliable Steel"
        description="The renewable energy industry depends on innovation, precision, and dependable infrastructure. At Sonatek Steels, we help manufacturers and project developers build the future of clean energy with premium-quality steel, responsive logistics, and precision processing. Whether you're manufacturing solar equipment, constructing solar infrastructure, or developing battery energy storage systems, Sonatek is your trusted steel supply partner. Request a Renewable Energy Steel Quote Today and power your next clean energy project with Sonatek Steels."
        btnText="Request a Renewable Energy Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1920&q=80"
      />
    </div>
  );
}
