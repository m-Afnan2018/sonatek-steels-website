import { Router } from 'express';
import {
    getPages, getPageById,
    createPage, updatePage, deletePage,
    duplicatePage,
    getPageBySlug,
} from '../controllers/page.controller';
import { protect } from '../middleware/auth';

const router = Router();

// Admin (protect-gated) — registered before the public /:slug catch-all.
router.get('/admin/all',      protect, getPages);
router.get('/id/:id',         protect, getPageById);
router.post('/',              protect, createPage);
router.put('/:id',            protect, updatePage);
router.delete('/:id',         protect, deletePage);
router.post('/:id/duplicate', protect, duplicatePage);

// Public — Milestone B. Only ever returns status:'published' docs. Registered LAST.
router.get('/:slug', getPageBySlug);

export default router;
