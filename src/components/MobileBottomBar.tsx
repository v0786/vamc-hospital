import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation, Instagram } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';

interface MobileBottomBarProps {
  onOpenAppointment: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAppointment }) => {
  const hasPhone = Boolean(CLIENT_CONTENT.contact.phone);
  const hasWhatsApp = Boolean(CLIENT_CONTENT.contact.whatsappNumber);

  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFFFFF]/98 backdrop-blur-md border-t border-[#DDE4E6] shadow-sm px-3 py-2"
    >
      <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
        {hasPhone && (
          <a
            href={`tel:${CLIENT_CONTENT.contact.phone}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#F7F8F8] text-[#20282C] border border-[#DDE4E6] hover:bg-[#DDE4E6]/50 transition-colors active:scale-95 text-center"
            aria-label="Call VAMC Hospital"
          >
            <Phone className="w-3.5 h-3.5 text-[#115572] mb-0.5" />
            <span className="text-[11px] font-semibold whitespace-nowrap">Call</span>
          </a>
        )}

        {hasWhatsApp && (
          <a
            href={`https://wa.me/${CLIENT_CONTENT.contact.whatsappNumber}?text=Hello%20VAMC%20Hospital,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#115572]/10 text-[#115572] border border-[#115572]/20 hover:bg-[#115572]/20 transition-colors active:scale-95 text-center"
            aria-label="Chat with VAMC Hospital on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#115572] mb-0.5" />
            <span className="text-[11px] font-semibold whitespace-nowrap">WhatsApp</span>
          </a>
        )}

        {!hasPhone && !hasWhatsApp && (
          <a
            href={CLIENT_CONTENT.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#EF3236]/10 text-[#EF3236] border border-[#EF3236]/20 hover:bg-[#EF3236]/20 transition-colors active:scale-95 text-center"
            aria-label="VAMC Hospital on Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-[#EF3236] mb-0.5" />
            <span className="text-[11px] font-semibold whitespace-nowrap">Instagram</span>
          </a>
        )}

        <a
          href={CLIENT_CONTENT.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#F7F8F8] text-[#20282C] border border-[#DDE4E6] hover:bg-[#DDE4E6]/50 transition-colors active:scale-95 text-center"
          aria-label="Directions to VAMC Hospital"
        >
          <Navigation className="w-3.5 h-3.5 text-[#115572] mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">Directions</span>
        </a>

        <button
          type="button"
          onClick={onOpenAppointment}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#EF3236] text-[#FFFFFF] hover:bg-[#D7262A] transition-colors shadow-2xs active:scale-95 text-center cursor-pointer"
          aria-label="Book a consultation appointment"
        >
          <Calendar className="w-3.5 h-3.5 mb-0.5" />
          <span className="text-[11px] font-semibold whitespace-nowrap">Book Slot</span>
        </button>
      </div>
    </aside>
  );
};
