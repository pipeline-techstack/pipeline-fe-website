import NavbarNew from "../sections/new-navbar";
import NewHero from "../sections/new-hero-section";
import StatsSection from "../sections/new-status-section";
import IndustriesSection from "../sections/industries";
import HowItWorksSection from "../sections/how-it-works-section";
import FeaturesSection from "../sections/new-feature-card-section";
import CTA from "../sections/cta-section";
import heroImg from "../../assets/new/hero-img.png";
import Footer from "../sections/footer";

function RevenueIntelligence() {
  return (
    <>
      <NavbarNew
        navigationLinks={[
          { label: "How It Works", href: "#how-it-works" },
          { label: "Intelligence", href: "#intelligence" },
          { label: "Industries", href: "#industries" },
          {
            label: "Solutions",
            dropdown: [
              { label: "Revenue Intelligence Platform", href: "/" },
              { label: "Outbound Intelligence Platform", href: "/outbound" },
            ],
          },
        ]}
        demolink="/demo?page=revenue"
      />
      <div id="hero">
        <NewHero
          cta="Revenue Intelligence Platform"
          title="Understand what&rsquo;s driving the number, and where to focus next"
          subtitle="Pipeline connects to your CRM, analyzes revenue data, and delivers clear signals, shared context, and focused next steps into the tools your revenue teams already use."
          button_text="See How It Works"
          img={heroImg}
          button_link="/demo?page=revenue"
        />
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
      <CTA
        tagline="See How Pipeline Fits Into Your RevOps Stack"
        heading="Stay Ahead as Revenue Evolves"
        subheading="Pipeline helps CROs and RevOps teams understand what's changing beneath the numbers and decide where to focus next, by turning CRM data into clear, actionable intelligence."
        link="/demo?page=revenue"
      />
      <Footer
       page="revenue"
      />
    </>
  );
}

export default RevenueIntelligence;
