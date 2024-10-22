import InfoBox from "@/components/InfoBox";
import { StreamlineCallCenterSupportService } from "@/components/icons/Help";
import { FluentPersonSupport28Regular } from "@/components/icons/Techniacl";
import Collabs from "@/components/shared/Collabs";
import { getDictionary } from "@/lib/dictionary";
import { MaterialSymbolsPartnerExchange } from "./icons/exculisve";

async function WillProvide({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { provide },
    },
  } = await getDictionary(lang);

  const data = willProvide(provide);
  return (
    <div className="rounded-lg w-full lg:w-[500px]  bg-yellowColor bg-opacity-70 p-4 flex-col gap-4 flex items-center justify-start    text-foreground ">
      <div className="flex flex-row gap-2 w-full items-center ">
        <MaterialSymbolsPartnerExchange width={50} height={50} />
        <p className="text-2xl font-tajawal font-semibold">{title}</p>
      </div>
      {data?.data?.map((willdo) => {
        return (
          <InfoBox
            key={willdo.id}
            icon={willdo.icon}
            titlex={willdo.title}
            subtitlex={willdo.subtitlex}
            alt={willdo.alt}
            bgColor="bg-yellowColor/40"
            borderColor="border-yellowColor"
            fontColor="text-black"
          />
        );
      })}
    </div>
  );
}
export default WillProvide;

export function willProvide(willdo) {
  return {
    data: [
      {
        id: "Help",
        title: willdo.help,
        subtitlex: willdo.helpTitle,
        alt: willdo.help,
        icon: <StreamlineCallCenterSupportService />,
      },
      {
        id: "Free Consultation",
        title: willdo.freeConsultaion,
        subtitlex: willdo.freeConsultaionTitle,
        alt: willdo.freeConsultaion,
        icon: <FluentPersonSupport28Regular />,
      },
    ],
  };
}
