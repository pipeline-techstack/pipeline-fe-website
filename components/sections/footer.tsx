"use client";

import Image from "next/image";
import logo from "../../assets/new/logo.png"; // Adjust path as needed
import SectionContainer from "../common/section-wrapper2";
import { FooterProps } from "@/lib/types";

const Footer = ({
  tagline,
  footerLinks
}:FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-5 w-full">
        <SectionContainer>
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
            {/* Brand Column */}
            <div className="lg:max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={logo}
                  alt="Pipeline Logo"
                  width={130}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-sm max-w-full lg:max-w-[70%] text-text-light leading-relaxed">
                {tagline}
              </p>
            </div>

            {/* Divider (mobile only) */}
            <div className="h-px w-full bg-gray-200 lg:hidden" />

            {/* Links Grid */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 lg:gap-16">
              {/* Product */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  PRODUCT
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  COMPANY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  RESOURCES
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Copyright */}
          <div className="pt-6">
            <p className="text-[16px] text-text-light text-center">
              © Copyright {year}, All Rights Reserved
            </p>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
};

export default Footer;
