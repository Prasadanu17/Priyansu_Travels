import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, Lock, Eye, Calendar, Mail, FileText, Phone, MapPin } from 'lucide-react';

const sections = [
  { id: 'collect', title: '1. Information We Collect' },
  { id: 'use', title: '2. How We Use Your Information' },
  { id: 'sharing', title: '3. Sharing of Information' },
  { id: 'security', title: '4. Data Security' },
  { id: 'cookies', title: '5. Cookies and Website Analytics' },
  { id: 'retention', title: '6. Retention of Information' },
  { id: 'third-party', title: '7. Third-Party Links' },
  { id: 'rights', title: '8. Your Rights' },
  { id: 'children', title: '9. Children\'s Privacy' },
  { id: 'changes', title: '10. Changes to this Privacy Policy' },
  { id: 'contact', title: '11. Contact Us' },
];

export default function PrivacyPolicy() {
  useScrollReveal();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pt-gold/15 border border-pt-gold/30 rounded-full px-4 py-1.5 text-pt-gold-light text-xs tracking-wider uppercase mb-4">
            <Shield size={12} className="text-pt-gold" /> Trust & Transparency
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
            Privacy Policy
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
                    At Priyansu Tours & Travels (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), located in Gangtok, Sikkim, we value the trust you place in us and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website, make enquiries, book accommodations, reserve tour packages, transportation services, or use any of our services.
                  </div>

                  {/* 1. Information We Collect */}
                  <section id="collect" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">1.</span> Information We Collect
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      We may collect the following information from you:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'Full Name',
                        'Email Address',
                        'Mobile/Contact Number',
                        'Residential Address (if required for bookings)',
                        'Identification details required under applicable laws and regulations',
                        'Travel preferences and itinerary details',
                        'Information submitted through enquiry forms, WhatsApp, email, or telephone conversations',
                        'Technical information such as IP address, browser type, device information, and pages visited on our website'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-pt-cream/40 p-2.5 rounded-lg border border-black/[0.02]">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 2. How We Use Your Information */}
                  <section id="use" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">2.</span> How We Use Your Information
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      The information collected may be used to:
                    </p>
                    <ul className="space-y-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'Process and confirm hotel reservations, transportation arrangements, and tour bookings',
                        'Respond to your enquiries and provide customer support',
                        'Communicate booking confirmations, updates, and important notices',
                        'Arrange transportation, permits, sightseeing, and other travel-related services requested by you',
                        'Improve our website, services, and customer experience',
                        'Comply with legal obligations and government requirements',
                        'Prevent fraudulent activities and ensure the security of our services'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 3. Sharing of Information */}
                  <section id="sharing" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">3.</span> Sharing of Information
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      We respect your privacy and do not sell, rent, trade, or disclose your personal information to any unrelated third party for marketing purposes.
                    </p>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Your information may be shared only in the following circumstances:
                    </p>
                    <ul className="space-y-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'With hotels, transport providers, permit authorities, and service partners strictly for fulfilling your confirmed booking requirements',
                        'When required by applicable laws, regulations, court orders, or government authorities',
                        'To protect our legal rights, safety, property, or the interests of our customers'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] md:text-xs text-pt-muted/80 italic mt-2">
                      All such disclosures shall be limited to the extent necessary for providing the requested services.
                    </p>
                  </section>

                  {/* 4. Data Security */}
                  <section id="security" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">4.</span> Data Security
                    </h3>
                    <div className="bg-pt-cream/40 p-4 rounded-xl border border-pt-gold/20 flex gap-3 items-start">
                      <Lock className="text-pt-gold shrink-0 mt-0.5" size={18} />
                      <div className="space-y-2">
                        <p className="text-xs md:text-sm text-pt-deep font-medium">
                          Protecting Your Information
                        </p>
                        <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                          We implement reasonable administrative, technical, and organizational measures to safeguard your personal information against unauthorized access, misuse, disclosure, alteration, or destruction.
                        </p>
                        <p className="text-[11px] md:text-xs text-pt-muted/85 leading-relaxed">
                          However, while we strive to protect your data, no method of internet transmission or electronic storage can be guaranteed to be completely secure.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* 5. Cookies and Website Analytics */}
                  <section id="cookies" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">5.</span> Cookies and Website Analytics
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Our website may use cookies and similar technologies to improve functionality, understand visitor preferences, and analyse website traffic.
                    </p>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      You may choose to disable cookies through your browser settings; however, certain features of the website may not function properly as a result.
                    </p>
                  </section>

                  {/* 6. Retention of Information */}
                  <section id="retention" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">6.</span> Retention of Information
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Personal information shall be retained only for as long as necessary to:
                    </p>
                    <ul className="space-y-1.5 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'Fulfil the purposes outlined in this Privacy Policy',
                        'Complete bookings and customer support activities',
                        'Meet legal, regulatory, accounting, or reporting requirements'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed mt-2">
                      Once no longer required, the information may be securely deleted or anonymised.
                    </p>
                  </section>

                  {/* 7. Third-Party Links */}
                  <section id="third-party" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">7.</span> Third-Party Links
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Our website may contain links to third-party websites, booking platforms, or payment service providers. We are not responsible for the privacy practices, policies, or content of such external websites. Users are encouraged to review their respective privacy policies before sharing personal information.
                    </p>
                  </section>

                  {/* 8. Your Rights */}
                  <section id="rights" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">8.</span> Your Rights
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Subject to applicable laws, you may request to:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-pt-slate list-none pl-0">
                      {[
                        'Access the personal information we hold about you',
                        'Correct or update inaccurate information',
                        'Withdraw consent where applicable',
                        'Request deletion of your information, unless retention is required by law'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 bg-pt-cream/40 p-2.5 rounded-lg border border-black/[0.02]">
                          <span className="w-1.5 h-1.5 rounded-full bg-pt-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed mt-2">
                      Requests may be submitted through the contact details provided below.
                    </p>
                  </section>

                  {/* 9. Children's Privacy */}
                  <section id="children" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">9.</span> Children&rsquo;s Privacy
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      Our services are not directed toward individuals under the age of 18 without the involvement of a parent or legal guardian. We do not knowingly collect personal information from minors independently.
                    </p>
                  </section>

                  {/* 10. Changes to this Privacy Policy */}
                  <section id="changes" className="scroll-mt-24 space-y-3">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">10.</span> Changes to this Privacy Policy
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      We reserve the right to modify or update this Privacy Policy at any time. Any revisions will be posted on this page along with the updated effective date. Continued use of our website and services after such updates shall constitute acceptance of the revised Privacy Policy.
                    </p>
                  </section>

                  {/* 11. Contact Us */}
                  <section id="contact" className="scroll-mt-24 space-y-4">
                    <h3 className="text-base md:text-lg font-display text-pt-deep font-bold flex items-center gap-2 border-b border-black/[0.03] pb-2">
                      <span className="text-pt-gold">11.</span> Contact Us
                    </h3>
                    <p className="text-xs md:text-sm text-pt-muted leading-relaxed">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:
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
