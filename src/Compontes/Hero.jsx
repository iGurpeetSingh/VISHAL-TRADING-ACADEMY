import React from 'react';
import './Hero.css';

const Hero = ({ onEnrollClick }) => {
  return (
    <section className="vta-hero" id="hero">
      <div className="vta-hero-background">
        <div className="vta-gradient-orb vta-orb-1"></div>
        <div className="vta-gradient-orb vta-orb-2"></div>
        <div className="vta-gradient-orb vta-orb-3"></div>
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
            Learn the Market.<br />
            Master the Skill.<br />
            Build Your Future.
          </h1>

          <p className="vta-hero-tagline">
            Professional Trading Education for Beginners to Advanced
          </p>

          <p className="vta-hero-description">
            Become a Professional Trader with our 65-Day Basic to Advanced Trading Program.
            Learn Price Action, Market Structure, Smart Money Concepts (SMC), ICT, Liquidity,
            Risk Management, Forex, Crypto & Gold Trading from Scratch.
          </p>

          <div className="vta-offer-box">
            <div className="vta-offer-badge">🎯 Limited Time Offer</div>
            <div className="vta-price-container">
              <div className="vta-original-price">₹15,999</div>
              <div className="vta-offer-price">₹9,999</div>
            </div>
          </div>

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

        <div className="vta-hero-visual">
          <div className="vta-dashboard-card">
            <div className="vta-dashboard-header">
              <div className="vta-dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="vta-dashboard-title">Trading Dashboard</div>
            </div>
            <div className="vta-chart-container">
              <svg className="vta-candlestick-chart" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 150 Q 60 120 100 130 T 180 90 T 260 110 T 340 50 L 380 60"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                />
                <path
                  d="M 20 150 Q 60 120 100 130 T 180 90 T 260 110 T 340 50 L 380 60 L 380 200 L 20 200 Z"
                  fill="url(#chartGradient)"
                />
                <rect x="30" y="100" width="8" height="40" fill="#00ff88" opacity="0.8" />
                <rect x="50" y="120" width="8" height="25" fill="#ff4757" opacity="0.8" />
                <rect x="70" y="90" width="8" height="50" fill="#00ff88" opacity="0.8" />
                <rect x="90" y="110" width="8" height="35" fill="#00ff88" opacity="0.8" />
                <rect x="110" y="130" width="8" height="20" fill="#ff4757" opacity="0.8" />
              </svg>
            </div>
            <div className="profit-indicator">
              <span className="profit-text">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '6px'}}>
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
                Professional Trading
              </span>
              <span className="profit-percent">65 Days Program</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;