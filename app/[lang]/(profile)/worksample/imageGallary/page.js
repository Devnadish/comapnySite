// app/[lang]/(profile)/worksample/imageGallery/page.js

import { getImages } from "@/components/actions/getImages";
import { Icons8ResizeFourDirections } from "@/components/icons/Resize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ searchParams }) => {
  const { prefix } = searchParams;
  const prfx = prefix ? `${prefix}/` : ""; // Ensure prefix is defined
  const images = await getImages(prfx);

  const baseUrl = `https://${process.env.GALLARY_BUCKET_NAME}.s3.${process.env.GALLARY_BUCKET_REGION}.amazonaws.com/`;

  const thumbnailBaseUrl = `${process.env.GALLARY_THUMBNAIL_ENDPOINT}/300x300/`;

  const imageUrls = getImageUrls(images, baseUrl, thumbnailBaseUrl);

  if (images.length === 0) {
    return <div>No images found.</div>;
  }
  return (
    <>
      <div className="p-5 md:p-10 max-w-screen-lg mx-auto flex items-center justify-center">
        <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
          {imageUrls.map((image) => {
            return (
              <div
                key={image.thumbnailUrl}
                className="relative overflow-hidden rounded-lg shadow-md "
              >
                <Link
                  href={`/en/worksample/showImage?url=${image.imageUrl}`}
                  className="absolute top-5 left-5 z-10 size-[30px] bg-slate-300 rounded-md flex items-center justify-center shadow-md "
                >
                  <Icons8ResizeFourDirections width={24} height={24} />
                </Link>
                <Image
                  src={image.thumbnailUrl}
                  alt={image.thumbnailUrl}
                  width={300} // Set a width for the image
                  height={225} // Set a height for the image
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                  priority // Optional: Use priority loading for important images
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;

const getImageUrls = (images, baseUrl, thumbnailBaseUrl) => {
  return images.map((image) => {
    const imageKey = image.Key; // Get the image key
    const imageUrl = `${baseUrl}${imageKey}`; // Construct the full image URL
    const thumbnailUrl = `${thumbnailBaseUrl}${imageKey}`; // Construct the thumbnail URL

    return {
      imageUrl,
      thumbnailUrl,
    };
  });
};

// Get the URLs
