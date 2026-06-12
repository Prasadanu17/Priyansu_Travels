import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import ThreeDAnimation from '../components/ui/ThreeDAnimation';
import { services } from '../data/services';

const process = [
  { step: '01', title: 'Tell Us Your Plan', desc: 'Call, WhatsApp, or fill the form — share your destination, dates, and group size.' },
  { step: '02', title: 'Get a Custom Quote', desc: 'We prepare a personalised quote with vehicle options, itinerary, and transparent pricing within 2 hours.' },
  { step: '03', title: 'Confirm & Relax',    desc: 'Confirm your booking with a small advance. We handle everything else from there.' },
  { step: '04', title: 'Travel in Comfort',  desc: 'Your driver arrives on time, trip goes perfectly, and we follow up to make sure you are happy.' },
];

export default function Services() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-hero-gradient pt-24 pb-16 px-4 text-center relative overflow-hidden">
        <ThreeDAnimation className="hidden lg:block absolute -right-10 top-16 w-64 h-64 opacity-80" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="section-eyebrow">Everything We Offer</span>
          <h1 className="font-display text-5xl text-white leading-snug mb-4">Our Travel Services</h1>
          <p className="text-white/55 text-sm leading-relaxed max-w-md mx-auto mb-8">
            From quick city transfers to complete multi-city tours — every service is delivered with the same dedication to comfort, safety, and punctuality.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={15} /></Link>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Services" title="What We Do Best" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={s.id} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="The Process" title="How Booking Works" subtitle="Simple, fast, and hassle-free — from your first message to the final drop-off." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className={`reveal reveal-delay-${i % 4 + 1} relative`}>
                <div className="card-base p-5">
                  <div className="font-display text-4xl text-pt-gold/20 leading-none mb-3">{step}</div>
                  <h3 className="text-pt-deep text-sm font-medium mb-2">{title}</h3>
                  <p className="text-pt-muted text-xs leading-relaxed">{desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <ArrowRight size={16} className="text-pt-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Find What You Need?"
        subtitle="We love building custom packages. Tell us your vision and we'll make it a reality."
        ctaLabel="WhatsApp Us Now"
        ctaTo="/contact"
      />
    </>
  );
}
