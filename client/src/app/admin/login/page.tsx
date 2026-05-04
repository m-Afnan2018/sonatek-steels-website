'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import styles from './login.module.css';

const IconShield = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);
const IconAlert = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

export default function AdminLoginPage() {
    const router = useRouter();
    const { login } = useAdminAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            router.replace('/admin/dashboard');
        } catch (err: unknown) {
            const msg =
                (err as { response?: { data?: { message?: string } } })
                    ?.response?.data?.message ?? 'Login failed. Please try again.';
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.bgLines} />
            <div className={styles.bgGlow} />
            <div className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.logoMark}><IconShield /></div>
                    <h1 className={styles.title}>Admin Portal</h1>
                    <p className={styles.sub}>Sonatek Steels — Secure Access</p>
                </div>
                {error && (
                    <div className={styles.errorBox}>
                        <IconAlert /> {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="admin@sonateksteels.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className={styles.btn} disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                <p className={styles.footer}>
                    Sonatek Steels &copy; {new Date().getFullYear()} · Admin v1.0
                </p>
            </div>
        </div>
    );
}
