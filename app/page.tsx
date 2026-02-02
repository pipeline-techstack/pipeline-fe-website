import IndustriesSection from "@/components/sections/industries";
// import HowItWorksSection from "@/components/sections/how-it-works-section";
import NewHero from "@/components/sections/new-hero-section";
import NavbarNew from "@/components/sections/new-navbar";
import StatsSection from "@/components/sections/new-status-section";


export default function Home() {
  return (
    <>
      <NavbarNew/>
      <NewHero/>
      <StatsSection/>
      <IndustriesSection />
      {/* <HowItWorksSection/> */}
    </>
  );
}
