import './Opportunities.css';

const Opportunities = () => {
  const opportunities = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: "🤖",
      description: "Seeking hands-on experience in AI/ML projects, model development, and data analysis"
    },
    {
      title: "Python Development",
      icon: "🐍",
      description: "Looking to contribute to Python-based applications, automation, and backend systems"
    },
    {
      title: "Web Development",
      icon: "🌐",
      description: "Eager to learn and build modern web applications using current technologies"
    }
  ];

  return (
    <section id="opportunities" className="opportunities">
      <div className="opportunities-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Open To</span>
          <h2 className="section-title">Internship Opportunities</h2>
          <div className="title-underline"></div>
        </div>

        <div className="opportunities-intro">
          <p>
            I'm actively seeking <strong>intern-level roles</strong> where I can apply my academic knowledge, 
            contribute to meaningful projects, and grow as a developer. I'm looking for learning-driven 
            opportunities that will help me build practical experience in real-world environments.
          </p>
        </div>

        <div className="opportunities-grid">
          {opportunities.map((opp, index) => (
            <div key={index} className="opportunity-card">
              <div className="opp-icon-wrapper">
                <span className="opp-icon">{opp.icon}</span>
                <div className="icon-ring"></div>
              </div>
              <h3 className="opp-title">{opp.title}</h3>
              <p className="opp-description">{opp.description}</p>
            </div>
          ))}
        </div>

        <div className="opportunities-footer">
          <div className="mindset-box">
            <div className="mindset-icon">💡</div>
            <div className="mindset-content">
              <h4>My Approach</h4>
              <p>
                I'm not offering commercial services yet—I'm at the beginning of my career journey. 
                What I bring is enthusiasm, a strong work ethic, willingness to learn, and dedication 
                to delivering quality work. I'm looking for organizations that value growth and mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
