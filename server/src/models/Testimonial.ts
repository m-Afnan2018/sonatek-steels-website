import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
    name:        string;
    designation: string;
    rating:      number;
    text:        string;
    isActive:    boolean;
    order:       number;
}

const TestimonialSchema = new Schema<ITestimonial>(
    {
        name:        { type: String, required: true, trim: true },
        designation: { type: String, required: true, trim: true },
        rating:      { type: Number, required: true, min: 1, max: 5, default: 5 },
        text:        { type: String, required: true, trim: true },
        isActive:    { type: Boolean, default: true },
        order:       { type: Number, default: 0 },
    },
    { timestamps: true },
);

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
