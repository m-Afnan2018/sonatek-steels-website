// Seed data for the 6 additional Solution pages: Industrial Procurement,
// OEM Supply Solutions, Project Based Steel Supply, Ready Stock Supply,
// Annual Supply Contract, Logistics & Delivery. Companion to seedData.ts
// (which covers the original 19 pages) — kept separate since it was
// requested and shipped as its own batch.
import type { SeedPage } from './seedData';

const SOLUTIONS_DATA_12 = [
  { title: "Steel Procurement Solution", description: "Reliable, certified sourcing of CR/HR coils, sheets, and plates directly from trusted primary mills like SAIL.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", href: "/steel-procurement" },
  { title: "Custom Steel Processing", description: "Slitting, shearing, pickling, and cut-to-size services delivering steel that is 100% ready for production.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", href: "/custom-steel-processing" },
  { title: "Infrastructure & Industrial Projects", description: "Scalable flat steel supply solutions and coordinated delivery schedules for large-scale industrial builds.", image: "https://images.unsplash.com/photo-1761896057588-49e1a6306d8f?q=80", href: "/infrastructure-industrial-project" },
  { title: "Technical Steel Selection Support", description: "Expert advisory helping you choose the correct grade, thickness, and finish for your exact application.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", href: "/technical-steel-selection" },
  { title: "Freight Forwarding", description: "Seamless material movement coordination, planned dispatches, and reliable regional delivery networks.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80", href: "/freight-forwarding" },
  { title: "Supply Chain Solutions", description: "End-to-end requirement planning, stock availability management, and optimized distribution services.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", href: "/supply-chain" },
  { title: "Industrial Procurement", description: "Consolidated, high-volume flat steel procurement built for industrial plants and manufacturing facilities.", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", href: "/industrial-procurement" },
  { title: "OEM Supply Solutions", description: "Specification-matched flat steel supply scheduled around your OEM production line, not the other way around.", image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=800&q=80", href: "/oem-supply-solutions" },
  { title: "Project Based Steel Supply", description: "Flat steel supply structured around your project timeline, with milestone-based dispatch and fixed scope.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176", href: "/project-based-steel" },
  { title: "Ready Stock Supply", description: "Standard grades and sizes always in stock, ready for immediate dispatch with zero mill lead time.", image: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", href: "/ready-stock-supply" },
  { title: "Annual Supply Contract", description: "Locked-in pricing and guaranteed volume for your yearly flat steel requirement.", image: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80", href: "/annual-supply-contract" },
  { title: "Logistics & Delivery", description: "Planned dispatches and reliable regional delivery, direct to your site or factory gate.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80", href: "/logistics-delivery" },
];

const INDUSTRY_EXPERTISE_DATA = [
  { title: "Automotive", description: "Precision supply support for OEMs and component manufacturers using CR and HR steel.", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", href: "/industries/automotive" },
  { title: "Construction", description: "Project dispatch support for sheets, plates, and chequered plates used in construction.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176", href: "/industries/construction" },
  { title: "Oil & Gas", description: "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.", image: "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170", href: "/industries/oil-gas" },
  { title: "Shipbuilding", description: "Marine project steel movement for shipyards, offshore structures, and deck applications.", image: "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170", href: "/industries/shipbuilding" },
  { title: "Heavy Engineering", description: "Heavy plate and processed steel delivery support for machinery and industrial fabrication.", image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170", href: "/industries/heavy-engineering" },
  { title: "Fabricators & OEMs", description: "Repeat supply support for workshops, manufacturing lines, and OEM production teams.", image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170", href: "/industries/fabricators-oems" },
];

const navBlock = { blockType: 'sticky-nav', order: 1, data: { navItems: [
  { id: 'overview', label: 'Overview' }, { id: 'solutions', label: 'Solutions' }, { id: 'advantages', label: 'Advantages' },
  { id: 'industries', label: 'Industries' }, { id: 'insights', label: 'Insights' }, { id: 'faqs', label: 'FAQs' },
] } };
const solutionsBlock = { blockType: 'services-section', order: 3, anchorId: 'solutions', data: { title: 'OUR CORE SOLUTIONS', subtitle: 'Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence.', services: SOLUTIONS_DATA_12 } };
const industriesBlock = { blockType: 'services-section', order: 5, anchorId: 'industries', data: { title: 'INDUSTRIES WE SERVE', subtitle: 'Our solution supports every major industry segment represented across Sonatek Steels.', services: INDUSTRY_EXPERTISE_DATA } };
const insightsBlock = { blockType: 'solution-insights', order: 6, anchorId: 'insights', data: { items: [] } };

export const NEW_SOLUTIONS_PAGES: SeedPage[] = [
  {
    slug: 'solutions-industrial-procurement', title: 'Solutions — Industrial Procurement', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'Industrial Procurement',
        description: 'Consolidated, high-volume flat steel procurement built for industrial plants and manufacturing facilities — one dependable vendor instead of a fragmented supplier list.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
        ctaText: 'Request a Procurement Review', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/industrial-procurement' }, { label: 'Industrial Procurement', href: '/industrial-procurement' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'Industrial Sourcing', title: 'ONE VENDOR. EVERY PLANT REQUIREMENT.',
        bodyText: "Large industrial operations lose time and money managing multiple steel vendors, each with different lead times, quality standards, and documentation. Sonatek Steels consolidates your flat steel procurement into a single, accountable relationship — sourced directly from SAIL under our MOU dealership, with consistent grade, tolerance, and delivery discipline across every order, whether it's for one plant or a multi-site operation.",
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'WHY CONSOLIDATE WITH US', subtitle: 'Industrial-scale buyers need more than a supplier — they need a partner who can standardize quality and cost across every plant.',
        items: [
          { icon: 'Layers', title: 'Vendor Consolidation', description: 'Replace multiple regional suppliers with a single accountable procurement partner across all your plant locations.' },
          { icon: 'BadgeCheck', title: 'Consistent Specification', description: 'Every batch, every plant, every order meets the same grade and tolerance standard — no quality drift between sites.' },
          { icon: 'TrendingDown', title: 'Volume-Based Pricing', description: 'Consolidated order volumes translate into better commercial terms than fragmented, plant-by-plant purchasing.' },
          { icon: 'FileCheck', title: 'Centralized Documentation', description: 'One MTC and compliance trail across your entire procurement volume, simplifying audits and vendor reviews.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: "What counts as 'industrial procurement' versus regular steel procurement?", answer: 'Industrial procurement is built for manufacturers and plants ordering flat steel repeatedly and at scale, where consistency across orders and sites matters as much as price. Our standard steel procurement service covers smaller, one-off, or mixed-use orders.' },
        { question: 'Can you supply multiple plant locations under one account?', answer: 'Yes, we can coordinate deliveries across multiple facilities under a single procurement relationship, with consolidated documentation and consistent specifications for every site.' },
        { question: 'Do you provide volume-based pricing for industrial buyers?', answer: 'Yes, consolidated order volumes across your operation typically qualify for better commercial terms than fragmented purchasing.' },
        { question: 'What steel products are covered under industrial procurement?', answer: 'The same full flat steel range: CR coils/sheets (our core stock), and HR coils/sheets/plates and chequered plates on request, all sourced through our SAIL MOU dealership.' },
        { question: 'How do you ensure quality consistency across large volumes?', answer: 'Every dispatch, regardless of size, is accompanied by a Manufacturer Test Certificate, and we maintain the same sourcing and inspection standard across your full order volume.' },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: 'CONSOLIDATE YOUR STEEL SUPPLY', description: 'Bring your plant-wide flat steel requirements under one accountable partner. Talk to our industrial procurement team today.',
        btnText: 'Talk to Our Team', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80',
      } },
    ],
  },
  {
    slug: 'solutions-oem-supply-solutions', title: 'Solutions — OEM Supply Solutions', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'OEM Supply Solutions',
        description: 'Dependable, specification-matched flat steel supply built around your production schedule — so your assembly line never waits on steel.',
        image: 'https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=1200&q=80',
        ctaText: 'Discuss Your OEM Requirement', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/oem-supply-solutions' }, { label: 'OEM Supply Solutions', href: '/oem-supply-solutions' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'OEM Partnership', title: 'STEEL THAT FITS YOUR PRODUCTION LINE, NOT THE OTHER WAY AROUND.',
        bodyText: "OEMs can't afford variability in grade, gauge, or delivery timing — a single inconsistent batch can stall a production line. Sonatek Steels works directly with OEM engineering and procurement teams to lock in the exact CR/HR specification your components require, then supplies against your production schedule with the same discipline you expect from your own assembly line.",
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'BUILT FOR OEM PRODUCTION', subtitle: 'A supply partner that understands component tolerances, BOM changes, and production timing.',
        items: [
          { icon: 'Target', title: 'Specification Lock-In', description: 'Once your required grade, gauge, and finish are confirmed, every subsequent order matches it exactly — no re-qualification needed.' },
          { icon: 'Timer', title: 'Just-in-Time Delivery', description: 'Supply scheduled against your production calendar, reducing on-site inventory and warehousing costs.' },
          { icon: 'Users', title: 'Engineering Collaboration', description: 'Our technical team works with your engineers during component design to recommend the most cost-effective compliant grade.' },
          { icon: 'Headset', title: 'Dedicated Account Support', description: 'A single point of contact who understands your BOM, tolerances, and delivery cadence.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: 'Do you work directly with OEM engineering teams during grade selection?', answer: 'Yes, our technical team collaborates directly with OEM engineering and quality teams to confirm the grade, gauge, and finish required for each component before supply begins.' },
        { question: 'Can you supply against a rolling production schedule?', answer: 'Yes, once your requirement is established we can align dispatch schedules to your production calendar, including Just-In-Time delivery.' },
        { question: 'What happens if our component specification changes?', answer: 'We re-confirm the required grade and gauge with you and adjust sourcing accordingly — our SAIL MOU dealership gives us the flexibility to accommodate specification changes without long lead-time penalties.' },
        { question: 'Do you provide consistent Manufacturer Test Certificates for OEM quality audits?', answer: 'Yes, every dispatch includes full MTC documentation, and we maintain a consistent sourcing record to support your supplier quality audits.' },
        { question: 'Is there a minimum order commitment for OEM supply agreements?', answer: 'OEM supply arrangements are typically structured around your actual production volume rather than a fixed minimum — talk to our team about your specific requirement.' },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: 'LOCK IN YOUR OEM SUPPLY', description: 'Get a steel partner that matches your production schedule, not the other way around. Talk to our OEM supply team.',
        btnText: 'Talk to Our Team', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80',
      } },
    ],
  },
  {
    slug: 'solutions-project-based-steel', title: 'Solutions — Project Based Steel Supply', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'Project Based Steel Supply',
        description: 'Flat steel supply structured around your project timeline — defined quantities, milestone-based dispatch, and a single point of accountability from kickoff to closeout.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
        ctaText: 'Discuss Your Project', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/project-based-steel' }, { label: 'Project Based Steel', href: '/project-based-steel' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'Project Delivery', title: 'STEEL SCHEDULED TO YOUR PROJECT, NOT YOUR CALENDAR YEAR.',
        bodyText: 'Not every steel requirement fits a standing purchase order or an annual contract. Project-based work — a fabrication contract, a one-time build, a defined EPC scope — needs a supply arrangement that matches its own timeline: a fixed quantity, staged dispatches against project milestones, and a clean handover once the project closes. Sonatek Steels structures procurement around your project plan, not the other way around.',
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'BUILT AROUND YOUR PROJECT PLAN', subtitle: 'A supply structure that follows your project phases instead of forcing your project around a standard order cycle.',
        items: [
          { icon: 'CalendarClock', title: 'Milestone-Based Dispatch', description: 'Steel arrives in stages aligned to your project phases, reducing on-site storage and material handling costs.' },
          { icon: 'FileSignature', title: 'Fixed-Scope Contracts', description: 'A defined quantity and timeline for the life of the project, with pricing locked in at the start.' },
          { icon: 'Headset', title: 'Single Point of Contact', description: 'One account manager coordinates your full project requirement from kickoff through final dispatch.' },
          { icon: 'ClipboardCheck', title: 'Clean Project Closeout', description: 'Full documentation and reconciliation at project end, with no lingering open-ended commitments.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: 'How is project-based supply different from a standing purchase order?', answer: 'A project-based arrangement is scoped to a fixed quantity and timeline tied to your project, rather than an open-ended recurring order. Pricing and dispatch schedule are agreed upfront for the life of the project.' },
        { question: 'Can dispatch be staged around our construction or fabrication milestones?', answer: 'Yes, we plan staged dispatches against your project phases so material arrives when you need it, not all at once.' },
        { question: 'What if our project timeline changes mid-way?', answer: 'We work with you to adjust the remaining dispatch schedule; our SAIL-backed sourcing gives us the flexibility to accommodate reasonable timeline shifts.' },
        { question: 'Do you support one-time or short-duration projects?', answer: "Yes, project-based supply is built specifically for defined-scope work, whether that's a multi-year build or a short fabrication contract." },
        { question: 'Will we get a single consolidated invoice and documentation set for the project?', answer: 'Yes, we maintain project-level documentation and can consolidate MTCs and dispatch records for a clean closeout.' },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: 'PLAN YOUR PROJECT SUPPLY', description: "Share your project scope, quantity, and timeline. We'll structure a dispatch plan that matches it exactly.",
        btnText: 'Contact Us', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80',
      } },
    ],
  },
  {
    slug: 'solutions-ready-stock-supply', title: 'Solutions — Ready Stock Supply', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'Ready Stock Supply',
        description: 'Standard flat steel grades and sizes, always in stock and ready for immediate dispatch — no mill lead time, no waiting.',
        image: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1200&q=80',
        ctaText: 'Check Stock Availability', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/ready-stock-supply' }, { label: 'Ready Stock Supply', href: '/ready-stock-supply' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'Ex-Stock Availability', title: "WHEN YOU CAN'T WAIT ON A MILL SCHEDULE.",
        bodyText: "Some requirements simply can't wait for a fresh mill production run. Sonatek Steels maintains extensive ready stock of our core CR coil, sheet, and chequered plate range at our Northern India warehouse, so standard grades and sizes are available for immediate dispatch — not weeks away. For urgent maintenance, unplanned production runs, or short-notice orders, ready stock is the difference between staying on schedule and losing a day's output.",
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'WHY READY STOCK MATTERS', subtitle: 'When schedule matters more than anything else, ex-stock availability is what keeps your operation moving.',
        items: [
          { icon: 'Zap', title: 'Zero Mill Lead Time', description: 'Standard grades and sizes are already in our warehouse, ready for immediate dispatch.' },
          { icon: 'AlarmClock', title: 'Urgent Order Support', description: 'Built for last-minute maintenance runs, unplanned shortfalls, and short-notice production needs.' },
          { icon: 'FileCheck', title: 'Full Documentation, No Delay', description: 'Manufacturer Test Certificates are ready alongside stock — no waiting on paperwork either.' },
          { icon: 'Warehouse', title: 'Northern India Warehousing', description: 'Centrally located stockyard means faster regional delivery once your order is confirmed.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: 'What products are typically available as ready stock?', answer: 'Our core CR coil and sheet range across common thicknesses and widths, along with chequered plates, are maintained as ready stock. HR products are typically sourced on request but can be stocked for regular customers on agreed terms.' },
        { question: 'How fast can a ready-stock order be dispatched?', answer: 'Standard grades and sizes already in stock can typically be dispatched within a day or two of order confirmation, subject to destination and transport availability.' },
        { question: 'Can I get Manufacturer Test Certificates for ready stock material?', answer: 'Yes, every ready-stock dispatch is accompanied by the relevant MTC, the same as any other order.' },
        { question: 'Is ready stock only for urgent or emergency orders?', answer: "No, it's available for any order — it's simply the fastest path when you don't want to wait on a fresh mill production run." },
        { question: "What if the exact size I need isn't in ready stock?", answer: "We'll confirm the closest available stock size or, if needed, coordinate a fresh mill order or in-house processing to your exact requirement." },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: "CHECK WHAT'S IN STOCK TODAY", description: "Tell us the grade, thickness, and quantity you need — we'll confirm ready-stock availability right away.",
        btnText: 'Check Availability', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80',
      } },
    ],
  },
  {
    slug: 'solutions-annual-supply-contract', title: 'Solutions — Annual Supply Contract', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'Annual Supply Contract',
        description: 'Locked-in pricing and guaranteed volume for your yearly flat steel requirement — plan your production budget without chasing quotes every month.',
        image: 'https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=1200&q=80',
        ctaText: 'Discuss an Annual Contract', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/annual-supply-contract' }, { label: 'Annual Supply Contract', href: '/annual-supply-contract' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'Long-Term Supply', title: 'ONE AGREEMENT. TWELVE MONTHS OF CERTAINTY.',
        bodyText: 'Repeated monthly quoting and re-negotiation adds administrative overhead and pricing risk to your production planning. An Annual Supply Contract with Sonatek Steels locks in your flat steel requirement, indicative pricing structure, and delivery commitment for the year, backed by our direct SAIL MOU dealership. You get predictable input costs for budgeting; we get the visibility to plan stock and logistics around your consumption pattern.',
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'WHY LOCK IN AN ANNUAL CONTRACT', subtitle: 'Predictability across sourcing, pricing, and delivery gives your production planning a stable foundation.',
        items: [
          { icon: 'TrendingDown', title: 'Price Stability', description: 'Agreed pricing structure for the contract period reduces exposure to short-term market volatility.' },
          { icon: 'ShieldCheck', title: 'Guaranteed Volume Priority', description: 'Your committed volume is planned into our stock and mill allocation ahead of time.' },
          { icon: 'FileSignature', title: 'Simplified Procurement', description: 'One agreement replaces monthly quote cycles and repeat purchase order approvals.' },
          { icon: 'CalendarClock', title: 'Annual Production Planning', description: 'Predictable steel costs and delivery commitments support your own yearly budgeting and planning cycle.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: 'How is pricing structured under an annual contract?', answer: 'Pricing is typically structured with an agreed base or indicative rate for the contract period, with mechanisms discussed upfront for any market-linked adjustments. Exact terms are worked out with our sales team based on your volume and product mix.' },
        { question: 'Is there a minimum volume commitment?', answer: 'Annual contracts are built around your actual yearly consumption; our team will work with you to structure a volume commitment that reflects your real requirement.' },
        { question: 'Can the delivery schedule be spread across the year?', answer: 'Yes, deliveries can be scheduled monthly, quarterly, or against your production calendar, as agreed in the contract.' },
        { question: 'What happens if our requirement changes mid-year?', answer: 'We review and adjust the remaining contract volume and schedule with you — annual contracts are structured with reasonable flexibility, not treated as rigid, unchangeable commitments.' },
        { question: 'Which products can be included in an annual contract?', answer: 'Our full flat steel range — CR coils and sheets (core stock) and HR coils, sheets, plates, and chequered plates — can be included based on your yearly requirement.' },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: 'PLAN YOUR YEAR OF STEEL SUPPLY', description: "Share your estimated annual requirement and we'll structure a contract that gives you price and delivery certainty.",
        btnText: 'Contact Us', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80',
      } },
    ],
  },
  {
    slug: 'solutions-logistics-delivery', title: 'Solutions — Logistics & Delivery', status: 'published',
    blocks: [
      { blockType: 'solution-hero', order: 0, anchorId: 'overview', data: {
        title: 'Logistics & Delivery',
        description: 'Planned dispatches and reliable regional delivery, direct to your site or factory gate — steel that arrives when your schedule says it should.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80',
        ctaText: 'Plan Your Delivery', ctaHref: '/contact-us',
        breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/logistics-delivery' }, { label: 'Logistics & Delivery', href: '/logistics-delivery' }],
      } },
      navBlock,
      { blockType: 'mission-section', order: 2, data: {
        label: 'Delivery Execution', title: "IT'S NOT DELIVERED UNTIL IT'S AT YOUR GATE.",
        bodyText: 'Sourcing the right steel is only half the job — getting it to your site or factory on schedule, undamaged, and properly documented is what actually keeps your production or project on track. Sonatek Steels manages dispatch scheduling, regional transport, and delivery coordination directly, so you have a single point of contact from order confirmation to gate delivery, not a handoff between separate sourcing and logistics providers.',
      } },
      solutionsBlock,
      { blockType: 'icon-grid', order: 4, anchorId: 'advantages', data: {
        title: 'HOW WE MANAGE DELIVERY', subtitle: 'From dispatch scheduling to gate delivery, every step is coordinated to keep your material moving on time.',
        items: [
          { icon: 'CalendarClock', title: 'Planned Dispatch Scheduling', description: 'Deliveries are scheduled against your requirement date, not left to first-available transport.' },
          { icon: 'Truck', title: 'Regional Delivery Network', description: "Established road transport coverage across Northern India's key industrial and construction hubs." },
          { icon: 'PackageCheck', title: 'Damage-Free Handling', description: 'Coils, sheets, and plates are loaded, strapped, and transported with edge and surface protection to prevent transit damage.' },
          { icon: 'Radio', title: 'Real-Time Coordination', description: 'A single point of contact for dispatch status and delivery updates, from confirmation through gate delivery.' },
        ],
      } },
      industriesBlock,
      insightsBlock,
      { blockType: 'faq-section', order: 7, anchorId: 'faqs', data: { title: 'FAQs', items: [
        { question: 'How is this different from your Freight Forwarding service?', answer: 'Logistics & Delivery focuses on regional, direct-to-site delivery execution for your steel orders. Freight Forwarding covers broader multi-modal cargo movement, including road, rail, and ocean freight coordination for larger or cross-region shipments.' },
        { question: 'Can delivery be scheduled to a specific date or time window?', answer: 'Yes, we plan dispatch against your required delivery date; specific time windows can be coordinated for site-access-restricted locations.' },
        { question: 'What areas do you deliver to?', answer: "Our regional delivery network covers Northern India's major industrial, construction, and manufacturing hubs. Contact us to confirm coverage for your specific location." },
        { question: 'How do you prevent transit damage to coils and sheets?', answer: 'Material is edge-protected, strapped, and loaded using handling practices suited to flat steel, minimizing denting, edge damage, and corrosion risk during transport.' },
        { question: 'Can you coordinate delivery to multiple sites for a single order?', answer: 'Yes, we can split and schedule delivery across multiple site locations as part of a single coordinated order.' },
      ] } },
      { blockType: 'cta-banner-industry', order: 8, data: {
        title: 'SCHEDULE YOUR NEXT DELIVERY', description: "Tell us your site location and required delivery window — we'll plan the dispatch and keep you updated to gate delivery.",
        btnText: 'Contact Us', btnHref: '/contact-us', bgImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85',
      } },
    ],
  },
];

// Links to append to the navbar's "Solutions" mega-menu "SOLUTIONS" section.
export const NAVBAR_SOLUTIONS_LINKS = [
  { label: 'Industrial Procurement', href: '/industrial-procurement' },
  { label: 'OEM Supply Solutions', href: '/oem-supply-solutions' },
  { label: 'Project Based Steel Supply', href: '/project-based-steel' },
  { label: 'Ready Stock Supply', href: '/ready-stock-supply' },
  { label: 'Annual Supply Contract', href: '/annual-supply-contract' },
  { label: 'Logistics & Delivery', href: '/logistics-delivery' },
];
