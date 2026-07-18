import { Router } from 'express';
import {
    getProducts,
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller';
import { protect } from '../middleware/auth';

const router = Router();

// Admin — registered before /:slugOrId to avoid Express matching 'admin' as a param
// Image is now a Media Library URL string (picked via MediaPicker), sent as
// plain JSON — no file upload middleware needed on this route anymore.
router.get('/admin/all', protect, getAllProducts);
router.post('/',         protect, createProduct);
router.put('/:id',       protect, updateProduct);
router.delete('/:id',    protect, deleteProduct);

// Public
router.get('/',          getProducts);
router.get('/:slugOrId', getProduct);

export default router;
