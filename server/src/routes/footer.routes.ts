import { Router } from 'express';
import { protect } from '../middleware/auth';
import { getFooter, updateFooter } from '../controllers/footer.controller';

const router = Router();

router.get('/', getFooter);
router.put('/', protect, updateFooter);

export default router;
