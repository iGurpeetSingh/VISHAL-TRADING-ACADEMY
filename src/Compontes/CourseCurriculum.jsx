import React from 'react';
import './CourseCurriculum.css';

// Sabhi images ko properly import kiya (Apne assets path ke hisaab se check kar lein)
import img1 from '../assets/101.png'; 
import img2 from '../assets/102.png'; 
import img3 from '../assets/103.png';
import img4 from '../assets/104.png';
import img5 from '../assets/105.png';
import img6 from '../assets/106.png';
import img7 from '../assets/107.png';

const CourseCurriculum = () => {
  const modules = [
    {
      number: '01',
      title: 'Trading Foundation',
      description: 'Identifying Swing High (SH) and Swing Low (SL) helps to understand market structure.',
      image: img1
    },
    {
      number: '02',
      title: 'Breakout',
      description: 'Price breaks a key resistance level with strong momentum and continues in that direction.',
      image: img2
    },
    {
      number: '03',
      title: 'Retest',
      description: 'After a breakout, price returns to retest the broken level, then continues in the original direction.',
      image: img3
    },
    {
      number: '04',
      title: 'Fake Breakout',
      description: 'Price breaks a level but fails to hold above (or below) it and moves in the opposite direction.',
      image: img4
    },
    {
      number: '05',
      title: 'Market Structure',
      description: 'Understanding Higher High, Higher Low, Lower High, Lower Low, Break of Structure (BOS) and Change of Character (CHOCH).',
      image: img5
    },
    {
      number: '06',
      title: 'Smart Money Concepts',
      description: 'Learn about Liquidity, Buy Side & Sell Side Liquidity, Liquidity Grab & Sweep, and Inducement.',
      image: img6
    },
    {
      number: '07',
      title: 'Institutional Trading',
      description: 'Master institutional trading strategies, risk management, and professional trading psychology.',
      image: img7
    }
  ];

  return (
    <section className="vta-curriculum" id="curriculum">
      <div className="vta-container">
        <div className="vta-section-header">
          <h2 className="vta-section-title">65-Day Course Curriculum</h2>
          <p className="vta-section-subtitle">7 Comprehensive Modules | From Foundation to Professional Trading</p>
        </div>

        <div className="vta-curriculum-grid">
          {modules.map((module, idx) => (
            <div className="vta-module-card" key={idx}>
              <div className="vta-module-header">
                <div className="vta-module-number-badge">
                  <span className="vta-module-number">{module.number}</span>
                </div>
                <h3 className="vta-module-title">{module.title}</h3>
              </div>
              
              <div className="vta-module-image-container">
                <img 
                  src={module.image} 
                  alt={module.title} 
                  className="vta-module-image"
                  loading="lazy"
                />
              </div>

              <div className="vta-module-description">
                <p>{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;