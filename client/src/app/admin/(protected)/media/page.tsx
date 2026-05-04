'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { adminApi } from '@/lib/adminApi';
import styles from '../blogs/blogs.module.css';
import mStyles from '@/components/admin/MediaPicker/MediaPicker.module.css';

interface MediaItem { _id: string; url: string; originalName: string; mimetype: string; size: number; createdAt: string; }

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const IconPlus  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconTrash = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

type Filter = 'all' | 'image' | 'video';

function fmtSize(b: number) {
    if (b < 1024) return `${b} B`;
    if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
    return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaPage() {
    const [items, setItems]           = useState<MediaItem[]>([]);
    const [loading, setLoading]       = useState(true);
    const [filter, setFilter]         = useState<Filter>('all');
    const [uploading, setUploading]   = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    const fetchMedia = useCallback(async () => {
        setLoading(true);
        try { const r = await adminApi.get('/media'); setItems(r.data.media ?? []); }
        finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchMedia(); }, [fetchMedia]);

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (fileRef.current) fileRef.current.value = '';
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append('file', file);
            await adminApi.post('/media', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            fetchMedia();
        } catch { } finally { setUploading(false); }
    }

    async function handleDelete(id: string, name: string) {
        if (!confirm(`Delete "${name}" permanently?`)) return;
        setDeletingId(id);
        try { await adminApi.delete(`/media/${id}`); setItems((p) => p.filter((i) => i._id !== id)); }
        finally { setDeletingId(null); }
    }

    const displayed = items.filter((i) => {
        if (filter === 'image') return i.mimetype.startsWith('image/');
        if (filter === 'video') return i.mimetype.startsWith('video/');
        return true;
    });

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Media Library</h2>
                    <p className={styles.subtitle}>{items.length} file{items.length !== 1 ? 's' : ''} total</p>
                </div>
                <button className={styles.addBtn} onClick={() => fileRef.current?.click()} disabled={uploading}>
                    <IconPlus /> {uploading ? 'Uploading…' : 'Upload Media'}
                </button>
                <input ref={fileRef} type="file" accept="image/*,video/*" style={{ display: 'none' }} onChange={handleUpload} />
            </div>

            <div className={mStyles.filterRow}>
                {(['all', 'image', 'video'] as Filter[]).map((f) => (
                    <button key={f} type="button"
                        className={`${mStyles.filterBtn}${filter === f ? ` ${mStyles.filterBtnActive}` : ''}`}
                        onClick={() => setFilter(f)}>
                        {f === 'all' ? 'All' : f === 'image' ? 'Images' : 'Videos'}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className={styles.empty}>Loading…</div>
            ) : displayed.length === 0 ? (
                <div className={styles.empty}>
                    No media yet.{' '}
                    <button style={{ background: 'none', border: 'none', color: 'var(--a-accent-light)', cursor: 'pointer', fontSize: 'inherit', padding: 0 }}
                        onClick={() => fileRef.current?.click()}>Upload your first file →</button>
                </div>
            ) : (
                <div className={mStyles.grid}>
                    {displayed.map((item) => {
                        const full  = item.url.startsWith('http') ? item.url : `${API_URL}${item.url}`;
                        const isVid = item.mimetype.startsWith('video/');
                        return (
                            <div key={item._id} className={mStyles.gridItem} style={{ cursor: 'default' }}>
                                {isVid
                                    ? <div className={mStyles.gridVideo}>🎬</div>
                                    : <img src={full} alt={item.originalName} className={mStyles.gridThumb} />
                                }
                                <div className={mStyles.gridMeta}>
                                    <span className={mStyles.gridName}>{item.originalName}</span>
                                    <span className={mStyles.gridSize}>{fmtSize(item.size)}</span>
                                </div>
                                <button type="button" className={mStyles.deleteItemBtn}
                                    style={{ opacity: 1, width: 24, height: 24, fontSize: 12 }}
                                    disabled={deletingId === item._id}
                                    onClick={() => handleDelete(item._id, item.originalName)}>
                                    <IconTrash />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
