'use client';

import { ReactNode } from 'react';
import { AdminAuthProvider } from '@/context/AdminAuthContext';
import { AdminThemeProvider, useAdminTheme } from '@/context/AdminThemeContext';

function ThemedRoot({
    children,
    fontClassNames,
}: {
    children: ReactNode;
    fontClassNames: string;
}) {
    const { theme } = useAdminTheme();
    return (
        <div
            data-admin-theme={theme}
            className={fontClassNames}
            suppressHydrationWarning
        >
            {children}
        </div>
    );
}

export function AdminProviders({
    children,
    fontClassNames,
}: {
    children: ReactNode;
    fontClassNames: string;
}) {
    return (
        <AdminThemeProvider>
            <AdminAuthProvider>
                <ThemedRoot fontClassNames={fontClassNames}>
                    {children}
                </ThemedRoot>
            </AdminAuthProvider>
        </AdminThemeProvider>
    );
}
