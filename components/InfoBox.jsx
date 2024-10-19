import React from "react";

const InfoBox = ({ titlex, subtitlex, icon }) => {
  return (
    <div className="flex w-full min-w-[350px] min-h-[250px] flex-col items-center justify-center gap-4 rounded-lg border border-white/20 bg-card p-2 hover:border-white/40 ">
      {icon}
      <p className="font-tajawal font-semibold text-lg"> {titlex} </p>
      <p className="font-tajawal line-clamp-4 p-4 text-blue-300 hover:line-clamp-none">
        {subtitlex}
      </p>
    </div>
  );
};

export default InfoBox;
