import Header from "@/components/sections/header";
import MarqueSection from "@/components/sections/marque";
import Solutions from "@/components/sections/solutions";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <div className="py-12">
        {" "}
        <MarqueSection />
        <Solutions />
      </div>
    </div>
  );
}
