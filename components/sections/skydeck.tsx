import React from "react";
import Image from "next/image";
import skydeckImage from "../../assets/Skydec.png";
const Skydeck = () => {
  return (
    <div className="bg-[#F9FAFF] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <Image
          src={skydeckImage}
          alt="Backed by Berkeley SkyDeck"
          className="w-full h-auto rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Skydeck;
