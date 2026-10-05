import React from 'react';
import { Stethoscope, CheckCircle2, Clock, Calendar, FileText } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn, MotionButton } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

interface DoctorProfileProps {
  onOpenAppointment: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenAppointment }) => {
  const doctor = CLIENT_CONTENT.doctor;
  const consultationHours = CLIENT_CONTENT.contact.consultationHours;

  return (
    <section id="doctor" className="py-20 sm:py-24 bg-[#F7F8F8] dark:bg-[#131E24] border-t border-[#DDE4E6] dark:border-[#263842] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#115572] dark:text-[#2A88B0] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Consulting Physician Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5]">
            {doctor.name}
          </h2>
          <p className="mt-2 text-base text-[#68757A] dark:text-[#96A5AB]">
            {doctor.title} at {doctor.affiliation}.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Verified Doctor & Consultation Photography */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.05}>
              <div className="bg-[#FFFFFF] dark:bg-[#18252C] rounded-2xl overflow-hidden border border-[#DDE4E6] dark:border-[#263842] shadow-xs">
                {/* Doctor Consultation Photography */}
                <div className="relative">
                  <img
                    src={CLIENT_CONTENT.photography.doctorConsultation}
                    alt={`Clinical Consultation - ${doctor.name} at ${CLIENT_CONTENT.hospital.fullName}`}
                    className="w-full h-[300px] sm:h-[350px] object-cover object-top"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Crest Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFFFFF]/98 dark:bg-[#0E161B]/95 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-[#DDE4E6] dark:border-[#263842] flex items-center gap-2 shadow-2xs">
                    <VAMCLogo className="w-5 h-6" />
                    <span className="text-[10px] font-bold text-[#115572] dark:text-[#2A88B0] tracking-wide">VAMC HOSPITAL</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B3A4F] via-[#115572]/85 to-transparent p-5 text-[#FFFFFF]">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="text-base font-bold text-[#FFFFFF]">{doctor.name}</h3>
                        <p className="text-xs text-[#FFFFFF]/85">{doctor.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Details & Request Action */}
                <div className="p-5 border-t border-[#DDE4E6] dark:border-[#263842] space-y-4 bg-[#FFFFFF] dark:bg-[#18252C]">
                  {consultationHours && (
                    <div className="flex items-start gap-3 text-xs text-[#68757A] dark:text-[#96A5AB]">
                      <Clock className="w-4 h-4 text-[#115572] dark:text-[#2A88B0] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#20282C] dark:text-[#EDF3F5]">OPD Consultation Timings:</span>
                        <div className="mt-0.5 text-[#20282C] dark:text-[#EDF3F5]">Morning: {consultationHours.weekdayMorning}</div>
                        <div className="text-[#20282C] dark:text-[#EDF3F5]">Evening: {consultationHours.weekdayEvening}</div>
                        <div className="text-[11px] text-[#68757A] dark:text-[#96A5AB] mt-0.5">Monday to Saturday</div>
                      </div>
                    </div>
                  )}

                  <MotionButton
                    type="button"
                    onClick={onOpenAppointment}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg transition-colors shadow-2xs cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Consultation with {doctor.name}</span>
                  </MotionButton>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Statement, Clinical Focus & Advisory */}
          <div className="lg:col-span-7 space-y-5">
            <FadeIn delay={0.1}>
              {/* Clinical Philosophy Statement */}
              <div className="bg-[#FFFFFF] dark:bg-[#18252C] p-6 sm:p-7 rounded-2xl border border-[#DDE4E6] dark:border-[#263842] shadow-2xs">
                <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5] mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#115572] dark:text-[#2A88B0]" />
                  Clinical Philosophy
                </h3>
                <p className="text-sm sm:text-base text-[#68757A] dark:text-[#96A5AB] leading-relaxed italic border-l-2 border-[#115572] dark:border-[#2A88B0] pl-4 py-0.5">
                  "{doctor.statement}"
                </p>
              </div>

              {/* Verified Clinical Focus Areas */}
              <div className="bg-[#FFFFFF] dark:bg-[#18252C] p-6 sm:p-7 rounded-2xl border border-[#DDE4E6] dark:border-[#263842] shadow-2xs">
                <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5] mb-4">
                  Clinical Consultation Areas
                </h3>
                <div className="space-y-3">
                  {doctor.clinicalFocus.map((focus, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#115572] dark:text-[#2A88B0] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#20282C] dark:text-[#EDF3F5]">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Preparation Guidance in Box */}
              <div className="bg-[#FFFFFF] dark:bg-[#18252C] p-5 rounded-xl border border-[#DDE4E6] dark:border-[#263842] flex items-start gap-3 shadow-2xs">
                <FileText className="w-5 h-5 text-[#115572] dark:text-[#2A88B0] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#20282C] dark:text-[#EDF3F5] leading-relaxed">
                  <strong className="font-semibold text-[#115572] dark:text-[#2A88B0]">Patient Guidance for Visit: </strong>
                  Patients are advised to carry previous investigation reports, current medication prescription slips, and recent discharge summaries to facilitate a thorough clinical evaluation.
                </div>
              </div>

              {/* Factual Medical Records Note */}
              <div className="text-xs text-[#68757A] dark:text-[#96A5AB] pt-2 border-t border-[#DDE4E6] dark:border-[#263842]">
                <p>
                  <strong className="font-semibold text-[#20282C] dark:text-[#EDF3F5]">Official Clinical Registration: </strong>
                  Physician credentials and council registration records for {doctor.name} are authenticated and maintained at {CLIENT_CONTENT.hospital.fullName}, Kharghar.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
