import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { AdminProviders } from '@/components/admin/AdminProviders';
import './admin-theme.css';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-admin-body',
});

const barlowCondensed = Barlow_Condensed({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-admin-heading',
});

export const metadata: Metadata = {
    title: 'Admin — Sonatek Steels',
};

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const fontClassNames = `${barlow.variable} ${barlowCondensed.variable}`;
    return (
        <AdminProviders fontClassNames={fontClassNames}>
            {children}
        </AdminProviders>
    );
}
