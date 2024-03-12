import React from 'react';
import './NavBar.css';
import KenzoLogo from './images/kenzo-light.png';
import KenzoLogo2 from './images/kenzo-dark.png';
import { useTheme } from './ThemeContext';

function NavBar() {
  const { theme } = useTheme();
  const imagePath = theme === 'dark' ? KenzoLogo : KenzoLogo2;

  return (
    <nav className="NavBar">
      <div className="nav-content">
        <img
          src={imagePath}
          alt="Zenno Logo"
          className="nav-logo"
        />
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="lets-talk-btn">Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
