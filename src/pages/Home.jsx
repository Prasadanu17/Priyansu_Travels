import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield, Clock, CreditCard, Headphones } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TrustBar from '../components/ui/TrustBar';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import PackageCard from '../components/ui/PackageCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import CTABanner from '../components/ui/CTABanner';

import ExperienceSikkimSection from '../components/ui/ExperienceSikkimSection';
import VehicleShowcase from '../components/ui/VehicleShowcase';
import { services } from '../data/services';
import { packages } from '../data/packages';
import { testimonials, stats } from '../data/testimonials';

const whyItems = [
  { icon: Shield, title: 'Safe & Verified Drivers', desc: 'All drivers are police-verified with 3+ years experience and a clean record.' },
  { icon: Clock, title: 'Always On Time', desc: 'We track flights & trains — no waiting, no stress, no delays, ever.' },
  { icon: CreditCard, title: 'Transparent Pricing', desc: 'No hidden charges. What you see is exactly what you pay — guaranteed.' },
  { icon: Headphones, title: '24/7 Customer Support', desc: 'Reach us anytime via call, WhatsApp, or email. We are always here for you.' },
];

const departureItems = [
  {
    meta: 'Next Departure',
    title: 'Darjeeling',
    subtitle: 'Watch sunrise paint Kanchenjunga',
    duration: '3 Days / 2 Nights',
    price: '₹4,999',
  },
  {
    meta: 'Featured Tour',
    title: 'Pelling Escape',
    subtitle: 'Mountain temples & tea gardens',
    duration: '4 Days / 3 Nights',
    price: '₹6,299',
  },
  {
    meta: 'Popular Pick',
    title: 'Gangtok Gateway',
    subtitle: 'Serene lakes and monastery trails',
    duration: '5 Days / 4 Nights',
    price: '₹7,450',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % departureItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-[92vh] flex items-center relative overflow-hidden pt-24 pb-16"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.65) 100%), url('/assets/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-100 pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06]">
          <div className="absolute inset-0 rounded-full border border-pt-gold" />
          <div className="absolute inset-16 rounded-full border border-pt-gold" />
          <div className="absolute inset-32 rounded-full border border-pt-gold" />
        </div>


        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 w-full flex flex-col gap-10">

          {/* Welcome Header - Centered */}
          <div className="text-center max-w-3xl mx-auto w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-pt-gold/15 border border-pt-gold/35 rounded-full px-4 py-1.5 text-pt-gold-light text-xs tracking-widest uppercase mb-4 mx-auto">
              <MapPin size={12} />
              Sikkim's Registered Travel Agency
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
              Welcome to,<br />
              <em className="text-pt-gold italic">The Priyansu Travels</em>
            </h1>
          </div>

          {/* Grid Layout - Left: Explore, Right: Featured Tour */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full mt-2">

            {/* Left Column: Explore Things */}
            <div className="flex flex-col items-start text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.3] mb-6 border-l-4 border-pt-gold pl-5 py-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                <span className="block text-white text-sm sm:text-base uppercase tracking-[0.25em] mb-2 font-semibold">Explore,</span>
                <em className="italic font-light text-pt-gold">The Hidden Paradise of the Himalayas</em>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 font-light max-w-md">
                Luxury Tours • Adventure • Local Experiences • Trusted Travel Partner in Sikkim
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link to="/contact" className="btn-primary px-6 py-3">Book Now <ArrowRight size={15} /></Link>
                <Link to="/travel" className="btn-outline px-6 py-3">Travel Guide</Link>
                <Link to="/services" className="btn-outline px-6 py-3">Our Services</Link>
              </div>

              {/* Mobile hero slider */}
              <div className="md:hidden mt-6 w-full">
                {departureItems.map((item, index) => (
                  index === activeSlide ? (
                    <div key={item.title} className="rounded-[28px] border border-white/15 bg-slate-950/80 backdrop-blur-2xl p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out">
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mb-3">{item.meta}</p>
                      <h3 className="font-display text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-pt-gold text-sm italic mb-4">{item.subtitle}</p>
                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-white/60">
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  ) : null
                ))}
              </div>
            </div>

            {/* Right Column: Featured Tour Card Slider */}
            <div className="hidden md:flex justify-center items-center h-[360px] relative w-full -translate-y-8">
              <div className="relative w-full max-w-[320px]" style={{ perspective: '1200px' }}>
                {departureItems.map((item, index) => {
                  const offset = index - activeSlide;
                  const absOffset = Math.abs(offset);
                  const translateX = offset * 40;
                  const translateY = absOffset * 15;
                  const rotateY = offset * -8;
                  const scale = index === activeSlide ? 1 : 0.94;
                  const zIndex = 10 - absOffset;

                  return (
                    <div
                      key={item.title}
                      className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[300px] -translate-x-1/2 rounded-[28px] border border-white/15 bg-slate-950/70 backdrop-blur-2xl p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out"
                      style={{
                        transform: `translate3d(${translateX}px, ${translateY}px, ${-absOffset * 40}px) rotateY(${rotateY}deg) scale(${scale})`,
                        zIndex,
                        opacity: index === activeSlide ? 1 : 0.75,
                      }}
                    >
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mb-3">{item.meta}</p>
                      <h3 className="font-display text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-pt-gold text-xs italic mb-4">{item.subtitle}</p>
                      <div className="flex text-xs text-white/60">
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-pt-navy py-10 px-4 border-b border-white/5 relative overflow-hidden">
        {/* Subtle background dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-xs opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center flex flex-col items-center justify-center">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-pt-gold font-bold mb-2 tracking-tight">
                {value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-sans font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExperienceSikkimSection />

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="section-eyebrow">About Us</span>
            <h2 className="font-display text-4xl text-pt-deep leading-snug mb-4">
              Built on Trust,<br /><em className="text-pt-gold italic">Driven by Passion</em>
            </h2>
            <p className="text-pt-muted text-sm leading-relaxed mb-5">
              At Priyansu Tours & Travels, we specialize in providing reliable, affordable, and hassle-free travel solutions across Sikkim, Darjeeling, Kalimpong, and Bhutan. Regd. No. 1624/DoT&CAV/E/24/TA. Whether you are planning a family vacation, honeymoon trip, adventure tour, or business travel, our experienced team ensures a comfortable and memorable journey from start to finish.
            </p>
            <p className="text-pt-muted text-sm leading-relaxed mb-6">
              We believe every journey deserves the same care as the first one. That's why our drivers are verified, our prices are transparent, and our support never sleeps.
            </p>
            <Link to="/about" className="btn-dark inline-flex">
              Our Full Story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-black/[0.07] text-center">
                <div className="font-display text-3xl text-pt-gold font-bold">{value}</div>
                <div className="text-pt-muted text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader
              eyebrow="What We Offer"
              title="Our Travel Services"
              subtitle="From daily city rides to elaborate multi-day tours — every service is designed for your comfort."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={s.id} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link to="/services" className="btn-dark">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 px-4 bg-pt-deep">
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Why Us" title="Why Choose Priyansu Travels" light />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyItems.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${i % 2 + 1} flex gap-4 items-start bg-white/5 border border-pt-gold/15 rounded-2xl p-5`}
              >
                <div className="w-10 h-10 min-w-10 bg-pt-gold/15 rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-pt-gold" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR PACKAGES ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Popular Packages" title="Where Will You Go?" subtitle="Our most-loved tours — handpicked for unforgettable experiences." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.slice(0, 6).map((pkg, i) => (
              <div key={pkg.id} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link to="/travel" className="btn-dark">
              View Sikkim Travel Guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <VehicleShowcase />

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" subtitle="Real words from real travellers who trusted us with their journeys." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner />
    </>
  );
}
