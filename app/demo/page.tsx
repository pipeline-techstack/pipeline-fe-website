import GetDemoForm from "@/components/custom/get-demo-form";
import demoimg from "../../assets/new/demo-img.png";
import Image from "next/image";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import logo from "../../assets/new/logo.png";
import demo1 from "../../assets/new/demo-icon1.png";
import demo2 from "../../assets/new/demo-icon2.png";
import demo3 from "../../assets/new/demo-icon3.png";
// import SectionContainer from "@/components/common/section-wrapper2";

export default function DemoPage() {
  return (
    <>
      {/* <SectionContainer> */}
      <div className="bg-white w-full min-h-screen">
        {/* Top Bar (Logo + Website Button) */}
        <div className="flex justify-between items-center mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 max-w-7xl">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Pipeline Logo"
              width={135}
              height={135}
              className="w-[110px] sm:w-[135px] object-contain"
            />
          </div>

          {/* Website Button */}
          <Link
            href="/"
            className="bg-[#6F5EF7] hover:bg-[#5d4fe6] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-white text-xs sm:text-sm transition-colors"
          >
            Website →
          </Link>
        </div>

        {/* Hero */}
        <div className="relative mx-auto px-4 sm:px-8 lg:px-11 pt-8 sm:pt-10 pb-16 sm:pb-24 max-w-7xl">
          {/* Text Content */}
          <div className="max-w-3xl">
            <p className="mb-3 sm:mb-4 font-medium text-gray-700 text-xs sm:text-sm">
              Revenue Intelligence Platform
            </p>

            <h1 className="font-extrabold text-gray-900 text-3xl sm:text-5xl lg:text-6xl leading-tight">
              Understand what&rsquo;s driving the number, and where to focus
              next
            </h1>
          </div>

          {/* Right Floating Icons (Desktop Only) */}
          <div className="hidden top-1/2 right-4 absolute lg:flex flex-col gap-5 -translate-y-1/2">
            <div className="flex justify-center items-center w-12 h-12">
              <Image src={demo2} alt="" width={50} height={50} />
            </div>

            <div className="flex justify-center items-center w-12 h-12">
              <Image src={demo3} alt="" width={50} height={50} />
            </div>

            <div className="flex justify-center items-center w-12 h-12">
              <Image src={demo1} alt="" width={50} height={50} />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-[#fafafa] py-16 sm:py-24">
          <div className="items-start gap-10 sm:gap-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
            {/* Left Content */}
            <div className="lg:text-left text-center">
              <p className="mb-3 text-gray-600 text-sm">Contact Info</p>

              <h2 className="mb-8 sm:mb-10 font-bold text-gray-900 text-2xl sm:text-4xl">
                We are always happy <br className="hidden sm:block" /> to assist
                you
              </h2>

              {/* Image */}
              <div className="lg:right-5 relative mx-auto lg:mx-0 max-w-md">
                <Image
                  src={demoimg}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white shadow-xl mx-auto p-5 sm:p-8 lg:p-6 rounded-2xl w-full max-w-lg">
              <GetDemoForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* </SectionContainer> */}
    </>
  );
}
