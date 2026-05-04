import { Router } from 'express';
import {
    createEnquiry,
    getEnquiries,
    getEnquiry,
    updateStatus,
    deleteEnquiry,
    getEnquiryStats,
} from '../controllers/enquiry.controller';
import { protect } from '../middleware/auth';

const router = Router();

// Public — contact form submission
router.post('/', createEnquiry);

// Admin — protected
router.get('/stats',        protect, getEnquiryStats);
router.get('/',             protect, getEnquiries);
router.get('/:id',          protect, getEnquiry);
router.patch('/:id/status', protect, updateStatus);
router.delete('/:id',       protect, deleteEnquiry);

export default router;
