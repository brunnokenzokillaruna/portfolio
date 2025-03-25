// Dependencies and assets
import React, { useEffect } from 'react';
import './NavBar.css';
import KenzoLogo from './images/kenzo-light.svg';
import KenzoLogo2 from './images/kenzo-dark.svg';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  
  // Set logo based on current theme
  const imagePath = theme === 'dark' ? KenzoLogo : KenzoLogo2;

  // Language switcher handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferred-language', lng);
  };

  // Restore user's language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Auto-collapse mobile menu on link click
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.click();
    }
  };

  // Attach/detach mobile menu handlers
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
    };
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        {/* Brand logo */}
        <a className="navbar-brand" href="/">
          <img
            src={imagePath}
            alt="Kenzo Logo"
            className="nav-logo"
          />
        </a>

        {/* Hamburger menu for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-theme={theme}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">{t('About')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">{t('Services')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">{t('Projects')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lets-talk-btn" href="#contact">{t("Let's Talk")}</a>
            </li>
          </ul>

          {/* Language selector */}
          <div className="d-flex align-items-center">
            <select 
              className="form-select" 
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
