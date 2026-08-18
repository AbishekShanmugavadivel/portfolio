import express from 'express';
import { handleContact } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/contact', contactRateLimiter, handleContact);

export default router;
