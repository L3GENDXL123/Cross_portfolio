import React from 'react';
import { motion } from 'motion/react';

interface CrossWebLogoProps {
  size?: number;
  withText?: boolean;
  withSlogan?: boolean;
  isDarkMode?: boolean;
  className?: string;
}

const CrossWebLogo: React.FC<CrossWebLogoProps> = ({
  size = 120,
  withText = false,
  withSlogan = false,
  isDarkMode = true,
  className = "",
}) => {
  // Brand colors: luxury bronze/brown and professional dark slate
  const colorDark = "fill-[#1e1e24] dark:fill-[#ffffff]";
  const colorGold = "fill-[#8e6e53]";

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Interactive logo vector */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{ width: size, height: size }}
        className="relative"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-xl"
        >
          {/* Top vertical segment: Dark slate / White in dark-mode */}
          <motion.path
            d="M 52,48 L 52,26 L 60,15 L 60,48 Z"
            className={`${colorDark} transition-colors duration-300`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          {/* Left horizontal segment: Dark slate / White in dark-mode */}
          <motion.path
            d="M 60,48 L 32,48 L 43,56 L 60,56 Z"
            className={`${colorDark} transition-colors duration-300`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Right horizontal segment: Rich luxury bronze-gold */}
          <motion.path
            d="M 60,48 L 88,48 L 79,56 L 60,56 Z"
            className={colorGold}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Bottom vertical segment: Rich luxury bronze-gold */}
          <motion.path
            d="M 52,48 L 60,48 L 60,90 L 52,98 Z"
            className={colorGold}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Subtle glow / central overlap accent indicator */}
          <circle cx="56" cy="52" r="1.5" className="fill-[#8e6e53] opacity-40 animate-pulse" />
        </svg>
      </motion.div>

      {/* Brand typographic identifiers */}
      {withText && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 flex flex-col items-center"
        >
          <span className="font-sans text-lg font-black tracking-[0.45em] text-[#0f172a] dark:text-white uppercase select-none mr-[-0.45em]">
            CROSS_WEB
          </span>
          {withSlogan && (
            <span className="font-mono text-[8px] font-bold text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase mt-2 select-none">
              BUILDING SOLUTIONS. ELEVATING IDEAS.
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CrossWebLogo;
