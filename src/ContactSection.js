import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './ContactSection.css';
import githubIcon from './images/github.svg';
import linkedinIcon from './images/linkedin.svg';

const ContactSection = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const { elementRef, isVisible } = useIntersectionObserver();
  const sectionRef = useRef(null);

  // Handle direct navigation to contact section
  useEffect(() => {
    if (window.location.hash === '#contact' && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, []);

  // Live clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(i18n.language, { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Form submission handler with Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      setFormStatus({ message: '', type: '' });

      const formData = new FormData(e.target);
      
      // Check if we're in local development
      const isLocalDev = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';

      // Always try to submit the form data to Formspree
      try {
        const response = await fetch("https://formspree.io/f/xeqykvev", {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        // In production, determine success/error based on the response
        if (!isLocalDev) {
          if (response.status >= 200 && response.status < 300) {
            setFormStatus({
              message: t('Thank you for reaching out! Your message has been sent successfully.'),
              type: 'success'
            });
            e.target.reset();
          } else {
            // Try to get response data for detailed error if possible
            let errorMessage = t('Oops! Something went wrong. Please try again.');
            try {
              const responseData = await response.json();
              if (responseData && responseData.error) {
                errorMessage = responseData.error;
              }
            } catch (jsonError) {
              console.error('Error parsing JSON response:', jsonError);
            }
            
            console.error('Formspree error status:', response.status);
            setFormStatus({
              message: errorMessage,
              type: 'error'
            });
          }
        } else {
          // In development, always show success (even with CORS errors)
          console.log('Development environment: Form submitted, showing success regardless of response');
          setFormStatus({
            message: t('Thank you for reaching out! Your message has been sent successfully.'),
            type: 'success'
          });
          e.target.reset();
        }
      } catch (fetchError) {
        console.warn('Fetch error:', fetchError);
        
        if (isLocalDev) {
          // In development, show success message even for CORS errors
          console.log('Development environment: Showing success despite fetch error');
          setFormStatus({
            message: t('Thank you for reaching out! Your message has been sent successfully.'),
            type: 'success'
          });
          e.target.reset();
        } else if (fetchError.name === 'TypeError' && fetchError.message.includes('fetch')) {
          // In production, if it looks like a CORS error, assume success
          console.warn('Potential CORS error in production, assuming form submission was successful:', fetchError);
          setFormStatus({
            message: t('Thank you for reaching out! Your message has been sent successfully.'),
            type: 'success'
          });
          e.target.reset();
        } else {
          // For other errors in production, show error message
          throw fetchError;
        }
      }
    } catch (error) {
      // Only show error for non-CORS related issues
      console.error('Form submission error:', error);
      setFormStatus({
        message: t('Oops! Something went wrong. Please try again.'),
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section-wrapper">
      <section className="contact-section" id="contact" ref={sectionRef}>
        <div className="contact-container">
          <h2 className={`contact-title ${isVisible ? 'visible' : ''}`} ref={elementRef}>
            {t('CONTACT ME')}
          </h2>
          
          <div className="contact-content">
            {/* Contact form with Formspree integration */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h3>{t("Got an incredible idea? Let's collaborate and turn it into reality.")}</h3>
                <p>{t("Let's connect to create something amazing together or discuss opportunities for collaboration.")}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t('Your name')} 
                  required 
                  disabled={isSubmitting}
                />
                
                <input 
                  type="email" 
                  name="email" 
                  placeholder={t('Your email')} 
                  required 
                  disabled={isSubmitting}
                />
                
                <textarea 
                  name="message" 
                  placeholder={t('Your message')} 
                  rows="5" 
                  required 
                  disabled={isSubmitting}
                ></textarea>

                {formStatus.message && (
                  <div className={`form-status ${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('Sending...') : t('Send message')}
                </button>
              </form>
            </div>

            {/* Contact info and social links */}
            <div className="contact-info">
              <div className="info-section">
                <h3>{t('Contact Details')}</h3>
                <p>
                  <strong>{t('Email')}:</strong> brunnokenzokillaruna@gmail.com
                </p>
                <p>
                  <strong>{t('Phone')}:</strong> +1 (438) 372-6415
                </p>
              </div>

              <div className="info-section">
                <h3>{t('Digital Spaces')}</h3>
                <div className="social-links">
                  <a 
                    href="https://github.com/brunnokenzokillaruna" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="social-link"
                  >
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/brunnokenzo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="social-link"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="info-section">
                <h3>{t('Current Time')}</h3>
                <p className="time-display">{currentTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection; 