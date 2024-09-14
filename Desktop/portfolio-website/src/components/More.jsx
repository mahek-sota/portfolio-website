import React, { useState } from 'react';
import blogImage from '../assets/blogpost.png';
import readingImage from '../assets/images/reading.jpeg';
import rcImage from '../assets/images/rc.png';
import ieteImage from '../assets/images/iete.jpeg';
import tsecImage from '../assets/images/tsec.jpg';
import aapkaImage from '../assets/images/aapka.jpg';
import kisnaImage from '../assets/images/kisna.jpg';
import aiesecImage from '../assets/images/aiesec.jpg';
import iimunImage from '../assets/images/iimun.png';

const activities = [
  {
    title: 'Writing Blog',
    description: 'Writing is my passion, a cherished hobby, and the driving force behind my blog where I bring words to life.',
    image: blogImage,
    link: 'https://wordsandwok.wordpress.com/'
  },
  {
    title: 'Reading',
    description: 'I find immense joy in reading, as it transports me to a different world, where imagination knows no bounds.',
    image: readingImage,
    link: ''
  },
  {
    title: 'Rotaract Journey',
    description: 'Led, delegated, and administered a club of 50 members, reported more than 100 projects, and practiced leadership and negotiation.',
    image: rcImage,
    link: ''
  },
  {
    title: 'IETE',
    description: 'Curated the website and led technical skills workshops for a college committee, engaging over 50 attendees.',
    image: ieteImage,
    link: ''
  },
  {
    title: 'TSEC Envoy',
    description: 'Facilitated coordination between recruiting companies and students, managing communication and comprehensive databases.',
    image: tsecImage,
    link: ''
  },
  {
    title: 'Aapka Sahara Foundation',
    description: 'Contributed as a content writer to raise awareness about elder abuse and support the elderly through impactful articles.',
    image: aapkaImage,
    link: ''
  },
  {
    title: 'KISNA Content Writing',
    description: 'Crafted compelling product descriptions for over 1000 Kisna Diamond Jewellery pieces, highlighting their unique beauty.',
    image: kisnaImage,
    link: ''
  },
  {
    title: 'AIESEC Journey',
    description: 'Facilitated a seamless experience for exchange students at AIESEC Mumbai, managing their integration and backend database.',
    image: aiesecImage,
    link: ''
  },
  {
    title: 'IIMUN Journey',
    description: 'Engaged with schools and students, forging partnerships and maintaining an organized database as an executive at IIMUN.',
    image: iimunImage,
    link: ''
  }
];

const ActivitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1));
  };

  const { title, description, image, link } = activities[currentIndex];

  return (
    <div className="slider-container">
      <h3>Know More About Me...</h3>
      <button className="slider-button prev" onClick={handlePrev}>&#10094;</button>
      <div className="slider-slide">
        <img src={image} alt={title} className="slider-image" />
        <h3 className="slider-title">{title}</h3>
        <p className="slider-description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="slider-link">
            Learn More
          </a>
        )}
      </div>
      <button className="slider-button next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default ActivitiesSlider;
