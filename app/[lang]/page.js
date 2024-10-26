import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { getImages } from "@/components/actions/getImages";
import ProductCarousel from "@/components/shared/ProductCarousel";
import OfferCarousel from "@/components/shared/OfferCarousel";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);

  const awsUrl = "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";

  const [offerImages, productImages] = await Promise.all([
    getImages("offers/"),
    getImages("worksample/"),
  ]);

  const offerImagesUrl = offerImages.map((image) => `${awsUrl}${image.Key}`); // Extracting keys and forming URLs
  const productmagesUrl = productImages.map((image) => `${awsUrl}${image.Key}`); // Extracting keys and forming URLs
  return (
    <>
      <HeroSection />

      <div className="flex w-full items-center flex-col justify-center    gap-4   px-4 py-6">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full flex itemx-center justify-center flex-col ">
          <p className="font-cario font-semibold text-lg text-orangeColor animate-pulse text-center">
            {homePage.offers} <span className="animate-spin">🔥</span>
          </p>

          <OfferCarousel
            images={offerImagesUrl}
            autoPlay={true}
            height={400}
            navigateArrows={false}
            continerHeight={400}
          />
        </div>
        <div className=" w-full flex flex-row items-start justify-center flex-wrap gap-4">
          <Services lang={lang} title={homePage.service} />
          <Tecno lang={lang} title={homePage.expert} />
          <WillProvide lang={lang} title={homePage.foryou} />
          <WillDo lang={lang} title={homePage.ensure} />
        </div>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full ">
          <p className="font-cario  text-xl text-orangeColor">
            {homePage.sample}
          </p>
          <ProductCarousel
            images={productmagesUrl}
            autoPlay={true}
            height={400}
            navigateArrows={false}
            continerHeight={400}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
