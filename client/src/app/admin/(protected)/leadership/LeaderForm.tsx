'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import styles from '../blogs/blogs.module.css';

export interface LeaderData {
    _id?: string;
    name: string; title: string; category: string;
    image?: string; order: number; isActive: boolean;
}

const CATS = ['Board of Directors', 'Executive Team', 'Management'];

export default function LeaderForm({ initial }: { initial?: Partial<LeaderData> }) {
    const router = useRouter();
    const isEdit = !!initial?._id;

    const [form, setForm] = useState<LeaderData>({
        name:     initial?.name     ?? '',
        title:    initial?.title    ?? '',
        category: initial?.category ?? 'Executive Team',
        image:    initial?.image,
        order:    initial?.order    ?? 0,
        isActive: initial?.isActive ?? true,
    });

    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    async function handleSubmit() {
        if (!form.name.trim())  { setError('Name is required.');  return; }
        if (!form.title.trim()) { setError('Title is required.'); return; }
        setSaving(true); setError(''); setSuccess('');
        try {
            const fd = new FormData();
            fd.append('name',     form.name);
            fd.append('title',    form.title);
            fd.append('category', form.category);
            fd.append('order',    String(form.order));
            fd.append('isActive', String(form.isActive));
            if (form.image !== undefined) fd.append('image', form.image);

            const cfg = { headers: { 'Content-Type': 'multipart/form-data' } };
            if (isEdit) {
                await adminApi.put(`/leadership/${initial!._id}`, fd, cfg);
                setSuccess('Updated successfully.');
            } else {
                await adminApi.post('/leadership', fd, cfg);
                setSuccess('Created. Redirecting…');
                setTimeout(() => router.push('/admin/leadership'), 1200);
            }
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Something went wrong.');
        } finally { setSaving(false); }
    }

    return (
        <div className={styles.formPage}>
            <div className={styles.formHeader}>
                <Link href="/admin/leadership" className={styles.backLink}>← Leadership</Link>
                <h2 className={styles.formTitle}>{isEdit ? 'Edit Member' : 'New Member'}</h2>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Details</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Name *</label>
                        <input className={styles.formInput} value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder="e.g. Arvind Mehta" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Title *</label>
                        <input className={styles.formInput} value={form.title}
                            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                            placeholder="e.g. Chief Executive Officer" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Category</label>
                        <select className={styles.formInput} value={form.category}
                            onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}>
                            {CATS.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Display Order</label>
                        <input className={styles.formInput} type="number" min={0} value={form.order}
                            onChange={(e) => setForm((p) => ({ ...p, order: Number(e.target.value) }))} />
                        <span className={styles.formHint}>Lower number = shown first</span>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.toggleRow}>
                            <input type="checkbox" id="isActive" checked={form.isActive}
                                onChange={(e) => setForm((p) => ({ ...p, isActive: e.target.checked }))} />
                            <label htmlFor="isActive" className={styles.toggleLabel}>
                                {form.isActive ? 'Active — visible on website' : 'Hidden'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Photo</div>
                <MediaPicker
                    accept="image"
                    value={form.image}
                    onChange={(url) => setForm((p) => ({ ...p, image: url || undefined }))}
                />
            </div>

            <div className={styles.formFooter}>
                <button className={styles.saveBtn} disabled={saving} onClick={handleSubmit}>
                    {saving ? 'Saving…' : isEdit ? 'Update' : 'Create'}
                </button>
                <Link href="/admin/leadership" className={styles.cancelLink}>Cancel</Link>
                {error   && <span className={styles.formError}>{error}</span>}
                {success && <span className={styles.formSuccess}>{success}</span>}
            </div>
        </div>
    );
}
