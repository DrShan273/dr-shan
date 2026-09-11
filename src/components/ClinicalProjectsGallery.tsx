import React, { useState, useMemo } from 'react';
import { 
  FolderKanban, 
  Search, 
  Building2, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { CLINICAL_PROJECTS } from '../data/clinicalData';
import { ClinicalProject, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ClinicalProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<ClinicalProject | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Emergency & Triage',
    'Quality Improvement',
    'Inpatient Care',
    'Clinical Audits',
    'Community Health'
  ];

  const filteredProjects = useMemo(() => {
    return CLINICAL_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.summary.toLowerCase().includes(q) ||
        proj.department.toLowerCase().includes(q) ||
        proj.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <FolderKanban className="w-3.5 h-3.5 text-teal-600" />
            Clinical Evidence & Quality Improvement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gallery of Clinical Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Case audits, emergency triage optimization protocols, and quality improvement initiatives spearheaded at Bahawal Victoria Hospital (BVH).
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="search-clinical-projects"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by diagnosis, protocol, tag (e.g. Sepsis, ECG, DKA)..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-xs font-semibold text-slate-500 self-center md:self-auto">
              Showing <span className="text-teal-700 font-bold">{filteredProjects.length}</span> of {CLINICAL_PROJECTS.length} clinical projects
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No clinical projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No audits matched your search criteria. Try modifying your search keywords or resetting categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-700 bg-white border border-teal-200 rounded-lg hover:bg-teal-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <article 
                key={project.id}
                id={`project-card-${project.id}`}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Image Header */}
                <div className="relative h-48 bg-slate-100 overflow-hidden shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white shadow-xs">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hospital & Year in Image Bottom */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs flex items-center justify-between">
                    <span className="flex items-center gap-1 text-slate-200 font-medium truncate">
                      <Building2 className="w-3 h-3 text-teal-300 shrink-0" />
                      {project.department}
                    </span>
                    <span className="text-slate-300 font-semibold shrink-0">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlight Metric Pill */}
                  {project.keyMetrics[0] && (
                    <div className="bg-teal-50/70 rounded-xl p-2.5 border border-teal-100 flex items-center justify-between text-left">
                      <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                        {project.keyMetrics[0].label}:
                      </span>
                      <span className="text-sm font-extrabold text-teal-800">
                        {project.keyMetrics[0].value}
                      </span>
                    </div>
                  )}

                  {/* Tag chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link to Open Modal */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      id={`view-case-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-700 hover:text-white transition-all group-hover:bg-teal-700 group-hover:text-white"
                    >
                      <span>Explore Case Study & Findings</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal for detailed view */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
};
