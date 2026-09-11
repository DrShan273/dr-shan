import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Building2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { DOCTOR_PROFILE, FAQ_ITEMS } from '../data/clinicalData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Appointment / Consultation',
    urgency: 'Routine',
    preferredDate: '',
    preferredTime: 'Morning OPD (09:00 AM - 12:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your clinical or professional inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters for clinical clarity.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const ticketId = 'BVH-REF-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Save submission history to localStorage for user review
      try {
        const existing = JSON.parse(localStorage.getItem('bvh_inquiries') || '[]');
        existing.unshift({
          ...formData,
          ticketId,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('bvh_inquiries', JSON.stringify(existing.slice(0, 10)));
      } catch {
        // Safe fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'Appointment / Consultation',
      urgency: 'Routine',
      preferredDate: '',
      preferredTime: 'Morning OPD (09:00 AM - 12:00 PM)',
      message: ''
    });
    setSubmitSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            Get in Touch with Dr. Shan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consultation & Clinical Contact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Submit a message for clinical consultations, hospital case referrals, academic research collaborations, or patient follow-ups.
          </p>
        </div>

        {/* Emergency Disclaimer Banner */}
        <aside aria-label="Urgent Clinical Disclaimer" className="mb-12 bg-rose-50 border-l-4 border-rose-600 p-4 sm:p-5 rounded-r-xl shadow-xs">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-rose-950">
              <span className="font-bold text-rose-900 block mb-0.5">
                Urgent Clinical Emergency Notice:
              </span>
              This contact form is monitored for scheduled appointments and professional queries only. In the event of an acute, life-threatening medical emergency (such as severe chest pain, sudden paralysis, severe respiratory distress, or major trauma), please immediately visit the <strong className="font-semibold">Bahawal Victoria Hospital Emergency Department (24/7)</strong> or call <strong className="font-semibold">Rescue 1122</strong> directly.
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Hospital Contact Details & FAQs */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Hospital Practice & Office Details
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dr. Muhammad Shan is on-site at Bahawal Victoria Hospital for outpatient clinics, ward consultations, and academic meetings.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-800 shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Hospital Department</h4>
                  <p className="text-sm font-semibold text-slate-900">Bahawal Victoria Hospital (BVH)</p>
                  <p className="text-xs text-slate-600">Department of Internal Medicine & Acute Emergency Casualty</p>
                  <p className="text-xs text-slate-500 mt-0.5">Circular Road, Bahawalpur, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-800 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Email</h4>
                  <a 
                    href={`mailto:${DOCTOR_PROFILE.email}`} 
                    className="text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline block"
                  >
                    {DOCTOR_PROFILE.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">For formal correspondences and academic audits</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center text-teal-800 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">OPD & Consultation Hours</h4>
                  <p className="text-sm font-semibold text-slate-900">Monday – Saturday: 08:00 AM – 02:00 PM</p>
                  <p className="text-xs text-slate-500 mt-0.5">Inpatient rounds conducted daily morning & evening shifts</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-rose-50 border border-rose-200/80">
                <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center text-rose-800 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600">Hospital Emergency Exchange</h4>
                  <p className="text-sm font-semibold text-rose-950">062-9250411 (BVH Emergency Exchange)</p>
                  <p className="text-xs text-rose-700 mt-0.5">Government Emergency Helpline: 1122</p>
                </div>
              </div>

            </div>

            {/* Clinical FAQs Accordion */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                Frequently Asked Inquiries
              </h4>
              <div className="space-y-2">
                {FAQ_ITEMS.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-slate-800 transition-colors"
                    >
                      <span>{item.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="p-3.5 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-200 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Responsive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative">
              
              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Inquiry Dispatched Successfully
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 pt-2">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your clinical consultation / message has been logged. Dr. Muhammad Shan's office at Bahawal Victoria Hospital will review and follow up with you at <strong className="text-slate-900">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Reference Ticket Box */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200 max-w-sm mx-auto text-left space-y-1">
                    <div className="text-xs text-slate-500">Inquiry Tracking Reference:</div>
                    <div className="text-base font-mono font-bold text-teal-800">{submittedTicket}</div>
                    <div className="text-xs text-slate-500">Reason: <span className="font-semibold text-slate-700">{formData.inquiryType}</span></div>
                    <div className="text-xs text-slate-500">Priority: <span className="font-semibold text-slate-700">{formData.urgency}</span></div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-teal-800 bg-white hover:bg-slate-50 border border-teal-200 rounded-xl transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                  
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Consultation & Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-500">
                        Fields marked with <span className="text-rose-500 font-bold">*</span> are required.
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 hidden sm:inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Confidential & HIPAA Aware
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-fullName" className="text-xs font-bold text-slate-700 block">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Ahmad Tariq"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName 
                            ? 'border-rose-400 focus:ring-rose-500/20' 
                            : 'border-slate-300 focus:ring-teal-500/20 focus:border-teal-600'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. yourname@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-rose-400 focus:ring-rose-500/20' 
                            : 'border-slate-300 focus:ring-teal-500/20 focus:border-teal-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-0.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 block">
                        Phone / WhatsApp Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-inquiryType" className="text-xs font-bold text-slate-700 block">
                        Purpose of Inquiry <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800"
                      >
                        <option value="Appointment / Consultation">Appointment / Clinical Consultation</option>
                        <option value="Second Opinion">Medical Second Opinion / Lab Review</option>
                        <option value="Hospital Case Referral">Hospital Inpatient Referral</option>
                        <option value="Academic / Research Collaboration">Academic / Research Collaboration</option>
                        <option value="General Query">General Medical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgency & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-urgency" className="text-xs font-bold text-slate-700 block">
                        Clinical Priority
                      </label>
                      <select
                        id="contact-urgency"
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800"
                      >
                        <option value="Routine">Routine (Within 48–72 hours)</option>
                        <option value="Priority (Non-Emergency)">Priority (Within 24 hours)</option>
                        <option value="Follow-up">Post-Discharge Follow-up</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-preferredDate" className="text-xs font-bold text-slate-700 block">
                        Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Message / Symptoms */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block">
                        Clinical Details / Inquiry Notes <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Briefly describe the clinical condition, relevant medical history, lab workup summary, or the nature of your academic inquiry..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.message 
                          ? 'border-rose-400 focus:ring-rose-500/20' 
                          : 'border-slate-300 focus:ring-teal-500/20 focus:border-teal-600'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-0.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-contact-form-btn"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 disabled:opacity-70 shadow-md shadow-teal-700/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Transmitting Clinical Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry to Dr. Muhammad Shan</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2.5">
                      Your details are handled with medical professionalism and confidentiality.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
