import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";
import { MajesticonsUxCircleLine } from "@/components/icons/Ux";
import { SimpleIconsNextui } from "@/components/icons/UI";
import { EosIconsPerformance } from "@/components/icons/Performance";
import { IconParkOutlineSeo } from "@/components/icons/Seo";
import { MdiApprove } from "./icons/Approval";

async function WillDo({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { willdo },
    },
  } = await getDictionary(lang);

  const data = WillDoData(willdo);
  return (
    <div className="rounded-lg  w-full   bg-orangeColor bg-opacity-50 p-4 flex-col gap-4 flex items-center justify-center   ">
      <div className="flex flex-row gap-2 w-full items-center ">
        <MdiApprove width={50} height={50} />
        <p className="text-2xl font-tajawal font-semibold">{title}</p>
      </div>
      <div className="w-full  pb-6 flex-row flex-wrap gap-4 flex items-center justify-center  ">
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
