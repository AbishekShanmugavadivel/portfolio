import { useEffect } from 'react';
import { X, ShieldCheck, Building2, Calendar } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return;

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
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 text-left relative overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2.5 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] sm:text-xs uppercase font-extrabold text-blue-400 tracking-wider block">
                Official Verified Certificate
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                {certificate.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Full Image Viewer Body */}
        <div className="p-4 sm:p-6 bg-slate-900/95 flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[450px] overflow-auto">
          <div className="relative max-w-full max-h-full flex justify-center items-center">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-700/80 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Footer Details Banner */}
        <div className="p-5 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 w-full sm:w-auto">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-bold text-slate-800">{certificate.issuer}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-bold text-slate-800">{certificate.date}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer w-full sm:w-auto"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}
