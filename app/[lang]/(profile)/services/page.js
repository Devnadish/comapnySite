import React from "react";

import { getDictionary } from "@/lib/dictionary";
import { service } from "@/components/Services";
import InfoBox from "@/components/InfoBox";

export const metadata = {
  title: "Services",
};

// export function generateImageMetadata({ params }) {
// }

async function page({ params: { lang } }) {
  const {
    page: {
      about: { services },
    },
  } = await getDictionary(lang);
  const data = service(services);
  return (
    <>
      <div
        className={`relative flex w-full items-center flex-col justify-center   gap-4   px-4 py-6  bg-bannerImg `}
      >
        {data?.data?.map((willdo) => {
          return (
            <InfoBox
              key={willdo.id}
              icon={willdo.icon}
              titlex={willdo.title}
              subtitlex={willdo.subtitlex}
              alt={willdo.alt}
            />
          );
        })}
      </div>
    </>
  );
}

export default page;
