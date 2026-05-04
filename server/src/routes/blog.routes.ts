import { Router } from 'express';
import {
    getBlogs, getBlogBySlug,
    getAllBlogs, getBlogById,
    createBlog, updateBlog, deleteBlog,
} from '../controllers/blog.controller';
import { protect } from '../middleware/auth';
import { createUpload } from '../middleware/upload';

const blogUpload = createUpload('blogs');
const router = Router();

// Admin — registered before /:slug to prevent param collision
router.get('/admin/all', protect, getAllBlogs);
router.get('/id/:id',    protect, getBlogById);
router.post('/',         protect, blogUpload.single('coverImage'), createBlog);
router.put('/:id',       protect, blogUpload.single('coverImage'), updateBlog);
router.delete('/:id',    protect, deleteBlog);

// Public
router.get('/',      getBlogs);
router.get('/:slug', getBlogBySlug);

export default router;
