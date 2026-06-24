import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageCard({ pkg }) {
  const { name, tagline, days, nights, minPax, price, badge, bgClass, rating, reviews, highlights, includes, image } = pkg;

  return (
    <div className="group card-base overflow-hidden card-hover">
      {/* Hero image area */}
      <div className={`h-36 relative flex items-end p-4 ${image ? 'bg-slate-950' : `bg-gradient-to-br ${bgClass}`}`}>
        {image && (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {badge && (
          <span className="absolute top-3 right-3 bg-pt-gold text-pt-deep text-[10px] font-medium px-2.5 py-1 rounded">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="relative z-10">
          <h3 className="font-display text-white text-lg font-bold leading-tight">{name}</h3>
          <p className="text-pt-gold-light text-xs mt-0.5 italic">{tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center gap-3 text-pt-muted text-xs mb-3">
          <span className="flex items-center gap-1"><Clock size={11} className="text-pt-gold" /> {days}D/{nights}N</span>
          <span className="flex items-center gap-1"><Users size={11} className="text-pt-gold" /> {minPax}+ pax</span>
          <span className="flex items-center gap-1 ml-auto">
            <Star size={11} className="text-pt-gold fill-pt-gold" /> {rating} ({reviews})
          </span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-[10px] bg-pt-cream text-pt-slate px-2 py-0.5 rounded-full border border-black/[0.07]">
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end">
          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-xs text-pt-gold font-medium hover:gap-3 transition-all duration-200"
          >
            Book Now <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
