import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { districtLinks } from '../../data/districtRoutes';
import logo from '../../assets/logo.png';

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/services',     label: 'Services' },
  { to: '/travel',       label: 'Travel Guide' },
  { to: '/contact',      label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileTravelOpen, setMobileTravelOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-2 shrink-0 py-1">
          <img src={logo} alt="Priyansu Travels" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => {
            if (to === '/travel') {
              return (
                <div key={to} className="relative group py-2">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-xs px-3 py-2 rounded-md transition-all duration-200 inline-flex items-center gap-1 ${
                        isActive
                          ? 'text-pt-gold bg-pt-gold/10'
                          : 'text-white/60 hover:text-pt-gold hover:bg-pt-gold/10'
                      }`
                    }
                  >
                    {label} 
                    <ChevronDown size={12} className="transition-transform duration-250 group-hover:rotate-180 text-white/40 group-hover:text-pt-gold" />
                  </NavLink>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-1.5 w-56 rounded-xl border border-pt-gold/15 bg-pt-deep py-2 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    {districtLinks.map((link) => (
                      <Link
                        key={link.id}
                        to={link.to}
                        className="block px-4 py-2.5 text-xs text-white/70 hover:text-pt-gold hover:bg-pt-gold/10 transition-all duration-150 font-sans"
                      >
                        {link.name} District
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
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
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917364063680"
            className="hidden md:flex items-center gap-1.5 text-pt-gold/80 hover:text-pt-gold text-xs transition-colors"
          >
            <Phone size={13} />
            +91 73640 63680
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
          {navLinks.map(({ to, label }) => {
            if (to === '/travel') {
              return (
                <div key={to} className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:text-pt-gold">
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `transition-all ${isActive ? 'text-pt-gold' : ''}`
                      }
                    >
                      {label}
                    </NavLink>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileTravelOpen(!mobileTravelOpen);
                      }}
                      className="p-2 focus:outline-none"
                    >
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileTravelOpen ? 'rotate-180 text-pt-gold' : 'text-white/45'}`} />
                    </button>
                  </div>
                  {mobileTravelOpen && (
                    <div className="pl-4 flex flex-col gap-1 border-l border-pt-gold/25 ml-4 mb-2 mt-1">
                      {districtLinks.map((link) => (
                        <Link
                          key={link.id}
                          to={link.to}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileTravelOpen(false);
                          }}
                          className="text-xs py-2 text-white/50 hover:text-pt-gold block"
                        >
                          {link.name} District
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
          
          <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
            <a href="tel:+917364063680" className="flex items-center gap-2 text-pt-gold/80 text-sm px-4">
              <Phone size={15} /> +91 73640 63680
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
