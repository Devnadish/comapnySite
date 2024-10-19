import CarouselImage from "@/components/shared/CarouselImage";
import { images } from "@/constant/images";
import Services from "@/components/Services";
import Tecno from "@/components/Tecno";
import WillDo from "@/components/WillDo";
import WillProvide from "@/components/WillProvide";
import { gradint1 } from "@/constant/constant";

async function page({ params: { lang } }) {
  return (
    <div
      className={`flex w-full items-center flex-col justify-center   gap-4   px-4 py-6 ${gradint1}  `}
    >
      <WillDo lang={lang} title="We Ensure..." />
      <WillProvide lang={lang} title="Exclusively Yours" />
      <Tecno lang={lang} title="Our Expertise" />
      <Services lang={lang} title="Our Service" />
      <CarouselImage images={images} />
    </div>
  );
}

export default page;
