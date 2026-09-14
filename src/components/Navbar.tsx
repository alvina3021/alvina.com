import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import {
  Menu,
  X,
  FileText,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
  onOpenResume: () => void;
  name: string;
  preferredName: string;
  availabilityText: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onSelectPage,
  onOpenResume,
  name,
  preferredName,
  availabilityText,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'about', label: 'Tentang' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'awards', label: 'Penghargaan' },
    { id: 'projects', label: 'Projek' },
    { id: 'certifications', label: 'Sertifikasi' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (id: PageId) => {
    onSelectPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider transition-transform group-hover:scale-105">
              {preferredName.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base tracking-tight group-hover:text-indigo-600 transition-colors">
                {name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Web Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-slate-900 font-semibold bg-slate-100'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-slate-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Resume / CV & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              id="header-contact-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>Hubungi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-resume-btn"
              onClick={onOpenResume}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 text-xs font-medium flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Minimal Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-md animate-fadeIn"
        >
          <div className="pb-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{availabilityText}</span>
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 font-medium'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-slate-300">Aktif</span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={onOpenResume}
              className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              Lihat Resume
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
