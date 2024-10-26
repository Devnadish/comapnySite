"use client";
import React, { useEffect, useState } from "react";
import CarouselImage from "../shared/CarouselImage";
import { getImages } from "../actions/getImages";
import Image from "next/image";
import { ScrollBar } from "../ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;
// const tstImage1 = `${baseUrl}/cnc/1.jpg`;
// const tstImage2 = `${thumbnailBaseUrl}/cnc/2.jpg`;

export default function OfferSlider() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const AWSimages = await getImages("offers/");
        const awsUrl =
          "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";
        // const baseUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_BUCKET_REGION}.amazonaws.com`;
        const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;
        const imageUrls = AWSimages.map((image) => `${awsUrl}${image.Key}`); // Extracting keys and forming URLs
        console.log({ imageUrls });
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <ScrolImage1 images={images} />
    // <>
    //   <div className="rounded-lg w-full max-h-[400px] flex items-center justify-center  ">
    //     {loading ? (
    //       <div className="animate-pulse w-full h-full bg-gray-200 rounded-lg"></div>
    //     ) : (
    //       // <CarouselImage
    //       //   images={images}
    //       //   autoPlay={false}
    //       //   height={400}
    //       //   navigateArrows={false}
    //       //   continerHeight={400}
    //       // />
    //       <ScrolImage1 images={images} />
    //     )}
    //   </div>
    // </>
  );
}

const ScrolImage = ({ images }) => {
  const blur =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  return (
    <div className="w-full h-[300px] bg-gray-200 rounded-lg">
      {images.map((image, index) => (
        <>
          <div className="relative w-[400px] h-[225px] flex items-center justify-center p-4 overflow-hidden">
            <Image
              src={image}
              // width={400}
              // height={255} // Use the height prop here
              alt="image"
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="border border-white/20 p-2 rounded-lg"
              style={{ objectFit: "contain" }}
              blurDataURL={blur}
              placeholder="blur"
            />
          </div>
          <p>{image}</p>
        </>
      ))}
    </div>
  );
};

const ScrolImage1 = ({ images }) => {
  const blur =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex   space-x-4 p-4 overflow-hidden">
          {images.map((image) => (
            <div className="relative overflow-hidden rounded-md w-[400px] h-[225px]">
              <Image
                src={image}
                alt={`Photo by Dream To App`}
                className="h-fit w-fit object-cover"
                // width={400}
                // height={225}
                fill
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
