
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  // Mouse position for springed pointer accents
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 text-[#0f172a] dark:text-[#f8fafc] transition-colors duration-300 bg-transparent">
      
      {/* Dynamic interactive glass background layer with shifting light gradients and click/touch pulses */}
      <InteractiveBackground isDarkMode={isDarkMode} />

      {/* Auxiliary interactive tracking aura element */}
      <motion.div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/10 blur-[80px]"
        style={{
          x: springX,
          y: springY,
        }}
      />

      <Header activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero isDarkMode={isDarkMode} />
        </section>
        
        <section id="services" className="py-24 border-t border-slate-200/50 dark:border-white/5 relative bg-transparent">
          <Services isDarkMode={isDarkMode} />
        </section>
        
        <section id="process" className="py-24 border-t border-slate-200/50 dark:border-white/5 relative bg-transparent">
          <Process isDarkMode={isDarkMode} />
        </section>
        
        <section id="contact" className="py-24 border-t border-slate-200/50 dark:border-white/5 relative bg-transparent">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
