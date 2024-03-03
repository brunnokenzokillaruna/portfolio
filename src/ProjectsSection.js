import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
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

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function ProjectsSection() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const projectChunks = chunkArray(projects, 2);

  return (
    <section className="ProjectsSection" id="projects" ref={ref}>
      <h2 className={`ProjectsTitle ${isVisible ? 'visible' : ''}`}>My Projects</h2>
      <Carousel className="ProjectsCarousel" showArrows={true} autoPlay={false} infiniteLoop={true} centerMode={false}>
        {projectChunks.map((chunk, index) => (
          <div key={index} className="ProjectPair">
            {chunk.map((project, projectIndex) => (
              <div key={projectIndex} className="ProjectItem">
                <div className="ProjectImageWrapper">
                  <img src={project.image} alt={project.name} className="ProjectImage" />
                  <div className="ProjectOverlay">{project.name}</div>
                </div>
                <div className="ProjectLabels">
                  <span>{project.year}</span>
                  <span>{project.technologies}</span>
                  <a href={project.github}>GitHub</a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default ProjectsSection;