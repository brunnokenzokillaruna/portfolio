import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="nav-content">
        <a href="/" className="nav-logo">Zenno</a>
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
