"use client";

import ServiceHero from '@/components/common/Service/ServiceHero';
import MissionSection from '@/components/common/MissionSection/MissionSection';
import ProcessSteps from '@/components/common/Service/ProcessSteps';
import IconGrid from '@/components/common/Service/IconGrid';
import HowWeCanHelp from '@/components/common/Industry/HowWeCanHelp';
import BuiltToDeliver from '@/components/common/Industry/BuiltToDeliver';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import CTABanner from '@/components/common/Industry/CTABanner';
import { SERVICES_DATA } from '@/constants/services';

const HOW_IT_WORKS_STEPS = [
  { title: "Master Coil Selection", description: "The required Cold Rolled (CR) or Hot Rolled (HR) master coil is selected based on the customer's specifications." },
  { title: "Precision Slitting", description: "The coil passes through a slitting line where precision circular knives divide it into multiple narrower coils." },
  { title: "Edge & Width Inspection", description: "Each slit coil is checked to ensure consistent width, edge quality, and dimensional accuracy." },
  { title: "Recoiling & Packaging", description: "Each strip is recoiled separately, securely packed, and prepared for dispatch." },
  { title: "Delivery", description: "The processed coils are delivered to your manufacturing facility, ready for production." },
];

const BENEFITS_DATA = [
  { icon: "Ruler", title: "Precision Width Customization", description: "Coils slit to the exact width your production line requires." },
  { icon: "Recycle", title: "Reduced Material Wastage", description: "Less scrap and offcuts compared to processing standard-width coil in-house." },
  { icon: "Zap", title: "Faster Production Setup", description: "Production-ready widths mean less setup and handling on your line." },
  { icon: "TrendingUp", title: "Improved Manufacturing Efficiency", description: "Fewer processing steps once material reaches your facility." },
  { icon: "DollarSign", title: "Lower Processing Costs", description: "Reduces the need for in-house slitting equipment and labour." },
  { icon: "Boxes", title: "Better Inventory Management", description: "Stock exact widths instead of oversized master coils." },
  { icon: "Trash2", title: "Reduced Scrap Generation", description: "Precision cuts minimize offcut and trim loss." },
  { icon: "PackageCheck", title: "Ready-to-Use Steel Coils", description: "Coils arrive ready to feed directly into your process." },
];

const INDUSTRIES_DATA = [
  { icon: "Car", title: "Automotive Industry", description: "Steel strips for body components, brackets, reinforcement parts, and automotive assemblies." },
  { icon: "PanelsTopLeft", title: "Electrical Panel Manufacturing", description: "Precision slit coils for electrical cabinets, switchgear, control panels, and enclosures." },
  { icon: "CircleDot", title: "Tube & Pipe Manufacturing", description: "Narrow coils designed for tube mills and pipe production with consistent width and edge quality." },
  { icon: "Layers", title: "Roll Forming Industry", description: "Steel strips for channels, profiles, sections, roofing components, and structural applications." },
  { icon: "Armchair", title: "Furniture Manufacturing", description: "Material for office furniture, storage systems, shelving, and modular furniture." },
  { icon: "Factory", title: "Industrial Fabrication", description: "Precision steel strips for fabricated assemblies, machine components, and engineering products." },
];

const APPLICATIONS_DATA = [
  { title: "Automotive Components", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Electrical Equipment", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", href: "/industries/electrical-panel" },
  { title: "Industrial Cabinets", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", href: "/industries/industrial-fabrication" },
  { title: "Tube Manufacturing", image: "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170", href: "/industries/oil-gas" },
  { title: "Steel Furniture", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/industries/furniture" },
  { title: "Storage Systems", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80", href: "/industries/warehousing-logistics" },
  { title: "Engineering Components", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", href: "/industries/heavy-engineering" },
  { title: "Machine Manufacturing", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", href: "/industries/working-machinery" },
  { title: "Industrial Fabrication", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", href: "/industries/industrial-fabrication" },
  { title: "Roll Formed Products", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176", href: "/industries/construction" },
];

const ADVANTAGES_DATA = [
  { icon: "ShieldCheck", title: "Premium CR & HR Steel", description: "Sourced from certified primary producers for consistent quality." },
  { icon: "Ruler", title: "Precision Processing", description: "CNC-controlled slitting lines built to hold tight tolerances." },
  { icon: "Warehouse", title: "Ready Inventory", description: "Stocked master coils ready to process without long lead times." },
  { icon: "BadgeCheck", title: "Reliable Supply", description: "Consistent availability backed by a dependable procurement network." },
  { icon: "Truck", title: "Fast Dispatch", description: "Streamlined processing-to-dispatch turnaround." },
  { icon: "Briefcase", title: "Industrial Procurement Expertise", description: "Guidance from a team that understands industrial buying cycles." },
  { icon: "Headset", title: "Dedicated Customer Support", description: "A responsive team throughout your order and processing cycle." },
  { icon: "Globe", title: "Pan-India Logistics", description: "Coordinated dispatch and delivery across the country." },
];

const PRECISION_DATA = [
  { icon: "Ruler", title: "Improve dimensional consistency", description: "Every slit coil holds tight, repeatable width tolerances." },
  { icon: "Clock", title: "Reduce production downtime", description: "Fewer stoppages caused by inconsistent incoming material." },
  { icon: "Award", title: "Enhance product quality", description: "Consistent input material supports a consistent finished product." },
  { icon: "CheckCircle2", title: "Lower rejection rates", description: "Precise tolerances reduce out-of-spec rejections on your line." },
  { icon: "Gauge", title: "Increase manufacturing speed", description: "Production-ready coils move straight into your process." },
  { icon: "Recycle", title: "Optimize material utilization", description: "Accurate widths minimize trim loss and reprocessing." },
];

const FAQS_DATA = [
  { question: "What is coil slitting?", answer: "Coil slitting is the process of cutting a wide steel coil into multiple narrower coils according to specific width requirements." },
  { question: "Which steel products can be slit?", answer: "Cold Rolled (CR) and Hot Rolled (HR) steel coils can be processed into custom-width slit coils, subject to available processing capabilities." },
  { question: "What are the benefits of slit coils?", answer: "Slit coils reduce material wastage, improve production efficiency, lower processing costs, and allow manufacturers to receive steel in production-ready widths." },
  { question: "Which industries commonly use slit coils?", answer: "Automotive, electrical, furniture, tube manufacturing, roll forming, engineering, fabrication, and industrial equipment manufacturers." },
  { question: "Do you support bulk industrial orders?", answer: "Yes. Sonatek Steels supports recurring production requirements, OEM supply, and project-based bulk orders." },
];

export default function CoilSlittingPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ServiceHero
        title="Precision Slitting. Maximum Material Utilization. Better Manufacturing Efficiency."
        breadcrumbLabel="Coil Slitting"
        description="Manufacturers require steel that fits their production process, not the other way around. Our coil slitting service transforms wide Cold Rolled (CR) and Hot Rolled (HR) steel coils into multiple narrower coils with precision, helping manufacturers reduce material wastage, improve production efficiency, and optimize operational costs — whether you're producing automotive components, electrical panels, tube mills, roll-formed sections, or industrial equipment."
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=85"
        ctaText="Request a Slitting Quote"
        ctaHref="/contact-us"
        secondaryCtaText="Speak with a Processing Expert"
        secondaryCtaHref="/contact-us"
      />

      <MissionSection
        label="OVERVIEW"
        title="What is Coil Slitting?"
        bodyText="Coil slitting is a precision steel processing method where a master coil is longitudinally cut into multiple narrower coils while maintaining consistent width, edge quality, and material integrity. Instead of purchasing a standard-width steel coil and processing it internally, manufacturers receive slit coils tailored to their exact production requirements — reducing additional handling, minimizing scrap, and enabling faster integration into manufacturing processes."
      />

      <ProcessSteps
        label="PROCESS"
        title="How Coil Slitting Works"
        steps={HOW_IT_WORKS_STEPS}
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE COIL SLITTING?"
          subtitle="Many manufacturers purchase wide coils but only require narrower widths for production. Without slitting, they often need additional processing equipment, labour, and time — our slitting solutions help eliminate these challenges."
          items={BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <IconGrid
          title="INDUSTRIES THAT BENEFIT FROM COIL SLITTING"
          subtitle="Our slitting services support a wide range of manufacturing industries, including:"
          items={INDUSTRIES_DATA}
        />
      </div>

      <HowWeCanHelp
        label="APPLICATIONS"
        title="WHERE SLIT COILS ARE USED"
        subtitle="Slit coils from our lines feed directly into these production processes and end-use applications."
        items={APPLICATIONS_DATA}
      />

      <BuiltToDeliver
        label="WHY SONATEK STEELS"
        title="Why Manufacturers Choose Sonatek Steels"
        subtitle="We understand that manufacturing depends on precision, consistency, and timely supply. Our processing approach is designed to support production efficiency and reduce operational challenges."
        points={ADVANTAGES_DATA}
      />

      <MissionSection
        label="QUALITY ASSURANCE"
        title="Quality You Can Depend On"
        bodyText="Every slit coil undergoes quality verification before dispatch to help ensure consistency and reliable performance in downstream manufacturing processes. Our focus is not only on supplying steel but on delivering processing solutions that improve productivity and reduce unnecessary manufacturing costs."
      />

      <div id="precision">
        <IconGrid
          title="WHY PRECISION MATTERS"
          subtitle="Even small variations in coil width can impact production efficiency, product quality, and machine performance. Precision slitting helps manufacturers:"
          items={PRECISION_DATA}
        />
      </div>

      <MissionSection
        label="PARTNERSHIP"
        title="Why Partner with Sonatek Steels?"
        bodyText="At Sonatek Steels, we believe steel processing should simplify manufacturing, not complicate it. Our experienced team works closely with customers to understand their production requirements and deliver steel solutions that improve operational performance, reduce processing time, and support long-term manufacturing success — whether your requirement is a recurring production order or a project-based supply."
      />

      <div id="related">
        <ServicesSection
          title="OUR OTHER SERVICES"
          subtitle="Explore the full range of processing, supply, and distribution services available from Sonatek Steels."
          services={SERVICES_DATA}
        />
      </div>

      <div id="faqs">
        <FAQSection title="Frequently Asked Questions" items={FAQS_DATA} />
      </div>

      <CTABanner
        title="Precision Steel Starts with Precision Processing"
        description="Improve your manufacturing efficiency with professionally processed steel tailored to your production requirements. Partner with Sonatek Steels for dependable coil slitting solutions that help reduce waste, improve productivity, and keep your operations running smoothly."
        btnText="Request a Quote"
        btnHref="/contact-us"
        secondaryBtnText="Contact Our Processing Team"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
      />
    </div>
  );
}
