import React from 'react';
import { motion } from 'motion/react';
import { PROFESSIONAL_INFO } from '../constants';

export function ScoutReport() {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-bold text-portfolio-ink">Scout <span className="text-portfolio-accent">Report</span></h2>
        <div className="flex-1 h-px bg-portfolio-border" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prof-card p-10 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-sans font-bold text-portfolio-muted tracking-widest uppercase mb-6">Executive Summary</h3>
            <p className="text-lg text-portfolio-ink leading-relaxed">
              {PROFESSIONAL_INFO.summary}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-sans font-bold text-portfolio-muted tracking-widest uppercase mb-6">Expertise</h3>
            <ul className="space-y-4">
              {PROFESSIONAL_INFO.expertise.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full" />
                  <span className="text-portfolio-ink font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-sans font-bold text-portfolio-muted tracking-widest uppercase mt-8 mb-6">Interests</h3>
            <p className="text-portfolio-ink">{PROFESSIONAL_INFO.interests}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
