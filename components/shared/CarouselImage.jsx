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

// export default function CarouselImage({
//   images,
//   autoPlay = false,
//   continerHeight = 200,
//   navigateArrows = true,
// }) {
//   console.log(images);
//   const [api, setApi] = useState();

//   //   if (!api) {
//   //     return;
//   //   }

//   //   setCurrent(api.selectedScrollSnap());

//   //   api.on("select", () => {
//   //     setCurrent(api.selectedScrollSnap());
//   //   });
//   //   console.log(api);
//   // }, [api]);
//   const blur =
//     "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

//   return (
//     <main
//       className={`flex flex-col items-center justify-center h-[${continerHeight}px] bg-card overflow-hidden`}
//       dir="ltr"
//     >
//       <Carousel
//         setApi={setApi}
//         opts={{ loop: true, align: "center" }}
//         plugins={autoPlay ? [Autoplay({ delay: 5000 })] : []}
//         className="w-full bg-transparent"
//       >
//         <CarouselContent className="-ml-1 w-full h-[${continerHeight}px] flex items-center justify-center">
//           {images.map((image, index) => (
//             <CarouselItem
//               key={index}
//               className="pl-3 md:basis-1/2 lg:basis-1/3 items-center justify-center flex"
//             >
//               <div className="relative w-[400px] h-[225px] flex items-center justify-center p-4 overflow-hidden">
//                 <Image
//                   src={image}
//                   // width={400}
//                   // height={255} // Use the height prop here
//                   alt="image"
//                   fill
//                   className="border border-white/20 p-2 rounded-lg"
//                   style={{ objectFit: "contain" }}
//                   blurDataURL={blur}
//                   placeholder="blur"
//                 />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </main>
//   );
// }

export default function CarouselImage({ images }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      dir="ltr"
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
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
