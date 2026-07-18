import type { Metadata } from "next";
import { getBlockDefinition } from "@/lib/blockRegistry";
import { resolveBlockData } from "@/lib/cmsPage";
import BlockErrorBoundary from "@/components/admin/BlockErrorBoundary";
import LegacyHome from "./page.legacy";

// One-line restore: set this back to false to instantly revert "/" to the
// original hardcoded Home (page.legacy.tsx, untouched). The page also falls
// back to Legacy automatically if no published "home" Page doc exists yet.
const BUILDER_HOME_ENABLED = true;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface CmsBlock {
    _id?: string;
    blockType: string;
    order: number;
    anchorId?: string;
    data: Record<string, any>;
}
interface CmsPage {
    title: string;
    seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
    blocks: CmsBlock[];
}

async function fetchHomePage(): Promise<CmsPage | null> {
    if (!BUILDER_HOME_ENABLED) return null;
    try {
        const res = await fetch(`${API_URL}/api/pages/home`, { next: { revalidate: 60 } });
        if (!res.ok) return null;
        return (await res.json()).page ?? null;
    } catch { return null; }
}

export async function generateMetadata(): Promise<Metadata> {
    const page = await fetchHomePage();
    if (!page?.seo) return {};
    const { metaTitle, metaDescription, ogImage } = page.seo;
    return {
        ...(metaTitle ? { title: metaTitle } : {}),
        ...(metaDescription ? { description: metaDescription } : {}),
        ...(ogImage ? { openGraph: { images: [ogImage] } } : {}),
    };
}

export default async function Home() {
    const page = await fetchHomePage();
    if (!page) return <LegacyHome />;

    const sorted = [...page.blocks].sort((a, b) => a.order - b.order);
    const beyondIdx = sorted.findIndex((b) => b.blockType === 'beyond-business');

    return (
        <main>
            {sorted.map((block, i) => {
                const def = getBlockDefinition(block.blockType);
                if (!def) return null; // unknown blockType: skip, don't crash the page
                const Cmp = def.component;
                const rendered = (
                    <BlockErrorBoundary key={block._id ?? i} label={def.label}>
                        <div id={block.anchorId}>
                            <Cmp {...resolveBlockData(block.data, def.fields)} />
                        </div>
                    </BlockErrorBoundary>
                );
                // Preserve Home's sticky-scroll effect: BeyondBusiness pins while
                // everything after it scrolls over — a page-specific visual choice,
                // not a generic rule for every future CMS page.
                if (i === beyondIdx) {
                    return <div key={`sticky-${i}`} style={{ position: "sticky", top: 0, zIndex: 1 }}>{rendered}</div>;
                }
                if (beyondIdx !== -1 && i > beyondIdx) {
                    return <div key={`over-${i}`} style={{ position: "relative", zIndex: 2 }}>{rendered}</div>;
                }
                return rendered;
            })}
        </main>
    );
}
