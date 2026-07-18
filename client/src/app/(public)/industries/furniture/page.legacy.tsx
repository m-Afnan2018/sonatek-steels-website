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
  { icon: "Layers", title: "Superior Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "CheckCircle2", title: "Excellent Powder Coating Performance", description: "Excellent Powder Coating Performance that supports demanding production requirements and long-term performance." },
  { icon: "ShieldCheck", title: "Strong Structural Support", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Clock", title: "Long Product Life", description: "Durable steel built for a long, reliable product life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for furniture manufacturing requiring smooth surface finish and precision fabrication \u2014 includes Office Furniture, Storage Cabinets, Lockers, Metal Shelving, and Modular Furniture." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, bending, punching, welding, and powder coating \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating, Accurate Dimensions, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for structural furniture frames, industrial storage systems, and heavy-duty furniture applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for furniture support structures, industrial racks, and engineering applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous furniture manufacturing and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to simplify production and improve manufacturing efficiency." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, and production requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your furniture application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility or fabrication unit." },
];

const APPLICATIONS_DATA = [
  { title: "Office Furniture", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Steel for office desks, workstations, filing cabinets, lockers, and office storage systems.", link: "/products" },
  { title: "Home Furniture", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Premium steel for wardrobes, tables, beds, cabinets, shelves, and modular furniture.", link: "/products" },
  { title: "Storage Systems", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Reliable steel solutions for industrial racks, shelving systems, storage cabinets, and warehouse furniture.", link: "/products" },
  { title: "Retail Fixtures & Display Units", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Steel for retail display systems, showroom fixtures, counters, and merchandising equipment.", link: "/products" },
  { title: "Institutional Furniture", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", description: "High-quality steel for schools, hospitals, laboratories, educational institutions, and public facilities.", link: "/products" },
  { title: "Custom Metal Furniture", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", description: "Steel for OEM manufacturers, fabrication companies, and custom furniture projects.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and premium finished furniture." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel reduces production delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries help manufacturers maintain production schedules and customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Reliable supply programs designed for recurring furniture manufacturing requirements." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces production time and improves manufacturing efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building lasting relationships through dependable supply, consistent quality, and responsive customer service." },
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
  { question: "Which steel products are best suited for furniture manufacturing?", answer: "Cold Rolled (CR) steel is ideal for furniture manufacturing because of its smooth surface finish, dimensional accuracy, and excellent powder coating performance. Hot Rolled (HR) steel is commonly used for structural frames and heavy-duty furniture." },
  { question: "Do you supply steel to furniture manufacturers?", answer: "Yes. We supply steel to office furniture manufacturers, modular furniture companies, storage system manufacturers, OEMs, and fabrication businesses across India." },
  { question: "Can Sonatek support bulk manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement solutions for continuous furniture production." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services based on manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for furniture manufacturers." },
];

export default function FurniturePage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="FURNITURE INDUSTRY"
          title="Premium Steel Solutions for Modern Furniture Manufacturing"
          description="The furniture industry demands steel that combines precision, durability, and an excellent surface finish. Whether manufacturing office furniture, home furniture, industrial storage systems, retail fixtures, or custom metal furniture, high-quality steel is essential for creating products that are strong, aesthetically appealing, and built to last. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to furniture manufacturers, OEMs, fabrication companies, storage system manufacturers, and industrial engineering businesses across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps manufacturers maintain consistent production while delivering superior-quality furniture products."
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
          ctaText="Request a Furniture Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Furniture", href: "/industries/furniture" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Furniture Industry"
        bodyText="Furniture manufacturing requires steel that is easy to fabricate, weld, bend, cut, and powder coat while maintaining excellent dimensional accuracy and surface quality. From office furniture and storage cabinets to modular furniture and industrial shelving, premium steel contributes to both product durability and visual appeal. Sonatek Steels supplies high-quality CR and HR steel products that help furniture manufacturers improve production efficiency, reduce material wastage, and achieve consistent manufacturing quality."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR FURNITURE?"
          subtitle="Modern furniture requires steel that delivers strength, precision, and long-lasting performance."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR FURNITURE STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for furniture production."
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
          title="FURNITURE APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Furniture Companies Choose Sonatek Steels"
        subtitle="Modern furniture requires steel that delivers strength, precision, and long-lasting performance."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our furniture steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving furniture customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Quality furniture begins with premium raw materials. At Sonatek Steels, we help furniture manufacturers improve production efficiency through dependable steel supply, precision processing, and responsive logistics. Whether you're producing office furniture, modular furniture, storage systems, or custom metal furniture, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request a Furniture Steel Quote Today and experience premium steel solutions designed for modern furniture manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Building Better Furniture with Reliable Steel"
        bodyText="Quality furniture begins with premium raw materials. At Sonatek Steels, we help furniture manufacturers improve production efficiency through dependable steel supply, precision processing, and responsive logistics. Whether you're producing office furniture, modular furniture, storage systems, or custom metal furniture, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request a Furniture Steel Quote Today and experience premium steel solutions designed for modern furniture manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR FURNITURE"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Building Better Furniture with Reliable Steel"
        description="Quality furniture begins with premium raw materials. At Sonatek Steels, we help furniture manufacturers improve production efficiency through dependable steel supply, precision processing, and responsive logistics. Whether you're producing office furniture, modular furniture, storage systems, or custom metal furniture, Sonatek is your trusted steel supply partner for consistent quality and reliable service. Request a Furniture Steel Quote Today and experience premium steel solutions designed for modern furniture manufacturing."
        btnText="Request a Furniture Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=1920&q=80"
      />
    </div>
  );
}
