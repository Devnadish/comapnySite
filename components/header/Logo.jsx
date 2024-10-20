"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

const Logo = () => {
  return (
    <Link href={`/`} prefetch={false}>
      <div className="relative w-[80px] h-[80px] bg-white rounded-xl">
        <Image
          src={logo}
          alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
          width={80}
          height={80}
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
