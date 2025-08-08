import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Middleware to protect routes that require authentication
export const protect = async (req, res, next) => {
  let token;
  
  // Check if token exists in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Add user ID to request object
      req.userId = decoded.id;
      
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(401).json({
        success: false,
        message: 'Not authorized, token failed'
      });
    }
  }
  
  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Not authorized, no token'
    });
  }
};

// Admin middleware
export const admin = async (req, res, next) => {
  try {
    // Get user from database (without password)
    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Check if user is admin
    if (user.isAdmin) {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: 'Not authorized as admin'
      });
    }
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in admin authorization',
      error: error.message
    });
  }
};