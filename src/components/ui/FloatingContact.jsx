import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919641135045?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20with%20Priyansu%20Tours%20%26%20Travels"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative group whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
        {/* Tooltip */}
        <span className="hidden md:block absolute right-[72px] top-1/2 -translate-y-1/2 bg-pt-deep text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10 shadow-xl font-sans tracking-wide">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917364063680"
        className="w-14 h-14 bg-pt-gold hover:bg-pt-gold-light text-pt-deep rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative group call-pulse"
        aria-label="Call Now"
      >
        <Phone size={24} className="text-pt-deep" />
        {/* Tooltip */}
        <span className="hidden md:block absolute right-[72px] top-1/2 -translate-y-1/2 bg-pt-deep text-pt-gold text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-pt-gold/20 shadow-xl font-sans tracking-wide">
          Call +91 73640 63680
        </span>
      </a>
    </div>
  );
}
