"use client";

import React from "react";
import circleMd from "../../assets/new/circle-sm.png";
import circleSm from "../../assets/new/circle-sm2.png";
import heroImg from "../../assets/new/hero-img.png";
import Image from "next/image";

function NewHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-white shadow-sm">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 40%, 
              rgba(147, 51, 234, 0.12) 0%,
              rgba(168, 85, 247, 0.08) 25%,
              rgba(219, 234, 254, 0.15) 50%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Decorative Circles - Static */}
      {/* Medium Circle - Top Right */}
      <div className="absolute top-[10%] right-[12%] w-20 h-20 pointer-events-none hidden lg:block">
        <Image
          src={circleMd}
          alt=""
          width={25}
          height={25}
          className="object-contain"
        />
      </div>

      {/* Small Circle - Bottom Right */}
      <div className="absolute bottom-[20%] right-[3%] w-14 h-14 pointer-events-none hidden lg:block">
        <Image
          src={circleSm}
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />
      </div>

      {/* Small Circle - Top Center */}
      <div className="absolute top-[25%] left-[55%] w-3 h-3 pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full bg-gradient-purple opacity-90" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[80rem] mx-auto px-12 pt-20 mr-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left Content */}
          <div className="space-y-4 z-10 ml-5">
            {/* Eyebrow Text */}
            <p className="text-text-dark text-[20px] sm:text-base font-medium tracking-normal">
              Revenue Intelligence Platform
            </p>

            {/* Main Heading */}
            <h1 className="text-[50px] font-bold text-text-dark tracking-tight leading-[1.4]">
              Understand what&rsquo;s driving the number, and where to focus next
            </h1>

            {/* Description */}
            <p className="text-text-light text-base sm:text-lg lg:text-[1rem] leading-relaxed max-w-xl font-normal">
              Pipeline connects to your CRM, analyzes revenue data, and delivers
              clear signals, shared context, and focused next steps into the
              tools your revenue teams already use.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                className="group relative px-4 py-3.5 text-white text-base rounded-xl transition-all duration-300 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(104.73deg, #5D5FEF 17.44%, #8159DF 108.81%)",
                }}
              >
                <span className="relative z-10">See How It Works</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          {/* Hero Image Container */}
          <div className="relative">
            <div className="relative max-w-4xl h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={heroImg}
                alt="Team collaboration - Pipeline Revenue Intelligence"
                fill
                className="object-cover scale-95 -translate-y-6"
                priority
                sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 80vw,
             60vw"
              />

              {/* Fade to white */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/100 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewHero;
