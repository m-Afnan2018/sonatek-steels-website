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
  { title: "Requirement Consultation", description: "We understand your application, finishing requirements, and production process." },
  { title: "Material Selection", description: "Select premium Cold Rolled (CR) or Hot Rolled (HR) steel based on your manufacturing needs." },
  { title: "Lustre Steel Processing", description: "Steel undergoes controlled processing to achieve the required surface quality and consistency." },
  { title: "Quality Inspection", description: "Each batch is inspected to ensure the required surface finish and processing standards are maintained." },
  { title: "Packaging & Dispatch", description: "Processed steel is securely packed and delivered according to your production schedule." },
];

const BENEFITS_DATA = [
  { icon: "Sparkles", title: "Improve Surface Appearance", description: "A clean, consistent surface finish suited to visible, appearance-critical parts." },
  { icon: "Droplet", title: "Enhance Paint & Powder Coating Adhesion", description: "A consistent surface improves paint and powder coating performance." },
  { icon: "Recycle", title: "Reduce Surface Imperfections", description: "Controlled processing minimizes scratches, stains, and defects." },
  { icon: "Settings2", title: "Improve Fabrication Quality", description: "Manufacturing-ready steel reduces additional surface preparation before production." },
  { icon: "CheckCircle2", title: "Increase Product Consistency", description: "Every batch is processed to the same surface quality standard." },
  { icon: "DollarSign", title: "Reduce Rework & Rejection", description: "Consistent surface quality minimizes defects and production delays." },
  { icon: "Award", title: "Improve Overall Product Value", description: "Premium surface finish enhances the overall quality and perceived value of manufactured products." },
  { icon: "PackageCheck", title: "Deliver Premium Finished Products", description: "Processed steel supports a higher-quality end product." },
];

const INDUSTRIES_DATA = [
  { icon: "Car", title: "Automotive Industry", description: "High-quality steel for body components, brackets, structural parts, and precision automotive applications requiring excellent surface finish." },
  { icon: "PanelsTopLeft", title: "Electrical Panel Manufacturing", description: "Processed steel for electrical cabinets, control panels, enclosures, and industrial electrical equipment." },
  { icon: "Armchair", title: "Furniture Manufacturing", description: "Premium surface-finished steel for office furniture, storage systems, modular furniture, and industrial shelving." },
  { icon: "Wind", title: "HVAC Industry", description: "Steel suitable for air ducts, ventilation systems, cooling equipment, and HVAC assemblies requiring consistent coating quality." },
  { icon: "Factory", title: "Heavy Engineering", description: "Reliable surface quality for fabricated machinery, equipment covers, and engineering components." },
  { icon: "Package", title: "Home Appliances", description: "Smooth surface steel ideal for refrigerators, washing machines, cabinets, and other consumer appliances." },
  { icon: "Settings2", title: "OEM Manufacturing", description: "Consistent processed steel for high-volume production requiring reliable surface quality and repeatable manufacturing performance." },
];

const APPLICATIONS_DATA = [
  { title: "Premium Surface Enhancement", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/products" },
  { title: "Automotive Body Components", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Furniture & Architectural Fittings", image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=800&q=80", href: "/industries/furniture" },
  { title: "Surface Preparation for Coating", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", href: "/custom-steel-processing" },
  { title: "Electrical Enclosures", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", href: "/industries/electrical-panel" },
  { title: "Heavy Engineering Components", image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", href: "/industries/heavy-engineering" },
];

const ADVANTAGES_DATA = [
  { icon: "Sparkles", title: "Superior Surface Finish", description: "Cleaner and smoother steel improves the appearance of finished products while enhancing customer satisfaction." },
  { icon: "Droplet", title: "Better Coating Performance", description: "A consistent surface improves paint and powder coating adhesion, creating long-lasting and visually appealing finishes." },
  { icon: "Zap", title: "Improved Manufacturing Efficiency", description: "Manufacturing-ready steel reduces additional surface preparation before production." },
  { icon: "Recycle", title: "Reduced Rework", description: "Consistent surface quality minimizes defects, reducing production delays and rejection rates." },
  { icon: "Award", title: "Higher Product Value", description: "Premium surface finish enhances the overall quality and perceived value of manufactured products." },
  { icon: "BadgeCheck", title: "Consistent Quality Standards", description: "Every order is processed with attention to detail to deliver reliable and repeatable results." },
];

const FAQS_DATA = [
  { question: "What is Lustre Steel Processing?", answer: "Lustre Steel Processing is a value-added service that enhances the surface quality of steel, making it more suitable for fabrication, painting, powder coating, and premium industrial applications." },
  { question: "Which steel products can be processed?", answer: "We provide Lustre Steel Processing solutions for both Cold Rolled (CR) and Hot Rolled (HR) steel products." },
  { question: "Which industries benefit from Lustre Steel Processing?", answer: "Automotive, furniture, electrical panels, HVAC, appliances, engineering, fabrication, and OEM manufacturing industries benefit from improved surface quality." },
  { question: "Is Lustre Steel suitable for painting and powder coating?", answer: "Yes. A smoother and more consistent surface improves coating adhesion, resulting in better finish quality and durability." },
  { question: "Do you support bulk industrial orders?", answer: "Absolutely. We support recurring supply requirements and bulk industrial processing for manufacturers across India." },
];

export default function LusterSteelProcessingPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ServiceHero
        title="Premium Lustre Steel Processing for Superior Surface Quality & Manufacturing Performance"
        breadcrumbLabel="Luster Steel Processing"
        description="In today's competitive manufacturing environment, surface quality is just as important as strength and durability. At Sonatek Steels, our Lustre Steel Processing services are designed to deliver steel with a cleaner, smoother, and more consistent surface finish that enhances both appearance and performance. Whether your products require painting, powder coating, fabrication, or precision forming, our processed steel ensures excellent finish quality, improved workability, and reliable manufacturing results."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85"
        ctaText="Request a Custom Quote"
        ctaHref="/contact-us"
        secondaryCtaText="Talk to a Steel Processing Expert"
        secondaryCtaHref="/contact-us"
      />

      <MissionSection
        label="OVERVIEW"
        title="What is Lustre Steel Processing?"
        bodyText="Lustre Steel Processing is a value-added processing solution that enhances the surface quality of steel before it enters the manufacturing process. By ensuring a cleaner, smoother, and more uniform surface, manufacturers can achieve better coating adhesion, improved aesthetics, easier fabrication, and consistent production quality. For industries where the final product's appearance and finish matter, lustre processed steel provides a significant advantage over conventional material."
      />

      <ProcessSteps
        label="PROCESS"
        title="Our Processing Workflow"
        steps={HOW_IT_WORKS_STEPS}
      />

      <div id="benefits">
        <IconGrid
          title="WHY CHOOSE LUSTRE STEEL PROCESSING?"
          subtitle="Steel with superior surface quality contributes to better manufacturing efficiency and improved finished products. Manufacturers choose lustre processed steel because it helps:"
          items={BENEFITS_DATA}
        />
      </div>

      <div id="industries">
        <IconGrid
          title="INDUSTRIES THAT BENEFIT FROM LUSTRE STEEL PROCESSING"
          subtitle="Our surface finishing services support a wide range of manufacturing industries, including:"
          items={INDUSTRIES_DATA}
        />
      </div>

      <HowWeCanHelp
        label="APPLICATIONS"
        title="OUR LUSTRE STEEL PROCESSING SOLUTIONS"
        subtitle="Premium surface enhancement, coating preparation, and manufacturing-ready steel — processed and delivered as bulk industrial requirements demand."
        items={APPLICATIONS_DATA}
      />

      <BuiltToDeliver
        label="WHY SONATEK STEELS"
        title="Why Manufacturers Prefer Lustre Steel Processing"
        subtitle="At Sonatek, we understand that quality steel begins with quality processing."
        points={ADVANTAGES_DATA}
      />

      <MissionSection
        label="PARTNERSHIP"
        title="Let's Build Better Products Together"
        bodyText="Superior manufacturing starts with superior materials. With Sonatek Steels' Lustre Steel Processing services, you receive steel that's engineered for better appearance, improved manufacturing efficiency, and consistent production quality. Request a Custom Processing Quote today and experience premium steel solutions designed to elevate your manufacturing standards."
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
        title="Request a Custom Processing Quote Today"
        description="Experience premium steel solutions designed to elevate your manufacturing standards, with dependable Lustre Steel Processing that helps improve appearance, reduce rework, and keep your operations running smoothly."
        btnText="Request a Custom Quote"
        btnHref="/contact-us"
        secondaryBtnText="Talk to a Steel Processing Expert"
        secondaryBtnHref="/contact-us"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />
    </div>
  );
}
