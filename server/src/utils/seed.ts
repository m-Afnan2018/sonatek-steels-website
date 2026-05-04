import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from '../config/db';
import Admin from '../models/Admin';

async function seed(): Promise<void> {
  await connectDB();

  const existing = await Admin.findOne({ email: 'admin@sonateksteels.com' });
  if (existing) {
    console.log('Admin already exists — skipping seed.');
    process.exit(0);
  }

  await Admin.create({
    name: 'Super Admin',
    email: 'admin@sonateksteels.com',
    password: 'Admin@123456',
    role: 'superadmin',
  });

  console.log('✅  Admin created: admin@sonateksteels.com / Admin@123456');
  console.log('⚠️   Change the default password after first login!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
