import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

/**
 * Sticky bottom bar visible only on mobile.
 * Dramatically improves mobile booking conversion rate.
 */
export default function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-pt-deep border-t border-pt-gold/20 px-4 py-3 flex gap-3">
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20with%20Priyansu%20Travels"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-2.5 rounded-lg"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex-1 flex items-center justify-center gap-2 bg-pt-gold text-pt-deep text-sm font-medium py-2.5 rounded-lg"
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
}
