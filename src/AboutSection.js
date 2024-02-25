import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './AboutSection.css';
import picture from './images/picture.jpeg';

function AboutSection() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section id="about" className="AboutSection" ref={ref}>
      <h2 className={`AboutTitle ${isVisible ? 'visible' : ''}`}>ABOUT ME</h2>
      <div className="AboutContent">
        <div className={`AboutText ${isVisible ? 'visible' : ''}`}>
          <p>Introducing myself in a nutshell: Who am I?</p>
          <p>My journey from practicing law in Brazil to pursuing a career in web and software development in Canada shows my adaptability and strong passion for solving problems. I'm excited by the creative potential of technology and the ability to build solutions that make a difference.</p>
          <p>Outside of my studies, I'm always learning. I find inspiration and knowledge in games, online courses, and videos – always seeking new challenges to grow. This dedication reflects my belief that success in the rapidly changing world of technology requires constant improvement.</p>
          <p>My goal is to work within a collaborative team where I can contribute my creative thinking and technical abilities. I'm eager to take on projects that drive innovation, whether it's building beautiful web interfaces or developing powerful backend systems. I'm most excited about the opportunity to keep learning and expanding my skills in the years to come.</p>
        </div>
        <div className={`AboutImage ${isVisible ? 'visible' : ''}`}>
          <img src={picture} alt="Profile" className={`${isVisible ? 'visible' : ''}`}/>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
