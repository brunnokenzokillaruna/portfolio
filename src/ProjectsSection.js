import React from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from './useIntersectionObserver';
import './ProjectsSection.css';

import projectImage1 from './images/projects/infostream.png';
import projectImage2 from './images/projects/grandeur.png';
import projectImage3 from './images/projects/wealthwise.png';
import projectImage4 from './images/projects/TriviaGame.png';
import projectImage5 from './images/projects/careertrack.png';
import githubIcon from './images/github-original.svg';
import externalLinkIcon from './images/external-link.svg';

const projects = [
  {
    name: "Wealth Wise",
    image: projectImage3,
    year: "2025",
    technologies: ["C#", "Windows Forms", ".NET Framework", "SQLite"],
    website: "https://wealthwise-pro.vercel.app/",
    description: "wealth_wise_description"
  },
  {
    name: "CareerTrack Pro",
    image: projectImage5,
    year: "2025",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    website: "https://brunnokenzokillaruna.github.io/careertrackpro-site/",
    description: "career_track_description"
  },
  {
    name: "Info Stream",
    image: projectImage1,
    year: "2024",
    technologies: ["Java", "Android Studio", "REST API", "Material Design"],
    github: "https://github.com/Android-Final-Project/android_news_app/",
    description: "info_stream_description"
  },
  {
    name: "Grandeur",
    image: projectImage2,
    year: "2022",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/brunnokenzokillaruna/grandeur/",
    website: "https://grandeur-real-estate.vercel.app/",
    description: "grandeur_description"
  },
  {
    name: "Trivia Quest",
    image: projectImage4,
    year: "2023",
    technologies: ["Python", "Tkinter", "SQLite", "JSON"],
    github: "https://github.com/brunnokenzokillaruna/TriviaQuizGame",
    description: "trivia_quest_description"
  }
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="ProjectsSection" id="projects">
      <h2 ref={elementRef} className={`ProjectsTitle ${isVisible ? 'visible' : ''}`}>
        {t('FEATURED WORK')}
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <article 
            className="project-card" 
            key={`project-${index}`}
          >
            <div className="project-preview">
              <img 
                src={project.image} 
                alt={`${project.name} preview`} 
                className="project-image" 
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <header className="project-header">
                <div className="project-meta">
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github"
                      aria-label={t('View on GitHub')}
                    >
                      <img src={githubIcon} alt="GitHub" className="link-icon" width="24" height="24" />
                    </a>
                  )}
                  {project.website && (
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link website"
                      aria-label={t('Visit live website')}
                    >
                      <img src={externalLinkIcon} alt="External Link" className="link-icon" width="24" height="24" />
                    </a>
                  )}
                </div>
              </header>

              <div className="project-body">
                <p className="project-description">{t(project.description)}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={`tech-${techIndex}`} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
