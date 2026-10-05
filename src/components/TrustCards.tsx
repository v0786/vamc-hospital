import React from 'react';
import { Building2, MapPin, User, Clock } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';

interface TrustCardsProps {
  onOpenAppointment: () => void;
}

export const TrustCards: React.FC<TrustCardsProps> = ({ onOpenAppointment }) => {
  const cards = [
    {
      icon: Building2,
      label: 'Institution',
      title: CLIENT_CONTENT.hospital.fullName,
      detail: `Value Added Medical Care & outpatient consultations in Kharghar`,
      actionText: 'About VAMC',
      actionHref: '#about',
    },
    {
      icon: User,
      label: 'Consulting Physician',
      title: CLIENT_CONTENT.doctor.name,
      detail: `${CLIENT_CONTENT.doctor.title} at ${CLIENT_CONTENT.hospital.shortName}`,
      actionText: 'Doctor Profile',
      actionHref: '#doctor',
    },
    {
      icon: MapPin,
      label: 'Location',
      title: `${CLIENT_CONTENT.location.area}, ${CLIENT_CONTENT.location.city}`,
      detail: `Convenient connectivity across Navi Mumbai corridor`,
      actionText: 'Hospital Location',
      actionHref: '#contact',
    },
    {
      icon: Clock,
      label: 'Consultation Hours',
      title: 'Morning & Evening OPD',
      detail: CLIENT_CONTENT.contact.consultationHours?.weekdayMorning
        ? `${CLIENT_CONTENT.contact.consultationHours.weekdayMorning} · ${CLIENT_CONTENT.contact.consultationHours.weekdayEvening}`
        : 'Monday to Saturday Outpatient Hours',
      actionText: 'Request Slot',
      onClick: onOpenAppointment,
    },
  ];

  return (
    <section className="py-10 bg-[#FFFFFF] border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-[#F7F8F8] p-6 rounded-xl border border-[#DDE4E6] hover:border-[#115572] hover:bg-[#FFFFFF] transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#68757A] mb-2.5">
                      <Icon className="w-4 h-4 text-[#115572]" />
                      <span className="font-semibold tracking-wider uppercase text-[11px] text-[#115572]">{card.label}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#20282C] leading-snug group-hover:text-[#115572] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#68757A] leading-relaxed">
                      {card.detail}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#DDE4E6] flex items-center justify-between text-xs">
                    {card.onClick ? (
                      <button
                        type="button"
                        onClick={card.onClick}
                        className="font-semibold text-[#EF3236] hover:text-[#D7262A] inline-flex items-center gap-1 focus:outline-hidden focus-visible:underline cursor-pointer"
                      >
                        {card.actionText} →
                      </button>
                    ) : (
                      <a
                        href={card.actionHref}
                        className="font-semibold text-[#115572] hover:text-[#0B3A4F] inline-flex items-center gap-1 focus:outline-hidden focus-visible:underline"
                      >
                        {card.actionText} →
                      </a>
                    )}
                    <span className="text-[11px] text-[#68757A] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#115572]" />
                      Verified
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
