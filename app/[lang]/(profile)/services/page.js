import React from "react";

import { getDictionary } from "@/lib/dictionary";
import { CarbonApplicationMobile } from "@/components/icons/MobileApp";
import { CarbonApplicationWeb } from "@/components/icons/WebApp";
import {
  BasilAdobePhotoshopOutline,
  MageShop,
  SimpleIconsSalla,
  SimpleIconsShopify,
} from "@/components/icons/Ecomm";
import { PhPaintBrushBold } from "@/components/icons/UiUx";
import { MdiEmailSealOutline } from "@/components/icons/EmailMarkting";
import { SimpleIconsDm } from "@/components/icons/Dm";
import { Nextjs } from "@/components/icons/Nextjs";
import { TablerBrandReactNative } from "@/components/icons/ReactNative";
import { Mdi } from "@/components/icons/Mdi";
import { FlowbiteReactSolid } from "@/components/icons/React";
import {
  LineiconsTailwindcss,
  TeenyiconsHtml5Outline,
} from "@/components/icons/Tailwindcss";
import { DeviconPlainXd, SolarFigmaBold } from "@/components/icons/UI";
import Ask from "@/components/Ask";

export const metadata = {
  title: "Services",
};

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
        className={`relative flex w-full items-center flex-row flex-wrap justify-center   gap-4   px-4 py-6  mt-[70px]  `}
      >
        <Ask />
        {data?.data?.map((willdo) => {
          return (
            <InfoBox
              key={willdo.id}
              icon={willdo.icon}
              titlex={willdo.title}
              subtitlex={willdo.subtitlex}
              alt={willdo.alt}
              tool={willdo.tool}
            />
          );
        })}
      </div>
    </>
  );
}

export default page;

const InfoBox = ({
  titlex,
  subtitlex,
  icon,
  bgColor,
  borderColor,
  fontColor,
  tool = [], // Default to an empty array if tool is undefined
}) => {
  return (
    <div
      className={`flex w-full p-4 min-h-[350px] flex-grow flex-col max-w-[300px] min-w-[300px] items-center justify-center gap-4 rounded-lg border ${borderColor} ${bgColor} hover:border-white/40`}
    >
      {icon}
      <div className="flex flex-col gap-2 w-full ">
        <p className={`font-lateef font-semibold text-xl ${fontColor}`}>
          {titlex}
        </p>
        <p className={`font-lateef text-lg ${fontColor}`}>{subtitlex}</p>
      </div>

      {tool.length > 0 && (
        <div className="flex flex-row justify-around items-center w-full flex-wrap">
          {tool.map((toolItem) => (
            <a key={toolItem} href={toolItem.url} asChild target="_blank">
              <div
                key={toolItem}
                className="text-sm text-gray-600 capitalize flex flex-row items-center gap-2"
              >
                {toolItem.title}
                {toolItem.icon}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export function service(willdo) {
  const width = 30;
  const hight = 30;

  return {
    data: [
      {
        id: "mobileAppTitle",
        title: willdo.mobileApp,
        subtitlex: willdo.mobileAppTitle,
        alt: willdo.mobileAppTitle,
        icon: <CarbonApplicationMobile />,
        tool: [
          {
            title: "reactNative",
            icon: <TablerBrandReactNative width={width} hight={hight} />,
            url: "https://reactnative.dev/",
          },
          {
            title: "nextjs",
            icon: <Nextjs width={width} hight={hight} />,
            url: "",
          },
          {
            title: "nodejs",
            icon: <Mdi width={width} hight={hight} />,
            url: "https://nodejs.org/en",
          },
        ],
      },
      {
        id: "webApp",
        title: willdo.webApp,
        subtitlex: willdo.webAppTitle,
        alt: willdo.webAppTitle,
        icon: <CarbonApplicationWeb />,
        tool: [
          {
            title: "react",
            icon: <FlowbiteReactSolid width={width} hight={hight} />,
            url: "https://reactnative.dev/",
          },
          {
            title: "nextjs",
            icon: <Nextjs width={width} hight={hight} />,
            url: "",
          },
          {
            title: "nodejs",
            icon: <Mdi width={width} hight={hight} />,
            url: "https://nodejs.org/en",
          },
          {
            title: "html",
            icon: <TeenyiconsHtml5Outline width={width} hight={hight} />,
            url: "https://www.w3schools.com/html/",
          },
          {
            title: "tailwincss",
            icon: <LineiconsTailwindcss width={width} hight={hight} />,
            url: "https://tailwindcss.com/",
          },
        ],
      },
      {
        id: "ecommerce",
        title: willdo.ecommerce,
        subtitlex: willdo.ecommerceTitle,
        alt: willdo.ecommerce,
        icon: <MageShop />,
        tool: [
          {
            title: "reactNative",
            icon: <TablerBrandReactNative width={width} hight={hight} />,
            url: "https://reactnative.dev/",
          },
          {
            title: "nextjs",
            icon: <Nextjs width={width} hight={hight} />,
            url: "",
          },
          {
            title: "nodejs",
            icon: <Mdi width={width} hight={hight} />,
            url: "https://nodejs.org/en",
          },
          {
            title: "shopify",
            icon: <SimpleIconsShopify width={width} hight={hight} />,
            url: "https://www.shopify.com/",
          },
          {
            title: "salla",
            icon: <SimpleIconsSalla width={width} hight={hight} />,
            url: "https://s.salla.sa",
          },
        ],
      },
      {
        id: "design",
        title: willdo.design,
        subtitlex: willdo.designTitle,
        alt: willdo.designTitle,
        icon: <PhPaintBrushBold />,
        tool: [
          {
            title: "figma",
            icon: <SolarFigmaBold width={width} hight={hight} />,
            url: "https://www.figma.com/",
          },
          {
            title: "xd",
            icon: <DeviconPlainXd width={width} hight={hight} />,
            url: "https://www.adobe.com/",
          },

          {
            title: "photoshop",
            icon: <BasilAdobePhotoshopOutline width={width} hight={hight} />,
            url: "https://www.shopify.com/",
          },
        ],
      },
      {
        id: "dm",
        title: willdo.digitalMarketing,
        subtitlex: willdo.digitalMarketingTitle,
        alt: willdo.digitalMarketingTitle,
        icon: <SimpleIconsDm />,
      },
      {
        id: "em",
        title: willdo.emailMarketing,
        subtitlex: willdo.emailMarketingTitle,
        alt: willdo.digitalMarketingTitle,
        icon: <MdiEmailSealOutline />,
      },
    ],
  };
}
