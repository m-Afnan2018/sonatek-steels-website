'use client';

import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import ListField from '@/components/admin/ListField';
import {
    DEFAULT_FOOTER, COLUMN_ITEM_SCHEMA, LEGAL_LINK_ITEM_SCHEMA, SOCIAL_LINK_ITEM_SCHEMA,
    type FooterSettings,
} from '@/lib/footerSchema';
import styles from '../blogs/blogs.module.css';
import pageStyles from './footer.module.css';

export default function FooterSettingsPage() {
    const [form, setForm]       = useState<FooterSettings>(DEFAULT_FOOTER);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        adminApi.get('/footer')
            .then((r) => { if (r.data.footer) setForm(r.data.footer); })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    async function handleSave() {
        setSaving(true); setError(''); setSuccess('');
        try {
            await adminApi.put('/footer', form);
            setSuccess('Footer saved successfully.');
        } catch {
            setError('Failed to save. Please try again.');
        } finally { setSaving(false); }
    }

    if (loading) return <div className={styles.empty}>Loading…</div>;

    return (
        <div className={styles.formPage}>
            <div className={pageStyles.stickyBar}>
                <h2 className={styles.formTitle}>Footer</h2>
                <div className={pageStyles.stickyActions}>
                    <button className={styles.saveBtn} disabled={saving} onClick={handleSave}>
                        {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                    {error   && <span className={styles.formError}>{error}</span>}
                    {success && <span className={styles.formSuccess}>{success}</span>}
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Link Columns</div>
                <span className={styles.formHint}>
                    Each column becomes one link group in the footer. A &quot;Products&quot; column is always
                    added automatically between these and shows your live product catalog — it isn&apos;t edited here.
                </span>
                <div style={{ marginTop: 12 }}>
                    <ListField
                        itemSchema={COLUMN_ITEM_SCHEMA}
                        value={form.columns as unknown as Record<string, unknown>[]}
                        onChange={(rows) => setForm((p) => ({ ...p, columns: rows as unknown as FooterSettings['columns'] }))}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Legal Links</div>
                <span className={styles.formHint}>Shown in the bottom bar, separated by pipes.</span>
                <div style={{ marginTop: 12 }}>
                    <ListField
                        itemSchema={LEGAL_LINK_ITEM_SCHEMA}
                        value={form.legalLinks as unknown as Record<string, unknown>[]}
                        onChange={(rows) => setForm((p) => ({ ...p, legalLinks: rows as unknown as FooterSettings['legalLinks'] }))}
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Social Links</div>
                <span className={styles.formHint}>Leave the URL empty to hide an icon.</span>
                <div style={{ marginTop: 12 }}>
                    <ListField
                        itemSchema={SOCIAL_LINK_ITEM_SCHEMA}
                        value={form.socialLinks as unknown as Record<string, unknown>[]}
                        onChange={(rows) => setForm((p) => ({ ...p, socialLinks: rows as unknown as FooterSettings['socialLinks'] }))}
                    />
                </div>
            </div>
        </div>
    );
}
