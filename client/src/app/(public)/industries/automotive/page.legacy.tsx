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
  { icon: "Sparkles", title: "Excellent Surface Quality", description: "A clean, consistent surface finish suited to visible and paint-ready automotive parts." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet for predictable stamping and forming." },
  { icon: "Layers", title: "Superior Formability", description: "Steel that shapes cleanly under high-speed press and stamping operations." },
  { icon: "ShieldCheck", title: "High Strength", description: "Reliable mechanical strength for structural and safety-critical components." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across body, chassis, and structural assemblies." },
  { icon: "CheckCircle2", title: "Better Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues on the production line." },
  { icon: "Settings2", title: "Smooth Fabrication", description: "Steel that processes cleanly through cutting, bending, and forming operations." },
  { icon: "Gauge", title: "Consistent Production Performance", description: "Predictable material behaviour that supports high-speed production environments." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision, excellent surface finish, and superior forming — ideal for body panels, automotive brackets, reinforcement parts, interior components, and structural assemblies." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for stamping, fabrication, and bending, with a smooth surface finish, high dimensional accuracy, excellent paint and coating performance, and consistent quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "High-strength steel for structural automotive applications requiring durability and reliable performance." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "Suitable for heavy-duty automotive parts, chassis components, fabrication, and structural assemblies." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk supply programs for automotive manufacturers requiring uninterrupted steel availability and scheduled deliveries." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added processing solutions that help deliver steel that's ready for your production requirements." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "Our team understands your product specifications, production requirements, and delivery schedule." },
  { title: "Product Selection", description: "Choose the right CR or HR steel product based on your application and manufacturing needs." },
  { title: "Order Confirmation", description: "Inventory is allocated and supply schedules are planned according to your requirements." },
  { title: "Quality Inspection", description: "Each order is checked to ensure consistent quality before dispatch." },
  { title: "Delivery", description: "Steel is delivered safely and on time to support uninterrupted manufacturing operations." },
];

const APPLICATIONS_DATA = [
  { title: "Vehicle Body Panels", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", description: "Steel with excellent formability and surface finish for exterior and interior vehicle panels.", link: "/products" },
  { title: "Chassis Components", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "High-strength steel for structural support and vehicle framework.", link: "/products" },
  { title: "Automotive Brackets", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", description: "Precision steel for mounting brackets, reinforcement parts, and support structures.", link: "/products" },
  { title: "Seating Systems", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Steel components used in automotive seating assemblies and structural frames.", link: "/products" },
  { title: "Industrial Vehicle Components", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", description: "Reliable steel for commercial vehicles, transport equipment, and heavy-duty automotive applications.", link: "/industries/working-machinery" },
  { title: "Electric Vehicle (EV) Components", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Steel solutions supporting the growing electric vehicle manufacturing industry.", link: "/products" },
];

const WHY_MANUFACTURERS_CHOOSE_DATA = [
  { icon: "BadgeCheck", title: "Consistent Product Quality", description: "Reliable steel with uniform dimensions and dependable performance." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Fast access to premium CR and HR steel products for uninterrupted production." },
  { icon: "Truck", title: "Reliable Deliveries", description: "Timely dispatches help manufacturers meet production schedules and customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Long-term supply solutions designed for automotive manufacturers and OEMs." },
  { icon: "Headset", title: "Customer-Focused Service", description: "Dedicated support from enquiry to delivery for a smooth procurement experience." },
  { icon: "Handshake", title: "Long-Term Supply Partnerships", description: "Building dependable relationships with manufacturers through reliable supply and responsive service." },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Warehouse", title: "Reliable Inventory", description: "Stocked material ready to process without long lead times." },
  { icon: "Zap", title: "Fast Dispatch", description: "Streamlined order-to-dispatch turnaround." },
  { icon: "Truck", title: "Bulk Industrial Supply", description: "High-tonnage supply programs for uninterrupted production." },
  { icon: "Settings2", title: "Value-Added Processing Support", description: "Processing solutions that deliver production-ready steel." },
  { icon: "Globe", title: "Pan-India Delivery", description: "Coordinated dispatch and delivery across the country." },
  { icon: "Headset", title: "Dedicated Customer Assistance", description: "A responsive team throughout your order and delivery cycle." },
  { icon: "BadgeCheck", title: "Consistent Quality Standards", description: "Every order checked against the same quality benchmark." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Dependable relationships built on reliable supply and service." },
  { icon: "Award", title: "Trusted Industrial Supply Partner", description: "A proven partner for India's automotive manufacturing industry." },
];

const FAQS_DATA = [
  { question: "Which steel products are commonly used in the automotive industry?", answer: "Cold Rolled (CR) steel is commonly used for body panels and precision components, while Hot Rolled (HR) steel is preferred for structural and heavy-duty applications." },
  { question: "Do you supply steel for OEM manufacturers?", answer: "Yes. We support OEMs, Tier-1 suppliers, component manufacturers, and industrial fabrication companies." },
  { question: "Can Sonatek handle recurring bulk orders?", answer: "Absolutely. We provide scheduled supply programs and long-term procurement support for automotive manufacturers." },
  { question: "Do you offer steel processing services?", answer: "Yes. We also provide value-added processing solutions based on customer requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We support automotive manufacturers across North India and provide Pan-India supply solutions." },
];

export default function AutomotivePage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="AUTOMOTIVE INDUSTRY"
          title="Premium Steel Solutions That Drive Automotive Manufacturing"
          description="The automotive industry demands precision, consistency, and uncompromising quality. Every component, from structural assemblies to body panels, depends on steel that delivers exceptional strength, dimensional accuracy, and reliable performance. Sonatek Steels supplies premium Cold Rolled (CR) Coils, CR Sheets, Hot Rolled (HR) Coils, and HR Sheets that support manufacturers, OEMs, Tier-1 suppliers, component manufacturers, and fabrication units across the automotive industry."
          image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85"
          ctaText="Request an Automotive Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to an Automotive Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Automotive", href: "/industries/automotive" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Automotive Industry"
        bodyText="Automotive manufacturing requires steel that offers high precision, excellent formability, consistent thickness, and dependable mechanical performance. From passenger vehicles and commercial vehicles to electric vehicles (EVs) and industrial transport equipment, steel remains one of the most important raw materials in modern automotive production. At Sonatek Steels, we provide high-quality steel products that help manufacturers improve production efficiency, reduce rejection rates, and achieve superior finished products."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR AUTOMOTIVE MANUFACTURING?"
          subtitle="Automotive manufacturers require materials capable of meeting strict quality standards while supporting high-speed production environments. Our steel products provide:"
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR AUTOMOTIVE STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for automotive production."
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
          title="AUTOMOTIVE APPLICATIONS"
          subtitle="Our steel products are widely used in the manufacturing of:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Automotive Manufacturers Choose Sonatek Steels"
        subtitle="We combine consistent product quality, ready inventory, and dedicated service to support automotive manufacturers at every stage of production."
        points={WHY_MANUFACTURERS_CHOOSE_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our automotive steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets — giving automotive manufacturers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Sonatek Steels is committed to supporting India's automotive industry with dependable steel solutions that combine quality, reliability, and service excellence. From precision Cold Rolled products to durable Hot Rolled steel, we help manufacturers streamline procurement, improve production efficiency, and maintain consistent product quality."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Driving Manufacturing Excellence with Premium Steel"
        bodyText="The automotive industry demands suppliers who understand quality, consistency, and reliability. At Sonatek Steels, we work closely with manufacturers to deliver steel solutions that support efficient production, reduce procurement challenges, and contribute to long-term manufacturing success."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR AUTOMOTIVE MANUFACTURERS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Request an Automotive Steel Quote Today"
        description="Discover why manufacturers trust Sonatek Steels as their reliable steel supply partner — from precision CR products to durable HR steel, backed by ready stock, fast dispatch, and dedicated support."
        btnText="Request an Automotive Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to an Automotive Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
    </div>
  );
}
