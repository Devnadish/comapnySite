import Image from "next/image";
import React from "react";
import logo from "../public/assets/logoFinal.webp";
import MyDrawer from "./shared/Draw";

export default function HeroSection() {
  return (
    <div
      className={`background   flex  justify-center items-center  w-full  flex-col gap-3`}
    >
      <Image src={logo} alt={"Dream To App"} width={200} priority />
      <p className="text-orangeColor font-lateef font-extrabold text-lg md:text-5xl">
        Dream To App <span className="text-blueColor text-sm">v01</span>
      </p>

      <MyDrawer />
    </div>
  );
}
