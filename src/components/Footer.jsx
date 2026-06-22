import { Link } from 'react-router-dom'
import { ScissorsIcon, MapPinIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <ScissorsIcon size={20} />
            <span>Jon&apos;s Haircuts</span>
          </div>
          <p>Mobile barbering — premium cuts at your home, office, or wherever you are.</p>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul className="site-footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Jon</Link></li>
            <li><Link to="/book">Book appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3>Service area</h3>
          <p className="site-footer__area">
            <MapPinIcon size={18} />
            Greater metro area — travel fee may apply outside core zone
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>&copy; {year} Jon&apos;s Haircuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
