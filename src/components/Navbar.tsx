import React, { useState, useEffect } from 'react';
import { Stethoscope, Menu, X, Phone, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/clinicalData';

interface NavbarProps {
  onOpenConsultModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About & Credentials', href: '#about' },
    { name: 'Hospital Experience', href: '#experience' },
    { name: 'Clinical Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact & Consult', href: '#contact' },
  ];

  return (
    <>
      {/* Top Clinical Announcement Bar */}
      <aside aria-label="Hospital Affiliation Banner" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
              BVH Active Duty
            </span>
            <span className="text-slate-300 font-medium">
              Medical Officer at Bahawal Victoria Hospital (BVH), Bahawalpur
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              OPD: Mon–Sat 8:00 AM – 2:00 PM
            </span>
            <a 
              href="tel:+92629250411" 
              className="inline-flex items-center gap-1 text-rose-300 hover:text-rose-200 transition-colors font-semibold"
              title="Hospital Emergency Trauma Hotline"
            >
              <Phone className="w-3 h-3" />
              ER Hotline: 062-9250411 / 1122
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        id="site-header"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Doctor Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                  {DOCTOR_PROFILE.name}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60 hidden sm:inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                  MBBS • PMDC
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Medical Officer | Bahawal Victoria Hospital (BVH)
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              id="header-consult-btn"
              onClick={(e) => {
                if (onOpenConsultModal) {
                  e.preventDefault();
                  onOpenConsultModal();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm shadow-teal-700/20 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Inquiries</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-menu"
            className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2"
          >
            <div className="px-3 py-2 mb-2 bg-slate-50 rounded-lg border border-slate-200/70">
              <p className="text-xs font-semibold text-slate-700">Bahawal Victoria Hospital, Bahawalpur</p>
              <p className="text-xs text-slate-500">OPD: Mon–Sat 8:00 AM – 2:00 PM</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Contact & Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
