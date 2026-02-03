"use client";

import React from "react";
import circleMd from "../../assets/new/circle-sm.png";
import circleSm from "../../assets/new/circle-sm2.png";
import heroImg from "../../assets/new/hero-img.png";
import gridImg from "../../assets/new/grid.png";
import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";

function NewHero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#C4C4C4]/50 pb-5">
      {/* Grid Background */}
      <div className="absolute right-70 top-0 w-[60%] h-[40%] pointer-events-none">
        <Image
          src={gridImg}
          alt=""
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
        radial-gradient(ellipse 70% 30% at 70% 30%, 
          rgba(147, 51, 234, 0.12) 0%,
          rgba(168, 85, 247, 0.08) 25%,
          rgba(219, 234, 254, 0.15) 50%,
          transparent 80%
        )
      `,
        }}
      />

      {/* Subtle Blur */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Decorative Elements */}
      <div className="absolute top-[10%] right-[12%] hidden lg:block pointer-events-none">
        <Image src={circleMd} alt="" width={25} height={25} />
      </div>

      <div className="absolute bottom-[20%] right-[3%] hidden lg:block pointer-events-none">
        <Image src={circleSm} alt="" width={20} height={20} />
      </div>

      <div className="absolute top-[25%] left-[50%] hidden lg:block pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-gradient-purple opacity-90" />
      </div>

      {/* ✅ Content */}
      <SectionContainer fullWidth className="relative pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <p className="text-text-dark text-base font-medium">
              Revenue Intelligence Platform
            </p>

            <h1 className="text-[38px] font-extrabold text-text-dark leading-tight">
              Understand what&rsquo;s driving the number, and where to focus
              next
            </h1>

            <p className="text-text-light text-base max-w-xl leading-relaxed">
              Pipeline connects to your CRM, analyzes revenue data, and delivers
              clear signals, shared context, and focused next steps into the
              tools your revenue teams already use.
            </p>

            <div className="pt-2">
              <button
                className="group relative px-4 py-3.5 text-white rounded-xl transition-all"
                style={{
                  background:
                    "linear-gradient(104.73deg, #5D5FEF 17.44%, #8159DF 108.81%)",
                }}
              >
                <p className="relative z-10">See How It Works</p>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={heroImg}
                alt="Team collaboration - Pipeline Revenue Intelligence"
                fill
                className="object-cover scale-90 -translate-y-6"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default NewHero;
