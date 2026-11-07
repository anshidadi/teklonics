import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    tagline: 'Understand the client’s idea and requirements.',
    desc: 'We start by discussing your vision, defining project goals, understanding your users, and setting clear technical boundaries.',
  },
  {
    step: 2,
    title: 'Design',
    tagline: 'Plan the experience and interface.',
    desc: 'We map out user flows, layout structures, and intuitive interfaces with clean aesthetics and purposeful typography before writing code.',
  },
  {
    step: 3,
    title: 'Develop',
    tagline: 'Build and test the solution.',
    desc: 'Our engineers build your website or application using modern, maintainable code, rigorous cross-device testing, and clean architecture.',
  },
  {
    step: 4,
    title: 'Deliver',
    tagline: 'Launch the project and provide agreed support.',
    desc: 'We deploy to production, verify live performance, transfer full ownership, and provide agreed support to ensure long-term stability.',
  },
];
