
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Code2, Cpu, Eye } from 'lucide-react';
import CrossWebLogo from './CrossWebLogo';

interface ProcessProps {
  isDarkMode?: boolean;
}

const Process: React.FC<ProcessProps> = ({ isDarkMode }) => {
  const steps = [
    {
      title: "Synthesize",
      desc: "We align on absolute core needs and specify the high-converting 2-5 pages of your system."
    },
    {
      title: "Wire & Wireframe",
      desc: "Creating high-fidelity glassmorphic designs matching exact visual brand identities."
    },
    {
      title: "Engine Code",
      desc: "Fast, production-grade programming using optimized React patterns & zero legacy clutter."
    },
    {
      title: "Immediate Launch",
      desc: "Deploying directly to high-speed CDN nodes. Active and streaming online in days."
    }
  ];

  const skills = [
    { name: "Systems Architecture", level: "Senior", icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: "Frontend Engineering", level: "Expert", icon: <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
    { name: "Speed Optimization", level: "100 Score", icon: <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> },
    { name: "Fluid Interactions", level: "Premium", icon: <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Personal Brand Section: "I transform ideas into experiences..." */}
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-32 pb-12 border-b border-slate-200 dark:border-white/5">
        
        {/* Left column: Visual Avatar / Brand Badge */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Visual Frame - Now beautiful white in light mode, dark in dark mode */}
            <div className="relative w-72 h-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.05] dark:bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center font-mono text-xs font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  CW
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 dark:text-slate-400 font-bold uppercase transition-colors duration-300">
                  BRAND_NODE_ACTIVE
                </span>
              </div>

              {/* Seamless Brand Cross Logo Mark */}
              <div className="my-6 flex items-center justify-center">
                <CrossWebLogo size={96} isDarkMode={isDarkMode} />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors duration-300">Cross_web</h4>
                <p className="text-[10px] text-slate-600 dark:text-slate-300 font-mono transition-colors duration-300 font-medium">Systems Engineering Core Protocol</p>
                <div className="flex gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-1" />
                  <span className="text-[8px] text-green-600 dark:text-green-400 font-mono tracking-wider transition-colors duration-300 font-bold">SYSTEM ONLINE & COMMITTED</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right column: Copious Branding Statement */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs text-blue-600 dark:text-blue-400 tracking-[0.3em] uppercase block font-bold">
            THE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
            I TRANSFORM IDEAS <br />
            INTO EXPERIENCES.
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            I don't just build websites; I engineer interactive architectures that command attention. By trimming unnecessary technical noise and focusing strictly on optimized 2-to-5 page client loops, I produce fast, responsive web systems that perform flawlessly.
          </p>

          {/* Differentiators & key skills */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/10 hover:shadow-md dark:hover:shadow-none transition-all">
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/[0.04] flex items-center justify-center border border-slate-200 dark:border-white/10">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white">{skill.name}</h4>
                  <p className="text-[9px] font-mono text-slate-500">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 2. Streamlined Process Tracker */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 tracking-[0.3em] uppercase block mb-3">ROADMAP</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">HOW WE BUILD SYSTEMS</h2>
          <p className="text-slate-650 dark:text-slate-400 max-w-md mx-auto text-xs mt-3">
            Minimalist concepts request a minimalist operation. Accurate design sprints ensure direct speed-to-market.
          </p>
        </div>

        <div className="relative">
          {/* Subtle line connect */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[1px] bg-slate-200 dark:bg-white/5 -z-10"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-left relative p-6 bg-white dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl group transition-all shadow-sm dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-indigo-500/20 flex items-center justify-center mb-6 shadow-md dark:shadow-xl dark:shadow-indigo-950/20">
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Process;
