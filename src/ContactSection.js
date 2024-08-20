import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './ContactSection.css';
import githubIcon from './images/github.svg';
import linkedinIcon from './images/linkedin.svg';

function ContactSection() {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');

  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString(i18n.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setCurrentTime(timeString);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xeqykvev", {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    });

    if (response.ok) {
      alert(t('Thank you for reaching out! Your message has been sent successfully.'));
    } else {
      alert(t('Oops! Something went wrong. Please try again.'));
    }
  };

  return (
    <section className="ContactSection" id="contact" ref={ref}>
      <h2 className={`ContactTitle ${isVisible ? 'visible' : ''} text-center mb-5`}>{t('CONTACT ME')}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="ContactForm card p-4 shadow-sm">
            <p className="lead">{t("Got an incredible idea? Let's collaborate and turn it into reality.")}</p>
            <p>{t("I'm ready to dive into a dynamic role with a forward-thinking company.")}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder={t('Your name')} required />
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder={t('Your email')} required />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" placeholder={t('Your message')} rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">{t('Send message')}</button>
            </form>
          </div>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="ContactDetails">
            <div className="ContactInfo mb-4">
              <h3>{t('Contact Details')}</h3>
              <p>{t('Email')}: brunnokenzokillaruna@gmail.com</p>
              <p>{t('Phone')}: +1 (438) 372-6415</p>
            </div>
            <div className="DigitalSpaces mb-4">
              <h3>{t('Digital Spaces')}</h3>
              <div className="d-flex flex-column align-items-start">
                <a href="https://github.com/brunnokenzokillaruna" className="d-flex align-items-center mb-2">
                  <img src={githubIcon} alt={t('Github')} className="me-2" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/brunnokenzo/" className="d-flex align-items-center">
                  <img src={linkedinIcon} alt={t('LinkedIn')} className="me-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="Location">
              <h3>{t('Location')}</h3>
              <p>{t('Montreal/Canada')}</p>
              <p className="timeValue">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
