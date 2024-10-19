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
  height = 350,
  navigateArrows = true,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <main className="flex flex-col items-center justify-between" dir="ltr">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={autoPlay ? [Autoplay({ delay: 3000 })] : []}
      >
        <CarouselContent className="w-full" style={{ height: `${height}px` }}>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center max-w-sm sm:max-w-lg p-2 "
              style={{ height: `${height}px` }} // Set height for CarouselItem
            >
              <Image
                src={image}
                width={550}
                height={height} // Use the height prop here
                alt="image"
                className="h-full object-cover rounded-lg"
              />
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
