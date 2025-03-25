import React from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './ServicesSection.css';

// Frontend tech stack icons
import androidStudioIcon from './images/androidstudio-plain.svg';
import blazorIcon from './images/blazor-original.svg';
import bootstrapIcon from './images/bootstrap-plain.svg';
import csharpIcon from './images/csharp-plain.svg';
import cssIcon from './images/css3-plain.svg';
import dotnetIcon from './images/dot-net-plain.svg';
import dotnetCoreIcon from './images/dotnetcore-plain.svg';
import expressIcon from './images/express-original-wordmark.svg';
import figmaIcon from './images/figma-original.svg';
import gimpIcon from './images/gimp-plain.svg';
import gitIcon from './images/git-plain.svg';
import githubIcon from './images/github.svg';
import goIcon from './images/go-original-wordmark.svg';
import htmlIcon from './images/html5-plain.svg';
import javaIcon from './images/java-plain.svg';
import javascriptIcon from './images/javascript-original.svg';
import jqueryIcon from './images/jquery-plain.svg';
import jsonIcon from './images/json-original.svg';
import nextjsIcon from './images/nextjs-original-wordmark.svg';
import nodeIcon from './images/nodejs-plain-wordmark.svg';
import npmIcon from './images/npm-original-wordmark.svg';
import phpIcon from './images/php-plain.svg';
import postmanIcon from './images/postman-plain.svg';
import pythonIcon from './images/python-plain.svg';
import reactIcon from './images/react-original.svg';
import swiftIcon from './images/swift-plain.svg';
import tailwindIcon from './images/tailwindcss-original.svg';
import typescriptIcon from './images/typescript-plain.svg';
import vitejsIcon from './images/vitejs-original.svg';
import wordpressIcon from './images/wordpress-plain.svg';
import xcodeIcon from './images/xcode-plain.svg';

// Backend and cloud service icons
import awsIcon from './images/amazonwebservices-plain-wordmark.svg';
import firebaseIcon from './images/firebase-plain.svg';
import graphqlIcon from './images/graphql-plain.svg';
import jenkinsIcon from './images/jenkins-line.svg';
import mariadbIcon from './images/mariadb-original.svg';
import mongodbIcon from './images/mongodb-plain.svg';
import mysqlIcon from './images/mysql-original.svg';
import oracleIcon from './images/oracle-original.svg';
import postgresqlIcon from './images/postgresql-plain.svg';
import sqlDeveloperIcon from './images/sqldeveloper-plain.svg';
import supabaseIcon from './images/supabase-original.svg';
import vercelIcon from './images/vercel-original-wordmark.svg';

const ServicesSection = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver();

  // Frontend and programming languages icons - left to right slider
  const firstCarouselIcons = [
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: javascriptIcon, name: 'JavaScript' },
    { icon: typescriptIcon, name: 'TypeScript' },
    { icon: reactIcon, name: 'React' },
    { icon: nextjsIcon, name: 'Next.js' },
    { icon: nodeIcon, name: 'Node.js' },
    { icon: expressIcon, name: 'Express.js' },
    { icon: vitejsIcon, name: 'Vite' },
    { icon: npmIcon, name: 'NPM' },
    { icon: tailwindIcon, name: 'Tailwind CSS' },
    { icon: bootstrapIcon, name: 'Bootstrap' },
    { icon: jqueryIcon, name: 'jQuery' },
    { icon: phpIcon, name: 'PHP' },
    { icon: pythonIcon, name: 'Python' },
    { icon: javaIcon, name: 'Java' },
    { icon: csharpIcon, name: 'C#' },
    { icon: dotnetIcon, name: '.NET' },
    { icon: dotnetCoreIcon, name: '.NET Core' },
    { icon: blazorIcon, name: 'Blazor' },
    { icon: goIcon, name: 'Go' },
    { icon: swiftIcon, name: 'Swift' },
    { icon: wordpressIcon, name: 'WordPress' }
  ];

  // DevOps and tools icons - right to left slider
  const secondCarouselIcons = [
    { icon: gitIcon, name: 'Git' },
    { icon: githubIcon, name: 'GitHub' },
    { icon: postgresqlIcon, name: 'PostgreSQL' },
    { icon: mysqlIcon, name: 'MySQL' },
    { icon: mariadbIcon, name: 'MariaDB' },
    { icon: mongodbIcon, name: 'MongoDB' },
    { icon: oracleIcon, name: 'Oracle' },
    { icon: sqlDeveloperIcon, name: 'SQL Developer' },
    { icon: firebaseIcon, name: 'Firebase' },
    { icon: supabaseIcon, name: 'Supabase' },
    { icon: awsIcon, name: 'AWS' },
    { icon: vercelIcon, name: 'Vercel' },
    { icon: graphqlIcon, name: 'GraphQL' },
    { icon: jsonIcon, name: 'JSON' },
    { icon: jenkinsIcon, name: 'Jenkins' },
    { icon: postmanIcon, name: 'Postman' },
    { icon: androidStudioIcon, name: 'Android Studio' },
    { icon: xcodeIcon, name: 'Xcode' },
    { icon: figmaIcon, name: 'Figma' },
    { icon: gimpIcon, name: 'GIMP' }
  ];

  return (
    <section className="ServicesSection" id="services">
      <h2 ref={elementRef} className={`ServicesTitle ${isVisible ? 'visible' : ''}`}>
        {t('TECH STACK')}
      </h2>

      <div className="carousels-container">
        {/* Left to right slider */}
        <div className="slider">
          <div className="slide-track">
            {/* Main icons */}
            {firstCarouselIcons.map((item, index) => (
              <div className="slide" key={`first-${index}`}>
                <img src={item.icon} alt={item.name} className="service-icon" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
            {/* Duplicated icons for infinite scroll effect */}
            {firstCarouselIcons.map((item, index) => (
              <div className="slide" key={`first-duplicate-${index}`}>
                <img src={item.icon} alt={item.name} className="service-icon" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right to left slider */}
        <div className="slider">
          <div className="slide-track reverse">
            {/* Main icons */}
            {secondCarouselIcons.map((item, index) => (
              <div className="slide" key={`second-${index}`}>
                <img src={item.icon} alt={item.name} className="service-icon" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
            {/* Duplicated icons for infinite scroll effect */}
            {secondCarouselIcons.map((item, index) => (
              <div className="slide" key={`second-duplicate-${index}`}>
                <img src={item.icon} alt={item.name} className="service-icon" />
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
