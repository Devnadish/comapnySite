import Image from "next/image";
import React from "react";
import im1 from "../public/assets/heroSection/1.png";
import im2 from "../public/assets/heroSection/2.png";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center  flex-row">
      {/* <Image src={im1} alt="hero image" sizes="100vw" />
      <Image
        src={im2}
        alt="hero image"
        sizes="(max-width: 767px) 100vw, (max-width: 991px) 66vw, (max-width: 1279px) 62vw, (max-width: 1439px) 64vw, 920.6640625px"
      /> */}
    </div>
  );
}
