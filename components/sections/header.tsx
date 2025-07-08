import React from "react";
import Image from "next/image";
import Navbar from "../custom/navbar";
import headerBg from "../../assets/header-bg.jpg";
import wave from "../../assets/wave.png";
import heroImage from "../../assets/hero-image.png";
import HeaderText from "../custom/header-text";
import { Eye } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="-z-10 absolute inset-0">
        <Image
          src={headerBg}
          alt="Header Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Main content */}
      <div className="z-10 relative flex flex-col w-full">
        {/* Navbar */}
        <div className="px-12 py-4">
          <Navbar />
        </div>

        {/* Text + Button + Image */}
        <div className="flex flex-col items-center mt-8 px-4 text-center">
          <HeaderText />

          <button className="flex items-center bg-white shadow mt-6 px-6 py-2 rounded-full font-semibold text-sm uppercase hover:scale-105 transition">
            <Eye className="inline-block mr-2 w-4 h-4" />
            Preview
          </button>

          {/* Hero Image */}
          <div className="relative flex flex-1 justify-center items-start mt-10 pb-32 w-full max-w-5xl">
            {/* Glowing background gradient */}
            <div className="-z-10 absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b1c4ff]/30 via-[#c9bfff]/30 to-[#b0f0ff]/20 blur-3xl rounded-3xl scale-[1.2]" />
            </div>

            {/* Glass panel & image */}
            <div className="relative shadow-xl backdrop-blur-xl border border-primary/10 rounded-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt="Hero Image"
                className="rounded-2xl max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Overlay */}
      <div className="right-0 bottom-0 left-0 z-30 absolute">
        <Image src={wave} alt="wave Background" width={400} height={50} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent blur-sm" />
      </div>
    </div>
  );
};

export default Header;
