'use client';

import { useEffect, useState, useCallback } from 'react';
import { adminApi } from '@/lib/adminApi';
import styles from '../blogs/blogs.module.css';

interface Tag { _id: string; label: string; slug: string; }

const IconTrash = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

export default function TagsPage() {
    const [tags, setTags]             = useState<Tag[]>([]);
    const [loading, setLoading]       = useState(true);
    const [label, setLabel]           = useState('');
    const [adding, setAdding]         = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError]           = useState('');

    const fetchTags = useCallback(async () => {
        setLoading(true);
        try {
            const res = await adminApi.get('/tags');
            setTags(res.data.tags ?? []);
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchTags(); }, [fetchTags]);

    async function handleAdd() {
        if (!label.trim()) return;
        setAdding(true); setError('');
        try {
            await adminApi.post('/tags', { label: label.trim() });
            setLabel('');
            fetchTags();
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Failed to create tag.');
        } finally { setAdding(false); }
    }

    async function handleDelete(id: string, lbl: string) {
        if (!confirm(`Delete tag "${lbl}"? Posts using this tag will lose it.`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/tags/${id}`); fetchTags(); }
        finally { setDeletingId(null); }
    }

    return (
        <div className={styles.tagsPage}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Tags</h2>
                    <p className={styles.subtitle}>{tags.length} tag{tags.length !== 1 ? 's' : ''} total</p>
                </div>
            </div>

            <div className={styles.addTagForm}>
                <div className={styles.sectionTitle}>Add New Tag</div>
                <div className={styles.addTagRow}>
                    <input
                        className={styles.tagInput}
                        placeholder="e.g. Hot Rolling"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(); }}
                    />
                    <button className={styles.tagAddBtn} disabled={adding || !label.trim()} onClick={handleAdd}>
                        {adding ? 'Adding…' : 'Add Tag'}
                    </button>
                </div>
                {error && <span className={styles.formError}>{error}</span>}
            </div>

            <div className={styles.tagList}>
                {loading ? (
                    <div className={styles.tagRow}>
                        <span className={styles.tagRowLabel} style={{ color: 'var(--a-text-muted)' }}>Loading…</span>
                    </div>
                ) : tags.length === 0 ? (
                    <div className={styles.tagRow}>
                        <span className={styles.tagRowLabel} style={{ color: 'var(--a-text-muted)' }}>No tags yet. Add your first tag above.</span>
                    </div>
                ) : tags.map((tag) => (
                    <div key={tag._id} className={styles.tagRow}>
                        <span className={styles.tagRowLabel}>{tag.label}</span>
                        <span className={styles.tagRowSlug}>{tag.slug}</span>
                        <button
                            className={styles.tagDeleteBtn}
                            disabled={deletingId === tag._id}
                            onClick={() => handleDelete(tag._id, tag.label)}
                        >
                            <IconTrash />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
