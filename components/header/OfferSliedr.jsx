import { images } from "@/constant/images";
import React from "react";
import CarouselImage from "../shared/CarouselImage";

export default function OfferSliedr() {
  return (
    <div className="rounded-lg w-full h-[400px] flex items-center justify-center     overflow-hidden bg-transparent  capitalize  text-foreground ">
      <CarouselImage
        images={images}
        autoPlay
        height={400}
        navigateArrows={false}
      />
    </div>
  );
}
