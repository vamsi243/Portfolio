import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function ContractOffer() {
  return (
    <section className="py-24 px-8 bg-portfolio-beige text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="prof-card p-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-portfolio-ink">Let's Connect</h2>
          <p className="text-portfolio-muted mb-10 max-w-2xl mx-auto text-lg">
            I am currently open to new opportunities where I can apply my expertise in Data Analytics, Agentic AI, and Machine Learning to drive impactful business solutions.
          </p>

          <div className="flex justify-center gap-6">
            <a href="mailto:contact@example.com" className="prof-button-primary flex items-center">
              <Mail className="w-5 h-5 mr-2" /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/sai-chunduru12/" target="_blank" rel="noreferrer" className="prof-button-outline flex items-center">
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/vamsi243" target="_blank" rel="noreferrer" className="prof-button-outline flex items-center">
              <Github className="w-5 h-5 mr-2" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
