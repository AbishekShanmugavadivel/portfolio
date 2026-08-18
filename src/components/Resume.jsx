import { useState } from 'react';
import { Download, GraduationCap, Briefcase, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/portfolioData';
import { generateResumePDF } from '../utils/generateResumePDF';

export default function Resume() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = () => {
    setDownloading(true);

    // Trigger confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    try {
      generateResumePDF();
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <section id="resume" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3.5 py-1 rounded-full inline-block border border-blue-200/60">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Resume
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Download my resume to know more about my education, experience and skills.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Download Resume Hero Card CTA */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Updated 2026 PDF
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Explore My Full Profile?
            </h3>
            <p className="text-blue-100 text-xs sm:text-base leading-relaxed">
              Get an instant, formatted PDF resume detailing my technical skillset, academic background, certified projects, and full contact details.
            </p>
          </div>

          <div className="z-10 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDownloadResume}
              disabled={downloading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
              {downloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>

          {/* Decorative background blur shapes */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        </div>

        {/* Interactive Resume Timeline Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">

          {/* Education Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Education</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase">Academic Qualifications</p>
              </div>
            </div>

            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-blue-600 pl-4 py-1">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block">
                  {edu.period}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">{edu.institution}</p>
                {edu.affiliation && (
                  <p className="text-xs font-medium text-blue-600">{edu.affiliation}</p>
                )}
                <p className="text-xs font-bold text-emerald-600">{edu.score}</p>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience & Key Highlights Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Key Highlights</h3>
                <p className="text-xs text-slate-500 font-semibold uppercase">Experience & Milestones</p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
