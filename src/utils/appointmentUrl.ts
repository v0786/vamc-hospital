/**
 * Appointment Mode Resolver & URL Encoding Utility
 * Priority: real backend -> WhatsApp -> email -> phone -> unavailable
 * Complies with strict patient privacy:
 * - No localStorage, cookies, or analytics tracking of patient data
 * - No console logging of personal or medical details
 * - No sensitive clinical data collected or transmitted
 * - Proper RFC 3986 URL encoding supporting English, Marathi, Hindi, line breaks & special characters
 */

import { ClientConfiguration } from '../data/clientContent';

export type AppointmentChannelMode = 'backend' | 'whatsapp' | 'email' | 'phone' | 'unavailable';

export interface AppointmentPayload {
  patientName: string;
  contactNumber: string;
  preferredDate: string;
  preferredTimeSlot: string;
  serviceInterest?: string;
  briefNote?: string;
}

/**
 * Resolves the active appointment method based on verified client configuration
 */
export function resolveAppointmentChannel(config: ClientConfiguration): AppointmentChannelMode {
  // 1. Real Backend API
  if (config.appointmentModeConfig?.backendApiEndpoint?.trim()) {
    return 'backend';
  }

  // 2. Verified WhatsApp
  if (config.contact.whatsappNumber && config.contact.whatsappNumber.trim().length >= 8) {
    return 'whatsapp';
  }

  // 3. Verified Email
  if (config.contact.email && config.contact.email.trim().includes('@')) {
    return 'email';
  }

  // 4. Verified Phone
  if (config.contact.phone && config.contact.phone.trim().length >= 7) {
    return 'phone';
  }

  // 5. Unavailable
  return 'unavailable';
}

/**
 * Builds a properly formatted, secure WhatsApp pre-filled message URL
 */
export function buildWhatsAppAppointmentUrl(
  whatsappNumber: string,
  payload: AppointmentPayload,
  hospitalName: string,
  doctorName: string
): string {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');

  const lines = [
    `Appointment Request — ${hospitalName}`,
    ``,
    `Patient Name: ${payload.patientName.trim()}`,
    `Contact: ${payload.contactNumber.trim()}`,
    `Preferred Date: ${payload.preferredDate.trim()}`,
    `Time Window: ${payload.preferredTimeSlot.trim()}`,
  ];

  if (payload.serviceInterest && payload.serviceInterest.trim()) {
    lines.push(`Consultation Type: ${payload.serviceInterest.trim()}`);
  }

  lines.push(`Doctor: ${doctorName}`);
  lines.push(`Location: Kharghar, Navi Mumbai`);

  if (payload.briefNote && payload.briefNote.trim()) {
    lines.push(``);
    lines.push(`Note: ${payload.briefNote.trim().slice(0, 150)}`);
  }

  lines.push(``);
  lines.push(`(Sent via ${hospitalName} website request)`);

  const messageText = lines.join('\n');
  const encodedMessage = encodeURIComponent(messageText);

  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Builds a properly formatted, secure mailto URL for appointment inquiries
 */
export function buildEmailAppointmentUrl(
  targetEmail: string,
  payload: AppointmentPayload,
  hospitalName: string,
  doctorName: string
): string {
  const subject = `Appointment Request — ${hospitalName}`;

  const bodyLines = [
    `Dear VAMC Hospital Appointment Desk,`,
    ``,
    `I would like to request an outpatient consultation with ${doctorName} at ${hospitalName}, Kharghar.`,
    ``,
    `Patient Details:`,
    `- Name: ${payload.patientName.trim()}`,
    `- Contact Mobile: ${payload.contactNumber.trim()}`,
    `- Preferred Date: ${payload.preferredDate.trim()}`,
    `- Preferred Time Slot: ${payload.preferredTimeSlot.trim()}`,
  ];

  if (payload.serviceInterest && payload.serviceInterest.trim()) {
    bodyLines.push(`- Consultation Area: ${payload.serviceInterest.trim()}`);
  }

  if (payload.briefNote && payload.briefNote.trim()) {
    bodyLines.push(`- General Note: ${payload.briefNote.trim().slice(0, 150)}`);
  }

  bodyLines.push(``);
  bodyLines.push(`Please let me know about the availability of this slot.`);
  bodyLines.push(``);
  bodyLines.push(`Thank you,`);
  bodyLines.push(`${payload.patientName.trim()}`);

  const body = bodyLines.join('\n');

  return `mailto:${targetEmail.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
