import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CategoryTabs } from '@/components/CategoryTabs';
import { FeatureSection } from '@/components/FeatureSection';
import { FeaturedProductsSection } from '@/components/FeaturedProductsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CategoryTabs />
      <HeroSection />
      <FeatureSection />
      <FeaturedProductsSection />
      <Footer />
    </main>
  );
}
