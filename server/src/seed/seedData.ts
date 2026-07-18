// AUTO-GENERATED seed data — captures the real CMS content for every
// migrated page plus the site navbar. Regenerate by re-running the export
// (see server/seed.sh) after making further content changes in the DB you
// want to persist. Do not hand-edit long block data here; edit via the
// admin Page Builder / Navbar screens and re-export instead.

export interface SeedBlock { blockType: string; order: number; anchorId?: string; data?: Record<string, unknown>; }
export interface SeedPage { slug: string; title: string; status: 'draft' | 'published'; seo?: Record<string, unknown>; blocks: SeedBlock[]; }
export interface SeedNavbar { logoUrl: string; phones: Record<string, unknown>[]; mapUrl: string; navItems: Record<string, unknown>[]; }

export const SEED_PAGES: SeedPage[] = [
  {
    "slug": "home",
    "title": "Home",
    "status": "published",
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "ogImage": ""
    },
    "blocks": [
      {
        "blockType": "hero",
        "order": 0,
        "data": {
          "title": "Your Partner with",
          "description": "Afnan",
          "paragraph": "Established in 2014, Sonatek Steels Pvt. Ltd. are the leading distributors of flat steel products in Northern India.",
          "btnText": "Explore Our Products",
          "btnLink": "/product",
          "videoUrl": "https://cdn.pixabay.com/video/2021/02/05/64212-509543056_large.mp4",
          "posterUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
        }
      },
      {
        "blockType": "why-sonatek",
        "order": 1,
        "data": {
          "label": "Why Sonatek Steels?",
          "headline": "Precision. Reliability.",
          "body": "As MOU Dealers of SAIL and leading stockists in Northern India, we provide a comprehensive range of flat steel products tailored to your industrial needs. From OEMs to corporate clients, we deliver quality and excellence in every coil and sheet.",
          "ctaText": "Explore Our Solutions",
          "ctaHref": "/supply-chain"
        }
      },
      {
        "blockType": "impact",
        "order": 2,
        "data": {
          "label": "Make an Impact",
          "headline": "Engineering Excellence\nin Steel Distribution",
          "sub": "Sonatek Steels plays a vital role in Northern India's industrial growth by providing high-quality flat steel products to OEMs and corporate clients.",
          "stats": [
            {
              "value": 11,
              "suffix": "+",
              "label": "Years of excellence"
            },
            {
              "value": 500,
              "suffix": "K+",
              "label": "Tons of steel delivered"
            },
            {
              "value": 120,
              "suffix": "+",
              "label": "Industries helped"
            },
            {
              "value": 95,
              "suffix": "%",
              "label": "Repeat customers"
            }
          ]
        }
      },
      {
        "blockType": "single-platform",
        "order": 3,
        "data": {
          "label": "A Single Platform for Trade",
          "headline": "One Partner. Total\nSteel Solutions.",
          "sub": "Whatever your project, whatever your requirement, we have the complete range of flat steel products and custom processing solutions. That's the Sonatek Steels advantage.",
          "ctaText": "Find Your Solution",
          "ctaHref": "/supply-chain"
        }
      },
      {
        "blockType": "services-home",
        "order": 4,
        "data": {
          "products": [
            {
              "name": "Hot Rolled (HR) Sheets",
              "slug": "hr-sheets",
              "image": ""
            },
            {
              "name": "Hot Rolled (HR) Coils",
              "slug": "hr-coils",
              "image": ""
            },
            {
              "name": "Cold Rolled (CR) Sheets",
              "slug": "cr-sheets",
              "image": ""
            }
          ]
        }
      },
      {
        "blockType": "global-network",
        "order": 5
      },
      {
        "blockType": "beyond-business",
        "order": 6
      },
      {
        "blockType": "latest-news",
        "order": 7,
        "data": {
          "items": []
        }
      },
      {
        "blockType": "testimonials",
        "order": 8,
        "data": {
          "items": []
        }
      },
      {
        "blockType": "cta-banner-home",
        "order": 9,
        "data": {
          "headline": "Talk to a Steel\nExpert",
          "sub": "Get solutions that fit your industrial needs. Talk to a flat steel product expert today.",
          "btnText": "Contact Us",
          "btnLink": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85"
        }
      }
    ]
  },
  {
    "slug": "industries-construction",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "Construction Industry",
          "title": "Steel Foundations for Modern Infrastructure",
          "description": "High-strength flat steel and chequered plates for bridges, high-rises, and industrial complexes.",
          "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "hero",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "capabilities",
              "label": "Capabilities"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "anchorId": "mission",
        "data": {
          "label": "Mission",
          "title": "Building a Stronger Tomorrow",
          "bodyText": "We provide the structural backbone for India's growing infrastructure with reliable, high-quality steel products."
        }
      },
      {
        "blockType": "stats-section",
        "order": 3,
        "anchorId": "stats",
        "data": {
          "label": "Impact",
          "title": "Strength in Numbers",
          "description": "Supporting large-scale construction projects with consistent quality.",
          "stats": [
            {
              "value": 15,
              "suffix": "k+",
              "label": "Projects Supported"
            },
            {
              "value": 200,
              "suffix": "k+",
              "label": "Tons Delivered"
            },
            {
              "value": 50,
              "suffix": "+",
              "label": "Cities Reached"
            }
          ]
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "CONSTRUCTION SOLUTIONS",
          "subtitle": "Durable steel products for every build phase.",
          "items": [
            {
              "title": "Structural Steel Supply",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Industrial Flooring Solutions",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Fabrication Support",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Site Delivery Logistics",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Quality Assurance",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Sustainable Building",
              "image": "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
              "href": "/sustainability"
            }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 5,
        "anchorId": "capabilities",
        "data": {
          "title": "ENGINEERED FOR STRENGTH",
          "subtitle": "Quality steel that meets international building codes.",
          "points": [
            {
              "icon": "Building2",
              "title": "Structural Integrity",
              "description": "High-tensile steel grades for maximum load-bearing capacity."
            },
            {
              "icon": "Shield",
              "title": "Corrosion Resistance",
              "description": "Specialized coatings and treatments for long-lasting performance."
            },
            {
              "icon": "Clock",
              "title": "Project Timelines",
              "description": "On-time delivery to keep your construction project on schedule."
            }
          ]
        }
      },
      {
        "blockType": "video-teaser",
        "order": 6,
        "anchorId": "video",
        "data": {
          "label": "IN ACTION",
          "title": "Building the Smart Cities of the Future",
          "description": "See how Sonatek Steels contributes to the infrastructure that defines modern India.",
          "videoUrl": "https://cdn.pixabay.com/video/2018/11/02/19084-297771746_large.mp4"
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "services",
        "data": {
          "title": "OUR SERVICES",
          "subtitle": "Specialized steel products for construction professionals.",
          "services": [
            {
              "title": "HR Plates",
              "description": "Heavy-duty plates for structural and industrial applications.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Chequered Plates",
              "description": "Anti-slip flooring solutions for safety and durability.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Project Management",
              "description": "End-to-end supply chain support for large-scale builds.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/infrastructure-industrial-project"
            }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What is the standard thickness of chequered plates you offer?",
              "answer": "We offer chequered plates in various thicknesses ranging from 3mm to 12mm, suitable for different load requirements."
            },
            {
              "question": "Do you provide bulk discounts for large infrastructure projects?",
              "answer": "Yes, we offer competitive bulk pricing and dedicated supply chains for large-scale government and private infrastructure projects."
            },
            {
              "question": "Are your steel products BIS certified?",
              "answer": "Yes, all our steel products comply with BIS standards and come with manufacturer test certificates from SAIL."
            },
            {
              "question": "Which steel grades are recommended for structural framing?",
              "answer": "For load-bearing structures, high-tensile HR plates and sheets, such as IS 2062 grade, are recommended for their strength and weldability in beams, columns, and trusses."
            },
            {
              "question": "Can you deliver steel directly to active construction sites?",
              "answer": "Yes, we coordinate staged site delivery logistics so material arrives in sequence with your build schedule, reducing on-site storage and handling constraints."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "anchorId": "cta",
        "data": {
          "title": "START YOUR PROJECT",
          "description": "Get the high-quality steel you need for your next construction project.",
          "btnText": "Request Quote",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Industries — Construction"
  },
  {
    "slug": "industries-automotive",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "AUTOMOTIVE INDUSTRY",
          "title": "Premium Steel Solutions That Drive Automotive Manufacturing",
          "description": "The automotive industry demands precision, consistency, and uncompromising quality. Every component, from structural assemblies to body panels, depends on steel that delivers exceptional strength, dimensional accuracy, and reliable performance. Sonatek Steels supplies premium Cold Rolled (CR) Coils, CR Sheets, Hot Rolled (HR) Coils, and HR Sheets that support manufacturers, OEMs, Tier-1 suppliers, component manufacturers, and fabrication units across the automotive industry.",
          "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85",
          "ctaText": "Request an Automotive Steel Quote",
          "ctaHref": "/contact-us",
          "secondaryCtaText": "Talk to an Automotive Steel Expert",
          "secondaryCtaHref": "/contact-us",
          "breadcrumbs": [
            { "label": "Home", "href": "/" },
            { "label": "Automotive", "href": "/industries/automotive" }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            { "id": "hero", "label": "Overview" },
            { "id": "solutions", "label": "Solutions" },
            { "id": "process", "label": "Supply Process" },
            { "id": "applications", "label": "Applications" },
            { "id": "advantages", "label": "Why Sonatek" },
            { "id": "faqs", "label": "FAQs" }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "OVERVIEW",
          "title": "Steel Solutions for the Automotive Industry",
          "bodyText": "Automotive manufacturing requires steel that offers high precision, excellent formability, consistent thickness, and dependable mechanical performance. From passenger vehicles and commercial vehicles to electric vehicles (EVs) and industrial transport equipment, steel remains one of the most important raw materials in modern automotive production. At Sonatek Steels, we provide high-quality steel products that help manufacturers improve production efficiency, reduce rejection rates, and achieve superior finished products."
        }
      },
      {
        "blockType": "icon-grid",
        "order": 3,
        "anchorId": "benefits",
        "data": {
          "title": "WHY CHOOSE STEEL FOR AUTOMOTIVE MANUFACTURING?",
          "subtitle": "Automotive manufacturers require materials capable of meeting strict quality standards while supporting high-speed production environments. Our steel products provide:",
          "items": [
            { "icon": "Sparkles", "title": "Excellent Surface Quality", "description": "A clean, consistent surface finish suited to visible and paint-ready automotive parts." },
            { "icon": "Ruler", "title": "Consistent Thickness", "description": "Tight thickness tolerances across every coil and sheet for predictable stamping and forming." },
            { "icon": "Layers", "title": "Superior Formability", "description": "Steel that shapes cleanly under high-speed press and stamping operations." },
            { "icon": "ShieldCheck", "title": "High Strength", "description": "Reliable mechanical strength for structural and safety-critical components." },
            { "icon": "Zap", "title": "Reliable Weldability", "description": "Consistent weld performance across body, chassis, and structural assemblies." },
            { "icon": "CheckCircle2", "title": "Better Dimensional Accuracy", "description": "Precise dimensions that reduce fitment issues on the production line." },
            { "icon": "Settings2", "title": "Smooth Fabrication", "description": "Steel that processes cleanly through cutting, bending, and forming operations." },
            { "icon": "Gauge", "title": "Consistent Production Performance", "description": "Predictable material behaviour that supports high-speed production environments." }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "OUR AUTOMOTIVE STEEL SOLUTIONS",
          "subtitle": "A complete range of CR and HR steel products, plus bulk supply and processing support, built for automotive production.",
          "items": [
            { "icon": "Layers", "title": "Cold Rolled (CR) Coils", "description": "Premium CR Coils designed for precision, excellent surface finish, and superior forming — ideal for body panels, automotive brackets, reinforcement parts, interior components, and structural assemblies." },
            { "icon": "Square", "title": "Cold Rolled (CR) Sheets", "description": "Precision steel sheets suitable for stamping, fabrication, and bending, with a smooth surface finish, high dimensional accuracy, excellent paint and coating performance, and consistent quality." },
            { "icon": "Flame", "title": "Hot Rolled (HR) Coils", "description": "High-strength steel for structural automotive applications requiring durability and reliable performance." },
            { "icon": "PanelsTopLeft", "title": "Hot Rolled (HR) Sheets", "description": "Suitable for heavy-duty automotive parts, chassis components, fabrication, and structural assemblies." },
            { "icon": "Warehouse", "title": "Bulk Industrial Supply", "description": "Reliable bulk supply programs for automotive manufacturers requiring uninterrupted steel availability and scheduled deliveries." },
            { "icon": "Wrench", "title": "Processing Support", "description": "Value-added processing solutions that help deliver steel that's ready for your production requirements." }
          ]
        }
      },
      {
        "blockType": "process-steps",
        "order": 5,
        "anchorId": "process",
        "data": {
          "label": "PROCESS",
          "title": "Our Supply Process",
          "steps": [
            { "title": "Requirement Consultation", "description": "Our team understands your product specifications, production requirements, and delivery schedule." },
            { "title": "Product Selection", "description": "Choose the right CR or HR steel product based on your application and manufacturing needs." },
            { "title": "Order Confirmation", "description": "Inventory is allocated and supply schedules are planned according to your requirements." },
            { "title": "Quality Inspection", "description": "Each order is checked to ensure consistent quality before dispatch." },
            { "title": "Delivery", "description": "Steel is delivered safely and on time to support uninterrupted manufacturing operations." }
          ]
        }
      },
      {
        "blockType": "innovation-section",
        "order": 6,
        "anchorId": "applications",
        "data": {
          "title": "AUTOMOTIVE APPLICATIONS",
          "subtitle": "Our steel products are widely used in the manufacturing of:",
          "items": [
            { "title": "Vehicle Body Panels", "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", "description": "Steel with excellent formability and surface finish for exterior and interior vehicle panels.", "link": "/products" },
            { "title": "Chassis Components", "image": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", "description": "High-strength steel for structural support and vehicle framework.", "link": "/products" },
            { "title": "Automotive Brackets", "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", "description": "Precision steel for mounting brackets, reinforcement parts, and support structures.", "link": "/products" },
            { "title": "Seating Systems", "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "description": "Steel components used in automotive seating assemblies and structural frames.", "link": "/products" },
            { "title": "Industrial Vehicle Components", "image": "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80", "description": "Reliable steel for commercial vehicles, transport equipment, and heavy-duty automotive applications.", "link": "/industries/working-machinery" },
            { "title": "Electric Vehicle (EV) Components", "image": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", "description": "Steel solutions supporting the growing electric vehicle manufacturing industry.", "link": "/products" }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 7,
        "data": {
          "label": "WHY MANUFACTURERS CHOOSE US",
          "title": "Why Automotive Manufacturers Choose Sonatek Steels",
          "subtitle": "We combine consistent product quality, ready inventory, and dedicated service to support automotive manufacturers at every stage of production.",
          "points": [
            { "icon": "BadgeCheck", "title": "Consistent Product Quality", "description": "Reliable steel with uniform dimensions and dependable performance." },
            { "icon": "Warehouse", "title": "Ready Stock Availability", "description": "Fast access to premium CR and HR steel products for uninterrupted production." },
            { "icon": "Truck", "title": "Reliable Deliveries", "description": "Timely dispatches help manufacturers meet production schedules and customer commitments." },
            { "icon": "Briefcase", "title": "Bulk Procurement Support", "description": "Long-term supply solutions designed for automotive manufacturers and OEMs." },
            { "icon": "Headset", "title": "Customer-Focused Service", "description": "Dedicated support from enquiry to delivery for a smooth procurement experience." },
            { "icon": "Handshake", "title": "Long-Term Supply Partnerships", "description": "Building dependable relationships with manufacturers through reliable supply and responsive service." }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 8,
        "data": {
          "label": "PRODUCT RANGE",
          "title": "Products We Supply",
          "bodyText": "Our automotive steel range includes Cold Rolled (CR) Coils, Cold Rolled (CR) Sheets, Hot Rolled (HR) Coils, and Hot Rolled (HR) Sheets — giving automotive manufacturers a complete range of precision and structural steel from a single, reliable supplier."
        }
      },
      {
        "blockType": "icon-grid",
        "order": 9,
        "anchorId": "advantages",
        "data": {
          "title": "WHY CHOOSE SONATEK STEELS?",
          "subtitle": "Sonatek Steels is committed to supporting India's automotive industry with dependable steel solutions that combine quality, reliability, and service excellence. From precision Cold Rolled products to durable Hot Rolled steel, we help manufacturers streamline procurement, improve production efficiency, and maintain consistent product quality.",
          "items": [
            { "icon": "ShieldCheck", "title": "Premium CR & HR Steel", "description": "Sourced from certified primary producers for consistent quality." },
            { "icon": "Warehouse", "title": "Reliable Inventory", "description": "Stocked material ready to process without long lead times." },
            { "icon": "Zap", "title": "Fast Dispatch", "description": "Streamlined order-to-dispatch turnaround." },
            { "icon": "Truck", "title": "Bulk Industrial Supply", "description": "High-tonnage supply programs for uninterrupted production." },
            { "icon": "Settings2", "title": "Value-Added Processing Support", "description": "Processing solutions that deliver production-ready steel." },
            { "icon": "Globe", "title": "Pan-India Delivery", "description": "Coordinated dispatch and delivery across the country." },
            { "icon": "Headset", "title": "Dedicated Customer Assistance", "description": "A responsive team throughout your order and delivery cycle." },
            { "icon": "BadgeCheck", "title": "Consistent Quality Standards", "description": "Every order checked against the same quality benchmark." },
            { "icon": "Handshake", "title": "Long-Term Business Partnerships", "description": "Dependable relationships built on reliable supply and service." },
            { "icon": "Award", "title": "Trusted Industrial Supply Partner", "description": "A proven partner for India's automotive manufacturing industry." }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 10,
        "data": {
          "label": "PARTNERSHIP",
          "title": "Driving Manufacturing Excellence with Premium Steel",
          "bodyText": "The automotive industry demands suppliers who understand quality, consistency, and reliability. At Sonatek Steels, we work closely with manufacturers to deliver steel solutions that support efficient production, reduce procurement challenges, and contribute to long-term manufacturing success."
        }
      },
      {
        "blockType": "services-section",
        "order": 11,
        "anchorId": "related",
        "data": {
          "title": "OUR SERVICES FOR AUTOMOTIVE MANUFACTURERS",
          "subtitle": "Explore the full range of processing, supply, and distribution services available from Sonatek Steels.",
          "services": [
            { "title": "Coil Slitting", "description": "High-speed, precision slitting that converts master coils into narrower, tightly toleranced slit coils.", "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", "href": "/services/coil-slitting" },
            { "title": "Cut-To-Length Service", "description": "Master coils converted into flat, perfectly squared sheets and blanks, cut to your exact length.", "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "href": "/services/cut-to-length" },
            { "title": "Luster Steel Processing", "description": "Surface finishing treatments delivering a clean, bright luster finish for appearance-critical applications.", "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", "href": "/services/luster-steel-processing" },
            { "title": "Bulk Industrial Supply", "description": "High-tonnage flat steel supply handled as a single, coordinated dispatch for large-volume requirements.", "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", "href": "/services/bulk-industrial-supply" },
            { "title": "Delivery & Logistics Service", "description": "Fleet coordination, route planning, and handling protocols that move your steel from warehouse to gate.", "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80", "href": "/services/logistics-delivery" }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 12,
        "anchorId": "faqs",
        "data": {
          "title": "Frequently Asked Questions",
          "items": [
            { "question": "Which steel products are commonly used in the automotive industry?", "answer": "Cold Rolled (CR) steel is commonly used for body panels and precision components, while Hot Rolled (HR) steel is preferred for structural and heavy-duty applications." },
            { "question": "Do you supply steel for OEM manufacturers?", "answer": "Yes. We support OEMs, Tier-1 suppliers, component manufacturers, and industrial fabrication companies." },
            { "question": "Can Sonatek handle recurring bulk orders?", "answer": "Absolutely. We provide scheduled supply programs and long-term procurement support for automotive manufacturers." },
            { "question": "Do you offer steel processing services?", "answer": "Yes. We also provide value-added processing solutions based on customer requirements." },
            { "question": "Do you deliver across India?", "answer": "Yes. We support automotive manufacturers across North India and provide Pan-India supply solutions." }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 13,
        "data": {
          "title": "Request an Automotive Steel Quote Today",
          "description": "Discover why manufacturers trust Sonatek Steels as their reliable steel supply partner — from precision CR products to durable HR steel, backed by ready stock, fast dispatch, and dedicated support.",
          "btnText": "Request an Automotive Steel Quote",
          "btnHref": "/contact-us",
          "secondaryBtnText": "Talk to an Automotive Steel Expert",
          "secondaryBtnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        }
      }
    ],
    "seo": {
      "metaTitle": "Automotive Steel Supplier | CR & HR Steel Solutions | Sonatek Steels",
      "metaDescription": "Premium CR & HR steel solutions for the automotive industry. Reliable supply, bulk orders, fast dispatch, and Pan-India delivery for OEMs and manufacturers.",
      "ogImage": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85"
    },
    "status": "published",
    "title": "Industries — Automotive"
  },
  {
    "slug": "industries-oil-gas",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "Oil & Gas Industry",
          "title": "Corrosion-Resistant Steel for Energy",
          "description": "Sonatek Steels supplies specialized steel grades for pipelines, storage tanks, and offshore platforms, designed to withstand extreme environments.",
          "image": "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1149"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "hero",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "capabilities",
              "label": "Capabilities"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "anchorId": "mission",
        "data": {
          "label": "Mission",
          "title": "Fueling Industrial Progress",
          "bodyText": "We provide high-performance steel that ensures the safety and efficiency of the energy sector."
        }
      },
      {
        "blockType": "stats-section",
        "order": 3,
        "anchorId": "stats",
        "data": {
          "label": "Impact",
          "title": "Powering the Nation",
          "description": "Supplying the critical infrastructure for Northern India's energy hubs.",
          "stats": [
            {
              "value": 8,
              "suffix": "+",
              "label": "Energy Hubs Served"
            },
            {
              "value": 120,
              "suffix": "k+",
              "label": "Tons Delivered"
            },
            {
              "value": 99,
              "suffix": "%",
              "label": "Compliance Rate"
            }
          ]
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "ENERGY SOLUTIONS",
          "subtitle": "Specialized steel for the Oil & Gas value chain.",
          "items": [
            {
              "title": "Pipeline Steel Supply",
              "image": "https://images.unsplash.com/photo-1543165737-1422b512e0e0?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Storage Tank Materials",
              "image": "https://images.unsplash.com/photo-1565345758117-9191d8481309?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Refinery Support",
              "image": "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Corrosion Protection",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Offshore Capabilities",
              "image": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Safety Compliance",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "href": "/sustainability"
            }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 5,
        "anchorId": "capabilities",
        "data": {
          "title": "EXTREME DURABILITY",
          "subtitle": "Steel that performs under pressure.",
          "points": [
            {
              "icon": "ShieldAlert",
              "title": "Corrosion Resistance",
              "description": "HIC and SSCC resistant steel grades for sour service environments."
            },
            {
              "icon": "Thermometer",
              "title": "Extreme Temperature",
              "description": "Steel that maintains properties in both cryogenic and high-heat conditions."
            },
            {
              "icon": "Search",
              "title": "Rigorous Testing",
              "description": "UT, MPI, and other non-destructive testing for guaranteed integrity."
            }
          ]
        }
      },
      {
        "blockType": "video-teaser",
        "order": 6,
        "anchorId": "video",
        "data": {
          "label": "IN FOCUS",
          "title": "Securing the Energy Supply Chain",
          "description": "Watch how our specialized steel solutions support the largest refineries in the region.",
          "videoUrl": "https://cdn.pixabay.com/video/2022/10/25/136365-764353842_large.mp4"
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "services",
        "data": {
          "title": "OUR SERVICES",
          "subtitle": "Specialized products for the energy sector.",
          "services": [
            {
              "title": "API Grade Steel",
              "description": "Certified steel for pipeline and pressure vessel applications.",
              "image": "https://images.unsplash.com/photo-1543165737-1422b512e0e0?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Processing",
              "description": "Precision cutting and beveling for pipeline segments.",
              "image": "https://images.unsplash.com/photo-1516198116318-7b944983058a?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Inventory Management",
              "description": "Dedicated stock for emergency maintenance and shutdowns.",
              "image": "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "Do you supply steel for offshore applications?",
              "answer": "Yes, we provide specialized high-strength, corrosion-resistant steel grades suitable for offshore platforms and marine environments."
            },
            {
              "question": "What certifications do you provide with Oil & Gas steel?",
              "answer": "We provide full material traceability with EN 10204 3.1/3.2 certificates and third-party inspection reports where required."
            },
            {
              "question": "Can you handle fast-track delivery for refinery maintenance?",
              "answer": "Yes, we maintain a buffer stock of critical energy-grade steel to support rapid-response maintenance and shutdown requirements."
            },
            {
              "question": "Do you supply API-grade steel for pipeline projects?",
              "answer": "Yes, we source API-grade plates and coils suited for pipeline and pressure vessel fabrication, backed by full mill certification."
            },
            {
              "question": "How is steel protected against sour service and HIC failure?",
              "answer": "We supply HIC and SSCC resistant grades tested for sour service environments, ensuring long-term integrity in pipelines, tanks, and refinery equipment."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "anchorId": "cta",
        "data": {
          "title": "GET ENERGIZED",
          "description": "Source high-performance steel for your next energy project.",
          "btnText": "Consult an Expert",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Industries — Oil & Gas"
  },
  {
    "slug": "industries-shipbuilding",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "Shipbuilding Industry",
          "title": "Marine-Grade Steel for the High Seas",
          "description": "Certified marine steel plates for ship hulls, decks, and offshore structures, meeting the highest classification society standards.",
          "image": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "hero",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "capabilities",
              "label": "Capabilities"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "anchorId": "mission",
        "data": {
          "label": "Mission",
          "title": "Setting Sail with Quality",
          "bodyText": "We provide the durability and reliability needed to conquer the ocean's toughest challenges."
        }
      },
      {
        "blockType": "stats-section",
        "order": 3,
        "anchorId": "stats",
        "data": {
          "label": "Impact",
          "title": "Maritime Excellence",
          "description": "Supporting India's maritime growth with certified steel solutions.",
          "stats": [
            {
              "value": 5,
              "suffix": "+",
              "label": "Major Shipyards"
            },
            {
              "value": 80,
              "suffix": "k+",
              "label": "Tons Supplied"
            },
            {
              "value": 100,
              "suffix": "%",
              "label": "Class Certified"
            }
          ]
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "MARITIME SOLUTIONS",
          "subtitle": "Comprehensive steel for naval and commercial vessels.",
          "items": [
            {
              "title": "Hull Plate Supply",
              "image": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Deck Steel Solutions",
              "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Offshore Structures",
              "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Marine Logistics",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Surface Treatment",
              "image": "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Certified Sourcing",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "href": "/steel-procurement"
            }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 5,
        "anchorId": "capabilities",
        "data": {
          "title": "BATTLE-TESTED",
          "subtitle": "Steel that survives the harshest maritime conditions.",
          "points": [
            {
              "icon": "Waves",
              "title": "Saltwater Resistance",
              "description": "Marine-grade alloys designed to minimize corrosion in high-salinity environments."
            },
            {
              "icon": "Anchor",
              "title": "Impact Strength",
              "description": "Steel that maintains toughness even in sub-zero water temperatures."
            },
            {
              "icon": "FileCheck",
              "title": "Class Approval",
              "description": "Steel plates certified by ABS, LR, DNV, and other major classification societies."
            }
          ]
        }
      },
      {
        "blockType": "video-teaser",
        "order": 6,
        "anchorId": "video",
        "data": {
          "label": "IN ACTION",
          "title": "Forging the Vessels of Tomorrow",
          "description": "Watch how our steel plates are transformed into the hulls of world-class vessels.",
          "videoUrl": "https://cdn.pixabay.com/video/2020/10/30/54050-476694600_large.mp4"
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "services",
        "data": {
          "title": "OUR SERVICES",
          "subtitle": "Marine-specific steel products and services.",
          "services": [
            {
              "title": "Hull Plates",
              "description": "Grade A, B, D, and E ship plates for hull and structure.",
              "image": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Shot Blasting & Priming",
              "description": "Pre-treated steel plates ready for immediate shipyard use.",
              "image": "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Marine Engineering Support",
              "description": "Technical consultation for marine-grade steel selection.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/technical-steel-selection"
            }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "Do you offer shot-blasted and primed plates?",
              "answer": "Yes, we can provide steel plates that are shot-blasted and primed with shop-primer to prevent corrosion during shipyard storage."
            },
            {
              "question": "Which classification society certificates do you provide?",
              "answer": "We can provide certification from ABS, Lloyd's Register (LR), DNV, and IRS, depending on your project requirements."
            },
            {
              "question": "What is the maximum plate width you can supply for hulls?",
              "answer": "We can supply hull plates up to 3000mm in width, allowing for more efficient welding and construction."
            },
            {
              "question": "What marine steel grades do you stock for hull and deck plates?",
              "answer": "We stock Grade A, B, D, and E ship plates suited to hull, deck, and structural applications across varying strength and toughness requirements."
            },
            {
              "question": "Can you support offshore structure fabrication with certified plates?",
              "answer": "Yes, we supply class-certified plates and technical support for offshore platforms, deck structures, and marine engineering projects."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "anchorId": "cta",
        "data": {
          "title": "ANCHOR YOUR SUCCESS",
          "description": "Secure the best marine-grade steel for your shipyard.",
          "btnText": "Talk to a Marine Expert",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Industries — Shipbuilding"
  },
  {
    "slug": "industries-heavy-engineering",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "Heavy Engineering",
          "title": "Steel for Massive Industrial Ambitions",
          "description": "Sonatek Steels provides high-thickness plates and specialized alloys required for power plants, earthmoving equipment, and mining machinery.",
          "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "hero",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "capabilities",
              "label": "Capabilities"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "anchorId": "mission",
        "data": {
          "label": "Mission",
          "title": "Engineering the Extraordinary",
          "bodyText": "We provide the structural foundation for the most demanding engineering feats with steel that never compromises on integrity."
        }
      },
      {
        "blockType": "stats-section",
        "order": 3,
        "anchorId": "stats",
        "data": {
          "label": "Impact",
          "title": "Industrial Power",
          "description": "Scaling heavy engineering solutions across the Northern Indian industrial corridor.",
          "stats": [
            {
              "value": 20,
              "suffix": "+",
              "label": "Major Hubs Served"
            },
            {
              "value": 150,
              "suffix": "k+",
              "label": "Tons Delivered"
            },
            {
              "value": 15,
              "suffix": "+",
              "label": "Engineering Giants"
            }
          ]
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "ENGINEERING SOLUTIONS",
          "subtitle": "Robust steel products for heavy-duty industrial applications.",
          "items": [
            {
              "title": "High-Thickness Plate Supply",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Profile Cutting",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Stress-Relieved Alloys",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Specialized Logistics",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Non-Destructive Testing",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Bulk Inventory Support",
              "image": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 5,
        "anchorId": "capabilities",
        "data": {
          "title": "UNRIVALED STRENGTH",
          "subtitle": "Steel that powers the world's most massive machines.",
          "points": [
            {
              "icon": "Shield",
              "title": "Extreme Durability",
              "description": "Wear-resistant and high-tensile grades designed for mining and earthmoving."
            },
            {
              "icon": "Settings",
              "title": "Technical Precision",
              "description": "Meeting the strict dimensional tolerances required for complex engineering."
            },
            {
              "icon": "TrendingUp",
              "title": "Supply Reliability",
              "description": "Consistent supply of specialized alloys to keep production lines moving."
            }
          ]
        }
      },
      {
        "blockType": "video-teaser",
        "order": 6,
        "anchorId": "video",
        "data": {
          "label": "IN MOTION",
          "title": "The Backbone of Heavy Industry",
          "description": "Watch how our steel plates are used in the construction of massive industrial infrastructure.",
          "videoUrl": "https://cdn.pixabay.com/video/2016/09/21/5412-183416045_large.mp4"
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "services",
        "data": {
          "title": "OUR SERVICES",
          "subtitle": "Specialized steel for heavy engineering professionals.",
          "services": [
            {
              "title": "Heavy HR Plates",
              "description": "Large-format plates for power plants and heavy machinery.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Forging Quality Steel",
              "description": "High-grade ingots and billets for heavy-duty forging applications.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Consulting & Testing",
              "description": "Expert technical support for material selection and weldability.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/technical-steel-selection"
            }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What is the maximum thickness of HR plates you can supply?",
              "answer": "We can supply HR plates up to 150mm thickness, sourced from SAIL's specialized mills."
            },
            {
              "question": "Do you provide ultrasonic testing for heavy plates?",
              "answer": "Yes, we provide UT (Ultrasonic Testing) reports to ensure internal soundness for high-pressure applications."
            },
            {
              "question": "Can you provide customized profiles for earthmoving parts?",
              "answer": "Yes, we offer precision CNC flame and plasma cutting services to provide near-net-shape blanks."
            },
            {
              "question": "Do you supply wear-resistant steel for mining machinery?",
              "answer": "Yes, we offer high-tensile, wear-resistant alloys engineered for the abrasive demands of mining, earthmoving, and heavy equipment applications."
            },
            {
              "question": "Can you maintain consistent supply for continuous production lines?",
              "answer": "Yes, we hold bulk inventory of specialized heavy-engineering grades to ensure your production schedules are never disrupted by material shortages."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "anchorId": "cta",
        "data": {
          "title": "SCALE YOUR AMBITION",
          "description": "Partner with a steel provider that understands the scale of your engineering projects.",
          "btnText": "Get a Quote",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Industries — Heavy Engineering"
  },
  {
    "slug": "industries-fabricators-oems",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "anchorId": "hero",
        "data": {
          "label": "Fabricators & OEMs",
          "title": "Precision Steel for Quality Manufacturing",
          "description": "A reliable partner for local fabricators and global OEMs, providing ready-to-use steel solutions with JIT delivery.",
          "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "hero",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "capabilities",
              "label": "Capabilities"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "anchorId": "mission",
        "data": {
          "label": "Mission",
          "title": "Partnering in Precision",
          "bodyText": "Your growth is our priority. We simplify your supply chain so you can focus on manufacturing excellence."
        }
      },
      {
        "blockType": "stats-section",
        "order": 3,
        "anchorId": "stats",
        "data": {
          "label": "Impact",
          "title": "Local Reach, Global Quality",
          "description": "Serving the heartbeat of Northern India's manufacturing sector.",
          "stats": [
            {
              "value": 500,
              "suffix": "+",
              "label": "Local Fabricators"
            },
            {
              "value": 50,
              "suffix": "+",
              "label": "Global OEMs"
            },
            {
              "value": 24,
              "suffix": "/7",
              "label": "Operational Support"
            }
          ]
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "MANUFACTURING SOLUTIONS",
          "subtitle": "Tailored steel processing for fabricators and manufacturers.",
          "items": [
            {
              "title": "Just-In-Time Delivery",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Precision Slitting",
              "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Cut-To-Length Sheets",
              "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Value-Added Blanks",
              "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Inventory Consignment",
              "image": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
              "href": "/supply-chain"
            },
            {
              "title": "Material Traceability",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "href": "/technical-steel-selection"
            }
          ]
        }
      },
      {
        "blockType": "built-to-deliver",
        "order": 5,
        "anchorId": "capabilities",
        "data": {
          "title": "PRECISION & SPEED",
          "subtitle": "Streamlining your manufacturing process with reliable steel supply.",
          "points": [
            {
              "icon": "Zap",
              "title": "High Versatility",
              "description": "A wide range of grades and sizes in stock to meet diverse fabrication needs."
            },
            {
              "icon": "CheckCircle",
              "title": "Quality Consistency",
              "description": "Standardized processing ensures every blank meets your manufacturing specs."
            },
            {
              "icon": "Clock",
              "title": "Efficiency Boost",
              "description": "Reduced lead times help you maintain lean inventory and faster production cycles."
            }
          ]
        }
      },
      {
        "blockType": "video-teaser",
        "order": 6,
        "anchorId": "video",
        "data": {
          "label": "IN ACTION",
          "title": "Empowering Local Manufacturing",
          "description": "Watch how our value-added processing helps fabricators achieve global quality standards.",
          "videoUrl": "https://cdn.pixabay.com/video/2020/10/30/54050-476694600_large.mp4"
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "services",
        "data": {
          "title": "OUR SERVICES",
          "subtitle": "Ready-to-use steel for fabricators and OEMs.",
          "services": [
            {
              "title": "Slit Coils",
              "description": "Precision slitting for continuous manufacturing lines.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Custom Blanks",
              "description": "Ready-to-weld blanks to reduce your in-house processing time.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Material Planning",
              "description": "Dedicated support to help you optimize your steel usage.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/technical-steel-selection"
            }
          ]
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What is your minimum order quantity for fabricators?",
              "answer": "We support both small-scale fabricators and large OEMs with flexible order quantities tailored to your project needs."
            },
            {
              "question": "Do you provide test certificates for small sheet orders?",
              "answer": "Yes, every order, regardless of size, comes with original manufacturer test certificates for quality assurance."
            },
            {
              "question": "Can you provide precision tolerances for sheet thickness?",
              "answer": "All our products meet the standard IS/SAIL tolerances, and we can select specific batches for tighter requirements."
            },
            {
              "question": "Do you offer just-in-time delivery for fabrication workshops?",
              "answer": "Yes, we support JIT and inventory consignment programs so fabricators can maintain lean stock while avoiding production delays."
            },
            {
              "question": "Can you supply ready-to-weld blanks and slit coils?",
              "answer": "Yes, our precision slitting and cut-to-length services provide ready-to-use blanks and slit coils that reduce in-house processing time for fabricators and OEMs."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "anchorId": "cta",
        "data": {
          "title": "PARTNER FOR GROWTH",
          "description": "Let Sonatek Steels handle your processing so you can focus on building.",
          "btnText": "Become a Partner",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Industries — Fabricators & OEMs"
  },
  {
    "slug": "sustainability",
    "blocks": [
      {
        "blockType": "hero",
        "order": 0,
        "data": {
          "title": "SUSTAINABILITY",
          "description": "",
          "paragraph": "We are committed to sustainable development and environmental responsibility",
          "videoUrl": "https://cdn.pixabay.com/video/2020/07/10/44370-438662051_large.mp4"
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "initiatives",
              "label": "Our Journey"
            },
            {
              "id": "partnerships",
              "label": "Partnerships"
            },
            {
              "id": "documents",
              "label": "Documents"
            },
            {
              "id": "related-documents",
              "label": "Related Documents"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Our Mission",
          "title": "ENGINEERING EXCELLENCE IN STEEL",
          "bodyText": "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do."
        }
      },
      {
        "blockType": "beyond-business",
        "order": 3,
        "data": {
          "heading": "OUR INITIATIVES"
        }
      },
      {
        "blockType": "focus-areas-section",
        "order": 4,
        "anchorId": "initiatives",
        "data": {
          "title": "OUR JOURNEY",
          "description": "We are committed to sustainable development and environmental responsibility through our core focus areas.",
          "areas": [
            {
              "id": "health-safety",
              "tabLabel": "Health & Safety",
              "cardTitle": "HEALTH & SAFETY",
              "cardDescription": "Safety is the utmost priority at Sonatek Steels. Everyone adheres to the policies and guidelines to ensure their well-being and the welfare of other people, property and environment. We maintain Occupation Health Centers (OHC) and strictly comply with applicable legislation, protocols and regulations.",
              "image": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80"
            },
            {
              "id": "sustainable-sourcing",
              "tabLabel": "Sustainable Sourcing",
              "cardTitle": "SUSTAINABLE SOURCING",
              "cardDescription": "As a leading MOU dealer of SAIL, we prioritize sourcing steel from producers who follow eco-friendly manufacturing processes. Our supply chain is optimized for minimal environmental impact, ensuring that quality steel is delivered with responsibility and local technical assistance.",
              "image": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80"
            },
            {
              "id": "technical-excellence",
              "tabLabel": "Technical Excellence",
              "cardTitle": "TECHNICAL EXCELLENCE",
              "cardDescription": "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do, ensuring high-performance solutions for all industrial segments.",
              "image": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
            }
          ]
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 5,
        "data": {
          "title": "DEVELOPMENT IMPACT",
          "description": "Our Development Impact Catalogue explores how Sonatek Steels supports sustainable development through its global operations. By combining smart logistics with infrastructure investment, we create long-term value for communities, supporting jobs, growth, and access, and helping to build a more inclusive global economy.",
          "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
          "link": "/contact-us",
          "isReversed": false
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 6,
        "data": {
          "title": "ENVIRONMENTAL STEWARDSHIP",
          "description": "Protecting the planet is at the heart of our mission. We implement rigorous environmental management systems to minimize our impact on biodiversity and ecosystems. From waste reduction to water conservation, we are committed to leaving a healthier planet for future generations.",
          "image": "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
          "link": "/contact-us",
          "isReversed": true
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 7,
        "data": {
          "title": "COMMUNITY EMPOWERMENT",
          "description": "We believe that our success is linked to the prosperity of the communities we serve. Our social investment programs focus on education, vocational training, and entrepreneurship, providing individuals with the tools they need to succeed and thrive in a rapidly changing world.",
          "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
          "link": "/contact-us",
          "isReversed": false
        }
      },
      {
        "blockType": "sustainability-partners",
        "order": 8,
        "anchorId": "partnerships",
        "data": {
          "partners": [
            {
              "name": "Partner 2",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            },
            {
              "name": "Partner 3",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            },
            {
              "name": "Partner 4",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            },
            {
              "name": "Partner 5",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            },
            {
              "name": "Partner 6",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            },
            {
              "name": "Partner 7",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            },
            {
              "name": "Partner 8",
              "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            }
          ]
        }
      },
      {
        "blockType": "key-documents",
        "order": 9,
        "anchorId": "documents",
        "data": {
          "documents": [
            {
              "title": "SAFETY PROTOCOL 2024",
              "type": "KEY DOCUMENT",
              "imageUrl": "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
              "downloadUrl": "#"
            },
            {
              "title": "HEALTH & SAFETY POLICY",
              "type": "POLICY",
              "imageUrl": "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
              "downloadUrl": "#"
            },
            {
              "title": "ENVIRONMENTAL STEWARDSHIP",
              "type": "REPORT",
              "imageUrl": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
              "downloadUrl": "#"
            },
            {
              "title": "SUPPLIER CODE OF CONDUCT",
              "type": "CONDUCT",
              "imageUrl": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
              "downloadUrl": "#"
            }
          ]
        }
      },
      {
        "blockType": "related-documents",
        "order": 10,
        "anchorId": "related-documents",
        "data": {
          "documents": [
            {
              "title": "Sonatek Steels Sustainability Strategy",
              "url": "#"
            },
            {
              "title": "Net Zero by 2050 Commitment",
              "url": "#"
            },
            {
              "title": "Community Investment Guidelines",
              "url": "#"
            },
            {
              "title": "Supplier Code of Conduct",
              "url": "#"
            }
          ]
        }
      },
      {
        "blockType": "sustainability-faqs",
        "order": 11,
        "anchorId": "faqs",
        "data": {
          "faqs": [
            {
              "question": "What are the safety standards at Sonatek Steels?",
              "answerText": "Safety is our utmost priority. We strictly comply with applicable legislation, protocols, and regulations. We maintain fire protection systems, Occupational Health Centers (OHC), and conduct regular checks of international safety standards and procedures."
            },
            {
              "question": "How does Sonatek Steels ensure sustainable sourcing?",
              "answerText": "As an MOU dealer of SAIL, we ensure that our products come from producers committed to sustainable manufacturing. We also optimize our logistics in Northern India to minimize environmental impact during distribution."
            },
            {
              "question": "What is Sonatek Steels doing to reduce its environmental impact?",
              "answerText": "We implement rigorous environmental management practices, including waste reduction and water conservation initiatives, to minimize our impact on biodiversity and local ecosystems across our operations."
            },
            {
              "question": "Does Sonatek Steels have a supplier code of conduct?",
              "answerText": "Yes, our Supplier Code of Conduct sets clear expectations for ethical business practices, environmental responsibility, and fair labor standards across our sourcing and distribution network."
            },
            {
              "question": "How does Sonatek Steels support the communities it operates in?",
              "answerText": "Through our community empowerment programs, we invest in education, vocational training, and entrepreneurship initiatives that help local communities grow alongside our business."
            }
          ]
        }
      },
      {
        "blockType": "cta-section",
        "order": 12,
        "data": {
          "title": "SUSTAINABILITY AT SONATEK STEELS",
          "description": "Making a positive impact on the world.",
          "buttonText": "Read More",
          "buttonLink": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Sustainability"
  },
  {
    "slug": "services-port-network",
    "blocks": [
      {
        "blockType": "industry-hero",
        "order": 0,
        "data": {
          "label": "",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Distribution Network",
              "href": "/services/port-services"
            },
            {
              "label": "Regional Network",
              "href": "/services/port-network"
            }
          ],
          "title": "OUR REGIONAL DISTRIBUTION NETWORK",
          "description": "Our Delhi warehouse and rail-and-road distribution network mean we are a partner you can trust across Northern India.",
          "image": "https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171",
          "ctaText": "Our Distribution Network"
        }
      },
      {
        "blockType": "stats-section",
        "order": 1,
        "data": {
          "label": "DISTRIBUTION NETWORK",
          "title": "CONNECTING SAIL'S PLANTS TO YOUR SITE",
          "description": "Our warehousing and dispatch network keeps certified flat steel moving from SAIL's plants to customers across Northern India.",
          "link": {
            "label": "Explore our network",
            "href": "#network"
          },
          "theme": "light",
          "stats": [
            {
              "value": 10,
              "suffix": "+",
              "label": "states covered across Northern India"
            },
            {
              "value": 200,
              "suffix": "k+",
              "label": "tons distributed annually"
            },
            {
              "value": 24,
              "suffix": "/7",
              "label": "dispatch & enquiry support"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 2,
        "data": {
          "navItems": [
            {
              "id": "network",
              "label": "Our Network"
            },
            {
              "id": "flagship",
              "label": "Flagship Hub"
            },
            {
              "id": "impact",
              "label": "Regional Impact"
            },
            {
              "id": "faq",
              "label": "FAQ"
            }
          ]
        }
      },
      {
        "blockType": "map-section",
        "order": 3,
        "anchorId": "network",
        "data": {
          "title": "HOW OUR NETWORK WORKS FOR YOU",
          "description": "Our Naraina warehouse and regional dispatch planning are built to optimize your steel supply chain.",
          "mapImage": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80",
          "link": {
            "label": "View our location",
            "href": "https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028"
          }
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 4,
        "anchorId": "flagship",
        "data": {
          "title": "LOHA MANDI, NARAINA",
          "description": "Our flagship warehouse sits in Naraina's Loha Mandi, Delhi's established steel trading hub, giving us fast access to road and rail links across Northern India for prompt, reliable dispatch.",
          "image": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
          "link": "/contact-us",
          "linkText": "Get Directions to Our Warehouse"
        }
      },
      {
        "blockType": "faq-section",
        "order": 5,
        "anchorId": "faq",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What services do you offer?",
              "answer": "We offer comprehensive end-to-end logistics solutions, from our Delhi warehouse to inland transportation across Northern India."
            },
            {
              "question": "Where are your warehouse and dispatch hubs located?",
              "answer": "Our flagship warehouse is located in Loha Mandi, Naraina, New Delhi, with dispatch coverage spanning Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan."
            },
            {
              "question": "How can I track my shipment?",
              "answer": "Our team provides direct updates on dispatch status and expected delivery timelines for all orders."
            },
            {
              "question": "Do you handle specialized cargo?",
              "answer": "Yes, we handle standard coils and sheets as well as oversized plates and project cargo for infrastructure and industrial sites."
            },
            {
              "question": "How many states does your distribution network cover?",
              "answer": "Our network reaches 10+ states across Northern India, supported by consistent rail and road dispatch scheduling."
            },
            {
              "question": "Can you support steel and industrial cargo through your network?",
              "answer": "Yes, our distribution network handles bulk, break-bulk, and project cargo, making it well-suited for steel, machinery, and other industrial shipments."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 6,
        "anchorId": "impact",
        "data": {
          "title": "REGIONAL REACH. LOCAL IMPACT.",
          "subtitle": "We are supporting Northern India's industrial growth while strengthening the communities we operate in.",
          "topLink": {
            "label": "Learn more",
            "href": "/contact-us"
          },
          "services": [
            {
              "title": "Powering Northern India's construction boom",
              "image": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
              "href": "/industries/construction",
              "description": "Structural steel and chequered plates dispatched to keep bridges, high-rises, and infrastructure projects on schedule."
            },
            {
              "title": "Supporting the NCR automotive manufacturing belt",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive",
              "description": "Just-in-time CR and HR coil supply for OEMs and component manufacturers across the Delhi-NCR corridor."
            },
            {
              "title": "Strengthening India's energy infrastructure",
              "image": "https://images.unsplash.com/photo-1543165737-1422b512e0e0?w=800&q=80",
              "href": "/industries/oil-gas",
              "description": "Reliable steel movement for pipeline, refinery, and storage tank projects across Northern India's energy hubs."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 7,
        "data": {
          "title": "PARTNER WITH OUR DISTRIBUTION NETWORK",
          "description": "Find out how our warehousing and dispatch network can help your business streamline steel procurement.",
          "btnText": "Contact Us",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Services — Port Network"
  },
  {
    "slug": "services-port-services",
    "blocks": [
      {
        "blockType": "service-hero",
        "order": 0,
        "data": {
          "title": "Warehousing & Distribution",
          "description": "Our Naraina warehouse and regional distribution network are at the heart of our operation, providing efficient and reliable steel supply across Northern India.",
          "image": "https://images.unsplash.com/photo-1597334948330-38795f25d05d?q=80&w=1171",
          "ctaText": "Read More",
          "ctaHref": "#intro"
        }
      },
      {
        "blockType": "icon-grid",
        "order": 1,
        "anchorId": "intro",
        "data": {
          "title": "YOUR GATEWAY TO NORTHERN INDIA",
          "subtitle": "Connecting SAIL's steel plants to your project site with precision and reliability.",
          "items": [
            {
              "icon": "Globe",
              "title": "Regional Reach",
              "description": "Dispatch coverage across Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan."
            },
            {
              "icon": "Zap",
              "title": "Fast Processing",
              "description": "Efficient turnaround from warehouse to dispatch for urgent orders."
            },
            {
              "icon": "Shield",
              "title": "Secure Storage",
              "description": "Weatherproof, high-capacity warehousing for coils, sheets, and plates."
            },
            {
              "icon": "Truck",
              "title": "Rail & Road Logistics",
              "description": "Coordinated rail and road transport connecting SAIL's plants to our stockyards."
            }
          ]
        }
      },
      {
        "blockType": "map-section",
        "order": 2,
        "data": {
          "title": "HOW OUR NETWORK WORKS FOR YOU",
          "description": "Our Naraina warehouse anchors a regional dispatch network, ensuring your steel moves seamlessly across Northern India.",
          "mapImage": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
        }
      },
      {
        "blockType": "how-we-can-help",
        "order": 3,
        "data": {
          "label": "OUR CAPABILITIES",
          "title": "BUILT FOR ALL FLAT STEEL",
          "subtitle": "We have the expertise and infrastructure to handle any flat steel product, regardless of size or complexity.",
          "items": [
            {
              "title": "HR Coils & Plates",
              "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "CR Coils & Sheets",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Chequered Plates",
              "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Automotive-Grade Steel",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Custom Processed Steel",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Project Cargo",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/infrastructure-industrial-project"
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 4,
        "data": {
          "title": "CONNECTING NORTHERN INDIA",
          "subtitle": "Explore our regional presence across major distribution corridors.",
          "topLink": {
            "label": "Explore our regional network",
            "href": "/contact-us"
          },
          "services": [
            {
              "title": "Delhi NCR",
              "description": "Our flagship warehouse hub, serving OEMs, fabricators, and corporate clients across the capital region.",
              "image": "https://images.unsplash.com/photo-1506461883276-5d4a3ef93d1b?w=800&q=80",
              "href": "/contact-us"
            },
            {
              "title": "Punjab & Haryana",
              "description": "Dependable dispatch to the automotive and manufacturing belts of Punjab and Haryana.",
              "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Uttar Pradesh",
              "description": "Steel supply for construction, fabrication, and industrial projects across the state.",
              "image": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
              "href": "/industries/construction"
            },
            {
              "title": "Rajasthan",
              "description": "Supporting heavy engineering and infrastructure development with reliable regional dispatch.",
              "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
              "href": "/industries/heavy-engineering"
            }
          ]
        }
      },
      {
        "blockType": "innovation-section",
        "order": 5,
        "data": {
          "title": "LEADING DISTRIBUTION INNOVATION",
          "subtitle": "Investing in the future of warehousing technology and sustainability.",
          "topLink": {
            "label": "View all innovation",
            "href": "/blogs"
          },
          "items": [
            {
              "title": "Digital Order Tracking",
              "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
              "description": "Real-time visibility and streamlined dispatch processing."
            },
            {
              "title": "Warehouse Modernization",
              "image": "https://images.unsplash.com/photo-1473876637954-4b493d59fd97?w=800&q=80",
              "description": "Sustainable energy and efficient inventory management."
            }
          ]
        }
      },
      {
        "blockType": "innovation-section",
        "order": 6,
        "data": {
          "title": "INSIGHTS",
          "subtitle": "The latest trends and perspectives from our regional distribution network.",
          "topLink": {
            "label": "View all insights",
            "href": "/blogs"
          },
          "items": [
            {
              "title": "The Future of Smart Warehousing",
              "image": "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80",
              "description": "How digital tools are transforming steel dispatch and inventory management."
            },
            {
              "title": "Sustainable Distribution Operations",
              "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=800&q=80",
              "description": "Reducing the environmental footprint of regional steel logistics."
            }
          ]
        }
      },
      {
        "blockType": "innovation-section",
        "order": 7,
        "data": {
          "title": "DISTRIBUTION WITH PURPOSE",
          "subtitle": "Creating positive impact in the communities where we operate.",
          "items": [
            {
              "title": "Environmental Stewardship",
              "image": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
              "description": "Reducing waste and optimizing logistics to lower our environmental footprint."
            },
            {
              "title": "Community Development",
              "image": "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
              "description": "Supporting local economies and education initiatives."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 8,
        "data": {
          "title": "PARTNER WITH OUR DISTRIBUTION NETWORK",
          "description": "Discover how our integrated warehousing and dispatch network can drive your business growth.",
          "btnText": "Contact Us",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
        }
      },
      {
        "blockType": "faq-section",
        "order": 9,
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What types of steel do you handle through your warehouse?",
              "answer": "We handle all flat steel forms including HR coils and plates, CR coils and sheets, chequered plates, and custom-processed and project cargo."
            },
            {
              "question": "Where are your main hubs located?",
              "answer": "Our flagship warehouse is in Loha Mandi, Naraina, New Delhi, with dispatch coverage spanning Delhi NCR, Punjab, Haryana, Uttar Pradesh, and Rajasthan."
            },
            {
              "question": "Do you offer value-added services?",
              "answer": "Yes, we offer a range of value-added services including warehousing, custom processing, and coordinated distribution scheduling."
            },
            {
              "question": "Can your warehouse handle large or oversized steel shipments?",
              "answer": "Yes, our facility is equipped to handle project cargo, heavy plates, and oversized shipments, making it well-suited for steel coils, plates, and industrial machinery."
            },
            {
              "question": "How fast is dispatch turnaround from your warehouse?",
              "answer": "Our facility is built for fast processing, with efficient turnaround from stock availability to dispatch to keep your supply chain moving."
            }
          ]
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Services — Port Services"
  },
  {
    "slug": "solutions-steel-procurement",
    "blocks": [
      {
        "blockType": "solution-hero",
        "order": 0,
        "anchorId": "overview",
        "data": {
          "title": "Steel Procurement Solution",
          "description": "Reliable, certified, and cost-effective sourcing of CR coils, sheets, and plates, our core stock, along with HR coils and sheets and chequered plates on request, directly from trusted primary mills like SAIL.",
          "image": "https://images.unsplash.com/photo-1697698532602-ccf880036281?q=80&w=1170&auto=format",
          "ctaText": "Request a Quote",
          "ctaHref": "/contact-us",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Solutions",
              "href": "/steel-procurement"
            },
            {
              "label": "Steel Procurement",
              "href": "/steel-procurement"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "overview",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "products",
              "label": "Products"
            },
            {
              "id": "advantages",
              "label": "Advantages"
            },
            {
              "id": "processing",
              "label": "Processing"
            },
            {
              "id": "industries",
              "label": "Industries"
            },
            {
              "id": "insights",
              "label": "Insights"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Procurement Excellence",
          "title": "YOUR TRUSTED STEEL SOURCING PARTNER.",
          "bodyText": "For buyers who demand uncompromising quality, Sonatek Steels offers a streamlined procurement solution. By bridging the gap between primary mills like SAIL and your manufacturing facility, we guarantee certified materials, ready availability, and transparent pricing for all your flat steel requirements. The solution is built for real procurement teams: fewer sourcing calls, clearer documentation, dependable stock, and a partner who understands how grade, size, finish, and delivery timing affect your project or production line."
        }
      },
      {
        "blockType": "services-section",
        "order": 3,
        "anchorId": "solutions",
        "data": {
          "title": "OUR CORE SOLUTIONS",
          "subtitle": "Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence.",
          "services": [
            {
              "title": "Steel Procurement Solution",
              "description": "Reliable, certified sourcing of CR/HR coils, sheets, and plates directly from trusted primary mills like SAIL.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Steel Processing",
              "description": "Slitting, shearing, pickling, and cut-to-size services delivering steel that is 100% ready for production.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Infrastructure & Industrial Projects",
              "description": "Scalable flat steel supply solutions and coordinated delivery schedules for large-scale industrial builds.",
              "image": "https://images.unsplash.com/photo-1761896057588-49e1a6306d8f?q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Technical Steel Selection Support",
              "description": "Expert advisory helping you choose the correct grade, thickness, and finish for your exact application.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Freight Forwarding",
              "description": "Seamless material movement coordination, planned dispatches, and reliable regional delivery networks.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Supply Chain Solutions",
              "description": "End-to-end requirement planning, stock availability management, and optimized distribution services.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 4,
        "anchorId": "products",
        "data": {
          "title": "CERTIFIED STEEL INVENTORY",
          "subtitle": "Explore our comprehensive range of flat steel products sourced from India's most respected steel manufacturers.",
          "services": [
            {
              "title": "CR Coils & Sheets",
              "description": "Our core stock: Cold Rolled steel providing superior surface finish, tight tolerances, and excellent formability, available in full-hard, skin-passed, and annealed conditions.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "HR Coils & Sheets",
              "description": "Also available on request: premium Hot Rolled steel from trusted sources like SAIL, ensuring structural integrity and longevity for select project and fabrication needs.",
              "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Chequered Plates",
              "description": "High-friction, anti-slip plates sourced directly from primary mills for maximum industrial safety.",
              "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Heavy Plates",
              "description": "Heavy gauge plates required for robust machinery, shipbuilding, and infrastructure development.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/products"
            }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 5,
        "anchorId": "advantages",
        "data": {
          "title": "THE SONATEK ADVANTAGE",
          "subtitle": "Why leading OEMs, fabricators, and infrastructure companies trust us with their critical steel procurement.",
          "items": [
            {
              "icon": "ShieldCheck",
              "title": "Trusted Sourcing",
              "description": "Authorized partnerships with primary producers like SAIL, guaranteeing genuine and certified steel."
            },
            {
              "icon": "BadgeCheck",
              "title": "Quality Assurance",
              "description": "100% material traceability with Manufacturer Test Certificates (MTC) accompanying every delivery."
            },
            {
              "icon": "Warehouse",
              "title": "Ready Stock Availability",
              "description": "Extensive inventory of standard sizes and grades maintained to handle urgent procurement demands."
            },
            {
              "icon": "Banknote",
              "title": "Competitive Pricing",
              "description": "Direct mill relationships allow us to offer highly competitive rates for bulk and continuous procurement."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 6,
        "anchorId": "processing",
        "data": {
          "title": "VALUE ADDED PROCESSING",
          "subtitle": "Beyond procurement, we deliver steel exactly how you need it. Our in-house processing centers convert coils to your exact specifications.",
          "topLink": {
            "label": "View processing capabilities",
            "href": "/custom-steel-processing"
          },
          "services": [
            {
              "title": "Custom Cut-to-Length",
              "description": "Precision shearing lines to deliver exact sheet dimensions, reducing your scrap and processing time.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Coil Slitting",
              "description": "Narrow coil slitting services maintaining edge quality and dimensional accuracy for roll forming applications.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Vendor Managed Inventory",
              "description": "Strategic stocking and JIT delivery solutions to optimize your working capital and warehouse space.",
              "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 7,
        "anchorId": "industries",
        "data": {
          "title": "INDUSTRIES WE SUPPLY",
          "subtitle": "Our procurement solution supports every major industry segment represented across Sonatek Steels.",
          "services": [
            {
              "title": "Automotive",
              "description": "Precision supply support for OEMs and component manufacturers using CR and HR steel.",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Construction",
              "description": "Project dispatch support for sheets, plates, and chequered plates used in construction.",
              "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176",
              "href": "/industries/construction"
            },
            {
              "title": "Oil & Gas",
              "description": "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.",
              "image": "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170",
              "href": "/industries/oil-gas"
            },
            {
              "title": "Shipbuilding",
              "description": "Marine project steel movement for shipyards, offshore structures, and deck applications.",
              "image": "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170",
              "href": "/industries/shipbuilding"
            },
            {
              "title": "Heavy Engineering",
              "description": "Heavy plate and processed steel delivery support for machinery and industrial fabrication.",
              "image": "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170",
              "href": "/industries/heavy-engineering"
            },
            {
              "title": "Fabricators & OEMs",
              "description": "Repeat supply support for workshops, manufacturing lines, and OEM production teams.",
              "image": "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170",
              "href": "/industries/fabricators-oems"
            }
          ]
        }
      },
      {
        "blockType": "solution-insights",
        "order": 8,
        "anchorId": "insights",
        "data": {
          "items": []
        }
      },
      {
        "blockType": "faq-section",
        "order": 9,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "Do you supply steel directly from primary mills like SAIL?",
              "answer": "Yes, we are authorized distributors and source our materials directly from primary producers like Steel Authority of India Limited (SAIL), ensuring you receive authentic, high-quality steel."
            },
            {
              "question": "Do you mainly supply CR or HR steel?",
              "answer": "CR coils and sheets are our core, always-in-stock range across commercial, drawing, and deep-drawing grades (IS 513). We also supply HR coils and sheets (IS 2062) for select project and structural requirements, sourced on request through our SAIL relationship."
            },
            {
              "question": "Can I get Manufacturer Test Certificates (MTC) with my order?",
              "answer": "Absolutely. 100% traceability is a core part of our procurement solution. Every dispatch is accompanied by the relevant MTC."
            },
            {
              "question": "Do you offer credit facilities for regular procurement?",
              "answer": "We offer flexible commercial terms and trade finance options for our long-term, continuous procurement partners, subject to standard financial approvals."
            },
            {
              "question": "What is the minimum order quantity for steel procurement?",
              "answer": "We accommodate both small trial orders and large bulk requirements, with ready stock availability helping us serve urgent as well as recurring procurement needs."
            },
            {
              "question": "How quickly can you fulfill a bulk steel procurement order?",
              "answer": "Thanks to our extensive ready-stock inventory and direct mill relationships, standard grades can typically be dispatched within days, while custom or high-volume orders are scheduled around mill production timelines."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 10,
        "data": {
          "title": "SECURE YOUR SUPPLY CHAIN",
          "description": "Whether you need a one-time bulk order or a continuous supply agreement, our procurement experts are ready to assist.",
          "btnText": "Contact Sales Team",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Solutions — Steel Procurement"
  },
    {
      "slug": "solutions-custom-steel-processing",
      "title": "Solutions — Custom Steel Processing",
      "status": "published",
      "seo": {
        "metaTitle": "Custom Steel Processing Services | CR & HR Steel | Sonatek Steels",
        "metaDescription": "Custom steel processing services for CR & HR coils and sheets. Precision slitting, cut-to-length, custom dimensions, and reliable delivery across India."
      },
      "blocks": [
        {
          "blockType": "service-hero",
          "order": 0,
          "anchorId": "overview",
          "data": {
            "title": "Custom Steel Processing That Fits Your Production—Not the Other Way Around",
            "breadcrumbLabel": "Custom Steel Processing",
            "description": "Every manufacturing process is unique, and so are its steel requirements. At Sonatek Steels, we provide custom steel processing solutions designed to help manufacturers receive steel exactly as required, reducing processing time, minimizing material wastage, and improving production efficiency. Whether you need custom widths, custom lengths, precision slitting, cut-to-length sheets, or project-specific steel processing, our team works closely with you to ensure your material is production-ready before it reaches your facility.",
            "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=85",
            "ctaText": "Request a Custom Quote",
            "ctaHref": "/contact-us",
            "secondaryCtaText": "Talk to a Processing Expert",
            "secondaryCtaHref": "/contact-us"
          }
        },
        {
          "blockType": "mission-section",
          "order": 1,
          "anchorId": "what-is-custom-processing",
          "data": {
            "label": "OVERVIEW",
            "title": "What is Custom Steel Processing?",
            "bodyText": "Custom steel processing is the process of modifying standard steel coils or sheets according to specific customer requirements before delivery. Instead of purchasing standard material and processing it internally, manufacturers receive steel that's already prepared for their production line. This eliminates unnecessary handling, reduces operational costs, improves workflow efficiency, and ensures faster production. Whether you're manufacturing automotive components, industrial equipment, electrical panels, furniture, or engineering products, customized steel processing helps simplify production while maintaining consistent quality."
          }
        },
        {
          "blockType": "process-steps",
          "order": 2,
          "anchorId": "how-it-works",
          "data": {
            "label": "PROCESS",
            "title": "Our Processing Workflow",
            "steps": [
              { "title": "Requirement Consultation", "description": "Our experts understand your application, dimensions, quantities, and production requirements." },
              { "title": "Material Selection", "description": "Select the appropriate CR or HR steel based on your application and technical needs." },
              { "title": "Custom Processing", "description": "Steel is processed according to your required width, length, or project specifications." },
              { "title": "Quality Inspection", "description": "Every processed batch is checked for dimensional accuracy and consistency before dispatch." },
              { "title": "Packaging & Dispatch", "description": "Material is securely packed and delivered according to your production schedule." }
            ]
          }
        },
        {
          "blockType": "icon-grid",
          "order": 3,
          "anchorId": "benefits",
          "data": {
            "title": "WHY CHOOSE CUSTOM PROCESSING?",
            "subtitle": "Standard steel sizes don't always meet production requirements. Additional in-house processing often results in higher labour costs, material wastage, longer production cycles, and machine downtime — our custom processing solutions help eliminate these inefficiencies.",
            "items": [
              { "icon": "DollarSign", "title": "Lower Labour Costs", "description": "Eliminate additional processing, labour, and machine usage at your facility." },
              { "icon": "Recycle", "title": "Reduced Material Wastage", "description": "Customized dimensions help optimize material utilization and reduce unnecessary scrap generation." },
              { "icon": "Zap", "title": "Shorter Production Cycles", "description": "Production-ready steel shortens manufacturing cycles and improves operational efficiency." },
              { "icon": "Gauge", "title": "Reduced Machine Downtime", "description": "Receiving steel that's already processed reduces handling time and machine setup." },
              { "icon": "Boxes", "title": "Simplified Inventory Management", "description": "Processed material is easier to store, manage, and use in production." },
              { "icon": "PackageCheck", "title": "Reduced Handling Costs", "description": "Less on-site handling and preparation before material reaches your production line." }
            ]
          }
        },
        {
          "blockType": "icon-grid",
          "order": 4,
          "anchorId": "industries",
          "data": {
            "title": "INDUSTRIES THAT BENEFIT FROM CUSTOM STEEL PROCESSING",
            "subtitle": "Our custom processing services support a wide range of manufacturing industries, including:",
            "items": [
              { "icon": "Car", "title": "Automotive", "description": "Customized steel for body panels, brackets, reinforcement parts, and precision components." },
              { "icon": "PanelsTopLeft", "title": "Electrical Panel Manufacturing", "description": "Steel processed for cabinets, control panels, enclosures, and industrial electrical systems." },
              { "icon": "Armchair", "title": "Furniture Manufacturing", "description": "Custom-sized steel for modular furniture, storage systems, office furniture, and industrial shelving." },
              { "icon": "Wind", "title": "HVAC Industry", "description": "Processed steel for air ducts, ventilation systems, cooling equipment, and HVAC assemblies." },
              { "icon": "Factory", "title": "Heavy Engineering", "description": "Steel prepared for fabrication, machinery manufacturing, structural assemblies, and engineering applications." },
              { "icon": "Building2", "title": "Infrastructure & Construction", "description": "Customized steel solutions for industrial buildings, warehouses, fabrication projects, and EPC contractors." }
            ]
          }
        },
        {
          "blockType": "how-we-can-help",
          "order": 5,
          "anchorId": "applications",
          "data": {
            "label": "APPLICATIONS",
            "title": "WHERE CUSTOM PROCESSING ADDS VALUE",
            "subtitle": "Our custom processing solutions feed directly into these production processes and manufacturing requirements.",
            "items": [
              { "title": "Precision Coil Slitting", "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", "href": "/services/coil-slitting" },
              { "title": "Cut-to-Length Processing", "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "href": "/services/cut-to-length" },
              { "title": "Width Customization", "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", "href": "/contact-us" },
              { "title": "Length Customization", "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", "href": "/contact-us" },
              { "title": "Project-Based Processing", "image": "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170", "href": "/project-based-steel" },
              { "title": "Production-Oriented Material Preparation", "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", "href": "/contact-us" }
            ]
          }
        },
        {
          "blockType": "built-to-deliver",
          "order": 6,
          "anchorId": "advantages",
          "data": {
            "label": "WHY SONATEK STEELS",
            "title": "Why Manufacturers Prefer Custom Processing",
            "subtitle": "Manufacturing efficiency begins with the right material, processed the right way.",
            "points": [
              { "icon": "Gauge", "title": "Better Production Efficiency", "description": "Receiving steel that's already processed reduces handling time and allows production to begin immediately." },
              { "icon": "Recycle", "title": "Lower Material Wastage", "description": "Customized dimensions help optimize material utilization and reduce unnecessary scrap generation." },
              { "icon": "Zap", "title": "Faster Manufacturing", "description": "Production-ready steel shortens manufacturing cycles and improves operational efficiency." },
              { "icon": "DollarSign", "title": "Reduced Operational Costs", "description": "Eliminate additional processing, labour, and machine usage at your facility." },
              { "icon": "Boxes", "title": "Improved Inventory Management", "description": "Processed material is easier to store, manage, and use in production." },
              { "icon": "BadgeCheck", "title": "Consistent Product Quality", "description": "Precision processing ensures every batch meets required specifications for reliable manufacturing." }
            ]
          }
        },
        {
          "blockType": "mission-section",
          "order": 7,
          "anchorId": "quality",
          "data": {
            "label": "QUALITY ASSURANCE",
            "title": "Why Choose Sonatek Steels?",
            "bodyText": "At Sonatek, we don't just process steel — we help manufacturers improve productivity, reduce procurement challenges, and optimize their production lines. Our commitment to quality, precision, and dependable service has made us a trusted partner for manufacturers across India."
          }
        },
        {
          "blockType": "icon-grid",
          "order": 8,
          "anchorId": "precision",
          "data": {
            "title": "OUR ADVANTAGES",
            "subtitle": "What you get with every custom-processed order from Sonatek Steels.",
            "items": [
              { "icon": "ShieldCheck", "title": "Premium CR & HR Steel", "description": "Sourced from certified primary producers for consistent quality." },
              { "icon": "Ruler", "title": "Precision Processing", "description": "Processing lines calibrated to your exact width, length, and thickness specifications." },
              { "icon": "Warehouse", "title": "Ready Stock Availability", "description": "Stocked material ready to process without long lead times." },
              { "icon": "Zap", "title": "Fast Turnaround", "description": "Streamlined processing-to-dispatch turnaround." },
              { "icon": "Wrench", "title": "Custom Processing Solutions", "description": "Slitting, cut-to-length, and dimensional customization tailored to your production line." },
              { "icon": "Truck", "title": "Bulk Industrial Supply", "description": "High-tonnage supply programs for uninterrupted production." },
              { "icon": "Globe", "title": "Pan-India Delivery", "description": "Coordinated dispatch and delivery across the country." },
              { "icon": "Headset", "title": "Dedicated Technical Support", "description": "A responsive team throughout your order and processing cycle." },
              { "icon": "BadgeCheck", "title": "Reliable Quality Assurance", "description": "Every order checked against the same quality benchmark." },
              { "icon": "Handshake", "title": "Long-Term Supply Partnerships", "description": "Dependable relationships built on reliable supply and service." }
            ]
          }
        },
        {
          "blockType": "mission-section",
          "order": 9,
          "anchorId": "partnership",
          "data": {
            "label": "PARTNERSHIP",
            "title": "Let's Build Smarter Manufacturing Together",
            "bodyText": "Manufacturing efficiency begins with the right material, processed the right way. Whether you require customized steel dimensions, production-ready sheets, or value-added processing solutions, Sonatek Steels is committed to delivering precision, consistency, and reliability with every order."
          }
        },
        {
          "blockType": "services-section",
          "order": 10,
          "anchorId": "related",
          "data": {
            "title": "OUR OTHER SERVICES",
            "subtitle": "Explore the full range of processing, supply, and distribution services available from Sonatek Steels.",
            "services": [
              { "title": "Coil Slitting", "description": "High-speed, precision slitting that converts master coils into narrower, tightly toleranced slit coils.", "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", "href": "/services/coil-slitting" },
              { "title": "Cut-To-Length Service", "description": "Master coils converted into flat, perfectly squared sheets and blanks, cut to your exact length.", "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "href": "/services/cut-to-length" },
              { "title": "Luster Steel Processing", "description": "Surface finishing treatments delivering a clean, bright luster finish for appearance-critical applications.", "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", "href": "/services/luster-steel-processing" },
              { "title": "Bulk Industrial Supply", "description": "High-tonnage flat steel supply handled as a single, coordinated dispatch for large-volume requirements.", "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80", "href": "/services/bulk-industrial-supply" },
              { "title": "Delivery & Logistics Service", "description": "Fleet coordination, route planning, and handling protocols that move your steel from warehouse to gate.", "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80", "href": "/services/logistics-delivery" }
            ]
          }
        },
        {
          "blockType": "faq-section",
          "order": 11,
          "anchorId": "faqs",
          "data": {
            "title": "Frequently Asked Questions",
            "items": [
              { "question": "What is custom steel processing?", "answer": "Custom steel processing involves modifying steel coils or sheets according to specific customer requirements, such as custom widths, lengths, or project-based specifications." },
              { "question": "Can Sonatek process both CR and HR steel?", "answer": "Yes. We provide custom processing solutions for both Cold Rolled (CR) and Hot Rolled (HR) steel products." },
              { "question": "Can I order customized dimensions?", "answer": "Yes. Depending on your production requirements, we can discuss customized processing solutions for your project." },
              { "question": "Which industries benefit from custom steel processing?", "answer": "Automotive, electrical, engineering, fabrication, furniture, HVAC, infrastructure, OEM manufacturing, and many other industrial sectors." },
              { "question": "Do you support bulk industrial orders?", "answer": "Absolutely. We work with manufacturers, OEMs, EPC contractors, and industrial businesses across India." }
            ]
          }
        },
        {
          "blockType": "cta-banner-industry",
          "order": 12,
          "data": {
            "title": "Request a Custom Processing Quote Today",
            "description": "Whether you require customized steel dimensions, production-ready sheets, or value-added processing solutions, Sonatek Steels is committed to delivering precision, consistency, and reliability with every order.",
            "btnText": "Request a Custom Quote",
            "btnHref": "/contact-us",
            "secondaryBtnText": "Talk to a Processing Expert",
            "secondaryBtnHref": "/contact-us",
            "bgImage": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
          }
        }
      ]
    },
  {
    "slug": "solutions-infrastructure-industrial-project",
    "blocks": [
      {
        "blockType": "solution-hero",
        "order": 0,
        "anchorId": "overview",
        "data": {
          "title": "Infrastructure & Industrial Project Solution",
          "description": "Certified flat steel supply, custom processing, and dependable distribution for infrastructure, construction, heavy engineering, and industrial project requirements.",
          "image": "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170",
          "ctaText": "Discuss Your Project",
          "ctaHref": "/contact-us",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Solutions",
              "href": "/infrastructure-industrial-project"
            },
            {
              "label": "Infrastructure & Industrial Project",
              "href": "/infrastructure-industrial-project"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "overview",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "products",
              "label": "Products"
            },
            {
              "id": "support",
              "label": "Support"
            },
            {
              "id": "applications",
              "label": "Applications"
            },
            {
              "id": "insights",
              "label": "Insights"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Infrastructure Excellence",
          "title": "BUILT FOR SCALE. DELIVERED WITH PRECISION.",
          "bodyText": "Large-scale infrastructure and industrial projects demand more than just material; they require a supply chain that never sleeps. Sonatek Steels provides a complete flat steel supply solution. From SAIL-backed sourcing and certified materials to processing and timely dispatch, we help project teams reduce procurement complexity and maintain execution momentum. The solution is built around real site and plant needs: correct grades, usable dimensions, clear documentation, and coordinated supply across multiple project phases."
        }
      },
      {
        "blockType": "services-section",
        "order": 3,
        "anchorId": "solutions",
        "data": {
          "title": "OUR CORE SOLUTIONS",
          "subtitle": "Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence.",
          "services": [
            {
              "title": "Steel Procurement Solution",
              "description": "Reliable, certified sourcing of CR/HR coils, sheets, and plates directly from trusted primary mills like SAIL.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Steel Processing",
              "description": "Slitting, shearing, pickling, and cut-to-size services delivering steel that is 100% ready for production.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Infrastructure & Industrial Projects",
              "description": "Scalable flat steel supply solutions and coordinated delivery schedules for large-scale industrial builds.",
              "image": "https://images.unsplash.com/photo-1761896057588-49e1a6306d8f?q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Technical Steel Selection Support",
              "description": "Expert advisory helping you choose the correct grade, thickness, and finish for your exact application.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Freight Forwarding",
              "description": "Seamless material movement coordination, planned dispatches, and reliable regional delivery networks.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Supply Chain Solutions",
              "description": "End-to-end requirement planning, stock availability management, and optimized distribution services.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 4,
        "anchorId": "products",
        "data": {
          "title": "PROJECT-READY STEEL PRODUCTS",
          "subtitle": "Choose from flat steel products commonly required for industrial construction, structural fabrication, plant expansion, and infrastructure work.",
          "services": [
            {
              "title": "HR Sheets & Plates",
              "description": "High-strength hot rolled sheets and plates for bridges, industrial sheds, plants, machinery bases, and structural fabrication.",
              "image": "https://images.unsplash.com/photo-1727504172725-14acb4f32655?q=80&w=1170",
              "href": "/products"
            },
            {
              "title": "HR Coils",
              "description": "Reliable coil supply for large-volume project requirements, downstream processing, and heavy-duty manufacturing applications.",
              "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Chequered Plates",
              "description": "Anti-slip plates for walkways, staircases, factory flooring, vehicle ramps, platforms, and high-traffic industrial zones.",
              "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "CR Sheets & Coils",
              "description": "Superior finish and dimensional accuracy for enclosures, panels, components, and project applications requiring cleaner surface quality.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/products"
            }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 5,
        "anchorId": "support",
        "data": {
          "title": "BUILT FOR PROJECT RELIABILITY",
          "subtitle": "Our solution combines product availability, documentation, processing, and distribution support for demanding project timelines.",
          "items": [
            {
              "icon": "Building2",
              "title": "Project-Scale Supply",
              "description": "Bulk flat steel availability for infrastructure, construction, plant expansion, and industrial development schedules."
            },
            {
              "icon": "BadgeCheck",
              "title": "Certified Material",
              "description": "Material supplied with manufacturer test certificates and traceability support for project approval workflows."
            },
            {
              "icon": "Scissors",
              "title": "Custom Processing",
              "description": "Slitting, shearing, and cut-to-size support to reduce on-site handling and fabrication preparation time."
            },
            {
              "icon": "Truck",
              "title": "Regional Delivery",
              "description": "Distribution support across Northern India with practical planning for staged or urgent project dispatches."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 6,
        "anchorId": "applications",
        "data": {
          "title": "WHERE THIS SOLUTION FITS",
          "subtitle": "Designed for buyers who need consistent flat steel quality, practical technical support, and dependable supply across project phases.",
          "topLink": {
            "label": "View all industries",
            "href": "/industries/construction"
          },
          "services": [
            {
              "title": "Automotive",
              "description": "Precision supply support for OEMs and component manufacturers using CR and HR steel.",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Construction",
              "description": "Project dispatch support for sheets, plates, and chequered plates used in construction.",
              "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176",
              "href": "/industries/construction"
            },
            {
              "title": "Oil & Gas",
              "description": "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.",
              "image": "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170",
              "href": "/industries/oil-gas"
            },
            {
              "title": "Shipbuilding",
              "description": "Marine project steel movement for shipyards, offshore structures, and deck applications.",
              "image": "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170",
              "href": "/industries/shipbuilding"
            },
            {
              "title": "Heavy Engineering",
              "description": "Heavy plate and processed steel delivery support for machinery and industrial fabrication.",
              "image": "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170",
              "href": "/industries/heavy-engineering"
            },
            {
              "title": "Fabricators & OEMs",
              "description": "Repeat supply support for workshops, manufacturing lines, and OEM production teams.",
              "image": "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170",
              "href": "/industries/fabricators-oems"
            }
          ]
        }
      },
      {
        "blockType": "solution-insights",
        "order": 7,
        "anchorId": "insights",
        "data": {
          "items": []
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What steel products are best suited for infrastructure projects?",
              "answer": "Most infrastructure and industrial projects use HR sheets, HR plates, HR coils, and chequered plates depending on load, surface, fabrication, and flooring requirements."
            },
            {
              "question": "Can Sonatek supply steel for large project quantities?",
              "answer": "Yes, Sonatek Steels supports bulk project requirements through its flat steel product portfolio, SAIL-linked sourcing, stock availability, and regional distribution capability."
            },
            {
              "question": "Do you provide processed steel for project sites?",
              "answer": "Yes, we provide custom processing support such as slitting, shearing, pickling, and cut-to-size supply so material can reach fabrication or site teams in usable dimensions."
            },
            {
              "question": "Will material certificates be available?",
              "answer": "Yes, orders can be supplied with manufacturer test certificates and relevant documentation to support project approvals, quality checks, and traceability."
            },
            {
              "question": "Can you coordinate delivery across multiple project phases?",
              "answer": "Yes, we plan staged dispatches aligned with your construction or plant expansion milestones, helping teams avoid both site congestion and material shortages."
            },
            {
              "question": "Do you support both infrastructure and industrial project requirements?",
              "answer": "Yes, our flat steel supply, processing, and distribution capability covers infrastructure builds, plant expansions, machinery fabrication, and large-scale industrial development alike."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "data": {
          "title": "PLAN YOUR STEEL REQUIREMENT",
          "description": "Share your project grade, size, quantity, and delivery schedule. Our team will help you align sourcing, processing, and dispatch.",
          "btnText": "Contact Us",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Solutions — Infrastructure & Industrial Project"
  },
  {
    "slug": "solutions-technical-steel-selection",
    "blocks": [
      {
        "blockType": "solution-hero",
        "order": 0,
        "anchorId": "overview",
        "data": {
          "title": "Technical Steel Selection Support",
          "description": "Precision starts before production. We help you choose the exact grade, thickness, surface finish, and mechanical properties required to guarantee the success of your application.",
          "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
          "ctaText": "Consult an Expert",
          "ctaHref": "/contact-us",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Solutions",
              "href": "/technical-steel-selection"
            },
            {
              "label": "Technical Selection",
              "href": "/technical-steel-selection"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "overview",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "analysis",
              "label": "What We Analyze"
            },
            {
              "id": "advantages",
              "label": "The Advantage"
            },
            {
              "id": "industries",
              "label": "Industries"
            },
            {
              "id": "insights",
              "label": "Insights"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Engineering First",
          "title": "THE RIGHT STEEL FOR THE RIGHT JOB.",
          "bodyText": "Selecting the wrong steel grade can lead to catastrophic structural failures, massive scrap rates, and production bottlenecks. At Sonatek Steels, our technical experts act as an extension of your engineering team. We analyze your end-use application to recommend the most cost-effective, certificate-backed material that meets your exact mechanical and chemical specifications. The result is a clearer buying decision, fewer trial-and-error orders, lower rejection risk, and material that arrives with the right grade, finish, tolerances, and documentation for your application."
        }
      },
      {
        "blockType": "services-section",
        "order": 3,
        "anchorId": "solutions",
        "data": {
          "title": "OUR CORE SOLUTIONS",
          "subtitle": "Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence.",
          "services": [
            {
              "title": "Steel Procurement Solution",
              "description": "Reliable, certified sourcing of CR/HR coils, sheets, and plates directly from trusted primary mills like SAIL.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Steel Processing",
              "description": "Slitting, shearing, pickling, and cut-to-size services delivering steel that is 100% ready for production.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Infrastructure & Industrial Projects",
              "description": "Scalable flat steel supply solutions and coordinated delivery schedules for large-scale industrial builds.",
              "image": "https://images.unsplash.com/photo-1761896057588-49e1a6306d8f?q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Technical Steel Selection Support",
              "description": "Expert advisory helping you choose the correct grade, thickness, and finish for your exact application.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Freight Forwarding",
              "description": "Seamless material movement coordination, planned dispatches, and reliable regional delivery networks.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Supply Chain Solutions",
              "description": "End-to-end requirement planning, stock availability management, and optimized distribution services.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 4,
        "anchorId": "analysis",
        "data": {
          "title": "WHAT WE ANALYZE",
          "subtitle": "Our technical advisory covers every critical aspect of flat steel procurement to ensure flawless manufacturing.",
          "services": [
            {
              "title": "Grade Selection",
              "description": "Matching your structural and forming requirements with the exact Indian Standard (IS) or international grades, such as IS 2062 or IS 513.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/contact-us"
            },
            {
              "title": "Surface Finish Optimization",
              "description": "Determining if your application requires standard Hot Rolled, Cold Rolled, or Pickled and Oiled (P&O) steel for optimal painting or coating.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/contact-us"
            },
            {
              "title": "Mechanical Properties Assessment",
              "description": "Evaluating yield strength, tensile strength, and elongation requirements to prevent cracking during deep drawing or heavy fabrication.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/contact-us"
            },
            {
              "title": "Dimensional Tolerances",
              "description": "Advising on the correct thickness and width specifications to minimize scrap and ensure seamless feeding into your CNC or stamping lines.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/contact-us"
            }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 5,
        "anchorId": "advantages",
        "data": {
          "title": "THE SONATEK ADVISORY ADVANTAGE",
          "subtitle": "Partnering with us means you never have to guess. You get mill-backed expertise and absolute traceability.",
          "items": [
            {
              "icon": "BadgeCheck",
              "title": "100% Traceability",
              "description": "Every recommendation is backed by certified material accompanied by Manufacturer Test Certificates (MTCs) directly from primary mills."
            },
            {
              "icon": "ShieldAlert",
              "title": "Defect Prevention",
              "description": "Choosing the right grade upfront drastically reduces rejection rates, cracking, and structural failures during your manufacturing process."
            },
            {
              "icon": "TrendingDown",
              "title": "Value Engineering",
              "description": "We help you identify areas where you can safely switch to a more cost-effective grade or finish without compromising end-product quality."
            },
            {
              "icon": "Users",
              "title": "Mill-Direct Expertise",
              "description": "As authorized partners, we bridge the gap between your engineering team and metallurgists at primary producers like SAIL."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 6,
        "anchorId": "industries",
        "data": {
          "title": "WHO BENEFITS FROM THIS?",
          "subtitle": "We provide technical selection support to some of India's most demanding engineering sectors.",
          "topLink": {
            "label": "Start with construction",
            "href": "/industries/construction"
          },
          "services": [
            {
              "title": "Construction",
              "description": "Specifying the correct structural Hot Rolled grades capable of bearing extreme loads for bridges, high-rises, and industrial sheds.",
              "image": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
              "href": "/industries/construction"
            },
            {
              "title": "Automotive",
              "description": "Selecting high-formability Cold Rolled grades that withstand aggressive stamping without tearing, ensuring flawless chassis and body panels.",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Oil & Gas",
              "description": "Selecting steel grades and finishes for tanks, pipelines, refinery work, and energy-sector fabrication.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/industries/oil-gas"
            },
            {
              "title": "Shipbuilding",
              "description": "Supporting marine-grade material selection for ship hulls, decks, and offshore structures.",
              "image": "https://images.unsplash.com/photo-1518005020951-ecc84916723c?w=800&q=80",
              "href": "/industries/shipbuilding"
            },
            {
              "title": "Heavy Engineering",
              "description": "Advising on thick, high-yield plates designed for the rigors of earthmoving equipment, agricultural machinery, and power plant components.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/industries/heavy-engineering"
            },
            {
              "title": "Fabricators & OEMs",
              "description": "Helping fabricators and OEMs match steel grade, thickness, finish, and tolerances to production needs.",
              "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              "href": "/industries/fabricators-oems"
            }
          ]
        }
      },
      {
        "blockType": "solution-insights",
        "order": 7,
        "anchorId": "insights",
        "data": {
          "items": []
        }
      },
      {
        "blockType": "faq-section",
        "order": 8,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "Do you charge for technical selection support?",
              "answer": "No, our technical advisory services are a core part of our commitment to our clients. We work with you during the procurement phase to ensure you are buying the correct material."
            },
            {
              "question": "How do you guarantee the chemical composition of the steel?",
              "answer": "We source exclusively from primary producers like SAIL. Every batch is accompanied by a Manufacturer Test Certificate (MTC) that explicitly details the chemical composition and mechanical properties."
            },
            {
              "question": "Can you help us switch from Hot Rolled to Pickled & Oiled (P&O)?",
              "answer": "Yes. Many fabricators switch to P&O to save time on surface cleaning before painting. We can analyze your workflow to see if P&O offers a cost-effective advantage for your specific production line."
            },
            {
              "question": "What happens if we need a highly specific or rare steel grade?",
              "answer": "Through our strong mill relationships, we can facilitate custom rolling or special procurement for highly specific grades, provided the volume meets mill minimums."
            },
            {
              "question": "How do I know which steel grade is right for my application?",
              "answer": "Our technical team reviews your load, forming, and environmental requirements against grade-specific mechanical and chemical properties to recommend the best-fit, cost-effective option."
            },
            {
              "question": "Can wrong grade selection really cause structural failures?",
              "answer": "Yes. Using the wrong grade or thickness can lead to cracking, premature wear, or structural failure. Our advisory process is designed to prevent these costly and potentially dangerous mistakes."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 9,
        "data": {
          "title": "NEED HELP SPECIFYING MATERIAL?",
          "description": "Share your blueprints, load requirements, or current manufacturing challenges. Our experts will recommend the ideal steel grade for your project.",
          "btnText": "Speak to an Expert",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Solutions — Technical Steel Selection"
  },
  {
    "slug": "solutions-supply-chain",
    "blocks": [
      {
        "blockType": "solution-hero",
        "order": 0,
        "anchorId": "overview",
        "data": {
          "title": "Supply Chain Solutions",
          "description": "End-to-end requirement planning, stock availability management, and optimized distribution. We connect the dots between primary mills and your factory floor.",
          "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
          "ctaText": "Optimize Your Supply Chain",
          "ctaHref": "/contact-us",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Solutions",
              "href": "/supply-chain"
            },
            {
              "label": "Supply Chain",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "overview",
              "label": "Overview"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "expertise",
              "label": "Expertise"
            },
            {
              "id": "sectors",
              "label": "Sectors"
            },
            {
              "id": "insights",
              "label": "Insights"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Our Vision",
          "title": "YOUR FREIGHT. OUR EXPERTISE.",
          "bodyText": "At Sonatek Steels, we combine our deep industry knowledge with a global network to deliver seamless supply chain solutions that drive your business forward. For our customers, this means practical steel movement support: planned dispatches, urgent material coordination, processed steel delivery, and documentation-backed supply from stockyard to site or factory."
        }
      },
      {
        "blockType": "services-section",
        "order": 3,
        "anchorId": "solutions",
        "data": {
          "title": "OUR CORE SOLUTIONS",
          "subtitle": "Explore our comprehensive range of specialized flat steel solutions designed for industrial excellence.",
          "services": [
            {
              "title": "Steel Procurement Solution",
              "description": "Reliable, certified sourcing of CR/HR coils, sheets, and plates directly from trusted primary mills like SAIL.",
              "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
              "href": "/steel-procurement"
            },
            {
              "title": "Custom Steel Processing",
              "description": "Slitting, shearing, pickling, and cut-to-size services delivering steel that is 100% ready for production.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            },
            {
              "title": "Infrastructure & Industrial Projects",
              "description": "Scalable flat steel supply solutions and coordinated delivery schedules for large-scale industrial builds.",
              "image": "https://images.unsplash.com/photo-1761896057588-49e1a6306d8f?q=80",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Technical Steel Selection Support",
              "description": "Expert advisory helping you choose the correct grade, thickness, and finish for your exact application.",
              "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
              "href": "/technical-steel-selection"
            },
            {
              "title": "Freight Forwarding",
              "description": "Seamless material movement coordination, planned dispatches, and reliable regional delivery networks.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Supply Chain Solutions",
              "description": "End-to-end requirement planning, stock availability management, and optimized distribution services.",
              "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
              "href": "/supply-chain"
            }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 4,
        "anchorId": "expertise",
        "data": {
          "title": "BEYOND LOGISTICS",
          "subtitle": "Our integrated approach covers every stage of the supply chain, providing the tools and expertise to drive operational excellence.",
          "items": [
            {
              "icon": "Target",
              "title": "Strategic Sourcing",
              "description": "Optimizing your procurement processes and supplier relationships for better cost and quality."
            },
            {
              "icon": "Truck",
              "title": "Logistics Optimization",
              "description": "Reducing transportation costs and improving delivery times through advanced route planning."
            },
            {
              "icon": "Shield",
              "title": "Risk Management",
              "description": "Identifying and mitigating supply chain risks to ensure business continuity and resilience."
            },
            {
              "icon": "Settings",
              "title": "Process Engineering",
              "description": "Streamlining operations and eliminating waste to improve overall supply chain efficiency."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 5,
        "anchorId": "sectors",
        "data": {
          "title": "INDUSTRY SECTORS",
          "subtitle": "Our specialized teams understand the unique challenges of your industry and develop tailored solutions to meet your specific requirements.",
          "topLink": {
            "label": "Start with construction",
            "href": "/industries/construction"
          },
          "services": [
            {
              "title": "Automotive",
              "description": "Precision supply support for OEMs and component manufacturers using CR and HR steel.",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Construction",
              "description": "Project dispatch support for sheets, plates, and chequered plates used in construction.",
              "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176",
              "href": "/industries/construction"
            },
            {
              "title": "Oil & Gas",
              "description": "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.",
              "image": "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170",
              "href": "/industries/oil-gas"
            },
            {
              "title": "Shipbuilding",
              "description": "Marine project steel movement for shipyards, offshore structures, and deck applications.",
              "image": "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170",
              "href": "/industries/shipbuilding"
            },
            {
              "title": "Heavy Engineering",
              "description": "Heavy plate and processed steel delivery support for machinery and industrial fabrication.",
              "image": "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170",
              "href": "/industries/heavy-engineering"
            },
            {
              "title": "Fabricators & OEMs",
              "description": "Repeat supply support for workshops, manufacturing lines, and OEM production teams.",
              "image": "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170",
              "href": "/industries/fabricators-oems"
            }
          ]
        }
      },
      {
        "blockType": "solution-insights",
        "order": 6,
        "anchorId": "insights",
        "data": {
          "items": []
        }
      },
      {
        "blockType": "faq-section",
        "order": 7,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "What is supply chain management?",
              "answer": "Supply chain management involves the coordination and optimization of all activities involved in sourcing, procurement, conversion, and logistics management."
            },
            {
              "question": "How can you help reduce our supply chain costs?",
              "answer": "We analyze your entire network to identify inefficiencies, optimize inventory levels, and negotiate better rates with carriers and suppliers."
            },
            {
              "question": "Do you provide real-time visibility into shipments?",
              "answer": "Yes, our digital platforms provide end-to-end visibility, allowing you to track your cargo and manage exceptions in real-time."
            },
            {
              "question": "Can you manage vendor inventory on our behalf?",
              "answer": "Yes, our vendor-managed inventory and stock availability solutions help you maintain optimal stock levels without tying up your own warehouse space and working capital."
            },
            {
              "question": "How do you support recurring, high-volume steel requirements?",
              "answer": "We align stock availability, requirement planning, and distribution scheduling around your consumption pattern, ensuring dependable, repeat supply for OEMs and fabricators."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 8,
        "data": {
          "title": "TALK TO AN EXPERT",
          "description": "Our experts are ready to help you optimize your supply chain. Reach out to us today for a customized solution.",
          "btnText": "Contact Us",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Solutions — Supply Chain"
  },
  {
    "slug": "solutions-freight-forwarding",
    "blocks": [
      {
        "blockType": "solution-hero",
        "order": 0,
        "anchorId": "overview",
        "data": {
          "title": "Freight Forwarding Services",
          "description": "Get your cargo from origin to destination smoothly and reliably. We combine global reach with on-ground expertise to move your goods wherever they need to go, whether by air, ocean, rail, or road.",
          "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
          "ctaText": "Talk to an Expert",
          "ctaHref": "/contact-us",
          "breadcrumbs": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Supply Chain Solutions",
              "href": "/supply-chain"
            },
            {
              "label": "Freight Forwarding",
              "href": "/freight-forwarding"
            }
          ]
        }
      },
      {
        "blockType": "sticky-nav",
        "order": 1,
        "data": {
          "navItems": [
            {
              "id": "overview",
              "label": "Overview"
            },
            {
              "id": "services",
              "label": "Services"
            },
            {
              "id": "solutions",
              "label": "Solutions"
            },
            {
              "id": "expertise",
              "label": "Expertise"
            },
            {
              "id": "insights",
              "label": "Insights"
            },
            {
              "id": "faqs",
              "label": "FAQs"
            }
          ]
        }
      },
      {
        "blockType": "mission-section",
        "order": 2,
        "data": {
          "label": "Our Focus",
          "title": "YOUR FREIGHT. OUR EXPERTISE.",
          "bodyText": "At Sonatek Steels, we combine our deep industry knowledge with a global network to deliver seamless freight forwarding solutions that drive your business forward. For our customers, this means practical steel movement support: planned dispatches, urgent material coordination, processed steel delivery, and documentation-backed supply from stockyard to site or factory."
        }
      },
      {
        "blockType": "services-section",
        "order": 3,
        "anchorId": "services",
        "data": {
          "title": "ALL ROUTES. ONE PARTNER.",
          "subtitle": "We provide a comprehensive range of freight services across all modes of transport, ensuring your cargo moves efficiently through every stage of the journey.",
          "services": [
            {
              "title": "Bulk Steel Dispatch",
              "description": "Coordinated dispatch planning for coils, sheets, plates, and project steel orders across industrial routes.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/products"
            },
            {
              "title": "Urgent Material Movement",
              "description": "Priority support for time-sensitive maintenance, fabrication, and production requirements.",
              "image": "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Regional Road Delivery",
              "description": "Reliable road movement for industrial customers and OEMs across Northern India's steel consumption hubs.",
              "image": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
              "href": "/freight-forwarding"
            },
            {
              "title": "Project Delivery Planning",
              "description": "Staged dispatch coordination for construction, infrastructure, and heavy engineering project schedules.",
              "image": "https://images.unsplash.com/photo-1581674662583-5e89b374fae6?q=80&w=1170",
              "href": "/infrastructure-industrial-project"
            },
            {
              "title": "Processed Material Supply",
              "description": "Slit, sheared, pickled, and cut-to-size steel dispatches that reduce downstream handling.",
              "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              "href": "/custom-steel-processing"
            }
          ]
        }
      },
      {
        "blockType": "icon-grid",
        "order": 4,
        "anchorId": "solutions",
        "data": {
          "title": "MORE THAN FREIGHT FORWARDING",
          "subtitle": "Beyond moving cargo, we offer a suite of integrated services to optimize your entire supply chain and add value to your business.",
          "items": [
            {
              "icon": "ShieldCheck",
              "title": "Customs Clearance",
              "description": "Expert navigation of complex customs regulations to ensure smooth and compliant cross-border trade."
            },
            {
              "icon": "Warehouse",
              "title": "Warehousing",
              "description": "Strategic warehousing and distribution solutions optimized for efficiency and inventory control."
            },
            {
              "icon": "BarChart3",
              "title": "Trade Finance",
              "description": "Financial solutions to support your global trade ambitions and manage supply chain risks effectively."
            },
            {
              "icon": "Info",
              "title": "Business Intelligence",
              "description": "Data-driven insights to optimize your supply chain performance and drive strategic growth."
            }
          ]
        }
      },
      {
        "blockType": "services-section",
        "order": 5,
        "anchorId": "expertise",
        "data": {
          "title": "INDUSTRY EXPERTISE",
          "subtitle": "Our specialized teams understand the unique challenges of your industry and develop tailored solutions to meet your specific logistics requirements.",
          "topLink": {
            "label": "Start with construction",
            "href": "/industries/construction"
          },
          "services": [
            {
              "title": "Automotive",
              "description": "Precision supply support for OEMs and component manufacturers using CR and HR steel.",
              "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
              "href": "/industries/automotive"
            },
            {
              "title": "Construction",
              "description": "Project dispatch support for sheets, plates, and chequered plates used in construction.",
              "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176",
              "href": "/industries/construction"
            },
            {
              "title": "Oil & Gas",
              "description": "Reliable material movement for refinery, pipeline, tank, and energy infrastructure work.",
              "image": "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170",
              "href": "/industries/oil-gas"
            },
            {
              "title": "Shipbuilding",
              "description": "Marine project steel movement for shipyards, offshore structures, and deck applications.",
              "image": "https://images.unsplash.com/photo-1602575051429-c502cac0d3e8?q=80&w=1170",
              "href": "/industries/shipbuilding"
            },
            {
              "title": "Heavy Engineering",
              "description": "Heavy plate and processed steel delivery support for machinery and industrial fabrication.",
              "image": "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170",
              "href": "/industries/heavy-engineering"
            },
            {
              "title": "Fabricators & OEMs",
              "description": "Repeat supply support for workshops, manufacturing lines, and OEM production teams.",
              "image": "https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=1170",
              "href": "/industries/fabricators-oems"
            }
          ]
        }
      },
      {
        "blockType": "solution-insights",
        "order": 6,
        "anchorId": "insights",
        "data": {
          "items": []
        }
      },
      {
        "blockType": "faq-section",
        "order": 7,
        "anchorId": "faqs",
        "data": {
          "title": "FAQs",
          "items": [
            {
              "question": "How does Sonatek Steels ensure efficient handling and tracking of shipments?",
              "answer": "We use state-of-the-art digital platforms and real-time tracking systems to provide end-to-end visibility and ensure every shipment is handled with precision and care."
            },
            {
              "question": "What types of cargo can be handled through your freight services?",
              "answer": "Our network is equipped to handle a wide variety of cargo, including containerized goods, bulk commodities, temperature-sensitive items, and oversized machinery."
            },
            {
              "question": "Do you offer customized solutions for specific industry needs?",
              "answer": "Yes, we specialize in tailored supply chain solutions designed to meet the unique requirements of various sectors, including automotive, healthcare, and retail."
            },
            {
              "question": "What are the benefits of using a single partner for all freight routes?",
              "answer": "Working with a single partner provides consistency, better coordination, simplified communication, and often more competitive pricing through consolidated volumes."
            },
            {
              "question": "Can you handle urgent or time-sensitive steel deliveries?",
              "answer": "Yes, our urgent material movement service prioritizes time-sensitive maintenance, fabrication, and production requirements to keep your operations running."
            },
            {
              "question": "Do you support multimodal transport for steel shipments?",
              "answer": "Yes, we combine road, rail, and ocean freight options to move coils, sheets, plates, and project steel efficiently across origin and destination points."
            }
          ]
        }
      },
      {
        "blockType": "cta-banner-industry",
        "order": 8,
        "data": {
          "title": "TALK TO AN EXPERT",
          "description": "Our experts are ready to help you optimize your supply chain. Reach out to us today for a customized freight forwarding solution.",
          "btnText": "Contact Us",
          "btnHref": "/contact-us",
          "bgImage": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "Solutions — Freight Forwarding"
  },
  {
    "slug": "about-us",
    "blocks": [
      {
        "blockType": "hero-section",
        "order": 0,
        "data": {
          "breadcrumb": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "About us",
              "href": "/about-us"
            }
          ],
          "title": "About Us",
          "description": "Made for Life, Your Supplier of Choice. By selecting Sonatek Steels as your supplier, you make the choice of innovative and high-performance solutions.",
          "bgImage": "https://images.unsplash.com/photo-1617707713766-ee547bd0720a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "hasBtn": false,
          "btnText": "",
          "btnHref": ""
        }
      },
      {
        "blockType": "mission-section",
        "order": 1,
        "data": {
          "label": "About Us",
          "title": "About Our Company",
          "bodyText": "Established in 2014, Sonatek Steels Pvt. Ltd. are the distributors of flat steel products in Northern India. We are a one-stop solution for all flat steel product requirements and have a customer base that is spread across corporate clients, OEMs, and various industrial segments. We are the MOU Dealer of India's leading steel producers, Steel Authority of India Ltd. and perform distribution for their entire range of Cold Rolled (CR) steel products."
        }
      },
      {
        "blockType": "global-network",
        "order": 2,
        "data": {
          "label": "Our Distribution Network",
          "headline": "Strong Presence Across\nNorthern India",
          "videoUrl": "https://www.pexels.com/download/video/8829606",
          "sub": "Our extensive network means fewer handovers, faster local delivery, and tailored solutions delivered through a single trusted partner.",
          "ctaText": "Our Locations",
          "ctaHref": "/contact-us#location"
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 3,
        "anchorId": "mission",
        "data": {
          "title": "Our Mission",
          "description": "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products. Through our team of experienced and qualified professionals, we aim to engineer excellence in everything we do. Since 2014, that mission has meant building long-term relationships with corporate clients, OEMs, and industrial buyers who need dependable flat steel supply, not just a one-time transaction. We measure our success by how reliably we keep our customers' production lines and project sites running.",
          "image": "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=800&q=80",
          "isReversed": false
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 4,
        "anchorId": "what-we-do",
        "data": {
          "title": "What We Do",
          "description": "We provide a comprehensive range of steel products. We supply the complete product range of SAIL, including Cold Rolled (CR) Coils/Sheets, Hot Rolled (HR) Coils & Sheet/Plates, HSM Plates and Chequered Plates of any grade/specification. We pride ourselves on being the largest stockists in Northern India who have the entire range of Flat Steel Products in their product portfolio. Beyond stocking and supply, we offer custom slitting, shearing, and cut-to-length processing, so customers receive material in the exact dimensions their production or project requires, backed by full manufacturer test certificates for every batch.",
          "image": "https://images.unsplash.com/photo-1776549821469-e8aab812dba0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "link": "/products",
          "linkText": "View Products",
          "isReversed": true
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 5,
        "anchorId": "management",
        "data": {
          "title": "Our Management",
          "description": "Our team works as a partner to develop the relationship and at the same time delivering results. We have highly qualified management, using a time and timely product delivery based model. We are also specialized in providing personalized service to our customers in this area. Our team is a mix of one of the strongest leaders in this industry. Each account is guided by people who understand steel grades, tolerances, and production schedules firsthand, so customers get informed advice rather than generic sales support.",
          "image": "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "link": "/leadership",
          "linkText": "Our Leadership",
          "isReversed": false
        }
      },
      {
        "blockType": "alternate-card-section",
        "order": 6,
        "anchorId": "health-safety",
        "data": {
          "title": "Health & Safety",
          "description": "Safety is the utmost priority at Sonatek Steels. Everyone adheres to the policies and guidelines to ensure their well-being and the welfare of other people, property, and environment. We comply with applicable legislation, protocols, and regulations to maintain fire protection and other emergency systems. From warehouse handling of heavy coils and plates to loading and dispatch, our teams follow structured safety procedures designed to protect our people and yours at every handover point.",
          "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
          "link": "/sustainability",
          "linkText": "Our Sustainability Approach",
          "isReversed": true
        }
      },
      {
        "blockType": "join-team-cta",
        "order": 7,
        "data": {
          "title": "Join the team building Northern India's steel supply chain.",
          "description": "Discover career opportunities that challenge you to think differently, act boldly, and create a lasting impact across the industries we serve.",
          "buttonText": "Join our team",
          "buttonLink": "/leadership"
        }
      }
    ],
    "seo": {},
    "status": "published",
    "title": "About Us"
  },
  {
    "slug": "privacy",
    "blocks": [
      {
        "blockType": "faq-section",
        "order": 0,
        "data": {
          "title": "PRIVACY NOTICE",
          "items": [
            {
              "question": "1. Privacy Policy",
              "answer": "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.\n\nWe use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
            },
            {
              "question": "2. Interpretation and Definitions",
              "answer": "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
            },
            {
              "question": "3. Definitions",
              "answer": "\"Account\" means a unique account created for You to access our Service or parts of our Service.\n\n\"Affiliate\" means an entity that controls, is controlled by or is under common control with a party...\n\n\"Company\" refers to Sonatek Steels LLC, Naraina Delhi.\n\n\"Cookies\" are small files that are placed on Your computer...\n\n\"Country\" refers to: Delhi, India\n\n\"Device\" means any device that can access the Service such as a computer, a cellphone or a tablet.\n\n\"Personal Data\" is any information that relates to an identified or identifiable individual.\n\n\"Service\" refers to the Website.\n\n\"Service Provider\" means any natural or legal person who processes the data on behalf of the Company.\n\n\"Usage Data\" refers to data collected automatically...\n\n\"Website\" refers to Sonatek Steels, accessible from https://sonateksteels.com/\n\n\"You\" means the individual accessing or using the Service..."
            },
            {
              "question": "4. Collecting and Using Your Personal Data",
              "answer": "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Usage Data.\n\nUsage Data is collected automatically when using the Service, and may include Your Device's Internet Protocol address, browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."
            },
            {
              "question": "5. Use of Your Personal Data",
              "answer": "The Company may use Personal Data for the following purposes: To provide and maintain our Service, to manage Your Account, for the performance of a contract, to contact You regarding updates or offers, to manage Your requests, for business transfers, and for marketing purposes. We may share Your information with Service Providers, Affiliates, or other users if shared publicly."
            },
            {
              "question": "6. Retention of Your Personal Data",
              "answer": "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."
            },
            {
              "question": "7. Transfer of Your Personal Data",
              "answer": "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."
            },
            {
              "question": "8. Disclosure of Your Personal Data",
              "answer": "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
            },
            {
              "question": "9. Security of Your Personal Data",
              "answer": "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."
            },
            {
              "question": "10. Contact Us",
              "answer": "If you have any questions about this Privacy Policy, You can contact us by visiting our website: https://sonateksteels.com/ or by email at sonateksteels@gmail.com"
            }
          ]
        }
      }
    ],
    "seo": {
      "metaTitle": "Privacy Notice | Sonatek Steels",
      "metaDescription": "Read our privacy notice to understand how we collect, use, and protect your personal information."
    },
    "status": "published",
    "title": "Privacy Notice"
  },
  {
    "slug": "terms-conditions",
    "blocks": [
      {
        "blockType": "text-sections",
        "order": 0,
        "data": {
          "title": "TERMS OF USE",
          "intro": "Please read these Terms and Conditions carefully before using our website.",
          "breadcrumb": [
            {
              "label": "Home",
              "href": "/"
            },
            {
              "label": "Terms of use",
              "href": "/terms-conditions"
            }
          ],
          "sections": [
            {
              "heading": "1. What's In These Terms?",
              "content": "These Terms of Use (the \"Terms\") tell you the rules for using our website sonateksteels.com (\"Our Website\")."
            },
            {
              "heading": "2. Who We Are and How To Contact Us",
              "content": "sonateksteels.com is a website operated by Sonatek Steels (\"we\", \"us\", \"our\", the \"Company\"). We are a company registered in Delhi, India.\n\nTo contact us, please email info@sonateksteels.com."
            },
            {
              "heading": "3. By Using Our Website You Accept These Terms",
              "content": "By using Our Website, you confirm that you accept these Terms and that you agree to comply with them.\n\nIf you do not agree to these Terms, you must not use Our Website.\n\nWe recommend that you print a copy of these Terms for future reference."
            },
            {
              "heading": "4. There Are Other Terms That May Apply To You",
              "content": "These Terms of Use refer to the following additional terms, which also apply to your use of Our Website:\n\nOur Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using Our Website, you consent to such processing and you warrant that all data provided by you is accurate."
            },
            {
              "heading": "5. We May Make Changes To These Terms",
              "content": "We amend these Terms from time to time. Every time you wish to use Our Website, please check these Terms to ensure you understand the terms that apply at that time."
            },
            {
              "heading": "6. We May Make Changes To Our Website",
              "content": "We may update and change Our Website from time to time to reflect changes to our products, our users' needs and our business priorities."
            },
            {
              "heading": "7. We May Suspend Or Withdraw Our Website",
              "content": "Our Website is made available free of charge.\n\nWe do not guarantee that Our Website, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of Our Website for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.\n\nYou are also responsible for ensuring that all persons who access Our Website through your internet connection are aware of these Terms of Use and other applicable terms and conditions, and that they comply with them."
            },
            {
              "heading": "8. You Must Keep Your Account Details Safe",
              "content": "If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.\n\nWe have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these Terms of Use.\n\nIf you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at info@sonateksteels.com."
            },
            {
              "heading": "9. How You May Use Material On Our Website",
              "content": "We are the owner or the licensee of all intellectual property rights in Our Website, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.\n\nYou may print off one copy, and may download extracts, of any page(s) from Our Website for your personal use and you may draw the attention of others within your organisation to content posted on Our Website.\n\nYou must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.\n\nOur status (and that of any identified contributors) as the authors of content on Our Website must always be acknowledged.\n\nYou must not use any part of the content on Our Website for commercial purposes without obtaining a licence to do so from us or our licensors.\n\nIf you print off, copy or download any part of Our Website in breach of these Terms of Use, your right to use Our Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made."
            },
            {
              "heading": "10. Do Not Rely On Information On This Website",
              "content": "The content on Our Website is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on Our Website.\n\nAlthough we make reasonable efforts to update the information on Our Website, we make no representations, warranties or guarantees, whether express or implied, that the content on Our Website is accurate, complete or up to date."
            },
            {
              "heading": "11. We Are Not Responsible For Websites We Link To",
              "content": "Where Our Website contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.\n\nWe have no control over the contents of those sites or resources."
            },
            {
              "heading": "12. User-Generated Content Is Not Approved By Us",
              "content": "This website may include information and materials uploaded by other users of the site, including to bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. The views expressed by other users on Our Website do not represent our views or values.\n\nIf you wish to complain about information and materials uploaded by other users please contact us on info@sonateksteels.com."
            },
            {
              "heading": "13. When We Are Responsible For Loss Or Damage Suffered By You",
              "content": "Whether you are a consumer or a business user:\n\n- We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.\n\nIf you are a business user:\n\n- We exclude all implied conditions, warranties, representations or other terms that may apply to Our Website or any content on it.\n- We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:\n  - use of, or inability to use, Our Website; or\n  - use of or reliance on any content displayed on Our Website.\n- In particular, we will not be liable for:\n  - loss of profits, sales, business, or revenue;\n  - business interruption;\n  - loss of anticipated savings;\n  - loss of business opportunity, goodwill or reputation; or\n  - any indirect or consequential loss or damage.\n\nIf you are a consumer user:\n\n- Please note that we only provide Our Website for domestic and private use. You agree not to use Our Website for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity."
            },
            {
              "heading": "14. How We May Use Your Personal Information",
              "content": "We will only use your personal information as set out in our Privacy Policy."
            },
            {
              "heading": "15. We Are Not Responsible For Viruses And You Must Not Introduce Them",
              "content": "We do not guarantee that Our Website will be secure or free from bugs or viruses.\n\nYou are responsible for configuring your information technology, computer programmes and platform to access Our Website. You should use your own virus protection software.\n\nYou must not misuse Our Website by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to Our Website, the server on which Our Website is stored or any server, computer or database connected to Our Website. You must not attack Our Website via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use Our Website will cease immediately."
            },
            {
              "heading": "16. Rules About Linking To Our Website",
              "content": "You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.\n\nYou must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.\n\nYou must not establish a link to Our Website in any website that is not owned by you.\n\nOur Website must not be framed on any other site, nor may you create a link to any part of Our Website other than the home page.\n\nWe reserve the right to withdraw linking permission without notice.\n\nIf you wish to link to or make any use of content on Our Website other than that set out above, please contact info@sonateksteels.com."
            },
            {
              "heading": "17. Which Country's Laws Apply To Any Disputes?",
              "content": "If you are a consumer, please note that these Terms of Use, their subject matter and their formation, are governed by the laws of India. You and we both agree that the courts of Delhi will have exclusive jurisdiction.\n\nIf you are a business, these Terms of Use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by the laws of India. We both agree to the exclusive jurisdiction of the courts of Delhi."
            },
            {
              "heading": "18. Our Trade Marks Are Registered",
              "content": "\"Sonatek Steels\" and the Sonatek Steels logo are registered trade marks of Sonatek Steels. You are not permitted to use them without our approval, unless they are part of material you are using as permitted under How you may use material on our website."
            }
          ]
        }
      }
    ],
    "seo": {
      "metaTitle": "Terms of Use | Sonatek Steels",
      "metaDescription": "Read our terms and conditions carefully before using our website."
    },
    "status": "published",
    "title": "Terms of Use"
  }
];

export const SEED_NAVBAR: SeedNavbar | null = {
  "logoUrl": "",
  "phones": [
    { "name": "Vijay Jain", "role": "Owner", "phone": "+91 84470 83022", "tel": "918447083022" },
    { "name": "Rajesh", "role": "Sales (Delhi)", "phone": "+91 90154 16940", "tel": "919015416940" }
  ],
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028",
  "navItems": [
    {
      "label": "Solutions",
      "href": "#",
      "hasMegaMenu": true,
      "featured": [
        {
          "img": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
          "title": "Certified sourcing and technical support.",
          "cta": "Learn More",
          "href": "/steel-procurement"
        }
      ],
      "sections": [
        {
          "title": "FLAT STEEL PRODUCTS",
          "links": [
            {
              "label": "Cold Rolled (CR) Coils",
              "href": "/products/cr-coils"
            },
            {
              "label": "CR Sheets",
              "href": "/products/cr-sheets"
            },
            {
              "label": "Hot Rolled (HR) Coils",
              "href": "/products/hr-coils"
            },
            {
              "label": "HR Sheets/Plates",
              "href": "/products/hr-sheets"
            },
            {
              "label": "Chequered Plates",
              "href": "/products/chequered-plates"
            }
          ]
        },
        {
          "title": "INDUSTRIAL SEGMENTS",
          "links": [
            {
              "label": "Construction",
              "href": "/industries/construction"
            },
            {
              "label": "Automotive",
              "href": "/industries/automotive"
            },
            {
              "label": "Oil & Gas",
              "href": "/industries/oil-gas"
            },
            {
              "label": "Shipbuilding",
              "href": "/industries/shipbuilding"
            },
            {
              "label": "Heavy Engineering",
              "href": "/industries/heavy-engineering"
            },
            {
              "label": "Fabricators & OEMs",
              "href": "/industries/fabricators-oems"
            }
          ]
        },
        {
          "title": "SOLUTIONS",
          "links": [
            {
              "label": "Steel Procurement",
              "href": "/steel-procurement"
            },
            {
              "label": "Custom Steel Processing",
              "href": "/custom-steel-processing"
            },
            {
              "label": "Infrastructure & Industrial Project",
              "href": "/infrastructure-industrial-project"
            },
            {
              "label": "Technical Steel Selection",
              "href": "/technical-steel-selection"
            },
            {
              "label": "Supply Chain Solutions",
              "href": "/supply-chain"
            },
            {
              "label": "Freight Forwarding Services",
              "href": "/freight-forwarding"
            }
          ]
        },
        {
          "title": "SERVICES",
          "links": [
            {
              "label": "Custom Processing",
              "href": "/custom-steel-processing"
            },
            {
              "label": "Distribution Support",
              "href": "/supply-chain"
            },
            {
              "label": "Technical Assistance",
              "href": "/technical-steel-selection"
            }
          ]
        }
      ]
    },
    {
      "label": "Products",
      "href": "/products",
      "hasMegaMenu": false,
      "featured": [],
      "sections": []
    },
    {
      "label": "About Us",
      "href": "/about-us",
      "hasMegaMenu": false,
      "featured": [],
      "sections": []
    },
    {
      "label": "Sustainability",
      "href": "/sustainability",
      "hasMegaMenu": false,
      "featured": [],
      "sections": []
    },
    {
      "label": "Blogs",
      "href": "/blogs",
      "hasMegaMenu": false,
      "featured": [],
      "sections": []
    },
    {
      "label": "Contact",
      "href": "/contact-us",
      "hasMegaMenu": false,
      "featured": [],
      "sections": []
    }
  ]
};
