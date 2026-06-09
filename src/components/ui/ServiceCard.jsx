import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Premium image-based service card with hover reveal.
 * Converts better than icon-only or glassmorphism cards
 * because it shows visual context + benefits simultaneously.
 */
export default function ServiceCard({ service }) {
  const { icon: Icon, name, tagline, desc, features, cta, color } = service;
  return (
    <div className="group card-base overflow-hidden cursor-pointer card-hover">
      {/* Image-style gradient header */}
      <div className={`h-28 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-dot-pattern bg-dot-sm" />
        <Icon size={42} className="text-pt-gold/60 relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display text-lg text-pt-deep mb-1">{name}</h3>
        <p className="text-pt-gold text-xs font-medium mb-3 italic">{tagline}</p>
        <p className="text-pt-muted text-xs leading-relaxed mb-4">{desc}</p>

        {/* Features chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.map((f) => (
            <span key={f} className="text-[10px] bg-pt-cream text-pt-slate px-2 py-0.5 rounded-full border border-black/[0.07]">
              {f}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="text-pt-gold text-xs font-medium flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200"
        >
          {cta} <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
