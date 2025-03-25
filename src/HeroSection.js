import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import heroImage from './images/hero.jpeg';

// Landing section with dynamic language support
function HeroSection() {
  const { t, i18n } = useTranslation();

  // Adjust layout based on language
  const languageClass = i18n.language === 'fr' ? 'fr' : 
                       i18n.language === 'pt' ? 'pt' : 
                       i18n.language === 'es' ? 'es' : '';

  return (
    // Full-screen hero with centered content
    <section 
      id="hero-section" 
      className={`HeroSection d-flex flex-column justify-content-center align-items-center ${languageClass}`}
      aria-label="Hero Section"
    >
      <div className="container text-center">
        {/* Background artwork */}
        <div className="hero-image-wrapper">
          <img 
            src={heroImage} 
            alt={t('Abstract Art')} 
            className="hero-image img-fluid" 
            aria-hidden="true"
          />
        </div>
        
        {/* Two-part heading */}
        <div className="hero-text-wrapper" role="heading" aria-level="1">
          {/* Outlined greeting */}
          <h2 className="outline-text" aria-label={t('Hey there,')}>
            {t('Hey there,')}
          </h2>
          {/* Name introduction */}
          <h1 aria-label={t('I\'m Brunno')}>
            {t('I\'m Brunno')}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
