import React from "react";
import Image from "next/image";
import Navbar from "../custom/navbar";
import headerBg from "../../assets/header-bg.jpg"; // adjust path as needed
import HeaderText from "../custom/header-test";

const Header = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background image (fills entire container) */}
      <Image
        src={headerBg}
        alt="Header Background"
        fill
        priority
        className="z-0 object-cover"
      />
      {/* Overlay (optional blur/glass effect) */}
      <div className="z-10 absolute inset-0 bg-white/80 backdrop-blur-sm" />
      {/* Navbar content */}
      <div className="z-20 relative px-12 py-4">
        <Navbar />
        <HeaderText />
      </div>
    </div>
  );
};

export default Header;
