import React from 'react';
import './CourseCurriculum.css';

// Sabhi images ko properly import kiya (Apne assets path ke hisaab se check kar lein)
import img1 from '../assets/4.png'; 
import img2 from '../assets/5.png'; 
import img3 from '../assets/6.png';
import img4 from '../assets/7.png';
// import img5 from '../assets/2.png';
// import img6 from '../assets/2.png';
// import img7 from '../assets/2.png';

const CourseCurriculum = () => {
  const modules = [
    {
      title: 'Module 1 – Trading Foundation',
      items: ['Introduction to Trading', 'Market Basics', 'Trading Psychology', 'Trading Platforms', 'Chart Reading', 'Candlestick Basics'],
      image: img1
    },
    {
      title: 'Module 2 – Price Action',
      items: ['Price Action Fundamentals', 'Swing High & Swing Low', 'Breakout', 'Fake Breakout', 'Retest', 'Entry Confirmation'],
      image: img2
    },
    {
      title: 'Module 3 – Market Structure',
      items: ['Higher High (HH)', 'Higher Low (HL)', 'Lower High (LH)', 'Lower Low (LL)', 'Break of Structure (BOS)', 'Change of Character (CHOCH)'],
      image: img3
    },
    {
      title: 'Module 4 – Smart Money Concept (SMC)',
      items: ['Liquidity', 'Buy Side & Sell Side Liquidity', 'Liquidity Grab & Sweep', 'Inducement', 'Institutional Trading'],
      image: img4
    },
   
  ];

  return (
    <section className="vta-curriculum" id="curriculum">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">65-Day Course Curriculum</h2>
          <p className="vta-section-subtitle">7 Comprehensive Modules | From Foundation to Professional Trading</p>
        </div>

        <div className="vta-curriculum-timeline">
          {modules.map((module, idx) => (
            <div className="vta-module-card" key={idx}>
              <div className="vta-module-timeline-marker">
                <span className="vta-module-number">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              
              {/* Main Body Layout Split */}
              <div className="vta-module-main-body">
                <div className="vta-module-content">
                  <h3>{module.title}</h3>
                  <ul className="vta-module-items">
                    {module.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Side Image Container (Fixed: module.graphic se badalkar module.image kiya) */}
                <div className="vta-module-image-zone">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="vta-module-img"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;