import type { ProcessStage } from '../types';

export const processStages: ProcessStage[] = [
  {
    step: 1,
    code: '01',
    name: 'Discovery & Requirements Engineering',
    tagline: 'Deep dive into your business logic, goals, and technical boundaries',
    duration: 'Week 1',
    summary: 'Before writing any code or drawing mockups, we dissect what your project truly needs. We clarify target users, business objectives, existing systems, security expectations, and success metrics.',
    activities: [
      'Founder and stakeholder alignment session',
      'Technical feasibility and architecture scoping',
      'User journey mapping and core persona definition',
      'Competitive landscape & feature prioritization'
    ],
    deliverables: [
      'Comprehensive Project Scope Specification',
      'Technical Architecture Blueprint',
      'High-Level Sprint & Milestones Roadmap'
    ],
    tools: ['Notion', 'FigJam', 'Excalidraw', 'Slack / Google Meet']
  },
  {
    step: 2,
    code: '02',
    name: 'Technical Strategy & Architecture',
    tagline: 'Choosing the right foundation to prevent costly refactors later',
    duration: 'Week 1 - 2',
    summary: 'We determine the tech stack, database schemas, API contracts, third-party services, and deployment pipeline. We architect for scale from day one while keeping the solution lean and maintainable.',
    activities: [
      'Frontend & backend framework selection',
      'Relational database schema modeling & indexing plan',
      'API contract definition (REST/GraphQL/OpenAPI)',
      'Security posture, authorization (RBAC), and authentication design'
    ],
    deliverables: [
      'Database Entity-Relationship Diagram (ERD)',
      'API Architecture & Endpoint Specification',
      'Cloud Infrastructure & CI/CD Plan'
    ],
    tools: ['PostgreSQL', 'Docker', 'Swagger / OpenAPI', 'GitHub']
  },
  {
    step: 3,
    code: '03',
    name: 'UI/UX Design & Prototyping',
    tagline: 'Crafting an intuitive, high-converting visual and interaction system',
    duration: 'Week 2 - 4',
    summary: 'We transform wireframes into a high-fidelity design system. Clean typography, generous spacing, purposeful micro-interactions, and responsive layouts tailored to your brand identity.',
    activities: [
      'Low-fidelity wireframing of critical user pathways',
      'Design system creation (typography, colors, tokens, components)',
      'High-fidelity interactive prototype in Figma',
      'Review and iteration with your team before engineering'
    ],
    deliverables: [
      'Complete Clickable Figma Prototype',
      'Component Library & Design Tokens',
      'Responsive Mobile & Desktop Screen Layouts'
    ],
    tools: ['Figma', 'Tokens Studio', 'Lottie', 'Tailwind Guidelines']
  },
  {
    step: 4,
    code: '04',
    name: 'Agile Development & Sprints',
    tagline: 'Iterative, transparent software engineering with direct communication',
    duration: 'Week 3 - 8+',
    summary: 'Our 5+ core developers build your platform in focused two-week sprints. You receive regular staging deployments, transparent progress updates, and clean, modular code with zero shortcuts.',
    activities: [
      'Component-driven frontend implementation in React & TypeScript',
      'Backend API endpoint development and database migrations',
      'Integration of third-party payment gateways, CRM, or AI APIs',
      'Bi-weekly staging environment demo releases'
    ],
    deliverables: [
      'Live staging environment preview',
      'Clean, documented Git repository access',
      'Bi-weekly sprint progress summaries'
    ],
    tools: ['React', 'TypeScript', 'Tailwind', 'Python/FastAPI', 'Node.js', 'Git']
  },
  {
    step: 5,
    code: '05',
    name: 'Testing & Quality Assurance',
    tagline: 'Ruthless validation across performance, security, and responsiveness',
    duration: 'Week 7 - 9',
    summary: 'We test across real devices, varying network speeds, and modern browser engines. We verify form inputs, database queries, edge cases, and ensure Lighthouse scores reflect top-tier engineering.',
    activities: [
      'Cross-browser and multi-device responsive testing',
      'Edge case validation & input sanitization audits',
      'Lighthouse performance and accessibility (a11y) optimization',
      'Load, concurrency, and API latency checks'
    ],
    deliverables: [
      'QA Test Execution & Bug Resolution Report',
      'Lighthouse Performance & Accessibility Audit (90+)',
      'Security & Input Validation Sign-off'
    ],
    tools: ['Playwright', 'Chrome DevTools', 'Postman', 'Wave a11y']
  },
  {
    step: 6,
    code: '06',
    name: 'Production Deployment & Launch',
    tagline: 'Seamless zero-downtime go-live with enterprise cloud configurations',
    duration: 'Week 9 - 10',
    summary: 'We configure DNS, SSL certificates, automated backup schedules, CDN caching, and monitor real-time server telemetry as your site or application goes live to the world.',
    activities: [
      'Domain configuration, DNS management, and SSL provisioning',
      'Cloud infrastructure setup (Vercel, VPS, AWS, Cloudflare)',
      'Analytics, error tracking (Sentry), and monitoring integration',
      'Final live production sanity checks'
    ],
    deliverables: [
      'Live production URL and complete administrative access',
      'Automated CI/CD build and deployment pipeline',
      'Full source code repository transfer to your ownership'
    ],
    tools: ['Cloudflare', 'Vercel / Docker', 'GitHub Actions', 'Sentry']
  },
  {
    step: 7,
    code: '07',
    name: 'Ongoing Support & Evolution',
    tagline: 'Reliable engineering stewardship as your business expands',
    duration: 'Ongoing',
    summary: 'Software is a living asset. We stay in your corner for proactive dependency updates, security patches, performance audits, and continuous feature enhancements as your customer base scales.',
    activities: [
      'Dependency updates and security vulnerability patching',
      'Database optimization as data volumes grow',
      'New feature roadmapping and sprint execution',
      'Priority bug triage and direct technical guidance'
    ],
    deliverables: [
      'Monthly health and security checkups',
      'Guaranteed response time SLA for critical items',
      'Continuous feature backlog delivery'
    ],
    tools: ['Slack Direct Channel', 'GitHub Issues', 'Uptime Kuma']
  }
];
