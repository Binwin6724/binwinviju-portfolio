import React from 'react';
import '../styles/Projects.css';
import project1image from '../assets/project1.png';
import project2image from '../assets/project1.png';
import project3image from '../assets/project1.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      image: project1image,
      title: "Adobe Engagement Campaign Platform",
      duration: "01/2022-Present",
      description: [
        "Led the development of ECP app integration with image AI platforms",
        "Automated data pipeline for processing and analyzing large-scale datasets",
        "Implemented real-time data synchronization between multiple platforms",
        "Optimized database queries resulting in 40% faster response times",
        "Developed RESTful APIs for seamless platform integration"
      ],
      links: {
        github: "https://github.com/binwinviju/Adobe-Engagement-Campaign-Platform",
        website: "https://adobe-engagement-campaign-platform.vercel.app/"
      }
    },
    {
      image: project2image,
      title: "React Applications Portfolio",
      duration: "2022-2023",
      description: [
        "Business Management MERN",
        "Portfolio Website",
        "Ecommerce Website",
        "Social Media Website",
        "Movie Booking Website",
        "Food Delivery Website",
        "Crypto Currency Website",
        "Real Estate Website"
      ],
      links: {
        github: "https://github.com/binwinviju/Adobe-Engagement-Campaign-Platform",
        website: "https://adobe-engagement-campaign-platform.vercel.app/"
      }
    },
    {
      image: project3image,
      title: "Drone Development (Final Year Project)",
      duration: "2021",
      description: [
        "Designed and implemented autonomous flight control systems",
        "Integrated GPS navigation and obstacle avoidance",
        "Developed real-time video streaming capabilities",
        "Created a user-friendly control interface"
      ],
      links: {
        github: "https://github.com/binwinviju/Adobe-Engagement-Campaign-Platform",
        website: "https://adobe-engagement-campaign-platform.vercel.app/"
      }
    }
  ];

  return (
    <section name="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x225?text=Project+Image';
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.duration && (
                  <p className="project-duration">{project.duration}</p>
                )}
                <div className="project-description">
                  <ul>
                    {project.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
