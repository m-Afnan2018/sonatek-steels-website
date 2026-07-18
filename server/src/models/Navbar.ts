import mongoose, { Document, Schema } from 'mongoose';

export interface INavbar extends Document {
    logoUrl: string;
    phones: Record<string, unknown>[];
    mapUrl: string;
    navItems: Record<string, unknown>[];
}

const DEFAULT_PHONES = [
    { name: 'Vijay Jain', role: 'Owner', phone: '+91 84470 83022', tel: '918447083022' },
    { name: 'Rajesh', role: 'Sales (Delhi)', phone: '+91 90154 16940', tel: '919015416940' },
];

const NavbarSchema = new Schema<INavbar>(
    {
        logoUrl: { type: String, default: '' },
        phones:  { type: Schema.Types.Mixed, default: DEFAULT_PHONES },
        mapUrl:  { type: String, default: 'https://www.google.com/maps/search/?api=1&query=Sonatek+Steels+X-7+Loha+Mandi+Naraina+New+Delhi+110028' },
        navItems: { type: Schema.Types.Mixed, default: [] },
    },
    { timestamps: true },
);

export default mongoose.model<INavbar>('Navbar', NavbarSchema);
