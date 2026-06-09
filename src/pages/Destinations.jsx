import { useState } from 'react';
import { Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import PackageCard from '../components/ui/PackageCard';
import CTABanner from '../components/ui/CTABanner';
import { packages, categories } from '../data/packages';

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
