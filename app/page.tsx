// import DemoFeatures from "@/components/sections/demo-features";
import EffectiveSection from "@/components/sections/effective";
import Faq from "@/components/sections/faq";
import Growth from "@/components/sections/growth";
import Header from "@/components/sections/header";
import MarqueSection from "@/components/sections/marque";
import WorkflowComparison from "@/components/sections/cost-saving";
import Footer from "@/components/sections/footer";
import WhySwitch from "@/components/sections/why-switch";
import Solutions from "@/components/sections/solutions";
import Scalable from "@/components/sections/scalable";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <div className="bg-gray-50 px-6 md:px-12 xl:px-24 py-12">
        <MarqueSection />
      </div>

      <div className="flex flex-col bg-white">
        <WhySwitch />

        <Growth />

        <EffectiveSection />

        <WorkflowComparison />
        <Solutions />
        <Scalable />
        <Faq />
        {/* <DemoFeatures /> */}
      </div>
      <div className="bg-gray-50 pt-12 md:pt-40 xl:pt-48">
        <Footer />
      </div>
    </div>
  );
}
