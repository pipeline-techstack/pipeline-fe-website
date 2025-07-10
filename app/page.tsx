import DemoFeatures from "@/components/sections/demo-features";
import EffectiveSection from "@/components/sections/effective";
import Faq from "@/components/sections/faq";
import Growth from "@/components/sections/growth";
import Header from "@/components/sections/header";
import MarqueSection from "@/components/sections/marque";
import Skydeck from "@/components/sections/skydeck";
import Solutions from "@/components/sections/solutions";
import WorkflowComparison from "@/components/sections/workflow-comparison";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <div className="bg-gray-50 px-6 md:px-12 xl:px-24 py-12">
        <MarqueSection />
      </div>

      <div className="flex flex-col gap-12 md:gap-40 xl:gap-48 bg-gray-50 px-3 md:px-20 xl:px-48 py-12">
        <Solutions />
        <Growth />
        <EffectiveSection />
        <WorkflowComparison />
        <Skydeck />
        <Faq />
        <DemoFeatures />
      </div>
      <div className="bg-gray-50 pt-12 md:pt-40 xl:pt-48">
        <Footer />
      </div>
    </div>
  );
}
