import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";
import { MajesticonsUxCircleLine } from "@/components/icons/Ux";
import { SimpleIconsNextui } from "@/components/icons/UI";
import { EosIconsPerformance } from "@/components/icons/Performance";
import { IconParkOutlineSeo } from "@/components/icons/Seo";
import Collabs from "@/components/shared/Collabs";
import { MdiApprove } from "./icons/Approval";

async function WillDo({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { willdo },
    },
  } = await getDictionary(lang);

  const data = WillDoData(willdo);
  return (
    // <Collabs title={title} icon={<MdiApprove />} lang={lang} isOpen={true}>
    <div className="rounded-lg w-full lg:w-[500px]  bg-orangeColor bg-opacity-50 p-4 flex-col gap-4 flex items-center justify-center    text-foreground ">
      <div className="flex flex-row gap-2 w-full items-center ">
        <MdiApprove width={50} height={50} />
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
            bgColor="bg-orangeColor/40"
            borderColor="border-orangeColor"
            fontColor="text-white"
          />
        );
      })}
    </div>
    // </Collabs>
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
