import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { key: 'web', label: 'Web Development' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'backend', label: 'backend' },
    { key: 'tools', label: 'DevOps & Tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          My Tech Stack
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          Technologies I work with to build full-stack AI-powered applications
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
