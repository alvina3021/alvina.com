import React from 'react';
import { ProfileData, PageId } from '../../types';
import {
  Trophy,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface AwardsPageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({ data, onNavigate }) => {
  return (
    <div id="awards-page-container" className="space-y-12 py-2">
      {/* Header */}
      <section className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Penghargaan & Prestasi
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Apresiasi dan pencapaian kompetisi inovasi perangkat lunak dan keunggulan teknologi.
        </p>
      </section>

      {/* Awards Grid - Clean & Minimalist */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.awards.map((award) => (
          <div
            key={award.id}
            id={`award-card-${award.id}`}
            className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-700">
                  Tingkat {award.level}
                </span>
                <span>{award.month ? `${award.month} ` : ''}{award.year}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 leading-snug">
                    {award.title}
                  </h2>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {award.issuer}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {award.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terverifikasi</span>
              </span>
              <span>{award.category}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Next page guide */}
      <section className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Jelajahi portofolio projek web dan karya nyata?
        </span>
        <button
          id="awards-to-projects-btn"
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <span>Projek</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
