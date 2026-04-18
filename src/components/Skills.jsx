import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: "Proficient" },
        { name: "TypeScript", level: "Proficient" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: [
        { name: "React", level: "Proficient" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Node.js", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "Docker", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" }
      ]
    },
    {
      title: "Other Technologies",
      icon: "🔧",
      skills: [
        { name: "Git & GitHub", level: "Proficient" },
        { name: "GitHub Actions", level: "Intermediate" },
        { name: "REST APIs", level: "Proficient" },
        { name: "OAuth", level: "Intermediate" },
        { name: "JWT Authentication", level: "Proficient" }
      ]
    },
    {
      title: "Core Subjects",
      icon: "📚",
      skills: [
        { name: "Operating Systems", level: "Intermediate" },
        { name: "DBMS", level: "Intermediate" }
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
            personal projects and hands-on practice. I'm actively expanding my knowledge and building 
            real-world experience in full-stack and AI-integrated development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
