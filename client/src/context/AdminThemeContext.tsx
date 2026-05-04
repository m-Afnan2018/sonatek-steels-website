'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AdminTheme = 'dark' | 'light';

interface ThemeContextValue {
    theme: AdminTheme;
    toggleTheme: () => void;
}

const AdminThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = 'sonatek_admin_theme';

export function AdminThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<AdminTheme>('dark');

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as AdminTheme | null;
        if (saved === 'dark' || saved === 'light') setTheme(saved);
    }, []);

    function toggleTheme() {
        setTheme((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            localStorage.setItem(STORAGE_KEY, next);
            return next;
        });
    }

    return (
        <AdminThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AdminThemeContext.Provider>
    );
}

export function useAdminTheme(): ThemeContextValue {
    const ctx = useContext(AdminThemeContext);
    if (!ctx) throw new Error('useAdminTheme must be used inside AdminThemeProvider');
    return ctx;
}
