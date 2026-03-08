import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Core Skills",
      icon: "💻",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Data Structures", level: "Proficient" },
        { name: "Logical Problem Solving", level: "Proficient" }
      ]
    },
    {
      title: "AI & Data",
      icon: "🤖",
      skills: [
        { name: "Python for Data Analysis", level: "Intermediate" },
        { name: "Machine Learning Concepts", level: "Beginner" },
        { name: "Data Processing", level: "Intermediate" },
        { name: "NumPy / Pandas", level: "Beginner" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "VS Code", level: "Proficient" },
        { name: "AutoCAD", level: "Beginner" },
        { name: "Microsoft Excel", level: "Intermediate" },
        { name: "Vite / React", level: "Intermediate" }
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

        <div className="skills-grid fade-in-up">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`skill-category fade-in-up delay-${categoryIndex + 1}`}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag-item">
                    <span className="skill-tag-name">{skill.name}</span>
                    <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>{skill.level}</span>
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
