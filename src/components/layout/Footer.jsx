import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "../../assets/logo.png";

const footerLinks = {
  "Quick Links": [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/accommodation", label: "Accommodation" },
    { to: "/services", label: "Services" },
    { to: "/travel", label: "Travel Guide" },
    { to: "/contact", label: "Contact" },
  ],
  Services: [
    { to: "/services", label: "Car Rental" },
    { to: "/services", label: "Airport Transfer" },
    { to: "/services", label: "Tour Packages" },
    { to: "/services", label: "Corporate Travel" },
    { to: "/services", label: "Group Tours" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-pt-deep text-white/50">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img
                src={logo}
                alt="Priyansu Tours & Travels"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed text-white/45 mb-4">
              Your trusted travel partner for Sikkim and nearby destinations.
              Registered travel agency providing reliable, affordable, and
              hassle-free travel solutions. Regd. No. 1624/DoT&CAV/E/24/TA.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-xs text-white/45 hover:text-pt-gold transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-medium tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={13} className="text-pt-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+917364063680"
                  className="text-xs text-white/45 hover:text-pt-gold transition-colors"
                >
                  +91 73640 63680
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle
                  size={13}
                  className="text-pt-gold mt-0.5 shrink-0"
                />
                <a
                  href="https://wa.me/919641135045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/45 hover:text-pt-gold transition-colors"
                >
                  +91 96411 35045 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={13} className="text-pt-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:priyansutourtavels@gmail.com"
                  className="text-xs text-white/45 hover:text-pt-gold transition-colors"
                >
                  priyansutourtavels@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-pt-gold mt-0.5 shrink-0" />
                <span className="text-xs text-white/45">
                  Tibet Road, Near Nayuma Television Office, Gangtok, Sikkim
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-5 gap-4 text-[11px] text-white/30">
          <p>© 2026 Priyansu Tours & Travels. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            <Link
              to="/privacy-policy"
              className="hover:text-pt-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-pt-gold transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-white/10 hidden sm:inline">|</span>
            <span>
              Powered by{" "}
              <a
                href="https://sh1eldtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 font-medium hover:text-pt-gold transition-colors"
              >
                SH1ELD Tech
              </a>
            </span>
            <span className="text-white/10 hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with 💚 in Sikkim
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
