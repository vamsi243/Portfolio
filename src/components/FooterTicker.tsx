import React from 'react';
import { motion } from 'motion/react';

export const FooterTicker = () => {
  const updates = [
    "CURRENT FOCUS: AGENTIC AI & LLM ORCHESTRATION",
    "ROLE: DATA ANALYST 2 @ PKF AUSTRALIA",
    "CORE STACK: PYTHON • LANGCHAIN • SQL • GCP",
    "EDUCATION: M.S. DATA SCIENCE — RMIT UNIVERSITY",
    "AVAILABILITY: OPEN TO STRATEGIC PARTNERSHIPS AND OPPORTUNITIES",
  ];

  return (
    <div className="fixed bottom-0 left-80 right-0 h-12 bg-portfolio-accent flex items-center overflow-hidden z-50 border-t border-white/10">
      <div className="bg-portfolio-ink h-full px-8 flex items-center skew-x-[-20deg] -ml-6 z-10">
        <span className="text-[10px] font-sans font-bold text-white skew-x-[20deg] tracking-[0.2em] uppercase">
          LATEST UPDATES
        </span>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="whitespace-nowrap flex gap-24 py-2"
        >
          {[...updates, ...updates].map((item, i) => (
            <span key={i} className="text-[11px] font-sans font-bold text-white flex items-center gap-4 tracking-wider">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="bg-portfolio-ink h-full px-10 flex items-center skew-x-[-20deg] -mr-6">
        <span className="text-[10px] font-mono text-white skew-x-[20deg] tracking-widest">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} UTC
        </span>
      </div>
    </div>
  );
};
