import React from 'react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { Phone, MapPin, Calendar, Mail, Instagram } from 'lucide-react';
import { VAMCLogo } from './VAMCLogo';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const currentYear = new Date().getFullYear();
  const hasPhone = Boolean(CLIENT_CONTENT.contact.phone);
  const hasEmail = Boolean(CLIENT_CONTENT.contact.email);
  const consultationHours = CLIENT_CONTENT.contact.consultationHours;

  return (
    <footer className="bg-[#115572] dark:bg-[#07131A] text-[#FFFFFF] pt-16 pb-24 lg:pb-16 border-t border-[#0B3A4F] dark:border-[#152733] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A6C90]/40 dark:border-[#1F3A4A]/50">
          {/* Col 1: Identity & Location */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <VAMCLogo className="w-8 h-9 drop-shadow-sm bg-[#FFFFFF] rounded-md p-0.5" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#FFFFFF] leading-none">
                  {CLIENT_CONTENT.hospital.fullName}
                </span>
                <span className="text-[10px] text-[#DDE4E6] dark:text-[#9FB7C2] uppercase tracking-wider mt-1 font-semibold">
                  Value Added Medical Care · Kharghar
                </span>
              </div>
            </div>

            <p className="text-xs text-[#DDE4E6] dark:text-[#9FB7C2] leading-relaxed max-w-sm">
              Attentive medical consultations and specialist outpatient care under the clinical guidance of <strong className="text-[#FFFFFF]">{CLIENT_CONTENT.doctor.name}</strong> in Kharghar, Navi Mumbai.
            </p>

            <div className="text-xs text-[#DDE4E6] dark:text-[#9FB7C2] space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EF3236] shrink-0 mt-0.5" />
                <span>{CLIENT_CONTENT.location.displayAddress}</span>
              </div>

              {hasPhone && CLIENT_CONTENT.contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#EF3236] shrink-0" />
                  <a href={`tel:${CLIENT_CONTENT.contact.phone}`} className="hover:text-[#FFFFFF] transition-colors">
                    {CLIENT_CONTENT.contact.displayPhone}
                  </a>
                </div>
              )}

              {hasEmail && CLIENT_CONTENT.contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#EF3236] shrink-0" />
                  <a href={`mailto:${CLIENT_CONTENT.contact.email}`} className="hover:text-[#FFFFFF] transition-colors">
                    {CLIENT_CONTENT.contact.email}
                  </a>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={CLIENT_CONTENT.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0B3A4F] dark:bg-[#0E202B] hover:bg-[#0B3A4F]/80 dark:hover:bg-[#132A38] border border-[#FFFFFF]/20 text-[#FFFFFF] text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#EF3236]" />
                  <span>Instagram: {CLIENT_CONTENT.contact.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-4 border-b border-[#1A6C90]/40 dark:border-[#1F3A4A]/50 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#DDE4E6] dark:text-[#9FB7C2]">
              <li>
                <a href="#home" className="hover:text-[#FFFFFF] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFFFFF] transition-colors">About {CLIENT_CONTENT.hospital.fullName}</a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-[#FFFFFF] transition-colors">{CLIENT_CONTENT.doctor.name}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">Clinical Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FFFFFF] transition-colors">Why Choose {CLIENT_CONTENT.hospital.shortName}</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#FFFFFF] transition-colors">Patient Preparation Guide</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFFFFF] transition-colors">Hospital Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Care Focus */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-4 border-b border-[#1A6C90]/40 dark:border-[#1F3A4A]/50 pb-2">
              Clinical Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#DDE4E6] dark:text-[#9FB7C2]">
              {CLIENT_CONTENT.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Timings & Appointment Action */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider border-b border-[#1A6C90]/40 dark:border-[#1F3A4A]/50 pb-2">
              OPD Hours
            </h3>
            {consultationHours ? (
              <div className="text-xs text-[#DDE4E6] dark:text-[#9FB7C2] space-y-1">
                <p className="font-semibold text-[#FFFFFF]">Mon – Sat</p>
                <p>{consultationHours.weekdayMorning}</p>
                <p>{consultationHours.weekdayEvening}</p>
                {consultationHours.sunday && (
                  <p className="text-[11px] text-[#DDE4E6]/80 dark:text-[#9FB7C2]/80 pt-1">{consultationHours.sunday}</p>
                )}
              </div>
            ) : (
              <p className="text-xs text-[#DDE4E6] dark:text-[#9FB7C2]">Inquire with clinic desk for current consultation hours.</p>
            )}

            <button
              type="button"
              onClick={onOpenAppointment}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            <div className="pt-2">
              <span className="text-[11px] text-[#DDE4E6]/80 dark:text-[#9FB7C2]/80 block mb-1.5">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Factual Medical Disclaimer */}
        <div className="pt-8 pb-4 text-xs text-[#DDE4E6]/80 dark:text-[#9FB7C2]/80 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-[#FFFFFF]">Medical Advisory: </strong>
            The information presented on this website is for general educational and outpatient scheduling purposes under Value Added Medical Care guidelines. It does not constitute emergency medical intervention or a binding diagnostic opinion. In cases of critical or life-threatening medical emergencies, please visit an emergency casualty care center immediately.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#1A6C90]/40 dark:border-[#1F3A4A]/50 text-[11px] text-[#DDE4E6]/70 dark:text-[#9FB7C2]/70">
            <div>
              © {currentYear} {CLIENT_CONTENT.hospital.fullName}, Kharghar, Navi Mumbai. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <a href={`https://${CLIENT_CONTENT.hospital.domain}`} className="text-[#DDE4E6] dark:text-[#9FB7C2] hover:text-[#FFFFFF] transition-colors">
                {CLIENT_CONTENT.hospital.domain}
              </a>
              <span>·</span>
              <span>{CLIENT_CONTENT.doctor.name}</span>
              <span>·</span>
              <span>Kharghar, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
