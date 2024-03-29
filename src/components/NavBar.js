import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 
import logo from "../assets/logo.png";
import resume from '../assets/Jeanmarcos_Perez_Resume.pdf';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <a href="/projects">Projects</a>
        <a href="https://www.linkedin.com/in/jeanmarcos-perez/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/jeanmarcosp" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="button-link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
};

export default NavBar;
