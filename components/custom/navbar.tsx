"use client";

import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const handleRedirect = () => {
    window.open("https://sales.addpipeline.ai/", "_blank");
  };

  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
        <div className="bg-white/70 px-3 py-2 rounded-full">
          <Image src={logo} alt="logo" width={140} height={140} />
        </div>
      </div>

      {/* Buttons */}
      <div className="bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
        <div className="flex items-center gap-2 bg-white/70 p-1 rounded-full">
          <Button
            variant="secondary"
            onClick={handleRedirect}
            className="border border-white cursor-pointer"
          >
            Sign in
          </Button>

          <Link href="/demo">
            <Button variant="outline" className="border border-white cursor-pointer">
              Get a demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
