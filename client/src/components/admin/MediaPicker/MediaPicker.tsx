'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { adminApi } from '@/lib/adminApi';
import styles from './MediaPicker.module.css';

export interface MediaItem {
    _id:          string;
    url:          string;
    originalName: string;
    mimetype:     string;
    size:         number;
}

export interface MediaPickerProps {
    value?:   string;
    onChange: (url: string) => void;
    accept?:  'image' | 'video' | 'all';
    label?:   string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
type Filter = 'all' | 'image' | 'video';

function fmtSize(b: number) {
    if (b < 1024) return `${b} B`;
    if (b < 1024 * 1024) return `${(b / 1024).toFixed(0)} KB`;
    return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaPicker({ value, onChange, accept = 'all', label }: MediaPickerProps) {
    const [open, setOpen]           = useState(false);
    const [items, setItems]         = useState<MediaItem[]>([]);
    const [selected, setSelected]   = useState('');
    const [uploading, setUploading] = useState(false);
    const [filter, setFilter]       = useState<Filter>('all');
    const fileRef = useRef<HTMLInputElement>(null);

    const loadMedia = useCallback(() => {
        adminApi.get('/media').then((r) => setItems(r.data.media ?? [])).catch(() => {});
    }, []);

    useEffect(() => {
        if (!open) return;
        setSelected(value || '');
        loadMedia();
    }, [open, value, loadMedia]);

    const displayed = items.filter((item) => {
        const f = filter === 'all' ? accept : filter;
        if (f === 'image') return item.mimetype.startsWith('image/');
        if (f === 'video') return item.mimetype.startsWith('video/');
        return true;
    });

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || uploading) return;
        if (fileRef.current) fileRef.current.value = '';
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await adminApi.post('/media', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            const newItem: MediaItem = res.data.media;
            setItems((p) => [newItem, ...p]);
            setSelected(newItem.url);
        } catch { } finally { setUploading(false); }
    }

    async function handleDelete(e: React.MouseEvent, id: string, url: string) {
        e.stopPropagation();
        if (!confirm('Delete this media item permanently?')) return;
        try {
            await adminApi.delete(`/media/${id}`);
            setItems((p) => p.filter((i) => i._id !== id));
            if (selected === url) setSelected('');
        } catch { }
    }

    const fullUrl     = value ? (value.startsWith('http') ? value : `${API_URL}${value}`) : null;
    const valueIsVid  = value ? /\.(mp4|webm|mov)$/i.test(value) : false;
    const acceptAttr  = accept === 'image' ? 'image/*' : accept === 'video' ? 'video/*' : 'image/*,video/*';

    return (
        <>
            {/* Trigger */}
            <div className={styles.trigger}>
                {fullUrl && !valueIsVid && <img src={fullUrl} alt="" className={styles.triggerThumb} />}
                {fullUrl && valueIsVid  && (
                    <div className={styles.triggerVideo}>🎬<span className={styles.triggerVideoLabel}>Video</span></div>
                )}
                {!fullUrl && <span className={styles.triggerEmpty}>No media selected</span>}
                <button type="button" className={styles.triggerBtn} onClick={() => setOpen(true)}>
                    {label ?? (value ? 'Change Media' : 'Choose Media')}
                </button>
                {value && (
                    <button type="button" className={styles.clearBtn} title="Remove" onClick={() => onChange('')}>✕</button>
                )}
            </div>

            {/* Modal */}
            {open && (
                <div className={styles.overlay} onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span className={styles.modalTitle}>Media Library</span>
                            <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
                        </div>

                        <div className={styles.modalBody}>
                            {/* Upload */}
                            <div
                                className={`${styles.uploadZone}${uploading ? ` ${styles.uploadZoneUploading}` : ''}`}
                                onClick={() => !uploading && fileRef.current?.click()}
                            >
                                <input ref={fileRef} type="file" accept={acceptAttr} style={{ display: 'none' }} onChange={handleUpload} />
                                {uploading ? '⏳  Uploading…' : '＋  Upload New Media'}
                            </div>

                            {/* Filter (only when accept="all") */}
                            {accept === 'all' && (
                                <div className={styles.filterRow}>
                                    {(['all', 'image', 'video'] as Filter[]).map((f) => (
                                        <button key={f} type="button"
                                            className={`${styles.filterBtn}${filter === f ? ` ${styles.filterBtnActive}` : ''}`}
                                            onClick={() => setFilter(f)}>
                                            {f === 'all' ? 'All' : f === 'image' ? 'Images' : 'Videos'}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Grid */}
                            {displayed.length === 0 ? (
                                <div className={styles.emptyGrid}>No media yet. Upload something above.</div>
                            ) : (
                                <div className={styles.grid}>
                                    {displayed.map((item) => {
                                        const full  = item.url.startsWith('http') ? item.url : `${API_URL}${item.url}`;
                                        const isSel = selected === item.url;
                                        const isVid = item.mimetype.startsWith('video/');
                                        return (
                                            <div key={item._id}
                                                className={`${styles.gridItem}${isSel ? ` ${styles.gridItemSelected}` : ''}`}
                                                onClick={() => setSelected(isSel ? '' : item.url)}
                                            >
                                                {isVid
                                                    ? <div className={styles.gridVideo}>🎬</div>
                                                    : <img src={full} alt={item.originalName} className={styles.gridThumb} />
                                                }
                                                <div className={styles.gridMeta}>
                                                    <span className={styles.gridName}>{item.originalName}</span>
                                                    <span className={styles.gridSize}>{fmtSize(item.size)}</span>
                                                </div>
                                                {isSel && <span className={styles.checkmark}>✓</span>}
                                                <button type="button" className={styles.deleteItemBtn} title="Delete"
                                                    onClick={(e) => handleDelete(e, item._id, item.url)}>✕</button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <div className={styles.modalFooter}>
                            <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)}>Cancel</button>
                            <button type="button" className={styles.selectBtn} disabled={!selected} onClick={() => { onChange(selected); setOpen(false); }}>
                                Use Selected
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
