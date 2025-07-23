import React from "react";
import Image from "next/image";
import skydeckImage from "../../assets/Skydec.png";

const Skydeck = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="mx-auto">
        <Image
          src={skydeckImage}
          alt="Backed by Berkeley SkyDeck"
          className="rounded-2xl w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Skydeck;
