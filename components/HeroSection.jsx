import Image from "next/image";
import bg from "../public/bg.webp";
import logo from "../public/logo.webp";
import MyDrawer from "./shared/Draw";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background Image"
        priority
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={75}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-custom" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-custom">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative w-[225px] h-[225px] f  ">
            <Image
              src={logo}
              alt="Logo"
              priority
              className="object-contain w-full h-auto"
              sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 30vw"
              fill
              // height={225}
              quality={90}
            />
          </div>
          <p className="text-3xl font-cairo font-bold text-blueColor bg-yellowColor rounded-lg p-2 w-full z-40 text-center  ">
            Dream To App
            <span className="text-orangeColor text-[12px] font-extralight align-super">
              {"  "}
              v1.0
            </span>
          </p>
          <p className="text-3xl font-cairo font-bold text-orangeColor">
            {process.env.NODE_ENV}
          </p>
          <MyDrawer />
        </div>
      </div>
    </div>
  );
}
