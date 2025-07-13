import GetDemoForm from "@/components/custom/get-demo-form";
import Navbar from "@/components/custom/navbar";

export default function DemoPage() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-[#eaf6ff] via-[#edf6fe] to-[#d4e8ff] w-full min-h-screen">
      {/* Navbar */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
        <Navbar />
      </div>

      {/* Demo Section */}
      <div className="flex flex-1 items-center px-4 md:px-8 py-8">
        <div className="items-center gap-12 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 mx-auto w-full max-w-7xl">
          {/* Left Content */}
<div className="space-y-2 text-indigo-950 lg:text-left">
  <h1 className="font-extrabold text-primary text-4xl lg:text-4xl md:text-5xl leading-tight">
    Book a meeting with a GTM expert
  </h1>
  <p className="max-w-xl text-primary text-base md:text-lg text-left">
    Pipeline helps you identify and connect with your highest-value
    prospects — instantly.
  </p>
  <p className="text-primary text-base">
    Ready to grow? Let’s talk 👉
  </p>
</div>


          {/* Right Form Card */}
          <div className="bg-white shadow-xl p-6 md:p-10 rounded-2xl w-full">
            <h2 className="mb-6 font-semibold text-primary text-xl">
              Get your personalized demo
            </h2>
            <p className="mb-4 text-gray-600 text-sm">
              Tell us a bit about yourself, and someone from our team will reach
              out shortly.
            </p>
            <GetDemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
