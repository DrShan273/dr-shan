import React from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Copy, 
  Check, 
  Award,
  Stethoscope
} from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/clinicalData';

interface QuickVCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickVCardModal: React.FC<QuickVCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DOCTOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${DOCTOR_PROFILE.name}`,
      `N:Shan;Muhammad;;Dr.;`,
      `TITLE:${DOCTOR_PROFILE.role}`,
      `ORG:${DOCTOR_PROFILE.institution};Department of Internal Medicine`,
      `EMAIL;TYPE=INTERNET,WORK:${DOCTOR_PROFILE.email}`,
      `ADR;TYPE=WORK:;;Bahawal Victoria Hospital, Circular Road;Bahawalpur;Punjab;;Pakistan`,
      `NOTE:${DOCTOR_PROFILE.shortBio}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Muhammad_Shan_BVH.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vcard-title"
    >
      <div className="fixed inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95">
        
        {/* Top Header Card */}
        <div className="bg-gradient-to-br from-teal-800 to-slate-900 text-white p-6 relative text-left">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/30 border border-teal-400/40 flex items-center justify-center text-teal-200">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-teal-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Medical Practitioner</span>
              </div>
              <h3 id="vcard-title" className="text-xl font-bold text-white tracking-tight">
                {DOCTOR_PROFILE.name}
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {DOCTOR_PROFILE.role} • {DOCTOR_PROFILE.institution}
          </p>
        </div>

        {/* Body Details */}
        <div className="p-6 space-y-4 text-left text-xs">
          
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-600" />
                Email:
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 font-mono text-[11px]">{DOCTOR_PROFILE.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-teal-700 rounded transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-teal-600" />
                Hospital:
              </span>
              <span className="font-semibold text-slate-800 text-right">Bahawal Victoria Hospital (BVH)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-teal-600" />
                Degrees:
              </span>
              <span className="font-semibold text-slate-800">MBBS, PMDC Registered</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                Location:
              </span>
              <span className="font-semibold text-slate-800">Bahawalpur, Punjab, Pakistan</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center">
            Save Dr. Muhammad Shan's contact profile directly to your phone or Outlook contacts.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              id="download-vcard-file-btn"
              onClick={handleDownloadVCard}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Contact Card (.vcf)</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
