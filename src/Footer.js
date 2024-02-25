import React from 'react';
import './Footer.css';
import arrowIcon from './images/arrow.svg';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="Footer">
      <div className="FooterContent">
        <span>&copy; {new Date().getFullYear()} Brunno's Portfolio</span>
        <div className="BackToTop" onClick={scrollToTop}>
          Back to the top
          <div className="Arrows">
            <img src={arrowIcon} alt="Up" />
            <img src={arrowIcon} alt="Up" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
