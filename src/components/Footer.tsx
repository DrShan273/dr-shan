import React from 'react';
import { Stethoscope, ShieldCheck, Heart, MapPin, Mail, ArrowUp } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/clinicalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {DOCTOR_PROFILE.name}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-900/60 text-teal-300 border border-teal-700/50">
                MBBS • PMDC
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Medical Officer currently serving at <strong className="text-slate-200">Bahawal Victoria Hospital (BVH)</strong>. Dedicated to clinical excellence, evidence-based triage, inpatient resuscitation, and hospital quality improvement.
            </p>

            <div className="flex flex-col gap-1.5 text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                Bahawal Victoria Hospital, Circular Road, Bahawalpur, Pakistan
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <a href={`mailto:${DOCTOR_PROFILE.email}`} className="text-teal-400 hover:underline">
                  {DOCTOR_PROFILE.email}
                </a>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Credentials</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">BVH Clinical Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Clinical Projects Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials & Peer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Book Consultation & Contact</a>
              </li>
            </ul>
          </div>

          {/* Medical Ethics & Disclaimer */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Medical Practice Disclaimer
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              The clinical projects, audits, and informational materials presented on this website are for professional portfolio, academic documentation, and general healthcare educational purposes. Communication via this web form does not establish an immediate doctor-patient relationship. For urgent medical emergencies, immediately contact hospital trauma casualty or emergency dispatchers (1122).
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p className="text-center sm:text-left text-xs">
            © {new Date().getFullYear()} Dr. Muhammad Shan. Medical Officer, Bahawal Victoria Hospital (BVH). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              Serving with care & integrity <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
