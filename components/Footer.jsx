import Image from "next/image";
import React from "react";
import {
  IconoirYoutube,
  IcRoundTiktok,
  LineMdInstagram,
  PrimeTwitter,
} from "./icons/SocialMedai";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-greenColor h-[70vh] rounded-lg mb-[100px] w-full">
      <p className="text-lg sm:text-3xl font-cairo font-bold text-orangeColor">
        نطمح للعالمية بكم ومعكم ..
      </p>
      <div className="flex items-center flex-col sm:flex-row justify-around w-full ">
        <div className="flex flex-col items-start justify-start font-cairo text-lg sm:text-2xl gap-1  font-bold text-blueColor">
          <p> موسسة عبداللة سالمين محمد بادخن</p>
          <p> الرمز المعتمد : FL-674391332</p>
          <p> جميع الحقوق محفوظة</p>
        </div>

        <div className="flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="/assets/legal/docQr.png"
            alt="logo"
            width={150}
            height={112.5}
          />
        </div>
      </div>
      <SocialMedi />
    </div>
  );
}

export default Footer;

const SocialMedi = () => {
  return (
    <div className="flex items-center justify-center gap-6 mb-4">
      <LineMdInstagram width={30} height={30} />{" "}
      <IconoirYoutube width={30} height={30} />{" "}
      <IcRoundTiktok width={30} height={30} />
      <PrimeTwitter width={30} height={30} />
    </div>
  );
};
