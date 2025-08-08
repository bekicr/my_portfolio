import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/users/register - Register a new user
router.post('/register', registerUser);

// POST /api/users/login - Authenticate user & get token
router.post('/login', loginUser);

// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update user profile
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;