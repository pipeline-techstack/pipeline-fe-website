"use client";
import React from "react";
import { Linkedin } from "lucide-react";
import Logo from "../common/logo";

const Footer = () => {
  return (
    <footer className="bg-[#0A0721] px-4 sm:px-6 md:px-10 xl:px-20 py-10 sm:py-12 text-white">
      <div className="flex md:flex-row flex-col flex-wrap justify-between items-center md:items-start gap-x-8 gap-y-10">
        {/* Logo + Description */}
        <div className="flex flex-col flex-1 items-center md:items-start mb-6 md:mb-0 min-w-[220px] md:text-left text-center">
          <Logo />
          <p className="max-w-xs text-white/80 text-sm leading-relaxed">
            Pipeline transforms real-time buyer signals into perfectly-timed,
            personalized outreach.
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex flex-col flex-1 items-center md:items-end min-w-[180px] text-center md:text-right">
          <p className="mb-3 font-medium text-white text-base">Follow us on</p>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/company/add-pipeline-ai/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition transform"
            >
              <div className="bg-[#606BCE] hover:bg-[#7a83e1] p-2 rounded-full">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#292742] mt-10 py-4 rounded-lg text-white/80 text-xs sm:text-sm text-center">
        © {new Date().getFullYear()} Pipeline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
