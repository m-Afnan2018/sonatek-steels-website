'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { adminApi } from '@/lib/adminApi';
import styles from './blogs.module.css';

interface Tag  { _id: string; label: string; }
interface Blog {
    _id: string; title: string; slug: string; author: string;
    coverImage?: string; isPublished: boolean; isFeatured: boolean;
    publishedAt?: string; createdAt: string; tags: Tag[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const IconPlus   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconEdit   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconTrash  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const IconSearch = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

export default function BlogsPage() {
    const [blogs, setBlogs]           = useState<Blog[]>([]);
    const [loading, setLoading]       = useState(true);
    const [total, setTotal]           = useState(0);
    const [pages, setPages]           = useState(1);
    const [page, setPage]             = useState(1);
    const [search, setSearch]         = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page), limit: '15' });
            if (search) params.set('search', search);
            const res = await adminApi.get(`/blogs/admin/all?${params}`);
            setBlogs(res.data.blogs);
            setTotal(res.data.total);
            setPages(res.data.pages);
        } finally { setLoading(false); }
    }, [page, search]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleDelete(id: string, title: string) {
        if (!confirm(`Delete "${title}" permanently?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/blogs/${id}`); fetchData(); }
        finally { setDeletingId(null); }
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Blogs</h2>
                    <p className={styles.subtitle}>{total} post{total !== 1 ? 's' : ''} total</p>
                </div>
                <Link href="/admin/blogs/new" className={styles.addBtn}><IconPlus /> New Post</Link>
            </div>

            <div className={styles.filterRow}>
                <div className={styles.searchWrap}>
                    <IconSearch />
                    <input type="text" className={styles.searchInput} placeholder="Search by title, author, slug…"
                        value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                </div>
            </div>

            <div className={styles.tableWrap}>
                {loading ? <div className={styles.empty}>Loading…</div>
                : blogs.length === 0 ? (
                    <div className={styles.empty}>
                        No blog posts yet.{' '}
                        <Link href="/admin/blogs/new" className={styles.emptyLink}>Write your first post →</Link>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead><tr>
                            <th>Cover</th><th>Title</th><th>Author</th><th>Slug</th>
                            <th>Status</th><th>Date</th><th>Actions</th>
                        </tr></thead>
                        <tbody>
                            {blogs.map((b) => {
                                const img = b.coverImage
                                    ? (b.coverImage.startsWith('http') ? b.coverImage : `${API_URL}${b.coverImage}`)
                                    : null;
                                const date = new Date(b.publishedAt ?? b.createdAt)
                                    .toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
                                return (
                                    <tr key={b._id} className={styles.row}>
                                        <td>{img
                                            ? <img src={img} alt={b.title} className={styles.thumb} />
                                            : <div className={styles.thumbEmpty}>–</div>
                                        }</td>
                                        <td className={styles.titleCell}>{b.title}</td>
                                        <td>{b.author || '–'}</td>
                                        <td className={styles.slugCell}>{b.slug}</td>
                                        <td>
                                            <div className={styles.badges}>
                                                <span className={b.isPublished ? styles.badgePublished : styles.badgeDraft}>
                                                    {b.isPublished ? 'Published' : 'Draft'}
                                                </span>
                                                {b.isFeatured && <span className={styles.badgeFeatured}>Featured</span>}
                                            </div>
                                        </td>
                                        <td>{date}</td>
                                        <td>
                                            <div className={styles.rowActions}>
                                                <Link href={`/admin/blogs/${b._id}`} className={styles.editBtn}><IconEdit /> Edit</Link>
                                                <button className={styles.deleteBtn} disabled={deletingId === b._id}
                                                    onClick={() => handleDelete(b._id, b.title)}><IconTrash /></button>
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
