import HeroSection from '@/components/HeroSection';
import CompanyCardsSection from '@/components/CompanyCardsSection';
import FeaturesSection from '@/components/FeaturesSection';
import IndustrySector from '@/components/IndustryItem';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyCardsSection />
      <IndustrySector/>
      <FeaturesSection />
    </main>
  );
}
