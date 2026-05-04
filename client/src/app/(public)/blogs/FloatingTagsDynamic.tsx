'use client';

import styles from '@/components/core/blogs/FloatingTags/FloatingTags.module.css';

interface Tag { _id: string; label: string; slug: string; }

const ChevronIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export default function FloatingTagsDynamic({ tags }: { tags: Tag[] }) {
    if (!tags.length) return null;
    return (
        <div className={styles.floatingContainer}>
            <h3 className={styles.title}>Categories</h3>
            <div className={styles.tagList}>
                {tags.map((tag) => (
                    <button key={tag._id} className={styles.tagItem}>
                        <span className={styles.tagLabel}>{tag.label}</span>
                        <span className={styles.chevron}><ChevronIcon /></span>
                    </button>
                ))}
            </div>
        </div>
    );
}
