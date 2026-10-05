import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';

export const PatientFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const consultationHours = CLIENT_CONTENT.contact.consultationHours;

  const faqs = [
    {
      q: `What does VAMC Hospital stand for?`,
      a: `VAMC stands for "Value Added Medical Care". It represents our hospital's commitment to patient-first, attentive healthcare with ethical diagnostic guidance, thorough evaluations, and dedicated doctor-patient consultation time in Kharghar, Navi Mumbai.`,
    },
    {
      q: `What are the consultation hours for ${CLIENT_CONTENT.doctor.name}?`,
      a: `${CLIENT_CONTENT.doctor.name} conducts consultations at ${CLIENT_CONTENT.hospital.fullName}, Kharghar during morning (${consultationHours?.weekdayMorning || '10:00 AM – 1:30 PM'}) and evening (${consultationHours?.weekdayEvening || '5:30 PM – 8:30 PM'}) outpatient windows from Monday to Saturday.`,
    },
    {
      q: `Where is ${CLIENT_CONTENT.hospital.fullName} located in Kharghar?`,
      a: `${CLIENT_CONTENT.hospital.fullName} is situated in Kharghar, Navi Mumbai (PIN: 410210), Maharashtra. It is readily accessible by road via the Sion-Panvel Expressway, and via suburban railway through Kharghar Railway Station (Harbour Line).`,
    },
    {
      q: 'What should patients carry for a medical consultation?',
      a: 'Patients are advised to bring previous investigation reports, current medication prescription slips, past discharge summaries, and a valid government photo identity document.',
    },
    {
      q: 'How does appointment request scheduling work?',
      a: `Submit your preferred date and time slot using our appointment section. Our clinic desk coordinates with ${CLIENT_CONTENT.doctor.name} and contacts you to confirm token availability.`,
    },
    {
      q: 'Can I bring previous laboratory and scan reports for clinical review?',
      a: `Yes. Comprehensive review of prior diagnostic test results and health assessments is an integral part of outpatient consultations with ${CLIENT_CONTENT.doctor.name}.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FFFFFF] border-t border-[#DDE4E6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#115572] tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
              <span>Patient Information</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#20282C]">
              Frequently Asked Patient Questions
            </h2>
            <p className="mt-3 text-sm text-[#68757A]">
              Essential guidance regarding visits, timings, and consultations at {CLIENT_CONTENT.hospital.fullName}, Kharghar.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div
                  className="bg-[#F7F8F8] rounded-xl border border-[#DDE4E6] overflow-hidden transition-all shadow-2xs hover:border-[#115572]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#20282C] hover:text-[#115572] transition-colors focus:outline-hidden focus-visible:bg-[#FFFFFF] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#115572] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#68757A] transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? 'rotate-180 text-[#115572]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#68757A] leading-relaxed border-t border-[#DDE4E6] bg-[#FFFFFF] animate-in fade-in duration-150">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
