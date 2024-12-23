import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Projects.css';
import biHome1 from '../assets/bi-home/1.png';
import biHome2 from '../assets/bi-home/2.png';
import biHome3 from '../assets/bi-home/3.png';
import biHome4 from '../assets/bi-home/4.png';
import fundTracker1 from '../assets/fund-tracker/1.png';
import fundTracker2 from '../assets/fund-tracker/2.png';
import fundTracker3 from '../assets/fund-tracker/3.png';
import todolist1 from '../assets/todo-list/1.png';
import tempProjectImage from '../assets/temp-project-image.png';
import kiraliJewellers1 from '../assets/kirali-jewellers/1.png';
import kiraliJewellers2 from '../assets/kirali-jewellers/2.png';
import kiraliJewellers3 from '../assets/kirali-jewellers/3.png';
import kiraliJewellers4 from '../assets/kirali-jewellers/4.png';
import memorizerGame1 from '../assets/memorizer/1.png';
import memorizerGame2 from '../assets/memorizer/2.png';
import memorizerGame3 from '../assets/memorizer/3.png';
import memorizerGame4 from '../assets/memorizer/4.png';
import etrace1 from '../assets/etrace/1.png';

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projects-carousel-container">
      {images.length > 1 && (
        <button
          className="projects-nav-button prev"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
      )}

      <div className="projects-viewport">
        <div
          className="projects-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="project-image-container">
              <img
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <button
          className="projects-nav-button next"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      )}

      {images.length > 1 && (
        <div className="projects-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`project-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: 'TaskMaster - Todo List',
      description: 'A powerful and intuitive todo list application with rich text formatting, task categorization, and progress tracking.',
      images: [todolist1],
      github: 'https://github.com/Binwin6724/todo-list',
      live: 'https://taskmaster.choreoapps.dev/',
      tags: ['React']
    },
    {
      title: 'Fund Tracker',
      description: 'Fund Tracker is a platform that allows users to track and manage their funds efficiently. It provides management dashboard designed to help users efficiently track and manage their financial activities, including income, expenses, and overall balances. The intuitive interface and well-structured layout make it ideal for individuals, families, or small businesses to monitor their cash flow and manage budgets effectively.',
      images: [fundTracker1, fundTracker2, fundTracker3],
      github: 'https://github.com/Binwin6724/fund-tracker',
      live: 'https://fund-tracker.choreoapps.dev/',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'BI Home',
      description: 'A comprehensive Business Intelligence solution that transforms raw data into actionable insights. Features include interactive dashboards, automated reporting, and real-time analytics visualization.',
      images: [biHome1, biHome2, biHome3, biHome4],
      github: 'https://github.com/Binwin6724/Bi-home',
      live: 'https://bi-home.choreoapps.dev/',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'Kirali Jewellers - Frontend Demo',
      description: 'A frontend demo for a Kirali Jewellers website, showcasing a visually appealing and user-friendly interface for a jewelry store.',
      images: [kiraliJewellers1, kiraliJewellers2, kiraliJewellers3, kiraliJewellers4],
      github: 'https://github.com/Binwin6724/jewellery',
      live: 'https://jewellery.choreoapps.dev',
      tags: ['React']
    },
    {
      title: 'Etrace - Expense Tracker',
      description: 'An expense tracker app built with React and Firebase. Users can add, edit, and delete expenses, set budgets, and view detailed analytics.',
      images: [etrace1],
      github: '',
      live: 'https://etrace-68406.web.app',
      tags: ['React', 'Firebase']
    },  
    {
      title: 'Memorizer Game',
      description: 'A simple memorizer game built with React. Users can practice their memory by clicking on different cards and trying to match the patterns.',
      images: [memorizerGame1, memorizerGame2, memorizerGame3, memorizerGame4],
      github: 'https://github.com/Binwin6724/Memorizer',
      live: 'https://memorizer-c0d7b.web.app/',
      tags: ['React']
    },
    {
      title: 'Other React Applications',
      description: 'Other React applications I have built are CURD app using React, MongoDB and Flask. Bloo Messenger using React and Firebase. Validation in React using React, MySQL and NodeJS. Rock Paper and Scissor game using React and Heroku. Income Tracker using React and Heroku. CRUD app using React, MySQL, NodeJS. Tinder Clone using MERN. All these applications are not properly deployed.',
      images: [tempProjectImage],
      github: 'https://github.com/Binwin6724',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Flask']
    }
  ];

  const nextProjects = () => {
    const step = isMobile ? 1 : 2;
    setCurrentProjectIndex((prev) =>
      prev + step >= projects.length ? 0 : prev + step
    );
  };

  const prevProjects = () => {
    const step = isMobile ? 1 : 2;
    setCurrentProjectIndex((prev) =>
      prev === 0 ? Math.floor((projects.length - 1) / step) * step : prev - step
    );
  };

  const visibleProjects = isMobile
    ? [projects[currentProjectIndex]]
    : projects.slice(currentProjectIndex, currentProjectIndex + 2);

  const totalSlides = Math.ceil(projects.length / (isMobile ? 1 : 2));
  const currentSlide = Math.floor(currentProjectIndex / (isMobile ? 1 : 2));

  return (
    <section id="projects" name="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-carousel">
          <div className="projects-viewport main">
            <div className="projects-track main">
              {visibleProjects.map((project, index) => (
                <div key={index} className="projects-slide">
                  <div className="project-card">
                    <ProjectCarousel images={project.images} />
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="projects-dots main">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`project-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentProjectIndex(index * (isMobile ? 1 : 2))}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="projects-nav-button prev"
            onClick={prevProjects}
            aria-label="Previous projects"
          >
            <FaChevronLeft />
          </button>
          <button
            className="projects-nav-button next"
            onClick={nextProjects}
            aria-label="Next projects"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
