import React from 'react';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Portfolio
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;