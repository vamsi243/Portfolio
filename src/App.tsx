import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './components/Sidebar';


import { PlayStyles } from './components/PlayStyles';
import { CareerMode } from './components/CareerMode';
import { MatchHighlights } from './components/MatchHighlights';
import { ContractOffer } from './components/ContractOffer';
import { FooterTicker } from './components/FooterTicker';
import { ArrowRight } from 'lucide-react';


const SECTIONS = [
  { id: 'overview', component: null }, // Hero is handled specially
  { id: 'competencies', component: PlayStyles },
  { id: 'history', component: CareerMode },
  { id: 'projects', component: MatchHighlights },
  { id: 'contact', component: ContractOffer },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-bg selection:bg-portfolio-accent selection:text-white">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main className="pl-80 pb-20">
        {/* Hero / About Me Section */}
        <section id="overview" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 via-transparent to-portfolio-accent/10" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-portfolio-accent/3 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 px-16 w-full max-w-7xl mx-auto py-24">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/5 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                {/* Replace the src below with your actual photo */}
                <img
                  src="/profile-photo.jpg"
                  alt="Sai Vamsi Chunduru"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-5xl font-bold text-portfolio-accent/40">SV</span>';
                  }}
                />
              </div>
            </motion.div>

            {/* About Me Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-portfolio-accent/10 border border-portfolio-accent/20 px-4 py-1.5 rounded-full"
              >
                <span className="text-xs font-semibold text-portfolio-accent tracking-wider uppercase">About Me</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-4"
              >
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-portfolio-ink leading-tight">
                  Hey there, I'm <span className="text-portfolio-accent">Sai</span>
                </h1>
                <p className="text-lg text-portfolio-muted max-w-2xl leading-relaxed">
                  A Data-driven professional with a strong background in data analytics, machine learning, data mining, and financial analytics. Seasoned in generating valuable insights, recommending effective strategies, and utilizing data science techniques. Proven track record of developing end-to-end data solutions and managing data teams.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 pt-4"
              >
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="prof-button-primary group flex items-center"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="prof-button-outline"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-semibold text-portfolio-muted tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-portfolio-accent to-transparent" />
          </motion.div>
        </section>


        {SECTIONS.filter(s => s.component).map(({ id, component: Component }) => (
          <div key={id} id={id}>
            {Component && <Component />}
          </div>
        ))}
      </main>

      <FooterTicker />
    </div>
  );
}
