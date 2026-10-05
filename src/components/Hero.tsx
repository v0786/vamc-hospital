import React from 'react';
import { Calendar, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn, MotionButton } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const hasPhone = Boolean(CLIENT_CONTENT.contact.phone);
  const consultationHours = CLIENT_CONTENT.contact.consultationHours;

  return (
    <section id="home" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#F7F8F8] dark:bg-[#131E24] border-b border-[#DDE4E6] dark:border-[#263842] overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Split Layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0}>
              {/* Unboxed brand badge with VAMC Teal & Red accent */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#68757A] dark:text-[#96A5AB] mb-4">
                <span className="inline-flex items-center gap-1.5 text-[#115572] dark:text-[#2A88B0] font-bold tracking-wide uppercase text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
                  Value Added Medical Care
                </span>
                <span aria-hidden="true" className="text-[#DDE4E6] dark:text-[#263842]">|</span>
                <span className="inline-flex items-center gap-1 text-[#20282C] dark:text-[#EDF3F5] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                  {CLIENT_CONTENT.location.area}, {CLIENT_CONTENT.location.city}
                </span>
              </div>

              {/* Confident editorial heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5] leading-[1.18] text-balance">
                Specialist medical consultations & patient-first care in Kharghar.
              </h1>

              {/* Concise, calm, human supporting copy */}
              <p className="mt-5 text-base sm:text-lg text-[#68757A] dark:text-[#96A5AB] leading-relaxed max-w-2xl">
                <strong className="font-semibold text-[#115572] dark:text-[#2A88B0]">{CLIENT_CONTENT.hospital.fullName}</strong> operates 
                as a dedicated healthcare clinic in Kharghar, Navi Mumbai under the principle of Value Added Medical Care. 
                Outpatient consultations are led by <strong className="font-semibold text-[#20282C] dark:text-[#EDF3F5]">{CLIENT_CONTENT.doctor.name}</strong> with 
                a focus on clinical thoroughness, unhurried listening, and evidence-informed treatment.
              </p>

              {/* Consultation Hours Ribbon */}
              {consultationHours && (
                <div className="mt-6 flex items-center gap-2.5 text-xs sm:text-sm text-[#20282C] dark:text-[#EDF3F5] bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] rounded-xl px-4 py-3 max-w-lg shadow-2xs">
                  <Clock className="w-4 h-4 text-[#115572] dark:text-[#2A88B0] shrink-0" />
                  <span>
                    <span className="font-semibold text-[#115572] dark:text-[#2A88B0]">OPD Consultation Hours:</span> {consultationHours.weekdayMorning} & {consultationHours.weekdayEvening}
                  </span>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <MotionButton
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] bg-[#EF3236] rounded-lg hover:bg-[#D7262A] shadow-2xs hover:shadow-xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EF3236] whitespace-nowrap cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>

                {hasPhone && CLIENT_CONTENT.contact.phone ? (
                  <a
                    href={`tel:${CLIENT_CONTENT.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#115572] dark:text-[#2A88B0] bg-[#FFFFFF] dark:bg-[#18252C] border border-[#115572] dark:border-[#2A88B0] rounded-lg hover:bg-[#F7F8F8] dark:hover:bg-[#1E2E37] shadow-2xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572] dark:focus-visible:ring-[#2A88B0] whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#115572] dark:text-[#2A88B0]" />
                    <span>Call {CLIENT_CONTENT.contact.displayPhone}</span>
                  </a>
                ) : (
                  <a
                    href="#doctor"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#115572] dark:text-[#2A88B0] bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] rounded-lg hover:border-[#115572] dark:hover:border-[#2A88B0] hover:bg-[#F7F8F8] dark:hover:bg-[#1E2E37] shadow-2xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572] whitespace-nowrap"
                  >
                    <span>View Doctor Profile</span>
                  </a>
                )}

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-[#115572] dark:text-[#2A88B0] hover:text-[#0B3A4F] dark:hover:text-[#44A6D1] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#115572] dark:text-[#2A88B0]" />
                  <span>Hospital Directions</span>
                </a>
              </div>

              {/* Authentic Patient Standards */}
              <div className="mt-10 pt-6 border-t border-[#DDE4E6] dark:border-[#263842] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#115572] dark:bg-[#2A88B0]" />
                  <span>Attentive Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF3236]" />
                  <span>Evidence-Based Care</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#115572] dark:bg-[#2A88B0]" />
                  <span>Kharghar, Navi Mumbai</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Hero Composition with Real Doctor Dr. Pramod Damle */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1} direction="none">
              <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#DDE4E6] dark:border-[#263842] bg-[#FFFFFF] dark:bg-[#18252C] group">
                <img
                  src={CLIENT_CONTENT.photography.doctorConsultation}
                  alt={`${CLIENT_CONTENT.doctor.name} - Consulting Physician at ${CLIENT_CONTENT.hospital.fullName}, Kharghar`}
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-top group-hover:scale-101 transition-transform duration-500 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating VAMC Official Crest Badge */}
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-md border border-[#DDE4E6] dark:border-[#263842] rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-sm">
                  <VAMCLogo className="w-6 h-7" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#115572] dark:text-[#2A88B0] leading-tight">VAMC HOSPITAL</span>
                    <span className="text-[9px] font-medium text-[#68757A] dark:text-[#96A5AB]">Value Added Medical Care</span>
                  </div>
                </div>

                {/* Deep VAMC Teal Gradient Scrim Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B3A4F] via-[#115572]/85 to-transparent p-6 text-[#FFFFFF]">
                  <div className="flex items-center justify-between text-xs text-[#FFFFFF]/90 font-medium tracking-wide">
                    <span className="font-semibold tracking-wider uppercase text-[11px]">Senior Medical Consultant</span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-[#FFFFFF]/15 backdrop-blur-xs px-2.5 py-1 rounded-md text-[#FFFFFF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF3236]" />
                      OPD Consultations
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold tracking-tight text-[#FFFFFF] mt-1.5">
                    {CLIENT_CONTENT.doctor.name}
                  </div>
                  <div className="text-xs text-[#FFFFFF]/80 mt-1 flex items-center justify-between">
                    <span>{CLIENT_CONTENT.hospital.fullName} · {CLIENT_CONTENT.location.area}</span>
                    <span className="font-mono text-[11px] text-[#FFFFFF]/70">{CLIENT_CONTENT.hospital.domain}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
