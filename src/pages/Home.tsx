import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { SelectedWork } from '../components/home/SelectedWork';
import { AboutSection } from '../components/home/AboutSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { LeadershipSection } from '../components/home/LeadershipSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesOverview />
      <SelectedWork />
      <AboutSection />
      <ProcessSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
};
