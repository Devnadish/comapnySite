import React from "react";

const InfoBox = ({
  titlex,
  subtitlex,
  icon,
  bgColor,
  borderColor,
  fontColor,
}) => {
  return (
    <div
      className={`flex w-full p-4 min-h-[50px] flex-row items-start justify-center gap-4 rounded-lg border ${borderColor} ${bgColor} hover:border-white/40`}
    >
      {icon}
      <div className="flex flex-col gap-2 w-full">
        <p className={`font-lateef font-semibold text-xl ${fontColor}`}>
          {titlex}
        </p>
        <p className={`font-lateef text-lg ${fontColor}`}>{subtitlex}</p>
      </div>
    </div>
  );
};

export default InfoBox;
