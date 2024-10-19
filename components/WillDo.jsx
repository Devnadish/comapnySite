import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";
import { MajesticonsUxCircleLine } from "@/components/icons/Ux";
import { SimpleIconsNextui } from "@/components/icons/UI";
import { EosIconsPerformance } from "@/components/icons/Performance";
import { IconParkOutlineSeo } from "@/components/icons/Seo";
import Collabs from "@/components/shared/Collabs";

async function WillDo({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { willdo },
    },
  } = await getDictionary(lang);

  const data = WillDoData(willdo);
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
export default WillDo;

export function WillDoData(willdo) {
  return {
    data: [
      {
        id: "UI",
        title: willdo.Ui,
        subtitlex: willdo.UiDetail,
        alt: willdo.Ui,
        icon: <SimpleIconsNextui />,
      },
      {
        id: "UX",
        title: willdo.Ux,
        subtitlex: willdo.UxDetail,
        alt: willdo.Ux,
        icon: <MajesticonsUxCircleLine />,
      },
      {
        id: "Perfomance",
        title: willdo.perfomance,
        subtitlex: willdo.perfomanceTitle,
        alt: willdo.perfomance,
        icon: <EosIconsPerformance />,
      },
      {
        id: "SEO",
        title: willdo.seo,
        subtitlex: willdo.seoTitle,
        alt: willdo.seo,
        icon: <IconParkOutlineSeo />,
      },
    ],
  };
}
