import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Train,
  Car,
  Instagram
} from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

export const ContactSection: React.FC = () => {
  const hasPhone = Boolean(CLIENT_CONTENT.contact.phone);
  const hasWhatsApp = Boolean(CLIENT_CONTENT.contact.whatsappNumber);
  const hasEmail = Boolean(CLIENT_CONTENT.contact.email);
  const consultationHours = CLIENT_CONTENT.contact.consultationHours;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F7F8F8] dark:bg-[#131E24] border-t border-[#DDE4E6] dark:border-[#263842] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#115572] dark:text-[#2A88B0] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Location & Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5]">
            Contact & Hospital Location
          </h2>
          <p className="mt-3 text-base text-[#68757A] dark:text-[#96A5AB]">
            {CLIENT_CONTENT.hospital.fullName} is situated in Kharghar, Navi Mumbai, easily accessible across the suburban rail and highway networks.
          </p>
        </div>

        {/* Grid: Contact Information & Interactive Map */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info Cards on Surface */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <FadeIn delay={0.05}>
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wide">
                    Hospital Location
                  </span>
                  <p className="text-sm font-semibold text-[#20282C] dark:text-[#EDF3F5] mt-0.5">
                    {CLIENT_CONTENT.hospital.fullName}
                  </p>
                  <p className="text-xs text-[#68757A] dark:text-[#96A5AB] mt-1 leading-relaxed">
                    {CLIENT_CONTENT.location.displayAddress}
                  </p>
                  <div className="mt-3.5">
                    <a
                      href={CLIENT_CONTENT.location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#115572] dark:text-[#2A88B0] hover:text-[#0B3A4F] dark:hover:text-[#44A6D1] focus:outline-hidden focus-visible:underline"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                      <span>Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#68757A] dark:text-[#96A5AB]" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Email Card */}
            {hasEmail && CLIENT_CONTENT.contact.email && (
              <FadeIn delay={0.1}>
                <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wide">
                      Official Clinic Email
                    </span>
                    <p className="text-sm font-semibold text-[#20282C] dark:text-[#EDF3F5] mt-0.5">
                      <a href={`mailto:${CLIENT_CONTENT.contact.email}`} className="hover:text-[#115572] dark:hover:text-[#2A88B0] hover:underline">
                        {CLIENT_CONTENT.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-[#68757A] dark:text-[#96A5AB] mt-0.5">
                      Consultation inquiries and appointment coordination
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Phone Card (Only if verified) */}
            {hasPhone && CLIENT_CONTENT.contact.phone && (
              <FadeIn delay={0.15}>
                <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wide">
                      Telephone Helpline
                    </span>
                    <p className="text-sm font-semibold text-[#20282C] dark:text-[#EDF3F5] mt-0.5">
                      <a href={`tel:${CLIENT_CONTENT.contact.phone}`} className="hover:text-[#115572] dark:hover:text-[#2A88B0] hover:underline">
                        {CLIENT_CONTENT.contact.displayPhone}
                      </a>
                    </p>
                    <p className="text-xs text-[#68757A] dark:text-[#96A5AB] mt-0.5">
                      Consultation token desk
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* WhatsApp Card (Only if verified) */}
            {hasWhatsApp && CLIENT_CONTENT.contact.whatsappNumber && (
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#115572]/10 dark:bg-[#2A88B0]/20 border border-[#115572]/20 dark:border-[#2A88B0]/30 text-[#115572] dark:text-[#2A88B0] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wide">
                      WhatsApp Inquiries
                    </span>
                    <p className="text-xs text-[#68757A] dark:text-[#96A5AB] mt-1 leading-relaxed">
                      Direct WhatsApp messaging for OPD queries and coordination.
                    </p>
                    <a
                      href={`https://wa.me/${CLIENT_CONTENT.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#115572] dark:text-[#2A88B0] hover:underline"
                    >
                      <span>Message on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Official Instagram Card */}
            <FadeIn delay={0.22}>
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EF3236]/10 border border-[#EF3236]/20 text-[#EF3236] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#EF3236]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#EF3236] uppercase tracking-wide">
                    Instagram Social Channel
                  </span>
                  <p className="text-sm font-semibold text-[#20282C] dark:text-[#EDF3F5] mt-0.5">
                    <a
                      href={CLIENT_CONTENT.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EF3236] hover:underline"
                    >
                      {CLIENT_CONTENT.contact.instagramHandle}
                    </a>
                  </p>
                  <p className="text-xs text-[#68757A] dark:text-[#96A5AB] mt-1 leading-relaxed">
                    Official announcements, OPD clinic schedule notices, and patient health awareness.
                  </p>
                  <a
                    href={CLIENT_CONTENT.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#EF3236] hover:underline"
                  >
                    <span>Follow @vamc_hospital</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Consulting Hours */}
            {consultationHours && (
              <FadeIn delay={0.25}>
                <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                  </div>
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wide">
                      Outpatient OPD Hours
                    </span>
                    <div className="mt-1.5 space-y-1 text-[#20282C] dark:text-[#EDF3F5]">
                      <p><span className="font-medium text-[#68757A] dark:text-[#96A5AB]">Morning Slot:</span> {consultationHours.weekdayMorning}</p>
                      <p><span className="font-medium text-[#68757A] dark:text-[#96A5AB]">Evening Slot:</span> {consultationHours.weekdayEvening}</p>
                      {consultationHours.sunday && (
                        <p className="text-[#68757A] dark:text-[#96A5AB] text-[11px] pt-1.5 border-t border-[#DDE4E6] dark:border-[#263842]">
                          {consultationHours.sunday}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right Column: Transit & Kharghar Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <FadeIn delay={0.1}>
              {/* Transit Guide */}
              <div className="bg-[#FFFFFF] dark:bg-[#18252C] p-6 sm:p-7 rounded-2xl border border-[#DDE4E6] dark:border-[#263842] mb-6 shadow-2xs">
                <h3 className="text-sm font-semibold text-[#20282C] dark:text-[#EDF3F5] mb-3.5 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#115572] dark:text-[#2A88B0]" />
                  Transit & Connectivity Guide
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#68757A] dark:text-[#96A5AB]">
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-[#115572] dark:text-[#2A88B0] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#20282C] dark:text-[#EDF3F5] block font-medium">Suburban Railway:</strong>
                      Kharghar Railway Station (Harbour Line). Local auto-rickshaws and feeder transit connect to central Kharghar.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-[#115572] dark:text-[#2A88B0] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#20282C] dark:text-[#EDF3F5] block font-medium">Highway Connectivity:</strong>
                      Accessible via the Sion-Panvel Expressway, with straightforward routes leading through Kharghar.
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Kharghar Navi Mumbai Map */}
              <div className="relative rounded-2xl overflow-hidden border border-[#DDE4E6] dark:border-[#263842] shadow-2xs h-[320px] sm:h-[360px] bg-[#FFFFFF] dark:bg-[#18252C] flex-1">
                <iframe
                  title="VAMC Hospital Kharghar Location Map"
                  src="https://maps.google.com/maps?q=Kharghar%2C%20Navi%20Mumbai%20410210&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-xs py-1.5 px-3 rounded-md shadow-2xs border border-[#DDE4E6] dark:border-[#263842] text-xs text-[#115572] dark:text-[#2A88B0] font-bold flex items-center gap-2 pointer-events-none">
                  <VAMCLogo className="w-4 h-4" />
                  <span>{CLIENT_CONTENT.hospital.fullName}, Kharghar</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
