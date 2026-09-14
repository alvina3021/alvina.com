import React, { useState } from 'react';
import { ProfileData, PageId, ProjectItem } from '../../types';
import {
  Search,
  ExternalLink,
  Github,
  ArrowRight,
  Eye,
  FolderGit2
} from 'lucide-react';

interface ProjectsPageProps {
  data: ProfileData;
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  data,
  onNavigate,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Web App', 'Full Stack'];

  const filteredProjects = data.projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'Semua' || project.category === activeCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div id="projects-page-container" className="space-y-10 py-2">
      {/* Header & Filter Controls */}
      <section className="space-y-4">
        <div className="pb-4 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Projek Terpilih
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Koleksi aplikasi web produksi dan arsitektur sistem yang telah diselesaikan.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-cat-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Cari nama projek / teknologi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 text-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid - Clean & Minimalist */}
      {filteredProjects.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-slate-900/90 text-white rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-base font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`view-detail-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-medium text-slate-700 hover:text-slate-900 cursor-pointer flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Detail</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {project.githubUrl && (
                    <a
                      id={`project-card-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      id={`project-card-live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-2">
          <FolderGit2 className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-xs text-slate-500">
            Tidak ditemukan projek dengan filter saat ini.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Semua');
            }}
            className="text-xs font-medium text-slate-900 underline cursor-pointer"
          >
            Reset filter
          </button>
        </div>
      )}

      {/* Next page guide */}
      <section className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Periksa sertifikasi lisensi profesional resmi?
        </span>
        <button
          id="projects-to-certifications-btn"
          onClick={() => onNavigate('certifications')}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <span>Sertifikasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
