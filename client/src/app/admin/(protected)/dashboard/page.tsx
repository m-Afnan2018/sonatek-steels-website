'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { adminApi } from '@/lib/adminApi';
import styles from './dashboard.module.css';

const IcInbox   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>;
const IcPackage = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const IcFile    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const IcUsers   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
const IcMsg     = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
const IcImage   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
const IcPlus    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;

interface Stats {
    enquiries: number; unread: number;
    products: number; blogs: number;
    leaders: number; testimonials: number; media: number;
}

export default function DashboardPage() {
    const { admin } = useAdminAuth();
    const [stats, setStats]         = useState<Stats | null>(null);
    const [apiStatus, setApiStatus] = useState<'checking' | 'ok' | 'error'>('checking');

    useEffect(() => {
        adminApi.get('/health')
            .then(() => setApiStatus('ok'))
            .catch(() => setApiStatus('error'));

        Promise.all([
            adminApi.get('/enquiries/stats').catch(() => ({ data: { total: 0, unread: 0 } })),
            adminApi.get('/products/admin/all?limit=1').catch(() => ({ data: { total: 0 } })),
            adminApi.get('/blogs/admin/all?limit=1').catch(() => ({ data: { total: 0 } })),
            adminApi.get('/leadership/admin/all?limit=1').catch(() => ({ data: { total: 0 } })),
            adminApi.get('/testimonials/admin/all?limit=1').catch(() => ({ data: { total: 0 } })),
            adminApi.get('/media').catch(() => ({ data: { media: [] } })),
        ]).then(([enq, prod, blog, lead, test, med]) => {
            setStats({
                enquiries:    enq.data.total  ?? 0,
                unread:       enq.data.unread ?? 0,
                products:     prod.data.total ?? 0,
                blogs:        blog.data.total ?? 0,
                leaders:      lead.data.total ?? 0,
                testimonials: test.data.total ?? 0,
                media:        (med.data.media ?? []).length,
            });
        });
    }, []);

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

    const statCards = [
        { label: 'Enquiries',    value: stats?.enquiries,    sub: stats?.unread ? `${stats.unread} unread` : null, href: '/admin/enquiries',    icon: <IcInbox /> },
        { label: 'Products',     value: stats?.products,     sub: null, href: '/admin/products',     icon: <IcPackage /> },
        { label: 'Blog Posts',   value: stats?.blogs,        sub: null, href: '/admin/blogs',        icon: <IcFile /> },
        { label: 'Team Members', value: stats?.leaders,      sub: null, href: '/admin/leadership',   icon: <IcUsers /> },
        { label: 'Testimonials', value: stats?.testimonials, sub: null, href: '/admin/testimonials', icon: <IcMsg /> },
        { label: 'Media Files',  value: stats?.media,        sub: null, href: '/admin/media',        icon: <IcImage /> },
    ];

    const quickActions = [
        { label: 'New Blog Post',   href: '/admin/blogs/new'        },
        { label: 'Add Product',     href: '/admin/products/new'     },
        { label: 'Add Team Member', href: '/admin/leadership/new'   },
        { label: 'Add Testimonial', href: '/admin/testimonials/new' },
        { label: 'Upload Media',    href: '/admin/media'            },
        { label: 'View Enquiries',  href: '/admin/enquiries'        },
    ];

    return (
        <div className={styles.page}>
            {/* Banner */}
            <div className={styles.banner}>
                <p className={styles.bannerLabel}>Admin Dashboard</p>
                <h1 className={styles.bannerTitle}>{greeting}, {admin?.name?.split(' ')[0]}.</h1>
                <p className={styles.bannerSub}>Manage your website content from this panel.</p>
            </div>

            {/* Live stats — 6 cards, 3 columns */}
            <div className={styles.statGrid}>
                {statCards.map((s) => (
                    <Link key={s.label} href={s.href} className={styles.statLink}>
                        <div className={styles.statTop}>
                            <span className={styles.statValue}>
                                {stats === null ? '—' : (s.value ?? 0)}
                            </span>
                            <span className={styles.statIcon}>{s.icon}</span>
                        </div>
                        <span className={styles.statLabel}>{s.label}</span>
                        {s.sub && <span className={styles.statSub}>{s.sub}</span>}
                    </Link>
                ))}
            </div>

            {/* Quick actions + system status */}
            <div className={styles.bottomGrid}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Quick Actions</h3>
                    <div className={styles.actionGrid}>
                        {quickActions.map((a) => (
                            <Link key={a.label} href={a.href} className={styles.actionLink}>
                                <span className={styles.actionIcon}><IcPlus /></span>
                                {a.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>System Status</h3>
                    <div className={styles.statusList}>
                        <div className={styles.statusRow}>
                            <span>API Server</span>
                            <span className={`${styles.badge} ${
                                apiStatus === 'ok'    ? styles.badgeSuccess :
                                apiStatus === 'error' ? styles.badgeError   : styles.badgeWarn
                            }`}>
                                {apiStatus === 'ok' ? 'Online' : apiStatus === 'error' ? 'Offline' : 'Checking…'}
                            </span>
                        </div>
                        <div className={styles.statusRow}>
                            <span>MongoDB</span>
                            <span className={`${styles.badge} ${apiStatus === 'ok' ? styles.badgeSuccess : styles.badgeWarn}`}>
                                {apiStatus === 'ok' ? 'Connected' : 'Unknown'}
                            </span>
                        </div>
                        <div className={styles.statusRow}>
                            <span>Logged in as</span>
                            <span className={styles.emailText}>{admin?.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
