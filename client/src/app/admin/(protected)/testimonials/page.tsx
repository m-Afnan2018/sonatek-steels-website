'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { adminApi } from '@/lib/adminApi';
import styles from '../blogs/blogs.module.css';

interface Testimonial {
    _id: string; name: string; designation: string;
    rating: number; text: string; isActive: boolean; order: number;
}

const IconPlus  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconEdit  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconTrash = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

function Stars({ n }: { n: number }) {
    return <span style={{ color: '#f5a623', letterSpacing: 1 }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>;
}

export default function TestimonialsPage() {
    const [items, setItems]           = useState<Testimonial[]>([]);
    const [loading, setLoading]       = useState(true);
    const [total, setTotal]           = useState(0);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await adminApi.get('/testimonials/admin/all?limit=50');
            setItems(res.data.testimonials);
            setTotal(res.data.total);
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleDelete(id: string, name: string) {
        if (!confirm(`Delete testimonial from "${name}"?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/testimonials/${id}`); fetchData(); }
        finally { setDeletingId(null); }
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Testimonials</h2>
                    <p className={styles.subtitle}>{total} testimonial{total !== 1 ? 's' : ''} total</p>
                </div>
                <Link href="/admin/testimonials/new" className={styles.addBtn}><IconPlus /> Add Testimonial</Link>
            </div>

            <div className={styles.tableWrap}>
                {loading ? <div className={styles.empty}>Loading…</div>
                : items.length === 0 ? (
                    <div className={styles.empty}>
                        No testimonials yet.{' '}
                        <Link href="/admin/testimonials/new" className={styles.emptyLink}>Add your first →</Link>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead><tr>
                            <th>Name</th><th>Designation</th><th>Rating</th>
                            <th>Quote</th><th>Order</th><th>Status</th><th>Actions</th>
                        </tr></thead>
                        <tbody>
                            {items.map((t) => (
                                <tr key={t._id} className={styles.row}>
                                    <td style={{ fontWeight: 600, color: 'var(--a-text)' }}>{t.name}</td>
                                    <td>{t.designation}</td>
                                    <td><Stars n={t.rating} /></td>
                                    <td style={{ maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.text}</td>
                                    <td>{t.order}</td>
                                    <td>
                                        <span className={t.isActive ? styles.badgePublished : styles.badgeDraft}>
                                            {t.isActive ? 'Active' : 'Hidden'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.rowActions}>
                                            <Link href={`/admin/testimonials/${t._id}`} className={styles.editBtn}><IconEdit /> Edit</Link>
                                            <button className={styles.deleteBtn} disabled={deletingId === t._id}
                                                onClick={() => handleDelete(t._id, t.name)}><IconTrash /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
