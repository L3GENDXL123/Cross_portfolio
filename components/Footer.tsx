import React from 'react';
import { motion } from 'motion/react';
import { Github, MessageSquare, Terminal, Eye } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className="bg-[#f1f5f9] dark:bg-[#050505] py-20 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/[0.04] dark:bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                  Cross<span className="text-blue-600 dark:text-blue-500 animate-pulse">_</span>web
                </span>
                <span className="text-[7.5px] font-bold text-slate-500 tracking-[0.45em] uppercase mt-1">
                  Systems Engineering
                </span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-xs">
              Designing and coding high-speed, interactive web architectures for the next generation of product creators. We transform concepts into responsive luxury entities.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[9px] font-black text-slate-500 mb-6 uppercase tracking-widest">ARCHITECTURE</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Startup Launchpads</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Product Showcases</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Portfolio Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9px] font-black text-slate-500 mb-6 uppercase tracking-widest">PROTOCOL LINK</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <li><a href="https://wa.me/2348028713828" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">WhatsApp Secure</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Source Control</a></li>
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Main Node</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} CROSS_WEB // COMPILING EXCELLENCE SECURELY
          </p>
          <div className="flex gap-6 text-[9px] font-mono uppercase tracking-widest text-slate-500">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">PRIVACY_POLICY</span>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
