"use client";

import React from "react";
import Image from "next/image";
import logo from "../../assets/new/logo.png"; // Adjust path as needed
import SectionContainer from "../common/section-wrapper2";
import ellipse from "../../assets/new/Ellipse.png";
const Footer = () => {
  const footerLinks = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Intelligence", href: "#intelligence" },
      { label: "Pricing", href: "#pricing" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Documentation", href: "#documentation" },
      { label: "Blog", href: "#blog" },
      { label: "Support", href: "#support" },
    ],
  };

  return (
    <>
      <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-15">
        <SectionContainer>
          {/* Purple Gradient Card */}
          <div className="relative bg-gradient-purple rounded-[32px] px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-15 overflow-hidden">
            {/* Decorative Ellipse - Top Left */}
            <div className="absolute top-0 left-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 opacity-20 pointer-events-none">
              <div className="w-full h-full border-[3px] border-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Decorative Ellipse - Bottom Right (using uploaded image) */}
            <div className="absolute bottom-0 right-0 w-48 sm:w-56 lg:w-34 h-48 sm:h-56 lg:h-22 pointer-events-none ">
              <Image src={ellipse} alt="" fill className="object-contain" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[2.2rem] font-bold text-white mb-6 sm:mb-6 leading-tight">
                Stay Ahead as Revenue Evolves
              </h2>

              {/* Description */}
              <p className="text-md text-white/90 mb-8 sm:mb-10 lg:mb-5 leading-relaxed max-w-[40rem] mx-auto">
                Pipeline helps CROs and RevOps teams understand what&rsquo;s
                changing beneath the numbers and decide where to focus next, by
                turning CRM data into clear, actionable intelligence.
              </p>

              {/* CTA Button */}
              <button className="bg-white text-text-dark px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                See How Pipeline Fits Into Your RevOps Stack
              </button>
            </div>
          </div>
        </SectionContainer>
      </section>

      <footer className="w-full bg-[#F8FAFC] py-12 sm:py-16 lg:py-5">
        <SectionContainer>
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
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
              <p className="text-sm sm:text-sm max-w-[70%] text-text-light leading-relaxed">
                Revenue intelligence for CROs and RevOps teams
              </p>
            </div>

            {/* Links Grid - 3 Columns Close Together */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* Product Links */}
              <div>
                <h3 className="text-base font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
                  PRODUCT
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-base font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
                  COMPANY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-base font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
                  RESOURCES
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-sm text-text-light hover:text-text-dark transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Copyright */}
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-text-light text-center">
              © Copyright 2026, All Rights Reserved
            </p>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
};

export default Footer;
