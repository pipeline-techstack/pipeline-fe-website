import Faq from "@/components/sections/faq";
import Growth from "@/components/sections/growth";
import Header from "@/components/sections/header";
import MarqueSection from "@/components/sections/marque";
import Skydeck from "@/components/sections/skydeck";
import Solutions from "@/components/sections/solutions";
import WorkflowComparison from "@/components/sections/workflow-comparison";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <div className="bg-gray-50 px-6 md:px-12 xl:px-24 py-12 pt-24 md:pt-96 2xl:pt-96">
        <MarqueSection />
      </div>

      <div className="flex flex-col gap-12 md:gap-40 xl:gap-48 bg-gray-50 px-6 md:px-20 xl:px-48 py-12">
        <Solutions />
        <Growth />
        <WorkflowComparison />
        <Skydeck />
        <Faq />
      </div>
    </div>
  );
}
