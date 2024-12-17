import React, { useState } from 'react';
import { 
  FaPython, FaReact, FaNodeJs, FaAws, 
  FaDocker, FaGithub, FaDatabase,
  FaGoogle,
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, 
  SiMysql, SiKubernetes , SiHtml5, SiDatabricks, SiMariadb,
  SiApachehadoop,
  SiPresto,
  SiEclipseche,
  SiC,
  SiCplusplus,
  SiGo
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = {
    'Programming Languages': [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaNodeJs /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'Go', icon: <SiGo /> },
    ],
    'Frontend Development': [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'Eclipse', icon: <SiEclipseche /> },
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
      { name: 'Google Cloud', icon: <FaGoogle /> },
    ],
    'Data Engineering': [
      { name: 'ETL', icon: <FaDatabase /> },
      { name: 'Databricks', icon: <SiDatabricks /> },
      { name: 'Hadoop', icon: <SiApachehadoop /> },
      { name: 'Presto', icon: <SiPresto /> },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(Object.keys(skillCategories)[0]);

  return (
    <section name="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        
        <div className="skills-tabs">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories[activeCategory].map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
