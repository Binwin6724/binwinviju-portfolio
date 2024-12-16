import React, { useState } from 'react';
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
    setCurrentProjectIndex((prev) =>
      prev + 2 >= projects.length ? 0 : prev + 2
    );
  };

  const prevProjects = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? Math.floor((projects.length - 1) / 2) * 2 : prev - 2
    );
  };

  const totalSlides = Math.ceil(projects.length / 2);
  const currentSlide = Math.floor(currentProjectIndex / 2);

  return (
    <section id="projects" name="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-carousel">
          <button
            className="projects-nav-button prev main-nav"
            onClick={prevProjects}
            aria-label="Previous projects"
          >
            <FaChevronLeft />
          </button>

          <div className="projects-viewport main">
            <div
              className="projects-track main"
              style={{ transform: `translateX(-${(currentProjectIndex / 2) * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 2) }, (_, i) => i * 2).map((startIdx) => (
                <div key={startIdx} className="projects-slide">
                  {projects.slice(startIdx, startIdx + 2).map((project, index) => (
                    <div key={startIdx + index} className="project-card">
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
                            aria-label="View source code on GitHub"
                          >
                            <FaGithub />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live project"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            className="projects-nav-button next main-nav"
            onClick={nextProjects}
            aria-label="Next projects"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="projects-dots main">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`project-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentProjectIndex(index * 2)}
              aria-label={`Go to project set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
