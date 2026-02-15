import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      category: "Python Backend Development",
      description: "A comprehensive Python-based backend system designed to manage patient records, doctor information, and billing operations efficiently.",
      features: [
        "Patient record management with file handling",
        "Doctor scheduling and appointment system",
        "Billing and invoice generation",
        "Modular architecture for scalability"
      ],
      techStack: ["Python", "File Handling", "Data Structures"],
      icon: "🏥",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Obstacle Detection Car",
      category: "Embedded Systems & IoT",
      description: "A sensor-based autonomous vehicle capable of detecting obstacles in real-time and avoiding collisions through intelligent decision-making algorithms.",
      features: [
        "Real-time obstacle detection using sensors",
        "Autonomous navigation and collision avoidance",
        "Motor control and hardware integration",
        "Embedded C programming for microcontrollers"
      ],
      techStack: ["C Programming", "Sensors", "Microcontrollers", "Hardware Integration"],
      icon: "🚗",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Academic and self-initiated projects showcasing practical application of technical concepts
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header" style={{ background: project.gradient }}>
                <span className="project-icon">{project.icon}</span>
                <div className="header-overlay"></div>
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>More projects coming soon as I continue learning and building...</p>
          <a href="https://github.com/Mohdaqdas05" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
