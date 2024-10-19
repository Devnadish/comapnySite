import { BiHappyAlt } from "@react-icons/all-files/bi/BiHappyAlt";
import { Package } from "@/components/Package";
import { getDictionary } from "@/lib/dictionary";

async function page({ params: { lang } }) {
  const {
    page: { pricePkg },
  } = await getDictionary(lang);
  return (
    <div className=" flex gap-4 h-full w-full   ">
      <Package
        category={pricePkg.standerd.title}
        offerIcon={<BiHappyAlt size={"1.5rem"} />}
        facility={pricePkg.standerd.facility}
        price={pricePkg.standerd.price}
        cur={pricePkg.standerd.cur}
        subtitle={pricePkg.standerd.subtitle}
        lang={lang}
      />
      <Package
        category={pricePkg.plus.title}
        offerIcon={<BiHappyAlt size={"1.5rem"} />}
        facility={pricePkg.plus.facility}
        price={pricePkg.plus.price}
        cur={pricePkg.plus.cur}
        recommend={true}
        subtitle={pricePkg.plus.subtitle}
        lang={lang}
        hint={pricePkg.plus.hint}
      />
      <Package
        category={pricePkg.advance.title}
        offerIcon={<BiHappyAlt size={"1.5rem"} />}
        facility={pricePkg.advance.facility}
        price={pricePkg.advance.price}
        lang={lang}
        subtitle={pricePkg.advance.subtitle}
      />
    </div>
  );
}

export default page;
