import { images } from "@/constant/images";
import React from "react";
import CarouselImage from "../shared/CarouselImage";

export default function OfferSliedr() {
  return (
    <div className="rounded-sm w-[80%] h-[100px] flex items-center justify-center bg-card border border-white/20 p-2 px-4 capitalize  text-foreground ">
      <CarouselImage
        images={images}
        autoPlay
        height={100}
        navigateArrows={false}
      />
    </div>
  );
}
