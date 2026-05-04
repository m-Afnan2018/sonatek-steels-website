'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import LeaderForm, { LeaderData } from '../LeaderForm';
import styles from '../../blogs/blogs.module.css';

export default function EditLeaderPage() {
    const { id } = useParams<{ id: string }>();
    const [item, setItem]       = useState<LeaderData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        adminApi.get('/leadership/admin/all?limit=200')
            .then((res) => {
                const found = (res.data.leaders as LeaderData[]).find((l) => l._id === id);
                if (found) setItem(found);
                else setError('Member not found.');
            })
            .catch(() => setError('Failed to load.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className={styles.empty}>Loading…</div>;
    if (error)   return <div className={styles.empty}>{error}</div>;
    if (!item)   return null;

    return <LeaderForm initial={item} />;
}
