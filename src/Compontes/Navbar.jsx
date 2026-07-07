import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../assets/34.png';

const Navbar = ({ onEnrollClick, scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`vta-navbar ${scrolled ? 'vta-scrolled' : ''}`}>
      <div className="vta-nav-container">
        {/* Logo */}
        <a href="#hero" className="vta-logo" onClick={handleLinkClick}>
          <img src={logoImage} alt="Vishal Trading Academy" className="vta-logo-image" />
        </a>

        {/* Navigation Links & Mobile Actions */}
        <ul className={`vta-nav-links ${isOpen ? 'vta-mobile-visible' : ''}`}>
          <li><a href="#about" className="vta-nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="#curriculum" className="vta-nav-link" onClick={handleLinkClick}>Curriculum</a></li>
          <li><a href="#why-us" className="vta-nav-link" onClick={handleLinkClick}>Why Us</a></li>
          <li><a href="#features" className="vta-nav-link" onClick={handleLinkClick}>Features</a></li>
          <li><a href="#faq" className="vta-nav-link" onClick={handleLinkClick}>FAQ</a></li>
          <li><a href="#contact" className="vta-nav-link" onClick={handleLinkClick}>Contact</a></li>
          
          {/* Mobile Only CTA Button */}
          <li className="vta-mobile-cta">
            <button className="vta-btn-nav" onClick={() => { onEnrollClick(); handleLinkClick(); }}>
              Enroll Now
            </button>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button 
          className={`vta-menu-toggle ${isOpen ? 'vta-is-open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;