"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/new/logo.png";

function NavbarNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white mx-auto sticky top-0 z-50 shadow-sm">
      <div className="max-w-[67rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="w-full h-full relative">
              <Image
                src={logo}
                alt="Pipeline Logo"
                width={135}
                height={135}
                className="object-contain"
              />
            </div>
            {/* <span className="text-xl font-semibold text-black">Pipeline</span> */}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 text-black">
            <a
              href="#how-it-works"
              className=" hover:text-gray-600 transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#intelligence"
              className=" hover:text-gray-600 transition-colors text-sm font-medium"
            >
              Intelligence
            </a>
            <a
              href="#industries"
              className=" hover:text-gray-600 transition-colors text-sm font-medium"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className=" hover:text-gray-600 transition-colors text-sm font-medium"
            >
              Pricing
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-black hover:text-gray-600 transition-colors text-sm font-medium">
              Sign In
            </button>
            <button className="btn-gradient-purple flex items-center gap-1">
              Talk to Us
              <span>➝</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-black hover:text-gray-600 transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#intelligence"
                className="text-black hover:text-gray-600 transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Intelligence
              </a>
              <a
                href="#industries"
                className="text-black hover:text-gray-600 transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href="#pricing"
                className="text-black hover:text-gray-600 transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  className="text-black hover:text-gray-600 transition-colors text-sm font-medium py-2 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
                <button
                  className="btn-gradient-purple flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Talk to Us
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarNew;
