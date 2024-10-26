"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function ProductCarousel({ images }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      dir="ltr"
    >
      <CarouselContent className="flex ">
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex   items-center justify-center p-6 ">
                  <div className="relative w-[400px] h-[225px] flex items-center justify-center p-4 overflow-hidden">
                    <Image
                      src={image}
                      alt="image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
