import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      type: "Promotion",
      date: "08/2023-Present",
      description: "I advanced from data engineer to senior data engineer in 1.5 years, which is the minimal year for advancement."
    },
    {
      type: "Encore Award",
      date: "01/2023-04/2023",
      description: "Got LatentView award for top performance in the month of January - April 2023"
    },
    {
      type: "Encore Award",
      date: "04/2022-06/2022",
      description: "Got LatentView Encore award for top performance in the month of April - June 2022"
    },
    {
      type: "Encore Award",
      date: "10/2023-12/2024",
      description: "Got LatentView Encore award for outstanding performance"
    }
  ];

  const socialCommitment = [
    {
      title: "Swachh Bharat Mission, Thrissur",
      date: "03/2018-03/2018",
      description: "Helped collect waste from the Swaraj Round, Thrissur as part of the Swachh Bharat Mission organized by Jyothi Engineering College, Thrissur during March 2018."
    },
    {
      title: "Flood Relief Team, Thrissur",
      date: "09/2018-09/2018",
      description: "Part of the flood relief team of Jyothi Engineering College, Thrissur"
    }
  ];

  return (
    <section name="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>

        {/* Professional Achievements */}
        <div className="section-container">
          <h3 className="section-title">Professional Recognition</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  {achievement.type === "Promotion" ? <FaTrophy size={24} /> : <FaMedal size={24} />}
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-type">{achievement.type}</h4>
                  <p className="achievement-date">{achievement.date}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Commitment */}
        <div className="section-container">
          <h3 className="section-title">Social Commitment</h3>
          <div className="achievements-grid">
            {socialCommitment.map((activity, index) => (
              <div key={index} className="social-card">
                <h4 className="social-title">{activity.title}</h4>
                <p className="social-date">{activity.date}</p>
                <p className="social-description">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
