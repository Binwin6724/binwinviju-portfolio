import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section name="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-subtitle">Let's Connect!</h3>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="contact-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:binwinviju2505@gmail.com"
            className="contact-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
