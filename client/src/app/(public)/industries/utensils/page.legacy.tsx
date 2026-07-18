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
  { icon: "CheckCircle2", title: "High Dimensional Accuracy", description: "Precise dimensions that reduce fitment issues during fabrication." },
  { icon: "Zap", title: "Reliable Weldability", description: "Consistent weld performance across fabricated assemblies." },
  { icon: "Ruler", title: "Consistent Thickness", description: "Tight thickness tolerances across every coil and sheet." },
  { icon: "Settings2", title: "Excellent Fabrication Performance", description: "Steel that processes cleanly through cutting, bending, and fabrication." },
  { icon: "Clock", title: "Long Service Life", description: "Durable steel built for long-term service life." },
  { icon: "Gauge", title: "Reliable Manufacturing Quality", description: "Consistent quality that supports repeatable manufacturing outcomes." },
];

const SOLUTIONS_DATA = [
  { icon: "Layers", title: "Cold Rolled (CR) Coils", description: "Premium CR Coils designed for precision kitchenware manufacturing requiring smooth surfaces and excellent forming characteristics \u2014 includes Kitchen Utensils, Cookware Components, Food Storage Products, Kitchen Containers, and Household Products." },
  { icon: "Square", title: "Cold Rolled (CR) Sheets", description: "High-quality steel sheets suitable for laser cutting, bending, deep drawing, punching, fabrication, and finishing applications \u2014 includes Smooth Surface Finish, Accurate Dimensions, Excellent Fabrication Performance, and Consistent Material Quality." },
  { icon: "Flame", title: "Hot Rolled (HR) Coils", description: "Reliable HR Coils for heavy-duty kitchen equipment, commercial cooking systems, industrial support structures, and engineering applications." },
  { icon: "PanelsTopLeft", title: "Hot Rolled (HR) Sheets", description: "High-strength steel sheets suitable for equipment frames, commercial kitchen structures, industrial fabrication, and manufacturing support systems." },
  { icon: "Warehouse", title: "Bulk Industrial Supply", description: "Reliable bulk steel supply programs supporting continuous production, recurring procurement, and large-scale manufacturing operations." },
  { icon: "Wrench", title: "Processing Support", description: "Value-added services including slitting, cut-to-length, and custom steel processing to improve manufacturing efficiency and reduce production costs." },
];

const SUPPLY_PROCESS_STEPS = [
  { title: "Requirement Consultation", description: "We understand your manufacturing process, product specifications, production schedules, and material requirements." },
  { title: "Product Selection", description: "Our experts recommend the most suitable CR or HR steel products based on your kitchenware manufacturing application." },
  { title: "Order Confirmation", description: "Inventory is allocated, processing requirements are finalized, and dispatch schedules are planned according to your production timeline." },
  { title: "Quality Inspection", description: "Every order undergoes comprehensive quality inspection to ensure consistent material quality and manufacturing reliability." },
  { title: "Delivery", description: "Steel is delivered safely and on time to your manufacturing facility, production plant, or fabrication unit." },
];

const APPLICATIONS_DATA = [
  { title: "Cookware Manufacturing", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", description: "Steel for cookware components, cooking vessels, kitchen accessories, and household kitchen products.", link: "/products" },
  { title: "Commercial Kitchen Equipment", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", description: "Premium steel for restaurant equipment, food preparation systems, commercial kitchen furniture, and industrial cooking solutions.", link: "/products" },
  { title: "Food Storage Products", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Reliable steel for storage containers, kitchen organizers, food handling equipment, and household storage solutions.", link: "/products" },
  { title: "Kitchen Furniture & Fixtures", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", description: "Steel for modular kitchen accessories, storage systems, racks, cabinets, and utility products.", link: "/products" },
  { title: "Industrial Kitchen Equipment", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", description: "High-quality steel for large-scale food processing equipment, catering systems, and commercial kitchen manufacturing.", link: "/products" },
  { title: "Custom Kitchenware Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", description: "Steel for OEM manufacturers, fabrication companies, and customized kitchen product manufacturing.", link: "/products" },
];

const WHY_CHOOSE_US_DATA = [
  { icon: "BadgeCheck", title: "Reliable Material Quality", description: "Consistent steel quality helps manufacturers produce durable, high-quality kitchen products with minimal rejection rates." },
  { icon: "Warehouse", title: "Ready Stock Availability", description: "Immediate availability of premium CR and HR steel minimizes production delays and supports uninterrupted manufacturing." },
  { icon: "Truck", title: "Fast Dispatch", description: "Reliable deliveries help manufacturers maintain production schedules and meet customer commitments." },
  { icon: "Briefcase", title: "Bulk Procurement Support", description: "Dependable steel supply programs designed for recurring manufacturing operations and long-term procurement planning." },
  { icon: "Settings2", title: "Processing Solutions", description: "Custom steel processing reduces production time, minimizes wastage, and improves manufacturing efficiency." },
  { icon: "Handshake", title: "Long-Term Business Partnerships", description: "We build trusted partnerships through dependable supply, responsive customer service, technical expertise, and consistent product quality." },
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
  { question: "Which steel products are best suited for utensil manufacturing?", answer: "Cold Rolled (CR) steel is ideal for kitchenware, cookware, containers, and products requiring a smooth surface finish and precision fabrication. Hot Rolled (HR) steel is commonly used for commercial kitchen equipment, heavy-duty support structures, and industrial applications." },
  { question: "Do you supply steel to utensil and kitchenware manufacturers?", answer: "Yes. We supply steel to cookware manufacturers, kitchen equipment companies, OEMs, fabrication businesses, commercial kitchen equipment manufacturers, and industrial kitchen solution providers across India." },
  { question: "Can Sonatek support bulk manufacturing requirements?", answer: "Absolutely. We provide bulk steel supply, scheduled deliveries, recurring procurement programs, and long-term inventory support for high-volume manufacturing operations." },
  { question: "Do you provide steel processing services?", answer: "Yes. We offer slitting, cut-to-length, and custom steel processing services to improve manufacturing efficiency and reduce production costs." },
  { question: "Do you deliver across India?", answer: "Yes. We provide reliable deliveries across North India and Pan-India logistics support for utensil manufacturers, kitchen equipment companies, and industrial production facilities." },
];

export default function UtensilsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <div id="hero">
        <IndustryHero
          label="UTENSILS & KITCHENWARE INDUSTRY"
          title="Reliable Steel Solutions for Utensil & Kitchenware Manufacturing"
          description="The utensils industry requires precision, consistency, and premium-quality steel to manufacture durable, hygienic, and aesthetically appealing kitchen products. From cookware and kitchen utensils to food preparation equipment, storage containers, and commercial kitchen solutions, high-quality steel ensures superior performance, long service life, and excellent finish. At Sonatek Steels, we supply premium Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets to utensil manufacturers, cookware companies, kitchen equipment manufacturers, OEMs, fabrication businesses, and industrial kitchen solution providers across India. With ready inventory, precision processing, and dependable logistics, Sonatek helps manufacturers maintain consistent production, reduce downtime, and deliver high-quality kitchen products to domestic and international markets."
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
          ctaText="Request a Steel Quote for Utensil Manufacturing"
          ctaHref="/contact-us"
          secondaryCtaText="Talk to a Steel Expert"
          secondaryCtaHref="/contact-us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Utensils", href: "/industries/utensils" }]}
        />
      </div>

      <StickyNav navItems={NAV_ITEMS} />

      <MissionSection
        label="OVERVIEW"
        title="Steel Solutions for the Utensils Industry"
        bodyText="Manufacturing kitchen utensils and cookware requires steel with excellent surface finish, dimensional accuracy, and superior formability. Whether producing kitchen containers, commercial kitchen equipment, food storage systems, cookware components, or custom kitchen products, manufacturers require steel that performs consistently during cutting, deep drawing, forming, bending, and fabrication. Sonatek Steels provides dependable steel supply solutions that help utensil manufacturers improve productivity, maintain quality standards, and optimize manufacturing efficiency."
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE STEEL FOR UTENSILS?"
          subtitle="Kitchenware manufacturing requires steel that combines durability with excellent fabrication properties and premium appearance."
          items={WHY_STEEL_DATA}
        />
      </div>

      <div id="solutions">
        <IconGrid
          title="OUR UTENSILS STEEL SOLUTIONS"
          subtitle="A complete range of CR and HR steel products, plus bulk supply and processing support, built for utensils production."
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
          title="UTENSILS APPLICATIONS"
          subtitle="Our steel products are widely used in:"
          items={APPLICATIONS_DATA}
        />
      </div>

      <BuiltToDeliver
        label="WHY MANUFACTURERS CHOOSE US"
        title="Why Utensils Companies Choose Sonatek Steels"
        subtitle="Kitchenware manufacturing requires steel that combines durability with excellent fabrication properties and premium appearance."
        points={WHY_CHOOSE_US_DATA}
      />

      <MissionSection
        label="PRODUCT RANGE"
        title="Products We Supply"
        bodyText="Our utensils steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets \u2014 giving utensils customers a complete range of precision and structural steel from a single, reliable supplier."
      />

      <div id="advantages">
        <IconGrid
          title="WHY CHOOSE SONATEK STEELS?"
          subtitle="The quality of every kitchen product begins with the quality of its raw materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help manufacturers produce durable, reliable, and aesthetically finished kitchenware products. Whether you're manufacturing cookware, food storage products, commercial kitchen equipment, or customized kitchen solutions, Sonatek is your trusted steel supply partner. Request a Steel Quote for Utensil Manufacturing Today and experience premium steel solutions designed for modern kitchenware manufacturing."
          items={ADVANTAGES_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Supporting Quality Kitchenware Manufacturing with Reliable Steel"
        bodyText="The quality of every kitchen product begins with the quality of its raw materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help manufacturers produce durable, reliable, and aesthetically finished kitchenware products. Whether you're manufacturing cookware, food storage products, commercial kitchen equipment, or customized kitchen solutions, Sonatek is your trusted steel supply partner. Request a Steel Quote for Utensil Manufacturing Today and experience premium steel solutions designed for modern kitchenware manufacturing."
      />

      <div id="related">
        <ServicesSection
          title="OUR SERVICES FOR UTENSILS"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Supporting Quality Kitchenware Manufacturing with Reliable Steel"
        description="The quality of every kitchen product begins with the quality of its raw materials. At Sonatek Steels, we provide premium-quality steel backed by ready inventory, precision processing, and dependable logistics to help manufacturers produce durable, reliable, and aesthetically finished kitchenware products. Whether you're manufacturing cookware, food storage products, commercial kitchen equipment, or customized kitchen solutions, Sonatek is your trusted steel supply partner. Request a Steel Quote for Utensil Manufacturing Today and experience premium steel solutions designed for modern kitchenware manufacturing."
        btnText="Request a Steel Quote for Utensil Manufacturing"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1727504172725-14acb4f32655?w=1920&q=80"
      />
    </div>
  );
}
