import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/projects - Get all projects (public)
// POST /api/projects - Create new project (protected)
router.route('/')
  .get(getProjects)
  .post(protect, createProject);

// GET /api/projects/:id - Get single project (public)
// PUT /api/projects/:id - Update project (protected)
// DELETE /api/projects/:id - Delete project (protected)
router.route('/:id')
  .get(getProjectById)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default router;