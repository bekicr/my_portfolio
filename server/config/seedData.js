import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/projectModel.js';
import connectDB from './db.js';

// Load environment variables
dotenv.config();

// Sample project data
const projectData = [
  {
    title: 'Ethio Fitness Mobile App',
    description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress monitoring.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    imageUrl: '/assets/images/projects/ethio-fitness.jpg',
    demoUrl: 'https://play.google.com/store',
    codeUrl: 'https://github.com/yourusername/ethio-fitness',
    projectType: 'development',
    featured: true,
    order: 1
  },
  {
    title: 'E-Commerce UI Design',
    description: 'A modern e-commerce interface design with intuitive navigation, product filtering, and checkout flow.',
    technologies: ['UI/UX Design', 'Figma', 'Prototyping', 'Design Systems'],
    imageUrl: '/assets/images/projects/ecommerce-ui.jpg',
    demoUrl: 'https://www.figma.com/proto/sample-ecommerce-prototype',
    figmaUrl: 'https://www.figma.com/file/sample-ecommerce-file',
    projectType: 'design',
    featured: true,
    order: 2
  },
  {
    title: 'Travel App Interface',
    description: 'A travel planning application interface with destination discovery, itinerary building, and booking functionality.',
    technologies: ['UI/UX Design', 'Figma', 'Interaction Design', 'Visual Design'],
    imageUrl: '/assets/images/projects/travel-app.jpg',
    demoUrl: 'https://www.figma.com/proto/sample-travel-prototype',
    figmaUrl: 'https://www.figma.com/file/sample-travel-file',
    projectType: 'design',
    featured: true,
    order: 3
  },
  {
    title: 'Responsive Web Interfaces',
    description: 'A collection of responsive web interfaces designed and developed for various client projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    imageUrl: '/assets/images/projects/responsive-web.jpg',
    demoUrl: 'https://responsive-web-demo.netlify.app',
    codeUrl: 'https://github.com/yourusername/responsive-web',
    projectType: 'development',
    featured: true,
    order: 4
  }
];

// Seed database function
const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();
    
    // Delete existing projects
    await Project.deleteMany({});
    console.log('Deleted existing projects');
    
    // Insert new projects
    const createdProjects = await Project.insertMany(projectData);
    console.log(`Inserted ${createdProjects.length} projects`);
    
    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase();