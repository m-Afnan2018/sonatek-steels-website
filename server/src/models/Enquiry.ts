import mongoose, { Document, Schema } from 'mongoose';

export interface IEnquiry extends Document {
    firstName: string;
    lastName: string;
    companyName: string;
    companyWebsite?: string;
    businessEmail: string;
    mobileNumber: string;
    country: string;
    enquiryType: 'Sales' | 'Support' | 'Partnership' | 'Other';
    message: string;
    status: 'new' | 'read' | 'replied' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
    {
        firstName:      { type: String, required: true, trim: true },
        lastName:       { type: String, required: true, trim: true },
        companyName:    { type: String, required: true, trim: true },
        companyWebsite: { type: String, trim: true },
        businessEmail:  { type: String, required: true, lowercase: true, trim: true },
        mobileNumber:   { type: String, required: true, trim: true },
        country:        { type: String, required: true, trim: true },
        enquiryType: {
            type: String,
            enum: ['Sales', 'Support', 'Partnership', 'Other'],
            required: true,
        },
        message: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ['new', 'read', 'replied', 'closed'],
            default: 'new',
        },
    },
    { timestamps: true }
);

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
