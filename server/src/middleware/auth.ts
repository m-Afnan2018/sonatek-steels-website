import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin';

export interface AuthRequest extends Request {
  admin?: IAdmin;
}

export async function protect(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Not authorized — no token' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };
    const admin = await Admin.findById(decoded.id).select('-password');
    if (!admin) {
      res.status(401).json({ message: 'Not authorized — admin not found' });
      return;
    }
    req.admin = admin;
    next();
  } catch {
    res.status(401).json({ message: 'Not authorized — invalid token' });
  }
}
