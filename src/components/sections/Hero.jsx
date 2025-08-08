import React from 'react';
import '../../App.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Bereket Hailu</span></h1>
        <h2 className="hero-subtitle">UI/UX Designer | Frontend Developer | Figma Expert</h2>
        <p className="hero-description">
          I specialize in creating beautiful user interfaces and translating designs into responsive frontend implementations using Figma, React.js, and modern CSS frameworks.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;