import IndustriesSection from "@/components/sections/industries";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import NewHero from "@/components/sections/new-hero-section";
import NavbarNew from "@/components/sections/new-navbar";
import StatsSection from "@/components/sections/new-status-section";
import Footer from "@/components/sections/footer";
import FeaturesSection from "@/components/sections/new-feature-card-section";

export default function Home() {
  return (
    <>
      <NavbarNew />
      <div id="hero">
        <NewHero />
        <StatsSection />
      </div>

      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="intelligence">
        <FeaturesSection />
      </div>
      <Footer />
    </>
  );
}
