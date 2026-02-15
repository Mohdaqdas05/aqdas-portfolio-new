import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Programming & Core Skills",
      icon: "💻",
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 75 },
        { name: "Data Structures", level: 80 },
        { name: "Logical Problem Solving", level: 85 }
      ]
    },
    {
      title: "AI & Data",
      icon: "🤖",
      skills: [
        { name: "Python for Data Analysis", level: 80 },
        { name: "Machine Learning Concepts", level: 70 },
        { name: "Data Processing", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "AutoCAD", level: 70 },
        { name: "Microsoft Excel", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-background">
        <div className="tech-pattern"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                        }}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p>
            <strong>Continuous Learning:</strong> These skills reflect my current proficiency based on 
            academic projects and hands-on practice. I'm actively expanding my knowledge and building 
            real-world experience in AI/ML development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
