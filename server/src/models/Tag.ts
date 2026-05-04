import mongoose, { Document, Schema } from 'mongoose';

export interface ITag extends Document {
    label: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

const TagSchema = new Schema<ITag>(
    {
        label: { type: String, required: true, trim: true, unique: true },
        slug:  { type: String, required: true, trim: true, lowercase: true, unique: true },
    },
    { timestamps: true }
);

export default mongoose.model<ITag>('Tag', TagSchema);
