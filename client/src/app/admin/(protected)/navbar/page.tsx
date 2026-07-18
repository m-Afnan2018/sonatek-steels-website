'use client';

import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import ListField from '@/components/admin/ListField';
import { DEFAULT_NAVBAR, NAV_ITEM_SCHEMA, PHONE_ITEM_SCHEMA, type NavbarSettings } from '@/lib/navbarSchema';
import styles from '../blogs/blogs.module.css';
import pageStyles from './navbar.module.css';

export default function NavbarSettingsPage() {
    const [form, setForm]       = useState<NavbarSettings>(DEFAULT_NAVBAR);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        adminApi.get('/navbar')
            .then((r) => { if (r.data.navbar) setForm(r.data.navbar); })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    async function handleSave() {
        setSaving(true); setError(''); setSuccess('');
        try {
            await adminApi.put('/navbar', form);
            setSuccess('Navbar saved successfully.');
        } catch {
            setError('Failed to save. Please try again.');
        } finally { setSaving(false); }
    }

    if (loading) return <div className={styles.empty}>Loading…</div>;

    return (
        <div className={styles.formPage}>
            <div className={pageStyles.stickyBar}>
                <h2 className={styles.formTitle}>Navbar</h2>
                <div className={pageStyles.stickyActions}>
                    <button className={styles.saveBtn} disabled={saving} onClick={handleSave}>
                        {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                    {error   && <span className={styles.formError}>{error}</span>}
                    {success && <span className={styles.formSuccess}>{success}</span>}
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Branding & Icons</div>
                <div className={styles.grid2}>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Logo</label>
                        <MediaPicker accept="image" value={form.logoUrl || undefined}
                            onChange={(url) => setForm((p) => ({ ...p, logoUrl: url }))} />
                        <span className={styles.formHint}>Leave empty to use the default Sonatek Steels logo.</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Map link (for the location icon)</label>
                        <input className={styles.formInput} value={form.mapUrl}
                            onChange={(e) => setForm((p) => ({ ...p, mapUrl: e.target.value }))} />
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Call Us Numbers</div>
                <span className={styles.formHint}>
                    Shown in a dropdown when a visitor clicks the phone icon in the header.
                </span>
                <div style={{ marginTop: 12 }}>
                    <ListField
                        itemSchema={PHONE_ITEM_SCHEMA}
                        value={form.phones as unknown as Record<string, unknown>[]}
                        onChange={(rows) => setForm((p) => ({ ...p, phones: rows as unknown as NavbarSettings['phones'] }))}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Nav Items</div>
                <span className={styles.formHint}>
                    Top-level menu items, in order. Enable &quot;Has mega menu&quot; to add featured cards and grouped link sections (used today by &quot;Solutions&quot;).
                </span>
                <div style={{ marginTop: 12 }}>
                    <ListField
                        itemSchema={NAV_ITEM_SCHEMA}
                        value={form.navItems as unknown as Record<string, unknown>[]}
                        onChange={(rows) => setForm((p) => ({ ...p, navItems: rows as unknown as NavbarSettings['navItems'] }))}
                    />
                </div>
            </div>
        </div>
    );
}
