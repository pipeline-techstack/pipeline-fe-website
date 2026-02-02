import NewHero from "@/components/ui/new-hero-section";
import NavbarNew from "@/components/ui/new-navbar";
import StatsSection from "@/components/ui/new-status-section";


export default function Home() {
  return (
    <>
      <NavbarNew/>
      <NewHero/>
      <StatsSection/>
    </>
  );
}
