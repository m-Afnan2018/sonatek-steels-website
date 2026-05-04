'use client';

import { useEffect, useState, useCallback } from 'react';
import { adminApi } from '@/lib/adminApi';
import styles from './enquiries.module.css';

interface Enquiry {
    _id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    companyWebsite?: string;
    businessEmail: string;
    mobileNumber: string;
    country: string;
    enquiryType: string;
    message: string;
    status: 'new' | 'read' | 'replied' | 'closed';
    createdAt: string;
}

interface Stats { total: number; new: number; replied: number; closed: number; }

const STATUS_CLASS: Record<string, string> = {
    new: 'badgeNew', read: 'badgeRead', replied: 'badgeReplied', closed: 'badgeClosed',
};

const IconSearch  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconChevron = ({ open }: { open: boolean }) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.18s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>;
const IconTrash   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>;

function fmt(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function EnquiriesPage() {
    const [enquiries, setEnquiries]     = useState<Enquiry[]>([]);
    const [stats, setStats]             = useState<Stats>({ total: 0, new: 0, replied: 0, closed: 0 });
    const [loading, setLoading]         = useState(true);
    const [total, setTotal]             = useState(0);
    const [pages, setPages]             = useState(1);
    const [page, setPage]               = useState(1);
    const [search, setSearch]           = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter]   = useState('');
    const [expandedId, setExpandedId]   = useState<string | null>(null);
    const [updatingId, setUpdatingId]   = useState<string | null>(null);
    const [deletingId, setDeletingId]   = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(page), limit: '15' });
            if (search)       params.set('search', search);
            if (statusFilter) params.set('status', statusFilter);
            if (typeFilter)   params.set('enquiryType', typeFilter);
            const [listRes, statsRes] = await Promise.all([
                adminApi.get(`/enquiries?${params}`),
                adminApi.get('/enquiries/stats'),
            ]);
            setEnquiries(listRes.data.enquiries);
            setTotal(listRes.data.total);
            setPages(listRes.data.pages);
            setStats(statsRes.data);
        } finally {
            setLoading(false);
        }
    }, [page, search, statusFilter, typeFilter]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function handleStatusChange(id: string, status: string) {
        setUpdatingId(id);
        try {
            await adminApi.patch(`/enquiries/${id}/status`, { status });
            setEnquiries((prev) => prev.map((e) => e._id === id ? { ...e, status: status as Enquiry['status'] } : e));
            fetchData();
        } finally { setUpdatingId(null); }
    }

    async function handleDelete(id: string) {
        if (!confirm('Delete this enquiry permanently?')) return;
        setDeletingId(id);
        try {
            await adminApi.delete(`/enquiries/${id}`);
            setEnquiries((prev) => prev.filter((e) => e._id !== id));
            fetchData();
        } finally { setDeletingId(null); }
    }

    return (
        <div className={styles.page}>
            {/* Stats */}
            <div className={styles.statsRow}>
                {([['Total', stats.total, ''], ['New', stats.new, styles.statNew], ['Replied', stats.replied, styles.statReplied], ['Closed', stats.closed, styles.statClosed]] as [string, number, string][]).map(([label, value, mod]) => (
                    <div key={label} className={`${styles.statCard} ${mod}`}>
                        <span className={styles.statValue}>{value}</span>
                        <span className={styles.statLabel}>{label}</span>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className={styles.filterRow}>
                <div className={styles.searchWrap}>
                    <IconSearch />
                    <input type="text" className={styles.searchInput} placeholder="Search name, email, company…" value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                </div>
                <select className={styles.filterSelect} value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
                    <option value="">All Statuses</option>
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="closed">Closed</option>
                </select>
                <select className={styles.filterSelect} value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}>
                    <option value="">All Types</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                </select>
                <span className={styles.totalCount}>{total} enquir{total === 1 ? 'y' : 'ies'}</span>
            </div>

            {/* Table */}
            <div className={styles.tableWrap}>
                {loading ? (
                    <div className={styles.empty}>Loading…</div>
                ) : enquiries.length === 0 ? (
                    <div className={styles.empty}>No enquiries found.</div>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th><th>Company</th><th>Email</th>
                                <th>Type</th><th>Date</th><th>Status</th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquiries.map((enq) => (
                                <>
                                    <tr key={enq._id}
                                        className={`${styles.row} ${enq.status === 'new' ? styles.rowNew : ''}`}
                                        onClick={() => setExpandedId(expandedId === enq._id ? null : enq._id)}>
                                        <td className={styles.nameCell}>
                                            <IconChevron open={expandedId === enq._id} />
                                            {enq.firstName} {enq.lastName}
                                        </td>
                                        <td>{enq.companyName}</td>
                                        <td className={styles.emailCell}>{enq.businessEmail}</td>
                                        <td><span className={styles.typeBadge}>{enq.enquiryType}</span></td>
                                        <td>{fmt(enq.createdAt)}</td>
                                        <td onClick={(e) => e.stopPropagation()}>
                                            <select
                                                className={`${styles.statusSelect} ${styles[STATUS_CLASS[enq.status]]}`}
                                                value={enq.status}
                                                disabled={updatingId === enq._id}
                                                onChange={(e) => handleStatusChange(enq._id, e.target.value)}>
                                                <option value="new">New</option>
                                                <option value="read">Read</option>
                                                <option value="replied">Replied</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </td>
                                        <td onClick={(e) => e.stopPropagation()}>
                                            <button className={styles.deleteBtn} disabled={deletingId === enq._id}
                                                onClick={() => handleDelete(enq._id)}><IconTrash /></button>
                                        </td>
                                    </tr>
                                    {expandedId === enq._id && (
                                        <tr key={`${enq._id}-d`} className={styles.detailRow}>
                                            <td colSpan={7}>
                                                <div className={styles.detailBox}>
                                                    <div className={styles.detailGrid}>
                                                        <div><span className={styles.detailLabel}>Mobile</span><span>{enq.mobileNumber}</span></div>
                                                        <div><span className={styles.detailLabel}>Country</span><span>{enq.country}</span></div>
                                                        {enq.companyWebsite && <div><span className={styles.detailLabel}>Website</span><span>{enq.companyWebsite}</span></div>}
                                                    </div>
                                                    <div className={styles.detailMessage}>
                                                        <span className={styles.detailLabel}>Message</span>
                                                        <p>{enq.message}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {pages > 1 && (
                <div className={styles.pagination}>
                    <button className={styles.pageBtn} disabled={page === 1} onClick={() => setPage(page - 1)}>← Prev</button>
                    <span className={styles.pageInfo}>Page {page} of {pages}</span>
                    <button className={styles.pageBtn} disabled={page === pages} onClick={() => setPage(page + 1)}>Next →</button>
                </div>
            )}
        </div>
    );
}
