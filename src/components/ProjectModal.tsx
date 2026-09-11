import React, { useEffect } from 'react';
import { 
  X, 
  Building2, 
  Calendar, 
  Tag, 
  TrendingUp, 
  AlertCircle, 
  Stethoscope, 
  CheckCircle2, 
  Share2, 
  FileText
} from 'lucide-react';
import { ClinicalProject } from '../types';

interface ProjectModalProps {
  project: ClinicalProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Clinical Project: ${project.title} by Dr. Muhammad Shan (Medical Officer, BVH)`
      );
      alert('Project citation copied to clipboard!');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10 animate-in zoom-in-95">
        
        {/* Header with Project Image & Category */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden shrink-0">
          <img 
            src={project.image} 
            alt={project.imageAlt} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
          
          {/* Close Button */}
          <button
            type="button"
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-sm transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Overlays */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/90 text-white">
                {project.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                {project.hospital}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                {project.year}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-teal-200 font-medium">
              {project.department}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          
          {/* Key Impact Metrics */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-teal-600" />
              Documented Clinical Impact Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="bg-teal-50/70 rounded-xl p-3 border border-teal-100">
                  <div className="text-2xl font-extrabold text-teal-900">{metric.value}</div>
                  <div className="text-xs font-semibold text-slate-700">{metric.label}</div>
                  {metric.subtext && (
                    <div className="text-[11px] text-slate-500 mt-0.5">{metric.subtext}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Challenge */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              The Clinical Dilemma & Baseline Challenge
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              {project.challenge}
            </p>
          </div>

          {/* Intervention Deployed */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-teal-600" />
              Physician Intervention & Standardized Protocol
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              {project.intervention}
            </p>
          </div>

          {/* Measured Patient Outcome */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Clinical Outcomes & Patient Safety Improvement
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-emerald-50/40 p-4 rounded-xl border border-emerald-200/80 text-emerald-950">
              {project.outcome}
            </p>
          </div>

          {/* Clinical Reflection */}
          <div className="border-l-4 border-teal-600 pl-4 py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Physician's Bedside Reflection (Dr. Muhammad Shan)
            </span>
            <p className="text-sm italic text-slate-700 mt-1">
              "{project.clinicalReflection}"
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:px-8 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            Bahawal Victoria Hospital Quality Audit
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Citation</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
