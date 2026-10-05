/**
 * VAMC Hospital, Kharghar, Navi Mumbai - Dr. Pramod Damle
 * Official Domain: vamchospitals.com
 * Official Visual Identity:
 * - Primary Brand Teal: #115572
 * - Brand Red Accent: #EF3236
 * - White Surface: #FFFFFF
 * - Soft Background: #F7F8F8
 * - Dark Body Text: #20282C
 * - Muted Secondary Text: #68757A
 * - Soft Border: #DDE4E6
 * - Brand Language: Value Added Medical Care
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustCards } from './components/TrustCards';
import { AboutHospital } from './components/AboutHospital';
import { DoctorProfile } from './components/DoctorProfile';
import { ServicesSection } from './components/ServicesSection';
import { HospitalFacilities } from './components/HospitalFacilities';
import { WhyChooseVAMC } from './components/WhyChooseVAMC';
import { PatientJourney } from './components/PatientJourney';
import { AppointmentSection } from './components/AppointmentSection';
import { PatientFaq } from './components/PatientFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const elem = document.getElementById('appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#20282C] flex flex-col selection:bg-[#115572]/15 selection:text-[#115572]">
      {/* Top Bar Minimal Navigation */}
      <Navbar onOpenAppointment={() => scrollToAppointment()} />

      <main className="flex-1">
        {/* Healthcare Hero with Dr. Pramod Damle Photography on Soft Neutral (#F7F8F8) */}
        <Hero onOpenAppointment={() => scrollToAppointment()} />

        {/* Verified Trust & Information Cards on White Surface (#FFFFFF) */}
        <TrustCards onOpenAppointment={() => scrollToAppointment()} />

        {/* About VAMC Hospital & Value Added Medical Care on White (#FFFFFF) */}
        <AboutHospital />

        {/* Dr. Pramod Damle Profile on Soft Neutral (#F7F8F8) */}
        <DoctorProfile onOpenAppointment={() => scrollToAppointment()} />

        {/* Clinical Services Structured Presentation on White (#FFFFFF) */}
        <ServicesSection
          onSelectServiceForBooking={(serviceName) => scrollToAppointment(serviceName)}
        />

        {/* Hospital Photography & Patient Care Environment + Instagram on Soft Neutral (#F7F8F8) */}
        <HospitalFacilities />

        {/* Why Choose VAMC Hospital on White (#FFFFFF) */}
        <WhyChooseVAMC />

        {/* Patient Experience Journey & Preparation Checklist on Soft Neutral (#F7F8F8) */}
        <PatientJourney />

        {/* Clean, Frictionless Appointment Scheduling on White (#FFFFFF) */}
        <AppointmentSection
          preselectedService={selectedService}
          onClearPreselectedService={() => setSelectedService(undefined)}
        />

        {/* Frequently Asked Patient Questions on White (#FFFFFF) */}
        <PatientFaq />

        {/* Location, Transit Guide & Map on Soft Neutral (#F7F8F8) */}
        <ContactSection />
      </main>

      {/* Deep VAMC Teal Footer (#115572) with White & Red Accents */}
      <Footer onOpenAppointment={() => scrollToAppointment()} />

      {/* Sticky Mobile Actions Bar */}
      <MobileBottomBar onOpenAppointment={() => scrollToAppointment()} />
    </div>
  );
}
