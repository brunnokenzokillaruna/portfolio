import React from 'react';
import './HeroSection.css';
import heroImage from './images/hero.jpeg';

function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Abstract Art" className="hero-image" />
      </div>
      <div className="hero-text-wrapper">
        <h1><span>Hey, I'm Brunno</span></h1>
        <h1><span>Hey, I'm Brunno</span></h1>
        <h1><span>Hey, I'm Brunno</span></h1>
      </div>
    </section>
  );
}

export default HeroSection;
