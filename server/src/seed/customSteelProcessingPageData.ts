// Standalone seed data for the Custom Steel Processing page — lets you push
// just this one page to the live database (via upsertPage.ts) without
// re-running the full seedData.ts bootstrap, which would also touch every
// other page in SEED_PAGES.
// Seed with: npm run seed:page -- src/seed/customSteelProcessingPageData.ts
import type { PageSeedInput } from '../utils/upsertPage';

const CUSTOM_STEEL_PROCESSING_PAGE: PageSeedInput = {
    slug: 'solutions-custom-steel-processing',
    title: 'Solutions — Custom Steel Processing',
    status: 'published',
    seo: {
        metaTitle: 'Custom Steel Processing Services | CR & HR Steel | Sonatek Steels',
        metaDescription: 'Custom steel processing services for CR & HR coils and sheets. Precision slitting, cut-to-length, custom dimensions, and reliable delivery across India.',
    },
    blocks: [
        { blockType: 'service-hero', order: 0, anchorId: 'overview', data: {
            title: 'Custom Steel Processing That Fits Your Production—Not the Other Way Around',
            breadcrumbLabel: 'Custom Steel Processing',
            description: "Every manufacturing process is unique, and so are its steel requirements. At Sonatek Steels, we provide custom steel processing solutions designed to help manufacturers receive steel exactly as required, reducing processing time, minimizing material wastage, and improving production efficiency. Whether you need custom widths, custom lengths, precision slitting, cut-to-length sheets, or project-specific steel processing, our team works closely with you to ensure your material is production-ready before it reaches your facility.",
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=85',
            ctaText: 'Request a Custom Quote', ctaHref: '/contact-us',
            secondaryCtaText: 'Talk to a Processing Expert', secondaryCtaHref: '/contact-us',
        } },
        { blockType: 'mission-section', order: 1, anchorId: 'what-is-custom-processing', data: {
            label: 'OVERVIEW', title: 'What is Custom Steel Processing?',
            bodyText: "Custom steel processing is the process of modifying standard steel coils or sheets according to specific customer requirements before delivery. Instead of purchasing standard material and processing it internally, manufacturers receive steel that's already prepared for their production line. This eliminates unnecessary handling, reduces operational costs, improves workflow efficiency, and ensures faster production. Whether you're manufacturing automotive components, industrial equipment, electrical panels, furniture, or engineering products, customized steel processing helps simplify production while maintaining consistent quality.",
        } },
        { blockType: 'process-steps', order: 2, anchorId: 'how-it-works', data: {
            label: 'PROCESS', title: 'Our Processing Workflow',
            steps: [
                { title: 'Requirement Consultation', description: 'Our experts understand your application, dimensions, quantities, and production requirements.' },
                { title: 'Material Selection', description: 'Select the appropriate CR or HR steel based on your application and technical needs.' },
                { title: 'Custom Processing', description: 'Steel is processed according to your required width, length, or project specifications.' },
                { title: 'Quality Inspection', description: 'Every processed batch is checked for dimensional accuracy and consistency before dispatch.' },
                { title: 'Packaging & Dispatch', description: 'Material is securely packed and delivered according to your production schedule.' },
            ],
        } },
        { blockType: 'icon-grid', order: 3, anchorId: 'benefits', data: {
            title: 'WHY CHOOSE CUSTOM PROCESSING?',
            subtitle: "Standard steel sizes don't always meet production requirements. Additional in-house processing often results in higher labour costs, material wastage, longer production cycles, and machine downtime — our custom processing solutions help eliminate these inefficiencies.",
            items: [
                { icon: 'DollarSign', title: 'Lower Labour Costs', description: 'Eliminate additional processing, labour, and machine usage at your facility.' },
                { icon: 'Recycle', title: 'Reduced Material Wastage', description: 'Customized dimensions help optimize material utilization and reduce unnecessary scrap generation.' },
                { icon: 'Zap', title: 'Shorter Production Cycles', description: 'Production-ready steel shortens manufacturing cycles and improves operational efficiency.' },
                { icon: 'Gauge', title: 'Reduced Machine Downtime', description: "Receiving steel that's already processed reduces handling time and machine setup." },
                { icon: 'Boxes', title: 'Simplified Inventory Management', description: 'Processed material is easier to store, manage, and use in production.' },
                { icon: 'PackageCheck', title: 'Reduced Handling Costs', description: 'Less on-site handling and preparation before material reaches your production line.' },
            ],
        } },
        { blockType: 'icon-grid', order: 4, anchorId: 'industries', data: {
            title: 'INDUSTRIES THAT BENEFIT FROM CUSTOM STEEL PROCESSING',
            subtitle: 'Our custom processing services support a wide range of manufacturing industries, including:',
            items: [
                { icon: 'Car', title: 'Automotive', description: 'Customized steel for body panels, brackets, reinforcement parts, and precision components.' },
                { icon: 'PanelsTopLeft', title: 'Electrical Panel Manufacturing', description: 'Steel processed for cabinets, control panels, enclosures, and industrial electrical systems.' },
                { icon: 'Armchair', title: 'Furniture Manufacturing', description: 'Custom-sized steel for modular furniture, storage systems, office furniture, and industrial shelving.' },
                { icon: 'Wind', title: 'HVAC Industry', description: 'Processed steel for air ducts, ventilation systems, cooling equipment, and HVAC assemblies.' },
                { icon: 'Factory', title: 'Heavy Engineering', description: 'Steel prepared for fabrication, machinery manufacturing, structural assemblies, and engineering applications.' },
                { icon: 'Building2', title: 'Infrastructure & Construction', description: 'Customized steel solutions for industrial buildings, warehouses, fabrication projects, and EPC contractors.' },
            ],
        } },
        { blockType: 'how-we-can-help', order: 5, anchorId: 'applications', data: {
            label: 'APPLICATIONS', title: 'WHERE CUSTOM PROCESSING ADDS VALUE',
            subtitle: 'Our custom processing solutions feed directly into these production processes and manufacturing requirements.',
            items: [
                { title: 'Precision Coil Slitting', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', href: '/services/coil-slitting' },
                { title: 'Cut-to-Length Processing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', href: '/services/cut-to-length' },
                { title: 'Width Customization', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', href: '/contact-us' },
                { title: 'Length Customization', image: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80', href: '/contact-us' },
                { title: 'Project-Based Processing', image: 'https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170', href: '/project-based-steel' },
                { title: 'Production-Oriented Material Preparation', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', href: '/contact-us' },
            ],
        } },
        { blockType: 'built-to-deliver', order: 6, anchorId: 'advantages', data: {
            label: 'WHY SONATEK STEELS', title: 'Why Manufacturers Prefer Custom Processing',
            subtitle: 'Manufacturing efficiency begins with the right material, processed the right way.',
            points: [
                { icon: 'Gauge', title: 'Better Production Efficiency', description: "Receiving steel that's already processed reduces handling time and allows production to begin immediately." },
                { icon: 'Recycle', title: 'Lower Material Wastage', description: 'Customized dimensions help optimize material utilization and reduce unnecessary scrap generation.' },
                { icon: 'Zap', title: 'Faster Manufacturing', description: 'Production-ready steel shortens manufacturing cycles and improves operational efficiency.' },
                { icon: 'DollarSign', title: 'Reduced Operational Costs', description: 'Eliminate additional processing, labour, and machine usage at your facility.' },
                { icon: 'Boxes', title: 'Improved Inventory Management', description: 'Processed material is easier to store, manage, and use in production.' },
                { icon: 'BadgeCheck', title: 'Consistent Product Quality', description: 'Precision processing ensures every batch meets required specifications for reliable manufacturing.' },
            ],
        } },
        { blockType: 'mission-section', order: 7, anchorId: 'quality', data: {
            label: 'QUALITY ASSURANCE', title: 'Why Choose Sonatek Steels?',
            bodyText: "At Sonatek, we don't just process steel — we help manufacturers improve productivity, reduce procurement challenges, and optimize their production lines. Our commitment to quality, precision, and dependable service has made us a trusted partner for manufacturers across India.",
        } },
        { blockType: 'icon-grid', order: 8, anchorId: 'precision', data: {
            title: 'OUR ADVANTAGES',
            subtitle: 'What you get with every custom-processed order from Sonatek Steels.',
            items: [
                { icon: 'ShieldCheck', title: 'Premium CR & HR Steel', description: 'Sourced from certified primary producers for consistent quality.' },
                { icon: 'Ruler', title: 'Precision Processing', description: 'Processing lines calibrated to your exact width, length, and thickness specifications.' },
                { icon: 'Warehouse', title: 'Ready Stock Availability', description: 'Stocked material ready to process without long lead times.' },
                { icon: 'Zap', title: 'Fast Turnaround', description: 'Streamlined processing-to-dispatch turnaround.' },
                { icon: 'Wrench', title: 'Custom Processing Solutions', description: 'Slitting, cut-to-length, and dimensional customization tailored to your production line.' },
                { icon: 'Truck', title: 'Bulk Industrial Supply', description: 'High-tonnage supply programs for uninterrupted production.' },
                { icon: 'Globe', title: 'Pan-India Delivery', description: 'Coordinated dispatch and delivery across the country.' },
                { icon: 'Headset', title: 'Dedicated Technical Support', description: 'A responsive team throughout your order and processing cycle.' },
                { icon: 'BadgeCheck', title: 'Reliable Quality Assurance', description: 'Every order checked against the same quality benchmark.' },
                { icon: 'Handshake', title: 'Long-Term Supply Partnerships', description: 'Dependable relationships built on reliable supply and service.' },
            ],
        } },
        { blockType: 'mission-section', order: 9, anchorId: 'partnership', data: {
            label: 'PARTNERSHIP', title: "Let's Build Smarter Manufacturing Together",
            bodyText: 'Manufacturing efficiency begins with the right material, processed the right way. Whether you require customized steel dimensions, production-ready sheets, or value-added processing solutions, Sonatek Steels is committed to delivering precision, consistency, and reliability with every order.',
        } },
        { blockType: 'services-section', order: 10, anchorId: 'related', data: {
            title: 'OUR OTHER SERVICES',
            subtitle: 'Explore the full range of processing, supply, and distribution services available from Sonatek Steels.',
            services: [
                { title: 'Coil Slitting', description: 'High-speed, precision slitting that converts master coils into narrower, tightly toleranced slit coils.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', href: '/services/coil-slitting' },
                { title: 'Cut-To-Length Service', description: 'Master coils converted into flat, perfectly squared sheets and blanks, cut to your exact length.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', href: '/services/cut-to-length' },
                { title: 'Luster Steel Processing', description: 'Surface finishing treatments delivering a clean, bright luster finish for appearance-critical applications.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', href: '/services/luster-steel-processing' },
                { title: 'Bulk Industrial Supply', description: 'High-tonnage flat steel supply handled as a single, coordinated dispatch for large-volume requirements.', image: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80', href: '/services/bulk-industrial-supply' },
                { title: 'Delivery & Logistics Service', description: 'Fleet coordination, route planning, and handling protocols that move your steel from warehouse to gate.', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80', href: '/services/logistics-delivery' },
            ],
        } },
        { blockType: 'faq-section', order: 11, anchorId: 'faqs', data: { title: 'Frequently Asked Questions', items: [
            { question: 'What is custom steel processing?', answer: 'Custom steel processing involves modifying steel coils or sheets according to specific customer requirements, such as custom widths, lengths, or project-based specifications.' },
            { question: 'Can Sonatek process both CR and HR steel?', answer: 'Yes. We provide custom processing solutions for both Cold Rolled (CR) and Hot Rolled (HR) steel products.' },
            { question: 'Can I order customized dimensions?', answer: 'Yes. Depending on your production requirements, we can discuss customized processing solutions for your project.' },
            { question: 'Which industries benefit from custom steel processing?', answer: 'Automotive, electrical, engineering, fabrication, furniture, HVAC, infrastructure, OEM manufacturing, and many other industrial sectors.' },
            { question: 'Do you support bulk industrial orders?', answer: 'Absolutely. We work with manufacturers, OEMs, EPC contractors, and industrial businesses across India.' },
        ] } },
        { blockType: 'cta-banner-industry', order: 12, data: {
            title: 'Request a Custom Processing Quote Today',
            description: 'Whether you require customized steel dimensions, production-ready sheets, or value-added processing solutions, Sonatek Steels is committed to delivering precision, consistency, and reliability with every order.',
            btnText: 'Request a Custom Quote', btnHref: '/contact-us',
            secondaryBtnText: 'Talk to a Processing Expert', secondaryBtnHref: '/contact-us',
            bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80',
        } },
    ],
};

export default CUSTOM_STEEL_PROCESSING_PAGE;
