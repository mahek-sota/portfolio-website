import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome CSS is imported

const projectsList = [
  { id: 1, name: 'Event Finder: React Web Application and Android Application', description: 'Developed a React web and Android app integrating Ticketmaster, IPinfo, and Spotify APIs for event discovery and user favorites.', link: 'https://docs.google.com/document/d/1u9q8XAGkUmgBxLdAOcj9jyr0kd25T4P_pdSrbn-EWwg/edit?usp=sharing', github: 'https://github.com/mahek-sota/event-finder', techstack: 'HTML, CSS, JS, React, NodeJS, RESTFul API, localStorage, GIT, GCP, Bootstrap, Android Studio, Java.' },
  { id: 2, name: 'Work It: Fitness Web Application', description: 'Led the creation of a fitness web app with a chatbot, video calls, and a recipe recommender, achieving high accuracy in both chatbot and recommendation systems.', link: 'https://docs.google.com/document/d/1tFukSwe_yZy_knFCihmwj_MQRzO0JGtGtfktZgHlx4s/edit?usp=sharing', github: 'https://github.com/mahek-sota/work-it', techstack: 'HTML, CSS, JS, React, Flask, ChatterBot, BeautifulSoup, NLP techniques - cosine similarity, Word2Vec.' },
  { id: 3, name: 'RNN and LSTM Model for Sentimental Analysis', description: 'Built an NLP model for Amazon review sentiment analysis using RNN and LSTM', link: 'https://docs.google.com/document/d/1U5hXw_6HgvX2yfLaGD7TgUyDL6GHvq4cxx76GrUnVRs/edit?usp=sharing', github: 'https://github.com/mahek-sota/sentimental-analysis', techstack: 'Python, PyTorch, Word2Vec, RNN, LSTM' },
  // Add more projects as needed
];


const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectsList.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projectsList.length - 1 ? prevIndex + 1 : 0));
  };

  const handleMoreDetails = (id) => {
    const url = `${window.location.origin}/project/${id}`;
    window.open(url, '_blank');
  };

  const currentProject = projectsList[currentIndex];

  return (
    <div className="carousel-container">
      <h2>Selected Projects</h2>
      <div className="carousel-card">
        <div className="project-header">
          <i className="fas fa-project-diagram project-icon"></i> {/* Project Icon */}
          <h3>{currentProject.name}</h3>
        </div>
        <p><span className='tech'>In short: </span>{currentProject.description}</p>
        <p><span className='tech'>Tech Stack Used: </span>{currentProject.techstack}</p>
        <div className="carousel-buttons">
          <button onClick={() => handleMoreDetails(currentProject.id)}>More Details...</button>
          <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button">Previous</button>
        <button onClick={handleNext} className="carousel-button">Next</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
