import React, { useState } from 'react';
import { ProfileData, PageId } from '../../types';
import {
  MapPin,
  Building2,
  Check,
  FileText,
  ArrowRight
} from 'lucide-react';

interface ExperiencePageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  data,
  onNavigate,
  onOpenResume,
}) => {
  const [filterType, setFilterType] = useState<string>('Semua');
  const filterOptions = ['Semua', 'Full-time', 'Contract', 'Internship'];

  const filteredExperiences = data.experiences.filter((exp) => {
    if (filterType === 'Semua') return true;
    return exp.employmentType.toLowerCase() === filterType.toLowerCase();
  });

  return (
    <div id="experience-page-container" className="space-y-12 py-2">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Pengalaman Kerja
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Riwayat karir profesional dalam rekayasa perangkat lunak dan arsitektur web.
            </p>
          </div>

          <button
            id="experience-open-cv-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Lihat Resume Lengkap</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5">
          {filterOptions.map((type) => (
            <button
              key={type}
              id={`filter-exp-${type}`}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                filterType === type
                  ? 'bg-slate-900 text-white font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {type}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline">
            {filteredExperiences.length} posisi
          </span>
        </div>
      </section>

      {/* Experience List - Clean & Minimalist */}
      <section id="experience-timeline" className="space-y-8">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            id={`experience-item-${exp.id}`}
            className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4"
          >
            {/* Role, Company & Date */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg font-bold text-slate-900">
                    {exp.role}
                  </h2>
                  {exp.period.isCurrent && (
                    <span className="px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
                      Aktif
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location} ({exp.locationType})
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 sm:text-right">
                <span className="font-medium text-slate-700">{exp.period.start} — {exp.period.end}</span>
                <span className="block text-[11px] text-slate-400">{exp.period.duration}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {exp.summary}
            </p>

            {/* Responsibilities */}
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-semibold text-slate-900 mb-1">
                Kontribusi Utama:
              </div>
              <ul className="space-y-1.5">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Next page guide */}
      <section className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Lanjut ke riwayat latar belakang akademik?
        </span>
        <button
          id="exp-to-education-btn"
          onClick={() => onNavigate('education')}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <span>Pendidikan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
