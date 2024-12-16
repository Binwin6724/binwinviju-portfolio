import React from 'react';
import ProfileImg from '../assets/profile.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <section name="about" id="about" className="about-section">
      <div className="about-container">
        <div>
          <h2 className="about-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="mb-4">
              I am a Senior Data Engineer and Full Stack Developer with 3.4 years of experience
              at LatentView Analytics, specializing in cloud and data solutions. With a strong background
              in technologies including React, Python, SQL, and databases like PostgreSQL, MySQL,
              and MongoDB, I have successfully led projects automating ETL processes and
              improving data accuracy.
            </p>
            <p className="mb-4">
              Recently, I integrated the ECP app with image AI platforms like
              Hue Facebook, GitHub, Snapchat, and VSCO, enabling direct ad publishing. I am
              driven by a passion for leveraging technology to deliver impactful business results.
            </p>
          </div>
          <div className="about-image-container">
            <img
              src={ProfileImg}
              alt="Binwin Viju"
              className="about-image"
            />
            <div className="about-image-border"></div>
          </div>
          <div className="bg-[#0a192f] p-6 rounded-lg shadow-xl border border-[#233554] hover:border-[#64ffda] transition-all duration-300">
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">Personal Details</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span style={{ fontWeight: 'bold', color: '#ccd6f6' }}>Email : </span>
                <a href="mailto:binwinviju225096@gmail.com" style={{ cursor: 'pointer', color: '#8892b0' }}>
                  binwinviju225096@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span style={{ fontWeight: 'bold', color: '#ccd6f6' }}>Phone : </span>
                <a href="tel:+918547476156" style={{ cursor: 'pointer', color: '#8892b0' }}>
                  +91 85474 76156
                </a>
              </div>
              {/*               <div className="flex flex-col sm:flex-row gap-2">
                <span className="font-bold text-[#ccd6f6] min-w-[100px]">Location:</span>
                <span className="text-[#8892b0]">Kollannur House, Kizhur P.O, Vyssery, Kunnamkulam, Kerala, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold text-[#ccd6f6] min-w-[100px]">Birth Date:</span>
                <span className="text-[#8892b0]">19/06/1999</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold text-[#ccd6f6] min-w-[100px]">Nationality:</span>
                <span className="text-[#8892b0]">Indian</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
