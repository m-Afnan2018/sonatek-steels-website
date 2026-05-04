'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import TiptapLink from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { useState, useEffect, useCallback, useRef } from 'react';
import { adminApi } from '@/lib/adminApi';
import styles from './RichTextEditor.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface MediaItem { _id: string; url: string; originalName: string; mimetype: string; }

interface Props {
    value:        string;
    onChange:     (html: string) => void;
    placeholder?: string;
}

function Btn({ onClick, active, disabled, title, children }: {
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            title={title}
            disabled={disabled}
            className={`${styles.toolbarBtn}${active ? ` ${styles.toolbarBtnActive}` : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
    const [imgOpen, setImgOpen]       = useState(false);
    const [media, setMedia]           = useState<MediaItem[]>([]);
    const [selImg, setSelImg]         = useState('');
    const [uploading, setUploading]   = useState(false);
    const imgFileRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TiptapLink.configure({ openOnClick: false, autolink: true }),
            TiptapImage.configure({ inline: false }),
            Highlight,
            Placeholder.configure({ placeholder: placeholder ?? 'Start writing your blog post…' }),
            Color,
            TextStyle,
        ],
        content: value || '',
        onUpdate: ({ editor: e }) => onChange(e.getHTML()),
    });

    useEffect(() => {
        if (!editor || editor.isFocused) return;
        const cur = editor.getHTML();
        if (cur !== value && value !== undefined) editor.commands.setContent(value || '', { emitUpdate: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const loadMedia = useCallback(() => {
        adminApi.get('/media')
            .then((r) => setMedia((r.data.media ?? []).filter((m: MediaItem) => m.mimetype.startsWith('image/'))))
            .catch(() => {});
    }, []);

    useEffect(() => { if (imgOpen) { setSelImg(''); loadMedia(); } }, [imgOpen, loadMedia]);

    if (!editor) return null;
    const ed = editor; // narrowed const — TypeScript won't complain inside closures

    const words = ed.getText().trim().split(/\s+/).filter(Boolean).length;
    const chars = ed.getText().length;

    /* Icons live inside the function so JSX is unambiguously parsed */
    const IcBold      = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 010 8H6z"/><path d="M6 12h9a4 4 0 010 8H6z"/></svg>;
    const IcItalic    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>;
    const IcUnderline = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0012 0V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>;
    const IcStrike    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><path d="M17.5 5C17 3.5 15.5 3 14 3H10C7.8 3 6 4.8 6 7c0 3 2.5 3.5 4 4"/><path d="M6.5 19c.5 1.5 2 2 3.5 2h4c2.2 0 4-1.8 4-4 0-3-2.5-3.5-4-4"/></svg>;
    const IcCode      = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    const IcHL        = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
    const IcAlignL    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/></svg>;
    const IcAlignC    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>;
    const IcAlignR    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="21" y2="18"/></svg>;
    const IcUL        = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>;
    const IcOL        = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>;
    const IcQuote     = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>;
    const IcCB        = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></svg>;
    const IcHR        = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/></svg>;
    const IcLink      = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
    const IcUnlink    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71"/><path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71"/><line x1="8" y1="2" x2="8" y2="5"/><line x1="2" y1="8" x2="5" y2="8"/><line x1="16" y1="19" x2="16" y2="22"/><line x1="19" y1="16" x2="22" y2="16"/></svg>;
    const IcImg       = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
    const IcUndo      = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 00-4-4H4"/></svg>;
    const IcRedo      = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 014-4h12"/></svg>;
    const IcEraser    = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20H7L3 16l13-13 7 7-3 3"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;

    function headingVal() {
        if (ed.isActive('heading', { level: 1 })) return 'h1';
        if (ed.isActive('heading', { level: 2 })) return 'h2';
        if (ed.isActive('heading', { level: 3 })) return 'h3';
        return 'p';
    }

    function applyHeading(v: string) {
        if (v === 'p') ed.chain().focus().setParagraph().run();
        else ed.chain().focus().toggleHeading({ level: Number(v[1]) as 1 | 2 | 3 }).run();
    }

    function handleLink() {
        const prev = ed.getAttributes('link').href ?? '';
        const url  = window.prompt('Enter URL (blank to remove):', prev);
        if (url === null) return;
        if (!url) { ed.chain().focus().unsetLink().run(); return; }
        ed.chain().focus().setLink({ href: url, target: '_blank' }).run();
    }

    async function handleImgUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || uploading) return;
        if (imgFileRef.current) imgFileRef.current.value = '';
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await adminApi.post('/media', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            const item: MediaItem = res.data.media;
            setMedia((p) => [item, ...p]);
            setSelImg(item.url);
        } catch { } finally { setUploading(false); }
    }

    function insertImage() {
        if (!selImg) return;
        const full = selImg.startsWith('http') ? selImg : `${API_URL}${selImg}`;
        ed.chain().focus().setImage({ src: full }).run();
        setImgOpen(false);
    }

    return (
        <>
            <div className={styles.wrapper}>
                {/* Toolbar */}
                <div className={styles.toolbar}>
                    <select className={styles.headingSelect} value={headingVal()} onChange={(e) => applyHeading(e.target.value)}>
                        <option value="p">Paragraph</option>
                        <option value="h1">Heading 1</option>
                        <option value="h2">Heading 2</option>
                        <option value="h3">Heading 3</option>
                    </select>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Bold (Ctrl+B)"      active={ed.isActive('bold')}      onClick={() => ed.chain().focus().toggleBold().run()}>{IcBold}</Btn>
                        <Btn title="Italic (Ctrl+I)"    active={ed.isActive('italic')}    onClick={() => ed.chain().focus().toggleItalic().run()}>{IcItalic}</Btn>
                        <Btn title="Underline (Ctrl+U)" active={ed.isActive('underline')} onClick={() => ed.chain().focus().toggleUnderline().run()}>{IcUnderline}</Btn>
                        <Btn title="Strikethrough"      active={ed.isActive('strike')}    onClick={() => ed.chain().focus().toggleStrike().run()}>{IcStrike}</Btn>
                        <Btn title="Inline code"        active={ed.isActive('code')}      onClick={() => ed.chain().focus().toggleCode().run()}>{IcCode}</Btn>
                        <Btn title="Highlight"          active={ed.isActive('highlight')} onClick={() => ed.chain().focus().toggleHighlight().run()}>{IcHL}</Btn>
                    </div>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Align left"   active={ed.isActive({ textAlign: 'left' })}   onClick={() => ed.chain().focus().setTextAlign('left').run()}>{IcAlignL}</Btn>
                        <Btn title="Align center" active={ed.isActive({ textAlign: 'center' })} onClick={() => ed.chain().focus().setTextAlign('center').run()}>{IcAlignC}</Btn>
                        <Btn title="Align right"  active={ed.isActive({ textAlign: 'right' })}  onClick={() => ed.chain().focus().setTextAlign('right').run()}>{IcAlignR}</Btn>
                    </div>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Bullet list"  active={ed.isActive('bulletList')}  onClick={() => ed.chain().focus().toggleBulletList().run()}>{IcUL}</Btn>
                        <Btn title="Ordered list" active={ed.isActive('orderedList')} onClick={() => ed.chain().focus().toggleOrderedList().run()}>{IcOL}</Btn>
                    </div>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Blockquote"       active={ed.isActive('blockquote')} onClick={() => ed.chain().focus().toggleBlockquote().run()}>{IcQuote}</Btn>
                        <Btn title="Code block"       active={ed.isActive('codeBlock')}  onClick={() => ed.chain().focus().toggleCodeBlock().run()}>{IcCB}</Btn>
                        <Btn title="Horizontal rule"                                         onClick={() => ed.chain().focus().setHorizontalRule().run()}>{IcHR}</Btn>
                    </div>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Insert / edit link" active={ed.isActive('link')}    onClick={handleLink}>{IcLink}</Btn>
                        <Btn title="Remove link"        disabled={!ed.isActive('link')} onClick={() => ed.chain().focus().unsetLink().run()}>{IcUnlink}</Btn>
                        <Btn title="Insert image"                                           onClick={() => setImgOpen(true)}>{IcImg}</Btn>
                    </div>

                    <div className={styles.divider} />
                    <div className={styles.toolbarGroup}>
                        <Btn title="Undo (Ctrl+Z)"    disabled={!ed.can().undo()} onClick={() => ed.chain().focus().undo().run()}>{IcUndo}</Btn>
                        <Btn title="Redo (Ctrl+Y)"    disabled={!ed.can().redo()} onClick={() => ed.chain().focus().redo().run()}>{IcRedo}</Btn>
                        <Btn title="Clear formatting"                                  onClick={() => ed.chain().focus().clearNodes().unsetAllMarks().run()}>{IcEraser}</Btn>
                    </div>
                </div>

                {/* Editor content */}
                <div className={styles.editorScroll}>
                    <EditorContent editor={editor} />
                </div>

                {/* Status bar */}
                <div className={styles.statusBar}>
                    <span>{words} word{words !== 1 ? 's' : ''}</span>
                    <span>{chars} char{chars !== 1 ? 's' : ''}</span>
                    <span>~{Math.max(1, Math.round(words / 200))} min read</span>
                </div>
            </div>

            {/* Image picker modal */}
            {imgOpen && (
                <div className={styles.imgOverlay} onMouseDown={(e) => { if (e.target === e.currentTarget) setImgOpen(false); }}>
                    <div className={styles.imgModal}>
                        <div className={styles.imgModalHeader}>
                            <span className={styles.imgModalTitle}>Insert Image</span>
                            <button className={styles.imgModalClose} onClick={() => setImgOpen(false)}>✕</button>
                        </div>
                        <div className={styles.imgModalBody}>
                            <div
                                className={styles.imgUploadZone}
                                onClick={() => !uploading && imgFileRef.current?.click()}
                            >
                                <input ref={imgFileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImgUpload} />
                                {uploading ? '⏳  Uploading…' : '＋  Upload New Image'}
                            </div>
                            {media.length === 0 ? (
                                <div className={styles.imgEmpty}>No images yet. Upload one above.</div>
                            ) : (
                                <div className={styles.imgGrid}>
                                    {media.map((item) => {
                                        const full  = item.url.startsWith('http') ? item.url : `${API_URL}${item.url}`;
                                        const isSel = selImg === item.url;
                                        return (
                                            <div key={item._id} className={styles.imgItemWrap}>
                                                <div
                                                    className={`${styles.imgItem}${isSel ? ` ${styles.imgItemSelected}` : ''}`}
                                                    onClick={() => setSelImg(isSel ? '' : item.url)}
                                                >
                                                    <img src={full} alt={item.originalName} className={styles.imgThumb} />
                                                    <span className={styles.imgItemName}>{item.originalName}</span>
                                                </div>
                                                {isSel && <span className={styles.imgCheckmark}>✓</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        <div className={styles.imgModalFooter}>
                            <button className={styles.imgCancelBtn} onClick={() => setImgOpen(false)}>Cancel</button>
                            <button className={styles.imgSelectBtn} disabled={!selImg} onClick={insertImage}>Insert Image</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
