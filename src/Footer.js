// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  // Initialize translations
  const { t } = useTranslation();

  // Smooth scroll to top handler
  const scrollToTop = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="Footer" role="contentinfo">
      {/* Copyright section */}
      <div className="copyright">
        <span>&copy; {new Date().getFullYear()} {t('Brunno\'s Portfolio')}</span>
      </div>

      {/* Back to top button with animated arrows */}
      <button 
        className="BackToTop" 
        onClick={scrollToTop}
        aria-label={t('Back to the top')}
      >
        <span className="back-text">{t('Back to the top')}</span>
        <div className="Arrows" aria-hidden="true">
          <svg 
            className="arrow-icon" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 15L12 7L20 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
          <svg 
            className="arrow-icon" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 15L12 7L20 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
    </footer>
  );
}

export default Footer;
