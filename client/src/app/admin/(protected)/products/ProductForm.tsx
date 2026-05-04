'use client';

import { useState, KeyboardEvent, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import styles from './products.module.css';

interface SpecRow { label: string; value: string; }
interface Specs { composition: SpecRow[]; mechanical: SpecRow[]; tolerance: SpecRow[]; }

export interface ProductData {
    _id?: string;
    name: string; slug: string; brand: string; whatsappNumber: string; isActive: boolean;
    image?: string;
    thicknesses: string[]; widths: string[];
    overview: { description: string; bulletPoints: string; brandName: string; sheetWeight: string; supplyCondition: string; packaging: string; };
    specs: Specs;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const emptySpec = (): SpecRow => ({ label: '', value: '' });
const SPEC_LABELS: Record<keyof Specs, string> = {
    composition: 'Chemical Composition',
    mechanical:  'Mechanical Properties',
    tolerance:   'Tolerance Properties',
};

function slugify(s: string) {
    return s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function ProductForm({ initial }: { initial?: Partial<ProductData> }) {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    const isEdit  = !!initial?._id;

    const [form, setForm] = useState<ProductData>({
        name: initial?.name ?? '', slug: initial?.slug ?? '', brand: initial?.brand ?? '',
        whatsappNumber: initial?.whatsappNumber ?? '', isActive: initial?.isActive ?? true,
        image: initial?.image,
        thicknesses: initial?.thicknesses ?? [], widths: initial?.widths ?? [],
        overview: {
            description:     initial?.overview?.description ?? '',
            bulletPoints:    (initial?.overview?.bulletPoints ?? []).join('\n'),
            brandName:       initial?.overview?.brandName ?? '',
            sheetWeight:     initial?.overview?.sheetWeight ?? '',
            supplyCondition: initial?.overview?.supplyCondition ?? '',
            packaging:       initial?.overview?.packaging ?? '',
        },
        specs: {
            composition: initial?.specs?.composition?.length ? initial.specs.composition : [emptySpec()],
            mechanical:  initial?.specs?.mechanical?.length  ? initial.specs.mechanical  : [emptySpec()],
            tolerance:   initial?.specs?.tolerance?.length   ? initial.specs.tolerance   : [emptySpec()],
        },
    });

    const [chipInputs, setChipInputs] = useState({ thicknesses: '', widths: '' });
    const [imageFile, setImageFile]   = useState<File | null>(null);
    const [preview, setPreview]       = useState<string | null>(null);
    const [saving, setSaving]         = useState(false);
    const [error, setError]           = useState('');
    const [success, setSuccess]       = useState('');

    /* Chip helpers */
    function addChip(field: 'thicknesses' | 'widths') {
        const val = chipInputs[field].trim();
        if (!val || form[field].includes(val)) { setChipInputs((p) => ({ ...p, [field]: '' })); return; }
        setForm((p) => ({ ...p, [field]: [...p[field], val] }));
        setChipInputs((p) => ({ ...p, [field]: '' }));
    }
    function removeChip(field: 'thicknesses' | 'widths', val: string) {
        setForm((p) => ({ ...p, [field]: p[field].filter((v) => v !== val) }));
    }
    function chipKey(field: 'thicknesses' | 'widths', e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addChip(field); }
        if (e.key === 'Backspace' && !chipInputs[field] && form[field].length)
            setForm((p) => ({ ...p, [field]: p[field].slice(0, -1) }));
    }

    /* Spec helpers */
    function updateSpec(tab: keyof Specs, idx: number, key: 'label' | 'value', val: string) {
        const rows = [...form.specs[tab]];
        rows[idx] = { ...rows[idx], [key]: val };
        setForm((p) => ({ ...p, specs: { ...p.specs, [tab]: rows } }));
    }
    function addSpecRow(tab: keyof Specs) {
        setForm((p) => ({ ...p, specs: { ...p.specs, [tab]: [...p.specs[tab], emptySpec()] } }));
    }
    function removeSpecRow(tab: keyof Specs, idx: number) {
        setForm((p) => ({ ...p, specs: { ...p.specs, [tab]: p.specs[tab].filter((_, i) => i !== idx) } }));
    }

    function setOv(key: keyof ProductData['overview'], val: string) {
        setForm((p) => ({ ...p, overview: { ...p.overview, [key]: val } }));
    }

    /* Submit */
    async function handleSubmit() {
        if (!form.name.trim()) { setError('Product name is required.'); return; }
        if (!form.slug.trim()) { setError('Slug is required.'); return; }
        setSaving(true); setError(''); setSuccess('');
        try {
            const fd = new FormData();
            fd.append('name', form.name);
            fd.append('slug', form.slug);
            fd.append('brand', form.brand);
            fd.append('whatsappNumber', form.whatsappNumber);
            fd.append('isActive', String(form.isActive));
            fd.append('thicknesses', JSON.stringify(form.thicknesses));
            fd.append('widths',      JSON.stringify(form.widths));
            fd.append('overview', JSON.stringify({
                ...form.overview,
                bulletPoints: form.overview.bulletPoints.split('\n').map((s) => s.trim()).filter(Boolean),
            }));
            fd.append('specs', JSON.stringify({
                composition: form.specs.composition.filter((r) => r.label || r.value),
                mechanical:  form.specs.mechanical.filter((r)  => r.label || r.value),
                tolerance:   form.specs.tolerance.filter((r)   => r.label || r.value),
            }));
            if (imageFile) fd.append('image', imageFile);

            const cfg = { headers: { 'Content-Type': 'multipart/form-data' } };
            if (isEdit) {
                await adminApi.put(`/products/${initial!._id}`, fd, cfg);
                setSuccess('Product updated successfully.');
            } else {
                await adminApi.post('/products', fd, cfg);
                setSuccess('Product created. Redirecting…');
                setTimeout(() => router.push('/admin/products'), 1200);
            }
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Something went wrong. Please try again.');
        } finally { setSaving(false); }
    }

    const currentImgUrl = preview
        ?? (form.image ? (form.image.startsWith('http') ? form.image : `${API_URL}${form.image}`) : null);

    return (
        <div className={styles.formPage}>
            <div className={styles.formHeader}>
                <Link href="/admin/products" className={styles.backLink}>← Products</Link>
                <h2 className={styles.formTitle}>{isEdit ? 'Edit Product' : 'New Product'}</h2>
            </div>

            {/* Basic info */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Basic Information</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Product Name *</label>
                        <input className={styles.formInput} value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value, slug: p.slug || slugify(e.target.value) }))}
                            placeholder="e.g. GR2 Hot Rolled Steel Sheet" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Slug *</label>
                        <input className={styles.formInput} value={form.slug}
                            onChange={(e) => setForm((p) => ({ ...p, slug: slugify(e.target.value) }))}
                            placeholder="auto-generated" />
                        <span className={styles.formHint}>URL: /product/{form.slug || '…'}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Brand</label>
                        <input className={styles.formInput} value={form.brand} onChange={(e) => setForm((p) => ({ ...p, brand: e.target.value }))} placeholder="e.g. SAIL / JSPL" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>WhatsApp Number</label>
                        <input className={styles.formInput} value={form.whatsappNumber} onChange={(e) => setForm((p) => ({ ...p, whatsappNumber: e.target.value }))} placeholder="919891998846 (no +)" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Status</label>
                        <div className={styles.toggleRow}>
                            <input type="checkbox" id="isActive" checked={form.isActive} onChange={(e) => setForm((p) => ({ ...p, isActive: e.target.checked }))} />
                            <label htmlFor="isActive" className={styles.toggleLabel}>
                                {form.isActive ? 'Active — visible on website' : 'Inactive — hidden'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Product Image</div>
                <div className={styles.imageUploadWrap}>
                    {currentImgUrl
                        ? <img src={currentImgUrl} alt="preview" className={styles.imagePreview} />
                        : <div className={styles.imagePlaceholder}>No image</div>
                    }
                    <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.webp" className={styles.fileInput}
                        onChange={(e) => {
                            const f = e.target.files?.[0] ?? null;
                            setImageFile(f);
                            setPreview(f ? URL.createObjectURL(f) : null);
                        }} />
                    <span className={styles.formHint}>Max 5 MB · jpg, jpeg, png, webp</span>
                </div>
            </div>

            {/* Dimensions */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Dimensions</div>
                <div className={styles.grid2}>
                    {(['thicknesses', 'widths'] as const).map((field) => (
                        <div key={field} className={styles.formGroup}>
                            <label className={styles.formLabel}>{field === 'thicknesses' ? 'Thicknesses (mm)' : 'Widths (mm)'}</label>
                            <div className={styles.chipWrap}>
                                {form[field].map((v) => (
                                    <span key={v} className={styles.chip}>
                                        {v}
                                        <button type="button" className={styles.chipRemove} onClick={() => removeChip(field, v)}>×</button>
                                    </span>
                                ))}
                                <input className={styles.chipInput} value={chipInputs[field]} placeholder="type & press Enter"
                                    onChange={(e) => setChipInputs((p) => ({ ...p, [field]: e.target.value }))}
                                    onKeyDown={(e) => chipKey(field, e)}
                                    onBlur={() => addChip(field)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Overview */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Overview</div>
                <div className={styles.grid2}>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Description</label>
                        <textarea className={styles.formTextarea} value={form.overview.description} onChange={(e) => setOv('description', e.target.value)} placeholder="Short product description" />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Bullet Points</label>
                        <textarea className={styles.formTextarea} value={form.overview.bulletPoints} onChange={(e) => setOv('bulletPoints', e.target.value)} placeholder="One point per line" />
                        <span className={styles.formHint}>One item per line</span>
                    </div>
                    <div className={styles.formGroup}><label className={styles.formLabel}>Brand Name</label><input className={styles.formInput} value={form.overview.brandName} onChange={(e) => setOv('brandName', e.target.value)} placeholder="e.g. JSPL" /></div>
                    <div className={styles.formGroup}><label className={styles.formLabel}>Sheet Weight</label><input className={styles.formInput} value={form.overview.sheetWeight} onChange={(e) => setOv('sheetWeight', e.target.value)} placeholder="e.g. As per order" /></div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}><label className={styles.formLabel}>Supply Condition</label><input className={styles.formInput} value={form.overview.supplyCondition} onChange={(e) => setOv('supplyCondition', e.target.value)} placeholder="e.g. As Rolled, Mill edge, Pickled, Oiled" /></div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}><label className={styles.formLabel}>Packaging</label><input className={styles.formInput} value={form.overview.packaging} onChange={(e) => setOv('packaging', e.target.value)} placeholder="e.g. Straps. Charges included." /></div>
                </div>
            </div>

            {/* Specs */}
            {(Object.keys(form.specs) as (keyof Specs)[]).map((tab) => (
                <div key={tab} className={styles.section}>
                    <div className={styles.sectionTitle}>{SPEC_LABELS[tab]}</div>
                    <table className={styles.specTable}>
                        <thead><tr><th>Label</th><th>Value</th><th></th></tr></thead>
                        <tbody>
                            {form.specs[tab].map((row, idx) => (
                                <tr key={idx}>
                                    <td><input className={styles.specInput} value={row.label} placeholder="e.g. Carbon % (Min)" onChange={(e) => updateSpec(tab, idx, 'label', e.target.value)} /></td>
                                    <td><input className={styles.specInput} value={row.value} placeholder="e.g. 0.12" onChange={(e) => updateSpec(tab, idx, 'value', e.target.value)} /></td>
                                    <td><button type="button" className={styles.specRemoveBtn} onClick={() => removeSpecRow(tab, idx)}>×</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className={styles.addRowBtn} onClick={() => addSpecRow(tab)}>+ Add Row</button>
                </div>
            ))}

            {/* Footer */}
            <div className={styles.formFooter}>
                <button className={styles.saveBtn} disabled={saving} onClick={handleSubmit}>
                    {saving ? 'Saving…' : isEdit ? 'Update Product' : 'Create Product'}
                </button>
                <Link href="/admin/products" className={styles.cancelLink}>Cancel</Link>
                {error   && <span className={styles.formError}>{error}</span>}
                {success && <span className={styles.formSuccess}>{success}</span>}
            </div>
        </div>
    );
}
