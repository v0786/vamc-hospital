import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Instagram } from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import { MotionButton } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Dr. Pramod Damle', href: '#doctor' },
    { label: 'Services', href: '#services' },
    { label: 'Why VAMC', href: '#why-us' },
    { label: 'Patient Guide', href: '#journey' },
    { label: 'Location', href: '#contact' },
  ];

  const hasVerifiedPhone = Boolean(CLIENT_CONTENT.contact.phone && CLIENT_CONTENT.contact.displayPhone);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#DDE4E6] shadow-xs'
            : 'bg-[#FFFFFF] border-b border-[#DDE4E6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Zone 1: Verified VAMC Hospital Crest Logo & Wordmark */}
            <a
              href="#home"
              className="flex items-center gap-2.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572] rounded-sm group py-1"
              aria-label="VAMC Hospital Home"
            >
              <VAMCLogo className="w-8 h-9 drop-shadow-2xs group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#115572] leading-none">
                  {CLIENT_CONTENT.hospital.fullName}
                </span>
                <span className="text-[10px] font-semibold text-[#68757A] tracking-wider uppercase mt-1">
                  Value Added Medical Care · Kharghar
                </span>
              </div>
            </a>

            {/* Zone 2: Clean contemporary text navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#68757A]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#115572] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572] rounded-xs py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action - Instagram social, Phone & Appointment */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={CLIENT_CONTENT.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-[#68757A] hover:text-[#EF3236] rounded-lg hover:bg-[#F7F8F8] transition-colors"
                title={`Follow ${CLIENT_CONTENT.contact.instagramHandle} on Instagram`}
                aria-label="VAMC Hospital Instagram"
              >
                <Instagram className="w-4 h-4 text-[#EF3236]" />
                <span className="hidden xl:inline text-[11px] font-medium text-[#68757A]">Instagram</span>
              </a>

              {hasVerifiedPhone && CLIENT_CONTENT.contact.phone && (
                <a
                  href={`tel:${CLIENT_CONTENT.contact.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#20282C] hover:text-[#115572] px-3 py-2 rounded-lg hover:bg-[#F7F8F8] transition-colors whitespace-nowrap"
                  title={`Call ${CLIENT_CONTENT.contact.displayPhone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#115572]" />
                  <span>{CLIENT_CONTENT.contact.displayPhone}</span>
                </a>
              )}

              {/* Selective Red CTA for Appointment */}
              <MotionButton
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg shadow-2xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EF3236] whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </MotionButton>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={CLIENT_CONTENT.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#EF3236] hover:bg-[#F7F8F8] rounded-md"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenAppointment}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-md transition-colors whitespace-nowrap"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#20282C] hover:bg-[#F7F8F8] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#115572]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#20282C]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#20282C]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FFFFFF] shadow-xl flex flex-col z-50 animate-in slide-in-from-right duration-200 border-l border-[#DDE4E6]">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE4E6]">
              <div className="flex items-center gap-2">
                <VAMCLogo className="w-6 h-7" />
                <span className="font-bold text-[#115572] text-sm">{CLIENT_CONTENT.hospital.fullName}</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-[#68757A] hover:text-[#20282C] hover:bg-[#F7F8F8]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-3 rounded-lg text-sm font-medium text-[#20282C] hover:text-[#115572] hover:bg-[#F7F8F8] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#DDE4E6] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={CLIENT_CONTENT.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#EF3236] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg hover:bg-[#F7F8F8] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#EF3236]" />
                  <span>Instagram {CLIENT_CONTENT.contact.instagramHandle}</span>
                </a>

                {hasVerifiedPhone && CLIENT_CONTENT.contact.phone && (
                  <a
                    href={`tel:${CLIENT_CONTENT.contact.phone}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg hover:bg-[#F7F8F8] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#115572]" />
                    <span>Call {CLIENT_CONTENT.contact.displayPhone}</span>
                  </a>
                )}
              </div>

              <div className="mt-8 text-xs text-[#68757A] space-y-1 pt-4 border-t border-[#DDE4E6]">
                <p className="font-semibold text-[#115572]">Value Added Medical Care</p>
                <p className="font-medium text-[#20282C]">{CLIENT_CONTENT.location.area}, {CLIENT_CONTENT.location.city}</p>
                <p className="text-[11px] text-[#68757A]">{CLIENT_CONTENT.hospital.domain}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
