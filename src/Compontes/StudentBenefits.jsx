import React from 'react';
import './StudentBenefits.css';

const StudentBenefits = () => {
  const benefits = [
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ), title: 'Lifetime Access', desc: 'Complete lifetime access to all course materials and updates' },
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ), title: 'WhatsApp Support', desc: 'Direct WhatsApp support for instant doubt clearing' },
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ), title: 'Study Notes', desc: 'Comprehensive study notes and professional PDF materials' },
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ), title: 'Practical Training', desc: 'Live chart reading and real trading practice' },
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ), title: 'Weekly Tests', desc: 'Regular assessments to track your progress' },
    { icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="10.5 21 12 21 12 21"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ), title: 'Certificate', desc: 'Professional certificate upon course completion' },
  ];

  return (
    <section className="vta-benefits" id="benefits">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">Student Benefits</h2>
          <p className="vta-section-subtitle">More than just a course - a complete trading transformation</p>
        </div>

        <div className="vta-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="vta-benefit-card" key={index}>
              <div className="vta-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentBenefits;