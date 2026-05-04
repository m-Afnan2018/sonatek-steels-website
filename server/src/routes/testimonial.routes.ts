import { Router } from 'express';
import { protect } from '../middleware/auth';
import {
    getTestimonials,
    getAllTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
} from '../controllers/testimonial.controller';

const router = Router();

router.get('/admin/all', protect, getAllTestimonials);
router.get('/',          getTestimonials);
router.post('/',         protect, createTestimonial);
router.put('/:id',       protect, updateTestimonial);
router.delete('/:id',    protect, deleteTestimonial);

export default router;
