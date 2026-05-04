import mongoose, { Document, Schema } from 'mongoose';

interface SpecRow { label: string; value: string; }

export interface IProduct extends Document {
    name: string;
    slug: string;
    brand: string;
    image?: string;
    thicknesses: string[];
    widths: string[];
    overview: {
        description: string;
        bulletPoints: string[];
        brandName: string;
        sheetWeight: string;
        supplyCondition: string;
        packaging: string;
    };
    specs: {
        composition: SpecRow[];
        mechanical: SpecRow[];
        tolerance: SpecRow[];
    };
    whatsappNumber: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const SpecRowSchema = new Schema<SpecRow>(
    { label: { type: String, default: '' }, value: { type: String, default: '' } },
    { _id: false }
);

const ProductSchema = new Schema<IProduct>(
    {
        name:  { type: String, required: true, trim: true },
        slug:  { type: String, required: true, unique: true, lowercase: true, trim: true },
        brand: { type: String, trim: true, default: '' },
        image: { type: String },
        thicknesses: [{ type: String }],
        widths:      [{ type: String }],
        overview: {
            description:     { type: String, default: '' },
            bulletPoints:    [{ type: String }],
            brandName:       { type: String, default: '' },
            sheetWeight:     { type: String, default: '' },
            supplyCondition: { type: String, default: '' },
            packaging:       { type: String, default: '' },
        },
        specs: {
            composition: [SpecRowSchema],
            mechanical:  [SpecRowSchema],
            tolerance:   [SpecRowSchema],
        },
        whatsappNumber: { type: String, default: '' },
        isActive:       { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
