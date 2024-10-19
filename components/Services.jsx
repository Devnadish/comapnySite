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
    <Collabs title={title} icon={<IcRoundTouchApp />} lang={lang}>
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
    </Collabs>
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
