'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { useAdminTheme } from '@/context/AdminThemeContext';
import styles from './AdminShell.module.css';

const IconGrid    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const IconInbox   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>;
const IconPackage = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IconFile    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const IconTag     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>;
const IconMsg     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
const IconImage   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
const IconUsers   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IconHome    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconLogOut  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IconSun     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const IconMoon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;

const NAV = [
    {
        section: 'MAIN',
        items: [{ href: '/admin/dashboard', label: 'Dashboard', icon: <IconGrid />, phase: 1 }],
    },
    {
        section: 'CONTENT',
        items: [
            { href: '/admin/enquiries',    label: 'Enquiries',    icon: <IconInbox />,   phase: 1 },
            { href: '/admin/products',     label: 'Products',     icon: <IconPackage />, phase: 1 },
            { href: '/admin/blogs',        label: 'Blogs',        icon: <IconFile />,    phase: 1 },
            { href: '/admin/tags',         label: 'Tags',         icon: <IconTag />,     phase: 1 },
            { href: '/admin/testimonials', label: 'Testimonials', icon: <IconMsg />,     phase: 1 },
            { href: '/admin/leadership',   label: 'Leadership',   icon: <IconUsers />,   phase: 1 },
            { href: '/admin/home-content', label: 'Home Content', icon: <IconHome />,    phase: 1 },
            { href: '/admin/media',        label: 'Media',        icon: <IconImage />,   phase: 1 },
        ],
    },
];

const PAGE_TITLES: Record<string, string> = {
    '/admin/dashboard':    'Dashboard',
    '/admin/enquiries':    'Enquiries',
    '/admin/products':     'Products',
    '/admin/blogs':        'Blogs',
    '/admin/tags':         'Tags',
    '/admin/testimonials': 'Testimonials',
    '/admin/leadership':   'Leadership',
    '/admin/home-content': 'Home Content',
    '/admin/media':        'Media Library',
};

export default function AdminShell({ children }: { children: ReactNode }) {
    const { admin, logout } = useAdminAuth();
    const { theme, toggleTheme } = useAdminTheme();
    const pathname = usePathname();
    const pageTitle = PAGE_TITLES[pathname] ?? 'Admin';

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <div className={styles.logoTitle}>Sonatek Steels</div>
                    <div className={styles.logoSub}>Admin Portal</div>
                </div>

                <nav className={styles.nav}>
                    {NAV.map((group) => (
                        <div key={group.section}>
                            <div className={styles.sectionLabel}>{group.section}</div>
                            {group.items.map((item) =>
                                item.phase === 1 ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
                                    >
                                        {item.icon} {item.label}
                                    </Link>
                                ) : (
                                    <div key={item.href} className={`${styles.navItem} ${styles.disabled}`}>
                                        {item.icon} {item.label}
                                        <span className={styles.badge}>Ph {item.phase}</span>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </nav>

                <div className={styles.bottom}>
                    <div className={styles.user}>
                        <div className={styles.avatar}>{admin?.name?.charAt(0).toUpperCase()}</div>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>{admin?.name}</div>
                            <div className={styles.userRole}>{admin?.role}</div>
                        </div>
                    </div>
                    <button className={styles.logoutBtn} onClick={logout}>
                        <IconLogOut /> Sign out
                    </button>
                </div>
            </aside>

            <div className={styles.main}>
                <header className={styles.topbar}>
                    <div className={styles.topbarLeft}>
                        <span className={styles.topbarTitle}>{pageTitle}</span>
                        <div className={styles.topbarDivider} />
                        <span className={styles.topbarBreadcrumb}>Sonatek Steels / {pageTitle}</span>
                    </div>
                    <button className={styles.themeToggle} onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                        {theme === 'dark' ? <IconSun /> : <IconMoon />}
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                </header>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
