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
