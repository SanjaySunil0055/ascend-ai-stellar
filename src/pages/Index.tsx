import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ChallengeSection from '@/components/sections/ChallengeSection';
import DataHarmonySection from '@/components/sections/DataHarmonySection';
import CognitiveCoreSection from '@/components/sections/CognitiveCoreSection';
import InsightNavigatorSection from '@/components/sections/InsightNavigatorSection';
import InterventionsSection from '@/components/sections/InterventionsSection';
import ImpactSection from '@/components/sections/ImpactSection';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  useEffect(() => {
    // Add dark class to ensure dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ChallengeSection />
      <DataHarmonySection />
      <CognitiveCoreSection />
      <InsightNavigatorSection />
      <InterventionsSection />
      <ImpactSection />
      <ChatWidget />
    </main>
  );
};

export default Index;
