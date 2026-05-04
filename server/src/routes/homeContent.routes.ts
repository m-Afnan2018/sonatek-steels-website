import { Router } from 'express';
import { protect } from '../middleware/auth';
import { getHomeContent, updateHomeContent } from '../controllers/homeContent.controller';

const router = Router();

router.get('/', getHomeContent);
router.put('/', protect, updateHomeContent);

export default router;
