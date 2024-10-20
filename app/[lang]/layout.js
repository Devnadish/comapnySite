import "../../styles/globals.css";
import Navbar from "@/components/header/Navbar";
import dynamic from "next/dynamic";
import { lateef, cairo, tajawal, luckiest_Guy } from "@/lib/fonts";
import SideMenu from "@/components/SideMenu";
import { GoogleAnalytics } from "@next/third-parties/google";

const Providers = dynamic(() => import("@/Providers/Provider"));

export const metadata = {
  title: "Dream To App - Innovative Web and Mobile Solutions",
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
      <head></head>
      <body
        className={`${cairo.variable} ${lateef.variable} ${luckiest_Guy.variable} ${tajawal.variable} flex flex-col min-h-screen mt-[70px] m-auto w-full items-center justify-center gap-4 text-white`}
        style={{
          background: "linear-gradient(to bottom, #1f2937, #1E62C2FF)", // Adjust colors as needed
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // Keeps the background fixed during scroll
        }}
      >
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-0 w-full z-10">
            <Navbar lang={params.lang} />
          </div>
          <div className="flex-grow pt-[70px] mb-16">{children}</div>
          <SideMenu lang={params.lang} />
        </Providers>
        <GoogleAnalytics gaId="G-S2L434E36T" />
      </body>
    </html>
  );
}
