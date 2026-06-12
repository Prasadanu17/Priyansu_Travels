import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';
import ThreeDAnimation from '../components/ui/ThreeDAnimation';
import { stats } from '../data/testimonials';

const timeline = [
  { year: '2016', title: 'Founded in Kolkata', desc: 'Started with 1 vehicle and a commitment to on-time, honest service for everyday travellers.' },
  { year: '2018', title: 'Fleet Expansion',    desc: 'Grew to 10 vehicles; launched airport transfer and outstation services across Eastern India.' },
  { year: '2020', title: 'Corporate Launch',   desc: 'Partnered with 15+ Kolkata companies for regular employee transport and MICE events.' },
  { year: '2022', title: 'Tour Packages',      desc: 'Launched curated tour packages to Darjeeling, Sikkim, Puri and beyond — all-inclusive.' },
  { year: '2025', title: '500+ Happy Clients', desc: 'Surpassed 500 satisfied clients with a consistent 4.9-star average Google rating.' },
];

const values = [
  { num: '01', title: 'Our Mission',  desc: 'To make premium travel accessible and stress-free for every family, professional, and traveller in Eastern India.' },
  { num: '02', title: 'Our Vision',   desc: 'To become the most trusted regional travel brand in West Bengal — known for safety, punctuality, and heartfelt service.' },
  { num: '03', title: 'Integrity',    desc: 'We never add hidden charges, never cut corners on safety, and never overpromise. Honest service, every time.' },
  { num: '04', title: 'Punctuality',  desc: 'Your time is precious. We track flights, plan routes, and arrive early — so you never miss a moment.' },
  { num: '05', title: 'Customer First', desc: 'Every decision we make starts with one question: is this best for our customer? The answer shapes everything.' },
  { num: '06', title: 'Continuous Growth', desc: 'We reinvest in better vehicles, better training, and better technology so tomorrow\'s journey is always better than today\'s.' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-pt-deep pt-24 pb-16 px-4 relative overflow-hidden">
        <ThreeDAnimation className="hidden lg:block absolute right-8 top-24 w-56 h-56 opacity-90" />
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-100 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-pt-gold/15 border border-pt-gold/35 rounded-full px-4 py-1.5 text-pt-gold-light text-xs tracking-widest uppercase mb-6">
              Est. 2016 · Kolkata
            </div>
            <h1 className="font-display text-5xl text-white leading-[1.15] mb-5">
              The Story Behind<br /><em className="text-pt-gold italic">Every Journey</em>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Founded with a simple belief: every traveller deserves reliability, comfort, and a genuine smile. From one car to a trusted fleet — Priyansu Travels grew through honesty, one trip at a time.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-pt-gold/15 rounded-2xl p-5 text-center">
                <div className="font-display text-3xl text-pt-gold">{value}</div>
                <div className="text-white/50 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="bg-pt-navy rounded-3xl h-64 flex items-center justify-center border border-pt-gold/15">
              <div className="text-center">
                <div className="font-display text-5xl text-pt-gold/30 mb-2">PT</div>
                <p className="text-white/30 text-xs uppercase tracking-widest">Team / Fleet Photo</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="font-display text-3xl text-pt-deep mb-5 leading-snug">From One Car to<br /><em className="text-pt-gold italic">500 Happy Journeys</em></h2>
            <p className="text-pt-muted text-sm leading-relaxed mb-4">
              In 2016, Priyansu Travels started as a single car operated out of Kolkata — driven by one belief: that travellers in Eastern India deserve the same premium, stress-free experience available in bigger metro cities.
            </p>
            <p className="text-pt-muted text-sm leading-relaxed mb-4">
              Word spread fast. Honest pricing, punctual arrivals, and genuine care for every passenger turned first-time customers into loyal clients and loyal clients into brand ambassadors.
            </p>
            <p className="text-pt-muted text-sm leading-relaxed">
              Today, our fleet spans sedans to Tempo Travellers, our service list covers airport transfers to full Himalayan tours, and our team is always one WhatsApp away — 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="What We Stand For" title="Our Values" subtitle="The principles that guide every trip, every decision, every interaction." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ num, title, desc }, i) => (
              <div key={num} className={`reveal reveal-delay-${i % 3 + 1} card-base p-6`}>
                <div className="font-display text-4xl text-pt-gold/20 leading-none mb-3">{num}</div>
                <h3 className="font-display text-lg text-pt-deep mb-2">{title}</h3>
                <p className="text-pt-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 px-4 bg-pt-cream">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Our Journey" title="How We Grew" align="left" />
          </div>
          <div className="relative">
            <div className="absolute left-[17px] top-3 bottom-3 w-px bg-pt-gold/15" />
            <div className="flex flex-col gap-6">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className={`reveal reveal-delay-${Math.min(i + 1, 3)} flex gap-5`}>
                  <div className="relative z-10 w-9 h-9 min-w-9 rounded-full bg-pt-deep border-2 border-pt-gold flex items-center justify-center">
                    <span className="text-pt-gold text-[8px] font-bold leading-none">{year.slice(2)}</span>
                  </div>
                  <div className="bg-white border border-black/[0.07] rounded-xl p-4 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-pt-gold text-xs font-medium">{year}</span>
                    </div>
                    <h4 className="text-pt-deep text-sm font-medium mb-1">{title}</h4>
                    <p className="text-pt-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 px-4 bg-pt-deep">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <SectionHeader eyebrow="Trust Us Because" title="Why Clients Keep Coming Back" light />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Police-verified, experienced drivers',
              'Real-time flight & train tracking for pickups',
              'Zero hidden charges — ever',
              '24/7 support via call and WhatsApp',
              'GST registered and legally compliant',
              'AC vehicles, well-maintained and cleaned',
              'Personalised itineraries at any budget',
              'Dedicated manager for group & corporate trips',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/60 text-sm">
                <CheckCircle2 size={15} className="text-pt-gold shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Let's Plan Your Next Adventure" subtitle="Our team is ready to craft a personalised travel plan just for you — free consultation, no obligation." ctaLabel="Talk to Us Today" />
    </>
  );
}
