import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, TrendingUp, Briefcase } from 'lucide-react';
import { CLINICAL_EXPERIENCES } from '../data/clinicalData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
            <Building2 className="w-3.5 h-3.5 text-teal-700" />
            Hospital Rotations & Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinical Experience at BVH
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on frontline medical practice across high-volume casualty emergency units, intensive inpatient wards, and general outpatient clinics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {CLINICAL_EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${idx === 0 ? 'bg-teal-600' : 'bg-slate-400'}`}></div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      idx === 0 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {exp.badge}
                    </span>
                  </div>
                  
                  <div className="text-base font-semibold text-teal-700 mt-1">
                    {exp.institution}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {exp.department}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 font-medium text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities Grid */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                  Primary Clinical Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact / Measurable Outcomes */}
              <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-700" />
                  Key Clinical Contributions & Milestones
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  {exp.impactPoints.map((point, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-lg p-2.5 border border-teal-200/60 text-xs text-slate-700 font-medium flex items-center">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Hospital Notice Info Banner */}
        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl p-5 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">About Bahawal Victoria Hospital (BVH)</p>
              <p className="text-xs text-slate-500">
                Established in 1879, BVH is a premier 1,500+ bed tertiary teaching complex affiliated with Quaid-e-Azam Medical College.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-teal-700 hover:text-teal-800 hover:underline shrink-0"
          >
            Inquire for Consultation →
          </a>
        </div>

      </div>
    </section>
  );
};
