import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyTeklonics } from '../components/home/WhyTeklonics';
import { ProcessSection } from '../components/home/ProcessSection';
import { LeadershipSection } from '../components/home/LeadershipSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <WhyTeklonics />
      <ProcessSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
};
