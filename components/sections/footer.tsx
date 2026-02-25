"use client";

import Image from "next/image";
import logo from "../../assets/new/logo.png"; // Adjust path as needed
import SectionContainer from "../common/section-wrapper2";
import { FooterProps } from "@/lib/types";
import { useEffect, useState } from "react";

const Footer = ({ page }: { page: string }) => {
  const year = new Date().getFullYear();
  const [data, setData] = useState<FooterProps>();

  useEffect(() => {
    if (page === "revenue") {
      setData({
        tagline: "Revenue intelligence for CROs and RevOps teams",
        footerLinks: {
          product: [
            { label: "How It Works", href: "#how-it-works" },
            { label: "Intelligence", href: "#intelligence" },
            { label: "Pricing", href: "#pricing" },
          ],
          company: [
            { label: "About", href: "#about" },
            { label: "Careers", href: "#careers" },
            { label: "Contact", href: "/demo?page=revenue" },
          ],
          resources: [
            { label: "Documentation", href: "#documentation" },
            { label: "Blog", href: "#blog" },
            { label: "Support", href: "#support" },
          ],
        },
      });
    } else {
      setData({
        tagline: "Precision Outbound for Growth-Stage B2B Teams",
        footerLinks: {
          product: [
            { label: "How It Works", href: "#approach" },
            { label: "Platform", href: "#platform" },
            { label: "Impact", href: "#impact" },
          ],
          company: [
            { label: "Solution", href: "#solution" },
            { label: "Outcome", href: "#outcome" },
            { label: "Contact", href: "/demo?page=outbound" },
          ],
          resources: [
            { label: "Documentation", href: "#documentation" },
            { label: "Blog", href: "#blog" },
            { label: "Support", href: "#support" },
          ],
        },
      });
    }
  }, [page]);

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
                {data?.tagline}
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
                  {data?.footerLinks.product.map((link, index) => (
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
                  {data?.footerLinks.company.map((link, index) => (
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
                  {data?.footerLinks.resources.map((link, index) => (
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
