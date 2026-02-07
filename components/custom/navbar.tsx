"use client";

import React from "react";
import { Button } from "../ui/button";
import Logo from "../common/logo";

const Navbar = () => {
  const handleRedirect = () => {
    window.open("https://sales.addpipeline.ai/", "_blank");
  };

  return (
    <nav className="top-0 z-50 sticky bg-white shadow-sm backdrop-blur-md w-full">
      <div className="flex justify-between items-center px-4 py-2">
        <Logo height={45} width={45} />

        <Button onClick={handleRedirect}>Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
