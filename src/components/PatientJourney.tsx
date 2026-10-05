import React from 'react';
import { CalendarCheck, PhoneCall, Stethoscope, HeartPulse, FileText, CheckCircle2 } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';

export const PatientJourney: React.FC = () => {
  const steps = CLIENT_CONTENT.patientJourneySteps;
  const icons = [CalendarCheck, PhoneCall, Stethoscope, HeartPulse];

  return (
    <section id="journey" className="py-20 sm:py-24 bg-[#F7F8F8] dark:bg-[#131E24] border-t border-[#DDE4E6] dark:border-[#263842] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#115572] dark:text-[#2A88B0] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Patient Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5]">
            Your Consultation Process at {CLIENT_CONTENT.hospital.fullName}
          </h2>
          <p className="mt-3 text-base text-[#68757A] dark:text-[#96A5AB]">
            A clear, structured pathway designed to make scheduling and visiting our Kharghar facility straightforward, dignified, and reassuring.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={idx} delay={idx * 0.07}>
                <div className="relative p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] hover:border-[#115572] dark:hover:border-[#2A88B0] transition-colors flex flex-col justify-between h-full shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-[#115572] dark:text-[#2A88B0] tabular-nums">
                        {step.stepNumber}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#F7F8F8] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#DDE4E6] dark:border-[#263842] text-[11px] text-[#68757A] dark:text-[#96A5AB] font-mono">
                    Step {step.stepNumber} of 04
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Preparation Checklist */}
        <div className="mt-14 p-7 sm:p-9 rounded-2xl bg-[#115572] dark:bg-[#0C2433] text-[#FFFFFF] shadow-md border border-[#0B3A4F] dark:border-[#18445A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EF3236] bg-[#FFFFFF] px-2.5 py-1 rounded-md w-fit uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5 text-[#EF3236]" />
                <span>Patient Preparation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#FFFFFF]">
                What to carry for your medical consultation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed">
                Having these clinical documents ready enables {CLIENT_CONTENT.doctor.name} to form an accurate, complete assessment.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CLIENT_CONTENT.patientChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B3A4F]/60 dark:bg-[#071923]/70 border border-[#FFFFFF]/15 text-xs sm:text-sm text-[#FFFFFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#EF3236] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
