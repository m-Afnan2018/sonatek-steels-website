import mongoose, { Document, Schema } from 'mongoose';

interface StatItem { value: number; suffix: string; label: string; }

export interface IHomeContent extends Document {
    hero: {
        title:       string;
        description: string;
        paragraph:   string;
        btnText:     string;
        btnLink:     string;
        videoUrl:    string;
        posterUrl:   string;
    };
    impact: {
        label:    string;
        headline: string;
        sub:      string;
        stats:    StatItem[];
    };
    cta: {
        headline: string;
        sub:      string;
        btnText:  string;
        btnLink:  string;
        bgImage:  string;
    };
}

const StatItemSchema = new Schema<StatItem>(
    { value: Number, suffix: String, label: String },
    { _id: false },
);

const HomeContentSchema = new Schema<IHomeContent>(
    {
        hero: {
            title:       { type: String, default: 'Your Partner in' },
            description: { type: String, default: 'Flat Steel' },
            paragraph:   { type: String, default: 'Established in 2014, Sonatek Steels Pvt. Ltd. are the leading distributors of flat steel products in Northern India.' },
            btnText:     { type: String, default: 'Explore Our Products' },
            btnLink:     { type: String, default: '/product' },
            videoUrl:    { type: String, default: 'https://cdn.pixabay.com/video/2021/02/05/64212-509543056_large.mp4' },
            posterUrl:   { type: String, default: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80' },
        },
        impact: {
            label:    { type: String, default: 'Make an Impact' },
            headline: { type: String, default: 'Engineering Excellence\nin Steel Distribution' },
            sub:      { type: String, default: "Sonatek Steels plays a vital role in Northern India's industrial growth by providing high-quality flat steel products to OEMs and corporate clients." },
            stats: {
                type: [StatItemSchema],
                default: [
                    { value: 11,  suffix: '+',  label: 'Years of excellence' },
                    { value: 500, suffix: 'K+', label: 'Tons of steel delivered' },
                    { value: 120, suffix: '+',  label: 'Industries helped' },
                    { value: 95,  suffix: '%',  label: 'Repeat customers' },
                ],
            },
        },
        cta: {
            headline: { type: String, default: 'Talk to a Steel\nExpert' },
            sub:      { type: String, default: 'Get solutions that fit your industrial needs. Talk to a flat steel product expert today.' },
            btnText:  { type: String, default: 'Contact Us' },
            btnLink:  { type: String, default: '/contact-us' },
            bgImage:  { type: String, default: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85' },
        },
    },
    { timestamps: true },
);

export default mongoose.model<IHomeContent>('HomeContent', HomeContentSchema);
