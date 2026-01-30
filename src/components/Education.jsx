const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Data Analytics',
      institution: 'Unity Environmental University',
      period: 'Completed',
    },
    {
      degree: 'Bachelor of Arts in Field Biology',
      institution: 'University of Wisconsin - River Falls',
      period: '',
    },
  ];

  const certifications = [
    {
      name: 'Google IT Support',
      issuer: 'Google',
      date: 'Completed',
    },
    {
      name: 'Google Data Analytics',
      issuer: 'Google',
      date: 'Completed',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development in technology and analytics
          </p>
        </div>
        <div className="education-grid">
          <div>
            <h3 className="education-column-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                {edu.period && <p className="education-period">{edu.period}</p>}
              </div>
            ))}
          </div>
          <div>
            <h3 className="education-column-title">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h4 className="education-degree">{cert.name}</h4>
                <p className="education-institution">{cert.issuer}</p>
                <p className="education-period">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
