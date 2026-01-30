import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Murr Cross-Reference Explorer',
      subtitle: 'Intelligent Part Discovery System',
      description: 'A powerful web application that revolutionizes how engineers and technicians find compatible parts. Built with AI-enhanced search capabilities and an intuitive interface for seamless cross-referencing of Murrelektronik components.',
      longDescription: 'This enterprise-grade application streamlines the part discovery process, enabling users to quickly find compatible alternatives and cross-references for industrial automation components.',
      icon: '🔍',
      tags: ['Python', 'JavaScript', 'HTML/CSS', 'Web App', 'Data Processing'],
      features: [
        { icon: '🤖', text: 'Smart search with intelligent matching algorithms' },
        { icon: '⚡', text: 'Lightning-fast cross-reference lookups' },
        { icon: '📊', text: 'Comprehensive part database integration' },
        { icon: '🎯', text: 'Precision filtering and sorting capabilities' },
        { icon: '💻', text: 'Clean, responsive user interface' },
      ],
      stats: [
        { label: 'Languages', value: '4+' },
        { label: 'Components', value: '1000s' },
        { label: 'Search Speed', value: '<1s' },
      ],
      github: 'https://github.com/Mcouncil35/murr-cross-reference-explorer',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <span className="label-icon">💡</span>
            Innovation Lab
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Building intelligent solutions that transform data into actionable insights
          </p>
        </div>

        <div className="projects-showcase">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card-3d ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Background Elements */}
              <div className="project-bg-effects">
                <div className="floating-particle particle-1"></div>
                <div className="floating-particle particle-2"></div>
                <div className="floating-particle particle-3"></div>
                <div className="code-rain"></div>
              </div>

              {/* Project Header */}
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-header-content">
                  <div className="project-icon-wrapper">
                    <span className="project-icon">{project.icon}</span>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="project-badge-featured">
                    <span className="badge-dot"></span>
                    Featured Project
                  </div>
                </div>
                <div className="project-header-decoration">
                  <svg viewBox="0 0 200 100" className="wave-decoration">
                    <path d="M0,50 Q50,0 100,50 T200,50 V100 H0 Z" fill="rgba(255,255,255,0.1)" />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Stats Row */}
                <div className="project-stats-row">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="project-stat">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="project-features-section">
                  <h4 className="features-heading">
                    <span className="heading-icon">✨</span>
                    Key Capabilities
                  </h4>
                  <ul className="project-features-grid">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-icon">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="project-tech-stack">
                  <h4 className="tech-heading">Tech Stack</h4>
                  <div className="tech-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag" style={{ animationDelay: `${idx * 0.1}s` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Teaser */}
        <div className="projects-coming-soon">
          <div className="coming-soon-card">
            <div className="coming-soon-icon">🚀</div>
            <h4>More Projects Coming Soon</h4>
            <p>Currently working on exciting new AI and automation projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
