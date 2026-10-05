import React from 'react';
import { ShieldCheck, HeartHandshake, Compass, Check } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';

export const AboutHospital: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Hospital Facility Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xs border border-[#DDE4E6] bg-[#F7F8F8]">
                <img
                  src={CLIENT_CONTENT.photography.hospitalExterior}
                  alt="VAMC Hospital Facility & Sign in Kharghar, Navi Mumbai"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-[#FFFFFF] border-t border-[#DDE4E6]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#115572] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#115572]" />
                    <span className="tracking-wider uppercase text-[11px]">Kharghar Clinical Center · Value Added Medical Care</span>
                  </div>
                  <p className="text-xs text-[#68757A] leading-relaxed">
                    Centrally located in Kharghar, Navi Mumbai for outpatient medical consultations and family healthcare.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Two-Column Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0}>
              <div className="flex items-center gap-2 text-xs font-bold text-[#115572] tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
                <span>About VAMC Hospital</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] leading-tight text-balance">
                A specialist approach to thoughtful, attentive outpatient medicine.
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#68757A] leading-relaxed">
                <p>
                  <strong className="text-[#20282C] font-semibold">{CLIENT_CONTENT.hospital.fullName}</strong> operates 
                  in Kharghar, Navi Mumbai as a specialist healthcare setting dedicated to <strong className="text-[#115572] font-semibold">Value Added Medical Care</strong>. 
                  We believe that clinical accuracy begins with unhurried clinical attention, active listening, and thorough patient assessment.
                </p>
                <p>
                  Under the clinical guidance of <strong className="text-[#20282C] font-semibold">{CLIENT_CONTENT.doctor.name}</strong>, 
                  every consultation is approached systematically: assessing presenting symptoms in detail, reviewing diagnostic medical context, 
                  and explaining treatment strategies clearly to patients and their families.
                </p>
              </div>

              {/* Core Principles Cards in Soft Neutral / Teal */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#F7F8F8] border border-[#DDE4E6] hover:border-[#115572]/40 transition-colors">
                  <div className="flex items-center gap-2 font-semibold text-[#20282C] text-sm mb-1.5">
                    <HeartHandshake className="w-4 h-4 text-[#EF3236]" />
                    <span>Attentive Consultation Time</span>
                  </div>
                  <p className="text-xs text-[#68757A] leading-relaxed">
                    We dedicate time to understand your medical history and address health questions thoroughly without clinical rush.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F7F8F8] border border-[#DDE4E6] hover:border-[#115572]/40 transition-colors">
                  <div className="flex items-center gap-2 font-semibold text-[#20282C] text-sm mb-1.5">
                    <Compass className="w-4 h-4 text-[#115572]" />
                    <span>Evidence-Informed Decisions</span>
                  </div>
                  <p className="text-xs text-[#68757A] leading-relaxed">
                    Diagnostic testing and medication suggestions are guided strictly by clinical necessity and professional medical standards.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#68757A] pt-5 border-t border-[#DDE4E6]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#115572]" /> Clear diagnostic explanations
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#115572]" /> Family counseling support
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#115572]" /> Official domain: {CLIENT_CONTENT.hospital.domain}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
