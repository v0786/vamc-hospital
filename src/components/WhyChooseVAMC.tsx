import React from 'react';
import { UserCheck, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { FadeIn } from './motion/MotionWrapper';

export const WhyChooseVAMC: React.FC = () => {
  const strengths = CLIENT_CONTENT.strengths;
  const icons = [UserCheck, HeartHandshake, MapPin, ShieldCheck];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#FFFFFF] dark:bg-[#0E161B] border-t border-[#DDE4E6] dark:border-[#263842] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#115572] dark:text-[#2A88B0] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Why Choose VAMC Hospital</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C] dark:text-[#EDF3F5] text-balance">
            Dependable healthcare anchored in medical ethics and patient trust.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68757A] dark:text-[#96A5AB]">
            Our focus is on clinical rigor, patient dignity, and clear communication. What you can anticipate when consulting at {CLIENT_CONTENT.hospital.fullName}.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {strengths.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={idx} delay={idx * 0.06}>
                <div className="p-7 rounded-2xl bg-[#F7F8F8] dark:bg-[#18252C] border border-[#DDE4E6] dark:border-[#263842] hover:border-[#115572] dark:hover:border-[#2A88B0] transition-all flex flex-col justify-start h-full shadow-2xs hover:shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] dark:bg-[#131E24] border border-[#DDE4E6] dark:border-[#263842] text-[#115572] dark:text-[#2A88B0] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 text-[#115572] dark:text-[#2A88B0]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#20282C] dark:text-[#EDF3F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68757A] dark:text-[#96A5AB] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
