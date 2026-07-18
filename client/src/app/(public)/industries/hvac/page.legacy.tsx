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
  { icon: "CheckCircle2", title: "Strong Structural Integrity", description: "Strong Structural Integrity that supports demanding production requirements and long-term performance." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for HVAC equipment requiring superior surface finish and precision fabrication \u2014 includes Air Handling Units (AHUs), HVAC Cabinets, Ventilation Equipment, Indoor Units, and Industrial Cooling Systems." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "Precision steel sheets suitable for laser cutting, punching, bending, fabrication, and powder coating \u2014 includes Smooth Surface Finish, Excellent Paint & Powder Coating, Accurate Dimensions, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for equipment frames, support structures, heavy-duty HVAC assemblies, and industrial engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for base frames, structural supports, equipment platforms, and fabrication projects." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous HVAC equipment manufacturing and recurring procurement requirements." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to simplify manufacturing and improve production efficiency." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, and production requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your HVAC application." },
  { title: "Order Confirmation", description: "Inventory is allocated, and delivery schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes strict quality inspection before dispatch to ensure consistent material performance." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility or fabrication unit." },
];

const APPLICATIONS_DATA = [
  { title: "Air Handling Units (AHUs)", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", description: "Steel for AHU cabinets, structural frames, access panels, and equipment housings.", link: "/products" },
  { title: "HVAC Ducting Systems", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", description: "Premium steel for duct fabrication, ventilation channels, and air distribution systems.", link: "/products" },
  { title: "Ventilation Equipment", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Reliable steel solutions for industrial ventilation units, exhaust systems, and air circulation equipment.", link: "/products" },
  { title: "Chillers & Cooling Equipment", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Steel for chiller cabinets, cooling equipment housings, and fabricated support structures.", link: "/products" },
  { title: "Commercial HVAC Systems", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "High-quality steel used in commercial air conditioning systems, rooftop units, and packaged HVAC equipment.", link: "/products" },
  { title: "Custom HVAC Fabrication", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Steel for OEM manufacturers, engineering companies, and customized HVAC equipment.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality supports precision manufacturing and long-lasting HVAC products." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel helps reduce manufacturing downtime." },
  { icon: "Truck", title: "Fast Dispatch", description: "Timely deliveries keep production schedules on track and improve customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Reliable supply programs designed for recurring HVAC manufacturing requirements." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces production time and improves fabrication efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "Building trusted partnerships through dependable supply, responsive service, and consistent quality." },
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
  { question: "Which steel products are best suited for HVAC manufacturing?", answer: "Cold Rolled (CR) steel is the preferred choice for HVAC equipment because of its smooth surface finish, dimensional accuracy, and excellent fabrication and powder coating properties. Hot Rolled (HR) steel is commonly used for equipment frames and structural supports." },
  { question: "Do you supply steel to HVAC equipment manufacturers?", answer: "Yes. We supply steel to HVAC manufacturers, ducting fabricators, ventilation equipment manufacturers, OEMs, engineering companies, and industrial fabrication businesses." },
  { question: "Can Sonatek support recurring manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, and long-term procurement support for continuous HVAC production." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services based on manufacturing requirements." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for HVAC equipment manufacturers." },
];

export default function HvacPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="HVAC INDUSTRY"
          title="Precision Steel Solutions for HVAC Manufacturing"
          description="The HVAC (Heating, Ventilation & Air Conditioning) industry depends on high-quality steel to manufacture durable, energy-efficient, and precision-engineered equipment. From air handling units and ducting systems to ventilation equipment, electrical enclosures, and cooling systems, premium steel plays a vital role in ensuring product performance and long service life. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to HVAC equipment manufacturers, OEMs, ducting fabricators, ventilation system manufacturers, engineering companies, and industrial fabrication businesses across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps HVAC manufacturers maintain uninterrupted production while meeting demanding project timelines."
          image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
          ctaText="Request an HVAC Steel Quote"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to an HVAC Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "HVAC", href: "/industries/hvac" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the HVAC Industry"
        bodyText="HVAC equipment manufacturing requires steel that offers excellent dimensional accuracy, superior formability, and outstanding surface finish. Manufacturers depend on materials that support laser cutting, bending, punching, welding, and powder coating while maintaining consistent quality throughout the production process. Sonatek Steels provides dependable steel supply solutions that help HVAC manufacturers improve production efficiency, reduce material wastage, and consistently produce high-performance equipment."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR HVAC?"
          subtitle="Modern HVAC systems require steel that combines precision manufacturing with long-term durability."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR HVAC STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for hvac production."
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
          title="HVAC APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why HVAC Companies Choose Sonatek Steels"
        subtitle="Modern HVAC systems require steel that combines precision manufacturing with long-term durability."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our hvac steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving hvac customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="High-performance HVAC systems begin with premium raw materials. At Sonatek Steels, we provide reliable steel solutions backed by ready inventory, precision processing, and efficient logistics to help manufacturers produce world-class HVAC equipment. Whether you're manufacturing air handling units, ventilation systems, ducting, or commercial cooling equipment, Sonatek is your trusted steel supply partner. Request an HVAC Steel Quote Today and experience dependable steel solutions built for modern HVAC manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Powering HVAC Manufacturing with Reliable Steel"
        bodyText="High-performance HVAC systems begin with premium raw materials. At Sonatek Steels, we provide reliable steel solutions backed by ready inventory, precision processing, and efficient logistics to help manufacturers produce world-class HVAC equipment. Whether you're manufacturing air handling units, ventilation systems, ducting, or commercial cooling equipment, Sonatek is your trusted steel supply partner. Request an HVAC Steel Quote Today and experience dependable steel solutions built for modern HVAC manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR HVAC"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Powering HVAC Manufacturing with Reliable Steel"
        description="High-performance HVAC systems begin with premium raw materials. At Sonatek Steels, we provide reliable steel solutions backed by ready inventory, precision processing, and efficient logistics to help manufacturers produce world-class HVAC equipment. Whether you're manufacturing air handling units, ventilation systems, ducting, or commercial cooling equipment, Sonatek is your trusted steel supply partner. Request an HVAC Steel Quote Today and experience dependable steel solutions built for modern HVAC manufacturing."
        btnText="Request an HVAC Steel Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to an HVAC Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
      />
    </div>
  );
}
