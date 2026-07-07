import React from 'react';
import './TradingFeatures.css';
import Vishallive from '../assets/Vishallive.mp4';

const TradingFeatures = () => {
  return (
    <section className="vta-section-wrapper">
      {/* Main Flex Layout Container */}
      <div className="vta-flex-layout-container">
        
        {/* Left Side: Features Cards */}
        <div className="vta-features-list">
          
          {/* Card 1 */}
          <div className="vta-card-item">
            <span className="vta-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
            </span>
            <h4>Practical Learning</h4>
            <p>Real-world trading experience with live market practice</p>
          </div>

          {/* Card 2 */}
          <div className="vta-card-item">
            <span className="vta-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </span>
            <h4>Step-by-Step</h4>
            <p>From basics to advanced concepts, structured progression</p>
          </div>

          {/* Card 3 */}
          <div className="vta-card-item">
            <span className="vta-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </span>
            <h4>Professional Framework</h4>
            <p>Industry-standard trading methodology and strategies</p>
          </div>

          {/* Card 4 */}
          <div className="vta-card-item">
            <span className="vta-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span>
            <h4>Personal Mentorship</h4>
            <p>Direct guidance from experienced trading professionals</p>
          </div>

        </div>

        {/* Right Side: Responsive Video Player Wrapper */}
        <div className="vta-video-wrapper">
          {/* Neon Glow Light Effect */}
          <div className="vta-video-glow"></div>
          
          {/* Aspect Ratio Box */}
          <div className="vta-video-box">
            <iframe 
              src={Vishallive}
              title="Vishal Trading Academy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingFeatures;