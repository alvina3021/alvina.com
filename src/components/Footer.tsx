import React from 'react';
import { PageId, ProfileData } from '../types';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  data: ProfileData;
  onSelectPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onSelectPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'Tentang' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'awards', label: 'Penghargaan' },
    { id: 'projects', label: 'Projek' },
    { id: 'certifications', label: 'Sertifikasi' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <footer id="main-footer" className="border-t border-slate-200 bg-white mt-16 text-slate-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand & Title */}
          <div className="text-center sm:text-left">
            <span className="font-bold text-slate-900 text-sm">
              {data.name}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">
              {data.title}
            </span>
          </div>

          {/* Minimalist Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`footer-nav-${link.id}`}
                onClick={() => {
                  onSelectPage(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials & Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/wardanitikna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/wardanitikna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="text-slate-400 hover:text-slate-800 p-1 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-slate-800 p-1 transition-colors cursor-pointer ml-2"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {data.name}. Portofolio Profesional.
          </div>
          <div>
            Tersedia untuk proyek & kolaborasi
          </div>
        </div>
      </div>
    </footer>
  );
};
