export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Websites' | 'Web Applications' | 'Digital Solutions';
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  featured: boolean;
  year: string;
  previewType: 'storefront' | 'dashboard' | 'hospitality' | 'saas' | 'portal';
  previewImage?: string;
  demoUrl?: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  subServices: string[];
  capabilities: string[];
  technologies: string[];
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  tagline: string;
  desc: string;
}

export interface LeaderProfile {
  name: string;
  role: 'Founder' | 'Co-Founder';
  initials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
}
