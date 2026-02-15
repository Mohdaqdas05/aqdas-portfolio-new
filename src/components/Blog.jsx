import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt: "A beginner's guide to understanding the fundamentals of machine learning and how to get started with your first ML project.",
      date: "Feb 10, 2025",
      category: "Machine Learning",
      readTime: "5 min read",
      image: "🤖"
    },
    {
      id: 2,
      title: "Python Tips for Data Analysis",
      excerpt: "Essential Python libraries and techniques every data analyst should know for efficient data manipulation and analysis.",
      date: "Feb 5, 2025",
      category: "Python",
      readTime: "4 min read",
      image: "🐍"
    },
    {
      id: 3,
      title: "Building My First AI Project",
      excerpt: "Journey through developing an obstacle detection car using sensors, C programming, and real-time decision logic.",
      date: "Jan 28, 2025",
      category: "AI Projects",
      readTime: "6 min read",
      image: "🚗"
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Latest Articles</span>
          <h2 className="section-title">Blog & Insights</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Sharing my learning journey, technical insights, and experiences in AI/ML development
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={post.id} className={`blog-card animate-fade-in-up stagger-${index + 1}`}>
              <div className="blog-card-glow"></div>
              
              <div className="blog-icon">
                <span className="icon-emoji">{post.image}</span>
              </div>

              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-divider">•</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <button className="blog-read-more">
                  Read More
                  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="blog-overlay"></div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p className="cta-text">Want to read more articles?</p>
          <button className="cta-button">
            <span>Coming Soon - Full Blog</span>
            <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M16 10H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
