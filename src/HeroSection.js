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
        <h1>Hey there,</h1>
        <h2>I'm Brunno</h2>
      </div>
    </section>
  );
}

export default HeroSection;
