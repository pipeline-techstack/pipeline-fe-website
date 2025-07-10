"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A0721] px-6 md:px-10 xl:px-20 py-12 text-white">
      <div className="flex flex-wrap justify-between gap-y-10 gap-x-8 items-start">
        {/* Logo + Description */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start text-center md:text-left">
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
        <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-end text-center md:text-right">
          <p className="mb-3 font-medium text-white text-base">Follow us on</p>
          <div className="flex gap-4">
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
      <div className="bg-[#292742] mt-10 py-4 rounded-lg text-white/80 text-sm text-center">
        © {new Date().getFullYear()} Pipeline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
