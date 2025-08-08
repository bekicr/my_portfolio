import Project from '../models/projectModel.js';

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const { type, featured } = req.query;
    let query = {};
    
    // Filter by project type if specified
    if (type) {
      query.projectType = type;
    }
    
    // Filter by featured status if specified
    if (featured === 'true') {
      query.featured = true;
    }
    
    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving projects',
      error: error.message
    });
  }
};

// Get single project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving project',
      error: error.message
    });
  }
};

// Create new project
export const createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    
    res.status(201).json({
      success: true,
      data: newProject,
      message: 'Project created successfully'
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating project',
      error: error.message
    });
  }
};

// Update project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: project,
      message: 'Project updated successfully'
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating project',
      error: error.message
    });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting project',
      error: error.message
    });
  }
};