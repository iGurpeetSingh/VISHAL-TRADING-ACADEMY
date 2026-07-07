import { useState, useEffect } from 'react'
import './WelcomePopup.css'
import PopupImage from '../assets/2.png' 

const encodeSvg = (svg) => {
  return encodeURIComponent(svg)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')
}

const defaultBannerSvg = `data:image/svg+xml;charset=utf-8,${encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1f2e"/><stop offset="100%" style="stop-color:#0d1117"/></linearGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ffd700"/><stop offset="100%" style="stop-color:#ffed4e"/></linearGradient></defs><rect width="800" height="500" fill="url(#bg)"/><rect x="0" y="0" width="800" height="60" fill="url(#gold)"/><text x="400" y="38" font-family="Arial" font-size="22" font-weight="bold" fill="#0d1117" text-anchor="middle">LIMITED SEATS AVAILABLE</text><text x="400" y="140" font-family="Arial" font-size="56" font-weight="900" fill="#ffd700" text-anchor="middle">VISHAL TRADING</text><text x="400" y="200" font-family="Arial" font-size="56" font-weight="900" fill="#ffd700" text-anchor="middle">ACADEMY</text><rect x="220" y="220" width="360" height="40" fill="#ffd700" rx="5"/><text x="400" y="246" font-family="Arial" font-size="16" font-weight="bold" fill="#0d1117" text-anchor="middle">TRADING EDUCATION PROVIDER</text><text x="400" y="290" font-family="Arial" font-size="18" fill="#e0e0e0" text-anchor="middle" font-style="italic">Learn. Analyze. Trade with Discipline.</text><rect x="60" y="320" width="680" height="70" fill="rgba(255,215,0,0.1)" rx="10" stroke="#ffd700" stroke-width="2"/><text x="400" y="355" font-family="Arial" font-size="18" font-weight="bold" fill="#ffd700" text-anchor="middle">JOIN 65 DAYS COMPLETE TRADING COURSE</text><text x="400" y="445" font-family="Arial" font-size="16" fill="#ffd700" text-anchor="middle">&#x1F4DE; 9828259967 | &#x1F4CD; Alwar, Rajasthan</text></svg>`)}`

function WelcomePopup({ imageSrc = defaultBannerSvg, title = 'Welcome to Vishal Trading Academy', subtitle = 'Unlock Your Trading Potential with Expert Guidance' }) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Always show popup when component mounts
    setIsOpen(true)
  }, [])

  const handleClose = () => {
    // Close with animation
    setIsOpen(false)
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto'
  }

  const handleContinue = () => {
    handleClose()
  }

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="popup-close-btn" onClick={handleClose} aria-label="Close popup">
          ✕
        </button>

        {/* Promotional Image */}
        <div className="popup-image-container">
          <img src={PopupImage} alt="Promotional Banner" className="popup-image" />
        </div>

       

      </div>
    </div>
  )
}

export default WelcomePopup