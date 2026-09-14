import React, { useState } from 'react';
import { ProfileData, PageId } from '../../types';
import {
  Award,
  ExternalLink,
  Search,
  ArrowRight,
  Copy
} from 'lucide-react';

interface CertificationsPageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
  onNotify: (msg: string) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({
  data,
  onNavigate,
  onNotify,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Web Development', 'Cloud & DevOps', 'Software Engineering'];

  const filteredCerts = data.certifications.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'Semua' || cert.category === selectedCategory;

    const matchesSearch =
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skillsCovered.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const copyCredentialId = (id: string) => {
    navigator.clipboard.writeText(id);
    onNotify(`ID Kredensial "${id}" berhasil disalin!`);
  };

  return (
    <div id="certifications-page-container" className="space-y-10 py-2">
      {/* Header & Filter Controls */}
      <section className="space-y-4">
        <div className="pb-4 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Sertifikasi Keahlian
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Lisensi kompetensi industri terverifikasi dari Google Cloud, AWS, Meta, dan BNSP.
          </p>
        </div>

        {/* Category & Search Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cert-cat-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="cert-search-input"
              type="text"
              placeholder="Cari sertifikasi / penerbit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 text-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Certifications Grid - Clean & Minimalist */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            id={`cert-card-${cert.id}`}
            className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-slate-500">
                    {cert.issuer}
                  </span>
                  <h2 className="text-base font-bold text-slate-900 leading-snug">
                    {cert.name}
                  </h2>
                </div>
                <Award className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                <span>ID: {cert.credentialId}</span>
                <button
                  id={`copy-cert-id-${cert.id}`}
                  onClick={() => copyCredentialId(cert.credentialId)}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                  title="Salin ID"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>

              {cert.verificationUrl && (
                <a
                  id={`cert-verify-${cert.id}`}
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium text-xs"
                >
                  <span>Verifikasi</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Next page guide */}
      <section className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Tertarik untuk berdiskusi atau memulai kolaborasi?
        </span>
        <button
          id="certs-to-contact-btn"
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <span>Kontak</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
