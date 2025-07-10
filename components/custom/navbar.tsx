"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
const Navbar = () => {
  const handleRedirect = () => {
    window.open("https://sales.addpipeline.ai/", "_blank");
  };
  return (
    <div className="flex justify-between items-center">
      <div className="bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
        <div className="bg-white/70 px-3 py-2 rounded-full">
          <Image src={logo} alt="logo" width={140} height={140} />
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
        <div className="flex items-center gap-2 bg-white/70 p-1 rounded-full">
          <Button
            variant="secondary"
            onClick={handleRedirect}
            className="border border-white cursor-pointer"
          >
            Sign in
          </Button>
          {/* <Button variant="ghost" className="hover:bg-transparent">
            Get a demo
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
