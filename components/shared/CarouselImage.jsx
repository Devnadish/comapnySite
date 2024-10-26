"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { OouiArrowPreviousRtl } from "../icons/NextBtn";
import { OouiArrowPreviousLtr } from "../icons/PreviBtn";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselImage({
  images,
  autoPlay = false,
  continerHeight = 200,
  navigateArrows = true,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const blur =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  return (
    <main
      className={`flex flex-col items-center justify-center h-[${continerHeight}px] bg-card overflow-hidden`}
      dir="ltr"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        plugins={autoPlay ? [Autoplay({ delay: 5000 })] : []}
        className="w-full bg-transparent"
      >
        <CarouselContent className="-ml-1 w-full h-[${continerHeight}px] flex items-center justify-center">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-3 md:basis-1/2 lg:basis-1/3 items-center justify-center flex"
            >
              <div className="relative w-[400px] h-[225px] flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={image}
                  // width={400}
                  // height={255} // Use the height prop here
                  alt="image"
                  fill
                  className="border border-white/20 p-2 rounded-lg"
                  style={{ objectFit: "contain" }}
                  blurDataURL={blur}
                  placeholder="blur"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {navigateArrows && ( // Conditionally render navigation arrows
        <div className="flex justify-between w-full mt-4">
          <Button
            onClick={() => api?.scrollTo(current - 1)}
            className="bg-border"
          >
            <OouiArrowPreviousLtr />
          </Button>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            className="bg-border"
          >
            <OouiArrowPreviousRtl />
          </Button>
        </div>
      )}
    </main>
  );
}
