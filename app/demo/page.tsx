import GetDemoForm from "@/components/custom/get-demo-form";
import Navbar from "@/components/custom/navbar";

export default function DemoPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eaf6ff] via-[#edf6fe] to-[#d4e8ff] flex flex-col">
      {/* Navbar */}
      <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8">
        <Navbar />
      </div>

      {/* Demo Section */}
      <div className="flex-1 flex items-center px-4 py-8 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-2 text-indigo-950 lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#1e3a8a] leading-tight">
              Book a meeting with a GTM expert
            </h1>
            <p className="text-base md:text-lg text-[#1e3a8a] max-w-xl mx-auto lg:mx-0">
              Pipeline helps you identify and connect with your highest-value prospects — instantly.
            </p>
            <p className="text-base text-[#1e3a8a]">
              Ready to grow? Let’s talk 👉
            </p>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl w-full">
            <h2 className="text-xl font-semibold text-[#1e3a8a] mb-6">
              Get your personalized demo
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Tell us a bit about yourself, and someone from our team will reach out shortly.
            </p>
            <GetDemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
