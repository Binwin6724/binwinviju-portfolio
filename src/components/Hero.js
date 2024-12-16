import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../styles/Hero.css';
import Resume from '../resume/Binwin Resume.pdf';

const Hero = () => {
  return (
    <section name="home" id="home" className="hero-section">
      <div className="hero-container">
        <div className="animate-fadeIn">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-4 hero-title animate-slideInLeft">
            Binwin Viju
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] hero-subtitle animate-slideInRight">
            Senior Data Engineer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] text-lg leading-relaxed hero-description animate-fadeIn">
            A passionate Senior Data Engineer and Full Stack Developer with 3.4 years of experience,
            specializing in building exceptional data solutions and web applications.
            Currently focused on developing automated data pipelines and creating efficient web applications.
          </p>
          
          <div className="flex gap-6 mt-8 hero-buttons animate-slideInBottom">
            <Link to="projects" smooth={true} duration={500}>
              <button className="group flex items-center gap-2 bg-transparent border-2 px-6 py-3 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] rounded-lg transition-all duration-300 hero-button hero-button-outline">
                View Work
                <span className="group-hover:rotate-90 duration-300 hero-button-icon">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
            <a 
              href={Resume}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              <span className="absolute inset-0 bg-[#64ffda] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></span>
              <button className="relative bg-[#64ffda] border-2 border-[#64ffda] px-6 py-3 text-[#0a192f] hover:bg-transparent hover:text-[#64ffda] rounded-lg transition-all duration-300 hero-button hero-button-primary">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
