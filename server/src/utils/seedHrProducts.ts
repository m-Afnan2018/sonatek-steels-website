import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { connectDB } from '../config/db';
import Product from '../models/Product';

const THICKNESSES = ['1.60', '2.00', '2.50', '3.00', '4.00', '5.00', '6.00', '8.00', '10.00', '12.00'];
const WIDTHS = ['1000', '1250', '1500', '1800', '2000'];

const COMPOSITION = [
  { label: 'Carbon (C)', value: '0.23% max' },
  { label: 'Manganese (Mn)', value: '1.50% max' },
  { label: 'Sulphur (S)', value: '0.045% max' },
  { label: 'Phosphorus (P)', value: '0.045% max' },
];

const MECHANICAL = [
  { label: 'Yield Strength', value: '250 MPa min (Grade E250)' },
  { label: 'Tensile Strength', value: '410 - 560 MPa' },
  { label: 'Elongation (L0 = 5.65√So)', value: '23% min' },
];

const TOLERANCE = [
  { label: 'Thickness Tolerance', value: '± 0.18mm to ± 0.40mm (as per IS 1852)' },
  { label: 'Width Tolerance', value: '+10mm / -0mm' },
  { label: 'Camber', value: '≤ 10mm per 5000mm length' },
];

const products = [
  {
    name: 'Hot Rolled (HR) Coils',
    slug: 'hr-coils',
    brand: 'SAIL',
    thicknesses: THICKNESSES,
    widths: WIDTHS,
    overview: {
      description:
        'Sonatek Steels supplies Hot Rolled (HR) Coils sourced directly from SAIL under our MOU dealership. HR Coils are rolled at high temperature for strong structural integrity and are used in construction, fabrication, machinery bases, and general engineering applications. Available in Grade E250 (IS 2062) as standard, with as-rolled or pickled and oiled (P&O) supply on request.',
      bulletPoints: [
        'High structural strength for demanding load-bearing applications',
        'Grade E250 as per IS 2062, with higher grades available on request',
        'As-rolled or Pickled & Oiled (P&O) supply condition',
        'Sourced directly from SAIL with complete material traceability',
      ],
      brandName: 'SAIL',
      sheetWeight: 'Calculated on thickness × width × density (7.85 g/cm³); indicative coil weight 10-18 MT',
      supplyCondition: 'Hot Rolled, As-Rolled / Pickled & Oiled (P&O) — Grade E250 as per IS 2062',
      packaging: 'Coils are edge-protected, strapped with steel straps, and mounted on wooden coil skids for safe transit.',
    },
    specs: { composition: COMPOSITION, mechanical: MECHANICAL, tolerance: TOLERANCE },
    whatsappNumber: '919015416940',
    isActive: true,
  },
  {
    name: 'Hot Rolled (HR) Sheets',
    slug: 'hr-sheets',
    brand: 'SAIL',
    thicknesses: THICKNESSES,
    widths: WIDTHS,
    overview: {
      description:
        'Sonatek Steels offers Hot Rolled (HR) Sheets, cut-to-length from certified SAIL Hot Rolled coils to exact customer specifications. HR Sheets are widely used for structural fabrication, machinery bases, industrial sheds, and general construction work where strength and cost-efficiency matter most.',
      bulletPoints: [
        'Cut-to-length precision for fabrication and construction use',
        'Grade E250 as per IS 2062, with higher grades available on request',
        'As-rolled or Pickled & Oiled (P&O) supply condition',
        'Bundled and packed to prevent transit damage',
      ],
      brandName: 'SAIL',
      sheetWeight: 'Calculated on thickness × width × length × density (7.85 g/cm³); provided per sheet on request',
      supplyCondition: 'Hot Rolled, As-Rolled / Pickled & Oiled (P&O) — Grade E250 as per IS 2062',
      packaging: 'Sheets are stacked and bundled with edge protectors, strapped securely, and palleted for safe handling.',
    },
    specs: { composition: COMPOSITION, mechanical: MECHANICAL, tolerance: TOLERANCE },
    whatsappNumber: '919015416940',
    isActive: true,
  },
];

async function seedHrProducts(): Promise<void> {
  await connectDB();

  for (const p of products) {
    const result = await Product.findOneAndUpdate(
      { slug: p.slug },
      { $set: p },
      { upsert: true, new: true }
    );
    console.log(`Upserted: ${result.name} (${result.slug})`);
  }

  console.log('HR Coils/Sheets product content seeded successfully.');
  process.exit(0);
}

seedHrProducts().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
