// Core dependencies
import React, { useEffect, useState } from 'react';
import './App.css';
import './themes.css';

// Component imports
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import PhraseSection from './PhraseSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

// Utilities and context
import { ThemeProvider } from './ThemeContext';
import './i18n';
import useIntersectionObserver from './useIntersectionObserver';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  // Theme state management
  const [theme, setTheme] = useState('light');

  // Section visibility tracking
  const { elementRef: phraseRef, isVisible: isPhraseVisible } = useIntersectionObserver({ threshold: 0.5 });
  const { elementRef: servicesRef, isVisible: isServicesVisible } = useIntersectionObserver({ threshold: 0.5 });
  const { elementRef: contactRef, isVisible: isContactVisible } = useIntersectionObserver({ threshold: 0.5 });
  const { elementRef: projectsRef, isVisible: isProjectsVisible } = useIntersectionObserver({ threshold: 0.5 });

  // Auto theme switching based on visible sections
  useEffect(() => {
    if (isPhraseVisible || isServicesVisible || isContactVisible) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isPhraseVisible, isServicesVisible, isContactVisible]);

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={`App ${theme}`} data-theme={theme}>
        <NavBar />
        <HeroSection />
        {/* Sections with visibility tracking */}
        <div ref={phraseRef}>
          <PhraseSection />
        </div>
        <AboutSection />
        <div id="services" ref={servicesRef}>
          <ServicesSection />
        </div>
        <div id="projects" ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div id="contact" ref={contactRef}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
