'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { adminApi } from '@/lib/adminApi';
import styles from '../blogs/blogs.module.css';

interface Leader {
    _id: string; name: string; title: string; category: string;
    image?: string; order: number; isActive: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const IconPlus  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconEdit  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconTrash = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

export default function LeadershipPage() {
    const [items, setItems]           = useState<Leader[]>([]);
    const [loading, setLoading]       = useState(true);
    const [total, setTotal]           = useState(0);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await adminApi.get('/leadership/admin/all?limit=50');
            setItems(res.data.leaders);
            setTotal(res.data.total);
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleDelete(id: string, name: string) {
        if (!confirm(`Delete "${name}"?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/leadership/${id}`); fetchData(); }
        finally { setDeletingId(null); }
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Leadership</h2>
                    <p className={styles.subtitle}>{total} member{total !== 1 ? 's' : ''} total</p>
                </div>
                <Link href="/admin/leadership/new" className={styles.addBtn}><IconPlus /> Add Member</Link>
            </div>

            <div className={styles.tableWrap}>
                {loading ? <div className={styles.empty}>Loading…</div>
                : items.length === 0 ? (
                    <div className={styles.empty}>
                        No team members yet.{' '}
                        <Link href="/admin/leadership/new" className={styles.emptyLink}>Add your first →</Link>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead><tr>
                            <th>Photo</th><th>Name</th><th>Title</th><th>Category</th>
                            <th>Order</th><th>Status</th><th>Actions</th>
                        </tr></thead>
                        <tbody>
                            {items.map((l) => {
                                const img = l.image
                                    ? (l.image.startsWith('http') ? l.image : `${API_URL}${l.image}`)
                                    : null;
                                return (
                                    <tr key={l._id} className={styles.row}>
                                        <td>{img
                                            ? <img src={img} alt={l.name} className={styles.thumb} />
                                            : <div className={styles.thumbEmpty}>–</div>
                                        }</td>
                                        <td style={{ fontWeight: 600, color: 'var(--a-text)' }}>{l.name}</td>
                                        <td>{l.title}</td>
                                        <td>{l.category}</td>
                                        <td>{l.order}</td>
                                        <td>
                                            <span className={l.isActive ? styles.badgePublished : styles.badgeDraft}>
                                                {l.isActive ? 'Active' : 'Hidden'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.rowActions}>
                                                <Link href={`/admin/leadership/${l._id}`} className={styles.editBtn}><IconEdit /> Edit</Link>
                                                <button className={styles.deleteBtn} disabled={deletingId === l._id}
                                                    onClick={() => handleDelete(l._id, l.name)}><IconTrash /></button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
