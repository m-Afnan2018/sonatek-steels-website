import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { Request } from 'express';

export function createUpload(subfolder: string) {
    const dir = path.join(__dirname, '../../uploads', subfolder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const storage = multer.diskStorage({
        destination: (_req, _file, cb) => cb(null, dir),
        filename: (_req, file, cb) => {
            const ext = path.extname(file.originalname).toLowerCase();
            cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
        },
    });

    function fileFilter(
        _req: Request,
        file: Express.Multer.File,
        cb: multer.FileFilterCallback
    ) {
        const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowed.includes(ext)) cb(null, true);
        else cb(new Error('Only jpg, jpeg, png, webp files are allowed'));
    }

    return multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
}

// Default export keeps backward compatibility with product.routes.ts
export default createUpload('products');
