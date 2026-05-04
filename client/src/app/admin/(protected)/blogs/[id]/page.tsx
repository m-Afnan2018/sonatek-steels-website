'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import BlogForm, { BlogData } from '../BlogForm';
import styles from '../blogs.module.css';

export default function EditBlogPage() {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog]     = useState<BlogData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        adminApi.get(`/blogs/id/${id}`)
            .then((res) => {
                const b = res.data.blog;
                setBlog({ ...b, tags: (b.tags ?? []).map((t: { _id: string }) => t._id) });
            })
            .catch(() => setError('Blog post not found.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className={styles.empty}>Loading…</div>;
    if (error)   return <div className={styles.empty}>{error}</div>;
    if (!blog)   return null;

    return <BlogForm initial={blog} />;
}
