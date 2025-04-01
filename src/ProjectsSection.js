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
    technologies: ["React", "Tailwind", "JavaScript", "Node.js", "Express", "Supabase", "JWT", "RESTful", "Cursor AI Code Editor"],
    website: "https://wealthwise-three.vercel.app/",
    description: "A financial planning and management application designed to help users track expenses, manage budgets, and achieve financial goals. The system features multi-language support, interactive analytics dashboards, bill management with reminders, savings tracking, and investment portfolio."
  },
  {
    name: "CareerTrack Pro",
    image: projectImage5,
    year: "2025",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript", "React-PDF/Renderer", "Supabase", "Gemini API", "Cursor AI Code Editor"],
    website: "https://careertrackpro.vercel.app/",
    description: "A comprehensive career tracking and job application management system designed to help professionals manage their career progression, track job applications, and maintain their professional profile. The system features AI-powered document generation, skills analysis, and technology experience tracking."
  },
  {
    name: "LinguaTalk",
    year: "2025",
    status: "in-development",
    technologies: ["React", "Node.js", "Web Speech API", "Express", "MongoDB", "TailwindCSS"],
    description: "An interactive language practice platform that helps users improve speaking skills in English and French by simulating roleplay conversations using AI technology, voice recognition, and voice output features."
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
              {project.image && (
                <img 
                  src={project.image} 
                  alt={`${project.name} preview`} 
                  className="project-image" 
                  loading="lazy"
                />
              )}
              {!project.image && (
                <div className="project-placeholder">
                  {project.name.charAt(0)}
                </div>
              )}
              {project.status === "in-development" && (
                <div className="development-badge">
                  <span>{t('UNDER DEVELOPMENT')}</span>
                </div>
              )}
            </div>

            <div className="project-content">
              <header className="project-header">
                <div className="project-meta">
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-year">{project.year}</span>
                  {project.status === "in-development" && (
                    <span className="development-tag">{t('In Progress')}</span>
                  )}
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
                <p className="project-description">
                  {project.description.startsWith('info_stream_description') || 
                   project.description.startsWith('grandeur_description') || 
                   project.description.startsWith('trivia_quest_description') || 
                   project.description.startsWith('wealth_wise_description') || 
                   project.description.startsWith('career_track_description') 
                    ? t(project.description) 
                    : project.description}
                </p>
                
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
