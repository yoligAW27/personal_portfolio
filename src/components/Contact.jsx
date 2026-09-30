import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal, social } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          Have a question, project idea, or internship opportunity? Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Let's Build Something</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm always open to interesting conversations, collaboration opportunities, and new projects.
              </p>

              <div className="space-y-4">
                <a href={`mailto:${personal.email}`} 
                   className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-indigo-600 hover:text-white transition-all group">
                  <HiMail size={24} className="group-hover:text-white" />
                  <span>{personal.email}</span>
                </a>
                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <HiLocationMarker size={24} />
                  <span>AA,Ethiopia</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href={social.github} target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                  <FaGithub size={24} />
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                  <FaLinkedin size={24} />
                </a>
                <a href={social.telegram} target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                  <FaTelegram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900 dark:text-white"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  status === 'sending' 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
                } text-white`}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    Send Message <HiPaperAirplane size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;