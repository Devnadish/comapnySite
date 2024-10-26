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
      className={`flex  max-w-[350px] p-4 min-h-[150px] flex-row items-start justify-center gap-4 rounded-lg border ${borderColor} ${bgColor} hover:border-white/40`}
    >
      {icon}
      <div className="flex flex-col gap-2 w-full">
        <p className={`font-lateef font-semibold text-2xl ${fontColor}`}>
          {titlex}
        </p>
        <p className={`font-lateef text-xl ${fontColor}`}>{subtitlex}</p>
      </div>
    </div>
  );
};

export default InfoBox;
