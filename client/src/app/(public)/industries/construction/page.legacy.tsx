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
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
  { icon: "Gauge", title: "Efficient Project Execution", description: "Predictable material behaviour that keeps projects on schedule." },
  { icon: "DollarSign", title: "Cost-Effective Construction Solutions", description: "Reliable steel that helps control material and project costs." },
];

const SOLUTIONS_DATA = [
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Premium HR Coils suitable for structural fabrication, industrial construction, and heavy engineering applications \u2014 includes Structural Frameworks, Industrial Buildings, Fabricated Sections, Infrastructure Projects, and Heavy Structural Components." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets designed for fabrication, welding, bending, and structural construction \u2014 includes Excellent Strength, Reliable Weldability, Superior Durability, and Consistent Performance." },
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Precision steel coils for construction applications requiring better surface finish, dimensional accuracy, and fabrication quality." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Ideal for fabricated panels, roofing accessories, enclosures, partitions, and interior construction applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs designed to support large-scale construction projects and continuous material requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added processing services including slitting, cut-to-length, and custom steel processing to reduce project timelines and improve efficiency." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project requirements, specifications, and delivery schedule." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your construction application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and dispatch schedules are planned according to your project timeline." },
  { title: "Quality Inspection", description: "Every order is inspected to ensure consistent quality and compliance before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your construction site, fabrication unit, or warehouse." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Buildings", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Steel solutions for manufacturing plants, factories, warehouses, and industrial facilities.", link: "/products" },
  { title: "Commercial Construction", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Reliable steel for office buildings, shopping complexes, business parks, and commercial infrastructure.", link: "/products" },
  { title: "Warehouses & Storage Facilities", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "High-quality steel for warehouse structures, storage systems, and logistics infrastructure.", link: "/products" },
  { title: "Pre-Engineered Buildings (PEB)", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Steel products supporting modern prefabricated and pre-engineered building construction.", link: "/products" },
  { title: "Structural Fabrication", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Steel for fabricated beams, supports, frames, platforms, and structural assemblies.", link: "/products" },
  { title: "Infrastructure Projects", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Reliable steel solutions for bridges, transport facilities, utility structures, and public infrastructure developments.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality that supports safe, durable, and long-lasting construction projects." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps avoid project delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries ensure uninterrupted construction activities and better project planning." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dedicated supply solutions for contractors, developers, and infrastructure companies requiring large steel volumes." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing helps reduce on-site work and improves construction efficiency." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Building lasting relationships with construction companies through dependable supply and responsive customer service." },
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
  { question: "Which steel products are commonly used in construction?", answer: "Hot Rolled (HR) Coils and HR Sheets are widely used for structural frameworks and fabrication, while Cold Rolled (CR) products are preferred for applications requiring precision and better surface finish." },
  { question: "Do you supply steel for infrastructure projects?", answer: "Yes. We supply steel for commercial buildings, industrial facilities, warehouses, infrastructure developments, and EPC projects." },
  { question: "Can Sonatek handle large construction orders?", answer: "Absolutely. We specialize in bulk industrial steel supply with scheduled deliveries for large construction and infrastructure projects." },
  { question: "Do you provide processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing to meet project-specific requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable steel delivery across North India and Pan-India logistics support for construction companies and project sites." },
];

export default function ConstructionPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="CONSTRUCTION INDUSTRY"
          title="Building Stronger Structures with Reliable Steel Solutions"
          description="The construction industry relies on steel that delivers exceptional strength, durability, and consistency. Whether it's commercial buildings, industrial facilities, warehouses, infrastructure projects, or prefabricated structures, high-quality steel plays a vital role in ensuring structural integrity and long-term performance. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to construction companies, infrastructure developers, EPC contractors, fabrication units, and industrial builders across India. With ready stock, reliable logistics, and value-added processing services, Sonatek ensures your projects stay on schedule with dependable steel supply and consistent product quality."
          image="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80"
          ctaText="Request a Construction Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Construction", href: "/industries/construction" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Construction Industry"
        bodyText="Modern construction demands materials that combine structural strength, fabrication flexibility, and long-term reliability. Steel is one of the most essential materials used in commercial, industrial, and infrastructure development due to its versatility, durability, and performance. Sonatek Steels provides high-quality CR and HR steel products that support fabrication, structural manufacturing, industrial construction, and engineering applications. Whether you're working on a single project or managing multiple sites, we provide dependable steel solutions backed by responsive service and timely delivery."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR CONSTRUCTION?"
          subtitle="Construction professionals require steel that supports safe structures, efficient fabrication, and reliable performance under demanding conditions."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR CONSTRUCTION STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for construction production."
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
          title="CONSTRUCTION APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Construction Companies Choose Sonatek Steels"
        subtitle="Construction professionals require steel that supports safe structures, efficient fabrication, and reliable performance under demanding conditions."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our construction steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving construction customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Every successful construction project begins with dependable materials. At Sonatek Steels, we deliver premium steel products backed by reliable inventory, precision processing, and efficient logistics to help you complete projects on time and with confidence. Whether you're constructing industrial facilities, commercial buildings, warehouses, or infrastructure projects, Sonatek is your trusted partner for quality steel and dependable service. Request a Construction Steel Quote Today and build your next project with confidence."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Building the Future with Reliable Steel Solutions"
        bodyText="Every successful construction project begins with dependable materials. At Sonatek Steels, we deliver premium steel products backed by reliable inventory, precision processing, and efficient logistics to help you complete projects on time and with confidence. Whether you're constructing industrial facilities, commercial buildings, warehouses, or infrastructure projects, Sonatek is your trusted partner for quality steel and dependable service. Request a Construction Steel Quote Today and build your next project with confidence."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR CONSTRUCTION"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Building the Future with Reliable Steel Solutions"
        description="Every successful construction project begins with dependable materials. At Sonatek Steels, we deliver premium steel products backed by reliable inventory, precision processing, and efficient logistics to help you complete projects on time and with confidence. Whether you're constructing industrial facilities, commercial buildings, warehouses, or infrastructure projects, Sonatek is your trusted partner for quality steel and dependable service. Request a Construction Steel Quote Today and build your next project with confidence."
        btnText="Request a Construction Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1920&q=80"
      />
    </div>
  );
}
