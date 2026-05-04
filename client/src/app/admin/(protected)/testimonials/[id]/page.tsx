'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import TestimonialForm, { TestimonialData } from '../TestimonialForm';
import styles from '../../blogs/blogs.module.css';

export default function EditTestimonialPage() {
    const { id } = useParams<{ id: string }>();
    const [item, setItem]       = useState<TestimonialData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        adminApi.get('/testimonials/admin/all?limit=200')
            .then((res) => {
                const found = (res.data.testimonials as TestimonialData[]).find((t) => t._id === id);
                if (found) setItem(found);
                else setError('Testimonial not found.');
            })
            .catch(() => setError('Failed to load.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className={styles.empty}>Loading…</div>;
    if (error)   return <div className={styles.empty}>{error}</div>;
    if (!item)   return null;

    return <TestimonialForm initial={item} />;
}
