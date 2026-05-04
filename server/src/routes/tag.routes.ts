import { Router } from 'express';
import { getTags, createTag, deleteTag } from '../controllers/tag.controller';
import { protect } from '../middleware/auth';

const router = Router();

router.get('/',       getTags);
router.post('/',      protect, createTag);
router.delete('/:id', protect, deleteTag);

export default router;
