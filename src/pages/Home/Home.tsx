import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/Footer";

import HeroSection from "./components/HeroSection";
import PropertiesMarquee from "./components/PropertiesMarquee";
import FeaturedPropertiesGrid from "./components/FeaturedPropertiesGrid";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PropertiesMarquee />
        <FeaturedPropertiesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
