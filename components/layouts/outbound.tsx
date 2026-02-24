import NewHero from "../sections/new-hero-section";
import NavbarNew from "../sections/new-navbar";
import heroimg from "../../assets/new/outbound/hero-img.png";
import TrustedIndustriesSection from "../sections/trusted-industriesSection";
import icon1 from "../../assets/new/outbound/icon1.png";
import icon2 from "../../assets/new/outbound/icon2.png";
import icon3 from "../../assets/new/outbound/icon3.png";
import icon4 from "../../assets/new/outbound/icon4.png";
import icon5 from "../../assets/new/outbound/icon5.png";
import icon6 from "../../assets/new/outbound/icon6.png";
import HowItWorksSection from "../sections/howIt-works-section";
import img1 from "../../assets/new/outbound/1-img.png";
import img2 from "../../assets/new/outbound/2-img.png";
import img3 from "../../assets/new/outbound/3-img.png";
import PlatformPerformanceSection from "../sections/platform-performance";
import OutcomeSection from "../sections/outcome";
import Footer from "../sections/footer";
import CTA from "../sections/cta-section";
import outicon1 from "../../assets/new/outbound/outicon1.png";
import outicon2 from "../../assets/new/outbound/outicon2.png";
import outicon3 from "../../assets/new/outbound/outicon3.png";
import outicon4 from "../../assets/new/outbound/outicon4.png";
import VisibilityPerformanceSection from "../sections/Outbound/visibility";
import visiImg from "../../assets/new/outbound/visi-img.png";

function Outbound() {
  return (
    <>
      <NavbarNew
        navigationLinks={[
          { label: "Approach", href: "#approach" },
          { label: "Platform", href: "#platform" },
          { label: "Impact", href: "#impact" },
          { label: "Outcome", href: "#outcome" },
          {
            label: "Solutions",
            dropdown: [
              { label: "Revenue Intelligence Platform", href: "/" },
              { label: "Outbound Intelligence Platform", href: "/outbound" },
            ],
          },
        ]}
        demolink="/demo?page=outbound"
      />

      <div id="hero">
        <NewHero
          cta="Outbound Intelligence Platform"
          title="LinkedIn Outreach That Delivers High-Intent B2B Conversations"
          subtitle="Outbound Intelligence helps B2B SaaS and services companies generate qualified conversations on LinkedIn using AI-driven targeting and personalization."
          button_text="Book a strategy call"
          img={heroimg}
          imgclassname="scale-100"
          button_link="/demo?page=outbound"
        />
      </div>

      <div id="impact">
        <TrustedIndustriesSection
          badgeText="PROVEN AT SCALE"
          heading="Trusted by Scaling B2B"
          subheading="Enabling structured LinkedIn outbound for high-growth B2B teams"
          industries={[
            {
              title: "Technology & Software",
              icon: icon1,
            },
            {
              title: "Manufacturing & Industrials",
              icon: icon2,
            },
            {
              title: "Healthcare & MedTech",
              icon: icon3,
            },
            {
              title: "Financial Services & FinTech",
              icon: icon4,
            },
            {
              title: "Professional Services",
              icon: icon5,
            },
            {
              title: "Marketing Services",
              icon: icon6,
            },
          ]}
        />
      </div>

      <div id="approach">
        <HowItWorksSection
          heading="How It "
          subheading="From ICP Targeting to High-Intent Conversations — In Three Focused Steps"
          steps={[
            {
              title: "Define Your Ideal Customer Profile",
              description: "We map your ICP based on:",
              bullets: [
                "Industry",
                "Company size",
                "Geography",
                "Role and decision-making authority",
                "Service or product relevance",
              ],
              img: img1,
            },
            {
              title: "AI-Powered Personalization",
              description: "Each message is customized using:",
              bullets: [
                "Company information",
                "Role relevance",
                "Industry context",
                "Value proposition alignment",
              ],
              img: img2,
            },
            {
              title: "Real-Time Warm Lead Alerts",
              description: "When a prospect:",
              bullets: [
                "Expresses interest",
                "Asks for more information",
                "Requests a meeting",
              ],
              img: img3,
            },
          ]}
        />
      </div>

      <VisibilityPerformanceSection
        heading="Full Visibility. Measurable Performance."
        subtitle="You get access to a live dashboard where you can:"
        autoInterval={3500}
        items={[
          {
            icon: outicon1,
            title: "See daily outreach volume",
            description:
              "Understand exactly how many qualified prospects are being engaged each day — filtered by your ICP criteria.",
          },
          {
            icon: outicon2,
            title: "Track connection rates",
            description:
              "Monitor how your connection acceptance rate performs over time.",
          },
          {
            icon: outicon3,
            title: "Monitor response rates",
            description: "See how prospects engage with your outreach efforts.",
          },
          {
            icon: outicon4,
            title: "View active conversations",
            description:
              "Track high-intent conversations as they move toward meetings.",
          },
        ]}
        img={visiImg}
      />

      <div id="platform">
        <PlatformPerformanceSection
          heading="Platfrom "
          stats={[
            {
              value: "165,000+",
              label: "LinkedIn outreach actions every month",
            },
            {
              value: "1,500+",
              label: "Meetings delivered per month",
            },
          ]}
          achievements={[
            "Tens of thousands of ICP-matched prospects engaged",
            "Thousands of qualified business conversations",
          ]}
        />
      </div>

      <div id="outcome">
        <OutcomeSection
          heading="Outcome"
          outcomes={[
            {
              percentage: "20-35%",
              title: "Connection Acceptance Rate",
              description: "Of targeted prospects accept connection requests.",
              icon: outicon1,
            },
            {
              percentage: "15-30%",
              title: "Reply Rate",
              description: "Of accepted connections respond to outreach.",
              icon: outicon2,
            },
            {
              percentage: "25-40%",
              title: "Qualified Conversation Rate",
              description:
                "Of replies turn into relevant business conversations.",
              icon: outicon3,
            },
            {
              percentage: "40-60%",
              title: "Meeting Conversion Rate",
              description:
                "Of qualified conversations convert into booked meetings.",
              icon: outicon4,
            },
          ]}
        />
      </div>
      <CTA
        tagline="See Pipeline in Action →"
        subheading="Start generating high-intent conversations with the right decision-makers, consistently and measurably."
        heading="Turn LinkedIn Into Your Most Predictable Pipeline Channel"
        link="/demo?page=outbound"
      />

      <Footer
       page="outbound"
      />
    </>
  );
}

export default Outbound;
