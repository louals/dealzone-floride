import Header from "./components/header/Header";
import HeroSection  from "./components/sections/HeroSection";
import PropertiesMarquee  from "./components/sections/PropertiesMarquee";
import FeaturedPropertiesGrid  from "./components/sections/FeaturedPropertiesGrid";
import CTASection  from "./components/sections/CTASection";
import Footer from "./components/footer/Footer";

export default function App() {
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
