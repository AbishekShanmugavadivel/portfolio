import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3.5 py-1 rounded-full inline-block border border-blue-200/60">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            A showcase of 4 full-stack web applications and AI-powered solutions I have engineered and deployed live.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Projects Grid: 1-column mobile, 2-column md/lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Real Project Screenshot Image */}
                <div className="w-full aspect-[16/10] sm:h-[220px] overflow-hidden bg-slate-100 relative rounded-t-3xl border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/20 tracking-wider shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-[1.65] min-h-[48px]">
                    "{project.description}"
                  </p>

                  {/* Technology Tags Badges */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  title="View Details"
                  aria-label={`Overview of ${project.title}`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Overview</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal Viewer */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
