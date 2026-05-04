'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import RichTextEditor from '@/components/admin/RichTextEditor/RichTextEditor';
import styles from './blogs.module.css';

interface Tag { _id: string; label: string; slug: string; }

export interface BlogData {
    _id?: string;
    title: string; slug: string; excerpt: string; content: string;
    author: string; readTime: number;
    isFeatured: boolean; isPublished: boolean;
    coverImage?: string; tags: string[];
}

function slugify(s: string) {
    return s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function BlogForm({ initial }: { initial?: Partial<BlogData> }) {
    const router = useRouter();
    const isEdit = !!initial?._id;

    const [form, setForm] = useState<BlogData>({
        title:       initial?.title       ?? '',
        slug:        initial?.slug        ?? '',
        excerpt:     initial?.excerpt     ?? '',
        content:     initial?.content     ?? '',
        author:      initial?.author      ?? '',
        readTime:    initial?.readTime    ?? 3,
        isFeatured:  initial?.isFeatured  ?? false,
        isPublished: initial?.isPublished ?? false,
        coverImage:  initial?.coverImage,
        tags:        initial?.tags        ?? [],
    });

    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [saving, setSaving]   = useState(false);
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        adminApi.get('/tags').then((r) => setAllTags(r.data.tags ?? [])).catch(() => {});
    }, []);

    function toggleTag(id: string) {
        setForm((p) => ({
            ...p,
            tags: p.tags.includes(id) ? p.tags.filter((t) => t !== id) : [...p.tags, id],
        }));
    }

    async function handleSubmit() {
        if (!form.title.trim()) { setError('Title is required.'); return; }
        if (!form.slug.trim())  { setError('Slug is required.');  return; }
        setSaving(true); setError(''); setSuccess('');
        try {
            const fd = new FormData();
            fd.append('title',       form.title);
            fd.append('slug',        form.slug);
            fd.append('excerpt',     form.excerpt);
            fd.append('content',     form.content);
            fd.append('author',      form.author);
            fd.append('readTime',    String(form.readTime));
            fd.append('isFeatured',  String(form.isFeatured));
            fd.append('isPublished', String(form.isPublished));
            fd.append('tags',        JSON.stringify(form.tags));
            if (form.coverImage !== undefined) fd.append('coverImage', form.coverImage);

            const cfg = { headers: { 'Content-Type': 'multipart/form-data' } };
            if (isEdit) {
                await adminApi.put(`/blogs/${initial!._id}`, fd, cfg);
                setSuccess('Post updated successfully.');
            } else {
                await adminApi.post('/blogs', fd, cfg);
                setSuccess('Post created. Redirecting…');
                setTimeout(() => router.push('/admin/blogs'), 1200);
            }
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Something went wrong. Please try again.');
        } finally { setSaving(false); }
    }

    return (
        <div className={styles.formPage}>
            <div className={styles.formHeader}>
                <Link href="/admin/blogs" className={styles.backLink}>← Blogs</Link>
                <h2 className={styles.formTitle}>{isEdit ? 'Edit Post' : 'New Post'}</h2>
            </div>

            {/* Basic info */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Basic Information</div>
                <div className={styles.grid2}>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Title *</label>
                        <input className={styles.formInput} value={form.title}
                            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value, slug: p.slug || slugify(e.target.value) }))}
                            placeholder="e.g. Basics of Steel Grades" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Slug *</label>
                        <input className={styles.formInput} value={form.slug}
                            onChange={(e) => setForm((p) => ({ ...p, slug: slugify(e.target.value) }))}
                            placeholder="auto-generated" />
                        <span className={styles.formHint}>URL: /blogs/{form.slug || '…'}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Author</label>
                        <input className={styles.formInput} value={form.author}
                            onChange={(e) => setForm((p) => ({ ...p, author: e.target.value }))}
                            placeholder="e.g. Sonatek Editorial" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Read Time (min)</label>
                        <input className={styles.formInput} type="number" min={1} max={60} value={form.readTime}
                            onChange={(e) => setForm((p) => ({ ...p, readTime: Number(e.target.value) }))} />
                        <span className={styles.formHint}>The editor counts words automatically — update this if needed.</span>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                        <label className={styles.formLabel}>Excerpt</label>
                        <textarea className={styles.formTextarea} value={form.excerpt}
                            onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
                            placeholder="Short summary shown on the blog listing page" />
                    </div>
                </div>
            </div>

            {/* Rich text editor */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Content</div>
                <RichTextEditor
                    value={form.content}
                    onChange={(html) => setForm((p) => ({ ...p, content: html }))}
                    placeholder="Start writing your blog post here…"
                />
            </div>

            {/* Cover image */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Cover Image</div>
                <MediaPicker
                    accept="image"
                    value={form.coverImage}
                    onChange={(url) => setForm((p) => ({ ...p, coverImage: url || undefined }))}
                />
            </div>

            {/* Tags */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Tags / Categories</div>
                {allTags.length === 0
                    ? <p className={styles.noTags}>No tags yet. <Link href="/admin/tags" className={styles.emptyLink}>Create tags →</Link></p>
                    : (
                        <div className={styles.tagGrid}>
                            {allTags.map((tag) => {
                                const checked = form.tags.includes(tag._id);
                                return (
                                    <label key={tag._id} className={`${styles.tagCheckbox}${checked ? ` ${styles.checked}` : ''}`}>
                                        <input type="checkbox" checked={checked} onChange={() => toggleTag(tag._id)} />
                                        {tag.label}
                                    </label>
                                );
                            })}
                        </div>
                    )
                }
            </div>

            {/* Visibility */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Visibility</div>
                <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                        <div className={styles.toggleRow}>
                            <input type="checkbox" id="isPublished" checked={form.isPublished}
                                onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))} />
                            <label htmlFor="isPublished" className={styles.toggleLabel}>
                                {form.isPublished ? 'Published — visible on website' : 'Draft — hidden from public'}
                            </label>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.toggleRow}>
                            <input type="checkbox" id="isFeatured" checked={form.isFeatured}
                                onChange={(e) => setForm((p) => ({ ...p, isFeatured: e.target.checked }))} />
                            <label htmlFor="isFeatured" className={styles.toggleLabel}>
                                {form.isFeatured ? 'Featured — shown in hero slot' : 'Not featured'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.formFooter}>
                <button className={styles.saveBtn} disabled={saving} onClick={handleSubmit}>
                    {saving ? 'Saving…' : isEdit ? 'Update Post' : 'Create Post'}
                </button>
                <Link href="/admin/blogs" className={styles.cancelLink}>Cancel</Link>
                {error   && <span className={styles.formError}>{error}</span>}
                {success && <span className={styles.formSuccess}>{success}</span>}
            </div>
        </div>
    );
}
