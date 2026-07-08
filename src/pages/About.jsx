import React from 'react';
import AboutAcademy from '../Compontes/AboutAcademy';
import TradingFeatures from '../Compontes/TradingFeatures';
import PracticalTraining from '../Compontes/PracticalTraining';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <AboutAcademy />
      <TradingFeatures />
      <PracticalTraining />
    </div>
  );
};

export default About;