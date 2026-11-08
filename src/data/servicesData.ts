import type { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDesc: 'Professional and responsive websites for businesses, brands and organisations.',
    examples: [
      'Business websites',
      'Corporate websites',
      'Landing pages',
      'Portfolio websites',
      'E-commerce websites',
      'Restaurant and service websites',
    ],
    capabilities: [
      'Clean typography and layout hierarchy',
      'Fast loading across all devices',
      'Search engine friendly structure',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: 'Globe',
  },
  {
    id: 'application-development',
    number: '02',
    title: 'Application Development',
    shortDesc: 'Modern applications designed around business requirements.',
    examples: [
      'Custom web applications',
      'Business management systems',
      'Admin dashboards',
      'Booking applications',
      'Customer portals',
      'E-commerce applications',
    ],
    capabilities: [
      'Intuitive user interfaces and dashboards',
      'Secure data handling and authentication',
      'Modular architecture built to scale',
    ],
    technologies: ['React', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL'],
    icon: 'Layers',
  },
  {
    id: 'digital-solutions',
    number: '03',
    title: 'Digital Solutions',
    shortDesc: 'Practical digital solutions that help businesses improve their online presence and operations.',
    examples: [
      'Website redesign',
      'UI/UX design',
      'API integration',
      'Website improvements',
      'Maintenance and technical support',
    ],
    capabilities: [
      'User-centered interface wireframing & styling',
      'Connecting third-party services and APIs',
      'Continuous technical maintenance and updates',
    ],
    technologies: ['Figma', 'REST APIs', 'Cloud Platforms', 'Modern Web Tools'],
    icon: 'Cpu',
  },
];
