"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleRedirect = () => {
    window.open("https://sales.addpipeline.ai/", "_blank");
  };

  // Classes for the "Get a demo" button
  const getDemoClasses = (active: boolean) =>
    [
      "cursor-pointer transition font-semibold",
      active
        ? "bg-primary text-white shadow"
        : "bg-transparent text-primary hover:bg-primary hover:text-white",
      "focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2"
    ].join(" ");

  return (
    <nav className="w-full px-4 py-2 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
          <div
            className="bg-white/70 px-3 py-2 rounded-full cursor-pointer"
            onClick={() => redirect("/")}
          >
            <Image src={logo} alt="logo" width={120} height={120} />
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex bg-gradient-to-b from-primary/40 via-transparent to-primary/40 shadow-inner p-[1px] rounded-full">
          <div className="flex items-center gap-2 bg-white/70 p-1 rounded-full">
            <Button
              variant="secondary"
              onClick={handleRedirect}
              className="border border-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2"
            >
              Sign in
            </Button>
            <Link href="/demo">
              <Button
                variant="outline"
                className={getDemoClasses(pathname === "/demo")}
              >
                Get a demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-end gap-2">
          <Button
            variant="secondary"
            onClick={handleRedirect}
            className="border border-white cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2"
          >
            Sign in
          </Button>
          <Link href="/demo" className="w-full">
            <Button
              variant="outline"
              className={getDemoClasses(pathname === "/demo") + " w-full"}
            >
              Get a demo
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;