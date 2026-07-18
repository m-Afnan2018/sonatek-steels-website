import { Router } from 'express';
import { protect } from '../middleware/auth';
import { getNavbar, updateNavbar } from '../controllers/navbar.controller';

const router = Router();

router.get('/', getNavbar);
router.put('/', protect, updateNavbar);

export default router;
