import GetDemoForm from "@/components/custom/get-demo-form";
import demoimg from "../../assets/new/demo-img.png";
import Image from "next/image";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import logo from "../../assets/new/logo.png";
import demo1 from "../../assets/new/demo-icon1.png";
import demo2 from "../../assets/new/demo-icon2.png";
import demo3 from "../../assets/new/demo-icon3.png";

export default function DemoPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        {/* Top Bar (Logo + Website Button) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Pipeline Logo"
              width={135}
              height={135}
              className="object-contain w-[110px] sm:w-[135px]"
            />
          </div>

          {/* Website Button */}
          <Link
            href="/"
            className="bg-[#6F5EF7] hover:bg-[#5d4fe6] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors"
          >
            Website →
          </Link>
        </div>

        {/* Hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-11 pt-8 sm:pt-10 pb-16 sm:pb-24">
          {/* Text Content */}
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">
              Revenue Intelligence Platform
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Understand what&rsquo;s driving the number, and where to focus
              next
            </h1>
          </div>

          {/* Right Floating Icons (Desktop Only) */}
          <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-5">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image src={demo2} alt="" width={50} height={50} />
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <Image src={demo3} alt="" width={50} height={50} />
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <Image src={demo1} alt="" width={50} height={50} />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-[#fafafa] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-600 mb-3">Contact Info</p>

              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
                We are always happy <br className="hidden sm:block" /> to assist
                you
              </h2>

              {/* Image */}
              <div className="max-w-md mx-auto lg:mx-0 relative lg:right-5">
                <Image
                  src={demoimg}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 lg:p-6 w-full max-w-lg mx-auto">
              <GetDemoForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
