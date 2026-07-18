'use client';

import * as LucideIcons from 'lucide-react';
import type { BlockFieldSchema } from '@/lib/blockRegistry';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import RichTextEditor from '@/components/admin/RichTextEditor/RichTextEditor';
import ListField from '@/components/admin/ListField';
import styles from '@/app/admin/(protected)/blogs/blogs.module.css';

export interface AnchorOption { id: string; label: string; }

interface Props {
    fields: BlockFieldSchema[];
    data: Record<string, any>;
    onChange: (data: Record<string, any>) => void;
    siblingAnchors?: AnchorOption[];
    /** Nesting depth of the enclosing list (0 = top level). Forwarded +1 to any list field rendered below, so ListField can indent nested rows. */
    depth?: number;
}

function IconPreview({ name }: { name: string }) {
    const Cmp = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
    return <Cmp size={18} />;
}

export default function BlockFieldForm({ fields, data, onChange, siblingAnchors = [], depth = 0 }: Props) {
    function set(key: string, value: any) {
        onChange({ ...data, [key]: value });
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {fields.map((field) => {
                const value = data?.[field.key];
                return (
                    <div key={field.key} className={styles.formGroup}>
                        <label className={styles.formLabel}>{field.label}</label>

                        {field.type === 'text' && (
                            <input
                                className={styles.formInput}
                                value={value ?? ''}
                                placeholder={field.placeholder}
                                maxLength={field.maxLength}
                                onChange={(e) => set(field.key, e.target.value)}
                            />
                        )}

                        {field.type === 'textarea' && (
                            <textarea
                                className={styles.formTextarea}
                                value={value ?? ''}
                                placeholder={field.placeholder}
                                maxLength={field.maxLength}
                                onChange={(e) => set(field.key, e.target.value)}
                            />
                        )}

                        {field.maxLength !== undefined && (field.type === 'text' || field.type === 'textarea') && (
                            <span style={{ fontSize: 11, color: 'var(--a-text-muted)', alignSelf: 'flex-end' }}>
                                {(value ?? '').length} / {field.maxLength}
                            </span>
                        )}

                        {field.type === 'number' && (
                            <input
                                type="number"
                                className={styles.formInput}
                                value={value ?? 0}
                                onChange={(e) => set(field.key, Number(e.target.value))}
                            />
                        )}

                        {field.type === 'boolean' && (
                            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={!!value}
                                    onChange={(e) => set(field.key, e.target.checked)}
                                />
                                <span style={{ fontSize: 12.5, color: 'var(--a-text-muted)' }}>{value ? 'On' : 'Off'}</span>
                            </label>
                        )}

                        {field.type === 'select' && (
                            <select
                                className={styles.formSelect}
                                value={value ?? field.options?.[0] ?? ''}
                                onChange={(e) => set(field.key, e.target.value)}
                            >
                                {field.options?.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        )}

                        {(field.type === 'image' || field.type === 'video') && (
                            <MediaPicker
                                value={value}
                                accept={field.type}
                                onChange={(url) => set(field.key, url)}
                            />
                        )}

                        {field.type === 'richtext' && (
                            <RichTextEditor value={value ?? ''} onChange={(html) => set(field.key, html)} />
                        )}

                        {field.type === 'icon' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ color: 'var(--a-text-secondary)' }}><IconPreview name={value || ''} /></span>
                                <input
                                    className={styles.formInput}
                                    value={value ?? ''}
                                    placeholder="e.g. ShieldCheck, Warehouse, Globe"
                                    onChange={(e) => set(field.key, e.target.value)}
                                />
                            </div>
                        )}

                        {field.type === 'link' && (
                            <div className={styles.grid2}>
                                <input
                                    className={styles.formInput}
                                    placeholder="Label"
                                    value={value?.label ?? ''}
                                    onChange={(e) => set(field.key, { ...(value ?? {}), label: e.target.value })}
                                />
                                <input
                                    className={styles.formInput}
                                    placeholder="Link / URL"
                                    value={value?.href ?? ''}
                                    onChange={(e) => set(field.key, { ...(value ?? {}), href: e.target.value })}
                                />
                            </div>
                        )}

                        {field.type === 'anchor-ref' && (
                            <select
                                className={styles.formSelect}
                                value={value ?? ''}
                                onChange={(e) => set(field.key, e.target.value)}
                            >
                                <option value="">— choose a block on this page —</option>
                                {siblingAnchors.map((a) => (
                                    <option key={a.id} value={a.id}>{a.label} (#{a.id})</option>
                                ))}
                            </select>
                        )}

                        {field.type === 'list' && (
                            <ListField
                                itemSchema={field.itemSchema ?? []}
                                value={Array.isArray(value) ? value : []}
                                onChange={(rows) => set(field.key, rows)}
                                siblingAnchors={siblingAnchors}
                                depth={depth + 1}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
