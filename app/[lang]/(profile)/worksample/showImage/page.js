import Image from "next/image";
import React from "react";

function Page({ searchParams }) {
  const { url } = searchParams;

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative flex items-center justify-center max-h-[400px] max-w-[400px] rounded-lg  overflow-hidden p-6 border">
        <Image
          src={url}
          alt={url}
          width={400} // Set a width for the image
          height={300} // Set a height for the image
          className="max-h-[400px] max-w-[400px] object-cover rounded-lg " // Use object-cover to fit the image
        />
      </div>
    </div>
  );
}

export default Page;
