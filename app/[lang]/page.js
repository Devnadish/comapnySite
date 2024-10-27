import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";
import { getImages } from "@/components/actions/getImages";
import OfferCarousel from "@/components/shared/OfferCarousel";
import ProductCarousel from "@/components/shared/ProductCarousel";

const awsUrl = "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";

const Page = async ({ params: { lang } }) => {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);

  const [offerImages, productImages] = await Promise.all([
    getImages("offers/"),
    getImages("worksample/"),
  ]);

  const offerImagesUrl = offerImages.map((image) => `${awsUrl}${image.Key}`);
  const productImagesUrl = productImages.map(
    (image) => `${awsUrl}${image.Key}`
  );

  return (
    <>
      <HeroSection />

      <main className="flex w-full items-center flex-col justify-center gap-4 px-4 py-6">
        <section className="  w-full flex items-center justify-center flex-col">
          <OfferCarousel
            images={offerImagesUrl}
            autoPlay={true}
            height={400}
            navigateArrows={false}
            containerHeight={400}
          />
        </section>

        <section className="w-full flex flex-row items-start justify-center flex-wrap gap-4">
          <Services lang={lang} title={homePage.service} />
          <Tecno lang={lang} title={homePage.expert} />
          <WillProvide lang={lang} title={homePage.foryou} />
          <WillDo lang={lang} title={homePage.ensure} />
        </section>

        <section className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full">
          <h2 className="font-cario text-xl text-orangeColor">
            {homePage.sample}
          </h2>
          <ProductCarousel
            images={productImagesUrl}
            autoPlay={true}
            height={400}
            navigateArrows={false}
            containerHeight={400}
          />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Page;
