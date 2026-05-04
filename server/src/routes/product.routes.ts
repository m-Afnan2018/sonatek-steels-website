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
import upload from '../middleware/upload';

const router = Router();

// Admin — registered before /:slugOrId to avoid Express matching 'admin' as a param
router.get('/admin/all', protect, getAllProducts);
router.post('/',         protect, upload.single('image'), createProduct);
router.put('/:id',       protect, upload.single('image'), updateProduct);
router.delete('/:id',    protect, deleteProduct);

// Public
router.get('/',          getProducts);
router.get('/:slugOrId', getProduct);

export default router;
