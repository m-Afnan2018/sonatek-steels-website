'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    DndContext, DragOverlay, PointerSensor, useSensor, useSensors,
    closestCenter, useDraggable, useDroppable, DragEndEvent, DragStartEvent,
} from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { adminApi } from '@/lib/adminApi';
import { BLOCK_REGISTRY, FAMILY_ORDER, getBlockDefinition } from '@/lib/blockRegistry';
import BlockFieldForm from '@/components/admin/BlockFieldForm';
import BlockErrorBoundary from '@/components/admin/BlockErrorBoundary';
import MediaPicker from '@/components/admin/MediaPicker/MediaPicker';
import styles from './PageBuilder.module.css';

interface CanvasBlock {
    uid: string;
    blockType: string;
    anchorId?: string;
    data: Record<string, any>;
}

export interface PageBuilderInitial {
    _id?: string;
    title?: string;
    slug?: string;
    status?: 'draft' | 'published';
    seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
    blocks?: { blockType: string; order: number; anchorId?: string; data: Record<string, any> }[];
}

let uidCounter = 0;
function makeUid() { uidCounter += 1; return `b${Date.now()}${uidCounter}`; }

// Cross-page block clipboard — localStorage (not React state) is what makes
// "copy on Page A, paste on Page B" work, since each page's editor is a
// fresh mount. Anchor IDs are intentionally dropped on copy: they must stay
// unique within a page, and blindly carrying one over risks colliding with
// an anchor already used on the destination page.
const CLIPBOARD_KEY = 'sonatek-admin-block-clipboard';
interface ClipboardBlock { blockType: string; data: Record<string, any> }

function readClipboardBlock(): ClipboardBlock | null {
    try {
        const raw = localStorage.getItem(CLIPBOARD_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.blockType === 'string') return parsed;
        return null;
    } catch { return null; }
}
function writeClipboardBlock(block: ClipboardBlock) {
    try { localStorage.setItem(CLIPBOARD_KEY, JSON.stringify(block)); } catch { /* storage unavailable — copy just won't persist */ }
}
function clearClipboardStorage() {
    try { localStorage.removeItem(CLIPBOARD_KEY); } catch { /* ignore */ }
}

const IconCopy = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
);
const IconPaste = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
);
const IconCheck = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

function slugify(s: string) {
    return s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}
// Keystroke-safe variant for the Slug field's own input: normalizes case and
// disallowed characters without trimming or collapsing hyphens, so a
// trailing "-" or space mid-typing isn't erased before the user can
// continue composing a multi-word slug. Full slugify() runs on blur/submit.
function slugifyLive(s: string) {
    return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-');
}

function PaletteItem({ blockKey, label, hint }: { blockKey: string; label: string; hint?: string }) {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: `palette-${blockKey}`,
        data: { origin: 'palette', blockKey },
    });
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className={styles.paletteItem}>
            <span className={styles.paletteItemLabel}>{label}</span>
            {hint && <span className={styles.paletteItemHint}>{hint}</span>}
        </div>
    );
}

function SortableCanvasItem({
    block, index, selected, onSelect, onRemove, onAnchorChange, onCopy, onPasteAfter, canPaste, justCopied,
}: {
    block: CanvasBlock;
    index: number;
    selected: boolean;
    onSelect: () => void;
    onRemove: () => void;
    onAnchorChange: (val: string) => void;
    onCopy: () => void;
    onPasteAfter: () => void;
    canPaste: boolean;
    justCopied: boolean;
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: block.uid,
        data: { origin: 'canvas' },
    });
    const def = getBlockDefinition(block.blockType);
    const style = { transform: CSS.Transform.toString(transform), transition };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`${styles.canvasItem} ${selected ? styles.selected : ''} ${isDragging ? styles.dragging : ''}`}
            onClick={onSelect}
        >
            <span className={styles.handle} {...listeners} {...attributes} onClick={(e) => e.stopPropagation()}>⠿</span>
            <span className={styles.idx}>{index + 1}</span>
            <div className={styles.itemMain}>
                <div className={styles.itemLabel}>{def?.label ?? block.blockType}</div>
                <input
                    className={styles.anchorInput}
                    placeholder="anchor id (optional)"
                    value={block.anchorId ?? ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => onAnchorChange(e.target.value)}
                />
            </div>
            <div className={styles.itemActions}>
                <button
                    type="button"
                    title="Copy this block (paste it on any page)"
                    className={styles.copyBtn}
                    onClick={(e) => { e.stopPropagation(); onCopy(); }}
                >
                    {justCopied ? <IconCheck /> : <IconCopy />}
                </button>
                {canPaste && (
                    <button
                        type="button"
                        title="Paste copied block after this one"
                        className={styles.pasteBtn}
                        onClick={(e) => { e.stopPropagation(); onPasteAfter(); }}
                    >
                        <IconPaste />
                    </button>
                )}
                <button type="button" title="Remove" onClick={(e) => { e.stopPropagation(); onRemove(); }}>×</button>
            </div>
        </div>
    );
}

export default function PageBuilder({ initial }: { initial?: PageBuilderInitial }) {
    const router = useRouter();
    const isEdit = !!initial?._id;

    const [title, setTitle] = useState(initial?.title ?? '');
    const [slug, setSlug] = useState(initial?.slug ?? '');
    const [slugTouched, setSlugTouched] = useState(isEdit);
    const [status, setStatus] = useState<'draft' | 'published'>(initial?.status ?? 'draft');
    const [seo, setSeo] = useState({
        metaTitle: initial?.seo?.metaTitle ?? '',
        metaDescription: initial?.seo?.metaDescription ?? '',
        ogImage: initial?.seo?.ogImage ?? '',
    });
    const [settingsOpen, setSettingsOpen] = useState(false);

    const [blocks, setBlocks] = useState<CanvasBlock[]>(
        () => (initial?.blocks ?? [])
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((b) => ({ uid: makeUid(), blockType: b.blockType, anchorId: b.anchorId, data: b.data ?? {} })),
    );
    const [selectedUid, setSelectedUid] = useState<string | null>(null);
    const [templates, setTemplates] = useState<{ _id: string; title: string; slug: string }[]>([]);
    const [applyingTemplate, setApplyingTemplate] = useState(false);
    useEffect(() => {
        if (isEdit) return; // template picker only makes sense when starting a fresh page
        adminApi.get('/pages/admin/all', { params: { limit: 50 } })
            .then((r) => setTemplates(r.data.pages ?? []))
            .catch(() => {});
    }, [isEdit]);

    async function applyTemplate(pageId: string) {
        if (!pageId) return;
        if (blocks.length > 0 && !confirm('This replaces the current block canvas with the template\'s blocks. Continue?')) return;
        setApplyingTemplate(true);
        try {
            const res = await adminApi.get(`/pages/id/${pageId}`);
            const src = res.data.page;
            const cloned: CanvasBlock[] = (src?.blocks ?? [])
                .slice()
                .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
                .map((b: { blockType: string; anchorId?: string; data: Record<string, any> }) => ({
                    uid: makeUid(),
                    blockType: b.blockType,
                    anchorId: b.anchorId,
                    data: JSON.parse(JSON.stringify(b.data ?? {})),
                }));
            setBlocks(cloned);
            setSelectedUid(null);
        } catch { } finally { setApplyingTemplate(false); }
    }
    const [blockPreviewMode, setBlockPreviewMode] = useState(false);
    useEffect(() => { setBlockPreviewMode(false); }, [selectedUid]);
    const [previewMode, setPreviewMode] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [activeDragLabel, setActiveDragLabel] = useState<string | null>(null);
    const [paletteSearch, setPaletteSearch] = useState('');
    const [collapsedFamilies, setCollapsedFamilies] = useState<Set<string>>(new Set());

    const [clipboard, setClipboard] = useState<ClipboardBlock | null>(null);
    const [justCopiedUid, setJustCopiedUid] = useState<string | null>(null);
    useEffect(() => { setClipboard(readClipboardBlock()); }, []);
    const clipboardDef = clipboard ? getBlockDefinition(clipboard.blockType) : undefined;
    const canPaste = !!clipboard && !!clipboardDef;

    function copyBlock(block: CanvasBlock) {
        const payload: ClipboardBlock = { blockType: block.blockType, data: JSON.parse(JSON.stringify(block.data)) };
        writeClipboardBlock(payload);
        setClipboard(payload);
        setJustCopiedUid(block.uid);
        setTimeout(() => setJustCopiedUid((u) => (u === block.uid ? null : u)), 1500);
    }

    function pasteBlock(afterUid?: string) {
        if (!clipboard || !clipboardDef) return;
        const newBlock: CanvasBlock = {
            uid: makeUid(),
            blockType: clipboard.blockType,
            data: JSON.parse(JSON.stringify(clipboard.data)),
        };
        setBlocks((prev) => {
            if (!afterUid) return [...prev, newBlock];
            const idx = prev.findIndex((b) => b.uid === afterUid);
            if (idx === -1) return [...prev, newBlock];
            const next = [...prev];
            next.splice(idx + 1, 0, newBlock);
            return next;
        });
        setSelectedUid(newBlock.uid);
    }

    function clearClipboard() {
        clearClipboardStorage();
        setClipboard(null);
    }

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
    const { setNodeRef: setCanvasDropRef } = useDroppable({ id: 'canvas-container' });

    const siblingAnchors = blocks
        .filter((b) => b.anchorId)
        .map((b) => ({ id: b.anchorId as string, label: getBlockDefinition(b.blockType)?.label ?? b.blockType }));

    function handleDragStart(event: DragStartEvent) {
        const origin = event.active.data.current?.origin;
        if (origin === 'palette') {
            const def = getBlockDefinition(event.active.data.current?.blockKey);
            setActiveDragLabel(def?.label ?? null);
        } else {
            const b = blocks.find((x) => x.uid === event.active.id);
            setActiveDragLabel(b ? (getBlockDefinition(b.blockType)?.label ?? b.blockType) : null);
        }
    }

    function handleDragEnd(event: DragEndEvent) {
        setActiveDragLabel(null);
        const { active, over } = event;
        if (!over) return;

        if (active.data.current?.origin === 'palette') {
            const blockKey = active.data.current?.blockKey as string;
            const def = getBlockDefinition(blockKey);
            if (!def) return;
            const newBlock: CanvasBlock = {
                uid: makeUid(),
                blockType: blockKey,
                data: JSON.parse(JSON.stringify(def.defaultData)),
            };
            setBlocks((prev) => {
                const overIndex = prev.findIndex((b) => b.uid === over.id);
                const insertAt = overIndex === -1 ? prev.length : overIndex + 1;
                const next = [...prev];
                next.splice(insertAt, 0, newBlock);
                return next;
            });
            setSelectedUid(newBlock.uid);
            return;
        }

        if (active.id !== over.id) {
            setBlocks((prev) => {
                const oldIndex = prev.findIndex((b) => b.uid === active.id);
                const newIndex = prev.findIndex((b) => b.uid === over.id);
                if (oldIndex === -1 || newIndex === -1) return prev;
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    }

    function addBlockToEnd(blockKey: string) {
        const def = getBlockDefinition(blockKey);
        if (!def) return;
        const newBlock: CanvasBlock = { uid: makeUid(), blockType: blockKey, data: JSON.parse(JSON.stringify(def.defaultData)) };
        setBlocks((prev) => [...prev, newBlock]);
        setSelectedUid(newBlock.uid);
    }

    function removeBlock(uid: string) {
        setBlocks((prev) => prev.filter((b) => b.uid !== uid));
        if (selectedUid === uid) setSelectedUid(null);
    }

    function updateBlockData(uid: string, data: Record<string, any>) {
        setBlocks((prev) => prev.map((b) => (b.uid === uid ? { ...b, data } : b)));
    }

    function updateBlockAnchor(uid: string, anchorId: string) {
        setBlocks((prev) => prev.map((b) => (b.uid === uid ? { ...b, anchorId: anchorId || undefined } : b)));
    }

    async function handleSave() {
        if (!title.trim()) { setError('Title is required.'); return; }
        if (!slug.trim()) { setError('Slug is required.'); return; }
        setSaving(true); setError(''); setSuccess('');
        try {
            const payload = {
                title: title.trim(),
                slug: slugify(slug),
                status,
                seo,
                blocks: blocks.map((b, i) => ({ blockType: b.blockType, order: i, anchorId: b.anchorId, data: b.data })),
            };
            if (isEdit) {
                await adminApi.put(`/pages/${initial!._id}`, payload);
                setSuccess('Page saved.');
            } else {
                const res = await adminApi.post('/pages', payload);
                setSuccess('Page created. Redirecting…');
                setTimeout(() => router.push(`/admin/pages/${res.data.page._id}`), 900);
            }
        } catch (e: unknown) {
            const msg = (e as { response?: { data?: { message?: string } } })?.response?.data?.message;
            setError(msg || 'Something went wrong. Please try again.');
        } finally { setSaving(false); }
    }

    const selectedBlock = blocks.find((b) => b.uid === selectedUid);
    const selectedDef = selectedBlock ? getBlockDefinition(selectedBlock.blockType) : undefined;

    function toggleFamily(family: string) {
        setCollapsedFamilies((prev) => {
            const next = new Set(prev);
            if (next.has(family)) next.delete(family); else next.add(family);
            return next;
        });
    }

    const paletteQuery = paletteSearch.trim().toLowerCase();
    const filteredByFamily = FAMILY_ORDER.map((family) => ({
        family,
        items: BLOCK_REGISTRY.filter((def) => def.family === family && (
            !paletteQuery
            || def.label.toLowerCase().includes(paletteQuery)
            || (def.hint ?? '').toLowerCase().includes(paletteQuery)
        )),
    })).filter((g) => g.items.length > 0);

    return (
        <div className={styles.page}>
            <div className={styles.topRow}>
                <Link href="/admin/pages" className={styles.backLink}>← Pages</Link>
                <div className={styles.topField}>
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            if (!slugTouched) setSlug(slugify(e.target.value));
                        }}
                        placeholder="e.g. Marine Grade Steel Sheets"
                    />
                </div>
                <div className={`${styles.topField} ${styles.slugField}`}>
                    <label>Slug</label>
                    <input
                        value={slug}
                        onChange={(e) => { setSlugTouched(true); setSlug(slugifyLive(e.target.value)); }}
                        onBlur={() => setSlug((s) => slugify(s))}
                        placeholder="auto-generated"
                    />
                </div>
                {!isEdit && templates.length > 0 && (
                    <div className={styles.topField}>
                        <label>Start from Template</label>
                        <select
                            defaultValue=""
                            disabled={applyingTemplate}
                            onChange={(e) => { applyTemplate(e.target.value); e.target.value = ''; }}
                        >
                            <option value="">Blank page</option>
                            {templates.map((t) => (
                                <option key={t._id} value={t._id}>{t.title} (/{t.slug})</option>
                            ))}
                        </select>
                    </div>
                )}
                <div className={styles.topField}>
                    <label>Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}>
                        <option value="draft">Draft</option>
                        <option value="published">Published (flag only — no public route yet)</option>
                    </select>
                </div>
                <div className={styles.spacer} />
                <div className={styles.actions}>
                    {error && <span className={styles.error}>{error}</span>}
                    {success && <span className={styles.success}>{success}</span>}
                    <button type="button" className={styles.previewBtn} onClick={() => setSettingsOpen(true)}>
                        Page settings
                    </button>
                    <button
                        type="button"
                        className={`${styles.previewBtn} ${previewMode ? styles.active : ''}`}
                        onClick={() => setPreviewMode((p) => !p)}
                    >
                        {previewMode ? 'Back to editing' : 'Preview'}
                    </button>
                    <button type="button" className={styles.saveBtn} disabled={saving} onClick={handleSave}>
                        {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create page'}
                    </button>
                </div>
            </div>

            {settingsOpen && (
                <div className={styles.modalOverlay} onMouseDown={(e) => { if (e.target === e.currentTarget) setSettingsOpen(false); }}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span className={styles.modalTitle}>Page settings</span>
                            <button className={styles.modalClose} onClick={() => setSettingsOpen(false)}>✕</button>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.modalField}>
                                <label>SEO title</label>
                                <input
                                    value={seo.metaTitle}
                                    placeholder={title || 'Falls back to the page title'}
                                    onChange={(e) => setSeo((p) => ({ ...p, metaTitle: e.target.value }))}
                                />
                            </div>
                            <div className={styles.modalField}>
                                <label>SEO description</label>
                                <textarea
                                    value={seo.metaDescription}
                                    placeholder="Shown in search results — aim for 150–160 characters"
                                    onChange={(e) => setSeo((p) => ({ ...p, metaDescription: e.target.value }))}
                                />
                            </div>
                            <div className={styles.modalField}>
                                <label>Social share image (og:image)</label>
                                <MediaPicker value={seo.ogImage} accept="image" onChange={(url) => setSeo((p) => ({ ...p, ogImage: url }))} />
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <button className={styles.saveBtn} onClick={() => setSettingsOpen(false)}>Done</button>
                        </div>
                    </div>
                </div>
            )}

            {previewMode ? (
                <div className={styles.previewArea}>
                    {blocks.length === 0 ? (
                        <div className={styles.previewEmpty}>Nothing to preview yet — add some blocks first.</div>
                    ) : (
                        blocks.map((b) => {
                            const def = getBlockDefinition(b.blockType);
                            if (!def) return null;
                            const Cmp = def.component;
                            return (
                                <BlockErrorBoundary key={b.uid} label={def.label}>
                                    <div id={b.anchorId}>
                                        <Cmp {...b.data} />
                                    </div>
                                </BlockErrorBoundary>
                            );
                        })
                    )}
                </div>
            ) : (
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                    <div className={styles.workArea}>
                        <aside className={styles.palette}>
                            <div className={styles.paletteHead}>
                                {clipboard && (
                                    <div className={styles.clipboardBar}>
                                        <span className={styles.clipboardLabel}>
                                            <IconCopy />
                                            {clipboardDef ? `Copied: ${clipboardDef.label}` : `Copied block (type no longer exists)`}
                                        </span>
                                        <div className={styles.clipboardActions}>
                                            {canPaste && (
                                                <button type="button" onClick={() => pasteBlock()}>
                                                    <IconPaste /> Paste at end
                                                </button>
                                            )}
                                            <button type="button" onClick={clearClipboard} title="Clear clipboard">✕</button>
                                        </div>
                                    </div>
                                )}
                                <p className={styles.paletteHint}>Drag a block in, or click to add to the end.</p>
                                <input
                                    className={styles.paletteSearch}
                                    type="text"
                                    placeholder={`Search ${BLOCK_REGISTRY.length} blocks…`}
                                    value={paletteSearch}
                                    onChange={(e) => setPaletteSearch(e.target.value)}
                                />
                            </div>
                            <div className={styles.paletteScroll}>
                                {filteredByFamily.length === 0 && (
                                    <p className={styles.paletteEmpty}>No blocks match "{paletteSearch}".</p>
                                )}
                                {filteredByFamily.map(({ family, items }) => {
                                    const collapsed = collapsedFamilies.has(family);
                                    return (
                                        <div key={family} className={styles.familyGroup}>
                                            <button type="button" className={styles.familyHeader} onClick={() => toggleFamily(family)}>
                                                <span>{family}</span>
                                                <span className={styles.familyMeta}>
                                                    {items.length} <span className={styles.familyChevron}>{collapsed ? '▸' : '▾'}</span>
                                                </span>
                                            </button>
                                            {!collapsed && items.map((def) => (
                                                <div key={def.key} onClick={() => addBlockToEnd(def.key)}>
                                                    <PaletteItem blockKey={def.key} label={def.label} hint={def.hint} />
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </aside>

                        <div className={styles.canvas} ref={setCanvasDropRef}>
                            {blockPreviewMode && selectedBlock && selectedDef ? (
                                <BlockErrorBoundary label={selectedDef.label}>
                                    <div className={styles.blockPreviewWrap} id={selectedBlock.anchorId}>
                                        <selectedDef.component {...selectedBlock.data} />
                                    </div>
                                </BlockErrorBoundary>
                            ) : blocks.length === 0 ? (
                                <div className={styles.canvasEmpty}>Drag a component here, or click one on the left</div>
                            ) : (
                                <SortableContext items={blocks.map((b) => b.uid)} strategy={verticalListSortingStrategy}>
                                    <div className={styles.canvasList}>
                                        {blocks.map((b, i) => (
                                            <SortableCanvasItem
                                                key={b.uid}
                                                block={b}
                                                index={i}
                                                selected={b.uid === selectedUid}
                                                onSelect={() => setSelectedUid(b.uid)}
                                                onRemove={() => removeBlock(b.uid)}
                                                onAnchorChange={(val) => updateBlockAnchor(b.uid, val)}
                                                onCopy={() => copyBlock(b)}
                                                onPasteAfter={() => pasteBlock(b.uid)}
                                                canPaste={canPaste}
                                                justCopied={justCopiedUid === b.uid}
                                            />
                                        ))}
                                    </div>
                                </SortableContext>
                            )}
                        </div>

                        {selectedBlock && selectedDef && (
                            <aside className={styles.editorPanel}>
                                <div className={styles.editorHeader}>
                                    <span className={styles.editorTitle}>{selectedDef.label}</span>
                                    <button className={styles.editorClose} onClick={() => setSelectedUid(null)}>✕</button>
                                </div>
                                <button
                                    type="button"
                                    className={`${styles.livePreviewBtn} ${blockPreviewMode ? styles.active : ''}`}
                                    onClick={() => setBlockPreviewMode((p) => !p)}
                                >
                                    {blockPreviewMode ? '← Back to block list' : 'Live preview this block →'}
                                </button>
                                <BlockFieldForm
                                    fields={selectedDef.fields}
                                    data={selectedBlock.data}
                                    onChange={(data) => updateBlockData(selectedBlock.uid, data)}
                                    siblingAnchors={siblingAnchors.filter((a) => a.id !== selectedBlock.anchorId)}
                                />
                            </aside>
                        )}
                    </div>

                    <DragOverlay>
                        {activeDragLabel ? <div className={styles.paletteItem} style={{ cursor: 'grabbing' }}>{activeDragLabel}</div> : null}
                    </DragOverlay>
                </DndContext>
            )}
        </div>
    );
}
