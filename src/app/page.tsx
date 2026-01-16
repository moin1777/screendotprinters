import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { CategoryTabs } from '@/components/CategoryTabs';
import { FeatureSection } from '@/components/FeatureSection';
import { ClientList } from '@/components/ClientList';
import { TestimonialSection } from '@/components/TestimonialSection';
import { FeaturedProductsSection } from '@/components/FeaturedProductsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryTabs />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <ClientList />
      <TestimonialSection />
      <FeaturedProductsSection />
      <Footer />
    </main>
  );
}
