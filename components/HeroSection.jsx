import Image from "next/image";
import React from "react";
import logo from "../public/assets/logoFinal.webp";

export default function HeroSection() {
  return (
    <div
      className={`background   flex  justify-center items-center  w-full  flex-col gap-3`}
    >
      <Image
        src={logo}
        alt={"Dream To App"}
        width={200}
        height={200}
        // className="h-auto w-auto object-cover"
        priority
      />
      <p className="text-orangeColor font-lateef font-extrabold  text-5xl">
        Dream To App
      </p>
    </div>
  );
}
