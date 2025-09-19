import HeroSection from "./components/HeroSection";
import PropertiesMarquee from "./components/PropertiesMarquee";
import FeaturedPropertiesGrid from "./components/FeaturedPropertiesGrid";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <PropertiesMarquee />
      <FeaturedPropertiesGrid />
      <CTASection />
    </main>
  );
}
