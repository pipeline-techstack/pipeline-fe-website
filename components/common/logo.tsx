import React from "react";
import logo from "../../assets/new/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 130,
  height = 130,
  className = "",
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/#hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`text-center cursor-pointer ${className}`}
      onClick={handleClick}
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
