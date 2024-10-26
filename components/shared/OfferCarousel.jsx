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

export default function OfferCarousel({ images }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-3xl w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      dir="ltr"
    >
      <CarouselContent className="flex ">
        {images.map((image, index) => (
          <CarouselItem key={index}>
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
