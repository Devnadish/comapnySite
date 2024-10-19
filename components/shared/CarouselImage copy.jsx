"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { OouiArrowPreviousRtl } from "../icons/NextBtn";
import { OouiArrowPreviousLtr } from "../icons/PreviBtn";
import Image from "next/image";

export default function EmblaCarousel({ images }) {
  const autoplay = Autoplay({ delay: 3000 }); // Set autoplay delay to 3000ms
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Determine slides based on images or fallback to numbers
  const slides =
    images && images.length > 0
      ? images.map((image, index) => (
          <div
            key={index}
            className="embla__slide flex items-center justify-center"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full object-cover"
              fill
            />
          </div>
        ))
      : Array.from(
          { length: 5 },
          (
            _,
            index // Default to 5 numbered slides
          ) => (
            <div
              key={index}
              className="embla__slide flex items-center justify-center"
            >
              <span className="text-white text-2xl">Slide {index + 1}</span>
            </div>
          )
        );

  return (
    <div className="embla mx-auto mt-12 max-w-lg min-w-[350px]">
      <div
        className="embla__viewport h-56 border rounded-lg bg-zinc-900 border-white/40"
        ref={emblaRef}
      >
        <div className="embla__container h-full">{slides}</div>
      </div>

      <div className="mt-3 flex justify-between w-full">
        <button
          className="text-sm text-white rounded-full border-4 border-white/40"
          onClick={scrollPrev}
        >
          <OouiArrowPreviousLtr />
        </button>
        <button
          className="text-sm text-white rounded-full border-4 border-white/40"
          onClick={scrollNext}
        >
          <OouiArrowPreviousRtl />
        </button>
      </div>
    </div>
  );
}
