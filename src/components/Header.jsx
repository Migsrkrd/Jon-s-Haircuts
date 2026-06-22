import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ScissorsIcon } from './icons'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/book', label: 'Book' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeMenu}>
          <ScissorsIcon size={22} />
          <span>
            Jon&apos;s <em>Haircuts</em>
          </span>
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-nav"
          className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `site-header__link${isActive ? ' site-header__link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/book" className="btn btn--primary site-header__cta" onClick={closeMenu}>
            Book a Cut
          </Link>
        </nav>
      </div>
    </header>
  )
}
