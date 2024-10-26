import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WorkGallary from "@/components/header/WorkGallary";
import { getImages } from "@/components/actions/getImages";
import CarouselImage from "@/components/shared/CarouselImage";

async function page({ params: { lang } }) {
  const {
    page: {
      about: { homePage },
    },
  } = await getDictionary(lang);
  const awsUrl = "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";
  const offerImages = await getImages("offers/");
  const offerImagesUrl = offerImages.map((image) => `${awsUrl}${image.Key}`); // Extracting keys and forming URLs

  return (
    <>
      <HeroSection />

      <div className="flex w-full items-center flex-col justify-center    gap-4   px-4 py-6">
        <CarouselImage
          images={offerImagesUrl}
          autoPlay={true}
          height={400}
          navigateArrows={false}
          continerHeight={400}
        />
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

// const baseUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_BUCKET_REGION}.amazonaws.com`;
// const thumbnailBaseUrl = `${process.env.NEXT_PUBLIC_AWS_THUMBNAIL_ENDPOINT}`;
// const tstImage1 = `${baseUrl}/cnc/1.jpg`;
// const tstImage2 = `${thumbnailBaseUrl}/cnc/2.jpg`;
//  {
//    /* <div className="flex items-center justify-center w-full mt-10 border ">
//         <p>Test Busckt s3</p>
//         <Image
//           src={tstImage1}
//           width={200}
//           height={200}
//           className="object-cover p-4 rounded-lg border-2 border-red-500"
//           alt="test"
//         />
//       </div> */
//  }
// {
//   /* <div className="flex items-center justify-center w-full mt-10 border ">
//   <p>Test Busckt s3 optmized</p>
//   <Image
//     src={tstImage2}
//     width={200}
//     height={200}
//     className="object-cover p-4 rounded-lg border-2 border-red-500"
//     alt="test"
//   />
// </div>; */
// }

{
  /* <div className="animate-pulse w-full h-full bg-gray-200 rounded-lg"></div>; */
}
