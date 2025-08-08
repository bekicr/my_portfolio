import React from 'react';
import '../../App.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              <img src="/src/assets/images/photo_2025-08-06_07-14-27.jpg" alt="Bereket Hailu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              I'm a passionate UI/UX Designer and Frontend Developer with a Computer Science background from Arsi University. I specialize in creating beautiful, 
              intuitive user interfaces and translating them into responsive frontend implementations. My expertise in Figma allows me to craft detailed design systems, 
              interactive prototypes, and pixel-perfect interfaces for web and mobile applications.
            </p>
            <p>
              With a strong foundation in both design principles and frontend technologies, I bridge the gap between aesthetics and functionality. 
              I'm detail-oriented, collaborative, and constantly exploring the latest design trends and tools to create exceptional user experiences.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Bereket Hailu</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">berekethailu26@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+251 951 026 370</span>
              </div>
              <div className="info-item">
                <span className="info-label">Education:</span>
                <span className="info-value">BSc in Computer Science, Arsi University (2025)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Specialization:</span>
                <span className="info-value">UI/UX Design, Frontend Development</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Ethiopia</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;