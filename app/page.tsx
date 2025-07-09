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
      <div className="flex flex-col gap-32 bg-gray-50 py-12">
        <MarqueSection />
        <Solutions />
        <Growth />
        <WorkflowComparison />
        <Skydeck />
        <Faq />
      </div>
    </div>
  );
}
