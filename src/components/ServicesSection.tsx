import React from 'react';
import {
  Stethoscope,
  Activity,
  Heart,
  FileText,
  Shield,
  ClipboardList,
  ArrowRight,
  Check
} from 'lucide-react';
import { CLIENT_CONTENT, ServiceItem } from '../data/clientContent';
import { FadeIn, MotionButton } from './motion/MotionWrapper';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const services = CLIENT_CONTENT.services;

  if (!services || services.length === 0) {
    return (
      <section id="services" className="py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold text-[#115572] tracking-wider uppercase mb-2">
            Clinical Care
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#20282C]">
            Outpatient Consultations at {CLIENT_CONTENT.hospital.fullName}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68757A] max-w-xl mx-auto">
            General medical consultations are conducted by {CLIENT_CONTENT.doctor.name} during scheduled OPD hours in Kharghar.
          </p>
          <div className="mt-6">
            <MotionButton
              onClick={() => onSelectServiceForBooking('General Medical Consultation')}
              className="inline-flex items-center gap-2 py-3 px-5 text-xs font-semibold text-[#FFFFFF] bg-[#115572] hover:bg-[#0B3A4F] rounded-lg transition-colors"
            >
              <span>Inquire About Consultations</span>
              <ArrowRight className="w-4 h-4" />
            </MotionButton>
          </div>
        </div>
      </section>
    );
  }

  const getIconForIndex = (index: number) => {
    const icons = [Stethoscope, Activity, Heart, FileText, Shield, ClipboardList];
    return icons[index % icons.length];
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#115572] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Clinical Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C]">
            Medical Services & Consultations
          </h2>
          <p className="mt-3 text-base text-[#68757A] leading-relaxed">
            Structured outpatient care for thorough medical evaluation, diagnosis of acute symptoms, and ongoing health follow-up in Kharghar under Value Added Medical Care standards.
          </p>
        </div>

        {/* Structured Service Presentation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: ServiceItem, idx: number) => {
            const Icon = getIconForIndex(idx);
            return (
              <FadeIn key={service.id} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-[#F7F8F8] border border-[#DDE4E6] hover:border-[#115572] hover:bg-[#FFFFFF] transition-all duration-200 flex flex-col justify-between h-full group shadow-2xs hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#DDE4E6] text-[#115572] flex items-center justify-center group-hover:bg-[#115572] group-hover:text-[#FFFFFF] group-hover:border-[#115572] transition-colors duration-200 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      {service.category && (
                        <span className="text-[11px] font-semibold text-[#115572] tracking-wide">
                          {service.category}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-[#20282C] group-hover:text-[#115572] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#68757A] leading-relaxed">
                      {service.summary}
                    </p>
                    {service.points && service.points.length > 0 && (
                      <ul className="mt-4 space-y-2 pt-3 border-t border-[#DDE4E6] text-xs text-[#68757A]">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#115572] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DDE4E6]">
                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service.name)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#115572] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg hover:bg-[#115572] hover:text-[#FFFFFF] hover:border-[#115572] transition-colors cursor-pointer"
                    >
                      <span>Inquire for this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Factual Advisory Strip */}
        <div className="mt-10 p-5 rounded-xl bg-[#F7F8F8] border border-[#DDE4E6] text-xs text-[#68757A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            <strong className="text-[#20282C]">Note on Diagnostic Investigations: </strong>
            Laboratory investigations and diagnostic imaging are recommended strictly based on individual clinical evaluation during consultation.
          </p>
          <a
            href="#contact"
            className="text-[#115572] font-semibold hover:underline shrink-0"
          >
            Contact hospital desk →
          </a>
        </div>
      </div>
    </section>
  );
};
