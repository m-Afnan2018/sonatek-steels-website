'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import ProductForm, { ProductData } from '../ProductForm';
import styles from '../products.module.css';

export default function EditProductPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        adminApi.get(`/products/${id}`)
            .then((res) => setProduct(res.data.product))
            .catch(() => setError('Product not found.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className={styles.empty}>Loading…</div>;
    if (error)   return <div className={styles.empty}>{error}</div>;
    if (!product) return null;

    return <ProductForm initial={product} />;
}
