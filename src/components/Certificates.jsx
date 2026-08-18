import { useState } from 'react';
import { Award, ArrowRight, Eye, Calendar, Building2, ShieldCheck, UserCheck } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 text-center sm:text-left">
          <div className="space-y-2">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-200/60">
              Verified Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5 justify-center sm:justify-start">
              Certificates
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-bold text-sm transition-all border border-slate-200"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Certificates Grid (1 col on mobile, 2 cols on md, 3 cols on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Real Certificate Image Preview Container (object-contain so no text is cropped!) */}
                <div className="relative h-56 w-full bg-slate-900/90 p-3 flex items-center justify-center border-b border-slate-200/80 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full w-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-600/90 text-white backdrop-blur-md shadow-xs flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2" title={cert.title}>
                      {cert.title}
                    </h3>
                  </div>

                  <div className="space-y-1.5 text-xs font-medium text-slate-600">
                    <p className="flex items-center gap-2 text-slate-800">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </p>
                    <p className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Issued: {cert.date}</span>
                    </p>
                    {cert.validUntil && (
                      <p className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Valid Until: {cert.validUntil}</span>
                      </p>
                    )}
                    {cert.signatory && (
                      <p className="flex items-start gap-2 text-slate-500">
                        <UserCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2"><span className="font-semibold text-slate-700">Signatory:</span> {cert.signatory}</span>
                      </p>
                    )}
                  </div>

                  {cert.description && (
                    <p className="text-slate-600 text-sm font-normal leading-[1.65] pt-1 line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>

              {/* View Certificate Action Button */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  View Certificate
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Lightbox Viewer Modal */}
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
}
