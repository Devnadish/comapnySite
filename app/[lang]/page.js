import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSection from "@/components/homePage/HeroSection";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";
import { getImages } from "@/components/actions/getImages";
import ProductCarousel from "@/components/shared/ProductCarousel";

// Dynamically import components that are not needed for initial render
const Services = dynamic(() => import("@/components/homePage/Services"));
const Tecno = dynamic(() => import("@/components/homePage/Tecno"));
const WillDo = dynamic(() => import("@/components/homePage/WillDo"));
const WillProvide = dynamic(() => import("@/components/homePage/WillProvide"));

const awsUrl = "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";

// Mark the component as async
export default async function Page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);

  const [offerImagesUrl, productImagesUrl] = await Promise.all([
    getImages("offers/"),
    getImages("worksample/"),
  ]);

  return (
    <>
      {/* <HeroSection /> */}

      <main className="flex w-full items-center flex-col justify-center gap-4 px-4 py-6">
        {/* Offer Carousel */}
        <Suspense fallback={<div>Loading offers...</div>}>
          <section className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full">
            <ProductCarousel
              images={offerImagesUrl}
              autoPlay={true}
              height={400}
              navigateArrows={false}
              containerHeight={400}
            />
          </section>
        </Suspense>

        <section className="w-full flex flex-row items-start justify-center flex-wrap gap-4">
          <Suspense fallback={<div>Loading services...</div>}>
            <Services
              lang={lang}
              title={homePage.service}
              more={homePage.more}
            />
          </Suspense>
          {/* <Suspense fallback={<div>Loading technologies...</div>}>
            <Tecno lang={lang} title={homePage.expert} />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading provisions...</div>}>
            <WillProvide lang={lang} title={homePage.foryou} />
          </Suspense>
          <Suspense fallback={<div>Loading guarantees...</div>}>
            <WillDo lang={lang} title={homePage.ensure} />
          </Suspense> */}
        </section>

        <Suspense fallback={<div>Loading samples...</div>}>
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
        </Suspense>

        <Footer />
      </main>
    </>
  );
}
