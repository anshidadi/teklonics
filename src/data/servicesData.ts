import type { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDesc: 'Modern, high-performance websites designed for clarity, brand credibility and smooth user journeys.',
    subServices: [
      'Business websites',
      'Corporate websites',
      'Portfolio websites',
      'Landing pages',
      'Restaurant & hospitality websites',
      'E-commerce websites',
    ],
    capabilities: [
      'Fast loading & responsive across all devices',
      'Clear typographic hierarchy & conversion layout',
      'SEO-ready structure & clean semantic code',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: 'Globe',
  },
  {
    id: 'application-development',
    number: '02',
    title: 'Application Development',
    shortDesc: 'Reliable, bespoke web applications and internal tools built around your exact operational workflows.',
    subServices: [
      'Custom web applications',
      'Business management applications',
      'Admin dashboards',
      'Customer portals',
      'Booking & management systems',
      'E-commerce applications',
    ],
    capabilities: [
      'Interactive data views & role-based access',
      'Scalable architecture & seamless state handling',
      'Secure authentication & fast API responses',
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL'],
    icon: 'Layers',
  },
  {
    id: 'digital-solutions',
    number: '03',
    title: 'Digital Solutions',
    shortDesc: 'Practical technical consulting, interface design, system integrations and ongoing platform maintenance.',
    subServices: [
      'Custom digital solutions',
      'UI/UX design',
      'API integration',
      'Website redesign',
      'Website maintenance & improvements',
    ],
    capabilities: [
      'Intuitive user-centered interface wireframes',
      'Third-party payments & system integrations',
      'Reliable ongoing support & performance tuning',
    ],
    technologies: ['Figma', 'REST APIs', 'Cloudflare', 'Modern Tooling'],
    icon: 'Cpu',
  },
];
