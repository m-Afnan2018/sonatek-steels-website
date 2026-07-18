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
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision machinery manufacturing requiring superior surface finish and dimensional accuracy \u2014 includes Machine Covers, Equipment Panels, Precision Components, Industrial Cabinets, and Engineering Assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, CNC punching, bending, fabrication, welding, machining, and powder coating \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Fabrication Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for machine frames, industrial equipment, heavy engineering, structural fabrication, and production machinery." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for machinery bases, support structures, fabrication projects, and heavy industrial applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous machinery manufacturing, recurring procurement, and industrial production requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency, reduce waste, and optimize production." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your machinery specifications, manufacturing process, production schedules, and material requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your machinery manufacturing application." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure dimensional accuracy, consistent quality, and dependable performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, engineering workshop, production plant, or industrial project." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Machinery", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Steel for machine frames, production equipment, fabrication systems, industrial tools, and mechanical assemblies.", link: "/products" },
  { title: "Manufacturing Equipment", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Premium steel for factory equipment, automation systems, production lines, and industrial manufacturing solutions.", link: "/products" },
  { title: "Heavy Engineering Equipment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Reliable steel for engineering machinery, fabrication equipment, industrial plants, and processing systems.", link: "/products" },
  { title: "Agricultural & Construction Machinery", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Steel for agricultural equipment, construction machinery, earthmoving equipment, and industrial vehicles.", link: "/products" },
  { title: "Material Handling Equipment", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "High-quality steel for conveyors, lifting equipment, industrial storage systems, and warehouse handling machinery.", link: "/products" },
  { title: "Custom Industrial Machinery", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Steel for OEM manufacturers, engineering companies, and businesses producing specialized industrial equipment.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision engineering, reliable equipment manufacturing, and improved product performance." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps eliminate production delays and ensures uninterrupted manufacturing." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help machinery manufacturers maintain production schedules and meet customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring manufacturing operations and large industrial projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces manufacturing lead times, improves efficiency, and minimizes material wastage." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build lasting relationships through dependable supply, responsive customer service, technical expertise, and consistent product quality." },
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
  { question: "Which steel products are best suited for machinery manufacturing?", answer: "Cold Rolled (CR) steel is ideal for precision components, machine covers, control panels, and engineered parts requiring superior surface finish. Hot Rolled (HR) steel is preferred for machine frames, heavy-duty equipment, structural assemblies, and industrial engineering applications." },
  { question: "Do you supply steel to machinery manufacturers?", answer: "Yes. We supply steel to industrial machinery manufacturers, OEMs, engineering companies, fabrication businesses, automation equipment manufacturers, heavy engineering companies, and industrial production facilities across India." },
  { question: "Can Sonatek support bulk manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for machinery manufacturers." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to help manufacturers improve production efficiency and reduce material waste." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for machinery manufacturers, engineering companies, and industrial production facilities." },
];

export default function WorkingMachineryPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="WORKING MACHINERY INDUSTRY"
          title="Reliable Steel Solutions for Working Machinery Manufacturing"
          description="Working machinery is at the heart of every industrial operation, powering manufacturing plants, production lines, construction projects, processing facilities, and engineering industries. From machine frames and equipment housings to fabricated assemblies, structural supports, and industrial systems, high-quality steel is essential for building durable, reliable, and high-performance machinery. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to machinery manufacturers, industrial equipment companies, OEMs, fabrication businesses, engineering firms, automation companies, and heavy industrial manufacturers across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps machinery manufacturers maintain efficient production, reduce downtime, and deliver reliable industrial equipment."
          image="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80"
          ctaText="Request a Machinery Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Working Machinery", href: "/industries/working-machinery" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Working Machinery Industry"
        bodyText="Manufacturing industrial machinery requires steel with superior strength, dimensional accuracy, excellent weldability, and reliable fabrication characteristics. Whether producing machine frames, production equipment, automation systems, processing machines, industrial tools, or heavy engineering equipment, manufacturers require premium steel that delivers consistent performance. Sonatek Steels provides dependable steel supply solutions that help machinery manufacturers improve operational efficiency, maintain production quality, and support long-term manufacturing growth."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR WORKING MACHINERY?"
          subtitle="Industrial machinery demands steel capable of withstanding continuous operation, heavy loads, and demanding industrial environments."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR WORKING MACHINERY STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for working machinery production."
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
          title="WORKING MACHINERY APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Working Machinery Companies Choose Sonatek Steels"
        subtitle="Industrial machinery demands steel capable of withstanding continuous operation, heavy loads, and demanding industrial environments."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our working machinery steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving working machinery customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Every reliable machine starts with dependable raw materials. At Sonatek Steels, we help machinery manufacturers improve productivity through premium-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing industrial machinery, production equipment, automation systems, construction machinery, agricultural equipment, or customized engineering solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Machinery Steel Quote Today and experience premium steel solutions engineered for the modern machinery manufacturing industry."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Powering Industrial Machinery with Reliable Steel"
        bodyText="Every reliable machine starts with dependable raw materials. At Sonatek Steels, we help machinery manufacturers improve productivity through premium-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing industrial machinery, production equipment, automation systems, construction machinery, agricultural equipment, or customized engineering solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Machinery Steel Quote Today and experience premium steel solutions engineered for the modern machinery manufacturing industry."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR WORKING MACHINERY"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Powering Industrial Machinery with Reliable Steel"
        description="Every reliable machine starts with dependable raw materials. At Sonatek Steels, we help machinery manufacturers improve productivity through premium-quality steel, precision processing, ready inventory, and dependable logistics. Whether you're manufacturing industrial machinery, production equipment, automation systems, construction machinery, agricultural equipment, or customized engineering solutions, Sonatek is your trusted steel supply partner for quality, consistency, and long-term business growth. Request a Machinery Steel Quote Today and experience premium steel solutions engineered for the modern machinery manufacturing industry."
        btnText="Request a Machinery Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
      />
    </div>
  );
}
