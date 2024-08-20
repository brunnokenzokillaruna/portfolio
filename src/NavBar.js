import React, { useEffect } from 'react';
import './NavBar.css';
import KenzoLogo from './images/kenzo-light.svg';
import KenzoLogo2 from './images/kenzo-dark.svg';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const imagePath = theme === 'dark' ? KenzoLogo : KenzoLogo2;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse.show');
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.click();
    }
  };

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
        <a className="navbar-brand" href="/">
          <img
            src={imagePath}
            alt="Kenzo Logo"
            className="nav-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
          <div className="d-flex align-items-center">
            <select className="form-select" onChange={(e) => changeLanguage(e.target.value)}>
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
