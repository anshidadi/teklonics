export const siteConfig = {
  brand: {
    name: 'TEKLONICS',
    legalName: 'Teklonics Digital Solutions',
    tagline: 'We turn ambitious ideas into digital experiences.',
    shortBio: 'A modern technology partner helping businesses transform ambitious ideas into powerful digital experiences, high-performance web applications, and scalable software architectures.',
    logoPath: '/assets/teklonics-logo.png',
  },
  founder: {
    name: 'Muhammed Anshid KT',
    role: 'Founder & Lead Technical Architect',
    vision: 'Our mission is to engineer digital platforms that combine technical excellence with purposeful aesthetics. We build software that performs reliably under real-world pressure, scales cleanly, and gives businesses an enduring competitive advantage.',
    philosophy: 'Zero technical shortcuts. Clean modular architectures. Direct engineer-to-client communication without agency bureaucracy.',
  },
  team: {
    size: '5+ Core Engineers & Specialists',
    composition: [
      { discipline: 'Frontend Engineering', count: '2+ Engineers', stack: 'React, Next.js, TypeScript, Tailwind' },
      { discipline: 'Backend & Systems Architecture', count: '2+ Engineers', stack: 'Python, Django, FastAPI, Node.js, PostgreSQL' },
      { discipline: 'UI/UX & Product Design', count: '1+ Designer', stack: 'Figma, Design Systems, Interactive Prototyping' },
      { discipline: 'QA & Cloud Operations', count: 'Cross-functional Pod', stack: 'CI/CD, Docker, Cloudflare, AWS / VPS' },
    ],
  },
  contact: {
    // Configurable official points of contact
    officialEmail: 'contact@teklonics.com',
    supportEmail: 'hello@teklonics.com',
    officeLocation: 'Kerala, India',
    operatingTimezone: 'IST (UTC +5:30) | Serving Global Clients',
    availabilityStatus: 'Accepting select new projects for Q2 / Q3',
    // WhatsApp CTA is configurable and disabled by default until verified real number is provided
    whatsApp: {
      isConfigured: false, // Set to true once verified company WhatsApp is attached
      number: '', // e.g., '+91XXXXXXXXXX'
      defaultMessage: 'Hello Teklonics, I would like to discuss a digital project.',
    },
    socials: {
      github: 'https://github.com/teklonics',
      linkedin: 'https://linkedin.com/company/teklonics',
      twitter: '',
    }
  },
  stats: [
    { label: 'Engineering Team', value: '5+', detail: 'Specialists & Developers' },
    { label: 'Architecture', value: '100%', detail: 'Modular, Maintainable Code' },
    { label: 'Client Collaboration', value: 'Direct', detail: 'Founder & Engineer Led' },
    { label: 'Technology Focus', value: 'Modern', detail: 'React, Python, Cloud' },
  ],
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ]
};
