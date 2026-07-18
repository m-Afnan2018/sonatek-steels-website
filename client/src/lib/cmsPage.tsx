import { getBlockDefinition, type BlockFieldSchema } from '@/lib/blockRegistry';
import BlockErrorBoundary from '@/components/admin/BlockErrorBoundary';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface CmsBlock {
    _id?: string;
    blockType: string;
    order: number;
    anchorId?: string;
    data: Record<string, any>;
}
export interface CmsPage {
    title: string;
    seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
    blocks: CmsBlock[];
}

export async function fetchCmsPage(slug: string): Promise<CmsPage | null> {
    try {
        const res = await fetch(`${API_URL}/api/pages/${slug}`, { next: { revalidate: 60 } });
        if (!res.ok) return null;
        return (await res.json()).page ?? null;
    } catch { return null; }
}

export function cmsMetadata(page: CmsPage | null) {
    if (!page?.seo) return {};
    const { metaTitle, metaDescription, ogImage } = page.seo;
    return {
        ...(metaTitle ? { title: metaTitle } : {}),
        ...(metaDescription ? { description: metaDescription } : {}),
        ...(ogImage ? { openGraph: { images: [ogImage] } } : {}),
    };
}

// MediaPicker stores uploaded files as a path relative to the API server
// (e.g. "/uploads/media/xyz.jpg"), not the Next.js app. Block components
// render image/video fields as-is, so on the public site they'd otherwise
// resolve against the wrong origin and 404. Walk each block's data against
// its field schema (including rows inside `list` fields) and prefix any
// relative image/video value with the API origin before handing it to the
// component.
function resolveMediaUrl(value: unknown): unknown {
    return typeof value === 'string' && value.startsWith('/') ? `${API_URL}${value}` : value;
}

export function resolveBlockData(data: Record<string, any>, fields: BlockFieldSchema[]): Record<string, any> {
    const resolved = { ...data };
    for (const field of fields) {
        if (field.type === 'image' || field.type === 'video') {
            resolved[field.key] = resolveMediaUrl(resolved[field.key]);
        } else if (field.type === 'list' && field.itemSchema && Array.isArray(resolved[field.key])) {
            resolved[field.key] = resolved[field.key].map((row: Record<string, any>) =>
                resolveBlockData(row, field.itemSchema!),
            );
        }
    }
    return resolved;
}

/** Generic block-list renderer — sequential, no page-specific layout tricks
 *  (Home's sticky/z-index scroll effect stays special-cased in its own page.tsx). */
export function renderCmsBlocks(page: CmsPage) {
    const sorted = [...page.blocks].sort((a, b) => a.order - b.order);
    return sorted.map((block, i) => {
        const def = getBlockDefinition(block.blockType);
        if (!def) return null; // unknown blockType: skip, don't crash the page
        const Cmp = def.component;
        return (
            <BlockErrorBoundary key={block._id ?? i} label={def.label}>
                <div id={block.anchorId}>
                    <Cmp {...resolveBlockData(block.data, def.fields)} />
                </div>
            </BlockErrorBoundary>
        );
    });
}
