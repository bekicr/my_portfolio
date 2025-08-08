// API client for communicating with the backend

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit contact form');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Get all projects
export const getProjects = async (type = null, featured = null) => {
  try {
    let url = `${API_URL}/projects`;
    const params = new URLSearchParams();
    
    if (type) params.append('type', type);
    if (featured) params.append('featured', featured);
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch projects');
    }
    
    return data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Get project by ID
export const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch project');
    }
    
    return data.data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    throw error;
  }
};