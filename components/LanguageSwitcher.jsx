"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-evenly gap-4">
        <Button
          onClick={() => {
            router.push(redirectedPathName("ar"));
          }}
          variant="ghost"
          className="flex items-center gap-4"
        >
          <Image
            src={"/assets/locales/saudi-arabia.png"}
            alt="language selected"
            width={24}
            height={24}
          />
        </Button>
        <Button
          onClick={() => {
            router.push(redirectedPathName("en"));
            // redirectedPathName("en");
          }}
          className="flex items-center gap-4"
          variant="ghost"
        >
          <Image
            src={"/assets/locales/united-states.png"}
            alt="language selected"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </div>
  );
}
