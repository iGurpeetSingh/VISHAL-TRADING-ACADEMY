import React from 'react';
import './Hero.css';

const Hero = ({ onEnrollClick }) => {
  return (
    <section className="vta-hero" id="hero">
      <div className="vta-hero-background">
        <div className="vta-gradient-orb vta-orb-1"></div>
        <div className="vta-gradient-orb vta-orb-2"></div>
        <div className="vta-gradient-orb vta-orb-3"></div>
        <div className="vta-planet vta-planet-1"></div>
        <div className="vta-planet vta-planet-2"></div>
      </div>

      <div className="vta-hero-container">
        <div className="vta-hero-content">
          <div className="vta-academy-badge">
            <span className="vta-badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </span>
            <span>65-Day Professional Trading Program</span>
          </div>

          <h1 className="vta-hero-title">
         VISHAL TRADING ACADEMY
          </h1>

          <p className="vta-hero-tagline">
            Professional Trading Education for Beginners to Advanced
          </p>

          <p className="vta-hero-description">
            Become a Professional Trader with our 65-Day Basic to Advanced Trading Program.
            Learn Price Action, Market Structure, Smart Money Concepts (SMC), ICT, Liquidity,
            Risk Management, Forex, Crypto & Gold Trading from Scratch.
          </p>

          <div className="vta-hero-buttons">
            <button className="vta-btn-primary" onClick={onEnrollClick}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Enroll Now
              <span className="vta-btn-arrow">→</span>
            </button>
            <a href="#curriculum" className="vta-btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;