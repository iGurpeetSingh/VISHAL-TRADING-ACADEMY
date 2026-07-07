import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: 'Do I need prior trading experience?', answer: 'Not at all! Vishal Trading Academy\'s 65-Day course is designed for complete beginners. We start from the very basics and gradually build up to advanced concepts.' },
    { question: 'What markets will I learn to trade?', answer: 'You will learn Forex, Crypto, and Gold (XAUUSD) markets comprehensively. We also cover Bitcoin & BTC Dominance analysis for holistic market understanding.' },
    { question: 'Will I get community support?', answer: 'Absolutely! You\'ll get access to both WhatsApp and Telegram communities for daily market updates, doubt clearing, and peer support.' },
    { question: 'Will I receive a certificate?', answer: 'Yes! Upon completion of the 65-day program, you\'ll receive a Certificate of Completion that you can add to your professional portfolio.' },
    { question: 'Is the course available in Hindi?', answer: 'Yes! The course provides both English and Hindi explanations to ensure clear understanding for all students.' },
    { question: 'Do you provide trading signals?', answer: 'No, we don\'t provide signals. Instead, we teach you how to analyze markets independently so you can make your own confident trading decisions.' },
  ];

  return (
    <section className="vta-faq" id="faq">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">Frequently Asked Questions</h2>
          <p className="vta-section-subtitle">Everything you need to know about the course</p>
        </div>

        <div className="vta-faq-container">
          {faqs.map((faq, idx) => (
            <div 
              className={`vta-faq-item ${openFaq === idx ? 'vta-active' : ''}`} 
              key={idx}
            >
              <button className="vta-faq-question" onClick={() => toggleFaq(idx)}>
                <span>{faq.question}</span>
                <span className="vta-faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </button>
              <div className="vta-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;