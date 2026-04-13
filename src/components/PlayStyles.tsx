import React from 'react';
import { motion } from 'motion/react';
import { COMPETENCIES } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export const PlayStyles = () => {
  const categories = ['Mastery', 'Data', 'Deployment', 'Frontend'];

  return (
    <section className="py-24 px-16 bg-white/50">
      <div className="flex items-center gap-4 mb-16">
        <Icons.Target className="w-8 h-8 text-portfolio-accent" />
        <h2 className="text-4xl font-bold tracking-tight text-portfolio-ink">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map(category => (
          <div key={category} className="space-y-6">
            <h3 className="text-[10px] font-sans font-black text-portfolio-muted tracking-[0.3em] uppercase mb-8">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {COMPETENCIES.filter(s => s.category === category).map(style => (
                <CompetencyCard key={style.name} style={style} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CompetencyCard = ({ style }: { style: any }) => {
  const Icon = (Icons as any)[style.icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 bg-white",
        style.isAdvanced 
          ? "border-portfolio-accent/30 shadow-md" 
          : "border-portfolio-border hover:border-portfolio-accent/20"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center",
        style.isAdvanced ? "bg-portfolio-accent text-white" : "bg-portfolio-beige text-portfolio-accent"
      )}>
        {Icon && <Icon className="w-6 h-6" />}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-sm text-portfolio-ink">{style.name}</span>
          {style.isAdvanced && (
            <span className="text-[8px] font-sans font-black bg-portfolio-accent/10 text-portfolio-accent px-1.5 py-0.5 rounded uppercase tracking-tighter">
              ADV
            </span>
          )}
        </div>
        <p className="text-[9px] font-sans text-portfolio-muted font-bold tracking-widest uppercase mt-0.5">
          {style.isAdvanced ? "Advanced Mastery" : "Specialization"}
        </p>
      </div>
    </motion.div>
  );
};
