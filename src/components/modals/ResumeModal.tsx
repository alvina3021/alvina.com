import React from 'react';
import { ProfileData } from '../../types';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface ResumeModalProps {
  data: ProfileData;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ data, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-wrapper"
        className="bg-slate-100 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scaleIn flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-5 py-3 flex items-center justify-between rounded-t-xl shadow-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Pratinjau CV / Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-900 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-4 sm:p-8 flex-1">
          <div
            id="printable-cv-sheet"
            className="bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-slate-200 text-slate-800 space-y-6 max-w-2xl mx-auto font-sans"
          >
            {/* Header */}
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {data.name}
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">
                {data.title}
              </p>
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {data.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {data.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {data.location}
                </span>
              </div>
            </div>

            {/* Ringkasan */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                Ringkasan Profesional
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.bio}
              </p>
            </div>

            {/* Pengalaman Kerja */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                Pengalaman Kerja
              </h2>
              <div className="space-y-3.5">
                {data.experiences.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 font-semibold text-slate-900">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-xs font-normal text-slate-500">
                        {exp.period.start} - {exp.period.end}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mb-1">{exp.location} • {exp.employmentType}</div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-xs">
                      {exp.highlights.slice(0, 3).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pendidikan */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">
                Pendidikan
              </h2>
              <div className="space-y-2.5">
                {data.educations.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="flex justify-between items-baseline font-semibold text-slate-900">
                      <span>{edu.degree} - {edu.major}</span>
                      <span className="text-xs font-normal text-slate-500">{edu.period.start} - {edu.period.end}</span>
                    </div>
                    <div className="text-slate-500 text-xs">{edu.institution} {edu.gpa && `• IPK: ${edu.gpa}`}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keahlian */}
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                Keahlian & Teknologi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {data.skillCategories.map((cat) => (
                  <div key={cat.id}>
                    <span className="font-semibold text-slate-800">{cat.title}: </span>
                    <span className="text-slate-600">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
