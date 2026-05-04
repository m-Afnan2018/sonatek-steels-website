'use client';

import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import styles from '../blogs/blogs.module.css';

interface StatItem { value: number; suffix: string; label: string; }
interface HomeContentData {
    hero:   { title: string; description: string; paragraph: string; btnText: string; btnLink: string; videoUrl: string; posterUrl: string; };
    impact: { label: string; headline: string; sub: string; stats: StatItem[]; };
    cta:    { headline: string; sub: string; btnText: string; btnLink: string; bgImage: string; };
}

const DEFAULT: HomeContentData = {
    hero:   { title: 'Your Partner in', description: 'Flat Steel', paragraph: '', btnText: 'Explore Our Products', btnLink: '/product', videoUrl: '', posterUrl: '' },
    impact: { label: 'Make an Impact', headline: 'Engineering Excellence\nin Steel Distribution', sub: '', stats: [
        { value: 11, suffix: '+', label: 'Years of excellence' },
        { value: 500, suffix: 'K+', label: 'Tons of steel delivered' },
        { value: 120, suffix: '+', label: 'Industries helped' },
        { value: 95, suffix: '%', label: 'Repeat customers' },
    ]},
    cta: { headline: 'Talk to a Steel\nExpert', sub: '', btnText: 'Contact Us', btnLink: '/contact-us', bgImage: '' },
};

export default function HomeContentPage() {
    const [form, setForm]       = useState<HomeContentData>(DEFAULT);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        adminApi.get('/home-content')
            .then((r) => { if (r.data.homeContent) setForm(r.data.homeContent); })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    function setHero<K extends keyof HomeContentData['hero']>(k: K, v: string) {
        setForm((p) => ({ ...p, hero: { ...p.hero, [k]: v } }));
    }
    function setImpact<K extends keyof Omit<HomeContentData['impact'], 'stats'>>(k: K, v: string) {
        setForm((p) => ({ ...p, impact: { ...p.impact, [k]: v } }));
    }
    function setStat(i: number, k: keyof StatItem, v: string | number) {
        setForm((p) => {
            const stats = p.impact.stats.map((s, idx) => idx === i ? { ...s, [k]: v } : s);
            return { ...p, impact: { ...p.impact, stats } };
        });
    }
    function setCta<K extends keyof HomeContentData['cta']>(k: K, v: string) {
        setForm((p) => ({ ...p, cta: { ...p.cta, [k]: v } }));
    }

    async function handleSave() {
        setSaving(true); setError(''); setSuccess('');
        try {
            await adminApi.put('/home-content', form);
            setSuccess('Home content saved successfully.');
        } catch {
            setError('Failed to save. Please try again.');
        } finally { setSaving(false); }
    }

    if (loading) return <div className={styles.empty}>Loading…</div>;

    return (
        <div className={styles.formPage}>
            <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Home Content</h2>
            </div>

            {/* Hero */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Hero Section</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Title Line 1</label>
                        <input className={styles.formInput} value={form.hero.title} onChange={(e) => setHero('title', e.target.value)} placeholder="Your Partner in" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Title Line 2 (accent)</label>
                        <input className={styles.formInput} value={form.hero.description} onChange={(e) => setHero('description', e.target.value)} placeholder="Flat Steel" />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Subheading Paragraph</label>
                        <textarea className={styles.formTextarea} value={form.hero.paragraph} onChange={(e) => setHero('paragraph', e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Button Text</label>
                        <input className={styles.formInput} value={form.hero.btnText} onChange={(e) => setHero('btnText', e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Button Link</label>
                        <input className={styles.formInput} value={form.hero.btnLink} onChange={(e) => setHero('btnLink', e.target.value)} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Background Video</label>
                        <MediaPicker accept="video" value={form.hero.videoUrl || undefined}
                            onChange={(url) => setHero('videoUrl', url)} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Poster / Fallback Image</label>
                        <MediaPicker accept="image" value={form.hero.posterUrl || undefined}
                            onChange={(url) => setHero('posterUrl', url)} />
                    </div>
                </div>
            </div>

            {/* Impact */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Impact / Stats Section</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Section Label</label>
                        <input className={styles.formInput} value={form.impact.label} onChange={(e) => setImpact('label', e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Headline</label>
                        <input className={styles.formInput} value={form.impact.headline} onChange={(e) => setImpact('headline', e.target.value)} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Subtext</label>
                        <textarea className={styles.formTextarea} value={form.impact.sub} onChange={(e) => setImpact('sub', e.target.value)} />
                    </div>
                </div>
                <div style={{ marginTop: 16 }}>
                    <div className={styles.formLabel} style={{ marginBottom: 10 }}>Stats (4 items)</div>
                    {form.impact.stats.map((s, i) => (
                        <div key={i} className={styles.grid2} style={{ marginBottom: 10 }}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Value</label>
                                <input className={styles.formInput} type="number" value={s.value}
                                    onChange={(e) => setStat(i, 'value', Number(e.target.value))} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Suffix</label>
                                <input className={styles.formInput} value={s.suffix} placeholder="e.g. K+" onChange={(e) => setStat(i, 'suffix', e.target.value)} />
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                                <label className={styles.formLabel}>Label</label>
                                <input className={styles.formInput} value={s.label} onChange={(e) => setStat(i, 'label', e.target.value)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>CTA Banner</div>
                <div className={styles.grid2}>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Headline</label>
                        <input className={styles.formInput} value={form.cta.headline} onChange={(e) => setCta('headline', e.target.value)} />
                        <span className={styles.formHint}>Use \n for a line break</span>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Subtext</label>
                        <textarea className={styles.formTextarea} value={form.cta.sub} onChange={(e) => setCta('sub', e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Button Text</label>
                        <input className={styles.formInput} value={form.cta.btnText} onChange={(e) => setCta('btnText', e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Button Link</label>
                        <input className={styles.formInput} value={form.cta.btnLink} onChange={(e) => setCta('btnLink', e.target.value)} />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Background Image</label>
                        <MediaPicker accept="image" value={form.cta.bgImage || undefined}
                            onChange={(url) => setCta('bgImage', url)} />
                    </div>
                </div>
            </div>

            <div className={styles.formFooter}>
                <button className={styles.saveBtn} disabled={saving} onClick={handleSave}>
                    {saving ? 'Saving…' : 'Save Changes'}
                </button>
                {error   && <span className={styles.formError}>{error}</span>}
                {success && <span className={styles.formSuccess}>{success}</span>}
            </div>
        </div>
    );
}
