// "use client";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link
      href={`/`}
      prefetch={false}
      className="rounded-sm w-[15%]  h-[100px] flex items-center justify-center bg-card border border-white/20 p-2 px-4 capitalize  text-foreground hover:bg-primary"
    >
      <div className=" relative flex h-[50px] w-[50px] items-center justify-center rounded-lg  shadow-2xl">
        <Image
          src={"/assets/logo.png"}
          alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
          fill
          priority
        />
      </div>
    </Link>
  );
};
export default Logo;
