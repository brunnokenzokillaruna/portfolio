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
        <h1>Hey, I'm Brunno</h1>
        <h1>Hey, I'm Brunno</h1>
        <h1>Hey, I'm Brunno</h1>
      </div>
    </section>
  );
}

export default HeroSection;
