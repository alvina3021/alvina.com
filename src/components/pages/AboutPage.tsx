import React, { useState } from 'react';
import { ProfileData, PageId } from '../../types';
import {
  MapPin,
  Mail,
  ArrowRight,
  Code2,
  Download,
  Zap,
  Layout,
  MessageSquare,
  Server,
  Cloud,
  Monitor,
  Check
} from 'lucide-react';

interface AboutPageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  data,
  onNavigate,
  onOpenResume,
  onNotify,
}) => {
  const [activeSkillTab, setActiveSkillTab] = useState<string>(data.skillCategories[0]?.id || 'frontend');

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    onNotify('Email berhasil disalin ke clipboard!');
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-4 h-4 text-slate-700" />;
      case 'Server':
        return <Server className="w-4 h-4 text-slate-700" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-slate-700" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-700" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-slate-800" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-slate-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-slate-800" />;
      case 'MessageSquareCheck':
        return <MessageSquare className="w-5 h-5 text-slate-800" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-800" />;
    }
  };

  const activeCategory = data.skillCategories.find((c) => c.id === activeSkillTab) || data.skillCategories[0];

  return (
    <div id="about-page-container" className="space-y-16 py-2">
      {/* 1. Hero / Profile Header - Clean & Minimalist */}
      <section id="hero-profile-section" className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-between">
          {/* Avatar & Availability */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={data.avatarUrl}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{data.availability}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {data.name}
              </h1>
              <p className="text-sm font-medium text-slate-600">
                {data.title}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{data.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Actions */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-center">
            <button
              id="about-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>Hubungi Saya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="about-open-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Pratinjau CV</span>
            </button>

            <button
              id="about-copy-email-badge-btn"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              title="Salin alamat email"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{data.email}</span>
            </button>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          {data.bio}
        </p>

        {/* Minimalist Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-200/80">
          <div>
            <div className="text-2xl font-bold text-slate-900">
              {data.yearsOfExperience}+ Tahun
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Pengalaman Kerja
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">
              {data.completedProjectsCount}+ Projek
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Aplikasi Web Selesai
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">
              {data.certificationsCount} Sertifikasi
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Kompetensi Resmi
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">
              100%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Komitmen Kualitas
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Bio Story */}
      <section id="detailed-bio-section" className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          Latar Belakang & Perjalanan
        </h2>
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base max-w-3xl">
          {data.detailedBio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 3. Keahlian & Teknologi (Skills) */}
      <section id="skills-stack-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Keahlian & Penguasaan Teknologi
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Teknologi utama yang digunakan dalam pengembangan aplikasi web modern.
            </p>
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex items-center gap-1">
            {data.skillCategories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveSkillTab(cat.id)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  activeSkillTab === cat.id
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Skills List */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-5">
            {getCategoryIcon(activeCategory.icon)}
            <span className="font-semibold text-sm text-slate-900">{activeCategory.title}</span>
            <span className="text-xs text-slate-400 ml-auto hidden sm:inline">{activeCategory.description}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-lg bg-slate-50/70 border border-slate-100 flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs sm:text-sm text-slate-800">{skill.name}</span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {skill.experienceYears}
                  </span>
                </div>
                <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-slate-900 h-full rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Nilai Kerja & Prinsip Pengembangan */}
      <section id="core-values-section" className="space-y-6">
        <div className="pb-2 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Prinsip & Nilai Kerja
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Standar profesional yang saya pegang dalam setiap proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Minimal Next Links */}
      <section className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-500">
          Ingin melihat detail riwayat pekerjaan atau projek nyata?
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('experience')}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg cursor-pointer transition-colors"
          >
            Lihat Pengalaman
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
          >
            Lihat Projek
          </button>
        </div>
      </section>
    </div>
  );
};
