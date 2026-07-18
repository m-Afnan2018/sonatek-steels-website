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
  { icon: "ShieldCheck", title: "High Structural Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "Zap", title: "Superior Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "CheckCircle2", title: "Reliable Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Settings2", title: "Smooth Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "Sparkles", title: "Excellent Surface Quality", description: "A clean, consistent surface finish suited to visible, precision-fabricated parts." },
  { icon: "CheckCircle2", title: "Long-Term Product Reliability", description: "Long-Term Product Reliability that supports demanding production requirements and long-term performance." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils ideal for precision fabrication and manufacturing applications requiring superior surface finish and dimensional accuracy \u2014 includes Electrical Enclosures, Machine Covers, Cabinets, Automotive Components, and Precision Fabrication." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, bending, punching, welding, and precision component manufacturing \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Paint & Powder Coating Performance, and Consistent Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils designed for heavy fabrication, structural assemblies, machinery manufacturing, and industrial applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for structural fabrication, industrial equipment, support frames, and engineering projects." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Dependable bulk supply solutions that support continuous production and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to reduce manufacturing time and improve productivity." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, and material requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your application." },
  { title: "Order Confirmation", description: "Inventory is allocated and supply schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality checks before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility or fabrication unit." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Equipment Manufacturing", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Steel for machinery, production equipment, industrial systems, and fabricated assemblies.", link: "/products" },
  { title: "Electrical Enclosures & Control Panels", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", description: "Precision CR steel for cabinets, switchboards, junction boxes, and electrical panel manufacturing.", link: "/products" },
  { title: "Storage Systems & Industrial Furniture", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Reliable steel for shelving systems, racks, cabinets, lockers, and industrial furniture.", link: "/products" },
  { title: "Machine Components", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Steel for machine frames, fabricated structures, covers, and precision assemblies.", link: "/products" },
  { title: "Automotive Components", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Steel used in fabricated automotive parts, brackets, reinforcements, and support structures.", link: "/products" },
  { title: "Custom Fabrication Projects", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "High-quality steel for OEM manufacturing, engineering projects, and custom industrial applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality that supports precision manufacturing and repeatable production processes." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate access to premium CR and HR steel products minimizes production downtime." },
  { icon: "Truck", title: "Fast Dispatch", description: "Quick order processing and reliable deliveries keep manufacturing schedules on track." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Long-term supply programs designed for OEMs and fabrication companies with recurring steel requirements." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces handling time and improves production efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build lasting relationships by delivering dependable products, responsive service, and reliable supply." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Stocked material ready to process without long lead times." },
  { icon: "Settings2", title: "Precision Steel Solutions", description: "Steel and processing built for demanding production requirements." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Wrench", title: "Custom Steel Processing", description: "Slitting, cut-to-length, and custom processing to reduce manufacturing time." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Reliable Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Dependable relationships built on reliable supply and service." },
];

const FAQS_DATA = [
  { question: "Which steel products are best suited for fabrication?", answer: "Cold Rolled (CR) steel is ideal for precision fabrication, electrical enclosures, and components requiring excellent surface finish, while Hot Rolled (HR) steel is commonly used for structural fabrication and heavy engineering applications." },
  { question: "Do you supply steel for OEM manufacturers?", answer: "Yes. We supply steel to OEMs, fabrication companies, industrial manufacturers, engineering firms, machinery manufacturers, and component manufacturers across India." },
  { question: "Can Sonatek support recurring production requirements?", answer: "Absolutely. We offer bulk steel supply, scheduled deliveries, and long-term procurement support for continuous manufacturing operations." },
  { question: "Do you provide steel processing services?", answer: "Yes. We provide slitting, cut-to-length, and custom steel processing services to meet your production requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for fabrication units and OEM manufacturers." },
];

export default function FabricatorsOemsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="FABRICATORS & OEMS INDUSTRY"
          title="Premium Steel Solutions for Fabricators & OEM Manufacturers"
          description="Fabricators and Original Equipment Manufacturers (OEMs) require steel that delivers precision, consistency, and dependable performance throughout the manufacturing process. Whether you're producing industrial equipment, machinery, electrical enclosures, storage systems, automotive components, or custom-engineered products, the quality of your steel directly impacts the quality of your final product. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to fabrication companies, OEM manufacturers, industrial engineering firms, and production facilities across India. With ready inventory, value-added processing, and reliable logistics, Sonatek helps businesses maintain uninterrupted production and meet demanding customer timelines."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
          ctaText="Request an OEM Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fabricators & OEMs", href: "/industries/fabricators-oems" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Fabricators & OEMs Industry"
        bodyText="Fabrication and OEM manufacturing require steel that is easy to process, dimensionally accurate, and consistent in quality. Manufacturers depend on materials that support cutting, bending, welding, forming, machining, and assembly while minimizing waste and production delays. Sonatek Steels provides dependable steel supply solutions that help fabricators and OEMs improve manufacturing efficiency, reduce procurement challenges, and maintain consistent product quality across every production cycle."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR FABRICATORS & OEMS?"
          subtitle="Modern fabrication requires materials capable of delivering strength, precision, and manufacturing flexibility."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR FABRICATORS & OEMS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for fabricators & oems production."
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
          title="FABRICATORS & OEMS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Fabricators & OEMs Companies Choose Sonatek Steels"
        subtitle="Modern fabrication requires materials capable of delivering strength, precision, and manufacturing flexibility."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our fabricators & oems steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving fabricators & oems customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Successful manufacturing begins with dependable raw materials. At Sonatek Steels, we help fabricators and OEMs streamline procurement with premium-quality steel, ready inventory, precision processing, and reliable logistics. Whether you're manufacturing machinery, industrial equipment, storage systems, electrical panels, or custom-engineered products, Sonatek is your trusted partner for consistent steel supply and long-term business success. Request an OEM Steel Quote Today and experience reliable steel solutions built for modern manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Empowering Fabricators & OEMs with Reliable Steel Supply"
        bodyText="Successful manufacturing begins with dependable raw materials. At Sonatek Steels, we help fabricators and OEMs streamline procurement with premium-quality steel, ready inventory, precision processing, and reliable logistics. Whether you're manufacturing machinery, industrial equipment, storage systems, electrical panels, or custom-engineered products, Sonatek is your trusted partner for consistent steel supply and long-term business success. Request an OEM Steel Quote Today and experience reliable steel solutions built for modern manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR FABRICATORS & OEMS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Empowering Fabricators & OEMs with Reliable Steel Supply"
        description="Successful manufacturing begins with dependable raw materials. At Sonatek Steels, we help fabricators and OEMs streamline procurement with premium-quality steel, ready inventory, precision processing, and reliable logistics. Whether you're manufacturing machinery, industrial equipment, storage systems, electrical panels, or custom-engineered products, Sonatek is your trusted partner for consistent steel supply and long-term business success. Request an OEM Steel Quote Today and experience reliable steel solutions built for modern manufacturing."
        btnText="Request an OEM Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />
    </div>
  );
}
