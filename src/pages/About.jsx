import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Eye, ShieldCheck, Clock, HeartHandshake, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/ui/CTABanner';

import { stats } from '../data/testimonials';

const timeline = [
  { year: '2016', title: 'Our Beginning',     desc: 'Started with 1 vehicle and a commitment to on-time, honest service for everyday travellers.' },
  { year: '2018', title: 'Fleet Expansion',    desc: 'Grew to 10 vehicles; launched airport transfer and outstation services across the region.' },
  { year: '2020', title: 'Corporate Launch',   desc: 'Partnered with local companies for regular employee transport and MICE events.' },
  { year: '2022', title: 'Tour Packages',      desc: 'Launched curated tour packages to Sikkim, Darjeeling, Kalimpong, and Bhutan.' },
  { year: '2025', title: '500+ Happy Clients', desc: 'Surpassed 500 satisfied clients with a consistent 4.9-star average Google rating.' },
];

const values = [
  { num: '01', icon: Target, title: 'Our Mission',  desc: 'To make premium travel accessible and stress-free for every family, professional, and traveller in Eastern India.' },
  { num: '02', icon: Eye, title: 'Our Vision',   desc: 'To become the most trusted regional travel brand in Sikkim — known for safety, punctuality, and heartfelt service.' },
  { num: '03', icon: ShieldCheck, title: 'Integrity',    desc: 'We never add hidden charges, never cut corners on safety, and never overpromise. Honest service, every time.' },
  { num: '04', icon: Clock, title: 'Punctuality',  desc: 'Your time is precious. We track flights, plan routes, and arrive early — so you never miss a moment.' },
  { num: '05', icon: HeartHandshake, title: 'Customer First', desc: 'Every decision we make starts with one question: is this best for our customer? The answer shapes everything.' },
  { num: '06', icon: TrendingUp, title: 'Continuous Growth', desc: 'We reinvest in better vehicles, better training, and better technology so tomorrow\'s journey is always better than today\'s.' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-pt-deep pt-24 pb-16 px-4 relative overflow-hidden">

        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-100 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-pt-gold/15 border border-pt-gold/35 rounded-full px-4 py-1.5 text-pt-gold-light text-xs tracking-widest uppercase mb-6">
              Regd. No. 1624/DoT&CAV/E/24/TA · Gangtok, Sikkim
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
              At Priyansu Tours & Travels, we specialize in providing reliable, affordable, and hassle-free travel solutions across Sikkim and nearby destinations. Whether you are planning a family vacation, honeymoon trip, adventure tour, or business travel, our experienced team ensures a comfortable and memorable journey from start to finish.
            </p>
            <p className="text-pt-muted text-sm leading-relaxed mb-4">
              We offer customized travel packages, hotel reservations, transportation services, trekking arrangements, and ticket booking services to help travelers explore the beauty of the Eastern Himalayas with complete peace of mind.
            </p>
            <p className="text-pt-muted text-sm leading-relaxed">
              Today, our fleet spans hatchbacks, sedans, SUVs, and luxury Tempo Travellers, and our team is always one phone call or WhatsApp message away — ready to help you plan your next adventure.
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
            {values.map(({ num, icon: Icon, title, desc }, i) => (
              <div key={num} className={`reveal reveal-delay-${i % 3 + 1} group h-full`}>
                <div className="card-base p-6 hover:border-pt-gold/45 hover:shadow-[0_15px_45px_rgba(201,168,76,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pt-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <div className="flex items-center justify-between">
                    <div className="font-display text-4xl text-pt-gold/20 leading-none transition-all duration-300 group-hover:scale-105 group-hover:text-pt-gold/35">{num}</div>
                    <div className="w-10 h-10 rounded-xl bg-pt-gold/10 flex items-center justify-center text-pt-gold group-hover:bg-pt-gold group-hover:text-pt-deep transition-all duration-300">
                      <Icon size={20} className="stroke-[1.75]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg text-pt-deep mb-2.5 mt-4 group-hover:text-pt-gold transition-colors duration-300">{title}</h3>
                  <p className="text-pt-muted text-xs leading-relaxed flex-1">{desc}</p>
                </div>
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
