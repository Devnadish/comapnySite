import InfoBox from "@/components/InfoBox";
import { StreamlineCallCenterSupportService } from "@/components/icons/Help";
import { FluentPersonSupport28Regular } from "@/components/icons/Techniacl";
import Collabs from "@/components/shared/Collabs";
import { getDictionary } from "@/lib/dictionary";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaJenkins } from "@react-icons/all-files/fa/FaJenkins";

async function WillProvide({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { provide },
    },
  } = await getDictionary(lang);

  const data = willProvide(provide);
  return (
    <Collabs title={title}>
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
