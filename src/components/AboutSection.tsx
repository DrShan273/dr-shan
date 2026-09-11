import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Activity, 
  Building2, 
  Microscope, 
  ShieldCheck, 
  Stethoscope, 
  HeartHandshake,
  Heart,
  FileCheck2
} from 'lucide-react';
import { DOCTOR_PROFILE, CREDENTIALS } from '../data/clinicalData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-teal-600" />,
  Building2: <Building2 className="w-5 h-5 text-teal-600" />,
  Microscope: <Microscope className="w-5 h-5 text-teal-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-teal-600" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-teal-600" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            Medical Profile & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Dr. Muhammad Shan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Medical Officer at Bahawal Victoria Hospital (BVH), combining rigorous clinical diagnostics with compassionate frontline care.
          </p>
        </div>

        {/* Bio Narrative & Hospital Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Clinical Philosophy & Service at BVH
            </h3>
            
            <p>
              As a Medical Officer at <strong className="text-slate-800 font-semibold">Bahawal Victoria Hospital (BVH)</strong>, Dr. Muhammad Shan operates at the epicenter of tertiary healthcare in South Punjab. Bahawal Victoria Hospital serves as the principal clinical teaching facility affiliated with Quaid-e-Azam Medical College, handling over a million outpatient visits and acute emergency admissions annually.
            </p>

            <p>
              Dr. Shan's daily clinical practice revolves around prompt triage, systematic physical examinations, evidence-based pharmacotherapy, and meticulous bedside monitoring across high-dependency wards and acute emergency casualties. He has developed deep clinical expertise in stabilizing multi-morbid patients presenting with decompensated organ failure, severe sepsis, acute coronary events, and metabolic crises.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
              <div className="font-semibold text-slate-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                Guiding Core Clinical Tenets:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Evidence-Based Practice:</strong> Aligning inpatient care with international clinical guidelines (AHA, Surviving Sepsis Campaign, NICE).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Rational Pharmacotherapy:</strong> Proactive antimicrobial stewardship to combat hospital-wide antibiotic resistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Empathetic Bedside Communication:</strong> Treating every patient and anxious caregiver with dignity, transparent prognostication, and kindness.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Credentials & Certifications List */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-teal-700" />
                <h3 className="font-bold text-slate-900 text-lg">Qualifications & Licenses</h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Verified
              </span>
            </div>

            <div className="space-y-3.5">
              {CREDENTIALS.map((cred, idx) => (
                <div key={idx} className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs hover:border-teal-300 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{cred.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{cred.subtitle}</p>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      cred.type === 'license' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : cred.type === 'degree'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}>
                      {cred.status}
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{cred.institution}</span>
                    <span className="font-medium text-slate-700">{cred.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="text-xs text-slate-500">
                Permanent Registration with Pakistan Medical & Dental Council (PMDC)
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Core Competencies */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Areas of Clinical Acumen</span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Core Medical Competencies
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Refined across thousands of patient encounters in inpatient medical wards, acute casualty, and emergency resuscitation units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOCTOR_PROFILE.coreCompetencies.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-xl p-5 border border-slate-200 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {iconMap[item.icon] || <Stethoscope className="w-5 h-5 text-teal-600" />}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-semibold text-teal-700">
                  <span>Hospital Standard Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
