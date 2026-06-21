import { useScrollReveal } from '../hooks/useScrollReveal';
import { Scale, FileText, Calendar, Mail, CheckCircle2, XCircle, Phone, MapPin } from 'lucide-react';

const sections = [
  { id: 'general', title: '1. General Terms' },
  { id: 'financial', title: '2. Financial Transactions & Service Policies' },
  { id: 'inclusions', title: '3. Package Inclusions & Exclusions' },
  { id: 'usage', title: '4. Website Usage' },
  { id: 'privacy', title: '5. Privacy' },
  { id: 'modifications', title: '6. Modifications to Terms' },
  { id: 'contact', title: '7. Contact' },
];

export default function TermsOfService() {
  useScrollReveal();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pt-gold/15 border border-pt-gold/30 rounded-full px-4 py-1.5 text-pt-gold-light text-xs tracking-wider uppercase mb-4">
            <Scale size={12} className="text-pt-gold" /> Terms of Use
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-sans flex items-center justify-center gap-1.5">
            <Calendar size={13} className="text-pt-gold" /> Last Updated: June 21, 2026
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 bg-pt-cream min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-white border border-black/[0.06] rounded-2xl p-5 shadow-sm">
                <h2 className="text-pt-deep font-display text-base font-bold mb-4 pb-2 border-b border-black/[0.06] flex items-center gap-2">
                  <FileText size={16} className="text-pt-gold" /> Contents
                </h2>
                <nav className="flex flex-col gap-2.5">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="text-xs text-pt-muted hover:text-pt-gold transition-colors duration-150 py-0.5 block leading-normal hover:translate-x-0.5 transform transition-transform"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-black/[0.06] rounded-3xl p-6 md:p-10 shadow-sm reveal">
                <div className="prose prose-sm max-w-none text-pt-deep/80 font-sans space-y-8">
                  
                  {/* Intro */}
                  <div className="pb-6 border-b border-black/[0.06] text-pt-muted text-xs md:text-sm leading-relaxed">
                    Welcome to the website of Priyansu Tours & Travels. By accessing, browsing, or using our website and services, you agree to comply with and be bound by the following Terms and Conditions.
                  </div>

                  {/* 1. General Terms */}
                  <section id="general" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">1.</span> General Terms
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'All tour packages, travel bookings, transportation arrangements, enquiries, reservations, and related services are subject to availability and confirmation by Priyansu Tours & Travels and/or the respective service providers.',
                        'Customers are responsible for providing accurate, complete, and up-to-date information while making enquiries, bookings, or submitting requests through the website.',
                        'Priyansu Tours & Travels reserves the right to modify, update, suspend, withdraw, discontinue, or revise any service, itinerary, pricing, promotional offer, or policy without prior notice.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-pt-cream/35 p-3 rounded-xl border border-black/[0.01]">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 2. Financial Transactions and Service Policies */}
                  <section id="financial" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">2.</span> Financial Transactions & Service Policies
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Any financial transaction, payment-related enquiry, refund request, cancellation, rescheduling, adjustment, dispute resolution, or service-related matter shall be subject to:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'The policies, terms, and operational guidelines of Priyansu Tours & Travels',
                        'Rules, regulations, charges, and conditions imposed by hotels, transport operators, airlines, railways, tour operators, activity providers, or other third-party service providers involved in the booking',
                        'Applicable government laws, notifications, taxes, travel advisories, permits, or future legal implementations',
                        'Weather conditions, natural disasters, landslides, floods, earthquakes, road closures, transportation disruptions, strikes, political disturbances, public health emergencies, or other unforeseen events beyond reasonable control',
                        'Restrictions or directives issued by local authorities, tourism departments, law enforcement agencies, or regulatory bodies',
                        'Technical failures, banking delays, payment gateway processing issues, communication failures, or any direct or indirect operational factors affecting service delivery'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-pt-cream/40 p-2.5 rounded-lg border border-black/[0.02]">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50/50 border border-amber-200/50 text-amber-900/80 rounded-xl p-4 text-xs md:text-sm leading-relaxed mt-4">
                      <strong>Liability Notice:</strong> Priyansu Tours & Travels shall not be held liable for delays, interruptions, modifications, additional expenses, losses, cancellations, or inconveniences arising due to such external, unavoidable, or force majeure circumstances.
                    </div>
                  </section>

                  {/* 3. Package Inclusions and Exclusions */}
                  <section id="inclusions" className="scroll-mt-24 space-y-4">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">3.</span> Package Inclusions and Exclusions
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Unless specifically stated otherwise in the confirmed itinerary, quotation, or booking confirmation issued by Priyansu Tours & Travels, the following inclusions and exclusions shall apply to transportation and tour packages:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {/* Inclusions */}
                      <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-5">
                        <h4 className="font-display text-emerald-950 font-bold text-sm mb-3 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-600" /> Inclusions
                        </h4>
                        <ul className="space-y-2 text-xs text-emerald-950/80 list-none pl-0">
                          {[
                            'All transfers and sightseeing by private vehicle as per the confirmed itinerary',
                            'Driver allowance',
                            'Fuel charges',
                            'Toll taxes and parking charges',
                            'Pickup from NJP Railway Station and drop at Siliguri Junction Railway Station',
                            'All applicable parking and toll charges related to the confirmed itinerary'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exclusions */}
                      <div className="bg-rose-50/30 border border-rose-100 rounded-2xl p-5">
                        <h4 className="font-display text-rose-950 font-bold text-sm mb-3 flex items-center gap-2">
                          <XCircle size={16} className="text-rose-600" /> Exclusions
                        </h4>
                        <ul className="space-y-2 text-xs text-rose-950/85 list-none pl-0">
                          {[
                            'Accommodation charges',
                            'Airfare and train tickets',
                            'Nathula Pass permit charges',
                            'Toy Train Joy Ride tickets',
                            'Ropeway tickets',
                            'Entry fees to monuments, attractions, parks, and sightseeing locations',
                            'Guide charges and camera fees',
                            'Personal expenses such as laundry, telephone calls, beverages, shopping, porterage, tips, and similar incidental expenses',
                            'Travel insurance',
                            'Any service, activity, charge, or expense not specifically mentioned under the "Inclusions" section'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-[11px] md:text-xs text-pt-muted italic mt-3 leading-relaxed">
                      Priyansu Tours & Travels reserves the right to revise package costs in the event of any change in government taxes, permit charges, fuel prices, or other unavoidable operational expenses. Any additional services requested by the customer during the tour shall be chargeable separately.
                    </p>
                  </section>

                  {/* 4. Website Usage */}
                  <section id="usage" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">4.</span> Website Usage
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'Users shall not misuse the website or attempt to gain unauthorized access to its systems, data, or services.',
                        'Any unlawful activity, fraudulent booking, submission of false information, unauthorized use of content, or misuse of services may result in refusal of service and legal action, where applicable.',
                        'Users agree to use the website solely for lawful purposes related to obtaining information, making enquiries, or availing legitimate travel services.'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 5. Privacy */}
                  <section id="privacy" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">5.</span> Privacy
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Any personal information collected through this website shall be processed and handled in accordance with the Privacy Policy of Priyansu Tours & Travels. By using the website, users consent to such collection and use of information as described in the Privacy Policy.
                    </p>
                  </section>

                  {/* 6. Modifications to Terms */}
                  <section id="modifications" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">6.</span> Modifications to Terms
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Priyansu Tours & Travels reserves the right to amend, revise, or update these Terms and Conditions at any time without prior notice. Continued use of the website and services following any such modifications shall constitute acceptance of the revised Terms and Conditions.
                    </p>
                  </section>

                  {/* 7. Contact */}
                  <section id="contact" className="scroll-mt-24 space-y-4">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">7.</span> Contact
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      For any questions, concerns, or clarifications regarding these Terms and Conditions, users may contact Priyansu Tours & Travels through the official contact details provided on the website.
                    </p>
                    <div className="bg-pt-cream border border-black/[0.05] rounded-2xl p-5 md:p-6 space-y-3.5 max-w-md">
                      <div className="font-display text-pt-deep font-bold text-sm">
                        Priyansu Tours & Travels
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-3 text-xs text-pt-slate">
                          <MapPin size={14} className="text-pt-gold shrink-0" />
                          <span>Gangtok, Sikkim, India</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-pt-slate">
                          <Phone size={14} className="text-pt-gold shrink-0" />
                          <a href="tel:+919647884504" className="hover:text-pt-gold transition-colors">+91 96478 84504</a>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-pt-slate">
                          <Mail size={14} className="text-pt-gold shrink-0" />
                          <a href="mailto:priyansutourtavels@gmail.com" className="hover:text-pt-gold transition-colors">priyansutourtavels@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
