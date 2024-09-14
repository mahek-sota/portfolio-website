import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Work = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="work-container">
      <div className="tab">
        <button
          className={`tablinks ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleClick('tab1')}
        >
          <i className="fas fa-laptop-code"></i> Software Developer
        </button>
        <button
          className={`tablinks ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleClick('tab2')}
        >
          <i className="fas fa-robot"></i> Machine Learning Intern
        </button>
        <button
          className={`tablinks ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleClick('tab3')}
        >
          <i className="fas fa-code"></i> Web Development Intern
        </button>
      </div>

      <div className={`tabcontent ${activeTab === 'tab1' ? 'show' : ''}`}>
        <h2>Software Developer</h2>
        <p className="job-title">
          University of Mississippi · Full-time
          <span className="time-period">Jun 2024 - Present · 4 mos</span>
        </p>
        <ul>
          <li><strong>Designed and implemented</strong> complex features for end-to-end dashboards using <u>ReactJS</u> and <u>Flask</u>, enhancing performance and cross-browser compatibility. <strong>Created dynamic dashboards</strong> to visualize key metrics and support data-driven decision-making.</li>
          <li><strong>Automated tasks and performed web scraping</strong> with <u>Python</u> and <u>Selenium</u>, achieving a 95.8% increase in time efficiency through streamlined workflows.</li>
          <li><strong>Utilized <u>Node.js</u> and <u>Docker</u></strong> for additional backend enhancements and to containerize projects, ensuring mobility and consistency across environments.</li>
          <li><strong>Troubleshot and resolved issues</strong> promptly, boosting system functionality and user experience. <strong>Developed and maintained comprehensive technical documentation</strong> to enhance process clarity and stakeholder communication.</li>
        </ul>
      </div>

      <div className={`tabcontent ${activeTab === 'tab2' ? 'show' : ''}`}>
        <h2>Machine Learning Intern</h2>
        <p className="job-title">
          Friends For Inclusion · Internship
          <span className="time-period">Dec 2021 - Jan 2022 · 2 mos</span>
        </p>
        <ul>
          <li><strong>Designed and developed</strong> an innovative audiobook tool to enhance accessibility for visually impaired users.</li>
          <li><strong>Implemented a Long Short-Term Memory (LSTM) Neural Network</strong> using <u>PyTorch</u> to create a cutting-edge language translation model, achieving an <span className="highlight">80% improvement in translation accuracy</span>.</li>
        </ul>
      </div>

      <div className={`tabcontent ${activeTab === 'tab3' ? 'show' : ''}`}>
        <h2>Web Development Intern</h2>
        <p className="job-title">
          Ashtech.in · Internship
          <span className="time-period">Jun 2021 - Aug 2021 · 3 mos</span>
        </p>
        <ul>
          <li><strong>Enhanced Web Applications:</strong> Improved the UI/UX of eCommerce platforms and company websites, significantly boosting customer satisfaction and accessibility.</li>
          <li><strong>Developed and tested features:</strong> Implemented critical features such as payment portals and language translation, utilizing <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u>, and <u>REST APIs</u>.</li>
          <li><strong>Collaborated in Agile Development:</strong> Actively participated in Agile development processes, working closely with clients to gather and implement requirements.</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
