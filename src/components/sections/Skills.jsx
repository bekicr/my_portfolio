import React from 'react';
import '../../App.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Wireframing', level: 90 },
        { name: 'Prototyping', level: 92 },
        { name: 'Design Systems', level: 88 },
        { name: 'User Research', level: 85 },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      category: 'Design Tools',
      skills: [
        { name: 'Adobe XD', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Illustrator', level: 75 },
        { name: 'Photoshop', level: 78 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'VS Code', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Design Thinking', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Design & Development Skills</h2>
        <p className="section-description">
          As a UI/UX designer and frontend developer, I've mastered various design tools and technologies with a focus on creating beautiful, functional interfaces.
        </p>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div className="skill-category" key={categoryIndex}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;