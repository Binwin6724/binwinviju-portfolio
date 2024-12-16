import React from 'react';
import { 
  FaPython, FaReact, FaNodeJs, FaAws, 
  FaDocker, FaGithub, FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, 
  SiMysql, SiKubernetes , SiHtml5, SiDatabricks, SiMariadb
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = {
    'Programming Languages': [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaNodeJs /> },
    ],
    'Frontend Development': [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
    ],
    'Backend & Databases': [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MariaDB', icon: <SiMariadb /> },
    ],
    'DevOps & Cloud': [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
    'Data Engineering': [
      { name: 'ETL', icon: <FaDatabase /> },
      { name: 'Databricks', icon: <SiDatabricks /> },
    ],
  };

  return (
    <section name="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
