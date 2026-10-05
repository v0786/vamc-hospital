import React from 'react';
import { Instagram, ExternalLink, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

export const HospitalFacilities: React.FC = () => {
  return (
    <section id="facilities" className="py-20 sm:py-24 bg-[#F7F8F8] dark:bg-[#131E24] border-t border-[#DDE4E6] dark:border-[#263842] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#115572] dark:text-[#2A88B0] tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-[#115572] dark:text-[#2A88B0]" />
            <span>Clinical Environment & Facilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5]">
            Patient Care Environment at VAMC Hospital
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68757A] dark:text-[#96A5AB]">
            A quiet, organized clinical setting in Kharghar, Navi Mumbai tailored for privacy, accurate clinical examination, and uninterrupted doctor-patient discussions.
          </p>
        </div>

        {/* 3-Column Photographic Story of VAMC */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Photo 1: Hospital Entrance & Reception */}
          <FadeIn delay={0.05}>
            <div className="group rounded-2xl overflow-hidden border border-[#DDE4E6] dark:border-[#263842] bg-[#FFFFFF] dark:bg-[#18252C] flex flex-col h-full shadow-2xs hover:shadow-xs transition-shadow">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F7F8F8] dark:bg-[#111A20]">
                <img
                  src={CLIENT_CONTENT.photography.hospitalEntrance}
                  alt="VAMC Hospital Kharghar Reception & Consultation Entrance"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#DDE4E6] dark:border-[#263842] text-[11px] font-bold text-[#115572] dark:text-[#2A88B0] flex items-center gap-1.5 shadow-2xs">
                  <VAMCLogo className="w-3.5 h-4" />
                  <span>Hospital Entrance</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5]">
                    Reception & Token Registration
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] leading-relaxed">
                    Clear signage, verified OPD consultation desks, and structured queue coordination to respect patient time.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DDE4E6] dark:border-[#263842] flex items-center gap-2 text-xs font-semibold text-[#115572] dark:text-[#2A88B0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                  <span>Kharghar, Navi Mumbai</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Photo 2: Consultation Suite */}
          <FadeIn delay={0.1}>
            <div className="group rounded-2xl overflow-hidden border border-[#DDE4E6] dark:border-[#263842] bg-[#FFFFFF] dark:bg-[#18252C] flex flex-col h-full shadow-2xs hover:shadow-xs transition-shadow">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F7F8F8] dark:bg-[#111A20]">
                <img
                  src={CLIENT_CONTENT.photography.clinicalFacility}
                  alt="Clinical Consultation Room at VAMC Hospital"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#DDE4E6] dark:border-[#263842] text-[11px] font-bold text-[#115572] dark:text-[#2A88B0] flex items-center gap-1.5 shadow-2xs">
                  <VAMCLogo className="w-3.5 h-4" />
                  <span>Consultation Room</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5]">
                    Attentive Physician Chamber
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] leading-relaxed">
                    Designed for one-on-one evaluations with {CLIENT_CONTENT.doctor.name}, report explanations, and diagnosis reviews.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DDE4E6] dark:border-[#263842] flex items-center gap-2 text-xs font-semibold text-[#115572] dark:text-[#2A88B0]">
                  <Clock className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                  <span>Morning & Evening Slots</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Photo 3: Diagnostic & Patient Care Setting */}
          <FadeIn delay={0.15}>
            <div className="group rounded-2xl overflow-hidden border border-[#DDE4E6] dark:border-[#263842] bg-[#FFFFFF] dark:bg-[#18252C] flex flex-col h-full shadow-2xs hover:shadow-xs transition-shadow">
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F7F8F8] dark:bg-[#111A20]">
                <img
                  src={CLIENT_CONTENT.photography.diagnosticCare}
                  alt="Diagnostic and Patient Care Room at VAMC Hospital"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#DDE4E6] dark:border-[#263842] text-[11px] font-bold text-[#115572] dark:text-[#2A88B0] flex items-center gap-1.5 shadow-2xs">
                  <VAMCLogo className="w-3.5 h-4" />
                  <span>Care Facilities</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5]">
                    Examination & Diagnostic Review
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] leading-relaxed">
                    Hygienic examination amenities, patient privacy screens, and rational diagnostic review protocols.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DDE4E6] dark:border-[#263842] flex items-center gap-2 text-xs font-semibold text-[#115572] dark:text-[#2A88B0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                  <span>Value Added Medical Care</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Official Instagram Community Callout Card */}
        <div className="mt-12">
          <FadeIn delay={0.2}>
            <div className="rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EF3236]/10 border border-[#EF3236]/20 text-[#EF3236] flex items-center justify-center shrink-0 shadow-xs">
                  <Instagram className="w-6 h-6 text-[#EF3236]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#115572] dark:text-[#2A88B0] uppercase tracking-wider">
                      Official Social Updates
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#115572] dark:bg-[#2A88B0]" />
                    <span className="text-[11px] text-[#115572] dark:text-[#2A88B0] font-semibold">Active Announcements</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#20282C] dark:text-[#EDF3F5] mt-0.5">
                    Follow {CLIENT_CONTENT.hospital.fullName} on Instagram
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] mt-1 max-w-xl leading-relaxed">
                    Connect with <strong className="text-[#20282C] dark:text-[#EDF3F5] font-semibold">{CLIENT_CONTENT.contact.instagramHandle}</strong> for clinic timings, doctor availability updates, and preventive healthcare advice from Kharghar.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={CLIENT_CONTENT.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#115572] dark:bg-[#2A88B0] hover:bg-[#0B3A4F] dark:hover:bg-[#1E6685] text-[#FFFFFF] text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow {CLIENT_CONTENT.contact.instagramHandle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFFFFF]/80" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
