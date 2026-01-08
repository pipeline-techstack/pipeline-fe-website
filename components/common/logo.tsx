import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 50,
  height = 50,
  className = "",
}) => {
  return (
    <div
      className={`text-center cursor-pointer ${className}`}
      onClick={() => redirect("/")}
    >
      <Image
        src={logo}
        alt="Pipeline Logo"
        width={width}
        height={height}
        className="mx-auto"
      />
    </div>
  );
};

export default Logo;
