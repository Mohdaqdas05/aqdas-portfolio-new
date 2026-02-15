import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Get To Know</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>
              <img 
                src={`${import.meta.env.BASE_URL}aqdas-photo.jpg`}
                alt="Mohd Aqdas Farooqui" 
                className="about-profile-photo"
              />
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate engineering student specializing in Artificial Intelligence and Machine Learning, 
                driven by curiosity and a strong desire to understand how intelligent systems work and how they 
                can solve real-world problems.
              </p>
              <p className="about-description">
                My journey in technology is focused on building a solid technical foundation through hands-on 
                academic projects and continuous learning. I approach every challenge with logical thinking and 
                a problem-solving mindset, always eager to explore new concepts and apply them practically.
              </p>
              <p className="about-description">
                I believe in the power of technology to create meaningful impact, and I'm committed to developing 
                skills that will allow me to contribute to innovative AI/ML solutions in the future.
              </p>
            </div>

            <div className="education-card">
              <div className="card-glow"></div>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14L21 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 11.5V16.5C6 16.5 8 19 12 19C16 19 18 16.5 18 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Education</h3>
              <div className="education-details">
                <h4 className="degree">Bachelor of Engineering</h4>
                <p className="specialization">Artificial Intelligence & Machine Learning</p>
                <p className="institution">Universal College of Engineering</p>
                <div className="graduation">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Expected Graduation: 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🎯</div>
            <h4>Learning Mindset</h4>
            <p>Constantly exploring new technologies and approaches to problem-solving</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">💡</div>
            <h4>Logical Thinking</h4>
            <p>Applying structured reasoning to break down complex challenges</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🛠️</div>
            <h4>Hands-On Experience</h4>
            <p>Building practical projects to reinforce academic concepts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
