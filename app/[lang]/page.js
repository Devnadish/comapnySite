import CarouselImage from "@/components/shared/CarouselImage";
import { images } from "@/constant/images";
import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "@/components/HeroSection";
import OfferSliedr from "@/components/header/OfferSliedr";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);
  return (
    <>
      <HeroSection />
      <div className="flex w-full items-center flex-col justify-center    gap-4   px-4 py-6">
        <OfferSliedr />
        <div className="w-full flex flex-row items-start justify-center flex-wrap gap-4">
          <WillDo lang={lang} title={homePage.ensure} />
          <WillProvide lang={lang} title={homePage.foryou} />

          <Tecno lang={lang} title={homePage.expert} />
          <Services lang={lang} title={homePage.service} />
        </div>
        <CarouselImage images={images} />
      </div>
    </>
  );
}

export default page;
