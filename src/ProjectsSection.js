import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './ProjectsSection.css';
import projectImage1 from './images/infostream.png';
import projectImage2 from './images/grandeur.png';
import projectImage3 from './images/wealthwise.png';

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
];

function ProjectsSection() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section className="ProjectsSection" id="projects" ref={ref}>
      <h2 className={`ProjectsTitle ${isVisible ? 'visible' : ''}`}>My Projects</h2>
      <div className="ProjectsContent">
        {projects.map((project, index) => (
          <div key={index} className="ProjectItem">
            <div className="ProjectImageWrapper">
              <img src={project.image} alt="Project" className="ProjectImage" />
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
    </section>
  );
}


export default ProjectsSection;
