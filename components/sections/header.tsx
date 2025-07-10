"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../custom/navbar";
import headerBg from "../../assets/header-bg.png";
import HeaderText from "../custom/header-text";
import { Eye } from "lucide-react";

const Header = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background image */}
      <div className="-z-10 absolute inset-0">
        <Image
          src={headerBg}
          alt="Header Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <div className="z-10 relative flex flex-col w-full">
        {/* Navbar */}
        <div className="px-4 sm:px-6 md:px-12 py-4">
          <Navbar />
        </div>

        {/* Text + Button + Image */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 px-4 text-center">
          <HeaderText />

          <button className="flex items-center bg-white shadow mt-4 sm:mt-6 px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm uppercase">
            <Eye className="inline-block mr-2 w-4 h-4" />
            Preview
          </button>

          {/* Hero Image */}
          <div className="z-30 relative flex flex-1 justify-center items-start mt-6 sm:mt-10 pb-20 sm:pb-32 w-full max-w-7xl">
            {/* Glowing background gradient */}
            <div className="top-0 -z-10 absolute inset-x-0 h-[80%] sm:h-[90%]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b1c4ff]/20 via-[#c9bfff]/20 to-[#b0f0ff]/10 blur-xl rounded-xl scale-105" />
            </div>

            {/* Glass panel & image */}
            <div className="relative bg-white/20 shadow-xl backdrop-blur-xl p-2 sm:p-3 md:p-4 border border-primary/10 rounded-3xl overflow-hidden w-full max-w-4xl">
              <video
                ref={videoRef}
                src="/videos/product-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
