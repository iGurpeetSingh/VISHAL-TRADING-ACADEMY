import React from 'react';
import './AboutAcademy.css';
import vishal from '../assets/100.png';

const AboutAcademy = () => {
  return (
    <section className="vta-about" id="about">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">About Vishal Trading Academy</h2>
          <p className="vta-section-subtitle">Trading is a Professional Skill, Not Gambling</p>
        </div>

        <div className="vta-about-content">
          <div className="vta-about-image">
            <img src={vishal} alt="Vishal - Founder of Vishal Trading Academy" className="vta-about-photo" />
          </div>

          <div className="vta-about-text-main">
            <p className="vta-about-intro">
              At Vishal Trading Academy, we believe that trading is a professional skill, not gambling.
            </p>
            <p className="vta-about-text">
              Our mission is to help beginners become confident, disciplined, and knowledgeable traders by teaching real market concepts with practical chart analysis.
            </p>
            <p className="vta-about-text">
              Our complete <strong>65-Day Basic to Advanced Trading Program</strong> is designed to build a strong foundation and guide students step-by-step toward professional trading.
            </p>
            <p className="vta-about-text">
              Whether you are a complete beginner or already have trading experience, this course will help you understand how financial markets actually work.
            </p>
          </div>
        </div>

        <div className="vta-about-mentor">
          <h3 className="vta-mentor-title">Meet Your Mentor – Vishal</h3>
          <p className="vta-mentor-text">
            Vishal has been actively involved in the trading industry since 2019 and has spent years studying market behavior, Price Action, Market Structure, Smart Money Concepts (SMC), ICT Concepts, Forex, Crypto, Gold (XAUUSD), and Risk Management.
          </p>
          <p className="vta-mentor-text">
            Over the years, he has focused on understanding market logic through continuous learning, chart analysis, and practical market observation. His teaching approach emphasizes discipline, structured learning, and risk management rather than shortcuts or unrealistic profit expectations.
          </p>
        </div>

        <div className="vta-about-learning">
          <h3 className="vta-learning-title">At Vishal Trading Academy, students learn through:</h3>
          <ul className="vta-learning-list">
            <li>Live Chart Analysis</li>
            <li>Real Market Examples</li>
            <li>Practical Trading Sessions</li>
            <li>Structured Learning Modules</li>
            <li>Risk Management Techniques</li>
            <li>Trading Psychology</li>
            <li>Market Structure & Price Action</li>
            <li>Smart Money Concepts (SMC)</li>
            <li>ICT Trading Concepts</li>
            <li>Forex, Crypto & Gold Market Analysis</li>
          </ul>
          <p className="vta-about-text">
            The academy is committed to helping students develop trading knowledge, confidence, and a disciplined approach so they can make informed decisions in the financial markets.
          </p>
        </div>

        <div className="vta-why-learn">
          <h3 className="vta-why-learn-title">WHY LEARN FROM VISHAL?</h3>
          <ul className="vta-why-learn-list">
            <li>Trading Industry Experience Since 2019</li>
            <li>Practical Market Analysis</li>
            <li>Live Chart Learning</li>
            <li>Professional Trading Framework</li>
            <li>Step-by-Step Beginner Guidance</li>
            <li>Price Action Expert</li>
            <li>Smart Money Concepts (SMC)</li>
            <li>ICT Concepts</li>
            <li>Forex Trading</li>
            <li>Crypto Trading</li>
            <li>Gold (XAUUSD) Analysis</li>
            <li>Risk Management</li>
            <li>Trading Psychology</li>
            <li>Daily Market Observation</li>
            <li>Long-Term Skill Development</li>
            <li>Lifetime Learning Support</li>
            <li>WhatsApp Community</li>
            <li>Telegram Community</li>
            <li>Regular Market Updates</li>
          </ul>
        </div>

        <div className="vta-mission-vision">
          <div className="vta-mission">
            <h3 className="vta-mission-title">OUR MISSION</h3>
            <p className="vta-mission-text">
              Our mission is to create disciplined and knowledgeable traders by providing structured education based on real market concepts, practical chart analysis, and professional risk management.
            </p>
            <p className="vta-mission-text">
              We believe that consistency, patience, discipline, and proper education are the foundations of long-term success in trading.
            </p>
          </div>

          <div className="vta-vision">
            <h3 className="vta-vision-title">OUR VISION</h3>
            <p className="vta-vision-text">
              To become one of India's most trusted trading education platforms by helping students build real trading skills through practical learning, market understanding, and continuous guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;