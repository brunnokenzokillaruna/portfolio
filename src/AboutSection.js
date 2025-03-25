// Core dependencies
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './AboutSection.css';
import picture from './images/picture.jpeg';

// About section with scroll-based animations
function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="about" className="AboutSection d-flex flex-column justify-content-center align-items-center" ref={ref}>
      {/* Section title */}
      <h2 className="AboutTitle text-uppercase visible">{t('About')}</h2>
      
      {/* Two-column layout */}
      <div className="AboutContent row w-100">
        {/* Bio text with fade-in */}
        <div className={`AboutText col-lg-6 ${isVisible ? 'visible' : ''}`}>
          <p>{t('Introducing myself in a nutshell: Who am I?')}</p>
          <p className="paragraph">{t('My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I am excited by the creative potential of technology and the ability to build solutions that make a difference.')}</p>
          <p className="paragraph">{t('Outside of my studies, I am always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.')}</p>
          <p className="paragraph">{t('My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I am eager to take on projects that drive innovation, whether it is building beautiful web interfaces or developing powerful backend systems. I am most excited about the opportunity to keep learning and expanding my skills in the years to come.')}</p>
        </div>
        
        {/* Profile image with fade-in */}
        <div className={`AboutImage col-lg-6 d-flex justify-content-center align-items-center ${isVisible ? 'visible' : ''}`}>
          <img src={picture} alt={t('Profile')} className={`${isVisible ? 'visible' : ''}`} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
