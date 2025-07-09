"use client";
import React from "react";
import Image from "next/image";
import {
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A0721] text-white px-6 md:px-20 xl:px-48 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <Image
              src={footerLogo}
              alt="Pipeline Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm text-white/80 max-w-xs">
            Pipeline transforms real-time buyer signals into perfectly-timed, personalized outreach.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-white mb-3 font-medium">Follow us on</p>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn">
              <div className="bg-[#606BCE] hover:bg-[#7a83e1] p-2 rounded-full text-white">
                <Linkedin className="w-5 h-5" />
              </div>
            </a>
            <a href="#" aria-label="YouTube">
              <div className="bg-[#606BCE] hover:bg-[#7a83e1] p-2 rounded-full text-white">
                <Youtube className="w-5 h-5" />
              </div>
            </a>
            <a href="#" aria-label="Instagram">
              <div className="bg-[#606BCE] hover:bg-[#7a83e1] p-2 rounded-full text-white">
                <Instagram className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-10 bg-[#292742] rounded-lg py-4 text-center text-sm text-white/80">
        © Copyright 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
