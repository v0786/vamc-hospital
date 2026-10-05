import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Loader2
} from 'lucide-react';
import { CLIENT_CONTENT } from '../data/clientContent';
import {
  resolveAppointmentChannel,
  buildWhatsAppAppointmentUrl,
  buildEmailAppointmentUrl,
  AppointmentPayload
} from '../utils/appointmentUrl';
import { FadeIn, MotionButton } from './motion/MotionWrapper';
import { VAMCLogo } from './VAMCLogo';

interface AppointmentSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

interface FormState {
  patientName: string;
  contactNumber: string;
  preferredDate: string;
  preferredTimeSlot: string;
  serviceInterest: string;
  briefNote: string;
}

interface FormErrors {
  patientName?: string;
  contactNumber?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const channelMode = resolveAppointmentChannel(CLIENT_CONTENT);
  const todayString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormState>({
    patientName: '',
    contactNumber: '',
    preferredDate: todayString,
    preferredTimeSlot: 'Morning (10:00 AM – 1:30 PM)',
    serviceInterest: preselectedService || 'General Medical Consultation',
    briefNote: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmittingBackend, setIsSubmittingBackend] = useState(false);
  const [backendSuccess, setBackendSuccess] = useState<boolean>(false);
  const [backendError, setBackendError] = useState<string | null>(null);

  const [preparedAction, setPreparedAction] = useState<{
    type: 'whatsapp' | 'email';
    url: string;
    payload: AppointmentPayload;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter patient full name.';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.contactNumber.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91)?[6789]\d{9}$/;
    if (!cleanPhone) {
      newErrors.contactNumber = 'Contact mobile number is required.';
    } else if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10) {
      newErrors.contactNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date.';
    }

    if (!formData.preferredTimeSlot) {
      newErrors.preferredTimeSlot = 'Please select a time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload: AppointmentPayload = {
      patientName: formData.patientName,
      contactNumber: formData.contactNumber,
      preferredDate: formData.preferredDate,
      preferredTimeSlot: formData.preferredTimeSlot,
      serviceInterest: formData.serviceInterest,
      briefNote: formData.briefNote,
    };

    if (channelMode === 'backend' && CLIENT_CONTENT.appointmentModeConfig.backendApiEndpoint) {
      setIsSubmittingBackend(true);
      setBackendError(null);
      try {
        const response = await fetch(CLIENT_CONTENT.appointmentModeConfig.backendApiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (response.ok) {
          setBackendSuccess(true);
        } else {
          setBackendError('Unable to transmit request to clinic server. Please contact clinic directly.');
        }
      } catch {
        setBackendError('Network error connecting to booking service. Please contact clinic directly.');
      } finally {
        setIsSubmittingBackend(false);
      }
    } else if (channelMode === 'whatsapp' && CLIENT_CONTENT.contact.whatsappNumber) {
      const url = buildWhatsAppAppointmentUrl(
        CLIENT_CONTENT.contact.whatsappNumber,
        payload,
        CLIENT_CONTENT.hospital.fullName,
        CLIENT_CONTENT.doctor.name
      );
      setPreparedAction({ type: 'whatsapp', url, payload });
    } else if (channelMode === 'email' && CLIENT_CONTENT.contact.email) {
      const url = buildEmailAppointmentUrl(
        CLIENT_CONTENT.contact.email,
        payload,
        CLIENT_CONTENT.hospital.fullName,
        CLIENT_CONTENT.doctor.name
      );
      setPreparedAction({ type: 'email', url, payload });
    }
  };

  const handleReset = () => {
    setPreparedAction(null);
    setBackendSuccess(false);
    setBackendError(null);
    setFormData({
      patientName: '',
      contactNumber: '',
      preferredDate: todayString,
      preferredTimeSlot: 'Morning (10:00 AM – 1:30 PM)',
      serviceInterest: 'General Medical Consultation',
      briefNote: '',
    });
    setErrors({});
    if (onClearPreselectedService) onClearPreselectedService();
  };

  return (
    <section id="appointment" className="py-20 sm:py-24 bg-[#FFFFFF] border-t border-[#DDE4E6] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-3">
            <VAMCLogo className="w-10 h-11 drop-shadow-2xs" />
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#115572] tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#EF3236]" />
            <span>Consultation Scheduling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#20282C]">
            Request an Appointment at {CLIENT_CONTENT.hospital.fullName}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68757A]">
            Value Added Medical Care consultations with <strong className="text-[#20282C]">{CLIENT_CONTENT.doctor.name}</strong> in Kharghar. 
            Select your preferred consultation window below.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <FadeIn delay={0.05}>
            {/* 1. Phone Only Mode */}
            {channelMode === 'phone' && (
              <div className="bg-[#F7F8F8] rounded-2xl p-7 sm:p-9 border border-[#DDE4E6] shadow-2xs text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#DDE4E6] text-[#115572] flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#20282C] mb-2">
                  Telephone Appointment Scheduling
                </h3>
                <p className="text-xs sm:text-sm text-[#68757A] leading-relaxed max-w-md mx-auto mb-6">
                  Please call the clinic reception to inquire about current consultation token availability and coordinate your visit with {CLIENT_CONTENT.doctor.name}.
                </p>
                {CLIENT_CONTENT.contact.phone && (
                  <a
                    href={`tel:${CLIENT_CONTENT.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg transition-colors shadow-2xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {CLIENT_CONTENT.contact.displayPhone}</span>
                  </a>
                )}
              </div>
            )}

            {/* 2. Unavailable Mode */}
            {channelMode === 'unavailable' && (
              <div className="bg-[#F7F8F8] rounded-2xl p-7 sm:p-9 border border-[#DDE4E6] shadow-2xs text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#DDE4E6] text-[#115572] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#115572]" />
                </div>
                <h3 className="text-lg font-semibold text-[#20282C] mb-2">
                  In-Person Consultations at {CLIENT_CONTENT.hospital.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#68757A] leading-relaxed max-w-md mx-auto mb-5">
                  Patients are warmly welcome to visit our clinic directly during outpatient OPD hours in Kharghar, Navi Mumbai.
                </p>
                <div className="p-3.5 bg-[#FFFFFF] border border-[#DDE4E6] rounded-xl text-xs text-[#20282C] max-w-md mx-auto">
                  <span className="font-semibold">{CLIENT_CONTENT.location.displayAddress}</span>
                </div>
                <div className="mt-5">
                  <a
                    href={CLIENT_CONTENT.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#115572] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* 3. Real Backend Confirmed State */}
            {channelMode === 'backend' && backendSuccess && (
              <div className="bg-[#F7F8F8] rounded-2xl p-7 sm:p-9 border border-[#115572]/40 shadow-2xs">
                <div className="flex items-center gap-3 text-[#115572] mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#115572] shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#20282C]">
                      Appointment Request Transmitted
                    </h3>
                    <p className="text-xs text-[#68757A]">
                      Received by {CLIENT_CONTENT.hospital.fullName} clinic desk.
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#68757A] mb-5">
                  Our reception team will review your requested time with {CLIENT_CONTENT.doctor.name} and contact you at {formData.contactNumber} to coordinate your consultation.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 px-4 text-xs font-medium text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg hover:bg-[#F7F8F8]"
                >
                  Submit Another Request
                </button>
              </div>
            )}

            {/* 4. WhatsApp or Email Prepared State */}
            {preparedAction && (
              <div className="bg-[#F7F8F8] rounded-2xl p-7 sm:p-9 border border-[#DDE4E6] shadow-2xs space-y-5 animate-in fade-in duration-200">
                <div className="flex items-start gap-3.5">
                  {preparedAction.type === 'whatsapp' ? (
                    <div className="w-10 h-10 rounded-xl bg-[#115572]/10 border border-[#115572]/30 text-[#115572] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#115572]" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-[#115572]/10 border border-[#115572]/30 text-[#115572] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#115572]" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-[#20282C]">
                      {preparedAction.type === 'whatsapp'
                        ? 'Ready to Dispatch via WhatsApp'
                        : 'Ready to Dispatch via Email'}
                    </h3>
                    <p className="text-xs text-[#68757A] mt-0.5">
                      Review your appointment details below before opening your application.
                    </p>
                  </div>
                </div>

                {/* Summary Table */}
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDE4E6] space-y-2 text-xs text-[#20282C]">
                  <div className="flex justify-between py-1 border-b border-[#DDE4E6]">
                    <span className="text-[#68757A]">Patient Name:</span>
                    <span className="font-semibold text-[#20282C]">{preparedAction.payload.patientName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#DDE4E6]">
                    <span className="text-[#68757A]">Contact Mobile:</span>
                    <span className="font-semibold text-[#20282C]">{preparedAction.payload.contactNumber}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#DDE4E6]">
                    <span className="text-[#68757A]">Preferred Date:</span>
                    <span className="font-semibold text-[#20282C]">{preparedAction.payload.preferredDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#DDE4E6]">
                    <span className="text-[#68757A]">Time Window:</span>
                    <span className="font-semibold text-[#20282C]">{preparedAction.payload.preferredTimeSlot}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#DDE4E6]">
                    <span className="text-[#68757A]">Consultation Area:</span>
                    <span className="font-semibold text-[#20282C]">{preparedAction.payload.serviceInterest}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#68757A]">Doctor:</span>
                    <span className="font-semibold text-[#115572]">{CLIENT_CONTENT.doctor.name}</span>
                  </div>
                </div>

                {/* Patient Instructions */}
                <p className="text-xs text-[#68757A] leading-relaxed">
                  {preparedAction.type === 'whatsapp' ? (
                    <>
                      Clicking below will launch WhatsApp with your appointment request pre-filled. 
                      <strong> You must press Send in WhatsApp</strong> to deliver your request to our clinic desk.
                    </>
                  ) : (
                    <>
                      Clicking below will open your email application with your request pre-filled addressed to <strong>{CLIENT_CONTENT.contact.email}</strong>. 
                      <strong> Please review and press Send</strong> in your email app to complete your submission.
                    </>
                  )}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={preparedAction.url}
                    target={preparedAction.type === 'whatsapp' ? '_blank' : undefined}
                    rel={preparedAction.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold text-[#FFFFFF] bg-[#EF3236] hover:bg-[#D7262A] rounded-lg shadow-2xs transition-colors"
                  >
                    {preparedAction.type === 'whatsapp' ? (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue to WhatsApp & Send</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Open Email App & Send Request</span>
                      </>
                    )}
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center py-3 px-4 text-xs font-medium text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg hover:bg-[#F7F8F8] transition-colors"
                  >
                    Edit Details
                  </button>
                </div>
                <div className="text-[11px] text-[#68757A]">
                  Note: A slot is coordinated after our clinic desk reviews the request with the consulting physician.
                </div>
              </div>
            )}

            {/* 5. Active Input Form */}
            {(channelMode === 'backend' || channelMode === 'whatsapp' || channelMode === 'email') &&
              !preparedAction &&
              !backendSuccess && (
                <form
                  onSubmit={handleFormSubmit}
                  noValidate
                  className="bg-[#F7F8F8] rounded-2xl p-7 sm:p-9 border border-[#DDE4E6] shadow-2xs space-y-5"
                >
                  {backendError && (
                    <div className="p-3.5 rounded-lg bg-[#EF3236]/10 border border-[#EF3236]/30 text-xs text-[#EF3236] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#EF3236] shrink-0" />
                      <span>{backendError}</span>
                    </div>
                  )}

                  {/* Patient Name */}
                  <div>
                    <label htmlFor="patient-name" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                      Patient Full Name <span className="text-[#EF3236]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="patient-name"
                        type="text"
                        required
                        value={formData.patientName}
                        onChange={(e) => {
                          setFormData({ ...formData, patientName: e.target.value });
                          if (errors.patientName) setErrors({ ...errors, patientName: undefined });
                        }}
                        placeholder="e.g. Anand Sharma"
                        className={`w-full px-4 py-3 text-sm text-[#20282C] bg-[#FFFFFF] border rounded-lg focus:outline-hidden transition-colors ${
                          errors.patientName
                            ? 'border-[#EF3236] focus:border-[#EF3236]'
                            : 'border-[#DDE4E6] focus:border-[#115572]'
                        }`}
                      />
                      <User className="w-4 h-4 text-[#68757A] absolute right-3.5 top-3.5" />
                    </div>
                    {errors.patientName && (
                      <p className="mt-1 text-xs text-[#EF3236] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.patientName}
                      </p>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label htmlFor="patient-phone" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                      Contact Mobile Number <span className="text-[#EF3236]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="patient-phone"
                        type="tel"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, contactNumber: e.target.value });
                          if (errors.contactNumber) setErrors({ ...errors, contactNumber: undefined });
                        }}
                        placeholder="e.g. 98200XXXXX"
                        className={`w-full px-4 py-3 text-sm text-[#20282C] bg-[#FFFFFF] border rounded-lg focus:outline-hidden transition-colors ${
                          errors.contactNumber
                            ? 'border-[#EF3236] focus:border-[#EF3236]'
                            : 'border-[#DDE4E6] focus:border-[#115572]'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-[#68757A] absolute right-3.5 top-3.5" />
                    </div>
                    {errors.contactNumber && (
                      <p className="mt-1 text-xs text-[#EF3236] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.contactNumber}
                      </p>
                    )}
                  </div>

                  {/* Date & Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferred-date" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                        Preferred Date <span className="text-[#EF3236]">*</span>
                      </label>
                      <input
                        id="preferred-date"
                        type="date"
                        min={todayString}
                        required
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                        }}
                        className={`w-full px-4 py-3 text-sm text-[#20282C] bg-[#FFFFFF] border rounded-lg focus:outline-hidden transition-colors ${
                          errors.preferredDate
                            ? 'border-[#EF3236] focus:border-[#EF3236]'
                            : 'border-[#DDE4E6] focus:border-[#115572]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-[#EF3236] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="preferred-slot" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                        OPD Time Window <span className="text-[#EF3236]">*</span>
                      </label>
                      <select
                        id="preferred-slot"
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg focus:outline-hidden focus:border-[#115572] transition-colors"
                      >
                        <option value="Morning (10:00 AM – 1:30 PM)">Morning (10:00 AM – 1:30 PM)</option>
                        <option value="Evening (5:30 PM – 8:30 PM)">Evening (5:30 PM – 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Service */}
                  <div>
                    <label htmlFor="service-interest" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                      Consultation / Care Interest
                    </label>
                    <select
                      id="service-interest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg focus:outline-hidden focus:border-[#115572] transition-colors"
                    >
                      {CLIENT_CONTENT.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="General Health Query / Other">Other Medical Inquiry</option>
                    </select>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label htmlFor="brief-note" className="block text-xs font-semibold text-[#20282C] mb-1.5">
                      Brief Note <span className="text-[#68757A] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="brief-note"
                      rows={2}
                      maxLength={150}
                      value={formData.briefNote}
                      onChange={(e) => setFormData({ ...formData, briefNote: e.target.value })}
                      placeholder="e.g., Routine checkup, ongoing follow-up, or report consultation"
                      className="w-full px-4 py-2.5 text-sm text-[#20282C] bg-[#FFFFFF] border border-[#DDE4E6] rounded-lg focus:outline-hidden focus:border-[#115572] transition-colors resize-none"
                    />
                    <span className="text-[11px] text-[#68757A]">
                      Do not include sensitive personal medical history.
                    </span>
                  </div>

                  {/* Submit Button in Solid VAMC Red */}
                  <div className="pt-2">
                    <MotionButton
                      type="submit"
                      disabled={isSubmittingBackend}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-[#FFFFFF] bg-[#EF3236] rounded-lg hover:bg-[#D7262A] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EF3236] shadow-2xs transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmittingBackend ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : channelMode === 'whatsapp' ? (
                        <>
                          <MessageSquare className="w-4 h-4" />
                          <span>Review & Open in WhatsApp</span>
                        </>
                      ) : channelMode === 'email' ? (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Review & Open Email Request</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </MotionButton>
                  </div>

                  <div className="text-[11px] text-[#68757A] text-center pt-2">
                    Consultations are conducted at {CLIENT_CONTENT.hospital.fullName}, Kharghar. For acute medical emergencies, please visit an emergency casualty department immediately.
                  </div>
                </form>
              )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
