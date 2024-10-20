"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={`/`} prefetch={false}>
      <div className="relative w-[80px] h-[80px] bg-white rounded-xl">
        <Image
          src={"/assets/logo.png"}
          alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
          fill
          className="object-cover"
          // objectFit="contain" // This ensures the image maintains its aspect ratio
          priority
          // className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
