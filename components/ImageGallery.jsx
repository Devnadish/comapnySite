"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center bg-muted rounded-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            {loading && <Skeleton className="absolute inset-0 bg-gray-200" />}
            <Image
              src={image}
              alt={`Image ${index + 1}`} // Better alt text for SEO
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className={`object-cover transition-opacity duration-300 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={() => setLoading(false)} // Handle image load error
            />
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                <Expand className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for selected image */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogTrigger asChild>
            <Button className="hidden" />
          </DialogTrigger>
          <DialogContent className="w-[90%] h-[90%]">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Expanded Image"
                fill
                className="object-contain"
                onLoadingComplete={() => setLoading(false)}
                loading="lazy"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
