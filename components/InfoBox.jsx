import Link from "next/link";
import React from "react";

const InfoBox = ({
  titlex,
  subtitlex,
  icon,
  bgColor,
  borderColor,
  fontColor,
  more,
}) => {
  return (
    <div
      className={`flex flex-col max-w-[350px] p-4 min-h-[150px]  items-start justify-center gap-4 rounded-lg border ${borderColor} ${bgColor} hover:border-white/40`}
    >
      <div className="flex flex-row gap-2 w-full items-center">
        {icon}
        <p className={`font-cairo font-semibold text-2xl  ${fontColor}`}>
          {titlex}
        </p>
      </div>
      <p className={`font-tajawal font-semibold text-xl ${fontColor}`}>
        {subtitlex}
      </p>
      <Link
        className="text-lg  capitalize self-end text-blueColor font-semibold font-tajawal hover:text-blueColor/80 underline"
        href="#"
      >
        {more}
      </Link>
    </div>
  );
};

export default InfoBox;
