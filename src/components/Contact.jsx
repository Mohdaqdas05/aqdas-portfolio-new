import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Using Formspree - free email service
      const response = await fetch('https://formspree.io/f/xanyawnd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Track form submission in analytics
        if (window.mobileAnalytics) {
          window.mobileAnalytics.trackFormSubmit('contact_form', true);
        }
        
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Email",
      value: "aqdasalifarooqui41@gmail.com",
      link: "mailto:aqdasalifarooqui41@gmail.com"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Phone",
      value: "+91-9559724854",
      link: "tel:+919559724854"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "mohd-aqdas-farooqui",
      link: "https://linkedin.com/in/mohd-aqdas-farooqui-636a42332"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      label: "GitHub",
      value: "Mohdaqdas05",
      link: "https://github.com/Mohdaqdas05"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Interested in discussing internship opportunities or collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="info-description">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="info-card"
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-text">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="cta-box">
              <h4>Ready to Collaborate?</h4>
              <p>Let's discuss internship opportunities and how I can contribute to your team.</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Sent!' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {formStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent to my email. I'll get back to you soon!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="error-message">
                  ✗ Oops! Something went wrong. Please try again or email me directly at aqdasalifarooqui41@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
