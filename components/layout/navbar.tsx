import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="px-2 py-1 border border-primary/20 rounded-full">
        <Image src={logo} alt="logo" width={140} height={140} />
      </div>

      <div className="p-1 border rounded-full">
        <Button variant="secondary">Sign in</Button>
        <Button variant="ghost" className="hover:bg-transparent">
          Get a demo
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
