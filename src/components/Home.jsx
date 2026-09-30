import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
  const { personal, social } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">Hello, I'm</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 text-slate-900 dark:text-white">
                {personal.name}
              </h1>
              <p className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-medium mt-2">
                {personal.title}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-lg">
                {personal.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105"
              >
                View My Work <HiArrowRight size={20} />
              </a>
              <a
                href={personal.resume}
                download
                className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
              >
                <HiDownload size={20} /> Resume
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={social.github} target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href={social.telegram} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile-pic.jpg" 
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${personal.name.replace(' ', '+')}&size=300&background=6366f1&color=fff`;
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Open to Internships
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;