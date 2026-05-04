import { notFound } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function fetchBlog(slug: string) {
    try {
        const res = await fetch(`${API_URL}/api/blogs/${slug}`, { next: { revalidate: 60 } });
        if (!res.ok) return null;
        return (await res.json()).blog ?? null;
    } catch { return null; }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = await fetchBlog(slug);
    if (!blog) notFound();

    const imgUrl = blog.coverImage
        ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${API_URL}${blog.coverImage}`)
        : null;

    const date = new Date(blog.publishedAt ?? blog.createdAt)
        .toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

    return (
        <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
            {blog.tags?.length > 0 && (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {blog.tags.map((t: { _id: string; label: string }) => (
                        <span key={t._id} style={{ background: 'rgba(47,99,196,0.1)', color: '#2f63c4', padding: '3px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            {t.label}
                        </span>
                    ))}
                </div>
            )}

            <h1 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
                {blog.title}
            </h1>

            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#888', marginBottom: 32, flexWrap: 'wrap' }}>
                <span>{date}</span>
                <span>·</span>
                <span>{blog.author}</span>
                <span>·</span>
                <span>{blog.readTime} min read</span>
            </div>

            {imgUrl && (
                <img src={imgUrl} alt={blog.title}
                    style={{ width: '100%', maxHeight: 480, objectFit: 'cover', borderRadius: 10, marginBottom: 40 }} />
            )}

            {blog.excerpt && (
                <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, marginBottom: 32, fontStyle: 'italic', borderLeft: '3px solid #2f63c4', paddingLeft: 20 }}>
                    {blog.excerpt}
                </p>
            )}

            <div
                style={{ fontSize: 16, lineHeight: 1.8, color: '#333' }}
                dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
            />
        </main>
    );
}
