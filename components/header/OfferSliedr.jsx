"use client";
import React, { useEffect, useState } from "react";
import CarouselImage from "../shared/CarouselImage";
import { getImages } from "../actions/getImages";

const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;

export default function OfferSlider() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const AWSimages = await getImages("offers/");
        const baseUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_BUCKET_REGION}.amazonaws.com/`;
        const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;
        const imageUrls = AWSimages.map((image) => `${baseUrl}${image.Key}`); // Extracting keys and forming URLs
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
    <>
      <div className="rounded-lg w-full h-[300px] flex items-center justify-center overflow-hidden bg-transparent capitalize text-foreground">
        {loading ? (
          <div className="animate-pulse w-full h-full bg-gray-200 rounded-lg"></div>
        ) : (
          <CarouselImage
            images={images}
            autoPlay
            height={400}
            navigateArrows={false}
            continerHeight={400}
          />
        )}
      </div>
    </>
  );
}
