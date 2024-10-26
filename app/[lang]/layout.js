import "../../styles/globals.css";
import Navbar from "@/components/header/Navbar";
import dynamic from "next/dynamic";
import { lateef, cairo } from "@/lib/fonts";
import SideMenu from "@/components/SideMenu";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";

const Providers = dynamic(() => import("@/Providers/Provider"));

export const metadata = {
  title: {
    default: "Dream To App - Innovative Web and Mobile Solutions",
    ar: "Dream To App - تطبيق متخصص في تطبيقات الويب والتطبيقات النقرية",
    template: "%s - Dream To App",
  },
  description:
    "Transform your ideas into reality with Dream To App. We specialize in cutting-edge web and mobile solutions tailored to your business needs. Elevate your digital presence with our expert development services.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default function RootLayout({ children, params }) {
  return (
    <html
      lang={params.lang}
      dir={params.lang === "ar" ? "rtl" : "ltr"}
      style={{ colorScheme: "dark" }}
      className="dark"
    >
      <body
        className={`${lateef.variable} ${cairo.variable}  flex flex-col w-full text-white`}
      >
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" w-full z-10 relative">
            <Navbar lang={params.lang} />
            {/* <div
              className={`absolute top-0 left-0 h-full background   flex flex-col w-full text-white -z-1`}
            /> */}
          </div>
          <div className="mb-28 relative">{children}</div>
          <Toaster />
          <SideMenu lang={params.lang} />
        </Providers>
        <GoogleAnalytics gaId="G-S2L434E36T" />
      </body>
    </html>
  );
}
