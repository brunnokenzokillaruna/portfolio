import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './ServicesSection.css';
import androidStudioIcon from './images/androidstudio-plain.svg';
import blazorIcon from './images/blazor-original.svg';
import bootstrapIcon from './images/bootstrap-plain.svg';
import canvaIcon from './images/canva-original.svg';
import csharpIcon from './images/csharp-plain.svg';
import css3Icon from './images/css3-plain.svg';
import dotnetCoreIcon from './images/dotnetcore-plain.svg';
import dotnetIcon from './images/dot-net-plain.svg';
import expressIcon from './images/express-original-wordmark.svg';
import figmaIcon from './images/figma-original.svg';
import firebaseIcon from './images/firebase-plain.svg';
import gimpIcon from './images/gimp-plain.svg';
import gitIcon from './images/git-plain.svg';
import githubIcon from './images/github-original.svg';
import goIcon from './images/go-original-wordmark.svg';
import html5Icon from './images/html5-plain.svg';
import javascriptIcon from './images/javascript-original.svg';
import javaIcon from './images/java-plain.svg';
import jqueryIcon from './images/jquery-plain.svg';
import mariadbIcon from './images/mariadb-original.svg';
import mongodbIcon from './images/mongodb-plain.svg';
import mysqlIcon from './images/mysql-original.svg';
import nodejsIcon from './images/nodejs-plain-wordmark.svg';
import npmIcon from './images/npm-original-wordmark.svg';
import oracleIcon from './images/oracle-original.svg';
import phpIcon from './images/php-plain.svg';
import postmanIcon from './images/postman-plain.svg';
import pythonIcon from './images/python-plain.svg';
import reactIcon from './images/react-original.svg';
import sqlDeveloperIcon from './images/sqldeveloper-plain.svg';
import swiftIcon from './images/swift-plain.svg';
import tailwindIcon from './images/tailwindcss-original.svg';
import trelloIcon from './images/trello-plain-wordmark.svg';
import typescriptIcon from './images/typescript-plain.svg';
import wordpressIcon from './images/wordpress-plain.svg';
import xcodeIcon from './images/xcode-plain.svg';

function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const firstCarouselIcons = [
    { src: androidStudioIcon, name: "Android Studio" },
    { src: blazorIcon, name: "Blazor" },
    { src: bootstrapIcon, name: "Bootstrap" },
    { src: canvaIcon, name: "Canva" },
    { src: csharpIcon, name: "C#" },
    { src: css3Icon, name: "CSS3" },
    { src: dotnetCoreIcon, name: ".NET Core" },
    { src: dotnetIcon, name: ".NET" },
    { src: expressIcon, name: "Express" },
    { src: figmaIcon, name: "Figma" },
    { src: firebaseIcon, name: "Firebase" },
    { src: gimpIcon, name: "GIMP" },
    { src: gitIcon, name: "Git" },
    { src: githubIcon, name: "GitHub" },
    { src: goIcon, name: "Go" }
  ];

  const secondCarouselIcons = [
    { src: html5Icon, name: "HTML5" },
    { src: javascriptIcon, name: "JavaScript" },
    { src: javaIcon, name: "Java" },
    { src: jqueryIcon, name: "jQuery" },
    { src: mariadbIcon, name: "MariaDB" },
    { src: mongodbIcon, name: "MongoDB" },
    { src: mysqlIcon, name: "MySQL" },
    { src: nodejsIcon, name: "Node.js" },
    { src: npmIcon, name: "npm" },
    { src: oracleIcon, name: "Oracle" },
    { src: phpIcon, name: "PHP" },
    { src: postmanIcon, name: "Postman" },
    { src: pythonIcon, name: "Python" },
    { src: reactIcon, name: "React" },
    { src: sqlDeveloperIcon, name: "SQL Developer" },
    { src: swiftIcon, name: "Swift" },
    { src: tailwindIcon, name: "Tailwind CSS" },
    { src: trelloIcon, name: "Trello" },
    { src: typescriptIcon, name: "TypeScript" },
    { src: wordpressIcon, name: "WordPress" },
    { src: xcodeIcon, name: "Xcode" }
  ];

  const duplicateFirstIcons = [...firstCarouselIcons, ...firstCarouselIcons];
  const duplicateSecondIcons = [...secondCarouselIcons, ...secondCarouselIcons];

  return (
    <section className="ServicesSection container-fluid d-flex flex-column justify-content-center align-items-center" id="services" ref={sectionRef}>
      <h2 className={`ServicesTitle ${isVisible ? 'visible' : ''}`}>{t('MY SERVICES')}</h2>
      <div className="carousel-container">
        <div className="services-carousel">
          {duplicateFirstIcons.map((icon, index) => (
            <div key={index} className="carousel-item">
              <img src={icon.src} alt={icon.name} className="ServiceIcon" />
              <span className="icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="services-carousel reverse">
          {duplicateSecondIcons.map((icon, index) => (
            <div key={index} className="carousel-item">
              <img src={icon.src} alt={icon.name} className="ServiceIcon" />
              <span className="icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
