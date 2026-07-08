import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/34.png';

const Navbar = ({ onEnrollClick, scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`vta-navbar ${scrolled ? 'vta-scrolled' : ''}`}>
      <div className="vta-nav-container">
        {/* Logo */}
        <Link to="/" className="vta-logo" onClick={handleLinkClick}>
          <img src={logoImage} alt="Vishal Trading Academy" className="vta-logo-image" />
        </Link>

        {/* Navigation Links & Mobile Actions */}
        <ul className={`vta-nav-links ${isOpen ? 'vta-mobile-visible' : ''}`}>
          <li><Link to="/" className="vta-nav-link" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className="vta-nav-link" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" className="vta-nav-link" onClick={handleLinkClick}>Contact</Link></li>
          
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
