import mongoose, { Document, Schema } from 'mongoose';

export interface IBlockInstance {
    blockType: string;
    order: number;
    anchorId?: string;
    data: Record<string, unknown>;
}

export interface IPage extends Document {
    slug: string;
    title: string;
    status: 'draft' | 'published';
    seo: {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: string;
    };
    blocks: IBlockInstance[];
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BlockInstanceSchema = new Schema<IBlockInstance>(
    {
        blockType: { type: String, required: true },
        order:     { type: Number, required: true, default: 0 },
        anchorId:  { type: String },
        data:      { type: Schema.Types.Mixed, default: {} },
    },
    { _id: false },
);

const PageSchema = new Schema<IPage>(
    {
        slug:   { type: String, required: true, unique: true, lowercase: true, trim: true },
        title:  { type: String, required: true, trim: true },
        status: { type: String, enum: ['draft', 'published'], default: 'draft' },
        seo: {
            metaTitle:       { type: String, default: '' },
            metaDescription: { type: String, default: '' },
            ogImage:         { type: String, default: '' },
        },
        blocks:      [BlockInstanceSchema],
        publishedAt: { type: Date },
    },
    { timestamps: true },
);

export default mongoose.model<IPage>('Page', PageSchema);
