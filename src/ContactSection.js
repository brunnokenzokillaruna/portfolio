import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './ContactSection.css';
import githubIcon from './images/github.svg';
import linkedinIcon from './images/linkedin.svg';

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been sent successfully. I will get back to you as soon as possible.");
  };

  const [currentTime, setCurrentTime] = useState('');
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setCurrentTime(timeString);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section className="ContactSection" id="contact" ref={ref}>
      <h2 className={`ContactTitle ${isVisible ? 'visible' : ''}`}>Contact Me</h2>
      <div className="ContactContent">
        <div className="ContactForm">
          <p>Have an awesome idea? Let's bring it to life together.</p>
          <p>I am open to freelance opportunities or internships in startups, agencies, and companies.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="ContactDetails">
          <div className="ContactInfo">
            <h3>Contact Details</h3>
            <p>Email: brunnokenzokillaruna@gmail.com</p>
            <p>Phone: +1 (438) 372-6415</p>
          </div>
          <div className="DigitalSpaces">
            <h3>Digital Spaces</h3>
            <a href="https://github.com/brunnokenzokillaruna">
              <img src={githubIcon} alt="Github" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/brunnokenzo/">
              <img src={linkedinIcon} alt="LinkedIn" />
              LinkedIn
            </a>
          </div>
          <div className="Location">
            <h3>Location</h3>
            <p>Montreal/Canada</p>
            <p>Current Time: {currentTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
