import express from 'express';
import { submitContactForm, getContacts } from '../controllers/contactController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/contact - Submit contact form (public)
router.post('/', submitContactForm);

// GET /api/contact - Get all contact submissions (admin only)
router.get('/', protect, admin, getContacts);

export default router;