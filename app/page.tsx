import Faq from "@/components/sections/faq";
import Header from "@/components/sections/header";
import MarqueSection from "@/components/sections/marque";
import Skydeck from "@/components/sections/skydeck";
import Solutions from "@/components/sections/solutions";
import WorkflowComparison from "@/components/sections/workflow-comparison";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <div className="py-12">
        <MarqueSection />
        <Solutions />
        <WorkflowComparison />
        <Skydeck />
        <Faq />
      </div>
    </div>
  );
}