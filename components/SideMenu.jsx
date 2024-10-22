import React from "react";
import WhatsAppButton, {
  ContactUs,
  HomePage,
  WorkProfile,
} from "./shared/WhatsAppButton";
import BuregerMenu from "./header/BuregerMenu";
import { getDictionary } from "@/lib/dictionary";

export default async function SideMenu({ lang }) {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="fixed left-0 bottom-3 w-full h-[60px] flex items-center justify-center ">
      <div className="w-[80%] h-[60px] bg-black/80 rounded-full flex flex-row justify-evenly items-center">
        {/* <BuregerMenu navigation={navigation} lang={lang} /> */}
        {/* <WorkProfile lang={lang} title={navigation.sample} /> */}
        <WhatsAppButton title={navigation.whatapp} />
        <HomePage lang={lang} />
        <ContactUs lang={lang} title={navigation.contact} />
      </div>
    </div>
  );
}
