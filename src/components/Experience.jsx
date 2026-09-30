import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          Experience & Education
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          My journey in tech — from academic research to real-world projects
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-indigo-600 pl-8 space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-11 top-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900"></div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <FaCalendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;