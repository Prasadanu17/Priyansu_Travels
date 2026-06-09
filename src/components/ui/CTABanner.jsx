import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  title = "Ready to Plan Your Perfect Trip?",
  subtitle = "Talk to our travel experts today and get a personalised itinerary within 24 hours — absolutely free.",
  ctaLabel = "Get Free Quote",
  ctaTo = "/contact",
}) {
  return (
    <section className="bg-gradient-to-br from-pt-gold to-pt-gold-dark py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-3xl text-pt-deep mb-3">{title}</h2>
        <p className="text-pt-deep/70 text-sm mb-7 leading-relaxed">{subtitle}</p>
        <Link to={ctaTo} className="btn-dark inline-flex items-center gap-2 text-sm px-7 py-3">
          {ctaLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
