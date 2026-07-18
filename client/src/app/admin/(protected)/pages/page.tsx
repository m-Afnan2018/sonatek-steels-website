'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import styles from './pages.module.css';

interface PageRow {
    _id: string; title: string; slug: string; status: 'draft' | 'published';
    updatedAt: string; publishedAt?: string;
}

const IconPlus   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconEdit   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconCopy   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>;
const IconTrash  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const IconSearch = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

export default function PagesListPage() {
    const router = useRouter();
    const [rows, setRows]                 = useState<PageRow[]>([]);
    const [loading, setLoading]           = useState(true);
    const [total, setTotal]               = useState(0);
    const [pages, setPages]               = useState(1);
    const [page, setPage]                 = useState(1);
    const [search, setSearch]             = useState('');
    const [deletingId, setDeletingId]     = useState<string | null>(null);
    const [duplicatingId, setDuplicatingId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page), limit: '15' });
            if (search) params.set('search', search);
            const res = await adminApi.get(`/pages/admin/all?${params}`);
            setRows(res.data.pages);
            setTotal(res.data.total);
            setPages(res.data.pages_);
        } finally { setLoading(false); }
    }, [page, search]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleDelete(id: string, title: string) {
        if (!confirm(`Delete "${title}" permanently?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/pages/${id}`); fetchData(); }
        finally { setDeletingId(null); }
    }

    async function handleDuplicate(id: string) {
        setDuplicatingId(id);
        try {
            const res = await adminApi.post(`/pages/${id}/duplicate`);
            router.push(`/admin/pages/${res.data.page._id}`);
        } finally { setDuplicatingId(null); }
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Page Builder</h2>
                    <p className={styles.subtitle}>{total} page{total !== 1 ? 's' : ''} — drafts only, not yet connected to the public site</p>
                </div>
                <Link href="/admin/pages/new" className={styles.addBtn}><IconPlus /> New Page</Link>
            </div>

            <div className={styles.filterRow}>
                <div className={styles.searchWrap}>
                    <IconSearch />
                    <input type="text" className={styles.searchInput} placeholder="Search by title, slug…"
                        value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                </div>
            </div>

            <div className={styles.tableWrap}>
                {loading ? <div className={styles.empty}>Loading…</div>
                : rows.length === 0 ? (
                    <div className={styles.empty}>
                        No pages yet.{' '}
                        <Link href="/admin/pages/new" className={styles.emptyLink}>Build your first page →</Link>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead><tr>
                            <th>Title</th><th>Slug</th><th>Status</th><th>Updated</th><th>Actions</th>
                        </tr></thead>
                        <tbody>
                            {rows.map((p) => {
                                const date = new Date(p.updatedAt)
                                    .toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
                                return (
                                    <tr key={p._id} className={styles.row}>
                                        <td className={styles.titleCell}>{p.title}</td>
                                        <td className={styles.slugCell}>/{p.slug}</td>
                                        <td>
                                            <span className={p.status === 'published' ? styles.badgePublished : styles.badgeDraft}>
                                                {p.status === 'published' ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td>{date}</td>
                                        <td>
                                            <div className={styles.rowActions}>
                                                <Link href={`/admin/pages/${p._id}`} className={styles.editBtn}><IconEdit /> Edit</Link>
                                                <button className={styles.duplicateBtn} disabled={duplicatingId === p._id}
                                                    onClick={() => handleDuplicate(p._id)}>
                                                    <IconCopy /> {duplicatingId === p._id ? 'Duplicating…' : 'Duplicate'}
                                                </button>
                                                <button className={styles.deleteBtn} disabled={deletingId === p._id}
                                                    onClick={() => handleDelete(p._id, p.title)}><IconTrash /></button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            {pages > 1 && (
                <div className={styles.pagination}>
                    <button className={styles.pageBtn} disabled={page === 1} onClick={() => setPage(page - 1)}>← Prev</button>
                    <span className={styles.pageInfo}>Page {page} of {pages}</span>
                    <button className={styles.pageBtn} disabled={page === pages} onClick={() => setPage(page + 1)}>Next →</button>
                </div>
            )}
        </div>
    );
}
