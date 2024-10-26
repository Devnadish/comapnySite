import CarouselImage from "@/components/shared/CarouselImage";
import { images } from "@/constant/images";
import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "@/components/HeroSection";
import OfferSliedr from "@/components/header/OfferSliedr";
import MyDrawer from "@/components/shared/Draw";
import Footer from "@/components/Footer";
import WorkGallary from "@/components/header/WorkGallary";
import Image from "next/image";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);
  const baseUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_BUCKET_REGION}.amazonaws.com`;
  const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;
  const tstImage1 = `${baseUrl}/cnc/1.jpg`;
  const tstImage2 = `${thumbnailBaseUrl}/cnc/2.jpg`;
  return (
    <>
      <HeroSection />
      {/* <div className="flex items-center justify-center w-full mt-10 border ">
        <p>Test Busckt s3</p>
        <Image
          src={tstImage1}
          width={200}
          height={200}
          className="object-cover p-4 rounded-lg border-2 border-red-500"
          alt="test"
        />
      </div> */}
      <div className="flex items-center justify-center w-full mt-10 border ">
        <p>Test Busckt s3 optmized</p>
        <Image
          src={tstImage2}
          width={200}
          height={200}
          className="object-cover p-4 rounded-lg border-2 border-red-500"
          alt="test"
        />
      </div>

      <div className="flex w-full items-center flex-col justify-center    gap-4   px-4 py-6">
        <OfferSliedr />
        <div className=" w-full flex flex-row items-start justify-center flex-wrap gap-4">
          <Services lang={lang} title={homePage.service} />
          <Tecno lang={lang} title={homePage.expert} />
          <WillProvide lang={lang} title={homePage.foryou} />
          <WillDo lang={lang} title={homePage.ensure} />
        </div>
        <WorkGallary />
        <Footer />
      </div>
    </>
  );
}

export default page;
