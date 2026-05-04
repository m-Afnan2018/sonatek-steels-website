import mongoose, { Document, Schema } from 'mongoose';

export interface IMedia extends Document {
    filename:     string;
    originalName: string;
    url:          string;
    mimetype:     string;
    size:         number;
}

const MediaSchema = new Schema<IMedia>(
    {
        filename:     { type: String, required: true },
        originalName: { type: String, required: true },
        url:          { type: String, required: true },
        mimetype:     { type: String, required: true },
        size:         { type: Number, required: true },
    },
    { timestamps: true },
);

export default mongoose.model<IMedia>('Media', MediaSchema);
