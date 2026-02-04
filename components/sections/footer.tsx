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
      { label: "Contact", href: "/demo" },
    ],
    resources: [
      { label: "Documentation", href: "#documentation" },
      { label: "Blog", href: "#blog" },
      { label: "Support", href: "#support" },
    ],
  };

  const year =  new Date().getFullYear();
  return (
    <>
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-15 w-full">
        <SectionContainer>
          {/* Purple Gradient Card */}
          <div
            className="
        relative bg-gradient-purple
        rounded-2xl sm:rounded-[32px]
        px-6 sm:px-12 lg:px-16
        py-10 sm:py-16 lg:py-15
        overflow-hidden
      "
          >
            {/* Decorative Ellipse - Top Left */}
            <div className="top-0 left-0 absolute opacity-20 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 pointer-events-none">
              <div className="border-[3px] border-white rounded-full w-full h-full -translate-x-1/2 -translate-y-1/2 transform" />
            </div>

            {/* Decorative Ellipse - Bottom Right */}
            <div className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-34 h-40 sm:h-56 lg:h-22 pointer-events-none">
              <Image src={ellipse} alt="" fill className="object-contain" />
            </div>

            {/* Content */}
            <div className="z-10 relative mx-auto max-w-4xl text-center">
              {/* Heading */}
              <h2
                className="
            text-xl sm:text-4xl lg:text-5xl xl:text-[2.2rem]
            font-bold text-white
            mb-5 sm:mb-6
            leading-tight
          "
              >
                Stay Ahead as Revenue Evolves
              </h2>

              {/* Description */}
              <p
                className="
            text-sm sm:text-md
            text-white/90
            mb-6 sm:mb-10 lg:mb-5
            leading-relaxed
            max-w-[40rem]
            mx-auto
          "
              >
                Pipeline helps CROs and RevOps teams understand what&rsquo;s
                changing beneath the numbers and decide where to focus next, by
                turning CRM data into clear, actionable intelligence.
              </p>

              {/* CTA Button */}
              <button
                className="
            bg-white text-text-dark
            w-full sm:w-auto
            px-6 py-3 sm:px-8 sm:py-4
            rounded-xl
            text-sm sm:text-lg
            font-semibold
            hover:shadow-xl hover:scale-105
            transition-all duration-300
          "
              >
                See How Pipeline Fits Into Your RevOps Stack
              </button>
            </div>
          </div>
        </SectionContainer>
      </section>

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
                Revenue intelligence for CROs and RevOps teams
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
            <p className="text-sm text-text-light text-center">
              © Copyright {year}, All Rights Reserved
            </p>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
};

export default Footer;
