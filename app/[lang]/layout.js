import "../../styles/globals.css";

import dynamic from "next/dynamic";
import { lateef, cairo } from "@/lib/fonts";

import { GoogleAnalytics } from "@next/third-parties/google";

const Navbar = dynamic(() => import("@/components/header/Navbar"));
const SideMenu = dynamic(() => import("@/components/SideMenu"));
const Providers = dynamic(() => import("@/Providers/Provider"));
const Toaster = dynamic(() =>
  import("@/components/ui/toaster").then((mod) => mod.Toaster)
);

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
        className={`${lateef.variable} ${cairo.variable} flex flex-col w-full text-white`}
      >
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full z-100 relative">
            <Navbar lang={params.lang} />
          </nav>
          {/* Main content area */}
          {/* <main className="mb-28 relative">{children}</main> */}
          <main className="mx-auto  ">
            <div className="flex min-h-screen flex-col items-center  ">
              {children}
            </div>
          </main>
          <Toaster />
          <SideMenu lang={params.lang} />
        </Providers>
        <GoogleAnalytics gaId="G-S2L434E36T" />
      </body>
    </html>
  );
}
