import React, { useState, useEffect } from 'react';
import '../../App.css';
import { submitContactForm } from '../../api';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });
  const [formTouched, setFormTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Clear success message after 5 seconds
  useEffect(() => {
    let timer;
    if (submitStatus.success) {
      timer = setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus.success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched({
      ...formTouched,
      [name]: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setFormTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    try {
      // Submit form data to the backend API
      const response = await submitContactForm(formData);
      
      console.log('Form submitted successfully:', response);
      
      // Show success message with animation
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset touched state
      setFormTouched({
        name: false,
        email: false,
        subject: false,
        message: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error message
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Let's connect! Feel free to reach out to me for any questions, opportunities, or collaborations.
          </p>
        </motion.div>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Ethiopia</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>berekethailu26@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+251 951 026 370</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit}>
              <motion.div className="form-group" variants={itemVariants}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className={formTouched.name && !formData.name ? 'error' : ''}
                  required
                />
                <label htmlFor="name" className={formData.name ? 'active' : ''}>Your Name</label>
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  className={formTouched.email && (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ? 'error' : ''}
                  required
                />
                <label htmlFor="email" className={formData.email ? 'active' : ''}>Your Email</label>
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className={formTouched.subject && !formData.subject ? 'error' : ''}
                  required
                />
                <label htmlFor="subject" className={formData.subject ? 'active' : ''}>Subject</label>
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  className={formTouched.message && !formData.message ? 'error' : ''}
                  required
                ></textarea>
                <label htmlFor="message" className={formData.message ? 'active' : ''}>Your Message</label>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
              
              {submitStatus.message && (
                <motion.div 
                  className={`form-message ${submitStatus.success ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;