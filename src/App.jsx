import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Compontes/Navbar'
import Footer from './Compontes/Footer'
import WelcomePopup from './Compontes/WelcomePopup'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

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
  }

  return (
    <Router>
      <div className="app">
        <WelcomePopup 
          imageSrc="/2.png"
          title="Welcome to Vishal Trading Academy"
          subtitle="Unlock Your Trading Potential with Expert Guidance"
        />
        <Navbar onEnrollClick={handleEnrollClick} scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Home onEnrollClick={handleEnrollClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
