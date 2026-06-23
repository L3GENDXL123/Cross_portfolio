
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
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative group">
            {/* Pulsing card outer shadows */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Visual Frame - Always beautiful frosted white with legible logo */}
            <div className="relative w-72 h-80 rounded-2xl bg-white/95 dark:bg-white/95 backdrop-blur-2xl border border-white dark:border-slate-200/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300">
              
              {/* Shifting background gradient lighting - primary right/left glow behind white card */}
              <motion.div
                className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),rgba(99,102,241,0.08),transparent_65%)] rounded-full filter blur-[35px] pointer-events-none"
                animate={{
                  x: [-50, 50, -50],
                  y: [-15, 15, -15],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Shifting background gradient lighting - secondary opposing glow behind white card */}
              <motion.div
                className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),rgba(236,72,153,0.05),transparent_60%)] rounded-full filter blur-[40px] pointer-events-none"
                animate={{
                  x: [40, -40, 40],
                  y: [15, -15, 15],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Overlay sheen glare lines */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-lg bg-slate-100/90 border border-slate-200/80 flex items-center justify-center font-mono text-xs font-bold text-blue-600 transition-colors duration-300">
                  CW
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-550 font-bold uppercase transition-colors duration-300">
                  BRAND_NODE_ACTIVE
                </span>
              </div>

              {/* Seamless Brand Cross Logo Mark - Forced dark-slate & gold (withn/within white card) */}
              <div className="my-6 flex items-center justify-center relative z-10">
                <CrossWebLogo size={96} isDarkMode={false} />
              </div>

              <div className="space-y-1 relative z-10">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight transition-colors duration-300">Cross_web</h4>
                <p className="text-[10px] text-slate-650 font-mono transition-colors duration-300 font-medium leading-none">Systems Engineering Core Protocol</p>
                <div className="flex gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-1" />
                  <span className="text-[8px] text-green-600 font-mono tracking-wider transition-colors duration-300 font-bold font-mono">SYSTEM ONLINE & COMMITTED</span>
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

          {/* Differentiators & key skills - upgraded to glass UI with side-to-side gradient background behind icons */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/40 dark:bg-[#07070a]/20 backdrop-blur-md border border-white/50 dark:border-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:border-blue-500/20 dark:hover:border-blue-500/20 dark:hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200/60 dark:border-white/10 relative overflow-hidden bg-slate-50/50 dark:bg-white/[0.01]">
                  {/* Micro shifting background gradient lighting beneath the icon */}
                  <motion.div 
                    className="absolute inset-x-[-50%] inset-y-[-50%] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-500/20 dark:via-purple-500/15 dark:to-cyan-500/20 opacity-90 rounded-full"
                    animate={{
                      x: ['-20%', '20%', '-20%'],
                      y: ['-10%', '10%', '-10%'],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative z-10 scale-110">
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white transition-colors duration-300">{skill.name}</h4>
                  <p className="text-[9px] font-mono text-slate-550 dark:text-slate-400 font-medium tracking-tight mt-0.5">{skill.level}</p>
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
                className="text-left relative p-6 bg-white/40 dark:bg-white/[0.01] backdrop-blur-md hover:bg-white/60 dark:hover:bg-white/[0.03] border border-white/60 dark:border-white/5 rounded-2xl group transition-all shadow-sm dark:shadow-none hover:border-slate-350 dark:hover:border-white/10"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden border border-indigo-500/10 bg-slate-50/50 dark:bg-white/[0.01]">
                  {/* Micro shifting background gradient lighting */}
                  <motion.div 
                    className="absolute inset-x-[-40%] inset-y-[-40%] bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 dark:from-indigo-500/15 dark:via-blue-500/15 dark:to-purple-500/15 rounded-full opacity-80"
                    animate={{
                      x: ['-25%', '25%', '-25%'],
                    }}
                    transition={{
                      duration: 5 + idx,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Process;
