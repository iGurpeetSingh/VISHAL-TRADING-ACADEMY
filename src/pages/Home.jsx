import React from 'react';
import Hero from '../Compontes/Hero';
import WhyChooseUs from '../Compontes/WhyChooseUs';
import CourseCurriculum from '../Compontes/CourseCurriculum';
import LearningModules from '../Compontes/LearningModules';
import StudentBenefits from '../Compontes/StudentBenefits';
import PricingSection from '../Compontes/PricingSection';
import FAQ from '../Compontes/FAQ';
import './Home.css';

const Home = ({ onEnrollClick }) => {
  return (
    <div className="home-page">
      <Hero onEnrollClick={onEnrollClick} />
      <WhyChooseUs />
      <CourseCurriculum />
      <LearningModules />
      <StudentBenefits />
      <PricingSection onEnrollClick={onEnrollClick} />
      <FAQ />
    </div>
  );
};

export default Home;