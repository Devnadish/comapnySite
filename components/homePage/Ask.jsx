"use client";
import React from "react";
import { Button } from "./ui/button";

function Ask() {
  return (
    <div className=" w-sm flex justify-center items-center flex-col  rounded-lg border p-4 border-orangeColor gap-4">
      <p className="text-xl text-orangeColor font-cairo font-bold text-wrap text-justify">
        لا تتردد في طرح أي سؤال أو استشارة بشأن منتجاتنا. نحن هنا لخدمتك وسعداء
        بمساعدتك!
      </p>
      <Button className="bg-orangeColor w-[200px] font-cairo text-xl">
        في انتظارك
      </Button>
    </div>
  );
}

export default Ask;
