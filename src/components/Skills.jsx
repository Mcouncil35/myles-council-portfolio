const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 95, icon: '🗄️' },
        { name: 'R', level: 85, icon: '📊' },
        { name: 'ETL Pipelines', level: 88, icon: '🔄' },
      ],
    },
    {
      title: 'AI & Analytics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
          <circle cx="12" cy="12" r="6"></circle>
        </svg>
      ),
      skills: [
        { name: 'Machine Learning', level: 82, icon: '🤖' },
        { name: 'Predictive Modeling', level: 85, icon: '📈' },
        { name: 'Data Visualization', level: 90, icon: '📉' },
        { name: 'Cloud Analytics', level: 80, icon: '☁️' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        { name: 'Tableau', level: 92, icon: '📊' },
        { name: 'Power BI', level: 88, icon: '📈' },
        { name: 'Database Design', level: 90, icon: '🗃️' },
        { name: 'Automation Tools', level: 85, icon: '⚙️' },
      ],
    },
    {
      title: 'Professional',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      skills: [
        { name: 'Data Architecture', level: 88, icon: '🏗️' },
        { name: 'Process Automation', level: 92, icon: '⚡' },
        { name: 'Team Leadership', level: 85, icon: '👥' },
        { name: 'Technical Documentation', level: 90, icon: '📝' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Building intelligent data systems with AI-driven solutions and automation expertise
          </p>
        </div>
        <div className="skills-grid-new">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category-card" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
