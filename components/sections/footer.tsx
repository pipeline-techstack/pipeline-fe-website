"use client";
import React from "react";
import Image from "next/image";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A0721] px-6 md:px-20 xl:px-48 py-12 text-white">
      <div className="flex md:flex-row flex-col justify-between items-center md:items-start gap-10 md:gap-0">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start md:text-left text-center">
          <div className="mb-4">
            <Image
              src={footerLogo}
              alt="Pipeline Logo"
              width={150}
              height={40}
              className="w-auto h-10"
            />
          </div>
          <p className="max-w-xs text-white/80 text-sm">
            Pipeline transforms real-time buyer signals into perfectly-timed,
            personalized outreach.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 font-medium text-white">Follow us on</p>
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
      <div className="bg-[#292742] mt-10 py-4 rounded-lg text-white/80 text-sm text-center">
        © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
