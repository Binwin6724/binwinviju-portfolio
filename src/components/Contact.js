import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_24993tb',
      'template_c9d7fhc',
      form.current,
      'sdmaqHGy16WP1IvlQ'
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      });
  };

  return (
    <section name="contact" id="contact" className="contact-section">
      <div className="contact-container">
        <div className='contact-content'>
          <h3 className="contact-subtitle">Let's Connect!</h3>
          <p className="contact-description">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
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

            <button 
              type="submit" 
              className="submit-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="error-message">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="contact-links">
            <a
              href="https://github.com/Binwin6724"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/binwin-viju-7299a917b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:binwinviju225096@gmail.com"
              className="contact-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
