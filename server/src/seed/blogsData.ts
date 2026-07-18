// Seed data for 6 SEO-optimized blog posts + their tags. Companion to
// seedData.ts / newSolutionsData.ts / newServicesData.ts — separate since
// it targets the Blog/Tag collections, not Pages.

export interface SeedTag { label: string; slug: string; }
export interface SeedBlog {
    title: string;
    slug: string;
    excerpt: string;
    content: string; // HTML, matches Tiptap's output format used by RichTextEditor
    author: string;
    readTime: number;
    isFeatured: boolean;
    isPublished: boolean;
    coverImage: string;
    tagSlugs: string[];
}

export const SEED_TAGS: SeedTag[] = [
    { label: 'Steel Grades', slug: 'steel-grades' },
    { label: 'Buying Guide', slug: 'buying-guide' },
    { label: 'Technical', slug: 'technical' },
    { label: 'Custom Processing', slug: 'custom-processing' },
    { label: 'Procurement', slug: 'procurement' },
    { label: 'Industry Insights', slug: 'industry-insights' },
];

export const SEED_BLOGS: SeedBlog[] = [
    {
        title: 'Cold Rolled vs Hot Rolled Steel: Key Differences and Which One You Need',
        slug: 'cold-rolled-vs-hot-rolled-steel-differences',
        excerpt: "Cold Rolled and Hot Rolled steel look similar on paper but perform very differently in production. Here's how to tell them apart and choose the right one for your application.",
        author: 'Sonatek Editorial',
        readTime: 6,
        isFeatured: true,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
        tagSlugs: ['steel-grades', 'buying-guide'],
        content: `<p>If you're sourcing flat steel for the first time, one of the first decisions you'll face is Cold Rolled (CR) or Hot Rolled (HR). Both start from the same slab, but the way they're finished changes their strength, surface, tolerance, and ideal use case dramatically. Here's a practical breakdown to help you choose correctly the first time.</p>
<h2>How They're Made</h2>
<p>Hot Rolled steel is rolled at high temperature, above the metal's recrystallization point. This makes it easier and cheaper to produce in large volumes, but leaves a rougher, scaled surface and looser dimensional tolerances.</p>
<p>Cold Rolled steel starts as Hot Rolled coil, then goes through additional processing — further rolling at room temperature, followed by annealing and skin-passing — to achieve a smoother surface, tighter thickness control, and improved mechanical properties.</p>
<h2>Key Differences at a Glance</h2>
<ul>
<li><strong>Surface finish:</strong> HR has a darker, scaled surface. CR has a smooth, clean, often slightly oiled finish.</li>
<li><strong>Tolerances:</strong> CR holds significantly tighter thickness and flatness tolerances than HR.</li>
<li><strong>Formability:</strong> CR is generally more ductile and better suited to deep drawing and precision stamping.</li>
<li><strong>Cost:</strong> HR is typically more economical per tonne due to fewer processing steps.</li>
<li><strong>Strength for structural use:</strong> HR is favored for structural and heavy-duty applications where surface finish matters less than strength and thickness.</li>
</ul>
<h2>When to Choose Hot Rolled</h2>
<p>HR steel is the right call for structural fabrication, construction, heavy machinery bases, pipelines, and any application where the material will be welded, painted, or otherwise processed further, and where a mill-scale surface isn't a problem.</p>
<h2>When to Choose Cold Rolled</h2>
<p>CR steel is the better choice for automotive body panels, appliance housings, furniture, precision stamped components, and any application where surface finish, tight tolerance, or formability under stamping and drawing operations matters.</p>
<h2>Still Not Sure Which Grade Fits Your Application?</h2>
<p>Choosing between CR and HR, and the right grade within each, depends on your specific load, forming, and finish requirements. Our <a href="/technical-steel-selection">Technical Steel Selection</a> team can help you match the right material to your application before you place an order. Explore our full <a href="/steel-procurement">Steel Procurement Solution</a> for certified CR and HR coils, sheets, and plates sourced directly from SAIL.</p>`,
    },
    {
        title: 'Understanding Steel Grades: A Practical Guide to IS 513 and IS 2062',
        slug: 'understanding-steel-grades-is-513-is-2062',
        excerpt: "IS 513 and IS 2062 govern most flat steel used in India. Here's what each standard actually covers, and how to read a grade designation with confidence.",
        author: 'Sonatek Editorial',
        readTime: 7,
        isFeatured: false,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
        tagSlugs: ['steel-grades', 'technical'],
        content: `<p>Every steel order in India references a standard, most commonly IS 513 for Cold Rolled products or IS 2062 for Hot Rolled structural steel. Understanding what these standards actually specify helps you order the right material with confidence, instead of relying on a supplier's word alone.</p>
<h2>IS 513: Cold Rolled Low Carbon Steel Sheets and Strips</h2>
<p>IS 513 governs Cold Rolled steel intended for cold forming. It defines several grades based on formability:</p>
<ul>
<li><strong>D (Commercial):</strong> General-purpose grade for basic forming and fabrication.</li>
<li><strong>DD (Drawing):</strong> Improved formability for moderate deep-drawing applications.</li>
<li><strong>EDD (Extra Deep Drawing):</strong> Highest formability grade, used for complex stamped components like automotive panels.</li>
</ul>
<p>The standard also specifies surface finish categories, dimensional tolerances, and mechanical property ranges for yield strength, tensile strength, and elongation.</p>
<h2>IS 2062: Hot Rolled Structural Steel</h2>
<p>IS 2062 governs Hot Rolled steel plates, sheets, and sections intended for structural and general engineering use. It's organized primarily by yield strength grade, with E250 being the most common grade for general fabrication, construction, and machinery bases. Higher grades like E350 and E410 offer greater strength for weight-sensitive structural applications.</p>
<h2>How to Read a Grade Designation</h2>
<p>A typical designation such as "IS 2062 E250 BR" tells you the standard, the minimum yield strength (250 MPa), and a suffix indicating specific quality requirements such as impact testing conditions. Understanding each component helps you compare quotations accurately and avoid receiving a technically different grade than what your application needs.</p>
<h2>Why Grade Selection Matters</h2>
<p>Ordering the wrong grade doesn't just risk part failure — it can mean rejected batches, cracking during forming, or unnecessary cost from over-specifying a grade you don't actually need. A quick technical review before ordering is almost always cheaper than a rework.</p>
<h2>Get the Right Grade the First Time</h2>
<p>Our <a href="/technical-steel-selection">Technical Steel Selection Support</a> team reviews your application against IS 513, IS 2062, and other relevant standards to recommend the correct grade, thickness, and finish. Browse our full <a href="/products">product range</a> or <a href="/contact-us">get in touch</a> to discuss your specification.</p>`,
    },
    {
        title: 'Five Signs Your Business Needs a Custom Steel Processing Partner',
        slug: 'signs-you-need-custom-steel-processing-partner',
        excerpt: "Still slitting, shearing, or trimming steel in-house? Here are five signs it's time to outsource your material preparation to a dedicated processing partner.",
        author: 'Sonatek Editorial',
        readTime: 5,
        isFeatured: false,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
        tagSlugs: ['custom-processing', 'buying-guide'],
        content: `<p>Many manufacturers handle basic steel preparation — slitting, shearing, cutting to length — in-house without ever questioning whether it's the most efficient approach. Here are five signs it might be time to hand that work to a dedicated processing partner instead.</p>
<h2>1. Scrap Is Eating Into Your Margins</h2>
<p>If your production floor is generating consistent offcuts and trim waste from in-house cutting, that scrap represents lost material cost every single run. Receiving steel already cut to your exact dimensions eliminates that waste at the source.</p>
<h2>2. Your Preparatory Equipment Is Aging or Underused</h2>
<p>Slitting lines and shears are a significant capital investment. If yours are outdated, frequently down for maintenance, or sitting idle between infrequent processing runs, outsourcing can free up both capital and floor space.</p>
<h2>3. Tolerances Are Inconsistent Between Batches</h2>
<p>In-house cutting on general-purpose equipment often can't match the tolerance consistency of dedicated CNC-controlled slitting and shearing lines, especially across high-volume or long production runs.</p>
<h2>4. Skilled Labor Is Tied Up on Material Prep Instead of Production</h2>
<p>Every hour your team spends slitting or shearing coils is an hour not spent on your actual product. Outsourcing material preparation lets your skilled labor focus on higher-value work.</p>
<h2>5. You're Scaling Faster Than Your Prep Capacity</h2>
<p>If order volume is growing faster than your ability to prepare raw material internally, a processing partner can absorb that growth without requiring new equipment purchases or hiring.</p>
<h2>What a Processing Partner Should Offer</h2>
<p>Look for a partner who can combine slitting, shearing, and cut-to-length capability with certified sourcing and delivery scheduling that matches your production calendar, not the other way around.</p>
<p>Our <a href="/custom-steel-processing">Custom Steel Processing</a> service converts master coils into production-ready blanks and slit coils, backed by certified sourcing through our SAIL MOU dealership. <a href="/contact-us">Talk to our team</a> about your processing requirements.</p>`,
    },
    {
        title: 'How to Choose the Right Flat Steel Supplier for Your Manufacturing Business',
        slug: 'how-to-choose-flat-steel-supplier',
        excerpt: "Price isn't the only thing that matters when picking a steel supplier. Here's a practical checklist covering certification, consistency, and delivery reliability.",
        author: 'Sonatek Editorial',
        readTime: 6,
        isFeatured: false,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
        tagSlugs: ['procurement', 'buying-guide'],
        content: `<p>Choosing a flat steel supplier is a decision that affects your production schedule, your product quality, and your bottom line for years, not just your next purchase order. Here's what to actually evaluate beyond the quoted price per tonne.</p>
<h2>1. Mill-Direct Sourcing and Traceability</h2>
<p>Ask where the steel actually comes from. Suppliers with direct relationships to primary producers like SAIL can offer genuine material traceability, backed by Manufacturer Test Certificates for every batch — something resellers further down the chain often can't guarantee.</p>
<h2>2. Consistent Stock Availability</h2>
<p>A supplier's published product range means little if common sizes and grades are frequently out of stock. Ask about typical lead times and whether they maintain ready stock for standard requirements versus sourcing on request.</p>
<h2>3. Processing and Value-Added Capability</h2>
<p>Suppliers who can also slit, shear, and cut-to-length save you a processing step and a second vendor relationship. This matters more as your order complexity grows.</p>
<h2>4. Technical Support, Not Just Order Taking</h2>
<p>A supplier who can help you confirm the right grade, thickness, and finish for your application is worth more than one who simply fulfills whatever you order, correct or not.</p>
<h2>5. Delivery Reliability</h2>
<p>Ask about regional coverage, typical dispatch timelines, and how urgent or unplanned orders are handled. A supplier's delivery network matters as much as their product catalog.</p>
<h2>6. Commercial Flexibility</h2>
<p>Depending on your order pattern, you may benefit from an annual supply contract, bulk order handling, or a standard per-order relationship. A supplier who can structure the right commercial arrangement for your consumption pattern adds real value beyond price.</p>
<h2>Bringing It Together</h2>
<p>Sonatek Steels is an authorized SAIL MOU dealer supplying certified CR and HR flat steel products across Northern India, with in-house processing and technical selection support built in. Explore our <a href="/steel-procurement">Steel Procurement Solution</a> or <a href="/contact-us">contact our team</a> to discuss your requirement.</p>`,
    },
    {
        title: 'Steel Surface Finishes Explained: Pickled & Oiled, Skin-Passed, and Bright Annealed',
        slug: 'steel-surface-finishes-explained',
        excerpt: "Not all steel surfaces are created equal. Here's a plain-language guide to the most common flat steel surface finishes and where each one is used.",
        author: 'Sonatek Editorial',
        readTime: 6,
        isFeatured: false,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1200&q=80',
        tagSlugs: ['steel-grades', 'technical'],
        content: `<p>Surface finish is often an afterthought in steel procurement, until a batch shows up with the wrong texture for the job. Here's what the most common flat steel surface finishes actually mean, and when each one is the right choice.</p>
<h2>Pickled and Oiled (P&amp;O)</h2>
<p>Hot Rolled steel comes off the mill with a layer of scale, an oxide layer formed during hot rolling. Pickling removes this scale using an acid bath, leaving a clean, matte grey surface. A light oil coating is then applied to protect against corrosion during transit and storage. P&amp;O steel is ideal when you need Hot Rolled strength with a cleaner surface for painting, welding, or laser cutting, without the cost of full Cold Rolling.</p>
<h2>Skin-Passed</h2>
<p>Skin-passing is a light final rolling pass applied to Cold Rolled steel after annealing. It improves surface flatness, controls surface texture, and, importantly, eliminates stretcher-strain marks that can otherwise appear during later forming operations. Most commercial and drawing-grade CR sheet is skin-passed as standard.</p>
<h2>Bright Annealed</h2>
<p>Bright annealing is performed in a controlled, oxygen-free atmosphere, preventing the oxidation that would normally occur during heat treatment. The result is a smooth, reflective, mirror-like surface without any additional polishing. This finish is used where appearance matters as much as mechanical properties — visible trim, appliance panels, and architectural fittings.</p>
<h2>Full Hard vs Annealed Condition</h2>
<p>Beyond surface treatment, CR steel is also supplied in different tempering conditions. Full Hard steel retains maximum hardness from cold rolling with minimal ductility, suited to applications with little further forming. Annealed and skin-passed steel restores ductility for forming and drawing operations.</p>
<h2>Choosing the Right Finish</h2>
<p>The right finish depends on your downstream process: welding and painting favor P&amp;O or skin-passed surfaces, deep drawing favors annealed and skin-passed CR, and appearance-critical parts favor bright annealed or premium skin-passed finishes.</p>
<p>Our <a href="/custom-steel-processing">processing team</a> can advise on the right finish for your application, or explore our <a href="/products">product catalog</a> to see what's available across our CR and HR range.</p>`,
    },
    {
        title: "Northern India's Steel Supply Chain in 2026: Trends Every Buyer Should Know",
        slug: 'northern-india-steel-supply-chain-trends-2026',
        excerpt: "From warehousing consolidation to processing-on-demand, here's what's shaping flat steel procurement across Northern India's industrial corridors this year.",
        author: 'Sonatek Editorial',
        readTime: 7,
        isFeatured: false,
        isPublished: true,
        coverImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80',
        tagSlugs: ['industry-insights'],
        content: `<p>Northern India's flat steel supply chain has changed significantly over the past few years, driven by growing industrial demand across Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan. Here's what buyers should have on their radar in 2026.</p>
<h2>1. Consolidation Around Regional Warehousing Hubs</h2>
<p>Rather than sourcing from scattered, smaller stockists, more buyers are consolidating procurement through suppliers with established regional warehousing, reducing lead times and simplifying vendor management across multi-site operations.</p>
<h2>2. Rising Demand for Processed, Production-Ready Steel</h2>
<p>Manufacturers are increasingly ordering slit coils and cut-to-length sheets instead of raw master coils, shifting processing cost and complexity onto their supplier rather than managing it in-house. This trend is especially strong among mid-size fabricators without dedicated processing lines.</p>
<h2>3. Greater Emphasis on Material Traceability</h2>
<p>Quality audits and end-customer requirements are pushing buyers to demand full Manufacturer Test Certificate documentation on every order, not just spot checks, reinforcing demand for mill-direct sourcing relationships over multi-layered reseller chains.</p>
<h2>4. Annual and Bulk Contracts Gaining Ground</h2>
<p>With input costs fluctuating, more industrial buyers are locking in annual supply contracts or structured bulk agreements to stabilize pricing and guarantee volume availability, rather than negotiating every order individually.</p>
<h2>5. Infrastructure and Industrial Project Demand Remains Strong</h2>
<p>Continued investment in construction, infrastructure, and industrial expansion across the region keeps demand elevated for both structural Hot Rolled products and precision Cold Rolled components used in equipment manufacturing.</p>
<h2>What This Means for Buyers</h2>
<p>Suppliers who combine certified sourcing, regional distribution, processing capability, and flexible commercial terms are increasingly the default choice over single-capability vendors. If your current supply chain hasn't kept pace with these shifts, it may be worth a review.</p>
<p>Sonatek Steels operates a warehousing and distribution network across Northern India's key industrial corridors. Explore our <a href="/supply-chain">Supply Chain Solutions</a> or <a href="/contact-us">get in touch</a> to discuss your regional requirement.</p>`,
    },
];
