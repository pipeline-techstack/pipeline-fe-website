"use client";

import React from "react";
import circleMd from "../../assets/new/circle-sm.png";
import circleSm from "../../assets/new/circle-sm2.png";
import heroImg from "../../assets/new/hero-img.png";
import Image from "next/image";
import SectionContainer from "../common/section-wrapper2";

function NewHero() {
  return (
   <section className="relative bg-white pb-5 overflow-hidden">
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

  {/* Subtle Blur */}
  <div className="absolute inset-0 backdrop-blur-[0.5px]" />

  {/* Decorative Elements */}
  <div className="hidden lg:block top-[10%] right-[12%] absolute pointer-events-none">
    <Image src={circleMd} alt="" width={25} height={25} />
  </div>

  <div className="hidden lg:block right-[3%] bottom-[20%] absolute pointer-events-none">
    <Image src={circleSm} alt="" width={20} height={20} />
  </div>

  <div className="hidden lg:block top-[25%] left-[50%] absolute pointer-events-none">
    <div className="bg-gradient-purple opacity-90 rounded-full w-3 h-3" />
  </div>

  {/* ✅ Content */}
  <SectionContainer fullWidth className="relative pb-0">
    <div className="items-center gap-10 grid grid-cols-1 lg:grid-cols-2">

      {/* Left Content */}
      <div className="space-y-5">
        <p className="font-medium text-text-dark text-base">
          Revenue Intelligence Platform
        </p>

        <h1 className="font-extrabold text-[38px] text-text-dark leading-tight">
          Understand what&rsquo;s driving the number, and where to focus next
        </h1>

        <p className="max-w-xl text-text-light text-base leading-relaxed">
          Pipeline connects to your CRM, analyzes revenue data, and delivers
          clear signals, shared context, and focused next steps into the tools
          your revenue teams already use.
        </p>

        <div className="pt-2">
          <button
            className="group relative px-4 py-3.5 rounded-xl text-white transition-all"
            style={{
              background:
                "linear-gradient(104.73deg, #5D5FEF 17.44%, #8159DF 108.81%)",
            }}
          >
            <p className="z-10 relative">See How It Works</p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative rounded-2xl h-[400px] overflow-hidden">
          <Image
            src={heroImg}
            alt="Team collaboration - Pipeline Revenue Intelligence"
            fill
            className="object-cover scale-95 -translate-y-6"
            priority
          />
          <div className="bottom-0 left-0 absolute bg-gradient-to-t from-white to-transparent w-full h-20" />
        </div>
      </div>

    </div>
  </SectionContainer>
</section>

     
  );
}

export default NewHero;
