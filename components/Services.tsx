
import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Globe, Rocket, Terminal, Layers, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ServicesProps {
  isDarkMode?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const offerings = [
    {
      title: "Startup Launchpad Engine",
      desc: "Instant traction. 2-5 pages containing full architecture, custom animations, rapid load speed, and direct lead generation setup.",
      icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      tag: "SPEED"
    },
    {
      title: "Interactive Web Hardware",
      desc: "For physical or advanced products. Highly immersive layout using fluid interaction design to explain complex engineering.",
      icon: <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      tag: "INTERACTIVE"
    },
    {
      title: "SaaS Product Landing",
      desc: "Hyper-optimized target pages. Clear typographic structure built strictly to drive signups and developer onboarding.",
      icon: <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      tag: "CONVERSION"
    },
    {
      title: "Corporate Portals",
      desc: "A prestigious digital card designed with Swiss minimalism, smooth custom scroll routines, and flawless mobile responsiveness.",
      icon: <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      tag: "DESIGN"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Core Services Section */}
      <div className="text-center mb-20">
        <span className="font-mono text-xs text-blue-600 dark:text-blue-400 tracking-[0.3em] uppercase block mb-3">ENGINEERING SYSTEMS</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">FOCUSED SOLUTIONS</h2>
        <p className="text-slate-650 dark:text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Startups don't reach success with bloated 50-page templates. They scale with high-performance, mobile-first single architectures that dominate conversion records.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerings.map((item, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl glass-morphism border border-slate-200/60 dark:border-white/5 hover:border-blue-500/30 card-glow transition-all duration-300 relative group"
          >
            <div className="absolute top-4 right-4 text-[8px] font-mono tracking-widest text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 font-bold">
              {item.tag}
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/25 group-hover:border-blue-500/20 transition-all">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Services;
