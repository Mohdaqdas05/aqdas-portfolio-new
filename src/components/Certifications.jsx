import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "HackerRank Certification",
      issuer: "HackerRank",
      date: "2026",
      category: "Programming",
      icon: "⭐",
      color: "#00d9ff",
      link: "https://www.hackerrank.com/certificates/iframe/4514533228a9"
    },
    {
      id: 2,
      title: "Virtual Experience Program",
      issuer: "Forage",
      date: "2026",
      category: "Industry Experience",
      icon: "🏆",
      color: "#00ff88",
      link: "https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/"
    },
    {
      id: 3,
      title: "Virtual Experience Program",
      issuer: "Forage",
      date: "2026",
      category: "Industry Experience",
      icon: "🏆",
      color: "#f093fb",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/"
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
            Verified certifications and virtual experience programs
          </p>
        </div>
        <div className="certs-grid fade-in-up">
          {certifications.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cert-card fade-in-up delay-${index + 1}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="cert-icon-wrapper" style={{ background: `${cert.color}22`, border: `1px solid ${cert.color}44` }}>
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-content">
                <span className="cert-category" style={{ color: cert.color }}>{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
