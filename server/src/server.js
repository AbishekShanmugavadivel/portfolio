import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import healthRoutes from './routes/healthRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());

// CORS Configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or postman)
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      return callback(null, true);
    }
    return callback(null, true); // Fallback for dev environments
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Body Parser Middleware
app.use(express.json({ limit: '10kb' }));

// Root Health Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running successfully'
  });
});

// API Routes
app.use('/api', healthRoutes);
app.use('/api', contactRoutes);

// 404 Handler for Unknown Endpoints
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found.'
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

// Start Express Listener
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Portfolio Backend] Server running on port ${PORT}`);
  console.log(`[Portfolio Backend] Root Endpoint: http://localhost:${PORT}/`);
  console.log(`[Portfolio Backend] Health Endpoint: http://localhost:${PORT}/api/health`);
  console.log(`[Portfolio Backend] Contact Endpoint: http://localhost:${PORT}/api/contact`);
});


