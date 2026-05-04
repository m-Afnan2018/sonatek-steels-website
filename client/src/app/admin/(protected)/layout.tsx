'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import AdminShell from '@/components/admin/AdminShell';

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { admin, loading } = useAdminAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !admin) {
            router.replace('/admin/login');
        }
    }, [admin, loading, router]);

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#060c1a',
                color: 'rgba(255,255,255,0.32)',
                fontFamily: 'var(--font-admin-heading, "Barlow Condensed", sans-serif)',
                letterSpacing: '0.12em',
                fontSize: '13px',
                textTransform: 'uppercase',
            }}>
                Loading...
            </div>
        );
    }

    if (!admin) return null;

    return <AdminShell>{children}</AdminShell>;
}
