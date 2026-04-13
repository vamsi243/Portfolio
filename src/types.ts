export interface ProfessionalStats {
  modeling: number;
  engineering: number;
  deployment: number;
  architecture: number;
  programming: number;
  research: number;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  deliverables: string;
  impact: string;
  valuation: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  githubUrl?: string;
  demoUrl?: string;
  challenge: string;
  outcome: string;
  coreTechnology: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface CoreCompetency {
  name: string;
  icon: string;
  category: 'Mastery' | 'Data' | 'Deployment' | 'Frontend';
  isAdvanced?: boolean;
}
