import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import arrowIcon from './images/arrow.svg';

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-start">
            <span>&copy; {new Date().getFullYear()} {t('Brunno\'s Portfolio')}</span>
          </div>
          <div className="col-md-6 text-end">
            <div className="BackToTop d-inline-flex align-items-center" onClick={scrollToTop}>
              {t('Back to the top')}
              <div className="Arrows d-flex flex-column ms-2">
                <img src={arrowIcon} alt="Up" className="arrow-icon" />
                <img src={arrowIcon} alt="Up" className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
