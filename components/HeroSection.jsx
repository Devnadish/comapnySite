import Image from "next/image";
import React from "react";
import logo from "../public/assets/logoFinal.webp";
import bg from "../public/bg.webp";
import MyDrawer from "./shared/Draw";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center w-full flex-col gap-3 ">
      {/* Background Image */}
      <div className="relative w-screen h-screen flex justify-center items-center flex-col gap-3 -z-1 ">
        <Image
          src={bg}
          alt={"Dream To App"}
          placeholder="blur"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-screen h-screen  flex justify-center items-center flex-col gap-3 z-10">
        <Image src={logo} alt={"Dream To App"} width={200} />
        <p className="text-orangeColor font-lateef font-extrabold text-lg md:text-5xl">
          Dream To App <span className="text-blueColor text-sm">v01</span>
        </p>
        <MyDrawer />
      </div>
    </div>
  );
}
