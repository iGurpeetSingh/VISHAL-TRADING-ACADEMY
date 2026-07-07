import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="vta-contact" id="contact">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">Contact Us</h2>
          <p className="vta-section-subtitle">Start your trading journey today</p>
        </div>

        <div className="vta-contact-wrapper">
          <div className="vta-contact-info">
            <div className="vta-contact-item">
              <div className="vta-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4>Mobile Number</h4>
                <p>+91 9828259167</p>
              </div>
            </div>
            <div className="vta-contact-item">
              <div className="vta-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>+91 9828259167</p>
              </div>
            </div>
            <div className="vta-contact-item">
              <div className="vta-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>vishaltradingacademy02@gmail.com</p>
              </div>
            </div>
            <div className="vta-contact-item">
              <div className="vta-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <h4>Instagram</h4>
                <p>@vishaltradingacademy02</p>
              </div>
            </div>
            <div className="vta-contact-item">
              <div className="vta-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </div>
              <div>
                <h4>Telegram</h4>
                <p>@VishalTradelive</p>
              </div>
            </div>
          </div>

          <form className="vta-contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <input type="email" placeholder="Your Email" required />
            <select required>
              <option value="">Select Course Interest</option>
              <option value="forex">Forex Trading</option>
              <option value="crypto">Crypto Trading</option>
              <option value="gold">Gold (XAUUSD) Trading</option>
              <option value="complete">Complete 65-Day Program</option>
            </select>
            <textarea placeholder="Your Message (Optional)" rows="5"></textarea>
            <button type="submit" className="vta-btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
