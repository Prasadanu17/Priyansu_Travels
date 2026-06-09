import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY_HERE'; // ← Replace with your key from web3forms.com

const serviceOptions = [
  'Car Rental',
  'Airport Transfer (Pickup/Drop)',
  'Tour Package',
  'Outstation Trip',
  'Group Tour',
  'Corporate Travel',
  'Hotel Booking Assistance',
  'Customised Package',
  'Other',
];

const contactDetails = [
  { icon: Phone,   label: 'Phone / WhatsApp', value: '+91 XXXXX XXXXX',           href: 'tel:+91XXXXXXXXXX' },
  { icon: Mail,    label: 'Email',             value: 'info@priyansu.in',           href: 'mailto:info@priyansu.in' },
  { icon: MapPin,  label: 'Office',            value: 'Kolkata, West Bengal',       href: null },
  { icon: Clock,   label: 'Business Hours',    value: 'Mon–Sun: 6:00 AM – 10:00 PM', href: null },
];

const initialForm = {
  name: '', phone: '', email: '', service: '',
  travelDate: '', passengers: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  useScrollReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s-]{8,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.service)        e.service = 'Please select a service';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }

    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('access_key',   WEB3FORMS_KEY);
      formData.append('subject',      `New Enquiry from ${form.name} — ${form.service}`);
      formData.append('redirect',     'false');
      formData.append('botcheck',     '');
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-pt-deep pt-24 pb-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="font-display text-5xl text-white leading-snug mb-3">
            Let's Plan Your<br /><em className="text-pt-gold italic">Perfect Trip</em>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">
            Fill the form or reach us directly — we respond within 2 hours. WhatsApp is fastest!
          </p>
        </div>
      </section>

      {/* ── SPLIT LAYOUT ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left — contact info */}
          <div className="reveal">
            <h2 className="font-display text-2xl text-pt-deep mb-2">Reach Us Directly</h2>
            <p className="text-pt-muted text-sm leading-relaxed mb-7">
              Prefer a quick chat? We are available on call and WhatsApp from 6 AM to 10 PM every day of the week.
            </p>

            <div className="flex flex-col gap-4 mb-7">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 min-w-8 bg-pt-cream rounded-lg flex items-center justify-center">
                    <Icon size={15} className="text-pt-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-pt-muted uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href} className="text-sm text-pt-deep font-medium hover:text-pt-gold transition-colors">{value}</a>
                      : <p className="text-sm text-pt-deep font-medium">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20with%20Priyansu%20Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-3 px-5 rounded-xl w-full hover:bg-[#1ebe5a] transition-colors mb-5"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp — Fastest Response
            </a>

            {/* Map placeholder */}
            <div className="bg-pt-cream rounded-2xl h-36 flex items-center justify-center border border-black/[0.07]">
              <div className="text-center">
                <MapPin size={22} className="text-pt-gold/50 mx-auto mb-1.5" />
                <p className="text-[10px] text-pt-muted uppercase tracking-wider">Google Maps Embed Here</p>
                <p className="text-[10px] text-pt-muted/70 mt-0.5">Kolkata, West Bengal</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <div className="bg-pt-cream rounded-2xl p-6">
              <h3 className="font-display text-xl text-pt-deep mb-5">Send an Enquiry</h3>

              {/* Success */}
              {status === 'success' && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-5">
                  <CheckCircle2 size={17} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 text-sm font-medium">Enquiry Sent!</p>
                    <p className="text-green-700 text-xs mt-0.5">We'll get back to you within 2 hours.</p>
                  </div>
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
                  <AlertCircle size={17} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">Something went wrong. Please try WhatsApp instead.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Hidden bot field */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="label-text">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} className={`input-field ${errors.name ? 'border-red-400' : ''}`} placeholder="Rahul Das" />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="label-text">Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" className={`input-field ${errors.phone ? 'border-red-400' : ''}`} placeholder="+91 XXXXX XXXXX" />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="label-text">Email (optional)</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className={`input-field ${errors.email ? 'border-red-400' : ''}`} placeholder="rahul@example.com" />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="label-text">Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange} className={`input-field ${errors.service ? 'border-red-400' : ''}`}>
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="label-text">Travel Date</label>
                    <input name="travelDate" value={form.travelDate} onChange={handleChange} type="date" className="input-field" />
                  </div>
                  <div>
                    <label className="label-text">Passengers</label>
                    <input name="passengers" value={form.passengers} onChange={handleChange} type="number" min="1" className="input-field" placeholder="2" />
                  </div>
                </div>

                <div>
                  <label className="label-text">Your Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="input-field resize-none" placeholder="Tell us your travel requirements, preferred vehicle type, special needs..." />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-pt-deep text-pt-gold font-medium text-sm py-3 rounded-xl hover:bg-pt-navy transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><span className="w-4 h-4 border-2 border-pt-gold/30 border-t-pt-gold rounded-full animate-spin" /> Sending...</>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>

                <p className="text-[10px] text-pt-muted text-center">
                  Or reach us instantly on{' '}
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-pt-gold">WhatsApp</a>
                  {' '}— we reply in minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
