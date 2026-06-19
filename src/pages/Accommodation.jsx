import React from 'react';
import { ArrowRight, ShieldCheck, Star, Sparkles, MapPin, Hotel } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';

export default function Accommodation() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-hero-gradient pt-24 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="section-eyebrow">Luxury Stays & Comfort</span>
          <h1 className="font-display text-5xl text-white leading-snug mb-4">Accommodation</h1>
          <p className="text-white/55 text-sm leading-relaxed max-w-md mx-auto mb-8">
            We partner with the best hotels, luxury resorts, and boutique homestays to ensure you stay in comfort while exploring Sikkim.
          </p>
        </div>
      </section>

      {/* ── FEATURED PARTNER: HOTEL PARK PREMIUM ── */}
      <section className="py-20 px-4 bg-pt-cream relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <SectionHeader 
              eyebrow="Our Premier Partner Hotel" 
              title="Featured Stay" 
              subtitle="Enjoy exclusive benefits, preferred booking rates, and top-tier hospitality when booking through Priyansu Travels."
            />
          </div>

          {/* Hotel Park Premium Card */}
          <div className="reveal">
            <div className="group relative bg-white border border-black/[0.06] rounded-3xl overflow-hidden shadow-card hover:shadow-gold-md hover:border-pt-gold/30 transition-all duration-500 transform hover:-translate-y-1">
              {/* Decorative golden light trail on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pt-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="grid md:grid-cols-12 gap-0">
                {/* Image Column */}
                <div className="md:col-span-7 relative overflow-hidden min-h-[350px] md:min-h-[480px]">
                  <img 
                    src="/assets/hotel-park-premium.png" 
                    alt="Hotel Park Premium" 
                    className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pt-deep/80 via-pt-deep/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-pt-gold/90 backdrop-blur-md text-pt-deep text-[10px] uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded-full shadow-lg border border-pt-gold-light/20">
                    <Sparkles size={11} className="animate-pulse" />
                    Recommended Stay
                  </div>

                  {/* Location badge on bottom left of image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-1 text-pt-gold text-xs font-semibold uppercase tracking-wider mb-1">
                      <MapPin size={12} />
                      Gangtok, Sikkim
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-wide">Hotel Park Premium</h3>
                  </div>
                </div>

                {/* Text Details Column */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-1 mb-4 text-pt-gold">
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <span className="text-[10px] text-pt-muted uppercase tracking-wider ml-1 font-semibold">Premium Luxury</span>
                  </div>

                  <h2 className="font-display text-3xl text-pt-deep leading-tight mb-6 group-hover:text-pt-gold transition-colors duration-300">
                    Hotel Park Premium
                  </h2>

                  <p className="text-pt-muted text-sm leading-relaxed mb-6 font-sans">
                    Stay with us and experience the perfect blend of comfort and luxury at Hotel Park Premium, where exceptional hospitality meets elegant living.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      'Exquisite Rooms & Suites',
                      'Stunning Himalayan Mountain Views',
                      'Multi-Cuisine Fine Dining Restaurant',
                      'Priyansu Travels 1-Stop Seamless Logistics Integration',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-xs text-pt-deep/80">
                        <div className="w-5 h-5 rounded-full bg-pt-gold/10 flex items-center justify-center text-pt-gold shrink-0">
                          <ShieldCheck size={12} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div>
                    <a 
                      href="https://www.parkpremiumhotel.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2.5 bg-pt-deep text-pt-gold border border-pt-gold/30 font-medium text-xs tracking-wider uppercase px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-pt-gold hover:text-pt-deep hover:border-pt-gold shadow-md hover:shadow-gold-sm hover:-translate-y-0.5 active:scale-95"
                    >
                      Visit Hotel Website
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TYPES OF ACCOMMODATIONS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader 
              eyebrow="Tailored Comfort" 
              title="Find Your Perfect Retreat" 
              subtitle="No matter your travel style or budget, we coordinate with vetted accommodations to deliver safe, premium, and cozy experiences."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Boutique & Heritage Stays',
                desc: 'Experience the rich culture and history of Sikkim in carefully curated heritage properties and boutique resorts.',
                icon: Hotel,
              },
              {
                title: 'Premium Homestays',
                desc: 'Stay with welcoming local families in clean, beautifully decorated homestays to experience real Sikkimese hospitality.',
                icon: Sparkles,
              },
              {
                title: 'Adventure Camps & Retreats',
                desc: 'Unplug under the stars in premium glamping sites and wilderness cabins close to trekking trails and river basins.',
                icon: MapPin,
              },
            ].map(({ title, desc, icon: Icon }, i) => (
              <div key={title} className={`reveal reveal-delay-${i + 1}`}>
                <div className="card-base p-6 hover:border-pt-gold/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-pt-gold/10 flex items-center justify-center text-pt-gold mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg text-pt-deep mb-3 font-semibold">{title}</h3>
                  <p className="text-pt-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner 
        title="Ready to Plan Your Sikkim Vacation?" 
        subtitle="Get a personalized itinerary combining direct stays at Hotel Park Premium and full luxury transport services with Priyansu Travels."
        ctaLabel="Enquire Now"
        ctaTo="/contact"
      />
    </>
  );
}
