import { useState } from 'react';
import { Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import PackageCard from '../components/ui/PackageCard';
import CTABanner from '../components/ui/CTABanner';
import ThreeDAnimation from '../components/ui/ThreeDAnimation';
import { packages, categories } from '../data/packages';

const topDestinations = [
  { name: 'Gangtok', subtitle: 'Sikkim’s vibrant capital', color: 'from-[#164e63] to-[#0f172a]' },
  { name: 'Nathula Pass', subtitle: 'Snowy borderland adventure', color: 'from-[#1f2937] to-[#0f172a]' },
  { name: 'Tsomgo Lake', subtitle: 'Sacred alpine sapphire', color: 'from-[#0e4a6d] to-[#1f5b7f]' },
  { name: 'Lachung', subtitle: 'Valley village charm', color: 'from-[#3b4252] to-[#2d3748]' },
  { name: 'Lachen', subtitle: 'Gateway to mountain serenity', color: 'from-[#2c3a47] to-[#1b2c3f]' },
  { name: 'Yumthang Valley', subtitle: 'Flower valley of Sikkim', color: 'from-[#1c4d3f] to-[#143b31]' },
  { name: 'Gurudongmar Lake', subtitle: 'High-altitude blue mirror', color: 'from-[#1e3651] to-[#10243a]' },
  { name: 'Pelling', subtitle: 'Hillside views of Kanchenjunga', color: 'from-[#2f4868] to-[#1b2c45]' },
  { name: 'Ravangla', subtitle: 'Peaceful monastery plateau', color: 'from-[#33414f] to-[#1c2733]' },
  { name: 'Zuluk Silk Route', subtitle: 'Historic mountain road', color: 'from-[#4e3b1f] to-[#2f2414]' },
  { name: 'Darjeeling', subtitle: 'Tea gardens & toy trains', color: 'from-[#44322a] to-[#1d231e]' },
  { name: 'Kalimpong', subtitle: 'Artisan town on the ridge', color: 'from-[#3d4756] to-[#1d2530]' },
];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  useScrollReveal();

  const filtered = packages.filter((p) => {
    const matchesCat = p.category.includes(activeCategory);
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-hero-gradient pt-24 pb-10 px-4 relative overflow-hidden">
        <ThreeDAnimation className="hidden lg:block absolute right-6 top-12 w-56 h-56 opacity-75" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="section-eyebrow">Discover India</span>
          <h1 className="font-display text-5xl text-white leading-snug mb-3">Explore Destinations</h1>
          <p className="text-white/55 text-sm mb-7 max-w-md">Hand-picked tours from Kolkata to India's most beautiful, spiritual, and adventurous corners.</p>

          {/* Search bar */}
          <div className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-4 py-3 max-w-lg">
            <Search size={16} className="text-pt-gold shrink-0" />
            <input
              type="text"
              placeholder="Search destination, highlight, or trip type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white/70 placeholder:text-white/35 text-sm flex-1 font-sans"
            />
          </div>
        </div>
      </section>

      {/* ── TOP DESTINATIONS ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Top Destinations" title="Explore the most loved Sikkim escapes" subtitle="Tap or hover over each destination card to reveal curated highlights and travel inspiration." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {topDestinations.map((dest, index) => (
              <button
                key={dest.name}
                type="button"
                className="group relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-br shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.16)] focus:outline-none"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-95`} />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[240px] text-left text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/70">Top destination</span>
                    <h3 className="font-display text-2xl mt-4 mb-2">{dest.name}</h3>
                    <p className="text-sm leading-relaxed text-white/85">{dest.subtitle}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/80">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/10 text-white">{index + 1}</span>
                    <span className="text-xs">Discover more</span>
                  </div>
                </div>
                <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  See highlights
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="bg-white border-b border-black/[0.06] sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`shrink-0 text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-pt-deep text-pt-gold border-pt-deep'
                  : 'bg-transparent text-pt-muted border-black/12 hover:border-pt-deep hover:text-pt-deep'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PACKAGES GRID ── */}
      <section className="py-12 px-4 bg-white min-h-[50vh]">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-pt-muted text-sm mb-2">No packages found for your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-pt-gold text-sm underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-pt-muted text-xs mb-6">{filtered.length} packages found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((pkg, i) => (
                  <div key={pkg.id} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                    <PackageCard pkg={pkg} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner
        title="Don't See Your Dream Destination?"
        subtitle="We can take you anywhere in India. Tell us where you want to go and we'll build a custom tour."
        ctaLabel="Request Custom Tour"
      />
    </>
  );
}
