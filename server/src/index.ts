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
import pageRoutes from './routes/page.routes';
import navbarRoutes from './routes/navbar.routes';
import footerRoutes from './routes/footer.routes';

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
app.use('/api/pages',         pageRoutes);
app.use('/api/navbar',        navbarRoutes);
app.use('/api/footer',        footerRoutes);

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API health: http://localhost:${PORT}/api/health`);
    });
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use — stop whatever else is running on it (or set PORT in .env) and try again.`);
      } else {
        console.error('Server failed to start:', err);
      }
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
