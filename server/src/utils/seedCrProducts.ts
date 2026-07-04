import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from '../config/db';
import Product from '../models/Product';

const THICKNESSES = ['0.30', '0.40', '0.50', '0.63', '0.80', '1.00', '1.25', '1.60', '2.00', '2.50'];
const WIDTHS = ['700', '800', '900', '1000', '1100', '1250'];

const COMPOSITION = [
  { label: 'Carbon (C)', value: '0.12% max' },
  { label: 'Manganese (Mn)', value: '0.50% max' },
  { label: 'Sulphur (S)', value: '0.035% max' },
  { label: 'Phosphorus (P)', value: '0.035% max' },
  { label: 'Aluminium (Al)', value: '0.02% min (for DD/EDD grades)' },
];

const MECHANICAL = [
  { label: 'Yield Strength', value: '140 - 240 MPa' },
  { label: 'Tensile Strength', value: '270 - 410 MPa' },
  { label: 'Elongation (L0 = 80mm)', value: '34% min' },
  { label: 'Hardness', value: '55 - 85 HRB' },
];

const TOLERANCE = [
  { label: 'Thickness Tolerance', value: '± 0.02mm to ± 0.06mm (as per IS 513 / thickness class)' },
  { label: 'Width Tolerance', value: '+5mm / -0mm' },
  { label: 'Camber', value: '≤ 5mm per 5000mm length' },
  { label: 'Flatness (Coil Set)', value: 'As per IS 513 Class A / B' },
];

const products = [
  {
    name: 'Cold Rolled (CR) Coils',
    slug: 'cr-coils',
    brand: 'SAIL',
    thicknesses: THICKNESSES,
    widths: WIDTHS,
    overview: {
      description:
        'Sonatek Steels supplies Cold Rolled (CR) Coils sourced directly from SAIL under our MOU dealership. CR Coils are produced by cold-reducing pickled Hot Rolled coils to precise thicknesses, giving them a smooth, bright surface finish, tight dimensional tolerances, and excellent formability. They are widely used in automotive body panels, home appliances, furniture, cold-formed sections, and general engineering applications where a superior finish and consistent gauge are required. Available in Full Hard, Skin Passed, and Annealed conditions across commercial (D), drawing (DD), and extra-deep-drawing (EDD) grades as per IS 513.',
      bulletPoints: [
        'Smooth, bright, and rust-free surface finish ideal for painting and coating',
        'Tight thickness and width tolerances for precision fabrication',
        'Available in Full Hard, Skin Passed, and Annealed & Skin Passed conditions',
        'Grades D, DD, and EDD suited for commercial, drawing, and deep-drawing applications',
        'Sourced directly from SAIL with complete material traceability',
        'Custom slitting and shearing available to convert coils into ready-to-use sheets or blanks',
      ],
      brandName: 'SAIL',
      sheetWeight: 'Calculated on thickness × width × density (7.85 g/cm³); indicative coil weight 8-14 MT',
      supplyCondition: 'Full Hard / Skin Passed / Annealed & Skin Passed (Grades D, DD, EDD as per IS 513)',
      packaging: 'Coils are edge-protected, strapped with steel or PP straps, wrapped in waterproof VCI paper, and mounted on wooden coil skids or pallets to prevent corrosion and edge damage during transit.',
    },
    specs: { composition: COMPOSITION, mechanical: MECHANICAL, tolerance: TOLERANCE },
    whatsappNumber: '919891998846',
    isActive: true,
  },
  {
    name: 'Cold Rolled (CR) Sheets',
    slug: 'cr-sheets',
    brand: 'SAIL',
    thicknesses: THICKNESSES,
    widths: WIDTHS,
    overview: {
      description:
        'Sonatek Steels offers Cold Rolled (CR) Sheets, cut-to-length from certified SAIL Cold Rolled Coils to exact customer specifications. CR Sheets deliver a clean, uniform surface, tight flatness, and dimensional accuracy, making them the preferred choice for appliance panels, enclosures, furniture, false ceiling systems, and precision fabrication work. Our cut-to-length service allows sheets to be supplied in the exact thickness, width, and length required, reducing on-site processing and material wastage for fabricators and OEMs.',
      bulletPoints: [
        'Cut-to-length precision with tight flatness and squareness',
        'Clean, paint-ready surface finish free from scale and rust',
        'Available in Full Hard, Skin Passed, and Annealed & Skin Passed conditions',
        'Grades D, DD, and EDD for commercial, drawing, and deep-drawing needs',
        'Ideal for appliances, enclosures, furniture, and cold-formed components',
        'Bundled and packed to prevent transit damage and edge denting',
      ],
      brandName: 'SAIL',
      sheetWeight: 'Calculated on thickness × width × length × density (7.85 g/cm³); provided per sheet on request',
      supplyCondition: 'Full Hard / Skin Passed / Annealed & Skin Passed (Grades D, DD, EDD as per IS 513)',
      packaging: 'Sheets are stacked and bundled with edge protectors, strapped securely, and wrapped in waterproof packaging on pallets for safe handling and damage-free delivery.',
    },
    specs: { composition: COMPOSITION, mechanical: MECHANICAL, tolerance: TOLERANCE },
    whatsappNumber: '919891998846',
    isActive: true,
  },
];

async function seedCrProducts(): Promise<void> {
  await connectDB();

  for (const p of products) {
    const result = await Product.findOneAndUpdate(
      { slug: p.slug },
      { $set: p },
      { upsert: true, new: true }
    );
    console.log(`Upserted: ${result.name} (${result.slug})`);
  }

  console.log('CR Coils/Sheets product content seeded successfully.');
  process.exit(0);
}

seedCrProducts().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
