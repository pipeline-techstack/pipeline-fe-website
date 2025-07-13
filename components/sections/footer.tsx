"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-[#0A0721] px-6 md:px-10 xl:px-20 py-12 text-white">
      <div className="flex flex-wrap justify-between gap-y-10 gap-x-8 items-start">
        {/* Logo + Description */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start text-center md:text-left">
=======
    <footer className="bg-[#0A0721] px-4 sm:px-6 md:px-10 xl:px-20 py-10 sm:py-12 text-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-y-10 gap-x-8">
        {/* Logo + Description */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
>>>>>>> dev
          <div className="mb-4">
            <Image
              src={footerLogo}
              alt="Pipeline Logo"
              width={150}
              height={40}
              className="w-auto h-10"
            />
          </div>
          <p className="max-w-xs text-white/80 text-sm leading-relaxed">
            Pipeline transforms real-time buyer signals into perfectly-timed,
            personalized outreach.
          </p>
        </div>

        {/* Social Icons */}
<<<<<<< HEAD
        <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 font-medium text-white text-base">Follow us on</p>
          <div className="flex gap-4">
=======
        <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 font-medium text-white text-base">Follow us on</p>
          <div className="flex gap-4 justify-center md:justify-end">
>>>>>>> dev
            <a
              href="https://www.linkedin.com/company/add-pipeline-ai/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <div className="bg-[#606BCE] hover:bg-[#7a83e1] p-2 rounded-full">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
<<<<<<< HEAD
      <div className="bg-[#292742] mt-10 py-4 rounded-lg text-white/80 text-sm text-center">
=======
      <div className="bg-[#292742] mt-10 py-4 rounded-lg text-white/80 text-xs sm:text-sm text-center">
>>>>>>> dev
        © {new Date().getFullYear()} Pipeline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
