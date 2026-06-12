import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  { emoji: '🏔️', title: '150+ Destinations Explored', subtitle: 'Himalayan valleys, monasteries, and hidden trails.' },
  { emoji: '🚗', title: 'Premium Travel Services', subtitle: 'Luxury transport, concierge support, and seamless planning.' },
  { emoji: '🥾', title: 'Guided Trekking Adventures', subtitle: 'Expert-led treks for every level of explorer.' },
  { emoji: '⭐', title: '5-Star Customer Experiences', subtitle: 'Rave reviews from travelers who fell in love with Sikkim.' },
];

export default function ExperienceSikkimSection() {
  return (
    <section className="relative overflow-hidden experience-sikkim-section">
      <div
        className="experience-sikkim-bg relative min-h-[740px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.45) 40%, rgba(13,27,42,0.16) 100%), url('/assets/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,168,76,0.18),_transparent_32%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(420px,1.2fr)_minmax(360px,0.8fr)] items-center">
            <div className="space-y-8 text-white">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-pt-gold font-semibold backdrop-blur-sm shadow-gold-sm">
                Experience Sikkim
              </p>
              <div className="space-y-4">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-[-0.03em]">
                  Experience Sikkim Like Never Before
                </h2>
                <p className="text-lg text-white/75 max-w-xl italic">
                  From snow-capped peaks to hidden valleys, every journey unveils a new story waiting to be lived.
                </p>
              </div>
              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
                Wake up above the clouds, ride through breathtaking Himalayan roads, witness crystal-clear alpine lakes, trek through untouched landscapes, and immerse yourself in the rich culture and traditions of Sikkim. Whether you're seeking adventure, tranquility, or unforgettable memories, let local experts guide you through every hidden gem of this mountain paradise.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pt-gold to-pt-gold-light px-6 py-3 text-sm font-semibold text-pt-deep shadow-[0_18px_40px_rgba(201,168,76,0.32)] hover:shadow-[0_22px_60px_rgba(201,168,76,0.35)] transition-all duration-300"
              >
                Start Your Journey <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.22)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-3xl">
                      {item.emoji}
                    </div>
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-particle left-10 top-28 h-28 w-28 rounded-full bg-pt-gold/15 blur-3xl" />
        <div className="experience-particle right-10 top-1/3 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
        <div className="experience-particle left-[30%] bottom-16 h-16 w-16 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>
    </section>
  );
}
