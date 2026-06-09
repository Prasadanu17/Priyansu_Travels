import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  const { name, location, rating, text, avatar, color, trip } = testimonial;
  return (
    <div className="card-base p-5 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={12} className="text-pt-gold fill-pt-gold" />
        ))}
      </div>
      <p className="text-pt-slate text-xs leading-relaxed italic flex-1">"{text}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-black/[0.06]">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0"
          style={{ backgroundColor: color }}
        >
          {avatar}
        </div>
        <div>
          <p className="text-xs font-medium text-pt-deep">{name}</p>
          <p className="text-[10px] text-pt-muted">{location} · {trip}</p>
        </div>
      </div>
    </div>
  );
}
