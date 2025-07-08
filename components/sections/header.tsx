import React from "react";
import Image from "next/image";
import Navbar from "../layout/navbar";
import headerBg from "../../assets/header-bg.jpg";
import HeaderText from "../custom/header-text";
import heroImage from "../../assets/hero-image.png";

import { Eye } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <Image
        src={headerBg}
        alt="Header Background"
        fill
        priority
        className="z-0 object-cover"
      />

      {/* Overlay */}
      <div className="z-10 absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* Navbar */}
      <div className="z-20 relative px-12 py-4">
        <Navbar />
      </div>

      {/* Centered Text and Button */}
      <div className="z-20 absolute top-1/2 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center px-4 pt-20">
        <HeaderText />
        <button className="mt-6 flex items-center px-6 py-2 rounded-full text-sm bg-white shadow font-semibold hover:scale-105 transition">
          <Eye className="w-4 h-4 mr-2 inline-block" />
          PREVIEW
        </button>

        {/* Hero Image (UI Mockup) */}
        <div className="mt-10 w-full max-w-5xl relative">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="mx-auto rounded-2xl shadow-lg"
          />

          {/* Bottom fade gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
