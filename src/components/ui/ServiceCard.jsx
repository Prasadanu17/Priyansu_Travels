import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Premium image-based service card with hover reveal.
 * Converts better than icon-only or glassmorphism cards
 * because it shows visual context + benefits simultaneously.
 */
export default function ServiceCard({ service }) {
  const { icon: Icon, name, tagline, desc, features, cta, color, image } = service;
  return (
    <div className="group card-base overflow-hidden cursor-pointer card-hover">
      <div className="relative h-44 overflow-hidden rounded-t-3xl">
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
        )}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-10 bg-dot-pattern bg-dot-sm" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <Icon size={36} className="text-white/90 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold tracking-[0.12em] uppercase opacity-90">
          {name}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-pt-deep mb-1">{name}</h3>
        <p className="text-pt-gold text-xs font-medium mb-3 italic">{tagline}</p>
        <p className="text-pt-muted text-xs leading-relaxed mb-4">{desc}</p>

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
