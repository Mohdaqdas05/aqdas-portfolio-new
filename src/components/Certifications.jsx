import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Python for Everybody",
      issuer: "Coursera / University of Michigan",
      date: "2024",
      category: "Programming",
      icon: "🐍",
      color: "#3776ab"
    },
    {
      id: 2,
      title: "Machine Learning Foundations",
      issuer: "NPTEL / Online Course",
      date: "2024",
      category: "AI & ML",
      icon: "🤖",
      color: "#00d9ff"
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      issuer: "Self-Study / Practice",
      date: "2023",
      category: "Computer Science",
      icon: "📐",
      color: "#00ff88"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-background">
        <div className="cert-orb orb-1"></div>
        <div className="cert-orb orb-2"></div>
      </div>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Continuous learning through online courses and self-study
          </p>
        </div>
        <div className="certs-grid fade-in-up">
          {certifications.map((cert, index) => (
            <div key={cert.id} className={`cert-card fade-in-up delay-${index + 1}`}>
              <div className="cert-icon-wrapper" style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}44` }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-content">
                <span className="cert-category" style={{ color: cert.color }}>{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
