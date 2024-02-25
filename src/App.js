import React, { useEffect, useState } from 'react';
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

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY + window.innerHeight / 2;
  
      const heroSection = document.querySelector('.HeroSection');
      const phraseSection = document.querySelector('.PhraseSection');
      const aboutSection = document.querySelector('#about');
      const servicesSection = document.querySelector('#services');
      const projectsSection = document.querySelector('#projects');
      const contactSection = document.querySelector('#contact');
  
      let newTheme = 'light';
  
      if (heroSection && currentScrollPosition >= heroSection.offsetTop && currentScrollPosition < heroSection.offsetTop + heroSection.offsetHeight) {
        newTheme = 'light';
      } else if (phraseSection && currentScrollPosition >= phraseSection.offsetTop && currentScrollPosition < phraseSection.offsetTop + phraseSection.offsetHeight) {
        newTheme = 'dark';
      } else if (aboutSection && currentScrollPosition >= aboutSection.offsetTop && currentScrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight) {
        newTheme = 'light';
      } else if (servicesSection && currentScrollPosition >= servicesSection.offsetTop && currentScrollPosition < servicesSection.offsetTop + servicesSection.offsetHeight) {
        newTheme = 'dark';
      } else if (projectsSection && currentScrollPosition >= projectsSection.offsetTop && currentScrollPosition < projectsSection.offsetTop + projectsSection.offsetHeight) {
        newTheme = 'light';
      } else if (contactSection && currentScrollPosition >= contactSection.offsetTop && currentScrollPosition < contactSection.offsetTop + contactSection.offsetHeight) {
        newTheme = 'dark';
      }
  
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);
  

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={`App ${theme}`} data-theme={theme}>
        <NavBar />
        <HeroSection />
        <PhraseSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
