import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/services',     label: 'Services' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/contact',      label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pt-deep/95 backdrop-blur-md shadow-lg border-b border-pt-gold/10'
          : 'bg-pt-deep'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-display text-xl text-pt-gold tracking-wide shrink-0">
          Priyansu <span className="text-white">Travels</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-xs px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-pt-gold bg-pt-gold/10'
                    : 'text-white/60 hover:text-pt-gold hover:bg-pt-gold/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+91XXXXXXXXXX"
            className="hidden md:flex items-center gap-1.5 text-pt-gold/80 hover:text-pt-gold text-xs transition-colors"
          >
            <Phone size={13} />
            +91 XXXXX XXXXX
          </a>
          <Link to="/contact" className="btn-primary text-xs px-4 py-2 hidden md:inline-flex">
            Book Now
          </Link>
          <button
            className="md:hidden text-white/70 hover:text-pt-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pt-deep border-t border-pt-gold/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm px-4 py-2.5 rounded-lg transition-all ${
                  isActive ? 'text-pt-gold bg-pt-gold/10' : 'text-white/70 hover:text-pt-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-pt-gold/80 text-sm px-4">
              <Phone size={15} /> +91 XXXXX XXXXX
            </a>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mx-4 justify-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
