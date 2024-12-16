import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Projects.css';
import biHome1 from '../assets/bi-home/1.png';
import biHome2 from '../assets/bi-home/2.png';
import biHome3 from '../assets/bi-home/3.png';
import biHome4 from '../assets/bi-home/4.png';
import project2image from '../assets/project1.png';
import project3image from '../assets/project1.png';

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
      title: 'BI Home',
      description: 'A comprehensive Business Intelligence solution that transforms raw data into actionable insights. Features include interactive dashboards, automated reporting, and real-time analytics visualization.',
      images: [biHome1, biHome2, biHome3, biHome4],
      github: 'https://github.com/Binwin6724/Bi-home',
      live: 'https://bi-home.choreoapps.dev/',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'React Applications Portfolio',
      description: 'A collection of full-stack applications including Business Management, E-commerce, Social Media, Movie Booking, Food Delivery, Cryptocurrency, and Real Estate platforms.',
      images: [project2image],
      github: 'https://github.com/binwinviju/Adobe-Engagement-Campaign-Platform',
      live: 'https://adobe-engagement-campaign-platform.vercel.app/',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Redux']
    },
    {
      title: 'Drone Development',
      description: 'Final year project focused on autonomous drone technology. Implemented flight control systems, GPS navigation, obstacle avoidance, and real-time video streaming capabilities.',
      images: [project3image],
      github: 'https://github.com/binwinviju/drone-project',
      live: 'https://drone-project-demo.vercel.app/',
      tags: ['Python', 'OpenCV', 'ROS', 'Arduino', 'Computer Vision']
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
