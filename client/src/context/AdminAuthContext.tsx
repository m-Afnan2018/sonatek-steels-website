'use client';

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';
import { adminApi } from '@/lib/adminApi';

interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AdminAuthContextValue {
    admin: AdminUser | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);
const TOKEN_KEY = 'sonatek_admin_token';

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<AdminUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem(TOKEN_KEY);
        if (!stored) { setLoading(false); return; }

        adminApi.defaults.headers.common['Authorization'] = `Bearer ${stored}`;
        adminApi
            .get('/auth/me')
            .then((res) => setAdmin(res.data.admin))
            .catch(() => {
                localStorage.removeItem(TOKEN_KEY);
                delete adminApi.defaults.headers.common['Authorization'];
            })
            .finally(() => setLoading(false));
    }, []);

    async function login(email: string, password: string): Promise<void> {
        const res = await adminApi.post('/auth/login', { email, password });
        const { token, admin: a } = res.data;
        localStorage.setItem(TOKEN_KEY, token);
        adminApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAdmin(a);
    }

    function logout(): void {
        localStorage.removeItem(TOKEN_KEY);
        delete adminApi.defaults.headers.common['Authorization'];
        setAdmin(null);
        window.location.href = '/admin/login';
    }

    return (
        <AdminAuthContext.Provider value={{ admin, loading, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth(): AdminAuthContextValue {
    const ctx = useContext(AdminAuthContext);
    if (!ctx) throw new Error('useAdminAuth must be used inside AdminAuthProvider');
    return ctx;
}
