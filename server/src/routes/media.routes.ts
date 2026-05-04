import path from 'path';
import fs from 'fs';
import { Router } from 'express';
import multer from 'multer';
import { protect } from '../middleware/auth';
import { getMedia, uploadMedia, deleteMedia } from '../controllers/media.controller';

const uploadDir = path.join(__dirname, '../../uploads/media');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename:    (_req, file, cb) => {
        const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, unique + path.extname(file.originalname).toLowerCase());
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = /jpeg|jpg|png|webp|gif|mp4|webm|mov/;
        const ext = path.extname(file.originalname).toLowerCase().slice(1);
        if (allowed.test(file.mimetype) || allowed.test(ext)) cb(null, true);
        else cb(new Error('Only images (jpg, png, webp, gif) and videos (mp4, webm, mov) are allowed'));
    },
});

const router = Router();

router.get('/',       protect, getMedia);
router.post('/',      protect, upload.single('file'), uploadMedia);
router.delete('/:id', protect, deleteMedia);

export default router;
