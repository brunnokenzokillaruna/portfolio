import React from 'react';
import './NavBar.css';
import ZennoLogo from './images/Zenno.png';
import ZennoLogo2 from './images/Zenno2.png';
import { useTheme } from './ThemeContext';

function NavBar() {
  const { theme } = useTheme();
  const imagePath = theme === 'dark' ? ZennoLogo2 : ZennoLogo;

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
