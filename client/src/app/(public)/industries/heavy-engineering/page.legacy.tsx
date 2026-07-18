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
  { icon: "ShieldCheck", title: "High Strength", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Zap", title: "Excellent Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "ShieldCheck", title: "Reliable Structural Performance", description: "Reliable mechanical strength for structural and load-bearing components." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "Settings2", title: "Superior Fabrication Quality", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "Ruler", title: "Better Dimensional Stability", description: "Consistent dimensions that hold up through demanding processing." },
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Clock", title: "Long-Term Durability", description: "Durable steel built to hold up over the long term." },
];

const SOLUTIONS_DATA = [
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Premium HR Coils designed for heavy-duty engineering applications, structural fabrication, and industrial machinery manufacturing \u2014 includes Machine Frames, Structural Components, Equipment Manufacturing, Heavy Fabrication, and Industrial Assemblies." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for fabrication, welding, bending, and industrial engineering projects \u2014 includes Excellent Structural Strength, Reliable Weldability, Durable Performance, and Consistent Material Quality." },
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Precision steel coils for engineering applications requiring tighter tolerances, smoother surface finish, and accurate dimensions." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Ideal for fabricated components, machine covers, precision equipment, and engineering products requiring excellent surface quality." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs that support continuous engineering production and large-scale industrial projects." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added processing services including slitting, cut-to-length, and custom steel processing based on project requirements." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your engineering application, product specifications, and project requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products for your manufacturing process." },
  { title: "Order Confirmation", description: "Inventory is allocated and delivery schedules are planned according to your project timeline." },
  { title: "Quality Inspection", description: "Every order undergoes quality checks to ensure consistent material performance before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to support uninterrupted engineering operations." },
];

const APPLICATIONS_DATA = [
  { title: "Industrial Machinery", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Steel for machine frames, production equipment, and heavy industrial systems.", link: "/products" },
  { title: "Fabricated Structures", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", description: "Reliable material for fabricated assemblies, structural supports, and engineered components.", link: "/products" },
  { title: "Manufacturing Equipment", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80", description: "Steel used in industrial production lines, conveyors, and specialized manufacturing systems.", link: "/products" },
  { title: "Material Handling Equipment", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Applications including storage systems, lifting equipment, and industrial handling structures.", link: "/products" },
  { title: "Process Plant Equipment", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Steel components used in industrial plants, processing facilities, and engineering infrastructure.", link: "/products" },
  { title: "Heavy Fabrication", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "High-quality steel for welding, bending, cutting, and structural fabrication projects.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality that supports demanding engineering applications and long-term performance." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate access to premium CR and HR steel products to reduce production delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Efficient order processing and timely deliveries to support project schedules." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring production and large engineering projects." },
  { icon: "Settings2", title: "Processing Solutions", description: "Customized steel processing services that reduce manufacturing time and improve productivity." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Dedicated support focused on building reliable relationships with engineering companies across India." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "High-Strength Engineering Steel", description: "Steel and processing built for demanding production requirements." },
  { icon: "Settings2", title: "Ready Stock Availability", description: "Stocked material ready to process without long lead times." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Wrench", title: "Custom Steel Processing", description: "Slitting, cut-to-length, and custom processing to reduce manufacturing time." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Reliable Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Dependable relationships built on reliable supply and service." },
];

const FAQS_DATA = [
  { question: "Which steel products are best suited for heavy engineering?", answer: "Hot Rolled (HR) Coils and HR Sheets are commonly used for structural fabrication, machinery, and industrial equipment, while Cold Rolled (CR) products are ideal for precision engineering applications." },
  { question: "Do you supply steel for industrial equipment manufacturers?", answer: "Yes. We supply premium steel to heavy engineering companies, OEMs, machinery manufacturers, fabrication units, and industrial equipment manufacturers." },
  { question: "Can Sonatek support large engineering projects?", answer: "Absolutely. We provide bulk steel supply, project-based procurement, and scheduled deliveries for engineering and infrastructure projects." },
  { question: "Do you offer steel processing services?", answer: "Yes. We provide value-added processing solutions including slitting, cut-to-length, and custom steel processing based on customer requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We support heavy engineering companies across North India and provide Pan-India delivery solutions for industrial customers." },
];

export default function HeavyEngineeringPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="HEAVY ENGINEERING INDUSTRY"
          title="Reliable Steel Solutions Built for Heavy Engineering Applications"
          description="Heavy engineering projects demand steel that delivers exceptional strength, durability, and consistent performance under demanding industrial conditions. From large machinery and industrial equipment to fabrication and structural applications, choosing the right steel is critical to maintaining quality, safety, and operational efficiency. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets for heavy engineering companies, equipment manufacturers, fabrication units, OEMs, and industrial projects across India. With ready stock, dependable logistics, and value-added processing services, Sonatek helps businesses maintain uninterrupted production and meet project deadlines with confidence."
          image="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80"
          ctaText="Request an Engineering Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to an Engineering Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Heavy Engineering", href: "/industries/heavy-engineering" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Heavy Engineering Industry"
        bodyText="Heavy engineering involves the manufacturing of machinery, industrial equipment, production systems, fabricated structures, and mechanical assemblies that require reliable, high-performance steel. Whether you're building industrial machines, manufacturing equipment, or fabricating structural components, our steel products are designed to support precision manufacturing, structural integrity, and long-term durability. Sonatek provides dependable steel supply solutions that help engineering businesses reduce procurement challenges and improve production efficiency."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR HEAVY ENGINEERING?"
          subtitle="Engineering applications require steel capable of withstanding demanding manufacturing processes and long-term operational stress."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR HEAVY ENGINEERING STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for heavy engineering production."
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
          title="HEAVY ENGINEERING APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Heavy Engineering Companies Choose Sonatek Steels"
        subtitle="Engineering applications require steel capable of withstanding demanding manufacturing processes and long-term operational stress."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our heavy engineering steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving heavy engineering customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Heavy engineering projects require more than quality steel\u2014they require a dependable supply partner who understands industrial manufacturing. At Sonatek Steels, we combine premium products, ready inventory, precision processing, and reliable logistics to help engineering companies deliver stronger, safer, and more efficient solutions. Request an Engineering Steel Quote Today and partner with Sonatek Steels for dependable steel solutions built for heavy industry."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Engineering Strength Begins with Reliable Steel"
        bodyText="Heavy engineering projects require more than quality steel\u2014they require a dependable supply partner who understands industrial manufacturing. At Sonatek Steels, we combine premium products, ready inventory, precision processing, and reliable logistics to help engineering companies deliver stronger, safer, and more efficient solutions. Request an Engineering Steel Quote Today and partner with Sonatek Steels for dependable steel solutions built for heavy industry."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR HEAVY ENGINEERING"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Engineering Strength Begins with Reliable Steel"
        description="Heavy engineering projects require more than quality steel\u2014they require a dependable supply partner who understands industrial manufacturing. At Sonatek Steels, we combine premium products, ready inventory, precision processing, and reliable logistics to help engineering companies deliver stronger, safer, and more efficient solutions. Request an Engineering Steel Quote Today and partner with Sonatek Steels for dependable steel solutions built for heavy industry."
        btnText="Request an Engineering Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to an Engineering Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
      />
    </div>
  );
}
