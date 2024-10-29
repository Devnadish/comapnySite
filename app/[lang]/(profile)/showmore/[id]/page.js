import { getImages } from "@/components/actions/getImages";

import ImageGallery from "@/components/ImageGallery";
import BackButton from "@/components/shared/BackButton";

import { convertSlugToNormal } from "@/lib/nadish";
import React from "react";

async function page({ searchParams }) {
  const { tag, title } = searchParams;
  const pageTitle = convertSlugToNormal(title);
  const imageGallary = await getImages(tag + "/");

  console.log({ imageGallary });

  return (
    <div className="text-2xl flex items-center justify-center flex-col min-w-screen w-full min-h-screen p-8 bg-card ">
      <div className="text-2xl flex items-center justify-center flex-col w-full border rounded-lg border-white/40 p-4 ">
        {/* {tag} */}
        <section className="text-xl font-cairo w-full h-[70px] flex items-center justify-between border-b border-white/40">
          <p> {pageTitle}</p>
          <BackButton />
        </section>
        {/* <section>banner</section>
        <article>Info</article> */}
        <section className="w-full flex items-center justify-center">
          <ImageGallery images={imageGallary} />
        </section>
      </div>
    </div>
  );
}

export default page;
