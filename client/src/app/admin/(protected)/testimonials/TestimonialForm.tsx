'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import styles from '../blogs/blogs.module.css';

export interface TestimonialData {
    _id?: string;
    name: string; designation: string; rating: number;
    text: string; isActive: boolean; order: number;
}

export default function TestimonialForm({ initial }: { initial?: Partial<TestimonialData> }) {
    const router = useRouter();
    const isEdit = !!initial?._id;

    const [form, setForm] = useState<TestimonialData>({
        name:        initial?.name        ?? '',
        designation: initial?.designation ?? '',
        rating:      initial?.rating      ?? 5,
        text:        initial?.text        ?? '',
        isActive:    initial?.isActive    ?? true,
        order:       initial?.order       ?? 0,
    });

    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    async function handleSubmit() {
        if (!form.name.trim())        { setError('Name is required.');        return; }
        if (!form.designation.trim()) { setError('Designation is required.'); return; }
        if (!form.text.trim())        { setError('Quote text is required.');  return; }
        setSaving(true); setError(''); setSuccess('');
        try {
            if (isEdit) {
                await adminApi.put(`/testimonials/${initial!._id}`, form);
                setSuccess('Testimonial updated.');
            } else {
                await adminApi.post('/testimonials', form);
                setSuccess('Testimonial created. Redirecting…');
                setTimeout(() => router.push('/admin/testimonials'), 1200);
            }
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Something went wrong.');
        } finally { setSaving(false); }
    }

    return (
        <div className={styles.formPage}>
            <div className={styles.formHeader}>
                <Link href="/admin/testimonials" className={styles.backLink}>← Testimonials</Link>
                <h2 className={styles.formTitle}>{isEdit ? 'Edit Testimonial' : 'New Testimonial'}</h2>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Author</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Name *</label>
                        <input className={styles.formInput} value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder="e.g. Arvind Mehta" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Designation *</label>
                        <input className={styles.formInput} value={form.designation}
                            onChange={(e) => setForm((p) => ({ ...p, designation: e.target.value }))}
                            placeholder="e.g. Founder / CEO" />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Review</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Rating (1–5)</label>
                        <input className={styles.formInput} type="number" min={1} max={5} value={form.rating}
                            onChange={(e) => setForm((p) => ({ ...p, rating: Math.min(5, Math.max(1, Number(e.target.value))) }))} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Display Order</label>
                        <input className={styles.formInput} type="number" min={0} value={form.order}
                            onChange={(e) => setForm((p) => ({ ...p, order: Number(e.target.value) }))} />
                        <span className={styles.formHint}>Lower number = shown first</span>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Quote *</label>
                        <textarea className={styles.formTextarea} value={form.text}
                            onChange={(e) => setForm((p) => ({ ...p, text: e.target.value }))}
                            placeholder="Customer's testimonial text…" />
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

            <div className={styles.formFooter}>
                <button className={styles.saveBtn} disabled={saving} onClick={handleSubmit}>
                    {saving ? 'Saving…' : isEdit ? 'Update' : 'Create'}
                </button>
                <Link href="/admin/testimonials" className={styles.cancelLink}>Cancel</Link>
                {error   && <span className={styles.formError}>{error}</span>}
                {success && <span className={styles.formSuccess}>{success}</span>}
            </div>
        </div>
    );
}
