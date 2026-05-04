import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';
import enquiryRoutes from './routes/enquiry.routes';
import productRoutes from './routes/product.routes';
import tagRoutes from './routes/tag.routes';
import blogRoutes from './routes/blog.routes';
import testimonialRoutes from './routes/testimonial.routes';
import leaderRoutes from './routes/leader.routes';
import homeContentRoutes from './routes/homeContent.routes';
import mediaRoutes from './routes/media.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.CLIENT_URL,
  process.env.ADMIN_URL,
].filter(Boolean) as string[];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags',          tagRoutes);
app.use('/api/blogs',         blogRoutes);
app.use('/api/testimonials',  testimonialRoutes);
app.use('/api/leadership',    leaderRoutes);
app.use('/api/home-content',  homeContentRoutes);
app.use('/api/media',         mediaRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API health: http://localhost:${PORT}/api/health`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
