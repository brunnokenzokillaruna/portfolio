import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import heroImage from './images/hero.jpeg';

function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <section id="hero-section" className={`HeroSection d-flex flex-column justify-content-center align-items-center ${i18n.language === 'fr' ? 'fr' : ''} ${i18n.language === 'pt' ? 'pt' : ''} ${i18n.language === 'es' ? 'es' : ''}`}>
      <div className="container text-center">
        <div className="hero-image-wrapper">
          <img src={heroImage} alt={t('Abstract Art')} className="hero-image img-fluid" />
        </div>
        <div className="hero-text-wrapper">
          <h1>{t('Hey there,')}</h1>
          <h2>{t('I\'m Brunno')}</h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
