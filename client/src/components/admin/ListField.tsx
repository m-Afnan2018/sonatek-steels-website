'use client';

import { useState } from 'react';
import {
    DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { BlockFieldSchema } from '@/lib/blockRegistry';
import BlockFieldForm, { AnchorOption } from '@/components/admin/BlockFieldForm';
import styles from './ListField.module.css';

interface Props {
    itemSchema: BlockFieldSchema[];
    value: Record<string, any>[];
    onChange: (rows: Record<string, any>[]) => void;
    siblingAnchors?: AnchorOption[];
    /** Nesting depth (0 = top level). Set automatically by BlockFieldForm when a list field contains another list field, so nested rows can be visually indented. */
    depth?: number;
}

const LABEL_KEYS = ['label', 'title', 'heading', 'name', 'question'];

function deriveLabel(row: Record<string, any>, itemSchema: BlockFieldSchema[]): string {
    for (const key of LABEL_KEYS) {
        if (!itemSchema.some((f) => f.key === key)) continue;
        const v = row?.[key];
        if (typeof v === 'string' && v.trim()) return v.trim();
    }
    return '';
}

function emptyRow(itemSchema: BlockFieldSchema[]): Record<string, any> {
    const row: Record<string, any> = {};
    for (const f of itemSchema) row[f.key] = f.type === 'number' ? 0 : '';
    return row;
}

// Reorders a Set of indices the same way arrayMove would reorder the array
// itself, so collapse/expand state follows its row across a drag.
function remapIndexSet(indices: Set<number>, length: number, from: number, to: number): Set<number> {
    const order = arrayMove(Array.from({ length }, (_, i) => i), from, to);
    const next = new Set<number>();
    order.forEach((oldIdx, newIdx) => { if (indices.has(oldIdx)) next.add(newIdx); });
    return next;
}

interface SortableRowProps {
    id: string;
    idx: number;
    label: string;
    isCollapsed: boolean;
    hasNestedList: boolean;
    itemSchema: BlockFieldSchema[];
    row: Record<string, any>;
    siblingAnchors: AnchorOption[];
    depth: number;
    onToggle: () => void;
    onRemove: () => void;
    onUpdate: (rowData: Record<string, any>) => void;
}

function SortableRow({
    id, idx, label, isCollapsed, hasNestedList, itemSchema, row, siblingAnchors, depth, onToggle, onRemove, onUpdate,
}: SortableRowProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = { transform: CSS.Transform.toString(transform), transition };

    return (
        <div ref={setNodeRef} style={style} className={`${styles.row} ${isDragging ? styles.dragging : ''}`}>
            <div className={styles.rowHeader}>
                <span className={styles.dragHandle} title="Drag to reorder" {...listeners} {...attributes}>⠿</span>
                {hasNestedList && (
                    <button
                        type="button"
                        className={styles.collapseBtn}
                        onClick={onToggle}
                        aria-label={isCollapsed ? 'Expand' : 'Collapse'}
                    >
                        {isCollapsed ? '▸' : '▾'}
                    </button>
                )}
                <div className={styles.rowIndex}>
                    #{idx + 1}{label && <span className={styles.rowLabel}> — {label}</span>}
                </div>
                <button type="button" className={styles.removeBtn} title="Remove" onClick={onRemove}>×</button>
            </div>
            {!isCollapsed && (
                <BlockFieldForm
                    fields={itemSchema}
                    data={row}
                    onChange={onUpdate}
                    siblingAnchors={siblingAnchors}
                    depth={depth}
                />
            )}
        </div>
    );
}

export default function ListField({ itemSchema, value, onChange, siblingAnchors = [], depth = 0 }: Props) {
    const hasNestedList = itemSchema.some((f) => f.type === 'list');
    // Rows that contain their own nested lists start collapsed so the page
    // doesn't unfold into one giant wall of fields — you see the summary
    // label first, then expand only the row you're working on.
    const [collapsed, setCollapsed] = useState<Set<number>>(
        () => new Set(hasNestedList ? value.map((_, i) => i) : []),
    );
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
    const rowIds = value.map((_, i) => String(i));

    function toggle(idx: number) {
        setCollapsed((prev) => {
            const next = new Set(prev);
            if (next.has(idx)) next.delete(idx); else next.add(idx);
            return next;
        });
    }
    function updateRow(idx: number, rowData: Record<string, any>) {
        const next = [...value];
        next[idx] = rowData;
        onChange(next);
    }
    function removeRow(idx: number) {
        onChange(value.filter((_, i) => i !== idx));
        setCollapsed((prev) => {
            const next = new Set<number>();
            prev.forEach((i) => {
                if (i < idx) next.add(i);
                else if (i > idx) next.add(i - 1);
            });
            return next;
        });
    }
    function addRow() {
        onChange([...value, emptyRow(itemSchema)]);
    }
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const from = Number(active.id);
        const to = Number(over.id);
        onChange(arrayMove(value, from, to));
        setCollapsed((prev) => remapIndexSet(prev, value.length, from, to));
    }

    return (
        <div className={`${styles.wrap} ${depth > 0 ? styles.nestedWrap : ''}`}>
            {value.length === 0 && <p className={styles.empty}>No items yet.</p>}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={rowIds} strategy={verticalListSortingStrategy}>
                    {value.map((row, idx) => (
                        <SortableRow
                            key={rowIds[idx]}
                            id={rowIds[idx]}
                            idx={idx}
                            label={deriveLabel(row, itemSchema)}
                            isCollapsed={hasNestedList && collapsed.has(idx)}
                            hasNestedList={hasNestedList}
                            itemSchema={itemSchema}
                            row={row}
                            siblingAnchors={siblingAnchors}
                            depth={depth}
                            onToggle={() => toggle(idx)}
                            onRemove={() => removeRow(idx)}
                            onUpdate={(rowData) => updateRow(idx, rowData)}
                        />
                    ))}
                </SortableContext>
            </DndContext>
            <button type="button" className={styles.addBtn} onClick={addRow}>+ Add item</button>
        </div>
    );
}
