import React from 'react';
import { motion } from 'motion/react';
import { Home, Users, Briefcase, Trophy, MessageSquare, Target } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'overview', label: 'OVERVIEW', icon: Home },
    { id: 'competencies', label: 'CORE COMPETENCIES', icon: Target },
    { id: 'history', label: 'PROFESSIONAL HISTORY', icon: Briefcase },
    { id: 'projects', label: 'KEY PROJECTS', icon: Trophy },
    { id: 'contact', label: 'CONTACT', icon: MessageSquare },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white border-r border-portfolio-border z-50 flex flex-col">
      <div className="p-10">
        <h1 className="text-2xl font-bold tracking-tight text-portfolio-ink">
          Sai Vamsi
        </h1>
        <p className="text-[10px] font-sans font-bold text-portfolio-muted tracking-[0.2em] mt-2 uppercase">
          Data & AI Analytics Engineer
        </p>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full prof-sidebar-item",
              activeSection === item.id && "active"
            )}
          >
            <item.icon className={cn(
              "w-4 h-4",
              activeSection === item.id ? "text-portfolio-accent" : "text-portfolio-muted"
            )} />
            <span className={cn(
              "text-xs font-sans font-semibold tracking-widest uppercase",
              activeSection === item.id ? "text-portfolio-ink" : "text-portfolio-muted"
            )}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-10 border-t border-portfolio-border">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center border border-portfolio-accent/20">
            <span className="text-sm font-medium text-portfolio-accent">SV</span>
          </div>
          <div>
            <p className="text-xs font-sans font-bold text-portfolio-ink">SAI VAMSI</p>
            <p className="text-[10px] font-sans text-portfolio-muted uppercase tracking-wider">Data & AI Analytics Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
