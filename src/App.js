import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import './themes.css';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import PhraseSection from './PhraseSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useIntersectionObserver from './useIntersectionObserver';

function App() {
  const [theme, setTheme] = useState('light');

  const phraseRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();

  const isPhraseVisible = useIntersectionObserver(phraseRef, { threshold: 0.5 });
  const isServicesVisible = useIntersectionObserver(servicesRef, { threshold: 0.5 });
  const isContactVisible = useIntersectionObserver(contactRef, { threshold: 0.5 });

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
        <div ref={phraseRef}>
          <PhraseSection />
        </div>
        <AboutSection />
        <div id="services" ref={servicesRef}>
          <ServicesSection />
        </div>
        <ProjectsSection />
        <div id="contact" ref={contactRef}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
