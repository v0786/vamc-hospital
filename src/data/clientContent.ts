/**
 * Centralized Client Content & Configuration for VAMC Hospital
 * CORE BRAND IDENTITY:
 * - Hospital: VAMC Hospital (Value Added Medical Care)
 * - Brand Colors: Primary Teal #115572, Brand Red #EF3236, Neutral White #FFFFFF & #F7F8F8
 * - Consulting Doctor: Dr. Pramod Damle
 * - Location: Kharghar, Navi Mumbai, Maharashtra, India
 * - Primary Domain: vamchospitals.com
 */

export interface ServiceItem {
  id: string;
  name: string;
  category?: string;
  summary: string;
  points?: string[];
}

export interface ClientConfiguration {
  hospital: {
    fullName: string;
    shortName: string;
    brandLanguage: string;
    tagline: string;
    domain: string;
    officialWebsiteUrl: string;
    logoUrl: string;
  };
  location: {
    area: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pincode?: string;
    displayAddress: string;
    directionsUrl: string;
    transitNote?: string;
  };
  doctor: {
    name: string;
    salutation: string;
    title: string;
    affiliation: string;
    qualifications?: string | null;
    yearsOfExperience?: number | null;
    clinicalFocus: string[];
    statement: string;
    hasVerifiedPhoto: boolean;
    photoUrl?: string | null;
  };
  photography: {
    doctorConsultation: string;
    hospitalExterior: string;
    hospitalEntrance: string;
    clinicalFacility: string;
    diagnosticCare: string;
  };
  contact: {
    phone?: string | null;
    displayPhone?: string | null;
    whatsappNumber?: string | null;
    email?: string | null;
    instagramUrl: string;
    instagramHandle: string;
    consultationHours?: {
      weekdayMorning?: string;
      weekdayEvening?: string;
      sunday?: string;
    } | null;
  };
  appointmentModeConfig: {
    backendApiEndpoint?: string | null;
    allowWalkInInquiry: boolean;
  };
  services: ServiceItem[];
  strengths: {
    title: string;
    description: string;
  }[];
  patientJourneySteps: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  patientChecklist: string[];
}

export const CLIENT_CONTENT: ClientConfiguration = {
  hospital: {
    fullName: 'VAMC Hospital',
    shortName: 'VAMC',
    brandLanguage: 'Value Added Medical Care',
    tagline: 'Value Added Medical Care · Specialist Consultations in Kharghar',
    domain: 'vamchospitals.com',
    officialWebsiteUrl: 'https://vamchospitals.com',
    logoUrl: '/vamc_hospital_logo.svg',
  },
  location: {
    area: 'Kharghar',
    city: 'Navi Mumbai',
    district: 'Raigad',
    state: 'Maharashtra',
    country: 'India',
    pincode: '410210',
    displayAddress: 'VAMC Hospital, Kharghar, Navi Mumbai, Maharashtra 410210, India',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=VAMC+Hospital+Kharghar+Navi+Mumbai',
    transitNote: 'Accessible from Kharghar Suburban Railway Station (Harbour Line) and the Sion-Panvel Expressway corridor.',
  },
  doctor: {
    name: 'Dr. Pramod Damle',
    salutation: 'Dr.',
    title: 'Senior Medical Consultant & Physician',
    affiliation: 'VAMC Hospital, Kharghar',
    qualifications: null,
    yearsOfExperience: null,
    clinicalFocus: [
      'Comprehensive Clinical Evaluation & Patient Consultations',
      'Diagnosis & Management of Common Acute Medical Illnesses',
      'Follow-up & Continuity of Care for Chronic Conditions',
      'Objective Diagnostic Report Review & Medical Explanations',
      'Preventive Healthcare Counseling & General Wellness',
    ],
    statement:
      'Providing attentive, patient-first consultations where medical concerns are listened to with care, explained clearly, and managed with evidence-based clinical practices.',
    hasVerifiedPhoto: true,
    photoUrl:
      'https://lh3.googleusercontent.com/8iKQK5P2U_jA2NqmZXU5xKGrzo8pjEpF7IJDqV3jN6IfSaK3MlRpovnVS1vY-7ETCExFtYCKpy-iWNq-jEdy5c0UiIvzRvY60wAgR5IR=w1600-rw',
  },
  photography: {
    doctorConsultation:
      'https://lh3.googleusercontent.com/8iKQK5P2U_jA2NqmZXU5xKGrzo8pjEpF7IJDqV3jN6IfSaK3MlRpovnVS1vY-7ETCExFtYCKpy-iWNq-jEdy5c0UiIvzRvY60wAgR5IR=w1600-rw',
    hospitalExterior:
      'https://ilovenavimumbai.com/wp-content/uploads/2025/12/VAMC-HOSPITAL-Kharghar-Navi-Mumbai.webp',
    hospitalEntrance:
      'https://ilovenavimumbai.com/wp-content/uploads/2025/12/VAMC-HOSPITAL-Navi-Mumbai-Kharghar.webp',
    clinicalFacility:
      'https://lh3.googleusercontent.com/TEKWBqIKUmQsFTp9LM2krB8H-0-WOmaSUH1VzBfnXdUlOU8ak-FvpOaMmPAkJDqEYesXnp3ZUpd2yXebwHMU2CLgC-yxBDTwSwtk4kg=w1600-rw',
    diagnosticCare:
      'https://lh3.googleusercontent.com/qKplGCKzlvEOC2PgXnerPvo4wOSGWzXQh9S5xdLLBGbeWy3mMhyEJXr7_qFecGZ5QsuD7PpX8dbtSPWlykIu987DtCQUowOKllqkLy4=w1600-rw',
  },
  contact: {
    email: 'contact@vamchospitals.com',
    phone: null,
    displayPhone: null,
    whatsappNumber: null,
    instagramUrl:
      'https://www.instagram.com/vamc_hospital?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    instagramHandle: '@vamc_hospital',
    consultationHours: {
      weekdayMorning: '10:00 AM – 1:30 PM',
      weekdayEvening: '5:30 PM – 8:30 PM',
      sunday: 'Prior Appointment / Inquire with Clinic',
    },
  },
  appointmentModeConfig: {
    backendApiEndpoint: null,
    allowWalkInInquiry: true,
  },
  services: [
    {
      id: 'general-consultation',
      name: 'General Medical Consultation',
      category: 'Primary Healthcare',
      summary:
        'Thorough clinical examinations, evaluation of symptoms, fever assessments, and clear medical advice for individuals and families.',
      points: [
        'Detailed medical history evaluation and clinical consultation',
        'Diagnosis and management of acute illnesses',
        'Clear, non-technical explanation of treatment plans',
      ],
    },
    {
      id: 'outpatient-care',
      name: 'Outpatient Care (OPD)',
      category: 'Clinical OPD',
      summary:
        'Structured morning and evening outpatient consultation hours designed to accommodate working adults, families, and seniors in Kharghar.',
      points: [
        'Scheduled consultation slots to minimize clinic waiting',
        'Attentive doctor-patient consultation time',
        'Systematic tracking of patient progress',
      ],
    },
    {
      id: 'chronic-care',
      name: 'Chronic Condition Management & Follow-up',
      category: 'Ongoing Care',
      summary:
        'Regular medical monitoring, prescription reviews, and lifestyle advice for individuals managing ongoing metabolic or cardiovascular health.',
      points: [
        'Consistent health parameter tracking and symptom reviews',
        'Periodic medication and dosage assessments',
        'Supportive counseling on nutrition and self-care',
      ],
    },
    {
      id: 'diagnostic-review',
      name: 'Diagnostic Report Interpretation',
      category: 'Clinical Advisory',
      summary:
        'Professional review and patient-friendly explanation of laboratory tests, blood panels, and imaging reports to guide treatment steps.',
      points: [
        'Careful interpretation of laboratory test findings',
        'Translating complex clinical terms into actionable advice',
        'Guidance on necessary confirmatory or follow-up tests',
      ],
    },
    {
      id: 'wellness-checks',
      name: 'Preventive Health Reviews',
      category: 'Preventive Medicine',
      summary:
        'Proactive vital checks, baseline health assessments, and age-appropriate guidance to support long-term wellness.',
      points: [
        'Routine vital sign checks and lifestyle risk assessment',
        'Preventive medical counsel tailored to patient age and history',
        'Evidence-informed guidance for family members',
      ],
    },
  ],
  strengths: [
    {
      title: 'Consultations by Dr. Pramod Damle',
      description:
        'Direct consultation with a senior physician who values thorough physical evaluation and clear clinical explanation.',
    },
    {
      title: 'Attentive, Patient-Centered Time',
      description:
        'Appointments are conducted with dedicated attention, ensuring that your symptoms, questions, and concerns are addressed without rush.',
    },
    {
      title: 'Convenient Kharghar Location',
      description:
        'Centrally situated in Kharghar, Navi Mumbai with straightforward access for residents of Kharghar, Belapur, Taloja, and adjoining nodes.',
    },
    {
      title: 'Ethical Medical Recommendations',
      description:
        'Clinical care focuses strictly on appropriate, necessary diagnostics and rational treatments in line with professional medical ethics.',
    },
  ],
  patientJourneySteps: [
    {
      stepNumber: '01',
      title: 'Request a Slot',
      description:
        'Submit your consultation request using our appointment form, indicating your preferred day and time slot.',
    },
    {
      stepNumber: '02',
      title: 'Review & Coordination',
      description:
        'Our clinic team reviews slot availability and communicates with you to coordinate your visit time.',
    },
    {
      stepNumber: '03',
      title: 'Clinical Consultation',
      description:
        'Meet Dr. Pramod Damle at VAMC Hospital for a comprehensive, attentive clinical examination and discussion.',
    },
    {
      stepNumber: '04',
      title: 'Care Plan & Review',
      description:
        'Receive clear prescription instructions, guidance on investigations if needed, and a scheduled follow-up plan.',
    },
  ],
  patientChecklist: [
    'Previous hospital discharge papers and consultation summaries',
    'Current prescription slips or physical medication packs',
    'Recent laboratory reports, blood investigations, or scans',
    'Valid government photo identity document',
  ],
};
