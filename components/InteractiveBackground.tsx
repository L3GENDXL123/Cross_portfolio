import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveBackgroundProps {
  isDarkMode: boolean;
}

interface TouchPulse {
  id: string;
  x: number;
  y: number;
  color: string;
  size: number;
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ isDarkMode }) => {
  const [pulses, setPulses] = useState<TouchPulse[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Vibrant, glowing color schemes for touch pulses under glass
  const colors = [
    'rgba(59, 130, 246, 0.48)',  // Electric Blue
    'rgba(147, 51, 234, 0.48)',  // Cyber Purple
    'rgba(6, 182, 212, 0.48)',   // Neon Cyan
    'rgba(251, 191, 36, 0.50)',  // Luminous Solar Yellow
    'rgba(244, 63, 94, 0.48)',   // Vibrant Rose Pink
    'rgba(249, 115, 22, 0.48)',  // Bright Sunrise Orange
  ];

  useEffect(() => {
    // Generate a random unique pulse ID
    const addPulse = (clientX: number, clientY: number) => {
      const id = `${Date.now()}-${Math.random()}`;
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      // Randomize size slightly for an organic feel
      const randomSize = Math.floor(Math.random() * 120) + 220; // 220px to 340px glow radius

      const newPulse: TouchPulse = {
        id,
        x: clientX,
        y: clientY,
        color: randomColor,
        size: randomSize,
      };

      setPulses((prev) => [...prev.slice(-12), newPulse]); // Keep last 12 pulses max for performance

      // Automatically clean up pulse after animation is complete
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== id));
      }, 4000);
    };

    const handleClick = (e: MouseEvent) => {
      // Don't spawn pulses if they click on active inputs or buttons to avoid visual obstruction
      const target = e.target as HTMLElement;
      if (target.closest('button, input, textarea, a, select')) {
        return;
      }
      addPulse(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addPulse(touch.clientX, touch.clientY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      
      {/* LAYER 1: Deep, high-contrast base background floor */}
      <div className="absolute inset-0 bg-[#f4f7fa] dark:bg-[#030305] transition-colors duration-500" />

      {/* LAYER 2: THE GRADIENT LIGHT SHOW (Orbits and shifts behind the glass lens) */}
      <div className="absolute inset-0 opacity-80 select-none">
        
        {/* Orb A: Neon Royal Blue */}
        <motion.div
          className="absolute w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.22),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_70%)]"
          style={{ top: '10%', left: '5%' }}
          animate={{
            x: [0, 90, -50, 0],
            y: [0, -70, 90, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb B: Cyber Indigo / Violet */}
        <motion.div
          className="absolute w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(124,58,237,0.24),transparent_70%)]"
          style={{ bottom: '25%', right: '10%' }}
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 90, -80, 0],
            scale: [1.1, 0.95, 1.25, 1.1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb C: Complementary Neon Pink / Rose Glow */}
        <motion.div
          className="absolute w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.15),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(244,63,94,0.22),transparent_65%)]"
          style={{ top: '35%', right: '25%' }}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, 100, -60, 0],
            scale: [0.95, 1.15, 0.85, 0.95],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb D: Luminous Solar Yellow Glow */}
        <motion.div
          className="absolute w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(251,191,36,0.24),transparent_65%)]"
          style={{ bottom: '8%', left: '15%' }}
          animate={{
            x: [0, -60, 110, 0],
            y: [0, -90, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb E: Energetic Amber / Sunrise Orange */}
        <motion.div
          className="absolute w-[26rem] h-[26rem] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.13),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(249,115,22,0.18),transparent_65%)]"
          style={{ top: '50%', left: '35%' }}
          animate={{
            x: [-60, 60, -60],
            y: [40, -40, 40],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* MOUSE-TRACKING GLOW: Dynamic interactive light that hovers behind glass */}
        {isHovering && (
          <motion.div
            className="absolute rounded-full pointer-events-none filter blur-[50px]"
            animate={{
              x: mousePos.x - 150,
              y: mousePos.y - 150,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            style={{
              width: '300px',
              height: '300px',
              background: isDarkMode
                ? 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(147,51,234,0.08) 50%, transparent 100%)'
                : 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(6,182,212,0.06) 50%, transparent 100%)',
            }}
          />
        )}

        {/* RIPPLES / PULSES SPANNING ON USER CLICKS & TOUCHES */}
        <AnimatePresence>
          {pulses.map((pulse) => (
            <motion.div
              key={pulse.id}
              className="absolute rounded-full pointer-events-none filter blur-[40px]"
              initial={{
                x: pulse.x - pulse.size / 2,
                y: pulse.y - pulse.size / 2,
                scale: 0.1,
                opacity: 0,
              }}
              animate={{
                scale: 1.3,
                opacity: [0, 0.85, 0.4, 0],
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 3.5,
                ease: "easeOut",
              }}
              style={{
                width: `${pulse.size}px`,
                height: `${pulse.size}px`,
                background: `radial-gradient(circle, ${pulse.color} 0%, transparent 70%)`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* LAYER 3: APPLE IOS style heavy glass panel lens */}
      <div 
        className="absolute inset-0 backdrop-blur-[70px] sm:backdrop-blur-[115px] bg-white/[0.22] dark:bg-[#030305]/[0.48] transition-colors duration-500" 
        style={{
          boxShadow: 'inset 0 0 100px rgba(255,255,255,0.03)',
        }}
      />

      {/* Subtle organic noise or geometric pattern overlaid above the glass layer for tactility */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
        style={{ 
          backgroundImage: isDarkMode ? 'radial-gradient(#ffffff 1px, transparent 1px)' : 'radial-gradient(#0f172a 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />

    </div>
  );
};
