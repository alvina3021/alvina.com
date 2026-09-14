/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, ProjectItem } from './types';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutPage } from './components/pages/AboutPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { EducationPage } from './components/pages/EducationPage';
import { AwardsPage } from './components/pages/AwardsPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { CertificationsPage } from './components/pages/CertificationsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectModal } from './components/modals/ProjectModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { QuickNotification } from './components/modals/QuickNotification';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('about');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((current) => (current === msg ? null : current));
    }, 3500);
  };

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        activePage={activePage}
        onSelectPage={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        name={portfolioData.name}
        preferredName={portfolioData.preferredName}
        availabilityText={portfolioData.availabilityText}
      />

      {/* 2. Main Content Container - Clean, spacious, uncrowded */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div key={activePage} className="animate-fadeIn">
          {activePage === 'about' && (
            <AboutPage
              data={portfolioData}
              onNavigate={handleNavigate}
              onOpenResume={() => setIsResumeOpen(true)}
              onNotify={showNotification}
            />
          )}

          {activePage === 'experience' && (
            <ExperiencePage
              data={portfolioData}
              onNavigate={handleNavigate}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}

          {activePage === 'education' && (
            <EducationPage
              data={portfolioData}
              onNavigate={handleNavigate}
            />
          )}

          {activePage === 'awards' && (
            <AwardsPage
              data={portfolioData}
              onNavigate={handleNavigate}
            />
          )}

          {activePage === 'projects' && (
            <ProjectsPage
              data={portfolioData}
              onNavigate={handleNavigate}
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {activePage === 'certifications' && (
            <CertificationsPage
              data={portfolioData}
              onNavigate={handleNavigate}
              onNotify={showNotification}
            />
          )}

          {activePage === 'contact' && (
            <ContactPage
              data={portfolioData}
              onNotify={showNotification}
            />
          )}
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer data={portfolioData} onSelectPage={handleNavigate} />

      {/* 4. Modals & Overlay Alerts */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {isResumeOpen && (
        <ResumeModal
          data={portfolioData}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

      {notification && (
        <QuickNotification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
