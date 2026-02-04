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
          <div className="relative bg-gradient-purple px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-15 rounded-[32px] overflow-hidden">
            {/* Decorative Ellipse - Top Left */}
            <div className="top-0 left-0 absolute opacity-20 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 pointer-events-none">
              <div className="border-[3px] border-white rounded-full w-full h-full -translate-x-1/2 -translate-y-1/2 transform" />
            </div>

            {/* Decorative Ellipse - Bottom Right (using uploaded image) */}
            <div className="right-0 bottom-0 absolute w-48 sm:w-56 lg:w-34 h-48 sm:h-56 lg:h-22 pointer-events-none">
              <Image src={ellipse} alt="" fill className="object-contain" />
            </div>

            {/* Content */}
            <div className="z-10 relative mx-auto max-w-4xl text-center">
              {/* Heading */}
              <h2 className="mb-6 sm:mb-6 font-bold text-white xl:text-[2.2rem] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Stay Ahead as Revenue Evolves
              </h2>

              {/* Description */}
              <p className="mx-auto mb-8 sm:mb-10 lg:mb-5 max-w-[40rem] text-md text-white/90 leading-relaxed">
                Pipeline helps CROs and RevOps teams understand what&rsquo;s
                changing beneath the numbers and decide where to focus next, by
                turning CRM data into clear, actionable intelligence.
              </p>

              {/* CTA Button */}
              <button className="bg-white hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-text-dark text-base sm:text-lg hover:scale-105 transition-all duration-300">
                See How Pipeline Fits Into Your RevOps Stack
              </button>
            </div>
          </div>
        </SectionContainer>
      </section>

      <footer className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-5 w-full">
        <SectionContainer>
          {/* Main Footer Content */}
          <div className="flex lg:flex-row flex-col justify-between gap-12 mb-12">
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
              <p className="max-w-[70%] text-text-light text-sm sm:text-sm leading-relaxed">
                Revenue intelligence for CROs and RevOps teams
              </p>
            </div>

            {/* Links Grid - 3 Columns Close Together */}
            <div className="gap-8 sm:gap-12 lg:gap-16 grid grid-cols-1 sm:grid-cols-3">
              {/* Product Links */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  PRODUCT
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-text-light hover:text-text-dark text-sm sm:text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  COMPANY
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-text-light hover:text-text-dark text-sm sm:text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="mb-4 font-semibold text-[#6366F1] text-base uppercase tracking-wider">
                  RESOURCES
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-text-light hover:text-text-dark text-sm sm:text-sm transition-colors"
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
          <div className="pt-8 border-gray-100 border-t">
            <p className="text-text-light text-sm text-center">
              © Copyright {year}, All Rights Reserved
            </p>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
};

export default Footer;
