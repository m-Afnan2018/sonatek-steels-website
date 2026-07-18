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
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision warehouse equipment, storage systems, and logistics applications requiring superior surface finish \u2014 includes Warehouse Storage Systems, Industrial Shelving, Storage Cabinets, Material Handling Equipment, and Logistics Equipment." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, bending, punching, fabrication, and powder coating \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating Performance, Accurate Dimensions, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for warehouse structures, heavy-duty storage systems, equipment frames, and logistics infrastructure." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for racking structures, loading platforms, warehouse frameworks, and engineering applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting warehouse projects, logistics infrastructure, and recurring manufacturing requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency and reduce production time." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your project specifications, manufacturing process, and delivery schedule." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your warehousing or logistics application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and dispatch schedules are planned according to your production or project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality inspection before dispatch to ensure reliable material performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, warehouse project, or construction site." },
];

const APPLICATIONS_DATA = [
  { title: "Warehouse Racking Systems", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Steel for pallet racks, heavy-duty storage systems, industrial shelving, and warehouse storage solutions.", link: "/products" },
  { title: "Material Handling Equipment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Premium steel for conveyors, trolleys, lifting equipment, and warehouse handling systems.", link: "/products" },
  { title: "Industrial Storage Cabinets", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Reliable steel for storage lockers, cabinets, workstations, and warehouse furniture.", link: "/products" },
  { title: "Logistics Infrastructure", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Steel for loading docks, distribution centers, warehouse platforms, and logistics support structures.", link: "/products" },
  { title: "Distribution & Fulfillment Centers", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "High-quality steel for automated storage systems, fulfillment facilities, and modern warehouse infrastructure.", link: "/products" },
  { title: "Custom Warehouse Fabrication", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Steel for OEM manufacturers, fabrication companies, and customized logistics equipment.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports durable warehouse infrastructure and long-lasting logistics equipment." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel minimizes manufacturing and project delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries keep production schedules and infrastructure projects on track." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring manufacturing and large warehouse infrastructure projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing improves fabrication efficiency and reduces manufacturing costs." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building trusted partnerships through dependable supply, responsive support, and consistent product quality." },
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
  { question: "Which steel products are commonly used in warehousing and logistics infrastructure?", answer: "Cold Rolled (CR) steel is widely used for warehouse storage systems, shelving, cabinets, and logistics equipment requiring superior surface finish, while Hot Rolled (HR) steel is ideal for warehouse structures, heavy-duty racking systems, and industrial frameworks." },
  { question: "Do you supply steel to warehouse infrastructure manufacturers?", answer: "Yes. We supply steel to warehouse equipment manufacturers, storage system manufacturers, logistics companies, OEMs, engineering contractors, and fabrication businesses across India." },
  { question: "Can Sonatek support large warehouse projects?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for warehouse infrastructure projects and continuous manufacturing operations." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services tailored to project and manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for warehousing and logistics businesses." },
];

export default function WarehousingLogisticsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="WAREHOUSING & LOGISTICS INDUSTRY"
          title="Reliable Steel Solutions for Warehousing & Logistics Infrastructure"
          description="The warehousing and logistics industry forms the backbone of modern supply chains, requiring durable and precision-engineered steel for storage systems, distribution centers, logistics hubs, and material handling equipment. From warehouse racking systems and shelving units to conveyors, loading docks, and industrial storage solutions, premium-quality steel ensures long-term strength, operational efficiency, and safety. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to warehouse infrastructure companies, logistics equipment manufacturers, storage system manufacturers, OEMs, fabrication companies, and engineering businesses across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps businesses complete warehouse projects efficiently while ensuring uninterrupted manufacturing operations."
          image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
          ctaText="Request a Warehousing Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Warehousing & Logistics", href: "/industries/warehousing-logistics" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Warehousing & Logistics Industry"
        bodyText="Warehousing and logistics infrastructure requires steel that offers structural strength, precision fabrication, and long-term durability. Whether manufacturing warehouse racking systems, industrial shelving, material handling equipment, storage cabinets, or logistics infrastructure, high-quality steel improves reliability, operational efficiency, and product longevity. Sonatek Steels provides dependable steel supply solutions that support warehouse equipment manufacturers, logistics companies, OEMs, and engineering contractors with premium materials, ready inventory, and reliable delivery."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR WAREHOUSING & LOGISTICS?"
          subtitle="Warehouse infrastructure and logistics equipment demand steel that performs reliably under heavy operational loads."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR WAREHOUSING & LOGISTICS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for warehousing & logistics production."
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
          title="WAREHOUSING & LOGISTICS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Warehousing & Logistics Companies Choose Sonatek Steels"
        subtitle="Warehouse infrastructure and logistics equipment demand steel that performs reliably under heavy operational loads."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our warehousing & logistics steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving warehousing & logistics customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Efficient warehouses and logistics infrastructure depend on durable materials and reliable supply chains. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help businesses build modern storage and distribution infrastructure with confidence. Whether you're developing warehouse facilities, manufacturing storage systems, or fabricating logistics equipment, Sonatek is your trusted steel supply partner. Request a Warehousing Steel Quote Today and build stronger logistics infrastructure with Sonatek Steels."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Strengthening Warehousing & Logistics with Reliable Steel"
        bodyText="Efficient warehouses and logistics infrastructure depend on durable materials and reliable supply chains. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help businesses build modern storage and distribution infrastructure with confidence. Whether you're developing warehouse facilities, manufacturing storage systems, or fabricating logistics equipment, Sonatek is your trusted steel supply partner. Request a Warehousing Steel Quote Today and build stronger logistics infrastructure with Sonatek Steels."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR WAREHOUSING & LOGISTICS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Strengthening Warehousing & Logistics with Reliable Steel"
        description="Efficient warehouses and logistics infrastructure depend on durable materials and reliable supply chains. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help businesses build modern storage and distribution infrastructure with confidence. Whether you're developing warehouse facilities, manufacturing storage systems, or fabricating logistics equipment, Sonatek is your trusted steel supply partner. Request a Warehousing Steel Quote Today and build stronger logistics infrastructure with Sonatek Steels."
        btnText="Request a Warehousing Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80"
      />
    </div>
  );
}
