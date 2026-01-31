import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      try {
        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getProjectBySlug = (slug) => {
    return projects.find(project => project.slug === slug);
  };

  const getProjectsByCategory = (category) => {
    return projects.filter(project => project.category === category);
  };

  return { 
    projects, 
    loading, 
    error, 
    getProjectBySlug, 
    getProjectsByCategory 
  };
};
