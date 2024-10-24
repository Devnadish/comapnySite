import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";

import { CarbonApplicationMobile } from "@/components/icons/MobileApp";
import { CarbonApplicationWeb } from "@/components/icons/WebApp";
import { MageShop } from "@/components/icons/Ecomm";
import { PhPaintBrushBold } from "@/components/icons/UiUx";
import { MdiEmailSealOutline } from "@/components/icons/EmailMarkting";
import { SimpleIconsDm } from "@/components/icons/Dm";
import Collabs from "@/components/shared/Collabs";
import { IcRoundTouchApp } from "./icons/OurService";

async function Services({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { services },
    },
  } = await getDictionary(lang);
  const data = service(services);

  return (
    <div className="rounded-lg w-full lg:w-[500px]  bg-greenColor bg-opacity-70  p-4 flex-col gap-4 flex items-center justify-star    text-foreground ">
      <div className="flex flex-row gap-2 w-full items-center ">
        <IcRoundTouchApp width={50} height={50} />
        <p className="text-2xl font-tajawal font-semibold">{title}</p>
      </div>{" "}
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
          />
        );
      })}
    </div>
  );
}
export default Services;
export function service(willdo) {
  return {
    data: [
      {
        id: "mobileAppTitle",
        title: willdo.mobileApp,
        subtitlex: willdo.mobileAppTitle,
        alt: willdo.mobileAppTitle,
        icon: <CarbonApplicationMobile />,
      },
      {
        id: "webApp",
        title: willdo.webApp,
        subtitlex: willdo.webAppTitle,
        alt: willdo.webAppTitle,
        icon: <CarbonApplicationWeb />,
      },
      {
        id: "ecommerce",
        title: willdo.ecommerce,
        subtitlex: willdo.ecommerceTitle,
        alt: willdo.ecommerce,
        icon: <MageShop />,
      },
      {
        id: "design",
        title: willdo.design,
        subtitlex: willdo.designTitle,
        alt: willdo.designTitle,
        icon: <PhPaintBrushBold />,
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
