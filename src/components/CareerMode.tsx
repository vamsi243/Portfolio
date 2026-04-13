import React from 'react';
import { motion } from 'motion/react';
import { CAREER_HISTORY } from '../constants';

export function CareerMode() {
  return (
    <section className="py-24 px-8 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-between">
          <span>Career <span className="text-portfolio-accent">Mode</span></span>
        </h2>
        <div className="w-24 h-1 bg-portfolio-accent rounded-full" />
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-portfolio-accent before:via-portfolio-accent/50 before:to-transparent">
        {CAREER_HISTORY.map((role, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-portfolio-beige bg-portfolio-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-portfolio-beige rounded-full" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] prof-card p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-sans font-bold text-portfolio-accent tracking-wider">{role.period}</span>
              </div>
              <h3 className="text-xl font-bold text-portfolio-ink">{role.role}</h3>
              <p className="text-lg font-medium text-portfolio-muted mb-4">{role.organization}</p>
              
              <ul className="space-y-2 mt-4 pt-4 border-t border-portfolio-border">
                {role.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-sm text-portfolio-ink flex items-start flex-wrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent mt-1.5 mr-2 shrink-0" />
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
