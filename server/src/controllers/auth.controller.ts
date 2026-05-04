import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';
import { AuthRequest } from '../middleware/auth';

function signToken(id: string): string {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  } as object);
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.comparePassword(password))) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = signToken(admin._id as string);
  res.json({
    token,
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    },
  });
}

export async function getMe(req: AuthRequest, res: Response): Promise<void> {
  res.json({
    admin: {
      id: req.admin!._id,
      name: req.admin!.name,
      email: req.admin!.email,
      role: req.admin!.role,
    },
  });
}

export async function changePassword(
  req: AuthRequest,
  res: Response
): Promise<void> {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    res.status(400).json({ message: 'Both passwords are required' });
    return;
  }
  if (newPassword.length < 8) {
    res.status(400).json({ message: 'New password must be at least 8 characters' });
    return;
  }

  const admin = await Admin.findById(req.admin!._id);
  if (!admin || !(await admin.comparePassword(currentPassword))) {
    res.status(401).json({ message: 'Current password is incorrect' });
    return;
  }

  admin.password = newPassword;
  await admin.save();
  res.json({ message: 'Password updated successfully' });
}
