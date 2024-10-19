import ShowHint from "@/components/shared/ShowHint";
import React from "react";
import {
  TabletSmartphone,
  Layout,
  Smile,
  Palette,
  Figma,
  Paintbrush2,
} from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { gradint1 } from "@/constant/constant";
import Services, { service } from "@/components/Services";
import InfoBox from "@/components/InfoBox";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { services },
    },
  } = await getDictionary(lang);
  const data = service(services);
  return (
    <div
      className={`flex w-full items-center flex-col justify-center   gap-4   px-4 py-6 ${gradint1}  `}
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
  );
}

export default page;
