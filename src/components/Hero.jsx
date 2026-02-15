import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach(p2 => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow-effect glow-1"></div>
        <div className="glow-effect glow-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="line-accent"></span>
            <span className="greeting-text">
              <span className="greeting-icon">👋</span> Hello, I'm
            </span>
          </div>
          <h1 className="hero-name">
            <span className="name-gradient">Mohd Aqdas Farooqui</span>
          </h1>
          <h2 className="hero-title">
            <span className="typing-effect">AI & ML Engineering Student</span>
          </h2>
          <p className="hero-description">
            Passionate about <span className="text-highlight">intelligent systems</span>, 
            <span className="text-highlight"> problem-solving</span>, and building 
            <span className="text-highlight"> real-world applications</span> that make a difference. 
            Currently exploring the fascinating world of Artificial Intelligence and Machine Learning.
          </p>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">2027</div>
              <div className="stat-label">Graduating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">AI/ML</div>
              <div className="stat-label">Focus Area</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <span>View Projects</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L13 10M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              <span>Contact Me</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 8L10 13L17 8M3 6H17V14H3V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-frame">
            <div className="image-glow"></div>
            <img 
              src={`${import.meta.env.BASE_URL}aqdas-photo.jpg`}
              alt="Mohd Aqdas Farooqui" 
              className="profile-photo"
            />
            <div className="image-border"></div>
          </div>
          
          <div className="floating-badge badge-1">
            <span className="badge-icon">🎓</span>
            <span className="badge-text">B.E. AI/ML</span>
          </div>
          <div className="floating-badge badge-2">
            <span className="badge-icon">💻</span>
            <span className="badge-text">Python Dev</span>
          </div>
          <div className="floating-badge badge-3">
            <span className="badge-icon">🤖</span>
            <span className="badge-text">AI Enthusiast</span>
          </div>
          
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
