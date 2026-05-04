import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    tags: mongoose.Types.ObjectId[];
    author: string;
    isFeatured: boolean;
    isPublished: boolean;
    publishedAt?: Date;
    readTime: number;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
    {
        title:       { type: String, required: true, trim: true },
        slug:        { type: String, required: true, unique: true, lowercase: true, trim: true },
        excerpt:     { type: String, default: '', trim: true },
        content:     { type: String, default: '' },
        coverImage:  { type: String },
        tags:        [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
        author:      { type: String, default: 'Sonatek Steels', trim: true },
        isFeatured:  { type: Boolean, default: false },
        isPublished: { type: Boolean, default: false },
        publishedAt: { type: Date },
        readTime:    { type: Number, default: 3, min: 1 },
    },
    { timestamps: true }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);
