import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          Each project demonstrates my ability to combine web development, machine learning, and real-world problem solving
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} 
                 className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
              
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${project.title.replace(' ', '+')}`;
                  }}
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} 
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all text-slate-700 dark:text-slate-300">
                    <FaGithub size={18} /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
                      <FaExternalLinkAlt size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
            >
              {showAll ? (
                <>Show Less <FaChevronUp size={20} /></>
              ) : (
                <>View All Projects <FaChevronDown size={20} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
