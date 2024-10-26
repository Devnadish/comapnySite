"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";
import arImg from "../public/assets/locales/saudi-arabia.png";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <div className="flex items-center gap-4 w-full justify-center ">
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
  );
}
