import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';


const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

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
  { icon: Phone,   label: 'Call Us',           value: '+91 73640 63680',           href: 'tel:+917364063680' },
  { icon: MessageCircle, label: 'WhatsApp',      value: '+91 96411 35045',           href: 'https://wa.me/919641135045' },
  { icon: Mail,    label: 'Email',             value: 'priyansutourtavels@gmail.com', href: 'mailto:priyansutourtavels@gmail.com' },
  { icon: MapPin,  label: 'Office Address',    value: 'Tibet Road, Near Nayuma Television Office, Gangtok, Sikkim (Regd. No. 1624/DoT&CAV/E/24/TA)', href: null },
  { icon: Clock,   label: 'Business Hours',    value: 'Mon–Sun: 6:00 AM – 10:00 PM', href: null },
];

const initialForm = {
  name: '', phone: '', email: '', service: [],
  travelDate: '', passengers: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const dropdownRef = useRef(null);

  useScrollReveal();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const e = {};
    
    // Name validation
    const trimmedName = form.name.trim();
    if (!trimmedName) {
      e.name = 'Name is required';
    } else if (trimmedName.length < 2) {
      e.name = 'Name must be at least 2 characters';
    } else if (trimmedName.length > 50) {
      e.name = 'Name cannot exceed 50 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      e.name = 'Name must contain only letters, spaces, hyphens, or apostrophes';
    }

    // Phone validation
    const trimmedPhone = form.phone.trim();
    if (!trimmedPhone) {
      e.phone = 'Phone number is required';
    } else {
      const digitsOnly = trimmedPhone.replace(/[\s\-+]/g, '');
      if (!/^\+?[\d\s-]{10,15}$/.test(trimmedPhone) || digitsOnly.length < 10) {
        e.phone = 'Enter a valid phone number (at least 10 digits)';
      }
    }

    // Email validation (optional)
    if (form.email) {
      const trimmedEmail = form.email.trim();
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
        e.email = 'Enter a valid email address';
      }
    }

    // Service validation (multiple selection)
    if (!form.service || form.service.length === 0) {
      e.service = 'Please select at least one service';
    }

    // Travel Date validation (optional)
    if (form.travelDate) {
      const selectedDate = new Date(form.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // set to beginning of today
      if (selectedDate < today) {
        e.travelDate = 'Travel date cannot be in the past';
      }
    }

    // Passengers validation (optional)
    if (form.passengers) {
      const p = parseInt(form.passengers, 10);
      if (isNaN(p) || p <= 0) {
        e.passengers = 'Number of passengers must be at least 1';
      } else if (p > 100) {
        e.passengers = 'For groups larger than 100, please contact us directly';
      }
    }

    // Message validation (optional)
    if (form.message && form.message.length > 2000) {
      e.message = 'Message cannot exceed 2000 characters';
    }

    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const toggleService = (s) => {
    setForm((prev) => {
      const current = Array.isArray(prev.service) ? prev.service : [];
      const updated = current.includes(s) ? current.filter((item) => item !== s) : [...current, s];
      return { ...prev, service: updated };
    });
    if (errors.service) setErrors((prev) => ({ ...prev, service: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }

    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('access_key',   WEB3FORMS_KEY);
      formData.append('subject',      `New Enquiry from ${form.name} — ${Array.isArray(form.service) ? form.service.join(', ') : form.service}`);
      formData.append('redirect',     'false');
      formData.append('botcheck',     '');
      Object.entries(form).forEach(([k, v]) => {
        if (k === 'service') {
          formData.append(k, Array.isArray(v) ? v.join(', ') : v);
        } else {
          formData.append(k, v);
        }
      });

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
              href="https://wa.me/919641135045?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20with%20Priyansu%20Tours%20%26%20Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-3 px-5 rounded-xl w-full hover:bg-[#1ebe5a] transition-colors mb-5"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp — Fastest Response
            </a>

            {/* Map Embed */}
            <div className="rounded-2xl h-56 overflow-hidden border border-black/[0.07] shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Tibet%20Road%2C%20Near%20Nayuma%20Television%20Office%2C%20Gangtok%2C%20Sikkim&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Priyansu Tours & Travels Office Location"
                className="w-full h-full"
              ></iframe>
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
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" className={`input-field ${errors.phone ? 'border-red-400' : ''}`} placeholder="+91 96411 35045" />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="label-text">Email (optional)</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className={`input-field ${errors.email ? 'border-red-400' : ''}`} placeholder="rahul@example.com" />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>

                <div ref={dropdownRef} className="relative">
                  <label className="label-text">Service Required *</label>
                  <div
                    className={`input-field flex items-center justify-between cursor-pointer ${errors.service ? 'border-red-400' : ''}`}
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                  >
                    <span className={form.service.length > 0 ? 'text-pt-deep' : 'text-pt-muted/60'} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '8px' }}>
                      {form.service.length > 0 ? form.service.join(', ') : 'Select services...'}
                    </span>
                    <ChevronDown size={16} className={`text-pt-muted transition-transform ${isServiceOpen ? 'rotate-180' : ''} shrink-0`} />
                  </div>
                  {isServiceOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-white border border-black/10 rounded-lg shadow-xl max-h-60 overflow-y-auto p-2 top-full left-0">
                      {serviceOptions.map((s) => (
                        <label key={s} className="flex items-center gap-3 p-2 hover:bg-pt-cream rounded-md cursor-pointer text-sm text-pt-deep transition-colors">
                          <input
                            type="checkbox"
                            checked={Array.isArray(form.service) && form.service.includes(s)}
                            onChange={() => toggleService(s)}
                            className="w-4 h-4 text-pt-gold bg-white border-gray-300 rounded focus:ring-pt-gold focus:ring-2 accent-pt-gold cursor-pointer shrink-0"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  )}
                  {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="label-text">Travel Date</label>
                    <input name="travelDate" value={form.travelDate} onChange={handleChange} type="date" className={`input-field ${errors.travelDate ? 'border-red-400' : ''}`} />
                    {errors.travelDate && <p className="text-red-500 text-[10px] mt-1">{errors.travelDate}</p>}
                  </div>
                  <div>
                    <label className="label-text">Passengers</label>
                    <input name="passengers" value={form.passengers} onChange={handleChange} type="number" min="1" className={`input-field ${errors.passengers ? 'border-red-400' : ''}`} placeholder="2" />
                    {errors.passengers && <p className="text-red-500 text-[10px] mt-1">{errors.passengers}</p>}
                  </div>
                </div>

                <div>
                  <label className="label-text">Your Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} className={`input-field resize-none ${errors.message ? 'border-red-400' : ''}`} placeholder="Tell us your travel requirements, preferred vehicle type, special needs..." />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
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
                  <a href="https://wa.me/919641135045" target="_blank" rel="noopener noreferrer" className="text-pt-gold">WhatsApp</a>
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
