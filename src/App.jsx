import { useState, useEffect } from 'react'
import Navbar from './Compontes/Navbar'
import Hero from './Compontes/Hero'
import AboutAcademy from './Compontes/AboutAcademy'
import WhyChooseUs from './Compontes/WhyChooseUs'
import CourseCurriculum from './Compontes/CourseCurriculum'
import LearningModules from './Compontes/LearningModules'
import PracticalTraining from './Compontes/PracticalTraining'
import StudentBenefits from './Compontes/StudentBenefits'
import PricingSection from './Compontes/PricingSection'
import FAQ from './Compontes/FAQ'
import ContactSection from './Compontes/ContactSection'
import Footer from './Compontes/Footer'
import WelcomePopup from './Compontes/WelcomePopup'
import './index.css'
import TradingFeatures from './Compontes/TradingFeatures'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEnrollClick = () => {
    const element = document.getElementById('enroll')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      <WelcomePopup 
        imageSrc="/2.png"
        title="Welcome to Vishal Trading Academy"
        subtitle="Unlock Your Trading Potential with Expert Guidance"
      />
      <Navbar onEnrollClick={handleEnrollClick} scrolled={scrolled} />
      <Hero onEnrollClick={handleEnrollClick} />
      <AboutAcademy />
      <TradingFeatures/>
      <WhyChooseUs />
      <CourseCurriculum />
      <LearningModules />
      <PracticalTraining />
      <StudentBenefits />
      <PricingSection onEnrollClick={handleEnrollClick} />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App