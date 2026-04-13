import React from 'react';
import { motion } from 'motion/react';
import { PROFESSIONAL_INFO } from '../constants';
import { Shield } from 'lucide-react';

export function PlayerCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="prof-card relative w-72 h-96 overflow-hidden bg-gradient-to-br from-portfolio-accent/10 to-transparent p-6 text-portfolio-ink flex flex-col justify-between items-center group cursor-pointer"
    >
      <div className="absolute top-0 right-0 p-4 opacity-50"><Shield className="w-8 h-8"/></div>
      <div className="text-center mt-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight">{PROFESSIONAL_INFO.name}</h2>
        <p className="text-sm tracking-widest text-portfolio-muted uppercase mt-2">{PROFESSIONAL_INFO.title}</p>
      </div>
      
      <div className="w-full bg-white/50 rounded-xl p-4 backdrop-blur-sm border border-portfolio-border">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(PROFESSIONAL_INFO.stats).slice(0,4).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-[10px] uppercase text-portfolio-muted mb-1">{key}</span>
              <span className="text-lg font-bold font-mono">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
