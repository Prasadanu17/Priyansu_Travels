import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Calendar, 
  Compass, 
  ArrowLeft, 
  Sparkles, 
  Navigation, 
  Check, 
  Car, 
  HelpCircle,
  ArrowRight,
  Lightbulb
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { districtsData } from '../data/districtsData';
import { districtExtras } from '../data/districtExtras';
import { districtRouteMap, districtLinks, getDistrictIdFromSlug } from '../data/districtRoutes';

// Curated Heading Component to match screenshots exactly
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-12 reveal">
      <span className="text-pt-gold text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-2 block">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pt-deep mb-3 leading-snug">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent to-pt-gold/40" />
        <span className="text-pt-gold text-xs">✦</span>
        <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent to-pt-gold/40" />
      </div>
      {subtitle && (
        <p className="text-[#1e3a2f] text-xs sm:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Travel() {
  const { slug } = useParams();
  useScrollReveal();

  // Attraction filter state
  const [selectedTag, setSelectedTag] = useState('All');
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // If there's a slug, we show the District Detail View
  if (slug) {
    const districtId = getDistrictIdFromSlug(slug);
    const district = districtsData[districtId];
    const extras = districtExtras[districtId];

    if (!district) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-pt-cream px-4 text-center">
          <HelpCircle size={48} className="text-pt-accent mb-4 animate-bounce" />
          <h2 className="font-display text-3xl text-pt-deep mb-2">District Not Found</h2>
          <p className="text-pt-muted mb-6 max-w-md">The district page you are looking for does not exist or has been moved.</p>
          <Link to="/travel" className="btn-primary">
            <ArrowLeft size={16} /> Back to Travel Guide
          </Link>
        </div>
      );
    }

    // Get unique tags for attractions filter
    const attractionTags = ['All', ...new Set(district.topAttractions.map((att) => att.tag))];

    // Filtered attractions based on selected tag
    const filteredAttractions = selectedTag === 'All'
      ? district.topAttractions
      : district.topAttractions.filter((att) => att.tag === selectedTag);

    const otherDistricts = districtLinks.filter((link) => link.slug !== slug);

    return (
      <div className="bg-pt-cream min-h-screen pb-16 font-sans">
        
        {/* ── 1. HERO BANNER ── */}
        <section 
          className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 px-4 bg-cover bg-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(13,27,42,0.6) 0%, rgba(13,27,42,0.7) 60%, rgba(13,27,42,0.95) 100%), url('${district.heroImage}')`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none opacity-20" />
          
          {/* Breadcrumb / Top Back Link */}
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <Link 
              to="/travel" 
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-pt-gold hover:text-pt-gold-light transition-colors duration-200"
            >
              <ArrowLeft size={12} /> Back to All Districts
            </Link>
          </div>

          {/* Main Hero content */}
          <div className="max-w-3xl mx-auto w-full text-center relative z-10 my-auto px-4">
            <span className="text-pt-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3 block animate-fade-in font-sans">Sikkim Destination Guide</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-none tracking-tight">
              {district.name}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8 font-light">
              {district.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-6 py-3 font-semibold shadow-gold-md">
                Explore Packages
              </Link>
              <Link to="/contact" className="btn-outline px-6 py-3 font-semibold">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Hero Info Pills */}
          <div className="max-w-6xl mx-auto w-full relative z-10 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              {district.info.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 px-3 border-r border-white/10 last:border-0">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-white/50">{item.title}</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 2. DISTRICT AT A GLANCE ── */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <SectionHeader 
            eyebrow="Key Details" 
            title={`${district.name} at a Glance`} 
            subtitle={`Essential details you need to know before visiting ${district.name}.`} 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {district.info.map((item, idx) => (
              <div 
                key={idx}
                className={`rounded-[2rem] p-8 shadow-[0_15px_45px_rgba(13,27,42,0.03)] border border-black/[0.03] transition-all duration-300 hover:-translate-y-1 ${
                  idx === 0 ? 'bg-blue-50 text-blue-900 border-blue-100/50' : 
                  idx === 1 ? 'bg-emerald-50 text-emerald-900 border-emerald-100/50' : 
                  'bg-amber-50 text-amber-900 border-amber-100/50'
                }`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <span className="block text-[10px] uppercase tracking-wider opacity-60 font-semibold mb-2">{item.title}</span>
                <h4 className="text-lg sm:text-xl font-bold leading-snug">{item.value}</h4>
              </div>
            ))}
          </div>
        </section>


        {/* ── 3. EXPLORE DISTRICT (Attractions with filtering) ── */}
        <section className="py-20 px-4 bg-pt-cream border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              eyebrow="Top Attractions" 
              title={`Explore ${district.name}`} 
              subtitle="Use filters to quickly discover places by travel style." 
            />

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              {attractionTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`text-xs px-5 py-2.5 rounded-full border font-medium transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-pt-deep text-pt-gold border-pt-deep shadow-md'
                      : 'bg-white text-pt-slate border-black/10 hover:border-pt-gold hover:text-pt-gold'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Attractions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction, idx) => (
                <div 
                  key={idx}
                  className="group bg-white rounded-3xl border border-black/[0.05] overflow-hidden shadow-[0_8px_30px_rgba(13,27,42,0.04)] hover:shadow-[0_20px_50px_rgba(13,27,42,0.08)] transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden bg-pt-navy">
                    <img 
                      src={attraction.img} 
                      alt={attraction.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex rounded-full bg-black/45 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white border border-white/10">
                        {attraction.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-pt-deep mb-2 group-hover:text-pt-gold transition-colors duration-300">
                      {attraction.title}
                    </h3>
                    <p className="text-pt-slate text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {attraction.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 4. CELEBRATE DISTRICT (Festivals) ── */}
        <section className="py-20 px-4 bg-white border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              eyebrow="Festivals & Events" 
              title={`Celebrate ${district.name}`} 
              subtitle="Seasonal experiences and local cultural moments." 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extras?.festivals.map((fest, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl border border-black/[0.04] p-6 flex items-start gap-4 shadow-[0_10px_35px_rgba(13,27,42,0.02)] hover:shadow-[0_15px_40px_rgba(13,27,42,0.04)] transition-all"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <span className="inline-block text-[9px] font-bold text-[#059669] uppercase tracking-wider mb-2">
                      📅 &nbsp;{fest.season}
                    </span>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-pt-deep mb-2">{fest.name}</h4>
                    <p className="text-pt-slate text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {fest.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 5. ACCOMMODATION & TRANSPORTATION ── */}
        <section className="py-20 px-4 bg-pt-cream border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              eyebrow="Logistics & Stays" 
              title="Accommodation and Transportation" 
              subtitle={`Where to stay and how to travel in and around ${district.name} district.` 
            } />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Accommodations Card */}
              <div className="bg-white rounded-[2rem] border border-black/[0.04] p-8 shadow-[0_10px_35px_rgba(13,27,42,0.02)] flex flex-col sm:flex-row gap-6">
                <div className="w-12 h-12 rounded-2xl bg-pt-gold/15 flex items-center justify-center text-pt-gold shrink-0">
                  <Compass size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-pt-deep mb-4">Accommodation Options</h3>
                  <ul className="space-y-4">
                    {extras?.accommodations.map((acc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-pt-slate font-sans font-light">
                        <Check size={16} className="text-pt-gold mt-0.5 shrink-0" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transportation Card */}
              <div className="bg-white rounded-[2rem] border border-black/[0.04] p-8 shadow-[0_10px_35px_rgba(13,27,42,0.02)] flex flex-col sm:flex-row gap-6">
                <div className="w-12 h-12 rounded-2xl bg-pt-gold/15 flex items-center justify-center text-pt-gold shrink-0">
                  <Car size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-pt-deep mb-4">Transportation</h3>
                  <ul className="space-y-4">
                    {extras?.transportation.map((trans, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-pt-slate font-sans font-light">
                        <span className="text-pt-gold mt-1 shrink-0">📍</span>
                        <span>{trans}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 6. SMART TIPS ── */}
        <section className="py-20 px-4 bg-white border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              eyebrow="Travel Tips" 
              title={`Smart Tips for ${district.name}`} 
              subtitle="Easy wins to make your plan smoother and more comfortable." 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {extras?.travelTips.map((tip, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl border border-black/[0.05] p-8 pt-10 relative shadow-[0_10px_35px_rgba(13,27,42,0.03)] flex flex-col transition-all duration-300 hover:border-pt-gold/30"
                >
                  {/* Floating lightbulb badge */}
                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-2xl bg-[#C99A4C] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(201,154,76,0.3)]">
                    <Lightbulb size={18} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-pt-gold font-bold mb-3 font-sans block">
                    Tip {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <p className="text-pt-slate text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 7. FAQS (Frequently Asked Questions Accordion) ── */}
        <section className="py-20 px-4 bg-pt-cream border-t border-black/[0.04]">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              eyebrow="FAQ" 
              title={`${district.name} - Frequently Asked Questions`} 
              subtitle="Tap a question to reveal the answer." 
            />

            <div className="space-y-3">
              {extras?.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-black/[0.06] rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-sans font-semibold text-sm sm:text-base text-pt-deep focus:outline-none transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <div className="w-7 h-7 rounded-full bg-[#C99A4C] flex items-center justify-center text-white shrink-0">
                          <ChevronUp size={16} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-transparent border border-black/10 flex items-center justify-center text-pt-slate shrink-0 hover:border-[#C99A4C]">
                          <ChevronDown size={16} />
                        </div>
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-pt-slate leading-relaxed border-t border-black/[0.03] bg-white animate-fade-in font-sans font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 8. EXPLORE OTHER DISTRICTS LINKS ── */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center border-t border-black/[0.04]">
          <h3 className="font-display text-2xl text-pt-deep mb-8">Explore Other Districts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherDistricts.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => {
                  setSelectedTag('All');
                  setOpenFaq(null);
                }}
                className="px-5 py-2.5 rounded-full border border-black/10 bg-white text-xs text-pt-slate font-medium hover:border-pt-gold hover:text-pt-gold hover:shadow-sm transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    );
  }

  // ─── MAIN TRAVEL OVERVIEW VIEW ───
  return (
    <div className="bg-pt-cream min-h-screen font-sans">
      
      {/* Hero Header */}
      <section className="bg-hero-gradient pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="section-eyebrow">Explore Sikkim</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Sikkim District Guide
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans font-light font-sans">
            Sikkim is divided into six beautiful districts, each presenting its own unique ecosystem, monasteries, adventure trails, and cultural heritages. Select a district below to plan your trip.
          </p>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districtRouteMap.map(({ id, slug }) => {
            const data = districtsData[id];
            if (!data) return null;

            return (
              <div 
                key={id}
                className="group relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full"
              >
                {/* Image header */}
                <div className="relative h-60 overflow-hidden bg-pt-navy shrink-0">
                  <img 
                    src={data.heroImage} 
                    alt={data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display text-2xl text-white leading-tight">
                      {data.name} District
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-pt-slate text-xs sm:text-sm leading-relaxed mb-6 font-sans font-light">
                    {data.description}
                  </p>

                  {/* Summary features */}
                  <div className="space-y-2 mb-6 border-t border-black/[0.04] pt-4">
                    {data.info.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-pt-slate font-light">
                        <span>{item.icon}</span>
                        <span className="font-semibold">{item.title}:</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <Link 
                    to={`/travel/${slug}`}
                    className="w-full py-3 rounded-xl bg-pt-cream group-hover:bg-pt-deep group-hover:text-pt-gold text-pt-deep font-sans font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    View Complete Guide <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
