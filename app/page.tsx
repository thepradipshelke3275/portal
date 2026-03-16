import HeroSection from '@/components/HeroSection';
import CompanyCardsSection from '@/components/CompanyCardsSection';
import FeaturesSection from '@/components/FeaturesSection';
import IndustrySector from '@/components/IndustryItem';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation/>
      <HeroSection />
      <CompanyCardsSection />
      <IndustrySector/>
      <FeaturesSection />
    </main>
  );
}
