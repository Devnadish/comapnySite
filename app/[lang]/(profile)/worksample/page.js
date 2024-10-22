import dynamic from "next/dynamic";
const BlurImage = dynamic(() => import("@/components/shared/BluerImage"));
const MyDrawer = dynamic(() => import("@/components/shared/Draw"));
import { getDictionary } from "@/lib/dictionary";

import { ImageData } from "@/lib/uiImages";
import { SimpleIconsDm } from "@/components/icons/Dm";
import { SimpleIconsNextui } from "@/components/icons/UI";
import { GuidanceVisualImpairment } from "@/components/icons/Videntity";
import { TeenyiconsSignOutline } from "@/components/icons/SignBoard";
import { GameIconsCharcuterie } from "@/components/icons/Char";
import { GameIconsCircularSawblade } from "@/components/icons/Saw";
import { GisLandcoverMap } from "@/components/icons/CoverPage";
import { FluentMdl2PythonLogoYellow } from "@/components/icons/LogoD";
import { CodiconFileMedia } from "@/components/icons/Flyer";
import { TablerChartInfographic } from "@/components/icons/InfoGraph";
import { IcSharpRestaurantMenu } from "@/components/icons/FoodMenu";
import { HugeiconsPackage } from "@/components/icons/Package";
import { GameIconsTargetPoster } from "@/components/icons/Poster";
export const metadata = {
  title: "Our Work",
};

async function page({ params: { lang } }) {
  const {
    page: { mywork },
  } = await getDictionary(lang);

  const data = myWork2Data(mywork, lang);

  return (
    <>
      <div className="flex flex-wrap flex-row gap-10 p-10 ">
        {data?.data?.map((el) => {
          return (
            <div
              className="w-fit flex-grow flex items-center justify-center"
              key={el.id}
            >
              <MyDrawer
                btnTXT={el.title}
                headTitle={el.title}
                btnIcon={el.icon}
                chip={el.chip}
              >
                <Gallery images={el.imageFolder} />
              </MyDrawer>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default page;

function Gallery({ images }) {
  return (
    <div className="border-1 mx-auto w-full rounded-md border-gray-200/50 px-4 py-4 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 ">
        {images?.map((image, idx) => (
          <BlurImage key={idx} image={image.imgSrc} />
        ))}
      </div>
    </div>
  );
}

export function myWork2Data(data) {
  return {
    data: [
      {
        id: "sm",
        title: data.smMenuTilte,
        icon: <SimpleIconsDm />,
        imageFolder: ImageData("sm", 75),
        chip: 75,
      },
      {
        id: "uiux",
        title: data.uiUxMenuTitle,
        icon: <SimpleIconsNextui />,
        imageFolder: ImageData("ui", 43),
        chip: 43,
      },
      {
        id: "identity",
        title: data.identityMenuTitle,
        icon: <GuidanceVisualImpairment />,
        imageFolder: ImageData("Identity", 10),
        chip: 10,
      },

      {
        id: "signboard",
        title: data.singBoardMEnuTitle,
        icon: <TeenyiconsSignOutline />,
        imageFolder: ImageData("sinboard", 6),
        chip: 6,
      },
      {
        id: "cnc",
        title: data.cncMenuTitle,
        icon: <GameIconsCircularSawblade />,
        imageFolder: ImageData("cnc", 6),
        chip: 5,
      },
      {
        id: "Character",
        title: data.Character,
        icon: <GameIconsCharcuterie />,
        imageFolder: ImageData("character", 10),
        chip: 10,
      },
      {
        id: "Coverpage",
        title: data.Coverpage,
        icon: <GisLandcoverMap />,
        imageFolder: ImageData("coverage", 2),
        chip: 2,
      },
      {
        id: "Logo",
        title: data.Logo,
        icon: <FluentMdl2PythonLogoYellow />,
        imageFolder: ImageData("logo", 28),
        chip: 28,
      },
      {
        id: "flyer",
        title: data.flyer,
        icon: <CodiconFileMedia />,
        imageFolder: ImageData("flyer", 59),
        chip: 59,
      },
      {
        id: "infograph",
        title: data.infograph,
        icon: <TablerChartInfographic />,
        imageFolder: ImageData("infograph", 11),
        chip: 11,
      },
      {
        id: "menu",
        title: data.menu,
        icon: <IcSharpRestaurantMenu />,
        imageFolder: ImageData("menu", 9),
        chip: 9,
      },
      {
        id: "package",
        title: data.package,
        icon: <HugeiconsPackage />,
        imageFolder: ImageData("package", 5),
        chip: 5,
      },
      {
        id: "poster",
        title: data.poster,
        icon: <GameIconsTargetPoster />,
        imageFolder: ImageData("poster", 4),
        chip: 4,
      },
    ],
  };
}
