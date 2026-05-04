'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { adminApi } from '@/lib/adminApi';
import styles from './products.module.css';

interface Product {
    _id: string; name: string; slug: string; brand: string;
    image?: string; isActive: boolean; createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const IconPlus   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconEdit   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconTrash  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const IconSearch = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading]   = useState(true);
    const [total, setTotal]       = useState(0);
    const [pages, setPages]       = useState(1);
    const [page, setPage]         = useState(1);
    const [search, setSearch]     = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page), limit: '15' });
            if (search) params.set('search', search);
            const res = await adminApi.get(`/products/admin/all?${params}`);
            setProducts(res.data.products);
            setTotal(res.data.total);
            setPages(res.data.pages);
        } finally { setLoading(false); }
    }, [page, search]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleDelete(id: string, name: string) {
        if (!confirm(`Delete "${name}" permanently?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/products/${id}`); fetchData(); }
        finally { setDeletingId(null); }
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Products</h2>
                    <p className={styles.subtitle}>{total} product{total !== 1 ? 's' : ''} total</p>
                </div>
                <Link href="/admin/products/new" className={styles.addBtn}><IconPlus /> Add Product</Link>
            </div>

            <div className={styles.filterRow}>
                <div className={styles.searchWrap}>
                    <IconSearch />
                    <input type="text" className={styles.searchInput} placeholder="Search by name, brand, slug…"
                        value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                </div>
            </div>

            <div className={styles.tableWrap}>
                {loading ? <div className={styles.empty}>Loading…</div>
                : products.length === 0 ? (
                    <div className={styles.empty}>
                        No products yet.{' '}
                        <Link href="/admin/products/new" className={styles.emptyLink}>Add your first product →</Link>
                    </div>
                ) : (
                    <table className={styles.table}>
                        <thead><tr>
                            <th>Image</th><th>Name</th><th>Brand</th><th>Slug</th>
                            <th>Status</th><th>Created</th><th>Actions</th>
                        </tr></thead>
                        <tbody>
                            {products.map((p) => {
                                const imgUrl = p.image ? (p.image.startsWith('http') ? p.image : `${API_URL}${p.image}`) : null;
                                return (
                                    <tr key={p._id} className={styles.row}>
                                        <td>{imgUrl ? <img src={imgUrl} alt={p.name} className={styles.thumb} /> : <div className={styles.thumbEmpty}>–</div>}</td>
                                        <td className={styles.nameCell}>{p.name}</td>
                                        <td>{p.brand || '–'}</td>
                                        <td className={styles.slugCell}>{p.slug}</td>
                                        <td><span className={`${styles.statusBadge} ${p.isActive ? styles.statusActive : styles.statusInactive}`}>{p.isActive ? 'Active' : 'Inactive'}</span></td>
                                        <td>{new Date(p.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                                        <td>
                                            <div className={styles.rowActions}>
                                                <Link href={`/admin/products/${p._id}`} className={styles.editBtn}><IconEdit /> Edit</Link>
                                                <button className={styles.deleteBtn} disabled={deletingId === p._id} onClick={() => handleDelete(p._id, p.name)}><IconTrash /></button>
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
