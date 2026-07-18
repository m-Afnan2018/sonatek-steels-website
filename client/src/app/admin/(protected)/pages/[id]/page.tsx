'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import PageBuilder, { PageBuilderInitial } from '../PageBuilder';
import styles from '../pages.module.css';

export default function EditPagePage() {
    const { id } = useParams<{ id: string }>();
    const [initial, setInitial] = useState<PageBuilderInitial | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        adminApi.get(`/pages/id/${id}`)
            .then((res) => setInitial(res.data.page))
            .catch(() => setError('Page not found.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className={styles.empty}>Loading…</div>;
    if (error)   return <div className={styles.empty}>{error}</div>;
    if (!initial) return null;

    return <PageBuilder initial={initial} />;
}
