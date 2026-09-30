import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container-custom text-center">
        <p className="text-sm">
          © {year} {personal.name}
      
        </p>
        <p className="text-xs mt-2 text-slate-600">
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;