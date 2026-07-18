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
  { icon: "CheckCircle2", title: "Superior Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Layers", title: "Excellent Formability", description: "Steel that shapes cleanly under cutting, bending, and forming operations." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "CheckCircle2", title: "Smooth Powder Coating Performance", description: "Smooth Powder Coating Performance that supports demanding production requirements and long-term performance." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "Settings2", title: "High Manufacturing Precision", description: "Steel and processing built for high-precision production." },
  { icon: "Clock", title: "Long-Term Durability", description: "Durable steel built to hold up over the long term." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision electrical panels, switchgear enclosures, cabinets, and industrial electrical equipment \u2014 includes Power Distribution Panels, Control Panels, Electrical Cabinets, Junction Boxes, and Switchgear Enclosures." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, CNC punching, bending, fabrication, and powder coating applications \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating Quality, Accurate Dimensions, and Consistent Material Performance." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for heavy-duty industrial electrical structures, equipment bases, support frames, and fabrication projects." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for equipment supports, industrial structures, heavy fabrication, and engineering applications." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous manufacturing and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing productivity." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, and production requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality inspection before dispatch to ensure consistency." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility or fabrication unit." },
];

const APPLICATIONS_DATA = [
  { title: "Power Distribution Panels", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Steel for LT panels, HT panels, PCC panels, MCC panels, and industrial power distribution systems.", link: "/products" },
  { title: "Control Panels", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Precision steel for PLC panels, automation panels, instrumentation panels, and industrial control systems.", link: "/products" },
  { title: "Electrical Cabinets", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "High-quality steel used in industrial electrical cabinets, control enclosures, and equipment housings.", link: "/products" },
  { title: "Switchgear Enclosures", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Reliable steel solutions for switchgear panels, electrical safety enclosures, and protection systems.", link: "/products" },
  { title: "Junction Boxes & Terminal Enclosures", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Steel for fabricated electrical boxes, utility enclosures, and cable management systems.", link: "/products" },
  { title: "Industrial Electrical Equipment", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Premium steel for OEM electrical products, custom electrical enclosures, and engineering applications.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and premium finished products." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps reduce production delays." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries keep manufacturing schedules on track and improve customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable supply solutions for recurring production and long-term manufacturing requirements." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing helps reduce production time and improve fabrication efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build lasting partnerships through dependable supply, responsive support, and consistent product quality." },
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
  { question: "Which steel products are best for electrical panel manufacturing?", answer: "Cold Rolled (CR) steel is the preferred choice for electrical panels, cabinets, switchgear enclosures, and control panels due to its excellent surface finish, dimensional accuracy, and superior fabrication properties." },
  { question: "Do you supply steel to electrical panel manufacturers?", answer: "Yes. We supply steel to electrical panel manufacturers, enclosure manufacturers, switchgear companies, OEMs, and industrial fabrication businesses." },
  { question: "Can Sonatek support recurring manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for continuous production." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services based on manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for electrical equipment manufacturers." },
];

export default function ElectricalPanelPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="ELECTRICAL PANEL INDUSTRY"
          title="Precision Steel Solutions for Electrical Panel Manufacturing"
          description="Electrical panels require steel that delivers excellent dimensional accuracy, smooth surface finish, and reliable fabrication performance. From power distribution panels and control panels to switchgear enclosures and industrial electrical cabinets, manufacturers rely on premium steel to ensure durability, precision, and long-term performance. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to electrical panel manufacturers, enclosure manufacturers, switchgear companies, OEMs, fabrication units, and industrial engineering businesses across India. With ready inventory, value-added processing services, and dependable logistics, Sonatek helps manufacturers maintain consistent production while meeting demanding delivery schedules."
          image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
          ctaText="Request an Electrical Panel Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Electrical Panel", href: "/industries/electrical-panel" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Electrical Panel Industry"
        bodyText="Electrical panel manufacturing requires steel that supports precision fabrication, laser cutting, punching, bending, welding, and powder coating. High-quality steel ensures excellent dimensional consistency, superior finish, and long-lasting performance for finished electrical products. Sonatek Steels provides dependable steel supply solutions that help electrical equipment manufacturers improve production efficiency, reduce material wastage, and maintain consistent product quality."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR ELECTRICAL PANEL?"
          subtitle="Electrical enclosures and panel systems require steel that offers precision, consistency, and superior finishing characteristics."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR ELECTRICAL PANEL STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for electrical panel production."
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
          title="ELECTRICAL PANEL APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Electrical Panel Companies Choose Sonatek Steels"
        subtitle="Electrical enclosures and panel systems require steel that offers precision, consistency, and superior finishing characteristics."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our electrical panel steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving electrical panel customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="Electrical products demand precision, quality, and consistency. At Sonatek Steels, we provide premium steel products backed by dependable inventory, precision processing, and efficient logistics to help manufacturers maintain high production standards and meet customer expectations. Whether you're manufacturing electrical panels, switchgear systems, industrial cabinets, or custom enclosures, Sonatek is your trusted steel supply partner. Request an Electrical Panel Steel Quote Today and experience dependable steel solutions built for modern electrical manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Powering Electrical Manufacturing with Reliable Steel"
        bodyText="Electrical products demand precision, quality, and consistency. At Sonatek Steels, we provide premium steel products backed by dependable inventory, precision processing, and efficient logistics to help manufacturers maintain high production standards and meet customer expectations. Whether you're manufacturing electrical panels, switchgear systems, industrial cabinets, or custom enclosures, Sonatek is your trusted steel supply partner. Request an Electrical Panel Steel Quote Today and experience dependable steel solutions built for modern electrical manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR ELECTRICAL PANEL"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Powering Electrical Manufacturing with Reliable Steel"
        description="Electrical products demand precision, quality, and consistency. At Sonatek Steels, we provide premium steel products backed by dependable inventory, precision processing, and efficient logistics to help manufacturers maintain high production standards and meet customer expectations. Whether you're manufacturing electrical panels, switchgear systems, industrial cabinets, or custom enclosures, Sonatek is your trusted steel supply partner. Request an Electrical Panel Steel Quote Today and experience dependable steel solutions built for modern electrical manufacturing."
        btnText="Request an Electrical Panel Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
      />
    </div>
  );
}
