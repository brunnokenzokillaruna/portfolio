import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './ServicesSection.css';
import javaIcon from './images/java.svg';
import androidStudioIcon from './images/androidstudio.svg';
import csharpIcon from './images/csharp.svg';
import cssIcon from './images/css.svg';
import figmaIcon from './images/figma.svg';
import htmlIcon from './images/html.svg';
import javascriptIcon from './images/javascript.svg';
import mysqlIcon from './images/mysql.svg';
import pythonIcon from './images/python.svg';
import swiftIcon from './images/swift.svg';
import reactIcon from './images/react.svg';
import moreIcon from './images/more.svg';

function ServicesSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const icons = [
    { src: javaIcon, alt: "Java", text: "Java for Backend Development" },
    { src: androidStudioIcon, alt: "Android Studio", text: "Building Apps with Android Studio" },
    { src: csharpIcon, alt: "C#", text: "C# for Application Development" },
    { src: cssIcon, alt: "CSS", text: "CSS for Styling" },
    { src: figmaIcon, alt: "Figma", text: "UI/UX Design with Figma" },
    { src: htmlIcon, alt: "HTML", text: "HTML for Web Markup" },
    { src: javascriptIcon, alt: "JavaScript", text: "JavaScript for Web Interactivity" },
    { src: mysqlIcon, alt: "MySQL", text: "MySQL for Database Management" },
    { src: pythonIcon, alt: "Python", text: "Python for Software Development" },
    { src: swiftIcon, alt: "Swift", text: "Swift for iOS Development" },
    { src: reactIcon, alt: "React", text: "React for Frontend Development" },
    { src: moreIcon, alt: "More", text: "Versatile in Additional Technologies" },
  ];
  

  return (
    <section className="ServicesSection" id="services" ref={sectionRef}>
      <h2 className={`ServicesTitle ${isVisible ? 'visible' : ''}`}>MY SERVICES</h2>
      <div className="ServicesContent">
        {icons.map((icon, index) => (
          <div key={index} className={`ServiceItem ${isVisible ? 'visible' : ''}`}>
            <img src={icon.src} alt={icon.alt} className={`ServiceIcon ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }} />
            <h3 className={isVisible ? 'visible' : ''} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>{icon.alt}</h3>
            <p className={isVisible ? 'visible' : ''} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>{icon.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
