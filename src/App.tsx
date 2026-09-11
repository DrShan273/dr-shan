import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ClinicalProjectsGallery } from './components/ClinicalProjectsGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickVCardModal } from './components/QuickVCardModal';
import { Calendar, Stethoscope } from 'lucide-react';

export default function App() {
  const [vCardOpen, setVCardOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Header & Announcement */}
      <Navbar onOpenConsultModal={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenVCard={() => setVCardOpen(true)}
          onOpenConsult={scrollToContact}
        />
        <AboutSection />
        <ExperienceTimeline />
        <ClinicalProjectsGallery />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer with Medical Disclaimers */}
      <Footer />

      {/* Physician vCard & Credential Modal */}
      <QuickVCardModal 
        isOpen={vCardOpen} 
        onClose={() => setVCardOpen(false)} 
      />

      {/* Floating Action Quick Contact Pill on Mobile & Desktop */}
      <aside aria-label="Floating Quick Appointment Action" className="fixed bottom-5 right-5 z-30">
        <button
          type="button"
          onClick={scrollToContact}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 shadow-lg shadow-teal-900/30 hover:shadow-xl transition-all group"
          title="Jump to Consultation Booking"
        >
          <Calendar className="w-4 h-4 text-teal-200 group-hover:scale-110 transition-transform" />
          <span>Inquire / Consult</span>
        </button>
      </aside>
    </div>
  );
}
