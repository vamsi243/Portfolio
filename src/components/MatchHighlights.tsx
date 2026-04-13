import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowRight, Github } from 'lucide-react';

export function MatchHighlights() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Key <span className="text-portfolio-accent">Projects</span></h2>
        <div className="w-24 h-1 bg-portfolio-accent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="prof-card group overflow-hidden flex flex-col"
          >
            <div className="h-48 overflow-hidden bg-portfolio-accent/5 relative">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              )}
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-portfolio-ink mb-2">{project.title}</h3>
              <p className="text-portfolio-muted mb-6 flex-1">{project.fullDescription || project.description}</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.githubUrl || project.demoUrl || project.link) && (
                  <div className="flex gap-4 pt-4 border-t border-portfolio-border">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-portfolio-ink hover:text-portfolio-accent transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2"/> View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-portfolio-ink hover:text-portfolio-accent transition-colors">
                        <Github className="w-4 h-4 mr-2"/> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-portfolio-ink hover:text-portfolio-accent transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2"/> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://www.linkedin.com/in/sai-chunduru12/details/projects/"
          target="_blank"
          rel="noreferrer"
          className="prof-button-outline inline-flex items-center gap-2"
        >
          See More Projects
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>

  );
}
