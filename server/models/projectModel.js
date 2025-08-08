import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  technologies: [{
    type: String,
    required: [true, 'At least one technology is required']
  }],
  imageUrl: {
    type: String,
    required: [true, 'Project image URL is required']
  },
  demoUrl: {
    type: String,
    required: false
  },
  codeUrl: {
    type: String,
    required: false
  },
  figmaUrl: {
    type: String,
    required: false
  },
  projectType: {
    type: String,
    enum: ['development', 'design'],
    default: 'development'
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;