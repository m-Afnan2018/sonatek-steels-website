import mongoose, { Document, Schema } from 'mongoose';

export interface ILeader extends Document {
    name:     string;
    title:    string;
    category: string;
    image?:   string;
    order:    number;
    isActive: boolean;
}

const LeaderSchema = new Schema<ILeader>(
    {
        name:     { type: String, required: true, trim: true },
        title:    { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true, default: 'Executive Team' },
        image:    { type: String },
        order:    { type: Number, default: 0 },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true },
);

export default mongoose.model<ILeader>('Leader', LeaderSchema);
