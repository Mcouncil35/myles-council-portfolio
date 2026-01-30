import { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hey there! I'm Helix, Myles's AI sidekick. I know everything about him - skills, experience, how to reach him, you name it! What can I help you with today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Social links
  const socialLinks = {
    github: 'https://github.com/Mcouncil35',
    linkedin: 'https://linkedin.com/in/myles-council-68831b382',
    email: 'mailto:mcouncil071790@yahoo.com',
    projects: 'https://github.com/Mcouncil35/murr-cross-reference-explorer',
  };

  const quickActions = [
    { label: "Contact Info", query: "How can I contact Myles?" },
    { label: "Skills", query: "What are his skills?" },
    { label: "GitHub", query: "Take me to GitHub" },
    { label: "LinkedIn", query: "Take me to LinkedIn" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for external open event (from Get In Touch button)
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener('openHelix', handleOpenChat);
    return () => window.removeEventListener('openHelix', handleOpenChat);
  }, []);

  // Function to open links
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Check if user wants to navigate to a link
  const checkForLinkRequest = (question) => {
    const q = question.toLowerCase();
    const linkTriggers = ['take me to', 'go to', 'open', 'visit', 'show me', 'link to', 'navigate to'];
    const hasLinkTrigger = linkTriggers.some(trigger => q.includes(trigger));

    if (hasLinkTrigger || q.includes('github') || q.includes('linkedin') || q.includes('linked in')) {
      // GitHub
      if (q.includes('github') || q.includes('git hub') || q.includes('code') || q.includes('repository') || q.includes('repo')) {
        return { shouldOpen: true, link: socialLinks.github, name: 'GitHub' };
      }
      // LinkedIn
      if (q.includes('linkedin') || q.includes('linked in') || q.includes('professional')) {
        return { shouldOpen: true, link: socialLinks.linkedin, name: 'LinkedIn' };
      }
      // Projects
      if (q.includes('project') || q.includes('murr') || q.includes('cross-reference') || q.includes('explorer')) {
        return { shouldOpen: true, link: socialLinks.projects, name: 'Projects' };
      }
      // Email
      if (q.includes('email') || q.includes('mail')) {
        return { shouldOpen: true, link: socialLinks.email, name: 'Email' };
      }
    }
    return { shouldOpen: false };
  };

  const getResponse = (question) => {
    const q = question.toLowerCase();

    // Check for link navigation requests first
    const linkCheck = checkForLinkRequest(question);
    if (linkCheck.shouldOpen) {
      openLink(linkCheck.link);

      const responses = {
        'GitHub': "Opening Myles's GitHub profile now! You'll find all his code repositories and projects there. Happy exploring!",
        'LinkedIn': "Taking you to Myles's LinkedIn profile! Feel free to connect with him there - he loves networking!",
        'Projects': "Opening the Murr Cross-Reference Explorer project! Check out the code and see what Myles has built.",
        'Email': "Opening your email client to contact Myles! Don't be shy - he'd love to hear from you!"
      };

      return responses[linkCheck.name] || `Opening ${linkCheck.name} for you!`;
    }

    // Skills related
    if (q.includes('skill') || q.includes('know') || q.includes('technology') || q.includes('tech stack')) {
      return "Myles has got some serious tech chops! Here's the rundown:\n\n🐍 Python (90%) - His go-to for automation & ML\n🗄️ SQL (95%) - Database wizard status\n📊 R (85%) - Statistical analysis pro\n☁️ Cloud Analytics & ETL pipelines\n📈 Tableau & Power BI for stunning visualizations\n\nBasically, if it involves data, he's on it!";
    }

    // Experience related
    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('career')) {
      return "Myles has been crushing it for 4+ years! Here's the highlight reel:\n\n🤖 Currently: AI Data Engineer @ Murrelektronik\n🔧 Previously: Technical Support @ Mitsubishi Electric\n👥 Site Leader @ Tidal Wave Auto Spa\n🌍 Regional Tech Specialist @ Northwest Exterminating\n\nHe's all about building intelligent systems and making data work smarter!";
    }

    // Current role
    if (q.includes('current') || q.includes('now') || q.includes('murrelektronik')) {
      return "Right now, Myles is an AI Data Engineer at Murrelektronik in the Product and Innovation department! He's:\n\n🗄️ Building robust databases\n⚡ Designing automation systems\n📊 Engineering solutions that drive innovation\n🔧 Optimizing product performance\n\nPretty cool stuff, right?";
    }

    // Education
    if (q.includes('education') || q.includes('degree') || q.includes('school') || q.includes('university') || q.includes('study')) {
      return "Myles takes learning seriously! Check out his credentials:\n\n🎓 M.S. in Data Analytics - Western Governors University\n🎓 B.S. in Information Technology\n📜 Google Data Analytics Certified\n\nBrains AND skills - the full package!";
    }

    // AI/ML related
    if (q.includes('ai') || q.includes('machine learning') || q.includes('ml') || q.includes('artificial intelligence')) {
      return "AI is Myles's jam! He specializes in:\n\n🤖 Machine Learning implementation\n📈 Predictive modeling\n⚡ Data-driven automation\n🧠 Building intelligent systems\n\nHe transforms complex data challenges into elegant, automated solutions. It's like magic, but with more Python!";
    }

    // Contact - IMPORTANT ONE
    if (q.includes('contact') || q.includes('reach') || q.includes('hire') || q.includes('connect') || q.includes('get in touch') || q.includes('talk')) {
      return "Great choice wanting to connect with Myles! Here's how:\n\n📧 Email: mcouncil071790@yahoo.com\n📱 Phone: 651-785-6178\n💼 LinkedIn: linkedin.com/in/myles-council-68831b382\n💻 GitHub: github.com/Mcouncil35\n📍 Location: Lawrenceville, GA\n\nTip: Just say 'take me to LinkedIn' or 'open GitHub' and I'll take you there directly!";
    }

    // Location
    if (q.includes('location') || q.includes('where') || q.includes('based') || q.includes('live')) {
      return "Myles is based in Lawrenceville, GA 30045! That's in the Atlanta metro area. Great weather, great tech scene!";
    }

    // About/who
    if (q.includes('who') || q.includes('about') || q.includes('tell me about') || q.includes('introduce')) {
      return "Let me introduce you to Myles Council!\n\nHe's an AI Data Engineer who's passionate about automation and intelligent systems. Think of him as a data whisperer - he takes complex data challenges and turns them into elegant, automated solutions.\n\nWith 4+ years of experience and a Master's in Data Analytics, he's got the skills to back it up. Plus, he's always learning and staying on the cutting edge of AI tech!";
    }

    // Python
    if (q.includes('python')) {
      return "Python is Myles's weapon of choice! He's at 90% proficiency and uses it for:\n\n🐍 Data engineering pipelines\n⚡ Automation scripts\n🔄 ETL processes\n🤖 Machine learning implementations\n\nIf there's data to wrangle, Python's getting the job done!";
    }

    // SQL
    if (q.includes('sql') || q.includes('database')) {
      return "SQL is Myles's superpower - 95% proficiency! He excels at:\n\n🗄️ Database design & architecture\n📊 Complex queries\n⚡ Performance optimization\n🏗️ Building robust data systems\n\nBasically, he speaks fluent database!";
    }

    // Certifications
    if (q.includes('certification') || q.includes('certified')) {
      return "Myles is Google Data Analytics Certified! This means he's got proven expertise in:\n\n📊 Data analysis\n📈 Visualization\n🔍 Insights extraction\n📋 Professional best practices\n\nGoogle-approved skills!";
    }

    // Greeting
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q === 'yo' || q.includes('sup')) {
      const greetings = [
        "Hey hey! What's up? Ready to learn about Myles? I've got all the good stuff!",
        "Hello there! Welcome! I'm Helix, and I'm here to tell you all about Myles. What would you like to know?",
        "Yo! Great to meet you! Ask me anything about Myles - skills, experience, how to reach him - I've got answers!"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Thanks
    if (q.includes('thank')) {
      return "You're totally welcome! It's been fun chatting. If you have more questions, I'm always here. And hey, don't forget to reach out to Myles if you want to connect! He'd love to hear from you!";
    }

    // Fun questions
    if (q.includes('joke') || q.includes('funny')) {
      return "Why do data engineers make great DJs? Because they know how to drop the tables! ...I'll see myself out. But seriously, ask me something about Myles!";
    }

    if (q.includes('your name') || q.includes('who are you')) {
      return "I'm Helix! Myles's AI assistant and biggest hype man. I know everything about his skills, experience, and how you can connect with him. Think of me as your guide to all things Myles!";
    }

    // Social/Links
    if (q.includes('social') || q.includes('links') || q.includes('profile')) {
      return "I can take you directly to Myles's profiles! Just say:\n\n💻 'Take me to GitHub' - See his code & projects\n💼 'Take me to LinkedIn' - Connect professionally\n📧 'Open email' - Send him a message\n🔍 'Show me projects' - View his latest work\n\nWhere would you like to go?";
    }

    // Default
    return "Hmm, I'm not sure about that one! But I can definitely tell you about:\n\n💼 Myles's skills & experience\n🎓 His education & certifications\n📧 How to contact him\n🔗 Take you to his GitHub or LinkedIn\n🤖 His AI & data expertise\n\nWhat sounds interesting?";
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { type: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getResponse(text);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (query) => {
    handleSend(query);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        <span className="chatbot-badge">AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <span className="helix-icon">H</span>
              </div>
              <div>
                <div className="chatbot-name">Helix</div>
                <div className="chatbot-status">
                  <span className="status-dot"></span>
                  Ready to help!
                </div>
              </div>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot typing">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="chatbot-quick-actions">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="quick-action-btn"
                  onClick={() => handleQuickAction(action.query)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Helix anything..."
              className="chatbot-input"
            />
            <button onClick={() => handleSend()} className="chatbot-send" disabled={!input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
