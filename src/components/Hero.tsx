import React from 'react';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Sparkles,
  Award,
  Users,
  Clock,
  HeartPulse
} from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/clinicalData';

interface HeroProps {
  onOpenVCard: () => void;
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVCard, onOpenConsult }) => {
  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-sky-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Credential Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Affiliation & Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100/80 text-teal-800 border border-teal-200">
                <Building2 className="w-3.5 h-3.5 text-teal-700" />
                Bahawal Victoria Hospital (BVH)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin className="w-3 h-3 text-slate-500" />
                Bahawalpur, Punjab
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Inpatient & Acute Care Active
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {DOCTOR_PROFILE.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-base sm:text-lg font-semibold text-teal-700">
                <span>Medical Officer</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-700 font-medium">Department of Internal Medicine & Emergency Care</span>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Frontline physician serving at <strong className="text-slate-900 font-semibold">Bahawal Victoria Hospital (BVH)</strong>. Dedicated to evidence-based acute stabilization, inpatient resuscitation, clinical quality improvement audits, and compassionate patient-centered healthcare in tertiary clinical settings.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                id="hero-book-consult-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenConsult();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-md shadow-teal-700/20 hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </a>

              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-sm transition-all"
              >
                <span>Clinical Projects & Audits</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>

              <button
                type="button"
                id="hero-download-cv-btn"
                onClick={onOpenVCard}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-teal-800 bg-teal-50/70 hover:bg-teal-100 border border-teal-200/80 rounded-xl transition-all"
                title="View & Download Official Medical Credentials & vCard"
              >
                <FileText className="w-4 h-4 text-teal-700" />
                <span>Physician Card / Credentials</span>
              </button>
            </div>

            {/* Micro Highlights Banner */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-600" />
                <span>PMDC Registered Medical Practitioner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-rose-500" />
                <span>BLS & ACLS Certified Resuscitation Provider</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Prompt Triage & Bedside Rounds</span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/70 border border-slate-200/90 relative">
              
              {/* Doctor Avatar / Stethoscope Crest */}
              <div className="relative mb-5 flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800 flex items-center justify-center text-white shadow-md shadow-teal-700/30 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" 
                      alt="Dr. Muhammad Shan - Medical Officer BVH" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-sm" title="Active on Hospital Roster">
                    <HeartPulse className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
                    Clinical Practitioner
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    Dr. Muhammad Shan
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    MBBS • Medical Officer
                  </p>
                  <p className="text-xs text-teal-700 font-semibold flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    Bahawal Victoria Hospital
                  </p>
                </div>
              </div>

              {/* Verified Hospital Info Strip */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 mb-5 space-y-2 text-left text-xs">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-slate-500">Hospital Department:</span>
                  <span className="font-semibold text-slate-800">Medicine & Acute Casualty</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-slate-500">Institution:</span>
                  <span className="font-semibold text-slate-800">BVH (QAMC Allied Hospital)</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-slate-500">Official Email:</span>
                  <a href={`mailto:${DOCTOR_PROFILE.email}`} className="font-semibold text-teal-700 hover:underline">
                    {DOCTOR_PROFILE.email}
                  </a>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-slate-500">Clinical Focus:</span>
                  <span className="font-semibold text-emerald-700">Triage, Inpatient & Resuscitation</span>
                </div>
              </div>

              {/* Fast Stats Preview */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-teal-50/60 rounded-xl p-3 border border-teal-100/80 text-left">
                  <div className="text-xl font-extrabold text-teal-800">4,800+</div>
                  <div className="text-[11px] font-medium text-slate-600">Patients Managed</div>
                </div>
                <div className="bg-sky-50/60 rounded-xl p-3 border border-sky-100/80 text-left">
                  <div className="text-xl font-extrabold text-sky-800">14+</div>
                  <div className="text-[11px] font-medium text-slate-600">Clinical Audits & QI</div>
                </div>
              </div>

              {/* Quick Card Action */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                <span className="text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Evidence-Based Medicine
                </span>
                <button
                  type="button"
                  onClick={onOpenVCard}
                  className="font-semibold text-teal-700 hover:text-teal-800 hover:underline"
                >
                  View Full V-Card →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Core Stats Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {DOCTOR_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-0.5">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
