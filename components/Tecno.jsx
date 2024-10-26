import InfoBox from "@/components/InfoBox";
import { getDictionary } from "@/lib/dictionary";

import { Nextjs } from "@/components/icons/Nextjs";
import { FlowbiteReactSolid } from "@/components/icons/React";
import { TablerBrandReactNative } from "@/components/icons/ReactNative";
import { LineiconsMongodb } from "@/components/icons/MongoDb";
import { TeenyiconsFirebaseSolid } from "@/components/icons/FireBase";
import { FontistoAws } from "@/components/icons/Aws";
import { FileIconsPrisma } from "@/components/icons/Prisma";
import { FileIconsPowerbuilder } from "@/components/icons/Experts";
import { Mdi } from "./icons/Mdi";
// import { NodeJsIcon } from "@/components/icons/NodeJsIcon";

export function tecno(willdo) {
  return {
    data: [
      {
        id: "nextjs",
        title: willdo.nextjs,
        subtitlex: willdo.nextjsTitle,
        alt: willdo.Ui,
        icon: <Nextjs />,
      },
      {
        id: "nodejs",
        title: willdo.nodejs,
        subtitlex: willdo.nodejsTitle,
        alt: willdo.Ux,
        icon: <Mdi />,
      },
      {
        id: "react",
        title: willdo.react,
        subtitlex: willdo.reactTitle,
        alt: willdo.perfomance,
        icon: <FlowbiteReactSolid />,
      },
      {
        id: "reactnative",
        title: willdo.reactnative,
        subtitlex: willdo.reactnativeTitle,
        alt: willdo.reactnative,
        icon: <TablerBrandReactNative />,
      },
      {
        id: "mongoDB",
        title: willdo.mongoDB,
        subtitlex: willdo.mongoDBTitle,
        alt: willdo.mongoDBTitle,
        icon: <LineiconsMongodb />,
      },
      {
        id: "firebase",
        title: willdo.firebase,
        subtitlex: willdo.firebaseTitle,
        alt: willdo.firebaseTitle,
        icon: <TeenyiconsFirebaseSolid />,
      },
      {
        id: "awsTitle",
        title: willdo.aws,
        subtitlex: willdo.awsTitle,
        alt: willdo.awsTitle,
        icon: <FontistoAws />,
      },
      {
        id: "prisma",
        title: willdo.prisma,
        subtitlex: willdo.prismaTitle,
        alt: willdo.prisma,
        icon: <FileIconsPrisma />,
      },
    ],
  };
}
async function Tecno({ lang, title = "We Grantee The Following" }) {
  const {
    page: {
      about: { tcno },
    },
  } = await getDictionary(lang);
  const data = tecno(tcno);

  return (
    <div
      id="tecno"
      className="rounded-lg w-full   bg-blueColor bg-opacity-50 p-4 flex-col gap-4 flex items-center justify-center  "
    >
      <div className="flex flex-row gap-2 w-full items-center ">
        <FileIconsPowerbuilder width={50} height={50} />
        <p className="text-2xl font-tajawal font-semibold">{title}</p>
      </div>
      <div className="w-full  flex  flex-row pb-6 flex-wrap gap-4 items-center justify-center    text-foreground ">
        {data?.data?.map((willdo) => {
          return (
            <InfoBox
              key={willdo.id}
              icon={willdo.icon}
              titlex={willdo.title}
              subtitlex={willdo.subtitlex}
              alt={willdo.alt}
              bgColor="bg-blueColor/40"
              borderColor="border-blueColor"
              fontColor="text-white"
            />
          );
        })}
      </div>
    </div>
  );
}
export default Tecno;
