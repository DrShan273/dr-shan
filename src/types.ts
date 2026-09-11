export type ProjectCategory = 
  | 'All'
  | 'Emergency & Triage'
  | 'Quality Improvement'
  | 'Inpatient Care'
  | 'Clinical Audits'
  | 'Community Health';

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface ClinicalProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  department: string;
  hospital: string;
  year: string;
  summary: string;
  tags: string[];
  challenge: string;
  intervention: string;
  outcome: string;
  keyMetrics: MetricItem[];
  clinicalReflection: string;
  isFeatured: boolean;
  image: string;
  imageAlt: string;
}

export type TestimonialRole = 'Senior Consultant' | 'Clinical Colleague' | 'Patient & Family';

export interface Testimonial {
  id: string;
  author: string;
  credentials: string;
  role: TestimonialRole;
  affiliation: string;
  content: string;
  rating: number;
  date: string;
  highlight: string;
  avatarText: string;
}

export interface WorkExperience {
  role: string;
  institution: string;
  department: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  responsibilities: string[];
  impactPoints: string[];
}

export interface MedicalCredential {
  title: string;
  subtitle: string;
  institution: string;
  year: string;
  status: string;
  type: 'degree' | 'certification' | 'license';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Appointment / Consultation' | 'Second Opinion' | 'Academic / Research Collaboration' | 'Hospital Case Referral' | 'General Query';
  urgency: 'Routine' | 'Priority (Non-Emergency)' | 'Follow-up';
  preferredDate: string;
  preferredTime: string;
  message: string;
}
