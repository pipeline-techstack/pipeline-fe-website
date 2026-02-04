"use client";

import React, { useState } from "react";
import Logo from "../common/logo";

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
            <button className="font-medium text-black hover:text-gray-600 text-sm transition-colors">
              Sign In
            </button>
            <button className="flex items-center gap-1 btn-gradient-purple">
              Talk to Us
              <span>➝</span>
            </button>
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
        {isMenuOpen && (
          <div className="md:hidden py-4 border-gray-100 border-t">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="py-2 font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#intelligence"
                className="py-2 font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Intelligence
              </a>
              <a
                href="#industries"
                className="py-2 font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href="#pricing"
                className="py-2 font-medium text-black hover:text-gray-600 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-3 pt-2">
                <button
                  className="py-2 font-medium text-black hover:text-gray-600 text-sm text-left transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
                <button
                  className="flex justify-center items-center gap-2 btn-gradient-purple"
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
