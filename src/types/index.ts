export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Web Applications' | 'E-Commerce' | 'Corporate & Business' | 'Custom Software' | 'UI/UX Design';
  clientType: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  year: string;
  accentColor: string;
  previewImage: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  code: string; // 'A' | 'B' | ...
  title: string;
  subtitle: string;
  category: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  suitableFor: string;
  iconName: string;
}

export interface ProcessStage {
  step: number;
  code: string;
  name: string;
  tagline: string;
  duration: string;
  summary: string;
  activities: string[];
  deliverables: string[];
  tools: string[];
}

export interface TeamMemberProfile {
  id: string;
  role: string;
  focus: string;
  bio: string;
  technologies: string[];
  status: 'Active Pod' | 'Leadership';
  isPlaceholder?: boolean;
}

export interface ContactInquiry {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  selectedServices: string[];
  budgetRange: string;
  timeline: string;
  projectSummary: string;
  preferredMethod: 'email' | 'phone' | 'google-meet' | 'whatsapp';
}
