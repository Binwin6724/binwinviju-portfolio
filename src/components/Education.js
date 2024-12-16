import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      school: "Bachelor of Technology, Jyothi Engineering College, Thrissur",
      period: "08/2017-06/2021",
      details: {
        course: "Computer Science and Engineering",
        grade: "CGPA - 7.33"
      }
    },
    {
      school: "HSE, Bethany St. John's English Higher Secondary School, Thrissur",
      period: "07/2014-05/2017",
      details: {
        course: "Computer Science",
        grade: "Percentage - 79.5"
      }
    },
    {
      school: "HS, Blooming Buds Bethania Senior Secondary School, Thrissur",
      period: "06/2014-03/2015",
      details: {
        grade: "CGPA - 8.4"
      }
    }
  ];

  const languages = [
    { name: "English", level: "Native speaker" },
    { name: "Malayalam", level: "Native speaker" },
    { name: "Hindi", level: "Very good command" },
    { name: "Tamil", level: "Highly proficient" }
  ];

  const hobbies = ["Gaming", "Swimming", "Football", "Cricket", "Volleyball"];

  return (
    <section name="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education & Skills</h2>
        
        {/* Education */}
        <div className="education-grid">
          <h3 className="education-section-title">Education</h3>
          <div className="education-cards">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4 className="school-name">{edu.school}</h4>
                <p className="period">{edu.period}</p>
                <div className="education-details">
                  {edu.details.course && <p>{edu.details.course}</p>}
                  <p>{edu.details.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="languages-grid">
          <h3 className="education-section-title">Languages</h3>
          <div className="language-cards">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <h4 className="language-name">{lang.name}</h4>
                <p className="language-level">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="hobbies-container">
          <h3 className="education-section-title">Hobbies</h3>
          <div className="hobby-tags">
            {hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
