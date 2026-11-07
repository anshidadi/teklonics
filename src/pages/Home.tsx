import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SelectedWork } from '../components/home/SelectedWork';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyTeklonics } from '../components/home/WhyTeklonics';
import { ProcessPreview } from '../components/home/ProcessPreview';
import { TeamPreview } from '../components/home/TeamPreview';
import { CtaSection } from '../components/home/CtaSection';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <SelectedWork />
      <ServicesOverview />
      <WhyTeklonics />
      <ProcessPreview />
      <TeamPreview />
      <CtaSection />
    </div>
  );
};
