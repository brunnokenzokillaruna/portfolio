import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useIntersectionObserver from './useIntersectionObserver';
import './ProjectsSection.css';
import projectImage1 from './images/infostream.png';
import projectImage2 from './images/grandeur.png';
import projectImage3 from './images/wealthwise.png';
import projectImage4 from './images/TriviaGame.png';

const projects = [
  {
    name: "Info Stream",
    image: projectImage1,
    year: "2024",
    technologies: "Java, Android Studio",
    github: "https://github.com/Android-Final-Project/android_news_app/"
  },
  {
    name: "Grandeur Website",
    image: projectImage2,
    year: "2022",
    technologies: "TypeScript, CSS, React",
    github: "https://github.com/brunnokenzokillaruna/grandeur/"
  },
  {
    name: "Wealth Wise Planner",
    image: projectImage3,
    year: "2023",
    technologies: "Windows Forms, C#",
    github: "https://github.com/brunnokenzokillaruna/wealthwise/"
  },
  {
    name: "Trivia Game",
    image: projectImage4,
    year: "2023",
    technologies: "Python",
    github: "https://github.com/brunnokenzokillaruna/TriviaQuizGame"
  },
];

function ProjectsSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section className="ProjectsSection" id="projects" ref={ref}>
      <h2 className={`ProjectsTitle ${isVisible ? 'visible' : ''}`}>{t('FEATURED PROJECTS')}</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className={`ProjectsCarousel ${isVisible ? 'visible' : ''}`}
        interval={4000}
        transitionTime={800}
        swipeable
        emulateTouch
      >
        {projects.map((project, index) => (
          <div key={index} className="ProjectItem">
            <div className="ProjectImageWrapper">
              <img src={project.image} alt={t('Project screenshot')} className="ProjectImage" />
              <div className="ProjectOverlay">
                <h3>{project.name}</h3>
                <p>{t('Year')}: {project.year}</p>
                <p>{t('Technologies')}: {project.technologies}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {t('View on GitHub')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default ProjectsSection;
