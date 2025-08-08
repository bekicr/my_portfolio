import React, { useState, useEffect } from 'react';
import '../../App.css';
import { getProjects } from '../../api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  // Fallback data in case API is not available
  const fallbackProjects = [
    {
      id: 1,
      title: 'Ethio Fitness Mobile App',
      description: 'A feature-rich fitness application developed as my final year project. Includes user authentication, workout tracking, nutrition planning, and progress monitoring features.',
      technologies: ['Java', 'Firebase', 'Android SDK', 'XML'],
      image: 'ethio-fitness.jpg',
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'E-Commerce UI Design',
      description: 'A modern e-commerce platform UI design created in Figma. Features include product browsing, cart functionality, user profiles, and checkout process with a clean, intuitive interface.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
      image: 'ecommerce-ui.jpg',
      liveLink: 'https://www.figma.com/proto/sample-ecommerce-design/prototype',
      codeLink: 'https://www.figma.com/file/sample-ecommerce-design',
    },
    {
      id: 3,
      title: 'Travel App Interface',
      description: 'A comprehensive travel application interface designed in Figma with interactive prototypes. Includes booking flows, destination discovery, and user account management.',
      technologies: ['Figma', 'UI Design', 'Interaction Design', 'Wireframing'],
      image: 'travel-app.jpg',
      liveLink: 'https://www.figma.com/proto/sample-travel-app/prototype',
      codeLink: 'https://www.figma.com/file/sample-travel-app',
    },
    {
      id: 4,
      title: 'Responsive Web Interfaces',
      description: 'Built modern UI components during my internship at Ethronics IRAS. Collaborated with backend teams for seamless API integration and responsive design implementation.',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      image: 'responsive-ui.jpg',
      liveLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and professional experience as a Computer Science graduate and UI/UX Designer.',
      technologies: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'portfolio.jpg',
      liveLink: '#',
      codeLink: '#',
    },
  ];

  // Use fallback data if API fails or during development
  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Key Projects</h2>
          <p className="loading-message">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.warn('Using fallback project data due to API error');
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Key Projects</h2>
        <p className="section-description">
          Here are some of my significant UI/UX design and development projects. Click on "Live Demo" to view interactive Figma prototypes.
        </p>
        <div className="projects-grid">
          {displayProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {/* Project image placeholders */}
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-img" />
                ) : (
                  <div className="placeholder-image">{project.title.split(' ').slice(0, 2).join(' ')}</div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">Live Demo</a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">View Code</a>
                  )}
                  {project.figmaUrl && (
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">Figma File</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;