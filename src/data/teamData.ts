export interface TeamPod {
  id: string;
  roleTitle: string;
  discipline: string;
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
  placeholderLabel: string;
  memberInitials: string;
}

export const teamPods: TeamPod[] = [
  {
    id: 'frontend-lead',
    roleTitle: 'Frontend Engineering Specialist',
    discipline: 'User Interface Architecture & Web Performance',
    description: 'Responsible for turning interface designs into pixel-perfect, accessible, and fast web experiences using modern React, TypeScript, and Tailwind CSS.',
    keyResponsibilities: [
      'Architecting reusable component libraries and design tokens',
      'Optimizing Web Vitals (CLS, LCP, INP) for sub-second performance',
      'Implementing smooth 60fps micro-interactions with Framer Motion',
      'Cross-browser and mobile responsive consistency'
    ],
    technologies: ['React 18/19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    placeholderLabel: 'Team Member Profile (Slot 01)',
    memberInitials: 'FE'
  },
  {
    id: 'backend-engineer',
    roleTitle: 'Backend & Systems Architect',
    discipline: 'API Design, Databases & Server Architecture',
    description: 'Builds secure, scalable server-side systems, RESTful microservices, and reliable database structures with Python, Django, FastAPI, and Node.js.',
    keyResponsibilities: [
      'Relational database design (PostgreSQL) and query optimization',
      'Designing clean, documented RESTful APIs (OpenAPI / Swagger)',
      'Implementing secure authentication, RBAC, and data sanitization',
      'Payment gateway integrations and asynchronous background queues'
    ],
    technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Redis'],
    placeholderLabel: 'Team Member Profile (Slot 02)',
    memberInitials: 'BE'
  },
  {
    id: 'ui-ux-specialist',
    roleTitle: 'UI/UX & Product Designer',
    discipline: 'Design Systems, User Research & Prototyping',
    description: 'Crafts elegant, user-centric interfaces and comprehensive Figma design systems that balance aesthetic authority with commercial conversion.',
    keyResponsibilities: [
      'Creating interactive prototypes and user journey flows in Figma',
      'Building maintainable design systems with strict typographic scale',
      'Conducting heuristic usability audits and interface reviews',
      'Designing high-converting landing page layouts and checkout funnels'
    ],
    technologies: ['Figma', 'Design Tokens', 'Information Architecture', 'Prototyping'],
    placeholderLabel: 'Team Member Profile (Slot 03)',
    memberInitials: 'UX'
  },
  {
    id: 'fullstack-dev',
    roleTitle: 'Full-Stack Software Engineer',
    discipline: 'End-to-End Feature Delivery & Integrations',
    description: 'Bridges frontend interfaces and backend infrastructure, accelerating sprint velocity and delivering cohesive end-to-end features.',
    keyResponsibilities: [
      'Building full-stack dashboard modules and administration tools',
      'Third-party API and webhook integrations (Stripe, AI, CRM)',
      'State synchronization between client caches and database records',
      'Unit testing and integration test coverage'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'Node.js', 'REST APIs', 'PostgreSQL'],
    placeholderLabel: 'Team Member Profile (Slot 04)',
    memberInitials: 'FS'
  },
  {
    id: 'qa-devops',
    roleTitle: 'QA & Cloud Operations Specialist',
    discipline: 'Deployment Pipelines, Security & Reliability',
    description: 'Ensures code quality, automated build pipelines, containerized deployments, and continuous uptime monitoring for all client platforms.',
    keyResponsibilities: [
      'Automating CI/CD deployment pipelines with GitHub Actions',
      'Containerizing applications with Docker for zero-drift deployments',
      'Cross-platform smoke testing, regression testing, and security checks',
      'Configuring DNS, SSL/TLS, and Cloudflare DDoS shielding'
    ],
    technologies: ['Docker', 'GitHub Actions', 'Cloudflare', 'Linux VPS', 'Playwright'],
    placeholderLabel: 'Team Member Profile (Slot 05)',
    memberInitials: 'QA'
  }
];

export const founderProfile = {
  name: 'Muhammed Anshid KT',
  role: 'Founder & Technical Director',
  avatarPlaceholder: 'AK',
  overview: 'Muhammed Anshid KT leads Teklonics with a strong commitment to engineering discipline and modern web architecture. With hands-on experience directing full-stack development, software architecture, and product engineering, Muhammed coordinates the core team of 5+ developers to deliver custom digital solutions that solve real business problems without unnecessary complexity.',
  coreTenets: [
    {
      title: 'Architectural Honesty',
      desc: 'We never oversell or introduce bloated dependencies. We select the right tool for your specific scale and budget.'
    },
    {
      title: 'Direct Technical Access',
      desc: 'You collaborate directly with engineers who write the code, ensuring zero communication lag and instant decision-making.'
    },
    {
      title: 'Maintainability by Default',
      desc: 'Clean git commits, typed codebases, documented APIs, and 100% intellectual property transfer to your company.'
    }
  ]
};
