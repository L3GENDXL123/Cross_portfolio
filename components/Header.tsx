
import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import CrossWebLogo from './CrossWebLogo';

interface HeaderProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isDarkMode, toggleDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hidden md:block fixed top-4 left-4 right-4 z-50 max-w-5xl mx-auto">
      <div className="glass-morphism rounded-2xl px-6 py-3.5 shadow-xl border border-slate-200/50 dark:border-white/5 transition-all">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollTo('home')}
          >
            <CrossWebLogo size={28} isDarkMode={isDarkMode} />
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#0f172a] dark:text-white tracking-tighter leading-none flex items-center gap-0.5 group-hover:text-blue-500 transition-colors duration-200">
                Cross<span className="text-blue-600 dark:text-blue-500 animate-pulse">_</span>web
              </span>
              <span className="text-[7.5px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.45em] uppercase mt-0.5">
                Systems Engineering
              </span>
            </div>
          </div>

          {/* Floating Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/50 dark:bg-black/40 p-1 rounded-full border border-slate-300/30 dark:border-white/5 transition-colors">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full ${
                    isActive 
                      ? 'text-slate-900 dark:text-white font-bold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {/* Active highlight Capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-x-0 inset-y-0 bg-white dark:bg-blue-600/20 border border-slate-300 dark:border-blue-500/30 shadow-sm dark:shadow-none rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Theme Switcher and Call Button */}
          <div className="flex items-center gap-3">
            {/* Minimalist Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-200/60 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300/40 dark:hover:bg-white/[0.08] hover:text-blue-600 dark:hover:text-amber-400 border border-slate-300/40 dark:border-white/5 transition-all flex items-center justify-center cursor-pointer"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:scale-[1.03] transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1">
                Start Build
                <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
