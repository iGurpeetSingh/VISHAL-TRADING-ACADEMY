import React from 'react';
import './PricingSection.css';

const PricingSection = ({ onEnrollClick }) => {
  return (
    <section className="vta-pricing" id="enroll">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">Course Fee</h2>
          <p className="vta-section-subtitle">Limited Time Special Offer</p>
        </div>

        <div className="vta-pricing-card">
          <div className="vta-pricing-badge">🎯 Limited Time Offer</div>

          <div className="vta-pricing-header">
            <div className="vta-price-original">₹15,999</div>
            <div className="vta-price-original-label">Original Price</div>
          </div>

          <div className="vta-pricing-divider"></div>

          <div className="vta-price-special">
            <div className="vta-special-label">Special Offer</div>
            <div className="vta-special-amount">₹9,999</div>
            <div className="vta-special-sub">Only</div>
          </div>

          <div className="vta-pricing-features">
            <h3>What's Included:</h3>
            <ul>
              <li>✓ 65 Days Complete Training</li>
              <li>✓ Beginner to Advanced Level</li>
              <li>✓ Lifetime Course Access</li>
              <li>✓ WhatsApp & Telegram Support</li>
              <li>✓ Professional PDF Materials</li>
              <li>✓ Weekly Tests & Assignments</li>
              <li>✓ Certificate of Completion</li>
              <li>✓ Live Market Practice</li>
            </ul>
          </div>

          <button className="vta-btn-primary vta-btn-pricing" onClick={onEnrollClick}>
            Enroll Now
            <span className="vta-btn-arrow">→</span>
          </button>

          <p className="vta-limited-text">Limited Time Discount Available. Enroll Today!</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;