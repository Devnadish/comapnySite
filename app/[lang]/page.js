import CarouselImage from "@/components/shared/CarouselImage";
import { images } from "@/constant/images";
import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { gradint1 } from "@/constant/constant";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "@/components/HeroSection";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);
  return (
    <div
      className={`flex w-full items-center flex-col justify-center   gap-4   px-4 py-6 ${gradint1}  `}
    >
      <HeroSection />
      <WillDo lang={lang} title={homePage.ensure} />
      <WillProvide lang={lang} title={homePage.foryou} />
      <Tecno lang={lang} title={homePage.expert} />
      <Services lang={lang} title={homePage.service} />
      <CarouselImage images={images} />
    </div>
  );
}

export default page;
