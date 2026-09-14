import React from 'react';
import { ProfileData, PageId } from '../../types';
import {
  MapPin,
  BookOpen,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface EducationPageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ data, onNavigate }) => {
  return (
    <div id="education-page-container" className="space-y-12 py-2">
      {/* Header */}
      <section className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Pendidikan & Pelatihan
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Latar belakang akademik dan program akselerasi rekayasa perangkat lunak.
        </p>
      </section>

      {/* Education Cards */}
      <section className="space-y-8">
        {data.educations.map((edu) => (
          <div
            key={edu.id}
            id={`education-card-${edu.id}`}
            className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg font-bold text-slate-900">
                    {edu.major}
                  </h2>
                  {edu.gpa && (
                    <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                      IPK: {edu.gpa} {edu.gpaScale && `/ ${edu.gpaScale}`}
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-slate-700">
                  {edu.institution} • <span className="text-slate-500">{edu.degree}</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 sm:text-right">
                <span>{edu.period.start} — {edu.period.end}</span>
                <span className="block text-[11px] text-slate-400">{edu.location}</span>
              </div>
            </div>

            {/* Skripsi / Thesis */}
            {edu.thesisTitle && (
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm space-y-1">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span>Skripsi: "{edu.thesisTitle}"</span>
                </div>
                {edu.thesisDescription && (
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {edu.thesisDescription}
                  </p>
                )}
              </div>
            )}

            {/* Courses */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-900">
                Mata Kuliah Relevan:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {edu.relevantCourses.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs bg-slate-100 text-slate-600 rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Honors */}
            {edu.honors && edu.honors.length > 0 && (
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500">Predikat:</span>
                {edu.honors.map((honor, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-amber-50 text-amber-800 rounded border border-amber-200/60"
                  >
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>{honor}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Next page guide */}
      <section className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Lihat daftar penghargaan dan pencapaian kompetisi?
        </span>
        <button
          id="edu-to-awards-btn"
          onClick={() => onNavigate('awards')}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <span>Penghargaan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
