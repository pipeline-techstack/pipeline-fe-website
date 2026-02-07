"use client";

import React, { useState } from "react";
import Logo from "../common/logo";
import Link from "next/link";

function NavbarNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="top-0 z-50 sticky bg-white mx-auto w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[67rem]">
        <div className="flex justify-between items-center h-18">
          {/* Logo and Brand */}

          <Logo height={130} width={130} />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 text-black">
            <a
              href="#how-it-works"
              className="font-medium hover:text-gray-600 text-sm transition-colors"
            >
              How It Works
            </a>
            <a
              href="#intelligence"
              className="font-medium hover:text-gray-600 text-sm transition-colors"
            >
              Intelligence
            </a>
            <a
              href="#industries"
              className="font-medium hover:text-gray-600 text-sm transition-colors"
            >
              Industries
            </a>
            {/* <a
              href="#pricing"
              className="font-medium hover:text-gray-600 text-sm transition-colors"
            >
              Pricing
            </a> */}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={"https://sales.addpipeline.ai/login"} target="_blank">
              <button className="font-medium text-black hover:text-gray-600 text-sm transition-colors">
                Sign In
              </button>
            </Link>

            <Link href={"/demo"}>
              <button className="flex items-center gap-1 cursor-pointer btn-gradient-purple">
                Talk to Us
                <span>➝</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            isMenuOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl p-6 transform transition-transform duration-300 ease-out
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    `}
          >
            <div className="flex flex-col gap-5">
              <a
                href="#how-it-works"
                className="font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>

              <a
                href="#intelligence"
                className="font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Intelligence
              </a>

              <a
                href="#industries"
                className="font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>

              {/* <a
                href="#pricing"
                className="font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a> */}

              <div className="flex gap-3 pt-5 border-t">
                <Link href={"https://sales.addpipeline.ai/login"} target="_blank" className="w-full">
                  <button
                    className="flex justify-center items-center gap-2 w-[100%] btn-gradient-purple"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </Link>

                <Link href={"/demo"} className="w-full">
                  <button
                    className="flex justify-center items-center gap-1 w-[100%] btn-gradient-purple"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Talk to Us
                    <span>➝</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarNew;
