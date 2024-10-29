import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";

import { CarbonApplicationMobile } from "@/components/icons/MobileApp";
import { CarbonApplicationWeb } from "@/components/icons/WebApp";
import { MageShop } from "@/components/icons/Ecomm";
import { MdiEmailSealOutline } from "@/components/icons/EmailMarkting";
import { SimpleIconsDm } from "@/components/icons/Dm";
import { IcRoundTouchApp } from "@/components/icons/OurService";
import { SimpleIconsNextui } from "@/components/icons/UI";

async function Services({ lang, title, more }) {
  const {
    page: {
      about: { services },
    },
  } = await getDictionary(lang);
  const data = service(services);

  return (
    <div className="rounded-lg  flex-col     w-full    bg-greenColor bg-opacity-70  p-4 flex-warp gap-4 flex items-center justify-star    text-foreground ">
      <div className="flex flex-row gap-2 w-full items-center ">
        <IcRoundTouchApp width={50} height={50} />
        <p className="text-2xl font-cairo font-semibold">{title}</p>
      </div>

      <div className="rounded-lg  flex flex-row   pb-6  w-full flex-wrap gap-4  items-center justify-center    text-foreground ">
        {data?.data?.map((willdo) => {
          return (
            <InfoBox
              key={willdo.id}
              icon={willdo.icon}
              titlex={willdo.title}
              subtitlex={willdo.subtitlex}
              alt={willdo.alt}
              bgColor="bg-greenColor/40"
              borderColor="border-greenColor"
              fontColor="text-black"
              more={more}
              lang={lang}
              tag={willdo.tag}
              id={willdo.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Services;
export function service(willdo) {
  return {
    data: [
      {
        id: "mobileApp",
        title: willdo.mobileApp,
        subtitlex: willdo.mobileAppTitle,
        alt: willdo.mobileAppTitle,
        icon: <CarbonApplicationMobile />,
        tag: "mobile_app",
      },
      {
        id: "webApp",
        title: willdo.webApp,
        subtitlex: willdo.webAppTitle,
        alt: willdo.webAppTitle,
        icon: <CarbonApplicationWeb />,
        tag: "website",
      },
      {
        id: "ecommerce",
        title: willdo.ecommerce,
        subtitlex: willdo.ecommerceTitle,
        alt: willdo.ecommerce,
        icon: <MageShop />,
        tag: "ecomm",
      },
      {
        id: "ui",
        title: willdo.design,
        subtitlex: willdo.designTitle,
        alt: willdo.designTitle,
        icon: <SimpleIconsNextui />,
        tag: "ui",
      },
      {
        id: "sm",
        title: willdo.digitalMarketing,
        subtitlex: willdo.digitalMarketingTitle,
        alt: willdo.digitalMarketingTitle,
        icon: <SimpleIconsDm />,
        tag: "sm",
      },
      {
        id: "em",
        title: willdo.emailMarketing,
        subtitlex: willdo.emailMarketingTitle,
        alt: willdo.digitalMarketingTitle,
        icon: <MdiEmailSealOutline />,
        tag: "emailmarkting",
      },
    ],
  };
}
