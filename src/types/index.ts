export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  examples: string[];
  capabilities: string[];
  technologies: string[];
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface LeaderProfile {
  name: string;
  role: 'Founder' | 'Co-Founder';
  initials: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
}
