const Experience = () => {
  const experiences = [
    {
      role: 'AI Data Engineer',
      department: 'Product and Innovation',
      company: 'Murrelektronik',
      period: 'Oct 2025 - Present',
      type: 'current',
      icon: '🤖',
      color: '#6366f1',
      description: 'Leading data engineering initiatives to build intelligent systems and automated workflows.',
      highlights: [
        { icon: '🗄️', text: 'Building robust databases for strategic data architecture' },
        { icon: '⚡', text: 'Designing automation systems for streamlined workflows' },
        { icon: '📊', text: 'Engineering solutions driving technical innovation' },
        { icon: '🔧', text: 'Optimizing product performance with advanced analytics' },
      ],
      skills: ['Python', 'SQL', 'Automation', 'Data Architecture'],
    },
    {
      role: 'Technical Support Specialist',
      department: 'Contract',
      company: 'Mitsubishi Electric Trane',
      period: 'May 2025 - Oct 2025',
      type: 'past',
      icon: '🔧',
      color: '#8b5cf6',
      description: 'Provided expert technical support for HVAC systems and customer diagnostics.',
      highlights: [
        { icon: '📞', text: 'Resolved complex system issues via phone and email' },
        { icon: '📋', text: 'Guided customers through technical diagnostics' },
        { icon: '💾', text: 'Documented interactions in CRM systems' },
      ],
      skills: ['Technical Support', 'CRM', 'Diagnostics'],
    },
    {
      role: 'Site Leader',
      department: 'Operations',
      company: 'Tidal Wave Auto Spa',
      period: 'Nov 2024 - Apr 2025',
      type: 'past',
      icon: '👥',
      color: '#06b6d4',
      description: 'Led IT operations and team training in a high-volume environment.',
      highlights: [
        { icon: '💻', text: 'Led IT troubleshooting for POS/CRM systems' },
        { icon: '📚', text: 'Trained staff on digital tools and processes' },
        { icon: '⬆️', text: 'Maintained high system uptime' },
      ],
      skills: ['Leadership', 'IT Support', 'Training'],
    },
    {
      role: 'Regional Technical Specialist',
      department: 'Field Operations',
      company: 'Northwest Exterminating',
      period: 'Sep 2023 - Aug 2024',
      type: 'past',
      icon: '🌍',
      color: '#10b981',
      description: 'Delivered data-driven technical solutions across regional operations.',
      highlights: [
        { icon: '🛠️', text: 'Resolved tech issues enhancing service efficiency' },
        { icon: '📈', text: 'Boosted performance through data-driven solutions' },
      ],
      skills: ['Data Analysis', 'Technical Support', 'CRM'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building intelligent systems and leading technical innovation
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${exp.type === 'current' ? 'experience-card-featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s`, '--accent-color': exp.color }}
            >
              <div className="experience-card-header">
                <div className="experience-icon" style={{ background: exp.color }}>
                  <span>{exp.icon}</span>
                </div>
                <div className="experience-meta">
                  <span className={`experience-badge ${exp.type === 'current' ? 'experience-badge-current' : ''}`}>
                    {exp.type === 'current' ? 'Current Role' : exp.period}
                  </span>
                </div>
              </div>
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">
                {exp.company} <span className="experience-department">• {exp.department}</span>
              </p>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>
                    <span className="highlight-icon">{highlight.icon}</span>
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="experience-skill-tag" style={{ borderColor: exp.color, color: exp.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
