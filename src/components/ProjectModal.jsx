import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Prevent body background scroll while modal is active
    document.body.style.overflow = 'hidden';

    // Close on ESC key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left relative flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section (No Project Image) */}
        <div className="relative rounded-t-3xl bg-slate-900 p-6 sm:p-8 text-white border-b border-slate-800 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="pr-12 space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wider inline-block shadow-sm">
              {project.badge}
            </span>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <p className="text-slate-700 text-base font-normal leading-relaxed">
              "{project.fullDescription || project.description}"
            </p>
          </div>

          {/* Detailed Overview / Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                Project Architecture & Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Tech Stack */}
          {project.allTech && (
            <div>
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.allTech.map((tech, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
