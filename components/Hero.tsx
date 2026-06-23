
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';
import CrossWebLogo from './CrossWebLogo';

interface HeroProps {
  isDarkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  // Generate some coordinates for quiet tech-minimal particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 2,
  }));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen pt-44 pb-24 overflow-hidden flex flex-col justify-center bg-transparent transition-colors duration-300">
      
      {/* Background radial soft light blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/[0.08] dark:bg-blue-600/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.08] dark:bg-indigo-600/[0.04] blur-[150px] pointer-events-none" />
      
      {/* Floating Ambient Web-Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-500/20 dark:bg-blue-500/15"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full flex flex-col items-center">
        
        {/* Dynamic Interactive Brand Logo Widget */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 pointer-events-auto"
        >
          <CrossWebLogo size={130} isDarkMode={isDarkMode} withText={true} withSlogan={true} />
        </motion.div>

        {/* Accepting status badge with pulse */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 dark:border-blue-500/10 bg-blue-500/10 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.35em] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Interface Architects
        </motion.div>
        
        {/* Large Cinema Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] select-none text-slate-900 dark:text-white">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            BEAUTIFUL SITES
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 text-glow"
          >
            THAT FEEL ALIVE.
          </motion.span>
        </h1>
        
        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-8 mb-12 font-medium leading-relaxed"
        >
          At <span className="text-slate-900 dark:text-white font-semibold">Cross_web</span>, we program award-winning, interactive digital solutions for startups and ambitious tech creators. Premium performance meets cinematic design.
        </motion.p>
        
        {/* Styled action triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Main call button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4.5 bg-slate-900 dark:bg-white text-white dark:text-black font-black text-sm rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-blue-500/10 overflow-hidden flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Inquire a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          {/* Secondary WhatsApp button */}
          <a 
            href="https://wa.me/2348028713828"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4.5 bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-neutral-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 rounded-xl font-bold text-sm transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            Quick WhatsApp
          </a>
        </motion.div>
        
        {/* Luxury metrics row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-4xl mx-auto border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] p-8 rounded-3xl backdrop-blur-md shadow-sm dark:shadow-none"
        >
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-black tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1">CAPACITY</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">2-5 PAGES</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-black tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-1">TECH</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">REACT 19</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-black tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-1">PERFORMANCE</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">100 SCORE</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono text-[9px] font-black tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-1">AVAILABILITY</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">OPEN NOW</span>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
