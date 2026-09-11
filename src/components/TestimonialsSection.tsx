import React, { useState, useMemo } from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  CheckCircle2, 
  Building2, 
  UserCheck, 
  Quote
} from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicalData';
import { TestimonialRole } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [filterRole, setFilterRole] = useState<'All' | TestimonialRole>('All');

  const roles: ('All' | TestimonialRole)[] = [
    'All',
    'Senior Consultant',
    'Clinical Colleague',
    'Patient & Family'
  ];

  const filteredTestimonials = useMemo(() => {
    if (filterRole === 'All') return TESTIMONIALS;
    return TESTIMONIALS.filter(t => t.role === filterRole);
  }, [filterRole]);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
            <MessageSquareQuote className="w-3.5 h-3.5 text-teal-700" />
            Peer & Patient Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Testimonials & Clinical Reputation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reflections from supervising senior consultants, multidisciplinary hospital colleagues, and patient families at Bahawal Victoria Hospital.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              id={`filter-test-${role.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setFilterRole(role)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterRole === role
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {role === 'All' ? 'All Endorsements (6)' : role}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTestimonials.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Background watermark quote */}
              <Quote className="absolute -bottom-2 -right-2 w-20 h-20 text-slate-100/80 -rotate-12 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars & Role Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    t.role === 'Senior Consultant'
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : t.role === 'Clinical Colleague'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    {t.role}
                  </span>
                </div>

                {/* Highlight Takeaway */}
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  "{t.highlight}"
                </p>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-slate-800 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {t.avatarText}
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span className="truncate">{t.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  </h4>
                  <p className="text-[11px] font-semibold text-teal-700 truncate">
                    {t.credentials}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                    {t.affiliation}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clinical Reference Verification Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <UserCheck className="w-4 h-4 text-teal-600 shrink-0" />
          <span>Professional medical references available upon request for institutional & academic credentialing.</span>
        </div>

      </div>
    </section>
  );
};
