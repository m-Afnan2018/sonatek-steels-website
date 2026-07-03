# Sonatek Steels — AI Image Generation Prompts

Every image on the public site is currently a generic stock/Unsplash placeholder (or, in a few
spots, leftover artwork from the template this site was built from — see **Content Flags** below).
This document gives you a ready-to-paste prompt for **every image slot on every page**, organized
by URL, so you can regenerate them with ChatGPT/DALL·E, Midjourney, or any other tool.

## How to use this doc
1. Read the **Global Style Guide** once — append it (or paraphrase it) to every prompt below so all
   generated images feel like one consistent brand, not a mismatched stock photo grab.
2. Go section by section by URL. Each row gives you: the **placement** (which section of the page /
   what kind of slot it is), the **on-page title/copy** it sits next to (for your own reference),
   and the **prompt** to generate the replacement image.
3. Aspect ratios are suggested per slot — match them so images don't get awkwardly cropped.
4. Where the *same* placeholder image is reused for multiple different titles across the site, each
   occurrence still gets its **own tailored prompt** below (because the right image differs even
   when the current placeholder doesn't), grouped under whichever URL it appears on. Truly identical
   shared components (e.g. the CTA background strip, the "Our Core Solutions" cards) are written
   once in **Shared / Sitewide Components** and simply referenced from each page section.

---

## Global Style Guide
*(Append this to every prompt, or feed it to your tool as a persistent style reference.)*

> Professional industrial/corporate photography style. Real photographic look — **not** an
> illustration, 3D render, cartoon, or clipart. Shot on a full-frame camera, natural or soft
> studio lighting, shallow depth of field (f/2.8–f/4) for close-ups, deep focus for wide
> establishing shots. Color grade: cool steel-blue and slate-gray tones with occasional warm
> amber/orange accents (sparks, molten metal, hazard signage) — matches an industrial steel
> distributor's brand. Indian industrial/manufacturing setting (Northern India steel mills,
> warehouses, logistics yards) where people are shown. Clean, safety-compliant environments
> (PPE — hard hats, hi-vis vests, gloves — worn correctly). No visible text, logos, watermarks,
> or brand marks baked into the image. High resolution, sharp focus.

---

## Content Flags (not image prompts — read before you regenerate)

These aren't places where a *better photo* is the fix; they're leftover content from the template
this site was built on and shouldn't just get an AI image dropped in:

- **`/leadership`** — the 9 fallback leadership bios (Essa Kazim, Sir Tim Clark, Deepak Parekh,
  etc.) are real DP World executives, not Sonatek Steels staff. Don't generate AI headshots and
  present them as real executives — that's misleading to visitors. Replace with actual photos of
  Sonatek's real leadership team, or pull the section until you have them.
- **`/services/port-network`** and **`/services/port-services`** — the copy is literally about DP
  World's Jebel Ali Port, sub-Saharan Africa trade, Romania, etc. This is unrelated to a Northern
  India flat-steel distributor. Needs a copy rewrite, not just new images (prompts are still
  provided below in case you keep the page structure).
- **`/temp`** — orphaned dev page, still titled "Safe Together at DP World." Not linked from
  Navbar/Footer but publicly reachable. Recommend deleting the route rather than re-imaging it.
- **`/sustainability` partner logos** — currently real IBM/Microsoft/Amazon/Google logos pulled
  from Wikimedia. These need to be swapped for Sonatek's actual partners/certifications, not
  AI-generated logos.
- **Home → Beyond Business cards** — one card image is pulled from a charity's own site
  (`aagamshreefoundation.org`) and another from an unrelated Webflow template CDN. Prompts to
  replace both with on-brand imagery are included below.

---

## Shared / Sitewide Components
*(Appear on multiple pages — generate once, reuse everywhere they're listed.)*

### Navbar "Solutions" mega-menu featured card
**Appears on:** every page (site header).
**Prompt:** Close-up of a stack of cold-rolled steel coils in a clean, well-lit warehouse, a
technician in a hard hat and hi-vis vest inspecting one coil's edge with a measuring gauge.
Conveys "certified sourcing and technical support." — 4:3.

### CTA Banner background (used across Home, Solutions, Industries pages)
**Appears on:** Home hero variant, and repeated (with different crops) as the dark background band
behind every "Talk to an Expert / Get a Quote" section across solution and industry pages.
**Prompt:** Wide, moody industrial photo of a steel service center at dusk — rolled steel plates
stacked under warehouse floodlights, slight lens flare, low camera angle looking up at a gantry
crane in motion. Should read well with a dark overlay and white text on top. — 21:9, ultra-wide.

### "Our Core Solutions" 6-card strip (`SOLUTIONS_DATA`)
**Appears on:** `/steel-procurement`, `/custom-steel-processing`, `/infrastructure-industrial-project`,
`/technical-steel-selection`, `/freight-forwarding`, `/supply-chain` (identical set on all six).

| Card title | Prompt |
|---|---|
| Steel Procurement Solution | Warehouse worker cross-checking a clipboard against tagged steel coil inventory, mill certificates visible on a nearby desk. Represents certified sourcing from a primary mill. — 4:3 |
| Custom Steel Processing | Automated slitting line mid-operation, a coil unwinding into precise steel ribbons, sparks of light reflecting off the machinery. — 4:3 |
| Infrastructure & Industrial Projects | Aerial/elevated shot of flat steel plates being loaded onto flatbed trucks at a busy industrial yard, cranes overhead, for a large construction project. — 4:3 |
| Technical Steel Selection Support | Engineer and client reviewing steel grade specification charts and a physical sample plate together at a consultation desk. — 4:3 |
| Freight Forwarding | Fleet of flatbed trucks loaded with secured steel sheets queued at a logistics yard gate at sunrise. — 4:3 |
| Supply Chain Solutions | Warehouse management control room with a staff member viewing digital inventory dashboards on a monitor, stacked steel stock visible through a window behind them. — 4:3 |

### "Industries We Serve" 6-card strip (`INDUSTRY_EXPERTISE_DATA`)
**Appears on:** `/steel-procurement`, `/custom-steel-processing`, `/infrastructure-industrial-project`,
`/freight-forwarding`, `/supply-chain` (identical set on all five).

| Card title | Prompt |
|---|---|
| Automotive | Robotic arms welding a car body-in-white on an automotive assembly line, steel sheet metal panels visible mid-press. — 4:3 |
| Construction | Steel rebar and structural beams being craned into place on a high-rise building construction site. — 4:3 |
| Oil & Gas | Rows of large-diameter steel pipes stacked at a pipeline yard, refinery infrastructure visible in the background. — 4:3 |
| Shipbuilding | Wide shot inside a dry dock, welded steel hull plates of a ship under construction, workers in PPE on scaffolding. — 4:3 |
| Heavy Engineering | Massive steel plate being lifted by an overhead crane inside a heavy fabrication workshop, sparks from a nearby cutting torch. — 4:3 |
| Fabricators & OEMs | Small-scale metal fabrication shop, a worker precision-cutting a steel blank on a CNC plasma table. — 4:3 |

---

## `/` — Home Page

| Placement | Context | Prompt |
|---|---|---|
| Hero video poster | Headline "Your Partner in Flat Steel" — "Established in 2014, Sonatek Steels Pvt. Ltd. are the leading distributors of flat steel products in Northern India." | Wide establishing shot of a modern steel distribution warehouse interior, rows of stacked HR/CR coils under skylights, a forklift moving stock in the mid-ground. Cinematic, slight motion blur on the forklift to suggest video. — 16:9 |
| Services card — Steel Procurement | "Reliable, certified, and cost-effective sourcing of CR/HR coils, sheets, plates, and chequered plates directly from trusted primary mills like SAIL." | Close-up of hot-rolled steel coils with visible mill ID tags, a quality inspector checking a certificate against the coil. — 4:3 |
| Services card — Infrastructure & Industrial Projects | Card thumbnail for large industrial project supply. | Construction site with a steel-frame industrial building under erection, workers bolting structural steel beams together. — 4:3 |
| Services card — Technical Steel Selection | Card thumbnail for advisory on grade/thickness/finish. | Technician using a handheld thickness gauge on a steel sheet, laptop showing a materials spec sheet nearby. — 4:3 |
| Services card — Freight Forwarding Services | Card thumbnail. | Loaded flatbed truck departing a steel yard through a gate, motion blur on wheels suggesting departure. — 4:3 |
| Services card — Custom Steel Processing | Card thumbnail. | Shearing machine cutting a steel sheet to length, clean straight edge, offcuts stacked to the side. — 4:3 |
| Services card — Supply Chain Solutions | Card thumbnail. | Warehouse team member scanning a barcode on a steel bundle with a handheld scanner, digital inventory screen in view. — 4:3 |
| Services fallback card image (used when a DB product has no photo) | Generic product fallback. | Neutral, well-lit stack of flat steel sheets on a warehouse rack, no branding. — 4:3 |
| Global Network video poster | "Our Distribution Network — Strong Presence Across Northern India." | Stylized map-like aerial view of a highway interchange near an industrial zone at dusk, truck headlights forming light trails, suggesting a distribution network. — 16:9 |
| Beyond Business — section background | Heading "BEYOND BUSINESS." | Wide, softly blurred shot of hands planting a sapling at a community tree-plantation drive next to an industrial facility fence, warm late-afternoon light. — 21:9 |
| Beyond Business — Card 1 (currently a charity's own logo) | "Aagamshree Foundation" — "Every individual should have the opportunity to lead a healthy and productive life." | Volunteers distributing supplies to a community group under a small outdoor tent, genuine documentary-style CSR photo, no logos. — 4:3 |
| Beyond Business — Card 2 (currently an unrelated Webflow stock photo) | "Using Sustainable Transportation" | Electric or CNG-powered delivery truck being loaded at a steel yard, solar panels visible on a nearby warehouse roof. — 3:4 |
| Beyond Business — Card 3 | "Empowering People." | Diverse group of steel-plant employees in PPE smiling together during a safety briefing, natural candid framing. — 4:3 |
| Latest News fallback — "Basically Steel: An Alloy of Iron and Carbon" | Blog card thumbnail. | Macro close-up of raw steel texture/grain with visible carbon speckling, dramatic side lighting. — 4:3 |
| Latest News fallback — "Hot Rolling: Deforming at High Temperature" | Blog card thumbnail. | Glowing orange-hot steel slab passing through hot-rolling mill rollers, sparks flying, motion blur. — 4:3 |
| Latest News fallback — "Sonatek Steels Marks New Milestone" | Blog card thumbnail (company milestone/news). | Team of employees and management cutting a ribbon or celebrating at a warehouse expansion event, banners removed for genericity. — 16:9 |
| Latest News API fallback (no cover image) | Generic blog fallback. | Open notebook and laptop on a desk with a blurred steel warehouse visible through a window behind, editorial/blog mood. — 4:3 |
| CTA Banner background | "Talk to a Steel Expert." | *(see Shared Components → CTA Banner background)* |

---

## `/about-us`

| Placement | Context | Prompt |
|---|---|---|
| Hero background | Title "About Us" — "Made for Life, Your Supplier of Choice." | Wide shot of the exterior of a large steel distribution warehouse/yard at golden hour, Sonatek-style flat steel stock visible through open bay doors. — 16:9 |
| Global Network video poster | Reused from Home. | *(see Home → Global Network video poster)* |
| Section — "Our Mission" | "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products..." | Warehouse floor manager reviewing a tablet with real-time stock data, stacked steel coils behind them, conveys continuous improvement. — 4:3 |
| Section — "What We Do" | "We provide a comprehensive range of steel products. We supply the complete product range of SAIL..." | Wide shot of an organized steel product range — coils, sheets, plates, chequered plates — laid out and labeled in a showroom-style display area. — 4:3 |
| Section — "Our Management" | "Our team works as a partner to develop the relationship..." (links to Leadership) | Small group of professionals in business-casual attire in a boardroom meeting, steel samples on the table, warehouse visible through glass wall behind them. — 4:3 |
| Section — "Health & Safety" | "Safety is the utmost priority at Sonatek Steels..." | Worker properly wearing full PPE (hard hat, safety glasses, gloves, hi-vis vest) giving a thumbs-up beside safety signage in a steel warehouse. — 4:3 |

---

## `/leadership`

*(See Content Flag above — don't generate AI "executive" headshots to stand in for real people.
Prompts below are for the hero/background only.)*

| Placement | Context | Prompt |
|---|---|---|
| Hero background | Title "Leadership" — "Our leadership team drives Sonatek Steels forward with a clear vision, strong values, and a commitment to excellence." | Empty modern boardroom with a long table, city/industrial skyline visible through floor-to-ceiling windows, warm directional light — no people (so it doesn't imply a specific fake exec). — 16:9 |
| Leader photo fallback (DB default) | Generic headshot fallback if a leader has no photo uploaded. | *Do not AI-generate.* Use a neutral placeholder (initials avatar or silhouette icon) instead, matching how Testimonials already handles missing photos. |

---

## `/steel-procurement`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Steel Procurement Solution" — "Reliable, certified, and cost-effective sourcing of CR/HR coils, sheets, plates, and chequered plates directly from trusted primary mills like SAIL." | Wide shot of a steel mill's outbound yard, freshly rolled coils being loaded by overhead crane onto a truck, SAIL-style heavy industry backdrop (no logos). — 16:9 |
| "Certified Steel Inventory" — HR Coils & Sheets | Product category card. | Stack of hot-rolled steel coils in a covered warehouse bay, forklift forks visible entering frame. — 4:3 |
| "Certified Steel Inventory" — CR Coils & Sheets | Product category card. | Neatly stacked cold-rolled steel sheets with a distinctly smoother, brighter finish than HR stock, under warehouse lighting. — 4:3 |
| "Certified Steel Inventory" — Chequered Plates | Product category card. | Close-up of diamond-pattern chequered steel plate texture, raking light emphasizing the raised pattern. — 4:3 |
| "Certified Steel Inventory" — Heavy Plates | Product category card. | Thick heavy steel plates stacked on H-beam dunnage, crane hook visible above ready to lift. — 4:3 |
| "Value Added Processing" — Custom Cut-to-Length | Service card. | Cut-to-length line slicing a steel coil into flat sheets, stacked output at the end of the line. — 4:3 |
| "Value Added Processing" — Coil Slitting | Service card. | Slitting machine producing narrow steel coil strips, recoiled onto separate mandrels. — 4:3 |
| "Value Added Processing" — Vendor Managed Inventory | Service card. | Warehouse staff member updating a digital inventory kiosk next to labeled, palletized steel stock. — 4:3 |
| "Industries We Supply" strip | Shared 6-card block. | *(see Shared Components → Industries We Serve)* |
| "Our Core Solutions" strip | Shared 6-card block. | *(see Shared Components → Our Core Solutions)* |
| Industry Insights fallback (blog card, no cover) | Blog teaser fallback. | *(see Home → Latest News API fallback)* |
| CTA Banner background | "Start Your Project" style CTA. | *(see Shared Components → CTA Banner background)* |

---

## `/custom-steel-processing`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Custom Steel Processing" | Wide interior shot of a steel processing floor, an automated pickling/slitting line in operation, steam or light mist for atmosphere, worker at a control panel. — 16:9 |
| "Industries We Serve" strip | Shared 6-card block. | *(see Shared Components → Industries We Serve)* |
| "Our Core Solutions" strip | Shared 6-card block. | *(see Shared Components → Our Core Solutions)* |
| CTA Banner background | CTA section. | *(see Shared Components → CTA Banner background)* |

> Note: `PROCESSING_CAPABILITIES_DATA` (Slitting/Shearing/Pickling & Oiling/Edge Trimming) and
> `APPLICATIONS_DATA` are defined in code but currently **commented out / unused** on this page —
> no prompts needed unless you re-enable those sections.

---

## `/infrastructure-industrial-project`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Infrastructure & Industrial Project Solution" | Aerial/drone-style shot of a large industrial construction site — steel structural framework rising, cranes, stacked plate deliveries on-site. — 16:9 |
| "Project-Ready Steel Products" — HR Sheets & Plates | Product card (reuses hero concept). | Flat steel sheets and plates staged on-site at a construction project, tagged and ready for use. — 4:3 |
| "Project-Ready Steel Products" — HR Coils | Product card. | Hot-rolled coils being unloaded from a flatbed at a project site by mobile crane. — 4:3 |
| "Project-Ready Steel Products" — Chequered Plates | Product card. | Chequered steel plates being installed as walkway flooring on an industrial platform. — 4:3 |
| "Project-Ready Steel Products" — CR Sheets & Coils | Product card. | Cold-rolled sheet stock stacked and shrink-wrapped for project delivery, delivery manifest clipboard in frame. — 4:3 |
| "Where This Solution Fits" strip | Shared 6-card block. | *(see Shared Components → Industries We Serve)* |
| CTA Banner background | CTA section. | Close-up of a steel plate stamped/tagged for a specific project batch, stacked plates behind, warm industrial lighting. — 21:9 |

---

## `/technical-steel-selection`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Technical Steel Selection Support" | Engineer at a workbench examining a steel sample under a magnifier/loupe, spec sheets and a laptop with material charts nearby. — 16:9 |
| "What We Analyze" — Grade Selection | Card. | Close-up of a hand comparing two steel sample coupons of different grades side by side against a light box. — 4:3 |
| "What We Analyze" — Surface Finish Optimization | Card. | Macro shot comparing a matte hot-rolled surface and a glossy cold-rolled surface on adjacent steel samples. — 4:3 |
| "What We Analyze" — Mechanical Properties Assessment | Card. | Steel test coupon being pulled in a tensile testing machine in a materials lab. — 4:3 |
| "What We Analyze" — Dimensional Tolerances | Card. | Technician using digital calipers to measure steel sheet thickness with a readout visible. — 4:3 |
| "Who Benefits From This?" — Construction | Card. | *(see Shared Components → Industries We Serve → Construction)* |
| "Who Benefits From This?" — Automotive | Card. | *(see Shared Components → Industries We Serve → Automotive)* |
| "Who Benefits From This?" — Oil & Gas | Card. | *(see Shared Components → Industries We Serve → Oil & Gas)* |
| "Who Benefits From This?" — Shipbuilding | Card. | *(see Shared Components → Industries We Serve → Shipbuilding)* |
| "Who Benefits From This?" — Heavy Engineering | Card. | *(see Shared Components → Industries We Serve → Heavy Engineering)* |
| "Who Benefits From This?" — Fabricators & OEMs | Card. | *(see Shared Components → Industries We Serve → Fabricators & OEMs)* |
| CTA Banner background | CTA section. | *(see Shared Components → CTA Banner background)* |

---

## `/freight-forwarding`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Freight Forwarding Services" | Convoy of flatbed trucks loaded with secured steel coils driving on a highway near an industrial corridor, motion blur suggesting speed/reliability. — 16:9 |
| "All Routes. One Partner." — Bulk Steel Dispatch | Card. | Large steel yard with multiple trucks being simultaneously loaded via overhead crane, high-volume dispatch scene. — 4:3 |
| "All Routes. One Partner." — Urgent Material Movement | Card. | Single truck being rapidly loaded at night under floodlights, urgency conveyed through lighting and motion. — 4:3 |
| "All Routes. One Partner." — Regional Road Delivery | Card. | Delivery truck navigating a regional highway with mile markers/signage, steel cargo visible under tarp straps. — 4:3 |
| "All Routes. One Partner." — Project Delivery Planning | Card. | Logistics coordinator at a desk with a large regional route map and a laptop showing delivery schedules. — 4:3 |
| "All Routes. One Partner." — Processed Material Supply | Card. | Finished, cut-to-size steel sheets being palletized and wrapped for shipment. — 4:3 |
| "Industry Expertise" strip | Shared 6-card block. | *(see Shared Components → Industries We Serve)* |
| CTA Banner background | CTA section. | *(see Shared Components → CTA Banner background)* |

---

## `/supply-chain`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Supply Chain Solutions" | Wide shot of a modern warehouse management floor — racking system full of tagged steel stock, a staff member scanning inventory with a handheld device in the foreground. — 16:9 |
| "Industry Sectors" strip | Shared 6-card block. | *(see Shared Components → Industries We Serve)* |
| CTA Banner background | CTA section. | *(see Shared Components → CTA Banner background)* |

> Note: `SERVICES_DATA` for this page is defined but not rendered as an image section (only the
> icon-only "Beyond Logistics" grid is shown) — no prompts needed unless re-enabled.

---

## `/industries/automotive`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Precision Steel for Automotive Excellence" | Automotive stamping press mid-cycle, a sheet steel automotive body panel being formed, sparks/light reflections off tooling. — 16:9 |
| How We Can Help — Supply Chain Management | Card. | *(see Shared Components → Our Core Solutions → Supply Chain Solutions)* |
| How We Can Help — Digital Solutions & Integrations | Card. | Automotive plant control room screen showing a real-time supply chain dashboard, steel coil delivery data visualized. — 4:3 |
| How We Can Help — Production Logistics Management | Card. | Just-in-time delivery truck arriving at an automotive plant loading dock, steel coil racks visible inside. — 4:3 |
| How We Can Help — Finished Vehicle Logistics | Card. | Rows of finished cars on a car-carrier trailer at an automotive plant yard, ready for dealership dispatch. — 4:3 |
| How We Can Help — In-plant Logistics | Card. | Automated guided vehicle (AGV) or forklift moving steel coil stock inside an automotive manufacturing plant. — 4:3 |
| How We Can Help — Aftermarket Logistics | Card. | Warehouse shelving stocked with automotive replacement steel parts, a worker picking an order with a scanner. — 4:3 |
| Services — End-to-end logistics | Card. | *(see Shared Components → Our Core Solutions → Supply Chain Solutions)* |
| Services — Ports & Terminals | Card. | Container/RoRo terminal with vehicles being loaded onto a car-carrier ship, cranes in background. — 4:3 |
| Services — Contract Logistics | Card. | In-plant warehouse worker managing sequenced parts delivery on a conveyor toward an assembly line. — 4:3 |
| CTA Banner background | "Talk to an Expert." | *(see Shared Components → CTA Banner background)* |

---

## `/industries/construction`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Steel Foundations for Modern Infrastructure" | Low-angle shot of steel structural columns and beams being erected on a high-rise construction site against a blue sky. — 16:9 |
| Construction Solutions — Structural Steel Supply | Card. | Flatbed delivering structural I-beams to a construction site, crane rigging one beam for lift. — 4:3 |
| Construction Solutions — Industrial Flooring Solutions | Card. | Chequered steel plate flooring being installed in an industrial mezzanine, worker bolting panel in place. — 4:3 |
| Construction Solutions — Custom Fabrication Support | Card. | Fabrication shop worker welding a custom steel bracket, sparks flying, safety shield down. — 4:3 |
| Construction Solutions — Site Delivery Logistics | Card. | Delivery truck offloading steel bundles directly at a construction site using its own crane arm. — 4:3 |
| Construction Solutions — Quality Assurance | Card. | Quality inspector with a checklist and ultrasonic testing device examining a structural steel weld joint. — 4:3 |
| Construction Solutions — Sustainable Building | Card. | Modern building facade combining steel framework with greenery/solar panels, sustainable construction concept. — 4:3 |
| Services — HR Plates | Card. | *(see Shared Components → Our Core Solutions → Steel Procurement Solution)* |
| Services — Chequered Plates | Card. | *(see this page → Industrial Flooring Solutions)* |
| Services — Project Management | Card. | Site manager and steel supplier rep reviewing blueprints together on-site, stacked steel visible behind. — 4:3 |
| CTA Banner background | "Start Your Project." | *(see Shared Components → CTA Banner background)* |

---

## `/industries/oil-gas`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Corrosion-Resistant Steel for Energy" | Rows of large-diameter pipeline steel pipes at a coating/storage yard, refinery towers visible in the hazy background. — 16:9 |
| Energy Solutions — Pipeline Steel Supply | Card. | Steel pipes stacked on wooden dunnage at a pipeline yard, pipe ends capped for protection. — 4:3 |
| Energy Solutions — Storage Tank Materials | Card. | Large cylindrical steel storage tank under construction, welder working on a seam at its base. — 4:3 |
| Energy Solutions — Refinery Support | Card. | Wide shot of a refinery's steel piping and tank infrastructure at dusk, industrial silhouette. — 4:3 |
| Energy Solutions — Corrosion Protection | Card. | Close-up of a technician spray-coating a steel pipe section with anti-corrosion primer. — 4:3 |
| Energy Solutions — Offshore Capabilities | Card. | Heavy steel structural components staged for offshore platform fabrication, dockside crane in view. — 4:3 |
| Energy Solutions — Safety Compliance | Card. | Worker in full PPE with gas detector clipped to vest, checking a valve on energy-sector steel infrastructure. — 4:3 |
| Services — API Grade Steel | Card. | *(see this page → Pipeline Steel Supply)* |
| Services — Custom Processing | Card. | CNC beveling machine cutting a precise angle into a pipeline steel segment end. — 4:3 |
| Services — Inventory Management | Card. | Organized steel pipe inventory yard with labeled sections and a staff member doing a stock count. — 4:3 |
| CTA Banner background | "Get Energized." | *(see Shared Components → CTA Banner background)* |

---

## `/industries/shipbuilding`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Marine-Grade Steel for the High Seas" | Interior of a shipyard dry dock, a partially welded ship hull made of steel plates, workers on scaffolding, sparks from welding. — 16:9 |
| Maritime Solutions — Hull Plate Supply | Card. | Large curved steel hull plates stacked at a shipyard, crane positioned to lift one into place. — 4:3 |
| Maritime Solutions — Deck Steel Solutions | Card. | Worker welding deck steel plating on a ship under construction, overhead view. — 4:3 |
| Maritime Solutions — Offshore Structures | Card. | Heavy steel lattice structure (offshore platform module) under fabrication at a marine yard. — 4:3 |
| Maritime Solutions — Marine Logistics | Card. | Steel plates being loaded via dockside crane onto a barge for shipyard delivery. — 4:3 |
| Maritime Solutions — Surface Treatment | Card. | Shot-blasting booth with a steel plate mid-treatment, visible abrasive spray and worker in protective gear. — 4:3 |
| Maritime Solutions — Certified Sourcing | Card. | Inspector stamping/marking a steel plate with classification society certification, clipboard with cert forms. — 4:3 |
| Services — Hull Plates | Card. | *(see this page → Hull Plate Supply)* |
| Services — Shot Blasting & Priming | Card. | *(see this page → Surface Treatment)* |
| Services — Marine Engineering Support | Card. | Naval engineer and steel supplier reviewing ship hull blueprints together at a shipyard office desk. — 4:3 |
| CTA Banner background | "Anchor Your Success." | *(see Shared Components → CTA Banner background)* |

---

## `/industries/heavy-engineering`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Steel for Massive Industrial Ambitions" | Overhead crane lifting an extremely thick steel plate inside a heavy fabrication workshop, scale emphasized by a small worker figure below. — 16:9 |
| Engineering Solutions — High-Thickness Plate Supply | Card. | Stack of very thick heavy steel plates on industrial dunnage, forklift with reinforced forks nearby. — 4:3 |
| Engineering Solutions — Custom Profile Cutting | Card. | CNC plasma/flame cutting table cutting a complex profile shape out of thick steel plate, bright cutting arc. — 4:3 |
| Engineering Solutions — Stress-Relieved Alloys | Card. | Steel plate glowing inside an industrial heat-treatment furnace, viewed through the furnace door. — 4:3 |
| Engineering Solutions — Specialized Logistics | Card. | Heavy-haul trailer transporting an oversized steel component with escort vehicles, industrial road setting. — 4:3 |
| Engineering Solutions — Non-Destructive Testing | Card. | Technician performing ultrasonic testing on a thick steel plate with a handheld probe and readout screen. — 4:3 |
| Engineering Solutions — Bulk Inventory Support | Card. | Vast outdoor steel plate storage yard, plates stacked in labeled rows, aerial perspective. — 4:3 |
| Services — Heavy HR Plates | Card. | *(see this page → High-Thickness Plate Supply)* |
| Services — Forging Quality Steel | Card. | Glowing red-hot steel billet being hammered/pressed in an industrial forging press, sparks flying. — 4:3 |
| Services — Consulting & Testing | Card. | Engineer and client reviewing a materials test report at a table with a steel sample, lab equipment in background. — 4:3 |
| CTA Banner background | "Scale Your Ambition." | *(see Shared Components → CTA Banner background)* |

---

## `/industries/fabricators-oems`

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Precision Steel for Quality Manufacturing" | Small-to-mid scale fabrication workshop, a fabricator precisely measuring a cut steel blank against a technical drawing pinned to the wall. — 16:9 |
| Manufacturing Solutions — Just-In-Time Delivery | Card. | Delivery van/truck arriving at a small fabrication shop's loading bay exactly as a worker checks the time on a wall clock. — 4:3 |
| Manufacturing Solutions — Precision Slitting | Card. | *(see Shared Components → Our Core Solutions → Custom Steel Processing)* |
| Manufacturing Solutions — Cut-To-Length Sheets | Card. | Stack of precisely cut steel sheets of identical length, tape measure resting on top for scale. — 4:3 |
| Manufacturing Solutions — Value-Added Blanks | Card. | Pre-cut steel blanks ready for welding, laid out in an organized grid on a workshop floor. — 4:3 |
| Manufacturing Solutions — Inventory Consignment | Card. | Consigned steel stock in a dedicated warehouse section with a client-specific label/tag system, staff member auditing stock. — 4:3 |
| Manufacturing Solutions — Material Traceability | Card. | Close-up of a steel coil's heat-number tag being scanned/photographed for traceability records. — 4:3 |
| Services — Slit Coils | Card. | *(see Shared Components → Our Core Solutions → Custom Steel Processing)* |
| Services — Custom Blanks | Card. | *(see this page → Value-Added Blanks)* |
| Services — Material Planning | Card. | Fabricator and supply rep reviewing a material usage optimization plan on a laptop, steel offcuts organized nearby to show minimized waste. — 4:3 |
| CTA Banner background | "Partner for Growth." | *(see Shared Components → CTA Banner background)* |

---

## `/sustainability`

| Placement | Context | Prompt |
|---|---|---|
| Beyond Business background (reused, heading "Our Initiatives") | Section background. | *(see Home → Beyond Business — section background)* |
| Our Journey tab — Health & Safety | "Safety is the utmost priority at Sonatek Steels..." | Close-up of a worker properly fastening a hard hat chin strap before entering a warehouse floor, safety signage visible. — 16:9 |
| Our Journey tab — Sustainable Sourcing | "As a leading MOU dealer of SAIL, we prioritize sourcing steel from producers who follow eco-friendly manufacturing processes..." | Wide shot of a steel mill with visible emissions-control/scrubber infrastructure, greenery planted around the perimeter, clean industrial aesthetic. — 16:9 |
| Our Journey tab — Technical Excellence | "Our mission is to maintain customer satisfaction through constant improvement and modernization of our products..." | Engineer reviewing steel quality data on a tablet in front of an automated processing line, modern equipment. — 16:9 |
| Feature card — Development Impact | "Our Development Impact Catalogue explores how Sonatek Steels supports sustainable development through its global operations..." | Aerial view of an industrial zone with a mix of warehouses, green buffer zones, and access roads — conveys planned, responsible growth. — 4:3 |
| Feature card — Environmental Stewardship | "Protecting the planet is at the heart of our mission..." | Solar panel array installed on a warehouse rooftop, steel stock yard visible below. — 4:3 |
| Feature card — Community Empowerment | "We believe that our success is linked to the prosperity of the communities we serve..." | Local community members and Sonatek staff at an outdoor skills-training or job-fair event near a steel facility. — 4:3 |
| Key Documents — Safety Protocol 2024 | Document thumbnail. | Close-up of a hard hat and safety glasses resting on a printed safety protocol binder on a desk. — 3:4 |
| Key Documents — Health & Safety Policy | Document thumbnail. | *(reuse this page → Our Journey → Health & Safety)* |
| Key Documents — Environmental Stewardship | Document thumbnail. | *(reuse this page → Feature card → Environmental Stewardship)* |
| Key Documents — Supplier Code of Conduct | Document thumbnail. | *(reuse this page → Our Journey → Sustainable Sourcing)* |
| CTA section background | "Sustainability at Sonatek Steels." | *(see Home → Beyond Business — section background, or reuse Shared CTA Banner)* |
| Partner logos carousel | *(see Content Flags — do not AI-generate; use real partner/certification logos.)* | — |

---

## `/contact-us`

| Placement | Context | Prompt |
|---|---|---|
| Hero background | "Let's Talk." — "Our team of experts is always ready to assist you with your needs." | Friendly customer service / sales representative at a desk on a phone call, steel product samples and a laptop visible, warm approachable lighting. — 16:9 |

*(Location section is a Google Maps embed — no image needed.)*

---

## `/products` and `/products/[slug]`

| Placement | Context | Prompt |
|---|---|---|
| Fallback listing — "JSW Steel HR Coils" | Product fallback card. | Hot-rolled steel coil with visible mill branding area left blank, clean product-photography lighting on a neutral background. — 4:3 |
| Fallback listing — "Tata Astrum Hot Rolled" | Product fallback card. | Stack of hot-rolled steel sheets, top sheet catching a highlight to show surface finish, studio product shot. — 4:3 |
| Fallback listing — "AM/NS India CR Steel" | Product fallback card. | Cold-rolled steel sheet stack with a distinctly smooth, reflective finish, studio product shot. — 4:3 |
| Generic product-card fallback (no image in DB) | Used whenever any product lacks a photo. | Neutral studio product shot of a single flat steel sheet propped at a slight angle against a plain gray backdrop, soft even lighting — versatile placeholder usable for any product type. — 1:1 |
| Product detail CTA banner | "Need a Custom Quote or Bulk Pricing?" | Sales rep and customer shaking hands over a table with a steel sample and an order form. — 21:9 |

---

## `/blogs` and `/blogs/[slug]`

| Placement | Context | Prompt |
|---|---|---|
| Fallback cover — "Basically Steel: An Alloy of Iron and Carbon" | Blog card / detail cover. | *(see Home → Latest News fallback → Basically Steel)* |
| Fallback cover — "Temperature" (Hot Rolling) | Blog card / detail cover. | *(see Home → Latest News fallback → Hot Rolling)* |
| Fallback cover — "Smooth Surface" | Blog card / detail cover. | Macro shot of a highly reflective cold-rolled steel surface catching a linear light streak, emphasizing smoothness. — 4:3 |
| Fallback cover — "New Milestone" | Blog card / detail cover. | *(see Home → Latest News fallback → Sonatek Steels Marks New Milestone)* |
| Generic fallback (any blog with no cover image) | Default blog thumbnail. | *(see Home → Latest News API fallback)* |

---

## `/services/port-network` *(see Content Flag — copy needs rewriting first)*

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Our Global Port Network." | Wide shot of a busy container/bulk cargo port terminal, gantry cranes loading a vessel, trucks queued below. — 16:9 |
| Map section image | "How Our Network Works for You." | Stylized nighttime aerial photo of a port and highway network with light trails, suggesting a logistics map. — 16:9 |
| Featured port card | Currently literal DP World/Jebel Ali copy — needs new copy once rewritten. | Panoramic port terminal at sunset, stacked shipping/steel cargo, cranes silhouetted. — 4:3 |
| Article card 1 | "Transforming trade in [region]" (regional trade). | Cargo ship being loaded at a regional port terminal, workers coordinating on the dock. — 4:3 |
| Article card 2 | Regional trade article. | Steel plates being craned from a cargo vessel onto a dockside truck. — 4:3 |
| Article card 3 | Regional trade article. | Wide shot of a coastal logistics hub with warehouses and a loaded cargo ship in the background. — 4:3 |
| CTA Banner background | "Connect With Economic Zones." | *(see Shared Components → CTA Banner background)* |

---

## `/services/port-services` *(see Content Flag — copy needs rewriting first)*

| Placement | Context | Prompt |
|---|---|---|
| Hero image | "Ports & Terminals." | *(see port-network → Hero image)* |
| Map section image | Network map visual. | *(see port-network → Map section image)* |
| Cargo item — Container Services | Card. | Stacked shipping containers at a terminal yard, straddle carrier moving one container. — 4:3 |
| Cargo item — Automotive | Card. | *(see Shared Components → Industries We Serve → Automotive)* |
| Cargo item — Dry Bulk & Salt | Card. | Bulk cargo being loaded via conveyor into a ship's hold, dust/particulate visible in the air. — 4:3 |
| Cargo item — Refrigerated Cargo | Card. | Row of refrigerated shipping containers plugged into reefer power points at a terminal. — 4:3 |
| Cargo item — Chemicals & Liquids | Card. | Tanker trucks and storage tanks at a liquid bulk terminal, safety signage visible. — 4:3 |
| Cargo item — Project Cargo | Card. | Oversized/heavy-lift cargo (large steel component) being craned onto a ship's deck. — 4:3 |
| Carousel — South Asia / Middle East / Europe / Africa | Regional route cards. | Four separate wide shots, each of a distinct regional port skyline at golden hour — vary architecture/vessel types per region for visual distinction. — 4:3 each |
| Innovation — Digital Terminals | Card. | Port control room with staff monitoring live terminal operations on large digital screens. — 4:3 |
| Innovation — Smart Infrastructure | Card. | Automated straddle carrier or gantry crane operating without a visible driver, sensors/cameras visible on the equipment. — 4:3 |
| Insights — Future of Smart Ports | Card. | Futuristic-but-realistic port scene with autonomous vehicles moving containers, drone flying overhead for inspection. — 4:3 |
| Insights — Sustainable Port Operations | Card. | Electric terminal tractor charging at a dockside charging station, solar panels on nearby warehouse roof. — 4:3 |
| Ports With Purpose — Environmental Stewardship | Card. | *(see Sustainability → Feature card → Environmental Stewardship)* |
| Ports With Purpose — Community Development | Card. | *(see Sustainability → Feature card → Community Empowerment)* |
| CTA Banner background | "Explore Our Economic Zones." | *(see Shared Components → CTA Banner background)* |

---

## `/temp` *(orphaned page — recommend deleting rather than re-imaging; prompts below only if kept)*

| Placement | Context | Prompt |
|---|---|---|
| Hero background | "Health and Safety." | *(see About Us → Health & Safety section)* |
| Focus area — Education | Tab image. | Safety training session in a warehouse classroom setting, trainer pointing at a PPE diagram on a whiteboard. — 4:3 |
| Focus area — Contractor Management | Tab image. | Site supervisor checking a contractor's safety induction paperwork at a warehouse gate. — 4:3 |
| Focus area — Emergency Scenarios | Tab image. | Fire drill/emergency evacuation drill in progress at an industrial facility, staff walking calmly to an assembly point. — 4:3 |
| Focus area — Legislative Navigation | Tab image. | Compliance officer reviewing regulatory binders and a laptop with safety legislation documents. — 4:3 |
| Focus area — Change Management | Tab image. | Team meeting around a whiteboard with a process-improvement diagram in a warehouse office. — 4:3 |
| Focus area — Technology Solutions | Tab image. | Worker using a tablet-based digital safety checklist app while walking the warehouse floor. — 4:3 |
| CTA background | Closing CTA. | *(see Shared Components → CTA Banner background)* |

---

## Summary of Content Flags (recap)
1. Real leadership photos needed for `/leadership` — don't AI-generate fake executives.
2. `/services/port-network`, `/services/port-services`, and `/temp` still contain DP World template
   copy unrelated to Sonatek Steels — rewrite copy before/alongside re-imaging.
3. `/sustainability` partner-logo carousel uses real third-party logos (IBM, Microsoft, etc.) —
   replace with Sonatek's actual partners, not generated art.
4. Two Home "Beyond Business" cards pull images from unrelated external sites (a charity's own
   domain and a Webflow template CDN) — prompts to replace both are included above.
