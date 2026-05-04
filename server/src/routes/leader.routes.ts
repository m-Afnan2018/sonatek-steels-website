import { Router } from 'express';
import { protect } from '../middleware/auth';
import { createUpload } from '../middleware/upload';
import {
    getLeaders,
    getAllLeaders,
    createLeader,
    updateLeader,
    deleteLeader,
} from '../controllers/leader.controller';

const router = Router();
const upload = createUpload('leaders');

router.get('/admin/all', protect, getAllLeaders);
router.get('/',          getLeaders);
router.post('/',         protect, upload.single('image'), createLeader);
router.put('/:id',       protect, upload.single('image'), updateLeader);
router.delete('/:id',    protect, deleteLeader);

export default router;
